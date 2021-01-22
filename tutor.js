
let timeRemaining;
let question, answers, summary;
let correctAnswer = "";

let answerCount = 0;

let dict = [];

let currentIndex = 0;
let qq = [];
const maxQ = 20;
let noCorrectAnswer;

let wCount = 0;

let debugInfo = "";

function startup()
{
	let langCodes = window.location.search;
	
	if (langCodes.length == 0)
	{
		dict = dict.concat(spanish);
		dict = dict.concat(spanish001);
		dict = dict.concat(spanishQ);
		loadSynonyms(dict, spanishSynonims);
		
		dict = dict.concat(italian);
		dict = dict.concat(portuguese);
		dict = dict.concat(french);
		dict = dict.concat(german);
	}
	else
	{
		langCodes = langCodes.toLowerCase();
		if (langCodes.includes('s')) 
		{	
			dict = dict.concat(spanish);
			dict = dict.concat(spanish001);
		}
		if (langCodes.includes('1')) {loadSynonyms(dict, spanishSynonims);} 
		
		if (langCodes.includes('c')) {dict = dict.concat(czech);} 
		if (langCodes.includes('d')) {dict = dict.concat(german);} 
		if (langCodes.includes('f')) {dict = dict.concat(french);} 
		if (langCodes.includes('g')) {dict = dict.concat(greek);} 
		if (langCodes.includes('h')) {dict = dict.concat(hebrew);} 
		if (langCodes.includes('i')) {dict = dict.concat(italian);} 
		if (langCodes.includes('l')) {dict = dict.concat(polish);} 
		if (langCodes.includes('m')) {dict = dict.concat(malay);} 
		if (langCodes.includes('n')) {dict = dict.concat(indonesian);} 
		if (langCodes.includes('p')) {dict = dict.concat(portuguese);} 
		if (langCodes.includes('q')) {dict = dict.concat(spanishQ);} 
		if (langCodes.includes('r')) {dict = dict.concat(romanian);} 
		if (langCodes.includes('t')) {dict = dict.concat(turkish);} 
		
	}
	
	// remove dupes
	for (let i=0; i<dict.length; ++i)
	{
		if (dict[i][0].toUpperCase() === dict[i][1].toUpperCase()
		|| dict[i][0] === ""
		|| dict[i][1] === ""
		)
		{
			dict.splice(i, 1);
			i--;
		}
	}
	
	timeRemaining = 0;
	
	question = document.getElementById("question");
	answers = [];
	answer[0] = document.getElementById("answer0");
	answer[1] = document.getElementById("answer1");
	answer[2] = document.getElementById("answer2");
	answer[3] = document.getElementById("answer3");
	summary = document.getElementById("summary");
	
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

function newQuestion()
{
	let n = dict.length;
	
	while (qq.length < maxQ)
	{
		qq.push(Math.floor(Math.random()*n));
		++wCount;
	}
	

	if (noCorrectAnswer)
	{
		qq.push(currentIndex);
		qq.push(currentIndex);
		qq.push(currentIndex);
	}
	else
	{
		let i = Math.floor(Math.random()*qq.length);
		currentIndex = qq.splice(i, 1)[0];
	}

	let indices = genRandomAnswers(currentIndex, dict);
	
	question.innerHTML = dict[currentIndex][0];
	correctAnswer = dict[currentIndex][1];
	
	question.bgColor = "white";
	for (let i=0; i<4; ++i)
	{
		answer[i].innerHTML = dict[indices[i]][1];
		answer[i].bgColor = "white";
	}
	
	timeRemaining = 100;
	noCorrectAnswer = true;
	
	debugInfo = ''
	+ ' w:'+(wCount-maxQ)
	+ ' a:'+answerCount
	+ ' n:'+n
	+ ' q:'+qq.length
	+ ' u:'+[...new Set(qq)].length
	+ '  ' + window.location.search
	+ '';
	
	summary.innerHTML = '';
	
		
}

function showDebug()
{
	summary.innerHTML = debugInfo;
}

function answer(x)
{
	++answerCount;
	answered = answer[x].innerHTML;
	
	if (answered == correctAnswer)
	{
		noCorrectAnswer = false;
		question.bgColor = "#CCFFCC";
		//answer[x].bgColor = "#99FF99";
		timeRemaining = 20;
		for (let i=0; i<4; ++i)
		{
//			if (i != x) {answer[i].innerHTML = "-";}
			answer[i].innerHTML = correctAnswer;
			answer[i].bgColor = "#CCFFCC";
		}
	}
	else
	{
		answer[x].innerHTML = "-";
		timeRemaining = 50;
		qq.push(currentIndex);
		qq.push(currentIndex);
		qq.push(currentIndex);
		qq.push(currentIndex);
		qq.push(currentIndex);
	}

}


function worker()
{
	--timeRemaining;
	if (timeRemaining < 0) {newQuestion();}
}

function genRandomAnswers(m, dict)
{
	
	let res = [m];
	let anticollision = dict[m][0].toLowerCase().trim();
	anticollision += dict[m][1].toLowerCase().trim();
	
	for (let i=0; i<3; ++i)
	{
		let randomIndex;
		for (let k=0; k<10;++k)
		{
			randomIndex = Math.floor(Math.random()*dict.length);
			if (  (! anticollision.includes(dict[randomIndex][0].toLowerCase().trim()) )
			&&
			(! anticollision.includes(dict[randomIndex][1].toLowerCase().trim())) ) 
			{ 
				break;
			}
			//console.log('collision: ' +  dict[randomIndex][1] + '//' + anticollision);
		}
		anticollision += dict[randomIndex][0].toLowerCase().trim();
		anticollision += dict[randomIndex][1].toLowerCase().trim();
		res.push(randomIndex);
	}
	//console.log('ac:' + anticollision);
	
	
	
	shuffle(res);
	shuffle(res); // for good measure
	
	return res;
}

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}