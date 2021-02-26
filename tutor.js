

const data =
{
	dict : [],
	qq : [],
	easyWords : new Set(),
	ansCorrectly : 0,
	ansIncorrectly : 0,
	wCount : 0
};

const threshold1 = 0.6;
const threshold2 = 0.8;


let timeRemaining;
let question, answers, summary;
let correctAnswer = "";

let answerCount = 0;

//let dict = [];

let currentIndex = 0;
let answerIndices = [0, 0, 0, 0];
//let qq = [];
//const minQ = 1;
const maxQ = 50;

let noCorrectAnswer;

//let wCount = 0;

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
		langCodes = "s1qdefimnprt gl";// all except "cho gl"
	}
	
	if (langCodes.includes('s')) 
	{	
		data.dict = data.dict.concat(spanish);
		data.dict = data.dict.concat(spanish001);
	}
	if (langCodes.includes('1')) {loadSynonyms(data.dict, spanishSynonims);} 
		
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
	if (langCodes.includes('q')) {data.dict = data.dict.concat(spanishQ);} 
	if (langCodes.includes('r')) {data.dict = data.dict.concat(romanian);} 
	if (langCodes.includes('t')) {data.dict = data.dict.concat(turkish);} 
		

	
	// remove dupes
	for (let i=0; i<data.dict.length; ++i)
	{
		if (data.dict[i].length != 2)
		{
			console.log('format: ' + data.dict[i])
		}
		if (data.dict[i].length != 2
		|| data.dict[i][0].toUpperCase() === data.dict[i][1].toUpperCase()
		|| data.dict[i][0] === ""
		|| data.dict[i][1] === ""
		)
		{
			let tmp = data.dict.splice(i, 1);
			i--;
			console.log('skip: ' + tmp)
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

	if (noCorrectAnswer)
	{
		data.qq = data.qq.concat([currentIndex, currentIndex, currentIndex]);
		// and repeat the currentIndex
	}
	else
	{
		// generate new currentIndex
		const correctRatio = 1.0*data.ansCorrectly 
		/ (data.ansCorrectly + data.ansIncorrectly);
		
		//console.log('correctRatio:',correctRatio);
		
		if (correctRatio < threshold1 && data.easyWords.size>0)
		{
			//console.log('get easy word');
			const tmpVals = [...data.easyWords];
			const tmp = Math.floor(Math.random()*tmpVals.length);
			currentIndex = tmpVals[tmp];	
			
		}
		else if (correctRatio < threshold2 && data.qq.length>0)
		{
			//console.log('get qq word');
			const tmp = Math.floor(Math.random()*data.qq.length);
			currentIndex = data.qq.splice(tmp, 1)[0];	
		}
		else
		{
			//console.log('get dictionary word');
			currentIndex = Math.floor(Math.random()*data.dict.length);
			++data.wCount;
		}
		



	}

	answerIndices = genRandomAnswers(currentIndex, data.dict);
	
	question.innerHTML = data.dict[currentIndex][0];
	correctAnswer = data.dict[currentIndex][1];
	
//	question.bgColor = "#F8F8F8";
//	question.style.backgroundColor = "#FFFFFF";
	question.style.color = "#FFFFFF";
	
	for (let i=0; i<4; ++i)
	{
		answer[i].innerHTML = data.dict[answerIndices[i]][1];
		//answer[i].bgColor = "#F8F8F8";
//		answer[i].style.backgroundColor = "#F8F8F8";
		answer[i].style.color = "#F8F8F8";
	}
	
	timeRemaining = 100;
	noCorrectAnswer = true;
	
	debugInfo = ''
	+ ' w:'+data.wCount
	+ ' a:'+answerCount
	+ ' corr:'+data.ansCorrectly
	+ ' incorr:'+data.ansIncorrectly
	+ ' n:'+data.dict.length
	+ ' q:'+data.qq.length
	+ ' u:'+[...new Set(data.qq)].length
	+ ' e:'+data.easyWords.size
	+ ' ' + window.location.search
	//+ ' ' + [...data.easyWords]
	+ '';
	
	
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
		data.ansCorrectly++;
		data.easyWords.add(currentIndex);
		noCorrectAnswer = false;
//		question.style.backgroundColor = "#EEFFEE";
		question.style.color = "#EEFFEE";
		timeRemaining = 10;
		for (let i=0; i<4; ++i)
		{
			answer[i].innerHTML = correctAnswer;
//			answer[i].style.backgroundColor = "#EEFFEE";
			answer[i].style.color = "#EEFFEE";
		}
	}
	else
	{
		data.ansIncorrectly++;
		answer[x].innerHTML = "-";
		timeRemaining = 50;
		
		data.qq.push(currentIndex);
		data.easyWords.delete(currentIndex);
		
		if (data.qq.length < maxQ)
		{
			data.qq.push(currentIndex);
			data.qq.push(currentIndex);

			data.qq.push(answerIndices[x]);
			data.qq.push(answerIndices[x]);
			data.qq.push(answerIndices[x]);
			++data.wCount;
		}

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