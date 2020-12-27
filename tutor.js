
let timeRemaining;
let question, answers, summary;
let correctAnswer = "";

let perf = 50;
let answerCount = 0;

let dict = [];

let currentIndex = 0;
let qq = [];
let maxQ = 100;
let noAnswer;

let wCount = 0;

function startup()
{
	let langCodes = window.location.search;
	
	if (langCodes.length == 0)
	{
		dict = dict.concat(spanish);
		dict = dict.concat(spanish001);
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
		if (langCodes.includes('i')) {dict = dict.concat(italian);} 
		if (langCodes.includes('p')) {dict = dict.concat(portuguese);} 
		if (langCodes.includes('f')) {dict = dict.concat(french);} 
		if (langCodes.includes('d')) {dict = dict.concat(german);} 
		if (langCodes.includes('g')) {dict = dict.concat(greek);} 
		if (langCodes.includes('n')) {dict = dict.concat(indonesian);} 
		if (langCodes.includes('m')) {dict = dict.concat(malay);} 
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
	

	if (noAnswer)
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

	let indices = genRandomAnswers(n, currentIndex);
	
	question.innerHTML = dict[currentIndex][0];
	correctAnswer = dict[currentIndex][1];
	
	for (let i=0; i<4; ++i)
	{
		answer[i].innerHTML = dict[indices[i]][1];
		answer[i].bgColor = "white";
	}
	
	timeRemaining = 100;
	noAnswer = true;
	
	summary.innerHTML = 'p:' + Math.round(10*perf)/10
	+ ' w:'+(wCount-maxQ)
	+ ' a:'+answerCount
	+ ' n:'+n
	+ ' q:'+qq.length
	+ ' u:'+[...new Set(qq)].length
	+ '  ' + window.location.search
	;
	
		
}

function answer(x)
{
	noAnswer = false;
	++answerCount;
	answered = answer[x].innerHTML;
	
	if (answered == correctAnswer)
	{
		answer[x].bgColor = "#99FF99";
		timeRemaining = 20;
		for (let i=0; i<4; ++i)
		{
			if (i != x) {answer[i].innerHTML = "-";}
		}
		perf += 0.05*(100-perf);
	}
	else
	{
		answer[x].innerHTML = "-";
		timeRemaining = 50;
		perf -= 0.05*perf;
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

function genRandomAnswers(n, m)
{
	let bucket = [];
	
	for (let i=0; i<n; ++i) {
		if (i != m)
		{
			bucket.push(i);
		}
	}
	
	let res = [m];
	
	for (let i=0; i<3; ++i)
	{
		let randomIndex = Math.floor(Math.random()*bucket.length);
		res.push(bucket.splice(randomIndex, 1)[0]);
	}
	
	shuffle(res);
	shuffle(res); // for good measure
	
	return res;
}

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}