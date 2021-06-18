
const data =
{
	dict : [],  // format:  [0:q, 1:a]
	ansCorrectly : 0,
	ansIncorrectly : 0,
	questionCount : 0,
	answerCount : 0,
	timeRemaining : 0,
	debugInfo : "",
	debugInfoFlag : false,
	currentIndex : 0,
	answerIndices : [0,0,0,0],
	question : undefined,
	answers : undefined,
	summary : undefined,
	wset : undefined
};

const timePerQuestion = 70; // 10 = 1 second

const minQ = 400;
const maxQ = 420; // limited by cookie size


function startup()
{
	let langCodes = window.location.search;
	
	if (langCodes.length == 0)
	{
		langCodes = "s";
	}
	langCodes = langCodes.toLowerCase();

	if (langCodes.includes('*'))
	{
		langCodes += "-bcdef--ijklmnopqrstuvwxyz0123456789";
		// all except agh
	}
	
	if (langCodes.includes('z'))
	{
		langCodes += "sq dfipu elr";// all west eur
	}
	
	if (langCodes.includes('a')) {data.dict = data.dict.concat(arabic);} 
	// running out of letters...
	if (langCodes.includes('b')) {data.dict = data.dict.concat(hungarian);} 
	if (langCodes.includes('c')) {data.dict = data.dict.concat(czech);} 
	if (langCodes.includes('d')) {data.dict = data.dict.concat(german);} 
	if (langCodes.includes('e')) {data.dict = data.dict.concat(esperanto);} 
	if (langCodes.includes('f')) {data.dict = data.dict.concat(french);} 
	if (langCodes.includes('g')) {data.dict = data.dict.concat(greek);} 
	if (langCodes.includes('h')) {data.dict = data.dict.concat(hebrew);} 
	if (langCodes.includes('i')) {data.dict = data.dict.concat(italian);} 
	if (langCodes.includes('l')) {data.dict = data.dict.concat(latin);} 
	if (langCodes.includes('m')) {data.dict = data.dict.concat(malay);} 
	if (langCodes.includes('n')) {data.dict = data.dict.concat(indonesian);} 
	if (langCodes.includes('o')) {data.dict = data.dict.concat(polish);} 
	if (langCodes.includes('p')) {data.dict = data.dict.concat(portuguese);} 
	if (langCodes.includes('q')) 
	{
		// loadSynonyms -- moved to the end 
//		loadSynonyms(data.dict, spanishSynonims);
		data.dict = data.dict.concat(spanishQ);
	}
	if (langCodes.includes('r')) {data.dict = data.dict.concat(romanian);} 
	if (langCodes.includes('s')) 
	{	
		data.dict = data.dict.concat(spanish);
		data.dict = data.dict.concat(spanish001);
	}		
	if (langCodes.includes('t')) {data.dict = data.dict.concat(turkish);} 
	if (langCodes.includes('u')) {data.dict = data.dict.concat(dutch);} 
	if (langCodes.includes('v')) {data.dict = data.dict.concat(vietnamese);} 
	if (langCodes.includes('x')) {data.dict = data.dict.concat(tagalog);} 
	if (langCodes.includes('y')) {data.dict = data.dict.concat(interlingua);} 

	if (langCodes.includes('0')) {data.dict = data.dict.concat(lang_0);} 

	
	// remove dupes
	for (let i=0; i<data.dict.length; ++i)
	{
		if (data.dict[i].length != 2)
		{
			console.log('format: ' + data.dict[i])
		}
		if (data.dict[i].length != 2
		|| data.dict[i][0].toLowerCase().trim() 
				=== data.dict[i][1].toLowerCase().trim()
		|| data.dict[i][0] === ""
		|| data.dict[i][1] === ""
		)
		{
			let tmp = data.dict.splice(i, 1);
			i--;
			console.log('skip: ' + tmp)
		}
	}

	if (langCodes.includes('-')) // invert the word pairs if requested
	{
		for (let arr of data.dict)
		{
			[arr[0], arr[1]] = [arr[1], arr[0]];
		}
	}

	if (langCodes.includes('+')) // dupe the word pairs if requested
	{
		const N = data.dict.length;
		for (let i=0; i<N; ++i)
		{
			// push inverted pair
			data.dict.push([data.dict[i][1], data.dict[i][0]]);
		}
	}
	
	if (langCodes.includes('q')) 
	{
		// synonyms are already inverted and duped, so had to move
		// this line to the end
		loadSynonyms(data.dict, spanishSynonims);
	} 
	
	

	// normalize
	for (let i=0; i<data.dict.length; ++i)
	{
		data.dict[i][0] = data.dict[i][0].toLowerCase().trim();
		data.dict[i][1] = data.dict[i][1].toLowerCase().trim();
	}
	console.log('dictionary loaded and checked');
	
	data.timeRemaining = 0;
	
	data.question = document.getElementById("question");
	data.answers = [];
	data.answers[0] = document.getElementById("answer0");
	data.answers[1] = document.getElementById("answer1");
	data.answers[2] = document.getElementById("answer2");
	data.answers[3] = document.getElementById("answer3");
	data.summary = document.getElementById("summary");
	
	setInterval(worker, 100);
}

function loadSynonyms(dest, src)
{
	for (let line of src)
	{
		line = line.replaceAll('.', ',');
		let ll = line.split(':');
		//console.log('loadSynonyms ' + line);
		if (ll.length != 2) { continue; }
		//console.log(ll);
		let value = ll[0].trim();
		if (value.length == 0) { continue; }
		for (let key of ll[1].split(','))
		{
			key = key.trim();
			if (key.length == 0) { continue; }
			dest.push([key, value]);
			dest.push([value, key]);
		}
	}
}


function worker()
{
	--data.timeRemaining;
	if (data.timeRemaining < 0) {newQuestion();}
}

/**
*    generate new  currentIndex  and  answerIndices
*/
function newQuestion()
{
	const CookieName = 'workset';
	
	if (! data.wset)
	{
		const spl1 = document.cookie.split(';');
		for (let a of spl1)
		{
			console.log("a:", a);
			const spl2 = a.split('=');
			if (spl2.length == 2 && spl2[0].trim() == CookieName)
			{
				data.wset = JSON.parse(spl2[1]);
			}
		}
		console.log("parsed wset:", data.wset);
	}
	else
	{
		//console.log("no need to parse wset:", data.wset);
	}
	
	const N = data.dict.length;
	
	if (!data.wset)
	{
		// cookie not found
		data.wset = [];
	}
	
	while (data.wset.length < minQ)
	{
		data.wset.push(Math.floor(Math.random()*N));
	}
	
	document.cookie = CookieName 
		+ "="
		+ JSON.stringify(data.wset)
		+ "; expires=Thu, 18 Dec 3000 12:00:00 UTC";
	
	++data.questionCount;
	
	
	// anti-repeat
	const oldQ = data.dict[data.currentIndex][0];

	for (let i=0; i<100; ++i)
	{
		shuffle(data.wset);
		// in case the dictionary changed since the last run:
		data.wset[0] = data.wset[0] % N;
		data.currentIndex = data.wset[0];
		if (data.dict[data.currentIndex][0] != oldQ) break;
	}

	console.log(data.currentIndex, ':', data.dict[data.currentIndex]);
	
	data.answerIndices 
			= genRandomIncorrectAnswers(data.currentIndex, data.dict);
	data.question.innerHTML = data.dict[data.currentIndex][0];
	for (let i=0; i<4; ++i)
	{
		data.answers[i].innerHTML = data.dict[data.answerIndices[i]][1];
	}
	data.timeRemaining = timePerQuestion;
	showDebug();
}

function calcCorrectnessRatio()
{
	const res = 1.0*data.ansCorrectly 
		/ (data.ansCorrectly + data.ansIncorrectly) || 0;
	return res;
}

function toggleDebug()
{
	data.debugInfoFlag = !data.debugInfoFlag;
	showDebug();
}	

function showDebug()
{
	data.debugInfo = ''
	+ data.questionCount + ', '
	+ data.ansCorrectly+'/'+data.answerCount
	+ '('+(100*calcCorrectnessRatio()).toFixed(1)+'%)'
	+ '<br>n:'+data.dict.length
	+ '<br>w:'+data.wset.length
	+ '<br>ver:5.01'
	+ ' ' + window.location.search
	+ '';
	
	if (data.debugInfoFlag) { data.summary.innerHTML = data.debugInfo; }
	else{ data.summary.innerHTML = ''; }	
}

function onAnswer(x)
{
	if (data.currentIndex != data.wset[0])
	{
		// user accidentally double clicked on correct answer
		data.timeRemaining = 10;
		return;
	}
	
	++data.answerCount;
	
	const answered = data.answers[x].innerHTML;
	const correctAnswer = data.dict[data.currentIndex][1];
	
	if (answered == correctAnswer)
	{
		data.timeRemaining = 10;
		
		++data.ansCorrectly;
		for (let i=0; i<4; ++i)
		{
			data.answers[i].innerHTML = correctAnswer;
		}
		
		data.wset.shift(); // rm wset[0]
	}
	else
	{
		++data.ansIncorrectly;
		data.answers[x].innerHTML = "-";
		data.timeRemaining = timePerQuestion;
		
		if (data.wset.length < maxQ)
		{
			data.wset.push(data.currentIndex);
			data.wset.push(data.currentIndex);
		}
		
	}
	showDebug();
}


function genRandomIncorrectAnswers(m, dict)
{
	let res = [m];
	let anticollision = dict[m][0].toLowerCase().trim();
	anticollision += dict[m][1].toLowerCase().trim();
	
	for (let i=0; i<3; ++i)
	{
		let randomIndex;
		for (let k=0; k<100;++k)
		{
			randomIndex = Math.floor(Math.random()*dict.length);
			if (  (! anticollision.includes(dict[randomIndex][0].toLowerCase().trim()) )
			&&
			(! anticollision.includes(dict[randomIndex][1].toLowerCase().trim())) ) 
			{ 
				break;
			}
		}
		anticollision += dict[randomIndex][0].toLowerCase().trim();
		anticollision += dict[randomIndex][1].toLowerCase().trim();
		res.push(randomIndex);
	}
	//console.log('anticollision:' + anticollision);
	shuffle(res);
	shuffle(res); // for good measure
	return res;
}

function shuffle(array) { array.sort(() => Math.random() - 0.5); }

