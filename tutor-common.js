
const timePerQuestion = 100; // 10 = 1 second

const minQ = 501;
const maxQ = 1000;

document.addEventListener('keydown', handleArrowKeys);

function handleArrowKeys(event) {
  const output = document.getElementById('output');
  
  switch(event.key) {
    case 'ArrowLeft':
      onAnswer(1);
      break;
    case 'ArrowRight':
      onAnswer(2);
      break;
    case 'ArrowUp':
      onAnswer(0);
      break;
    case 'ArrowDown':
      onAnswer(3);
      break;
  }
}



const data =
{
	dict : [],  // format:  [0:q, 1:a]
	ansCorrectly : 0,
	ansIncorrectly : 0,
	questionCount : 0,
	answerCount : 0,
	timeRemaining : 0,
	debugInfo : "",
	debugInfoFlag : true,
	currentIndex : 0,
	answerIndices : [0,0,0,0],
	question : undefined,
	answers : undefined,
	summary : undefined,
	wset : undefined,
	errSet : new Set(),
};


function startup1()
{
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

	if (! data.wset)
	{
		// const spl1 = document.cookie.split(';');
		// for (let a of spl1)
		// {
		// 	console.log("a:", a);
		// 	const spl2 = a.split('=');
		// 	if (spl2.length == 2 && spl2[0].trim() == DictCookieName)
		// 	{
		// 		data.wset = JSON.parse(spl2[1]);
		// 	}
		// }
		const tmp = localStorage.getItem(DictCookieName);
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
	while (data.wset.length < minQ)
//	while (new Set(data.wset).size < minU)
	{
		data.wset.push(Math.floor(Math.random()*N));
	}
	
	// document.cookie = DictCookieName 
	// 	+ "="
	// 	+ JSON.stringify(data.wset)
	// 	+ "; expires=Thu, 18 Dec 3000 12:00:00 UTC";
	
	localStorage.setItem(DictCookieName, JSON.stringify(data.wset));

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


	data.answers[0].innerHTML = data.dict[data.answerIndices[0]][1];
	data.answers[1].innerHTML = '<< '+data.dict[data.answerIndices[1]][1] + ' <<';
	data.answers[2].innerHTML = '>> '+data.dict[data.answerIndices[2]][1] + ' >>';
	data.answers[3].innerHTML = data.dict[data.answerIndices[3]][1];

	data.timeRemaining = timePerQuestion;
	showDebug();
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
	
	const answered = data.dict[data.answerIndices[x]][1];
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
		data.errSet.add(data.answerIndices[x]);
		
	}
	showDebug();
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


// not used
//function calcCorrectnessRatio()
//{
//	const res = 1.0*data.ansCorrectly 
//		/ (data.ansCorrectly + data.ansIncorrectly) || 0;
//	return res;
//}

function calcErrRatio()
{
	const res = 1.0* data.ansIncorrectly/data.questionCount || 0;
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
	
	let clipbrb = '';

	data.debugInfo = ''
	+ 'w:'+data.wset.length  + ' u:'+wUnique
	+ ' q:' + data.questionCount + ' err:'+data.ansIncorrectly
	+ '('+Math.round(100*calcErrRatio())+'%)'
	+ '<br>n:'+data.dict.length
	+ ' ver:5.01'
	+ ' ' + window.location.search
	+ '<br>';

	const errArray = [...data.errSet];
	data.debugInfo += '' + errArray.length;
	for (let e of errArray)
	{
		//data.debugInfo += '<br>' + data.dict[e][0] + ' - ' + data.dict[e][1];
		clipbrb += data.dict[e][0] + ' - ' + data.dict[e][1] + '\n';
	}
	
	if (data.debugInfoFlag) 
		{ 
			data.summary.innerHTML = data.debugInfo;
			//navigator.clipboard.writeText(clipbrb);
			
			navigator.clipboard
				.writeText(clipbrb)
				.then(() => {
				//alert("successfully copied");
				})
				.catch(() => {
				//alert("something went wrong");
				});

		}
	else{ data.summary.innerHTML = ''; }	
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
	speechSynthesis && typeof say === "function" && say(txt + ', ' + txt + ', ' + txt + ', ' + txt + ', ' + txt);
}

function shutUp() { speechSynthesis && speechSynthesis.cancel(); }

function shuffle(array) { array.sort(() => Math.random() - 0.5); }

