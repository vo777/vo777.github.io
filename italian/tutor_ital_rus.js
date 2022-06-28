
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
	wset : undefined,
	errSet : new Set(),
};

const timePerQuestion = 200; // 10 = 1 second

const minQ = 10;
const maxQ = 10000; // limited by cookie size


function startup()
{
	// parse
	data.dict = data.dict.concat(ItalRus);

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
	shutUp();

	const CookieName = 'ital_rus_set';
	
	if (! data.wset)
	{
		// const spl1 = document.cookie.split(';');
		// for (let a of spl1)
		// {
		// 	console.log("a:", a);
		// 	const spl2 = a.split('=');
		// 	if (spl2.length == 2 && spl2[0].trim() == CookieName)
		// 	{
		// 		data.wset = JSON.parse(spl2[1]);
		// 	}
		// }
		const tmp = localStorage.getItem(CookieName);
		if (tmp) { data.wset = JSON.parse(tmp); }
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
//	while (data.wset.length < minQ)
	while (new Set(data.wset).size < minQ)
	{
		data.wset.push(Math.floor(Math.random()*N));
	}
	
	// document.cookie = CookieName 
	// 	+ "="
	// 	+ JSON.stringify(data.wset)
	// 	+ "; expires=Thu, 18 Dec 3000 12:00:00 UTC";
	
	localStorage.setItem(CookieName, JSON.stringify(data.wset));

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
	
	say3();

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
	const wUnique = new Set(data.wset).size;
	const wCurrent 
		= data.wset.filter((v) => (v === data.currentIndex)).length;
	
	data.debugInfo = ''
	+ 'w:'+data.wset.length+' '+wUnique+' '+wCurrent
	+ '<br>' + data.questionCount + ', '
	+ data.ansCorrectly+'/'+data.answerCount
	+ '('+(100*calcCorrectnessRatio()).toFixed(1)+'%)'
	+ '<br>n:'+data.dict.length
	+ '<br>ver:5.01'
	+ ' ' + window.location.search
	+ '<br>';

	const errArray = [...data.errSet];
	for (let e of errArray)
	{
		data.debugInfo += '<br>' + data.dict[e][0] + ' - ' + data.dict[e][1];
	}
	
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
		say3();
		++data.ansIncorrectly;
		data.answers[x].innerHTML = "-";
		data.timeRemaining = timePerQuestion;
		
		if (data.wset.length < maxQ)
		{
			data.wset.push(data.currentIndex);
			data.wset.push(data.currentIndex);
			data.wset.push(data.currentIndex);
			data.wset.push(data.currentIndex);
			data.wset.push(data.currentIndex);
			data.wset.push(data.answerIndices[x]);
		}

		data.errSet.add(data.currentIndex);
		
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

function say3()
{
	const txt = data.dict[data.currentIndex][0];
	say(txt + ', ' + txt + ', ' + txt);
}

function shutUp() { speechSynthesis.cancel(); }

function shuffle(array) { array.sort(() => Math.random() - 0.5); }

