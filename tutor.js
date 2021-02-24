
let timeRemaining;
let question, answers, summary;
let correctAnswer = "";

let answerCount = 0;

let dict = [];

let currentIndex = 0;
let answerIndices = [0, 0, 0, 0];
let qq = [];
const minQ = 1;
const maxQ = 100;

let noCorrectAnswer;

let wCount = 0;

let debugInfo = "";
let debugInfoFlag = false;

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
		langCodes = "s1qdefimnprt";// all except "chlg"
	}
	
	if (langCodes.includes('s')) 
	{	
		dict = dict.concat(spanish);
		dict = dict.concat(spanish001);
	}
	if (langCodes.includes('1')) {loadSynonyms(dict, spanishSynonims);} 
		
	if (langCodes.includes('c')) {dict = dict.concat(czech);} 
	if (langCodes.includes('d')) {dict = dict.concat(german);} 
	if (langCodes.includes('e')) {dict = dict.concat(esperanto);} 
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
		

	
	// remove dupes
	for (let i=0; i<dict.length; ++i)
	{
		if (dict[i].length != 2)
		{
			//console.log('format: ' + dict[i])
		}
		if (dict[i].length != 2
		|| dict[i][0].toUpperCase() === dict[i][1].toUpperCase()
		|| dict[i][0] === ""
		|| dict[i][1] === ""
		)
		{
			let tmp = dict.splice(i, 1);
			i--;
			//console.log('skip: ' + tmp)
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
	
	while (qq.length < minQ)
	{
		qq.push(Math.floor(Math.random()*n));
		++wCount;
	}
	
	if (answerCount % 10 == 0 && qq.length < maxQ)
	{
		//console.log('occasionally randomly add new word');
		qq.push(Math.floor(Math.random()*n));
		++wCount;
	}

	if (noCorrectAnswer)
	{
		qq = qq.concat([currentIndex, currentIndex, currentIndex]);
	}
	else
	{
		// next question != the current (i.e. previous) question
		let nextIndexIntoQ = -1;
		for (let j=0; j<100; ++j)
		{
			let tmp = Math.floor(Math.random()*qq.length);
			//console.log(j, tmp, qq[tmp], currentIndex);
			if (qq[tmp] != currentIndex)
			{
				nextIndexIntoQ = tmp;
				break;
			}
		}
		
		currentIndex = qq.splice(nextIndexIntoQ, 1)[0];
	}

	answerIndices = genRandomAnswers(currentIndex, dict);
	
	question.innerHTML = dict[currentIndex][0];
	correctAnswer = dict[currentIndex][1];
	
//	question.bgColor = "#F8F8F8";
	question.style.backgroundColor = "#FFFFFF";
	
	for (let i=0; i<4; ++i)
	{
		answer[i].innerHTML = dict[answerIndices[i]][1];
		//answer[i].bgColor = "#F8F8F8";
		answer[i].style.backgroundColor = "#F8F8F8";
	}
	
	timeRemaining = 100;
	noCorrectAnswer = true;
	
	debugInfo = ''
	//+ ' w:'+(wCount-minQ) does not work
	+ ' a:'+answerCount
	+ ' n:'+n
	+ ' q:'+qq.length
	+ ' u:'+[...new Set(qq)].length
	+ '  ' + window.location.search
	+ '';
	
//	for (let i=0; i<qq.length; ++i)
//	{
//		debugInfo += ' / ' + dict[qq[i]][0];
//	}
	
	if (debugInfoFlag)
	{
		summary.innerHTML = debugInfo;
	}
	else
	{
		summary.innerHTML = '';
	}
	
		
}

function showDebug()
{
	debugInfoFlag = !debugInfoFlag;
	
	if (debugInfoFlag)
	{
		summary.innerHTML = debugInfo;
	}
	else
	{
		summary.innerHTML = '';
	}
}

function answer(x)
{
	++answerCount;
	answered = answer[x].innerHTML;
	
	if (answered == correctAnswer)
	{
		noCorrectAnswer = false;
		question.style.backgroundColor = "#EEFFEE";
		timeRemaining = 10;
		for (let i=0; i<4; ++i)
		{
			answer[i].innerHTML = correctAnswer;
			answer[i].style.backgroundColor = "#EEFFEE";
		}
	}
	else
	{
		answer[x].innerHTML = "-";
		timeRemaining = 50;
		
		qq.push(currentIndex);
		//qq.push(answerIndices[x]);

		if (qq.length < maxQ)
		{
			const tmp = [...findAllRelatedTo(dict, currentIndex),
			...findAllRelatedTo(dict, answerIndices[x])];
			//console.log(tmp);
			shuffle(tmp);
			
			for (let ttt of tmp)
			{
				if (qq.indexOf(ttt) < 0) { qq.push(ttt); }
				if (qq.length > maxQ) { break; }
			}
			
			//qq = qq.concat(findAllRelatedTo(dict, currentIndex));
			//qq = qq.concat(findAllRelatedTo(dict, answerIndices[x]));
		}
		
		++wCount;
	}

}


function findAllRelatedTo(dic, index)
{
	const a = dic[index][0].toLowerCase().trim();
	const b = dic[index][1].toLowerCase().trim();
	
	const res = [];
	
	for (let i=0; i<dic.length; ++i)
	{
		const c = dic[i][0].toLowerCase().trim();
		const d = dic[i][1].toLowerCase().trim();
		
		if (a.includes(c)&&c.length>2 || c.includes(a)&&a.length>2
		|| a.includes(d)&&d.length>2 || d.includes(a)&&a.length>2
		|| b.includes(d)&&d.length>2 || d.includes(b)&&b.length>2
		|| b.includes(c)&&c.length>2 || c.includes(b)&&b.length>2
		)
		{
			res.push(i);
		}
	}
	
	return res;
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