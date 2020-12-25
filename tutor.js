
let timeRemaining;
let question, answers, summary;
let correctAnswer = "";

let perf = 50;
let answerCount = 0;

let dict = [];

let currentIndex = 0;
let qq = [];
let maxQ = 100;

let wCount = 0;

function startup()
{
	dict = dict.concat(spanish);
	dict = dict.concat(italian);
	dict = dict.concat(portuguese);
	dict = dict.concat(french);
	dict = dict.concat(german);
	//dict = dict.concat(greek);
	dict = dict.concat(malay);
	dict = dict.concat(indonesian);
	
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
		if (dict[i][0].toUpperCase() === dict[i][1].toUpperCase())
		{
			dict.splice(i, 1);
			i--;
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
	

	let i = Math.floor(Math.random()*qq.length);
	currentIndex = qq.splice(i, 1)[0];

	let indices = genRandomAnswers(n, currentIndex);
	
	question.innerHTML = dict[currentIndex][0];
	correctAnswer = dict[currentIndex][1];
	
	for (let i=0; i<4; ++i)
	{
		answer[i].innerHTML = dict[indices[i]][1];
		answer[i].bgColor = "white";
	}
	
	timeRemaining = 100;
	
	summary.innerHTML = 'p:' + Math.round(10*perf)/10
	+ ' w:'+(wCount-maxQ)
	+ ' a:'+answerCount
	+ ' n:'+n
	+ ' qq:'+qq.length
	;
	
		
}

function answer(x)
{
	++answerCount;
	answered = answer[x].innerHTML;
	
	if (answered == correctAnswer)
	{
		answer[x].bgColor = "green";
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