
const spanishQ = [
["¿Estás listo? ¡Vamos!", "Are you ready? Let's go!"],
["Who?", "¿Quién?"],
["De quién", "Whose"],
["¿Quién es?", "Who is it?"],
["¿Quiénes son?", "Who are they?"],
["¿De quién son estos libros?", "Whose books are these?"],
["What?", "¿Qué?"], 
["Which", "¿Cuál?"],
["¿Qué haces ahora?", "What are you doing right now?"],
["¿Qué es esto?", "What’s that?"],
["¿Cuál es tu favorito?", "Which is your favourite?"],
["¿Cuál es tu película favorita?", "What is your favourite movie?"],
["When?", "¿Cuándo?"],
["¿A qué hora es la película?", "What time is the movie?"],
["¿Cuándo es tu cumpleaños?", "When is your birthday?"],
["¿Cuándo vas a ir?", "When will you go?"],
["Where?", "¿Dónde"],
["¿Dónde vives?", "Where do you live?"],
["¿A dónde vas?", "To where are you going?"],
["¿De dónde eres?", "Where are you from?"],
["from where", "de dónde"],
["¿Por qué? / ¿Para qué?", "Why?"],
["¿Por qué dices eso?", "Why do you say that?"],
["¿Para qué estás aprendiendo español?", 
				"What are you learning Spanish for?"],
["¿Cómo?", "How?"],
["¿Cómo está usted?", "How are you?"],
["¿Cómo hiciste eso?", "How did you do that?"],
["¿Cuántos? / ¿Cuánto? / ¿Cuántas? / ¿Cuánta?", "How many? / How much?"],
["¿Cuántas manzanas?", "How many apples?"],
["¿Cuántos aguacates?", "How many avocados?"],
["¿Cuánta agua?", "How much water?"],
["¿Cuánto té?", "How much tea?"],
["Bueno, ¿qué hay de la cena?", "Well, what’s for dinner?"],
["Tengo una pregunta", "I have a question"],
["¿Puedo hacerte una pregunta?", "Can I ask you a question?"],
["Tengo una pregunta para ti", "I have one question for you."],
["Tengo dos preguntas para ti", "I have two questions for you."],
["¿Puedo preguntarte algo?", "May I ask you something?"],
["Hola, ¿cómo te llamas?", "Hello, what’s your name?"],
["Soy Benny.", "I’m Benny."],
["¿Que tal?", "How’re you?"],
["Muy bien, gracias. ¿Y tu?", "I’m great, thanks. And you?"],
["¿Cuántos años tienes?", "How old are you?"],
["Tengo treinta años.", "I am 30 years old."],
["¿A qué te dedicas?", "What do you do for a living?"],
["Soy escritor y orador.", "I am a writer and speaker."],
["¿Donde trabajas?", "Where do you work?"],
["Trabajo en un restaurante.", "I work at a restaurant."],
["¿Cuáles son tus aficiones?", "What are your hobbies?"],
["Me gusta leer libros y ver películas.", 
			"I like to read books and watch movies."],
["¿De donde eres?", "Where are you from?"],
["Soy de Irlanda.", "I’m from Ireland."],

["¿Cuál es tu película favorita?", "What’s your favourite movie?"],
["Me encanta Star Wars.", "I love Star Wars."],
["¿Desde cuándo aprendes español?", 
			"How long have you been learning Spanish?"],
["Aprendo español desde hace tres meses.", 
				"I’ve been learning Spanish for 3 months."],
["¿Cuál es tu color favorito?", "What is your favourite colour?"],
["Me gusta el verde.", "I like green."],
["¿Hablas otros idiomas?", "Do you speak other languages?"],
["Sí, hablo inglés y francés.", "Yes, I speak English and French."],
["¿Tienes hermanos?", "Do you have any siblings?"],
["Sí, una hermana.", "Yes, one sister."],
["¿Tienes hijos?", "Do you have any kids?"],
["No, no tengo hijos.", "No, I don’t have kids."],
["¿Cuántos en tu familia?", "How many in your family?"],
["Tres. Yo, mi mujer y mi perrito.", "Me, my wife, and my puppy."],
["¿Tienes alguna mascota?", "Do you have a pet?"],
["Sí, tengo un perro.", "Yes, I have a dog."],
["¿Cuál es el nombre de tu hermano/hermana?",
					"What is your brother’s/sister’s name?"],

];

/*


*El nombre de mi hermano/hermana es…” – “My brother’s/sister’s name is…”
¿Qué hacen tus padres? – “What do your parents do?”
Mi padre es ingeniero y mi madre es enfermera. – “My dad is an engineer and my mom is a nurse.”
¿Dónde creciste? – “Where did you grow up?”
Yo crecí en… – “I grew up in…”
¿Que hora es? – “What time is it?”
Es la una. – “It’s 1 o’clock.”
¿Qué día es? – “What day is it?”
Es viernes. – “It’s Friday.”
¿A dónde vas? – “Where are you going?”
Me voy a trabajar. – “I’m going to work.”
¿Qué haces? – “What are you doing?”
Estoy estudiando español. – “I’m studying Spanish.”
¿Estás de acuerdo? – “Do you agree?”
*Pues… yo no sé.” – “Well… I don’t know.”
¿Qué piensas? – “What do you think?”
Creo que esta bien. – “I think it’s good.”
¿Qué has dicho? – “What did you say?”
Dije… – “I said…”
¿Dónde está el baño? – “Where’s the bathroom?”
Por ahí. – “Over there.”
“Hola, soy Benny.” (Hi, I'm Benny.)
“Holo, ¿cómo te llamas?” (Hi, what's your name?)
“¿Está desocupada esta silla?” – Is this seat taken?
“¿Sabe qué hora es?” – Do you know what the time is?
“¿Sabe a qué hora cierra este lugar?” – Do you know what time this place closes?
“¿Sabe dónde está el/la [place]?” – Do you know where the [place] is?
¿De dónde eres? – Where are you from?
¿A qué te dedicas? – What do you do for a living?
¿Qué estudias? – What do you study/What's your major? (a common question if you're a student.)
¿Qué te trae por aquí? – What brings you here?
¿Cuánto tiempo llevas aquí? – How long have you been here?
¿Cómo conoces a José? – How do you know José? (You might ask this if e.g. José is the mutual friend who introduced you, or the host of the event you're at.)
¿A quién conoces aquí? – Who do you know here?
¿Con quién estás aquí? – Who are you here with?
¿Vienes seguido por aquí? – Do you come here often?
¿Tienes hermanos/hijos? – Do you have any siblings/children?
¿Qué edad tienen? – How old are they?
¿Qué hacen tus padres? – What do your parents do?
¿Donde creciste? – Where did you grow up?
¿Ves a menudo a tus abuelos? – Do you see your grandparents often?
¿Eres cercano/a sus padres? – Are you close with your parents?
¿Cómo es tu pueblo natal? – What's your hometown like?
¿Tienes alguna mascota? – Do you have any pets?
¿Qué raza es tu perro/gato? – What breed is your dog/cat? (Interestingly, Spanish uses the same word, raza, for both “race” in the human sense and “breed” as applied to animals).
¿Te gusta viajar? – Do you like to travel?
¿Cuál es el lugar favorito en que has estado? – What's your favourite place you've been to? (In Spanish you talk about places you’ve been in rather than places you’ve been to.)
¿En qué países has estado? – Which countries have you been to?
¿Has estado en [Roma]? – Have you been to [Rome]?
¿Querrías ir a [Barcelona]? – Would you like to go to [Barcelona]?
Si pudieras viajar a cualquier lugar, ¿dónde viajarías? – If you could travel anywhere, where would you go?
¿Hablas otros idiomas? – Do you speak any other languages?
¿A dónde fuiste la ultima vez de vacaciones? – Where was the last place you went on holiday?
¿Cuándo empezaste a aprender [español]? – When did you start learning [Spanish]?
¿Qué te hizo convertirte en [médico]? – Why did you become a [doctor]?
¿Te gusta tu trabajo? – Do you like your job?
¿Qué es lo que más te gusta de tu trabajo? – What do you like the most about your job?
¿Qué es la cosa más difícil sobre tu trabajo? – What's the most difficult thing about your job?
¿Fuiste a la universidad? – Did you go to university?
¿La disfrutaste? – Did you enjoy it?
¿Qué consejo le darías a alguien que quiere convertirse en [programador]? – What advice would you give to someone who wants to become a [programmer]?
¿Si pudieras volver atrás en el tiempo, estudiarías [psicología] de nuevo? – If you could go back in time, would you study [psychology] again?
¿Te gusta cocinar? – Do you like to cook?
¿Cuál es tu comida favorita? – What's your favourite food?
¿Te gusta la comida [italiana]? – Do you like [Italian] food?
¿Puedes recomendarme un buen restaurante cerca de aquí? – Can you recommend me a good restaurant near here?
¿Qué comen en su país? – What do they eat in your country?
¿Qué haces para divertirte? – What do you like to do for fun?
¿Te gusta [leer]? – Do you like to [read]?
¿Cuál tipo de música te gusta más? – What's your favourite type of music?
¿Cuál es tu [película/libro/banda] favorita? – What's your favourite [film/book/band]?
¿Tocas un instrumento? – Do you play an instrument?
¿Cuál es la peor película que has visto? – What's the worst film you've seen?
¿Practicas algún deporte? – Do you play a sport?
¿De qué equipo eres? – What team do you support?
¿Estás de acuerdo? – Do you agree?
¿Qué piensas tú sobre [X]? – What do you think about [X]?
Háblame/Cuéntame más de [X] – Tell me more about [X].
Si no te importa que te pregunte… – If you don't mind me asking…
Alguien me dijo que… – Someone told me that…
Escuché que… – I heard that…
¿Estás de acuerdo en que…? – Would you agree that… ?
Eso me recuerda… – That reminds me…
Hablando de eso… – Speaking of which…
Por otra parte… – On another note…
Estoy cambiando de tema, pero… – I'm changing the subject, but…
Me preguntaba… – I was wondering…
Te voy a decir una cosa… – Let me tell you something
¡Por supuesto! or ¡Claro que si! – Of course!
¿En serio? – Really? / Seriously?
¡Oye! – Hey! (literally, “listen!”)
¡Hostia! – Damn! (This mildly rude exclamation is very common in Spain, but not so much in Latin America.)
¡Ostras! – A family-friendly version of “¡hostia!”. It literally means “oysters!”
¡Dios mio! – Oh my god!
A ver… – Let’s see…
¡No me digas! – No way! (Literally: don’t tell me!)
¡Vale! – Okay! (Used in Spain, “dale” is more common in the Americas.)
Qué yo sepa – As far as I know.
Digo… – Literally “I say”, but you can use this to correct yourself after you misspeak. “Somos dos… digo, tres personas.”
O sea – I mean…/Or rather….
¿Sabes? = You know?
Una pregunta… – Literally “a question”. It’s very common in Spanish to preface a question with “una pregunta”, the same way you might say “Let me ask you something” in English.
la primavera – “spring”
el verano – “summer”
el otoño – “autumn/fall”
el invierno – “winter”
la estación lluviosa – “the rainy season”
la estación seca – “the dry season”
Es verano. – “It’s summer.”
Nos vamos en primavera – “We’re leaving in the spring.”
Es una fiesta de invierno – “It’s a winter party.”
la flor – “flower”, also “blossom”
florecer – “to bloom”
la oruga – “caterpillar”
la mariposa – “butterfly”
el pájaro – “bird”
la mariquita – “ladybug”
la semilla – “seed”
la planta – “plant”
el ramo – “bouquet”
clima templado – “temperate weather”
temperatura fresca – “cool temperature”
lloviznar – “to drizzle”
la brisa – “breeze”
Tengo un poco de frío – “I’m a bit cold”
sembrar – “to sow” or “to plant”
ir de picnic – “to have a picnic”
la limpieza de primavera – “spring cleaning”
el mar – “sea”
la arena – “sand”
el campo – “the country”
los mosquitos – “mosquitoes”
la fruta – “fruits”
la sandía – “watermelon”
la piña – “pineapple”
una barbacoa – “a barbecue”
el chicle – “chewing gum”
el helado – “ice cream”
colores vivos – “vibrant colors”
colores llamativos – “flashy colors”
azul – “blue”
amarillo – “yellow”
El clima (“the weather”):

clima templado – “temperate weather”
temperaturas altas – “high temperatures”
el sol – “sun”
un día soleado – “a sunny day”
días largos – “long days”
noches cortas – “short nights”
Actividades (“activities”):

las vacaciones de verano – “summer vacations”
tomar helado – “to have ice cream”
ir a la playa – “to go to the beach”
nadar – “to swim”
ir de viaje – “to go on a trip”
acampar, ir de acampada, or ir de camping – “to go camping”
una excursión – “a hike” or “a field trip”
relajarse – “to relax”
divertirse – “to have fun”
la Noche de San Juan (“Saint John’s Night”).

El Día de los Padres (“Father’s Day”)
fiestas (“parties”)
La naturaleza (“nature”):

la hoja – “leaf”
el árbol – “tree”
el tronco – “trunk”
el caracol – “snail”
el barro or el lodo – “mud”
cosecha – “harvest”
Los colores (“colors”):

marrón – “brown”
rojo – “red”
naranja or anaranjado – “orange”
colores cálidos – “warm colors”
El clima (“the weather”):

el viento – “wind”
temperaturas en caída – “falling temperatures”
el cielo gris – “grey sky”
la tormenta – “storm”
La comida (“food”):

el vino – “wine”
la manzana – “apple”
el maíz – “corn”
la calabaza – “pumpkin”
Actividades (“activities”):

recoger hojas – “gather up leaves”
saltar en charcos – “jump into puddles”
bricolaje – “DIY”
hacer una fogata – “to build a bonfire”
Some Autumn Holidays in Spanish
La Fiesta de la Hispanidad (“Spanish Culture Day”) is a holiday celebrated throughout the Hispanic world on October 12th.

While Halloween isn’t very popular in Spain, it’s widely celebrated in Latin America on the 31st of October. On the following day, it’s the famous Día de los Muertos (“Day of the Dead”) in Mexico.
El invierno is often about familia (“family”), fiestas (“holidays”), reflexión (“reflection”), planear (“to plan”), and pureza (“purity”).

Here is some vocabulary to help you talk about winter in Spanish.

La naturaleza (“nature”):

la montaña – “mountain”
el muérdago – “mistletoe”
hibernación – “hibernation”
el pino – “pine”
Los colores (“colors”):

colores fríos – “cold colors”
white – “blanco”
gris – “grey”
plata – “silver”
dorado – “golden”
El clima (“the weather”):

temperaturas bajas – “low temperatures”
la nieve – “snow”
el hielo – “ice”
la escarcha – “frost”
las nubes – “clouds”



La ropa (“clothes”):

la bufanda – “scarf”
las medias or “lo calcetines” – “socks”
el abrigo – “coat”
las botas – “boots”
el gorro – “coat”
los guantes – “gloves”
La comida (“food”):

la cena – “dinner”
chocolate a la taza or chocolate caliente – “hot chocolate”
bebidas calientes – “hot drinks”
la sopa – “soup”
Actividades (“activities”):

hacer un muñeco/hombre de nieve – “to build a snowman”
tirar bolas de nieve – “to play snowballs”
una vuelta en trineo – “a sleigh ride”
celebrar – “to celebrate”
esquiar – “to ski”
patinar sobre hielo – “to ice skate”
snowboard – “to snowboard”



Some Winter Holidays in Spanish
The following are winter holidays in Spain, but they happen during summer in the southern hemisphere.

The first and perhaps most important winter holiday in Hispanic culture is la Navidad (“Christmas”), which is preceded by la Nochebuena (“Christmas Eve”, literally “Good Night”).

On the 31st of December, Hispanics celebrate la Nochevieja (“New Year’s Eve”, literally “Old Night”). As soon as the clock strikes midnight on the 1st of January, it’s el Día de Año Nuevo (“New Year’s Day”), which introduces *el Año Nuevo (“New Year”).

On January 6 comes la Epifanía (“Epiphany”), also called “Día de Reyes” (“Day of the Kings”) in honor of the Reyes Magos (“Three Wise Men”).

The next popular winter holidays are San Valentín (“Valentine’s Day”), celebrated on February 14, and el Carnaval (“Carnival”).

The first official day of the Carnival week is known as Jueves Lardero, Jueves Gordo, Jueves Graso, or Jueves de Carnival (“Fat Thursday” or “Carnival Thursday”), and it comes every year between mid-January and early February before el Miércoles de Cenizas (“Ash Wednesday”).
¿Cuál es tu estación favorita? – “What’s your favorite season?” Mi estación favorita es… – “My favorite season is…”

¿Cuál es la estación que te gusta más? – “Which season do you like the most?” La estación que más me gusta es… – “The season I like the most is…”

¿Cuál es la estación que te gusta menos? – “Which season do you like the least?” La estación que menos me gusta es… – “The season I like the least is…”

Prefieres (el otoño) o (la primavera)?* – “Do you prefer (autumn) or (spring)?”
Prefiero (el otoño), porque me gusta (el clima).* – “I prefer (autumn) because I like (the weather).”
¿Qué te gusta más (del otoño)?* or ¿Qué es lo que te gusta más (del otoño)? – “What do you like the most about (autumn)?”
Lo que me gusta más (del otoño) es…* – “What I like the most about (autumn) is…”
How to Say “Month” in Spanish: Mes
“Month” in Spanish is mes. Seasons in temperate climates last tres meses (“three months”).

Do you remember all you need to know about the Spanish months of the year? Let me give you a quick refresher.


January	enero
February	febrero
March	marzo
April	abril
May	mayo
June	junio
July	julio
August	agosto
September	septiembre
October	octubre
November	noviembre
December	diciembre


In Spanish, all months are masculine nouns.

To say “a hot June” or “a cold December”, use the indefinite article un:

un Junio caluroso
un Diciembre frío
Keep in mind that they are not capitalized unless they’re found at the beginning of a sentence.

If you want to say “in (month)”, use the preposition en:

“in June” – en junio
“in December” – en diciembre
Weather and Seasons in Spanish: How to Talk About the Weather in Spanish
Let me give you a few tips on how to talk about el clima (“the weather”) in Spanish.

Use the Verb Hacer
Some Spanish weather expressions use the verb hacer (“to do”) because they’re describing a general aspect of the weather, usually regarding la temperatura (“the temperature”). As a result, when it comes to the weather, we don’t say “it’s cold”, but it “does cold”: hace frio.

Examples:

Hace calor/frío/fresco – “It’s hot/cold/cool.”
Hace buen/mal tiempo – “The weather is good/bad.”


Use the Verb Estar
Estar (“to be”) is used to talk about more specific aspects of the weather and it generally precedes adjectives.

Examples:

Está soleado – “It’s sunny.”
Está lloviendo – “It’s raining.”
Está nevando – “It’s snowing.”
Use the Verb Haber
Haber (“to have”) also describes specific aspects of the weather, except it precedes nouns.

Examples:

Hay sol – “There’s sun.”
Hay viento – “There’s wind.”


”Hello” en español es “hola”. (“Hello in Spanish is hola.”)

Speak a new language in 2021! Registration closing soon
Fluent in 3 months - Language Hacking and Travel Tips


START HERE!
ABOUT
BLOG
PODCAST
THE COURSE
RESOURCES

Hello in Spanish: “¡Hola!” and 70+ More Spanish Greetings for All Occasions
by BENNY LEWIS

So you want to say “hello” in Spanish?

Hola, amigo and welcome to this extensive guide on Spanish greetings!

Yes, you’ve read the title right: I’m going to teach you how to greet someone in Spanish in 70+ different ways, because this article covers all occasions!

Why bother learning this many Spanish ways to say hi, you may ask? After all, knowing hola might be enough, right?

Well, let me give you a few reasons to go the extra mile and become a pro at using Spanish greetings.

First of all, saying “hello” is one of the most crucial parts of a conversation – that’s whether you say “hello” in Spanish, or in any language. We all know how important first impressions are to build solid relationships. It takes only a few seconds for a person to form an opinion of you, so you might as well use this short time for your benefit. By using a good greeting to start a conversation, you’ll surely be putting your best foot forward!

Secondly, you need to know when to use a formal Spanish greeting, and when to go with an informal one. Think about it. Do you greet your boss and friends the same way? Probably not. That’s why it’s better to learn how to say both “good morning” and “hey, what's up?” in Spanish before you set off for an adventure in a Spanish-speaking region.

Last but not least… I don’t know about you, but I’m not one to always use the generic “hi”. Spanish has a rich variety of greetings available and I take full advantage of that. Switching ways to say hi is a great way to add some spice to a conversation.

So, are you ready to learn how to say “hello” in Spanish?




Genial, ¡vamos! (“Great, let’s go!”)

“Hello” in Spanish: ¡Hola!
”Hello” en español es “hola”. (“Hello in Spanish is hola.”)

Hola is the standard Spanish greeting. It’s not too formal nor does it sound colloquial, so you can use it in most situations.

In Spanish, the h is silent, so you would pronounce hola as you would ola. Don’t confuse the two, however, because the latter means “wave”.

Bennys Top spanish resources
“Hi” in Spanish: ¡Hola!
There isn’t really a way to say “hi” in Spanish. In fact, it’s exactly the same as “hello”: you simply say hola.

In some Latin-American countries, you will probably hear some cutified versions of hola such as holi or holis, but they’re not fit for use outside of informal groups. They’re also mainlyused by young girls.

“Hey” in Spanish: Hey
Just like with “hi”, there isn’t an outright equivalent to “hey” in Spanish, so you should translate it as hola.

You might use oye (“hear”) as a very informal greeting with close friends, but that may come across as a little rude.

Hey is quite frequent in Latin America along with its phonetically adapted version uey, but you might want to avoid the latter if you’re not yet sure how and when to use it properly because it’s extremely slangy.




“How Are You?” in Spanish: ¿Cómo estás?
The best way to say “Hello, how are you?” in Spanish is Hola, ¿cómo estás? This phrase is composed of the first greeting we learned plus the interrogative word cómo, and the second-person conjugation of the verb estar (“to be”).

To use the phrase properly, you have to remember that, in Spanish, there are several “you” pronouns. Pay attention to the number of people you are addressing and the way you are addressing them — formal or informal — to choose the right conjugation of estar:

tú (informal singular “you”) – ¿Cómo estás?
vos (informal singular “you” used in some Latin American countries) – ¿Cómo estás?
usted (formal singular “you”) – ¿Cómo está?
vosotros (the informal plural “you” used in Spain, but not in other Spanish-speaking countries) – ¿Cómo estáis?
ustedes (formal plural “you” in Spain, standard plural “you” in Latin America) – ¿Cómo están?
In Spanish, the pronoun is often dropped from the sentence because it’s easily recognized in the conjugated form — as the verb agrees with the pronoun in number and formality. However, in Central America, it is common to punctuate the formal versions of ¿Cómo est-? with the corresponding pronoun: ¿Cómo está usted?, ¿Cómo están ustedes?

An Alternative Way to Say “How Are You?” in Spanish: ¿Cómo andas?
¿Cómo andas? is more informal than ¿Cómo estás?, but it’s a fairly frequent way to say “How are you?” in Spanish.




It’s a tricky phrase to translate into English because the verb andar can mean a lot of things, among which “to walk”, “to go”, and “to ride”. When used in sentences, ¿Cómo andas? can mean “how are you doing?”, “how’s it going?”, and “how are you fixed?”, as in ¿Cómo andas de dinero? (“How are you for money?”).

However, when used alone, ¿Cómo andas? is a casual greeting.

Just like with ¿Cómo estás?, pay attention to the correct conjugation of andar based on the person you’re greeting:

tú – ¿Cómo andas? (With vos, it’s ¿Cómo andás?)
usted – ¿Cómo anda?
vosotros – ¿Cómo andáis?
ustedes – ¿Cómo andan?
You might wonder why I’ve included formal pronouns if ¿Cómo andas? is informal. In Latin America, it’s common for people to use slightly informal greetings with someone they speak to formally, so it’s probable that you will come across formal versions of ¿Cómo andas? if you’re headed there.

“How Are You Today?” in Spanish
If you want to ask “How are you today?” in Spanish, just add hoy (“today”) to ¿Cómo estás? or ¿Cómo andas?: ¿Cómo estás hoy? / ¿Cómo andas hoy?

Replace cómo with qué tal
¿Qué tal? on its own means “What’s up?” in Spanish, and I’ll share more on that later. When it replaces cómo, however, qué tal stands for “how”.




¿Cómo estás? becomes ¿Qué tal estás? (“How are you?”)
¿Cómo andas? becomes ¿Qué tal andas? (“How are you?”)
“How Are You Doing?” in Spanish: ¿Cómo te va?
Instead of saying “How are you doing?”, Spanish-speaking people say ¿Cómo te va? (“How is it going for you?”)

The phrase includes the verb ir conjugated at the singular third-person, so the only thing that changes depending on the “you” is the indirect object pronoun.

Check them out:

tú and vos – ¿Cómo te va?
usted – ¿Cómo le va?
vosotros – ¿Cómo os va?
ustedes – ¿Cómo les va?
Spanish Responses to “How You’re Doing?”
Let’s imagine the conversation between two friends who’ve just crossed paths on their way to work (it needs to be quick and effective):

“John, hi! How are you?”
“Patrick! Good, and you?”
“Very well, thanks!”
“Alright, see you soon!”
“Bye!”




With the vocabulary you’ve learnt so far in this article, you’d be able to carry out the first part of this conversation just fine in Spanish:

¡Pablo, hola! ¿Cómo estás?

Now let’s learn how to reproduce the next two lines, the ones to respond to “How are you?”

(For the goodbyes part, you should check out our post on how to say goodbye in Spanish in 65+ ways!)

How to Say “Good, and You?” in Spanish
The best way to say “Good, and you?” in Spanish is Bien, ¿y tú?

If you want to say more than bien, you could say todo bien (“everything’s good”).

How to Say “Very Well, Thanks” in Spanish
To say “Very well, thanks” in Spanish, you would say Muy bien, gracias.

You can replace muy bien by bien, excelente (“excellent”) or genial (“amazing”), though genial is more informal.

In some Latin American countries, the gracias part is sometimes extended to gracias a Dios (“thanks to God”).

How to Say “So-So” in Spanish
Here are some answers to use if you’re not feeling good but not feeling bad either:

Así así – “so-so”
Más o menos – “so-so”
Normal – “okay”
Regular – “okay”


How to Say “Not So Good” in Spanish
If you want to say the truth and tell your friend that you’re not feeling good, you could say:

No tan bien – “Not so good.”
No muy bien – “Not very well.”
Mal – “bad”
Fatal – “awful”. (Fatal is colloquial and mostly used in Spain.)
“What's Up” in Spanish: ¿Qué tal?
What if “How are you?” and “How are you doing?” are too serious and you want to use a more laid-back greeting? “What’s up?” is exactly what you need.

Prepare yourself for some of the variety I warned you about in the introduction. It’s hard to count how many ways there are to say “what’s up?” in Spanish!

The reason for this is the large number of Spanish dialects. Almost every Spanish-speaking country has its own regionalism to translate “what’s up?”. Even some countries where Spanish is not the official language have their own version!

Here are some ways to say “what’s up?” in Spanish:

¿Qué tal? – It’s mostly used in Spain but it can pop up in conversations in other Spanish-speaking regions as well. It’s also used as “How is it going?” or to replace “how” in questions, as we saw above.
¿Qué pasa? – “What’s happening?”
¿Qué pasó? – “What happened?”
¿Qué onda? – This one is popular in Central America and sometimes concluded with güey or güero (“dude”).
¿Qué más? – Literally “What else?”
¿Qué hay? – Hay is the third person conjugation of the verb haber, so the question is “What is there?” in the sense of “What’s happening?” or “What’s new?”
¿Qué hubo? – Literally “What happened”, this phrase’s meaning is the same as that of ¿Qué hay?
¿Qué hay de nuevo? – “What’s new?”
¿Qué es lo que? – Contracted version of ¿Qué es lo que hay? (“What is there?”). Tthis one is chiefly used in the Dominican Republic, and you’ll also hear its shorter form Qué lo que?
¿Qué cuentas? – It’s hard to translate this one, but it means something along the lines of “What news do you have to tell?” It also sometimes appears as ¿Qué me cuentas? (“Tell me what’s new”) and ¿Qué nos cuentas? (“Tell us what’s new.”)
¿Qué haces? – “What are you doing?”


You can see that in ¿Qué cuentas? and ¿Qué haces?, the verbs are conjugated with tú, the informal second-person pronoun. It’s important to remember to modify the verbs in these two phrases depending on the appropriate Spanish “you”.

Here’s how you would do that:

tú – ¿Qué cuentas? and ¿Qué haces? (With vos, it’s ¿Qué contás? and ¿Qué hacés?)
usted – ¿Qué cuenta? and ¿Qué hace?
vosotros – ¿Qué contáis? and ¿Qué hacéis?
ustedes – ¿Qué cuentan? and ¿Qué hacen?


Obviously, as “what’s up?” is a informal greeting, you might not use the formal versions of these phrases very often, but it’s good to know them nonetheless. As I mentioned before, in Latin America, people sometimes use slightly informal greetings with someone they speak to formally.

“Good Morning” in Spanish: ¡Buenos días!
To wish someone a good morning in Spanish, you would say ¡Buenos días!, literally “good days.” In fact, the singular version of the phrase, buen día, means “good day” in Spanish.

So why use the plural?

There are several theories to answer this question. One I like is that ¡Buenos días! is only the contraction of a longer expression — which might have been something along the lines of Buenos días guarden a vos (a way to say “May your days be good” in dated Spanish). Since technology wasn’t present to make conversations instantaneous back then, people often didn’t see each other every day So, they would swap greetings that lasted a good amount of time.

Today, you say ¡Buenos días!, meaning “good morning”, but it’s not uncommon to simply hear ¡Buen día!

Note that ¡Buen día! is also used as a goodbye.

“Good Afternoon” in Spanish: ¡Buenas tardes!
¡Buenas tardes! is the correct way to say “good afternoon” in Spanish. In Latin America, you might also hear its shorter version: ¡Buenas!. The tardes is implied.



Unlike with ¡Buenos días!, the singular version of ¡Buenas tardes! isn’t a correct way to say “good afternoon”.

“Good Evening” in Spanish: ¡Buenas noches!
There is no literal translation of “good evening” in Spanish simply because there isn’t a Spanish equivalent for “evening”. In fact, the noche (“night”) comes immediately after the tarde — around 6, 7, or 8 pm, depending on the region’s culture.

¡Buenas noches! is also a way to wish someone a good night.

How to Greet Someone You’ve Just Met in Spanish
We don’t usually use the same greetings with friends as with people we’ve just met. To the first, we might say something like, “What’s up, dude?” To the latter, it’s more along the lines of “Nice to meet you.”

“Nice to Meet You” in Spanish
There are two ways to say “nice to meet you” in Spanish:

Mucho gusto (literally “much pleasure”)
Encantado/a (“glad”, literally “enchanted”)
To make the phrases fuller, you can add the verb conocer (“know”) along with the appropriate direct object pronoun depending on the “you” you are using:

tú or vos – Mucho gusto conocerte
usted – Mucho gusto en conocerle (This is not the grammatically correct form, but it’s frequently used.)
usted (with a man) – Mucho gusto en conocerlo
usted (with a woman) – Mucho gusto en conocerla
vosotros – Encantado de conoceros
ustedes – Encantada de conocerles (Again, not the grammatically correct form, but it is often used.)
ustedes (with men) – Encantada de conocerlos
ustedes (with women) – Encantada de conocerlas


Note: You can say both Mucho gusto conocerte and Mucho gusto en conocerte.

“What’s Your Name” in Spanish: ¿Cómo te llamas?
To ask someone for their name in Spanish, you would ask them ¿Cómo te llamas? (literally “How are you called?”)

tú – ¿Cómo te llamas? (With vos, it’s ¿Cómo te llamás?)
usted – ¿Cómo se llama usted?
vosotros – ¿Cómo os llamáis?
ustedes – ¿Cómo se llaman?
You could also say: ¿Cuál es tu nombre? (“What’s your name?”)

Remember to use the correct possessive pronoun:

tú and vos – ¿Cuál es tu nombre?
usted – ¿Cuál es su nombre?
vosotros – ¿Cuál es vuestro nombre?
ustedes – ¿Cuál es su nombre?


“My Name Is…” in Spanish: Mi nombre es…
To introduce yourself in Spanish, you can say:

Mi nombre es… – “My name is…”
Soy… – “I am…”
Me llamo… – “I am called…”
How to Say “Welcome!” in Spanish:
To greet someone in Spanish by letting them know they’re welcome, you would say ¡Bienvenido! if your guest is a man, ¡Bienvenida! if she is a woman.

If you’re having several people over, say ¡Bienvenidos! to only men or a mixed group and ¡Bienvenidas! to only women.

Spanish Greetings for Letters, Emails, Texts, and Phone Calls
Saying “hi” in person is not the same as opening an email or picking up the phone. So what Spanish greetings are appropriate to use in letters, emails, texts, and phone calls?

Let me introduce you to some of the most common:

Spanish Greetings for Letters and Emails
Not all letters and emails can start in the same way, right? In some, you need to be formal, in others, more friendly. Maybe you might not even know who you are writing to and need something neutral.



Here are some of the most common Spanish greetings to use in letters and emails:

Estimado/a Señor/Señora/Señorita – “Dear Sir/Mrs./Ms.” or “Esteemed Sir/Mrs./Ms.” This is a formal greeting. You can complete the title with the last name of the person you’re addressing. The plural form is Estimados Señores” with men and *Estimadas Señoras/Señoritas with women.
Distinguido/a Señor/Señora/Señorita – “Distinguished Sir/Mrs./Ms.” This is another formal greeting, to which you can add the person’s name as well. The plural form is Distinguidos Señores” with men and *Distinguidas Señoras/Señoritas with women.
Querido/a… – “Dear…” This is an informal greeting, one you would use with someone with whom you use tú. Add the person’s name for a more personal effect.
A quien corresponda – “To Whom it May Concern”
It’s also possible that you receive correspondence starting with a simple Buenos días.

Note: Remember that greetings in Spanish letters or emails are always followed by a colon and not a coma, like this:

Estimado Señor Vásquez:
Texts and Phone Calls
In Spanish, you can send a quick greeting by only typing:

hla – It’s hola, but without the o.
q tl – ¿Qué tal?
salu2 – saludos (“greetings”)
There also are abbreviations for most of the different ways to say “what’s up”. In the Dominican Republic, you can text a friend klk, which stands for Qué lo que? It’s easy to pick these up once you’re in contact with natives.



Now let’s talk about phone calls. Spanish-speakers have different ways to answer when they pick up the phone depending on the region where they are from. Some you might come across are:

Hola – “Hello”
Aló or jaló – Typical interjections for picking up a call.
Olá – Another interjection typical of answering phone calls, mainly used in Latin America.
Bueno – “Well”
Dígame – “Tell me”
Diga – “Tell” and the “me” is implied. Diga can also translate as “do tell”.
Sí – “Yes?”
Gracias por llamar… – “Thank you for calling…” This one is a standard answer you may receive when you call a company or business.
En que le puedo ayudar? – “How may I help you?”
If you’re the one calling, you can use phrases you’ve previously learned in this post while keeping in mind the details about formality and proper use of pronouns.

Spanish Greetings for Specific Occasions
There are specific occasions throughout the year for which we use special greetings. Whether it’s a holiday, birthday or any other noteworthy event, these dates all have their own Spanish phrase.



Most often, these greetings are composed of the adjective feliz (“happy”) and the occasion’s name.

Examples:

Cumpleaños (“Birthday”) – Feliz cumpleaños
Aniversario (“Anniversary”) – Feliz aniversario
Año Nuevo (“New Year”) – Feliz Año Nuevo; Another common greeting for the New Year is Prospero Año Nuevo (“Prosperous New Year”)
San Valentín (“Valentine’s Day”) – Feliz San Valentín
Día de la Mujer (“Women’s Day”) – Feliz Día de la Mujer
Pascua (“Easter”) – Feliz Pascua
Jánuca (“Hanukkah”) – Feliz Jánuca
Navidad (“Christmas”) – Feliz Navidad
You can also say mejores deseos (“best wishes”) on occasions such as birthdays.

The Noun “Greetings” in Spanish
In Spanish, the noun for “greeting” is saludo, which derives from the verb saludar (“say hi”).

Funnily enough, saludo is also used to say bye, but generally when it’s in plural form — saludos. For example, a formal Spanish letter closure is cordiales saludos (“best regards”).

The Verbs “To Say Hi” in Spanish
There are two ways in Spanish to cover the meaning of “to say hi”: decir hola and saludar.



Decir Hola
Decir hola is composed of the verb decir (“say”) and the greeting hola.

Indicative conjugation of decir:

(yo) digo
(tú) dices (Note: The people of certain Latin American countries, such as Argentina, use vos instead of tú as the informal singular “you”, for which they would say (vos) decís instead of (tú) dices.)
(él/ella/usted) dice (Note: Usted is the formal singular “you”.)
(nosotros) decimos
(vosotros) decis (Note: Vosotros is the informal plural “you” used in Spain, but not in other Spanish-speaking countries.)
(ellos/ellas/ustedes) dicen (Note: Ustedes is the formal plural “you” in Spain, but it is used as the plural “you” for any occasion throughout Latin America.)
Decir hola is often used in imperative mode. It’s said in sentences such as: Dile hola a tu amiga de mi parte (“Say hi to your friend from me”) or Digámosle hola al vecino (“Let’s say hi to our neighbor.”)

Imperative conjugation of decir:

(tú) di (With vos, it’s (vos) decí.)
(usted) diga
(nosotros) digamos
(vosotros) decid
(ustedes) digan


To complete the phrase, add the appropriate indirect object pronoun:

dime hola – “Say hi to me”
dile hola – “Say hi to him/her” → Dile hola a tu hermana (“Say hi to your sister.”)
dinos hola – “Si hi to us”
diles hola – “Say hi to them” → Diles hola a tus primos (“Say hi to your cousins.”)
Saludar
The second verb to say hi in Spanish is saludar:

(yo) saludo
(tú) saludas (With vos, it’s (vos) saludás.)
(él/ella/usted) saluda
(nosotros) saludamos
(vosotros) saludáis
(ellos/ellas/ustedes) saludan
Over to You!
¿Qué tal, amigos?

Now that you know many ways to say hello in Spanish, what greetings will you use? Do you know any other way to say “what’s up” in Spanish? Let me know in the comments!

Start speaking your target language
from day 1 with confidence!
Sign up for my FREE Speak in a Week email
course by entering your details!​
​

FIRST NAME
EMAIL ADDRESS

What language are you learning? (Click to select)

LET'S GET SPEAKING!
​





So you might be wondering “why are you writing an article about the word ‘hero’ in Spanish?”

(In case you were wondering, the word “hero” in Spanish is héroe. But that’s not the full story, more on that in a moment).

Here’s the thing. I’m known to be a bit nerdy. You may have seen some of my cosplays on Instagram or followed my Twitter musings about the latest in superhero cinema. I’ve also taken time to learn Klingon for the Star Trek convention I went to.

So I was thinking: “why not turn my nerdy side into a source for Spanish learning?”

After all, finding native resources you enjoy is key to sticking with a language. You could explore the world of Hispanic heroes. Try to learn comic book sounds with Spanish onomatopoeia. Or learn to talk about your favourite superhero movies in Spanish.

In fact, it’s a good idea to find some cool movies to watch in your target language. It will help you improve your listening comprehension and expose you to the different regional dialects of Spanish. And, resources like movies, novels, and comic books teach you common Spanish slang.

If your goal is Spanish immersion, and you love superheroes as much as I do, then you’re in the right place.

And who knows… once you’ve read this article, maybe you’ll discover your own Spanish superpowers!

How to say “Hero” in Spanish





Let’s start with how to say “hero” in Spanish. “Hero” is héroe, but could also be protagonista. The “protagonist” or main character. The female version of “hero” in Spanish, or “heroine”, is heroína.

Sometimes heroes are called other things, right? Like…

Superhero: superhéroe
Warrior: el guerrero / la guerrera
Knight in shining armor: caballero de brillante armadura
A god or goddess: un dios / una diosa
Demigod: el semidiós / la semidiosa
Soldier: el soldado
Peacekeeper: pacificadora
Champion: el campeón / la campeona
Captain: el capitán / la capitana
Professor: el prefesor / la profesora
Mutants: los mutantes
Avenger: el vengador / la vengadora



So if you want to talk about Thor, God of Thunder, he’s Thor, dios del trueno. Professor X from the X-Men would be Profesor X. The Winter Sollder? El Soldado de Invierno.

Some superhero vocab is the same in English and Spanish. For instance, if you’re talking about Star Wars, it’s still “jedi” and “padawan”, but a “jedi master” would be maestro jedi.

But you could use a phrase like this in everyday life, too. If someone’s saved your day, you could call them “mi héroe”, or “my hero” in Spanish.

Bennys Top spanish resources
Spanish Superhero Vocabulary
It’s a good idea to have some basic Spanish vocabulary for everyday things before attempting to watch a movie or read a comic book in Spanish. But there is also some superhero-specific vocabulary you need to learn to help you along the way.

Before you delve into the fictional universe of your choice, try this tip. Read through a story summary in Spanish.




The back cover of a Spanish novel, the Wikipedia summary in Spanish for a comic book, or whatever it is you’re learning.

So, if you wanted to watch The Avengers in Spanish, you could look it up on Spanish Wikipedia, and see that they’re called Los Vengadores. Some of the personajes principales, or “main characters”: Capitán América, Ojo de Halcón (Hawkeye), Viuda Negra (Black Widow), Máquina de Guerra (War Machine), Pantera Negra (Black Panther), La Avispa (The Wasp), and Valquiria (Valkyrie). You’d learn about the miembros del equipo, or “team members”.

By learning their Spanish names, and some of the universe-specific vocab, you will understand faster. Often, the names will be the same or cognates to English, meaning they’re easy to recognize because they’re similar. But others may be a bit different, like La Avispa, or “The Wasp”.

Here are common superhero vocab to learn:

Secret identity: Identidad secreta
Mask: La máscara
Cape: Capa
Enemy: Enemigo / Enemiga
Nemesis: Némesis
Justice: Justicia
Origin: Origen
Command center: El centro de comando
Sidekick: El compañero / La compañera
Universe: El universo
Galaxy: La galaxia
Spaceship: La astronave
Battle: La batalla
War: La guerra
Immortals: Los inmortales
Power: El poder
Responsibility: La responsabilidad
Duty: El deber
Evil Villain: El villano malvado / La villana malvada
Rescue: Rescatar
Save: *Salvar
Protect: Proteger
Guard: Guardar
Fight: Luchar


Plus, you’ll want to know that “movie” is cine or película and “comic book” is el libro cómico. That way, you can say “I love superhero movies” in Spanish, or Me encantan las películas de superhéroes.

Superhero Sound FX in Spanish




If you’ve ever read a comic book, you know they’re full of sound effects like “bam!” and “pow!” And reading comics in Spanish will open up that whole world of SFX called Spanish onomatopoeia.

Spanish onomatopoeia are words that are supposed to mimic a sound. An explosion would be “BOOM!” in English, mimicking the sound. It may surprise you, but this isn’t universal. In fact, many languages have different interpretations of how a sound… sounds. Like a dog sound in English is “woof”, but in Spanish, it’s guau.



Learning onomatopoeia isn’t just helpful for reading comics, but can also help you grasp context more easily.

Following the dog bark example, what if you don’t know that the Spanish word “to bark” is ladrar? The onomatopoeia guau may help you understand that the sentence is talking about a dog barking.

The same is true when speaking. If someone said, El perro seguía ladrando, como guau guau guau … You would get the idea that “The dog kept barking.” Sometimes they’re used in sentences too, to describe what happened with a sound or when telling a story.

Hubo una fuerte explosión, como ¡PATAPLUM!
“There was a loud explosion, like ‘BOOM!’”

Nos vasos se chocan “chin-chin” con un brindis por salud.
“Our glasses clink with a toast to good health.”

Some common comic book Spanish onomatopoeia are:

Boom: Pataplum
Squeak: Ñeec
Bang: Zasca
Zap: Zas
Splash: Plaf
Pow: Pum
Om nom nom: Ñam, ñam
Hahaha: Jajaja
Ding: Rin
Achoo: Achí
Clink: Chinchín
Hiss: Siseo
Clank, clank: Tan, tan
Knock knock: Toc toc
Crack: Crag


While not superhero comics, you can practice these Spanish sounds with classic newspaper comic strips. There’s also native Spanish comics, like Supercholo, a superhero comic from Peru. Or try the humorous Pafman.

Famous Fictional Hispanic Superheroes
There are lots of Hispanic superheroes to read about! Your mind may already be racing to Marvel or DC, but let me remind you of the most infamous superhero…

Zorro
Zorro, the masked, sword-wielding vigilante, was actually the inspiration for Batman. His secret identity, Don Diego de la Vega, is from a wealthy family in California. He’s always got a bounty on his head! But his swordsmanship always allows him to escape… But not before leaving behind his trademark “Z” slashed into his foes.

The hero has been made into many books, movies, and TV shows, including The Legend of Zorro featuring Antonio Banderas. You could try your hand at the Spanish-language novel, Zorro.



Diablo
Diablo is one of the few Hispanic antiheroes featured in the DC universe, most recently in Suicide Squad. Diablo’s superhero powers give him the ability to control and expel flames from his body. But he loses control when he gets angry and hurts those around him.

Miles Morales
Thanks to the popularity of Into the Spiderverse, Miles Morales is possibly one of the most famous Latin superheroes. In the movie, he gets bit by a radioactive spider and also gains the powers of Spiderman. Although, there are many more like him, that come together to defeat an evil villain and get back to their own stories.

You can watch clips of the movie in Spanish to improve your skills.

Araña — Spidergirl




Araña literally means “spider” in Spanish. And this Spidergirl has all the same abilities as Spiderman… But she’s bilingual.

Her secret identity is Anya Corazón, and she has her own comic series called Araña, The Heart of the Spider.

White Tiger
Hector Ayala, also known as the White Tiger, was the first Hispanic superhero in the Marvel comic universe. His superhuman strength, agility, and martial arts skills made him a classic favourite. Later, his sister Ava assumes the role of White Tiger.

Miss America
One of the newer superheroes, Miss America can travel through dimensions through the power to create portals. She’s one of the members of the Young Avengers and is supposed to be getting her own series.

Practicing Your Spanish with Superhero Movies and Comics
Movies and comics give you a glimpse at more conversational Spanish and help teach you about the culture. But you’ll need some strategies to get the most from your study time with them. Here are some pointers:



Focus on what you know first. Watch a clip, or read a page of the comic, once through. Focus on identifying cognates or words you already know, and try to make sense of what you can first. Then, listen or read again. On the third try, add subtitles or look up the translation to fill in the blanks.
Take notes. Write down key phrases that pop up often, like “fighting crime”, for example. Add them to your Anki deck or flashcards to memorize so when you hear them next, you’ll grasp them fast.
Try reiterating the scene. Practice telling a friend what happened in the movie, or rewrite the dialogue as a summary. This will give you practice talking about your interests and improve your grasp on what you heard or read.
Use social media as a guide. There are lots of social media channels and accounts that post about comics and movies in Spanish. Follow them so you get exposure to how natives discuss them. Try leaving comments in Spanish for them, too!
Switch to Spanish subtitles and audio whenever you can. Sometimes a show or movie you already watch will have the option to switch to Spanish audio or add Spanish subtitles. That can help you switch up a routine you already have to a Spanish learning resource.
Go Practice Your Superhero Spanish Powers
Now go dive deep into a universe in your target language! Try finding your favourite comic in Spanish (eBay can be a great resource), or change the audio on Netflix. It’s an amazing feeling to switch one of your nerdy interests to Spanish and enjoy it in a whole new way.



What other Latin superheroes do you love? Do you have a Spanish comic book or movie resource to share? Leave a comment below and let me know!

Start speaking your target language
from day 1 with confidence!
Sign up for my FREE Speak in a Week email
course by entering your details!​
​

FIRST NAME
EMAIL ADDRESS

What language are you learning? (Click to select)

LET'S GET SPEAKING!
​


BENNY LEWIS
Founder, Fluent in 3 Months
SPEAKS: Spanish, French, German, Italian, Portuguese, Esperanto, Mandarin Chinese, American Sign Language, Dutch, Irish
Fun-loving Irish guy, full-time globe trotter and international bestselling author. Benny believes the best approach to language learning is to speak from day one.
View all posts by Benny Lewis


CLICK HERE TO SEE THE COMMENTS!
LOAD MORE
BROWSE ARTICLES BY CATEGORY
CULTURE
 
FUN
 
LANGUAGE HACKS
 
MISSIONS
 
SUCCESS STORIES
CHECK OUT BENNY'S TIPS FOR LEARNING... 
Choose Language
FEATURED IN
times ng 4ww bbc bins forbes lifehacker msn
FOLLOW US ON:

     
PRODUCTS • ABOUT BENNY • MEET BENNY • CONTACT • SPEAK IN A WEEK • LANGUAGE HACKING BOOKS • PRIVACY POLICY

Copyright © 2020 – Fluent in 3 Months

Exclusive Member of Mediavine Travel



How Rype Works
Try 14 Days Free
Brought to you by the team behind Rype, language lessons for busy people

Learn More

TOPICS
 LANGUAGES
 REVIEWS
 TRY RYPE



LANGUAGE VIDEO CLASSES SPANISH SPANISH CLASSES
25 Most Common Questions in Spanish to Start a New Conversation
 Posted On December 31, 2020 Rype 0
237
Shares
Share on Facebook
Share on Twitter
Starting a new conversation in Spanish is hard. Even in English.

Your heart starts pumping faster, palms begin to sweat, and knees become weaker. Approaching a stranger can be so difficult for some of us that many people compare it to the feeling you get from cliff diving!

And this is made worse when you can’t even speak their native language!

But no need to worry, we’ve got you covered today.

Knowing what question in Spanish to ask is crucial to getting a friendly response from a native speaker. In fact, the more questions in Spanish you have under your toolbelt, the better.

The reason being, every situation you face is going to be different, and it’s important to be prepared.

 

Most Common Questions in Spanish
Here are 25 most common questions in Spanish to start a new conversation. Let’s start with the basics…

 

Basic conversation starters
To start, here are some simple questions in Spanish to get the conversation rolling. These are typical questions you would ask in English like their name, where they’re from, asking for help, and more.

 

1. ¿Cómo te llamas? – What’s your name?

Example #1: Me llamo David. ¿Y tú, cómo te llamas? My name is David. And you, what is your name?
Example #2: ¡ Hola! Mucho gusto. ¿Cómo te llamas? Hi ! Nice to meet you. What is your name?

 

2. ¿Puedes ayudarme, por favor? – Could you help me, please?

 

3. ¿De dónde eres? – Where are you from?

Example #1: ¿De dónde es? (formal singular) – I don’t recognize your accent.  Where are you from? – No reconozco su acento. ¿De dónde es usted?
Example #2: I’m from Venezuela. Where are you from?Yo soy de Venezuela. ¿De dónde eres tú?

 

4. ¿Hablas inglés? – Do you speak English?

Example: Do you speak English at home? – ¿Hablas inglés en la casa?

 

5. ¿Dónde está el baño? – Where is the washroom?

Example: ¿Estás bien? Te ves pálido. ¿Dónde está el baño? – Are you alright? You look pale. Where’s the toilet?

 

Getting to know someone better
Now that we’ve started the conversation, we need to get to know the person we’re speaking to. These could be questions you ask when you’re with friends, on a date, or with co-workers.

 

6. ¿Dónde vives? – Where do you live?

Example: Te llevaré a casa. ¿Dónde vives? – I will drive you home. Where do you live?

 

7. ¿Cuántos años tienes? – How old are you?

Example: Tengo trenta años. ¿Cuántos años tienes? – I’m thirty years old. How old are you?

 

8. ¿Te gusta _______? – Do you like _______?

Example: ¿Te gusta este cancion? – Do you like this song?

 

9 ¿Cuál es tu _______? – Which/What is your ______?

Example: ¿Cuál es tu película favorita? – Which/What is your favorite movie?

 

10. Cuál es su número de teléfono? – What’s your telephone number?

 

11. ¿Que haces ________? – What are you doing ______?

Example: ¿Que haces esta noche? – What are you doing tonight?

 

12. Por qué no? – Why not?

 


13. ¿Y usted? – And you?

 

Navigating around in a new place
When you’re visiting a new city or country, there are important questions you should ask to get around safely. Here are some of those questions you can ask.

 

14. ¿Qué hora es? – What time is it?

Example #1: ¿Qué hora es? – Es la una de la tarde. – What time is it? -It’s one in the afternoon.
Example #2: Disculpe, ¿sabe usted qué hora es? – Excuse me, do you know what time it is?

 

15. ¿Hay un(a) ______ cerca? – Is there a ______ close by?

Example:  ¿Hay un banco cerca? – Is there a bank nearby?

 

16. ¿Como llego a el/la ______? – How do I get to ______? 

Example #1: ¿Como llego a el aeropuerto? – How do I get to the airport?
Example #2: ¿Como llego a la playa? – How do I get to the beach?

 

17. ¿Qué significa esta palabra? – What does this word mean?

 

18. Qué tiempo hace? – What’s the weather like? 

Example: ¿Qué tiempo hace? Hace sol y bastante calor. – What’s the weather like? It’s sunny and quite hot.

 

At the restaurant/shop
Most of us love exploring new restaurants or visiting shopping centers/markets. You’ll want to know how to ask the right questions in Spanish when speaking with representatives there.

 

19. Quiero un/una _______- I would like a ________. 

Example #1: Quiero una cerveza – I would like a beer
Example #2: Quiero un café – I would like a coffee

A polite way of saying this is “Me gustaria un/una ________?”

 

20. ¿Cuánto es? – How much is that?

¿Cuánto es? ¿Quieren pagar juntos o por separado? – How much is it? Do you want to pay together or separately?

 

21. ¿Tienes un/una______? – Do you have a ________?

Example #1: ¿Tienes chicle? – Do you have gum?
Example #2: Do you have more precise information on this subject? – ¿Dispone usted de información más precisa sobre este tema?

 

Bonus questions
As a special bonus, we’ve included some useful questions in Spanish that may not fit into one of our categories, but are nevertheless important.

 

22. ¿Quién es? – Who’s there?

This question is one you’ll use often whenever you’re answering the door at home or when you’re speaking to someone over the phone.

 

23. ¿Comprende? – Do you understand? 

 

24. ¿Adónde va usted? – Where are you going? 

Example: Where are you going? You have to leave in ten minutes! – ¿Para dónde vas? ¡Te tienes que ir en diez minutos!

 

25. ¡Llamar a la policía! – Call the police/ambulance!

For emergency purpose. Hopefully you’ll never have to use this!

Now it’s your turn to let us know which of these questions in Spanish were your favorite.

*/


 