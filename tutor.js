
let timeRemaining;
let question, answers, summary;
let correctAnswer = "";

let perf = 50;

let dict = [];

function startup()
{
	dict = dict.concat(spanish);
	dict = dict.concat(italian);
	dict = dict.concat(portuguese);
	dict = dict.concat(french);
	dict = dict.concat(german);
	dict = dict.concat(greek);
	
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
	
}

function newQuestion()
{
	let n = dict.length;
	let m = Math.floor(Math.random()*n);
	
	let indices = genRandomAnswers(n, m);
	
	question.innerHTML = dict[m][0];
	correctAnswer = dict[m][1];
	
	for (let i=0; i<4; ++i)
	{
		answer[i].innerHTML = dict[indices[i]][1];
		answer[i].bgColor = "white";
	}
	
	timeRemaining = 100;
	
	summary.innerHTML = 'p:' + Math.round(10*perf)/10 + '      n:'+n;
}

function answer(x)
{
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
	
	return res;
}

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}