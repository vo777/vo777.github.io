
const data =
{
	dict : [],  // format:  [0:q, 1:a, 2:score]
	ansCorrectly : 0,
	ansIncorrectly : 0,
	questionCount : 0,
	answerCount : 0,
	timeRemaining : 0,
	debugInfo : "",
	debugInfoFlag : false,
	currentIndex : -1,
	answerIndices : [0,0,0,0],
	errFlag : true,      // true  required for proper first question
	noAnswerFlag: false, // false required for proper first question
	question : undefined,
	answers : undefined,
	summary : undefined
};

const timePerQuestion = 70; // 10 = 1 second


function startup()
{
	let langCodes = window.location.search;
	
	if (langCodes.length == 0)
	{
		langCodes = "s";
	}
	langCodes = langCodes.toLowerCase();

	if (langCodes.includes('z'))
	{
		langCodes += "sq dfipu elr";// all west eur
	}
	
	if (langCodes.includes('s')) 
	{	
		data.dict = data.dict.concat(spanish);
		data.dict = data.dict.concat(spanish001);
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
	if (langCodes.includes('o')) {data.dict = data.dict.concat(polish);} 
	if (langCodes.includes('l')) {data.dict = data.dict.concat(latin);} 
	if (langCodes.includes('m')) {data.dict = data.dict.concat(malay);} 
	if (langCodes.includes('n')) {data.dict = data.dict.concat(indonesian);} 
	if (langCodes.includes('p')) {data.dict = data.dict.concat(portuguese);} 
	if (langCodes.includes('q')) 
	{
		loadSynonyms(data.dict, spanishSynonims);
		data.dict = data.dict.concat(spanishQ);
	} 
	if (langCodes.includes('r')) {data.dict = data.dict.concat(romanian);} 
	if (langCodes.includes('t')) {data.dict = data.dict.concat(turkish);} 
	if (langCodes.includes('u')) {data.dict = data.dict.concat(dutch);} 
	if (langCodes.includes('v')) {data.dict = data.dict.concat(vietnamese);} 

	if (langCodes.includes('0')) {data.dict = data.dict.concat(lang_0);} 

	console.log('dictionary loaded. checking...');
	
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
		data.dict[i][2] = Math.random();
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

function worker()
{
	--data.timeRemaining;
	if (data.timeRemaining < 0) {newQuestion();}
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
/**
*    generate new  currentIndex  and  answerIndices
*/
function newQuestion()
{
	++data.questionCount;
	
	if (data.noAnswerFlag && calcCorrectnessRatio() > 0.7)
	{
		for (let i=0; i<4; ++i)
		{
			data.dict[data.answerIndices[i]][2] 
				= data.dict[0][2] - 1e-6*Math.random();
		}	
	}
	
	data.noAnswerFlag = true;
	
	if (data.errFlag)
	{
		data.currentIndex = 0;
		data.dict.sort((a,b)=>a[2] - b[2]);
	}
	else
	{
		data.currentIndex = (++data.currentIndex) % data.dict.length;
	}
	
	data.errFlag = false;
	
	if (data.currentIndex >= 5)
	{
		data.currentIndex = Math.floor(Math.random() * data.dict.length);
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
		/ (data.ansCorrectly + data.ansIncorrectly);
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
	+ '('+Math.round(100*calcCorrectnessRatio())+'%)'
	+ ' n:'+data.dict.length
	+ ' i:'+data.currentIndex
	+ ' ver:3.07'
	+ ' ' + window.location.search
	+ '';
	
	if (data.debugInfoFlag) { data.summary.innerHTML = data.debugInfo; }
	else{ data.summary.innerHTML = ''; }	
}

function onAnswer(x)
{
	++data.answerCount;
	data.noAnswerFlag = false;

	const answered = data.answers[x].innerHTML;
	const correctAnswer = data.dict[data.currentIndex][1];
		
	if (answered == correctAnswer)
	{
		++data.ansCorrectly;
		if (!data.errFlag)
		{
			const newIndex = 20+data.currentIndex;
			// newIndex = a reasonable number larger than the current
			console.log('index change:', data.currentIndex, newIndex);
			data.dict[data.currentIndex][2] = data.dict[newIndex][2] 
				+ 1e-6*Math.random(); 
		}
		data.timeRemaining = 10;
		for (let i=0; i<4; ++i)
		{
			data.answers[i].innerHTML = correctAnswer;
		}
	}
	else
	{
		data.errFlag = true;
		++data.ansIncorrectly;
		if (data.currentIndex > 5)
		{
			const offset = 1;
			const step = 2;
			for (let i=0; i<4; ++i)
			{
				const a = data.answerIndices[i];
				const b = offset+step*i;
				console.log('index change:', a, b);
				data.dict[a][2] = data.dict[b][2] + 1e-6*Math.random();
			}
		}

		data.answers[x].innerHTML = "-";
		data.timeRemaining = timePerQuestion;
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

// this 'shuffle' is *not* reliable for long arrays
// it is used here only to shuffle answers (4 items)
function shuffle(array) { array.sort(() => Math.random() - 0.5); }
