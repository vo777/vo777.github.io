
const data =
{
	dict : [],
	qq : [],
	easyWords : new Set(),
	ansCorrectly : 0,
	ansIncorrectly : 0,
	wCount : 0,
	answerCount : 0,
	timeRemaining : 0,
	noCorrectAnswer : false,
	debugInfo : "",
	debugInfoFlag : false,
	currentIndex : 0,
	answerIndices : [0, 0, 0, 0],
	question : undefined,
	answers : undefined,
	summary : undefined
};

const threshold1 = 0.6;
const threshold2 = 0.8;
const maxQ = 50;

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
		langCodes += "s1qdefimnprt gl";// all except "cho gl"
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

function newQuestion()
{

	if (data.noCorrectAnswer)
	{
		data.qq = data.qq.concat([data.currentIndex, 
		data.currentIndex, data.currentIndex]);
		// do nothing: repeat the currentIndex
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
			const tmp1 = tmpVals[tmp];
			if (tmp1 == data.currentIndex)
			{
				// anti-repeat
				data.currentIndex 
				= Math.floor(Math.random()*data.dict.length);
			}
			else
			{
				data.currentIndex = tmp1;
			}
		}
		else if (correctRatio < threshold2 && data.qq.length>0 
		|| data.qq.length>maxQ)
		{
			//console.log('get qq word');
			const tmp = Math.floor(Math.random()*data.qq.length);
			const tmp1 = data.qq.splice(tmp, 1)[0];
			if (tmp1 == data.currentIndex)
			{
				// anti-repeat
				data.qq.push(tmp1);
				data.currentIndex 
				= Math.floor(Math.random()*data.dict.length);
			}
			else
			{
				data.currentIndex = tmp1;
			}
		}
		else
		{
			//console.log('get dictionary word');
			data.currentIndex = Math.floor(Math.random()*data.dict.length);
			++data.wCount;
		}
	}

	data.answerIndices = genRandomAnswers(data.currentIndex, data.dict);
	
	data.question.innerHTML = data.dict[data.currentIndex][0];
//	data.question.style.backgroundColor = "#FFFFFF";
	data.question.style.color = "#FFFFFF";
	
	for (let i=0; i<4; ++i)
	{
		data.answers[i].innerHTML = data.dict[data.answerIndices[i]][1];
//		data.answers[i].style.backgroundColor = "#F8F8F8";
		data.answers[i].style.color = "#FFFFFF";
	}
	
	data.timeRemaining = 100;
	data.noCorrectAnswer = true;
	
	const correctRatio = 1.0*data.ansCorrectly 
		/ (data.ansCorrectly + data.ansIncorrectly);
		
	data.debugInfo = ''
	+ ' w:'+data.wCount
	+ ' a:'+data.answerCount
	+ ' c:'+data.ansCorrectly + ' (' + Math.round(100*correctRatio) + '%)'
	//+ ' incorr:'+data.ansIncorrectly
	+ ' n:'+data.dict.length
	+ ' q:'+data.qq.length
	+ ' u:'+[...new Set(data.qq)].length
	+ ' e:'+data.easyWords.size
	+ ' ' + window.location.search
	//+ ' ' + [...data.easyWords]
	+ '';
	
	
	if (data.debugInfoFlag) { data.summary.innerHTML = data.debugInfo; }
	else{ data.summary.innerHTML = ''; }
	
		
}

function showDebug()
{
	data.debugInfoFlag = !data.debugInfoFlag;
	
	if (data.debugInfoFlag) { data.summary.innerHTML = data.debugInfo; }
	else{ data.summary.innerHTML = ''; }
}

function answer(x)
{
	++data.answerCount;
	const answered = data.answers[x].innerHTML;
	const correctAnswer = data.dict[data.currentIndex][1];
	
	if (answered == correctAnswer)
	{
		++data.ansCorrectly;
		data.easyWords.add(data.currentIndex);
		data.noCorrectAnswer = false;
//		data.question.style.backgroundColor = "#EEFFEE";
		data.question.style.color = "#F8FFF8";
		data.timeRemaining = 10;
		for (let i=0; i<4; ++i)
		{
			data.answers[i].innerHTML = correctAnswer;
//			data.answers[i].style.backgroundColor = "#EEFFEE";
			data.answers[i].style.color = "#F8FFF8";
		}
	}
	else
	{
		++data.ansIncorrectly;
		data.answers[x].innerHTML = "-";
		data.timeRemaining = 50;
		
		data.qq.push(data.currentIndex);
		data.easyWords.delete(data.currentIndex);
		
		if (data.qq.length < maxQ)
		{
			data.qq.push(data.currentIndex);
			data.qq.push(data.currentIndex);

			data.qq.push(data.answerIndices[x]);
			++data.wCount;
		}
	}
}


function genRandomAnswers(m, dict)
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
	//console.log('ac:' + anticollision);
	shuffle(res);
	shuffle(res); // for good measure
	return res;
}

function shuffle(array) { array.sort(() => Math.random() - 0.5); }

