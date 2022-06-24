
function init()
{
	console.log('init()');
	parse_top100();
	parse_irregulars();
	make_table();
	prep_list_of_verbs();
	
	console.log(data);
}

function prep_list_of_verbs()
{
	for (let word of Object.keys(data.dict)) 
	{
		data.all_verbs.push(word);
	}
}

function make_table()
{
	for (let word of Object.keys(data.dict)) 
	{
		const eng = 'to ' + data.dict[word];
		//console.log(word + " : " + eng);
		{
			const row = table1.insertRow(-1);
			const cell = row.insertCell(0);
			cell.innerHTML = word + " : " + eng;
		}
		{
			const row = table1.insertRow(-1);
			const cell = row.insertCell(0);
			let acc = '';
			for (let i=0; i<6; ++i)
			{
				const text_to_show = pronouns[i] + ' ' + past(word, i) + ', ' + pronouns[i] + ' ' + present(word, i) +', ' + pronouns[i] + ' ' + future(word,i);
				
				//acc += text_to_show + '<br>';
				acc += `<span onclick='sayBrk("${text_to_show}")'>${text_to_show}</span><br>`;
				
				if (i==2)
				{
					const text_to_show = 'Usted ' + past(word, i) + ', Usted ' + ' ' + present(word, i) +', Usted ' + ' ' + future(word,i);
				
					acc += `<span onclick='sayBrk("${text_to_show}")'>${text_to_show}</span><br>`;
				}
			}
			cell.innerHTML = acc;
		}
	}
}

function parse_top100()
{
	const rows = top100.split('\n');
	for (let row of rows)
	{
		row = row.trim();
		if (!row.length) { console.log('skip:', row); continue; }
		const a = row.split('.');
		if (a.length != 2) { console.log('skip:', row); continue; }
		let b = a[1].trim();
		if (b.endsWith(')')) { b = b.slice(0, -1); }
		const c = b.split('(');
		if (c.length != 2) { console.log('skip:', row); continue; }
		data.dict[c[0].trim()] = c[1].trim();
	}
}

function parse_irregulars()
{
	let k = 0;
	const rows = irregulars.toLowerCase().split('\n');
	
	while (k < rows.length)
	{
		const a = rows[k].split('.');
		
		if (a.length == 2)
		{
			const b = a[1].trim().split('-');
			if (b.length == 2)
			{
				b[1] = b[1].trim();
				if (b[1].startsWith('to '))
				{
					b[1] = b[1].slice(3);
				}
				const word = b[0].trim();
				data.dict[word] = b[1].trim();
				
				for (let i=2; i<8; ++i)
				{
					const tmp = rows[k+i].split('\t');
					
					if (tmp.length != 3)
					{
						console.log('err:', tmp);
						continue;
					}
					data.conj[word+'.0'+(i-2)] = tmp[2];
					data.conj[word+'.1'+(i-2)] = tmp[1];
					data.conj[word+'.2'+(i-2)] = voya[i-2] + ' ' + word;
				}
			}
			else
			{
				console.log('err:', b);
			}
			
			++k;
		}
		else
		{
			++k;
		}
	}
}

function conjugate()
{
	console.log('conjugate()');
	textToSay.length = 0;
	const word = text1.value.toLowerCase();
	let acc = '';
	
	if (word in data.dict)
	{
		acc += word + ' : ' + data.dict[word] + '<br>';
	}
	else
	{
		acc += word + '<br>';
	}
	
	for (let i=0; i<6; ++i)
	{
		const line = pronouns[i] + ' ' + past(word, i) + ', ' + pronouns[i] + ' ' + present(word, i) +', ' + pronouns[i] + ' ' + future(word,i);
		acc += `<span onclick='sayBrk("${line}")'>${line}</span><br>`
			textToSay.push(line);
			
		if (i==2)
		{
			const line = 'Usted ' + past(word, i) + ', Usted ' +  present(word, i) + ', Usted ' + future(word,i);
			acc += `<span onclick='sayBrk("${line}")'>${line}</span><br>`
			textToSay.push(line);		}
	}		
	
	res_div.innerHTML = acc;
}

// nm
// n = 0=past, 1=present, 2=future
// m = pronoun# from the list

function past(verb, n)
{
	const tmp = data.conj[verb+'.0'+n];
	if (tmp) { return tmp; }
	
	if (verb === 'llamarse') { verb = 'llamar'; }
	if (verb === 'quedarse') { verb = 'quedar'; }
	
	const stem = verb.slice(0, -2);
	if (verb.endsWith('ar'))
	{
		return stem + ar0[n];
	}
	if (verb.endsWith('er'))
	{
		return stem + er0[n];
	}
	if (verb.endsWith('ir'))
	{
		return stem + ir0[n];
	}
	console.log("can't conj", verb);
	return '---';
}

function present(verb, n)
{
	const tmp = data.conj[verb+'.1'+n];
	if (tmp) { return tmp; }
	
	if (verb === 'llamarse') { verb = 'llamar'; }
	if (verb === 'quedarse') { verb = 'quedar'; }
	
	const stem = verb.slice(0, -2);
	if (verb.endsWith('ar'))
	{
		return stem + ar1[n];
	}
	if (verb.endsWith('er'))
	{
		return stem + er1[n];
	}
	if (verb.endsWith('ir'))
	{
		return stem + ir1[n];
	}
	console.log("can't conj", verb);
	return '---';
}

function future(verb, n)
{
	const tmp = data.conj[verb+'.2'+n];
	if (tmp) { return tmp; }
	const res = voya[n] + ' ' + verb;
	return res;
}
/*
const ar0 = ['e', 'aste', 'o', 'amos', 'asteis', 'aron'];
const ar1 = ['o', 'as', 'a', 'amos', 'ais', 'an'];

const er0 = ['i', 'iste', 'io', 'imos', 'isteis', 'ieron'];
const er1 = ['o', 'es', 'e', 'emos', 'eis', 'en'];

const ir0 = er0;
const ir1 = ['o', 'es', 'e', 'imos', 'is', 'en'];
*/
const ar0 = ['e', 'aste', 'o', 'amos', 'aron', 'aron'];
const ar1 = ['o', 'as', 'a', 'amos', 'an', 'an'];

const er0 = ['i', 'iste', 'io', 'imos', 'ieron', 'ieron'];
const er1 = ['o', 'es', 'e', 'emos', 'en', 'en'];

const ir0 = er0;
const ir1 = ['o', 'es', 'e', 'imos', 'en', 'en'];

const voya = [
'voy a',
'vas a',
'va a',
'vamos a',
'van a',
'van a'
];

const pronouns = [
'yo',
'tu',
'el',
'nosotros',
'ustedes',
'ellos'
];

const top100 = `
1. ser (be)
2. estar (be)
3. tener (have)
4. hacer (do, make)
5. poder (can, be able to)
6. decir (say)
7. haber (have [aux verb], there is/are)
8. ir (go)
9. dar (give)
10. ver (see)
11. saber (know)
12. pasar (walk by, pass)
13. deber (must, have to)
14. querer (want, love)
15. llegar (arrive)
16. dejar (leave)
17. llevar (carry)
18. encontrar (find)
19. seguir (follow)
20. poner (put)
21. quedarse (stay)
22. parecer (seem)
23. hablar (speak)
24. pensar (think)
25. volver (return)
26. conocer (know)
27. salir (go out)
28. realizar (do, realize)
29. tomar (take, drink)
30. tratar (try, deal with)
31. contar (count, tell)
32. llamarse (call, name)
33. venir (come, arrive)
34. mirar (see, look)
35. presentar (present, show)
36. permitir (allow)
37. esperar (wait)
38. sentir (feel)
39. vivir (live)
40. buscar (look for)
41. creer (believe)
42. crear (create)
43. perder (lose)
44. existir (exist)
45. considerar (consider)
46. abrir (open)
47. trabajar (work)
48. recibir (receive)
49. mantener (maintain)
50. explicar (explain)
51. lograr (achieve)
52. empezar (begin)
53. recordar (remember)
54. comenzar (start)
55. pedir (ask for)
56. preguntar (ask)
57. producir (produce)
58. convertir (convert, change)
59. entrar (enter)
60. mostrar (show)
61. señalar (point)
62. escribir (write)
63. utilizar (use)
64. entender (understand)
65. terminar (end)
66. ganar (win, earn)
67. incluir (include)
68. morir (die)
69. asegurar (ensure, secure)
70. ocurrir (occur)
71. ofrecer (offer)
72. jugar (play)
73. gustar (like)
74. escuchar (listen to)
75. sentar (sit)
76. cambiar (change)
77. aparecer (appear)
78. acabar (finish, end)
79. decidir (decide)
80. resultar (result, prove)
81. caer (fall)
82. desarrollar (develop)
83. necesitar (need)
84. sacar (remove)
85. establecer (establish, set)
86. conseguir (get)
87. indicar (indicate)
88. formar (form)
89. reconocer (recognize)
90. dirigir (lead)
91. servir (serve)
92. alcanzar (reach)
93. intentar (try)
94. cumplir (accomplish)
95. leer (read)
96. obtener (get)
97. ayudar (help)
98. usar (use)
99. observar (observe)
100. responder (answer)
101. comer (eat)
102. beber (drink)
103. bailar (dance)
104. descansar (relax)
`;


const irregulars = `
1. Ser - to be
Pronoun 	Present Tense	Past Tense
yo 	soy	fui
tú	eres	fuiste
él/ella	es	fue
nosotros	somos	fuimos
ustedes	son	fueron
ellos/ellas	son	fueron
2. Estar - to be
Pronoun 	Present Tense	Past Tense
yo 	estoy	estuve
tú	estás	estuviste
él/ella	está	estuvo
nosotros	estamos	estuvimos
ustedes	están	estuvieron
ellos/ellas	están	estuvieron
3. Tener - to have (possession)
Pronoun 	Present Tense	Past Tense
yo 	tengo	tuve
tú	tienes	tuviste
él/ella	tiene	tuvo
nosotros	tenemos	tuvimos
ustedes	tienen	tuvieron
ellos/ellas	tienen	tuvieron
4. Haber - to have (to do something, auxiliary verb)
Pronoun 	Present Tense	Past Tense
yo 	he	hube
tú	has	hubiste
él/ella	ha	hubo
nosotros	hemos	hubimos
ustedes	han	hubieron
ellos/ellas	han	hubieron
5. Hacer - to do, make
Pronoun 	Present Tense	Past Tense
yo 	hago	hice
tú	haces	hiciste
él/ella	hace	hizo
nosotros	hacemos	hicimos
ustedes	hacen	hicieron
ellos/ellas	hacen	hicieron
6. Ir - to go
Pronoun 	Present Tense	Past Tense
yo 	voy	fui
tú	vas	fuiste
él/ella	va	fue
nosotros	vamos	fuimos
ustedes	van	fueron
ellos/ellas	van	fueron
7. Ver - to see
Pronoun 	Present Tense	Past Tense
yo 	veo	vi
tú	ves	viste
él/ella	ve	vio
nosotros	vemos	vimos
ustedes	ven	vieron
ellos/ellas	ven	vieron
8. Decir - to say
Pronoun 	Present Tense	Past Tense
yo 	digo	dije
tú	dices	dijiste
él/ella	dice	dijo
nosotros	decimos	dijimos
ustedes	dicen	dijeron
ellos/ellas	dicen	dijeron
9. Poder - to be able, can
Pronoun 	Present Tense	Past Tense
yo 	puedo	pude
tú	puedes	pudiste
él/ella	puede	pudo
nosotros	podemos	pudimos
ustedes	pueden	pudieron
ellos/ellas	pueden	pudieron
10. Dar - to give
Pronoun 	Present Tense	Past Tense
yo 	doy	di
tú	das	diste
él/ella	da	dio
nosotros	damos	diimos
ustedes	dan	dieron
ellos/ellas	dan	dieron
11. Conocer - to know
Pronoun 	Present Tense	Past Tense
yo 	conozco	conocí
tú	conoces	conociste
él/ella	conoce	conoció
nosotros	conocemos	conocimos
ustedes	conocen	conocieron
ellos/ellas	conocen	conocieron
12. Saber - to know
Pronoun 	Present Tense	Past Tense
yo 	sé	supe
tú	sabes	supiste
él/ella	sabe	supo
nosotros	sabemos	supimos
ustedes	saben	supieron
ellos/ellas	saben	supieron
13. Poner - to put
Pronoun 	Present Tense	Past Tense
yo 	pongo	puse
tú	pones	pusiste
él/ella	pone	puso
nosotros	ponemos	pusimos
ustedes	ponen	pusieron
ellos/ellas	ponen	pusieron
14. Salir - to exit
Pronoun 	Present Tense	Past Tense
yo 	salgo	salí
tú	sales	saliste
él/ella	sale	salió
nosotros	salimos	salimos
ustedes	salen	salieron
ellos/ellas	salen	salieron
15. Traer - to bring
Pronoun 	Present Tense	Past Tense
yo 	traigo	traje
tú	traes	trajiste
él/ella	trae	trajo
nosotros	traemos	trajimos
ustedes	traen	trajeron
ellos/ellas	traen	trajeron
16. Venir - to come
Pronoun 	Present Tense	Past Tense
yo 	vengo	vine
tú	vienes	viniste
él/ella	viene	vino
nosotros	venimos	vinimos
ustedes	vienen	vinieron
ellos/ellas	vienen	vinieron
17. Oír - to hear
Pronoun 	Present Tense	Past Tense
yo 	oigo	oí
tú	oyes	oíste
él/ella	oye	oyó
nosotros	oímos	oímos
ustedes	oyen	oyeron
ellos/ellas	oyen	oyeron
18. Caer - to fall
Pronoun 	Present Tense	Past Tense
yo 	caigo	caí
tú	caes	caíste
él/ella	cae	cayó
nosotros	caemos	caímos
ustedes	caen	cayeron
ellos/ellas	caen	cayeron
19. Caber - to fit
Pronoun 	Present Tense	Past Tense
yo 	quepo	cupe
tú	cabes	cupiste
él/ella	cabe	cupo
nosotros	cabemos	cupimos
ustedes	caben	cupieron
ellos/ellas	caben	cupieron
20. Jugar - to play
Pronoun 	Present Tense	Past Tense
yo 	juego	jugué
tú	juegas	jugaste
él/ella	juega	jugó
nosotros	jugamos	jugamos
ustedes	juegan	jugaron
ellos/ellas	juegan	jugaron
21. Cerrar - to close
Pronoun 	Present Tense	Past Tense
yo 	cierro	cerré
tú	cierras	cerraste
él/ella	cierra	cerró
nosotros	cerramos	cerramos
ustedes	cierran	cerraron
ellos/ellas	cierran	cerraron
22. Comenzar - to begin
Pronoun 	Present Tense	Past Tense
yo 	comienzo	comencé
tú	comienzas	comenzaste
él/ella	comienza	comenzó
nosotros	comenzamos	comenzamos
ustedes	comienzan	comenzaron
ellos/ellas	comienzan	comenzaron
23. Empezar - to begin
Pronoun 	Present Tense	Past Tense
yo 	empiezo	empecé
tú	empiezas	empezaste
él/ella	empieza	empezó
nosotros	empezamos	empezamos
ustedes	empiezan	empezaron
ellos/ellas	empiezan	empezaron
24. Entender - to understand
Pronoun 	Present Tense	Past Tense
yo 	entiendo	entendí
tú	entiendes	entendiste
él/ella	entiende	entendió
nosotros	entendemos	entendimos
ustedes	entienden	entendieron
ellos/ellas	entienden	entendieron
25. Mentir - to lie
Pronoun 	Present Tense	Past Tense
yo 	miento	mentí
tú	mientes	mentiste
él/ella	miente	mintió
nosotros	mentimos	mentimos
ustedes	mienten	mintieron
ellos/ellas	mienten	mintieron
26. Negar - to deny
Pronoun 	Present Tense	Past Tense
yo 	niego	negué
tú	niegas	negaste
él/ella	niega	negó
nosotros	negamos	negamos
ustedes	niegan	negaron
ellos/ellas	niegan	negaron
27. Pensar - to think
Pronoun 	Present Tense	Past Tense
yo 	pienso	pensé
tú	piensas	pensaste
él/ella	piensa	pensó
nosotros	pensamos	pensamos
ustedes	piensan	pensaron
ellos/ellas	piensan	pensaron
28. Perder - to lose
Pronoun 	Present Tense	Past Tense
yo 	pierdo	perdí
tú	pierdes	perdiste
él/ella	pierde	perdió
nosotros	perdemos	perdimos
ustedes	pierden	perdieron
ellos/ellas	pierden	perdieron
29. Recomendar - to recommend
Pronoun 	Present Tense	Past Tense
yo 	recomiendo	recomendé
tú	recomiendas	recomendaste
él/ella	recomienda	recomendó
nosotros	recomendamos	recomendamos
ustedes	recomiendan	recomendaron
ellos/ellas	recomiendan	recomendaron
30. Sentir - to feel
Pronoun 	Present Tense	Past Tense
yo 	siento	sentí
tú	sientes	sentiste
él/ella	siente	sintió
nosotros	sentimos	sentimos
ustedes	sienten	sintieron
ellos/ellas	sienten	sintieron
31. Colgar - to hang
Pronoun 	Present Tense	Past Tense
yo 	cuelgo	colgué
tú	cuelgas	colgaste
él/ella	cuelga	colgó
nosotros	colgamos	colgamos
ustedes	cuelgan	colgaron
ellos/ellas	cuelgan	colgaron
32. Contar - to count, to tell
Pronoun 	Present Tense	Past Tense
yo 	cuento	conté
tú	cuentas	contaste
él/ella	cuenta	contó
nosotros	contamos	contamos
ustedes	cuentan	contaron
ellos/ellas	cuentan	contaron
33. Costar - to cost
Pronoun 	Present Tense	Past Tense
yo 	cuesto	costé
tú	cuestas	costaste
él/ella	cuesta	costó
nosotros	costamos	costamos
ustedes	cuestan	costaron
ellos/ellas	cuestan	costaron
34. Doler - to hurt
Pronoun 	Present Tense	Past Tense
yo 	duelo	dolí
tú	dueles	doliste
él/ella	duele	dolió
nosotros	dolemos	dolimos
ustedes	duelen	dolieron
ellos/ellas	duelen	dolieron
35. Encontrar - to find
Pronoun 	Present Tense	Past Tense
yo 	encuentro	encontré
tú	encuentras	encontraste
él/ella	encuentra	encontró
nosotros	encontramos	encontramos
ustedes	encuentran	encontraron
ellos/ellas	encuentran	encontraron
36. Morder - to bite
Pronoun 	Present Tense	Past Tense
yo 	muerdo	modrí
tú	muerdes	mordiste
él/ella	muerde	mordió
nosotros	mordemos	mordimos
ustedes	muerden	mordieron
ellos/ellas	muerden	mordieron
37. Morir - to die
Pronoun 	Present Tense	Past Tense
yo 	muero	morí
tú	mueres	moriste
él/ella	muere	murió
nosotros	morimos	morimos
ustedes	mueren	murieron
ellos/ellas	mueren	murieron
38. Oler - to smell
Pronoun 	Present Tense	Past Tense
yo 	huelo	olí
tú	hueles	oliste
él/ella	huele	olió
nosotros	olemos	olimos
ustedes	huelen	olieron
ellos/ellas	huelen	olieron
39. Recordar - to remember
Pronoun 	Present Tense	Past Tense
yo 	recuerdo	recordé
tú	recuerdas	recordaste
él/ella	recuerda	recordó
nosotros	recordamos	recordamos
ustedes	recuerdan	recordaron
ellos/ellas	recuerdan	recordaron
40. Volver - to return (from somewhere) 
Pronoun 	Present Tense	Past Tense
yo 	vuelvo	volví
tú	vuelves	volviste
él/ella	vuelve	volvió
nosotros	volvemos	volvimos
ustedes	vuelven	volvieron
ellos/ellas	vuelven	volvieron
41. Competir - to compete
Pronoun 	Present Tense	Past Tense
yo 	compito	competí
tú	compites	competiste
él/ella	compite	compitió
nosotros	competimos	competimos
ustedes	compiten	compitieron
ellos/ellas	compiten	compitieron
42. Conseguir - to get, obtain
Pronoun 	Present Tense	Past Tense
yo 	consigo	conseguí
tú	consigues	conseguiste
él/ella	consigue	consiguió
nosotros	conseguimos	conseguimos
ustedes	consiguen	consiguieron
ellos/ellas	consiguen	consiguieron
43. Corregir - to correct
Pronoun 	Present Tense	Past Tense
yo 	corrijo	corregí
tú	corriges	corregiste
él/ella	corrige	corrigió
nosotros	corregimos	corregimos
ustedes	corrijen	corrigieron
ellos/ellas	corrijen	corrigieron
44. Despedir - to say goodbye, dismiss, fire
Pronoun 	Present Tense	Past Tense
yo 	despido	despedí
tú	despides	despediste
él/ella	despide	despidió
nosotros	despedimos	despedimos
ustedes	despiden	despidieron
ellos/ellas	despiden	despidieron
45. Elegir - to choose
Pronoun 	Present Tense	Past Tense
yo 	elijo	elegí
tú	eliges	elegiste
él/ella	elige	eligió
nosotros	elegimos	elegimos
ustedes	eligen	eligieron
ellos/ellas	eligen	eligieron
46. Medir - to measure
Pronoun 	Present Tense	Past Tense
yo 	mido	medí
tú	mides	mediste
él/ella	mide	midió
nosotros	medimos	medimos
ustedes	miden	midieron
ellos/ellas	miden	midieron
47. Pedir - to ask for
Pronoun 	Present Tense	Past Tense
yo 	pido	pedí
tú	pides	pediste
él/ella	pide	pidió
nosotros	pedimos	pedimos
ustedes	piden	pidieron
ellos/ellas	piden	pidieron
48. Repetir - to repeat
Pronoun 	Present Tense	Past Tense
yo 	repito	repetí
tú	repite	repetiste
él/ella	repite	repitió
nosotros	repetimos	repetimos
ustedes	repiten	repitieron
ellos/ellas	repiten	repitieron
49. Seguir - to follow
Pronoun 	Present Tense	Past Tense
yo 	sigo	seguí
tú	sigues	seguiste
él/ella	sigue	siguió
nosotros	seguimos	seguimos
ustedes	siguen	siguieron
ellos/ellas	siguen	siguieron
50. Servir - to serve
Pronoun 	Present Tense	Past Tense
yo 	sirvo	serví
tú	sirves	serviste
él/ella	sirve	sirvió
nosotros	servimos	servimos
ustedes	sirven	sirvieron
ellos/ellas	sirven	sirvieron
`
;

