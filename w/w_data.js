
//function shuffle(array) { array.sort(() => Math.random() - 0.5); }
// not used


function removeNonLetters(str) {
  return str.replace(/[^a-zA-ZÀ-ÿÄ-ÖÜßá-úÁ-Úã-õÃ-Õâ-ûÂ-ÛçÇëËí-ïÍ-ÏñÑó-úÓ-ÚüÜ]/g, '');
}


	function updateScore(w, str, delta)
	{
		const oldScore = calcScore(w, str);
		//console.log(str + ' -> ' + delta);
		const tmp = removeNonLetters(str).toLowerCase();
		//console.log(tmp);
		
		for (let i=0; i<tmp.length-Shingle; ++i)
		{
			const tmp1 = tmp.substring(i, i+Shingle);
			//console.log(tmp1);
			
			w[tmp1] = w[tmp1] ? w[tmp1]+delta : delta;
			
			if (w[tmp1] <= 0) { delete w[tmp1]; }
		}
		
		//console.log(w);
		const newScore = calcScore(w, str);
		console.log('score: ' + oldScore + ' --> ' + newScore);
	}
	
	
	function calcScore(w, str)
	{
		//console.log(str);
		const tmp = removeNonLetters(str).toLowerCase();
		//console.log(tmp);
		
		if (tmp.length < 3) return -1; // filter out junk
		
		let res = 0.1*Math.random(); // start with rnd() noise
		
		for (let i=0; i<tmp.length-Shingle; ++i)
		{
			const tmp1 = tmp.substring(i, i+Shingle);
			//console.log(tmp1);
			
			res += w[tmp1] ? w[tmp1] : 0;
		}
		
		//console.log(res);
		return res;
	}

//	function sortByScores1(w, arr)
//	{
//		arr.sort((a,b) => calcScore(w, b)/b.length - calcScore(w, a)/a.length); // sort DESC
//	}

	function sortByScores(w, arr)
	{
		arr.sort((a,b) => calcScore(w, b)/Math.sqrt(b.length) - calcScore(w, a)/Math.sqrt(a.length)); // sort DESC
	}


function parseData()
{
	const tmp = data.split('\n');
	
	const res = [];
	for (let x of tmp)
	{
		let y = x.trim().toLowerCase();
		if (y.length > 1 && y[0] != '#')
		{
			res.push(y);
		}		
	}

	const uniqueArray = res.filter((item, index) => res.indexOf(item) === index);

	return uniqueArray;
}


const data = `
Kartoffel (potato)
Tomate (tomato)
Gurke (cucumber)
Karotte (carrot)
Paprika (bell pepper)
Zwiebel (onion)
Knoblauch (garlic)
Brokkoli (broccoli)
Blumenkohl (cauliflower)
Spinat (spinach)
Spargel (asparagus)
Aubergine (eggplant)
Kürbis (pumpkin/squash)
Zucchini (zucchini/courgette)
Sellerie (celery)
Rote Beete (beetroot)
Mais (corn)
Erbsen (peas)
Bohnen (beans)
Salat (lettuce)
Birne (pear)
Pfirsich (peach)
Zitrone (lemon)
Limette (lime)
Erdbeere (strawberry)
Himbeere (raspberry)
Blaubeere (blueberry)
Brombeere (blackberry)
Kirsche (cherry)
Traube (grape)
Melone (melon)
Pflaume (plum)
Feige (fig)

Wohnzimmer (living room)
Schlafzimmer (bedroom)
Badezimmer (bathroom)
Küche (kitchen)
Esszimmer (dining room)
Flur (hallway)
Treppenhaus (staircase)
Keller (basement/cellar)
Dachboden (attic/loft)
Balkon (balcony)
Terrasse (terrace/patio)
Garten (garden)
Garage (garage)
Arbeitszimmer (study/home office)
Gästezimmer (guest room)
Spielzimmer (playroom)
Waschküche (laundry room)
Abstellraum (storage room)
Heizungsraum (boiler room)

ich esse (I eat)
du isst (you eat)
er/sie/es isst (he/she/it eats)
wir essen (we eat)
ihr esst (you all eat)
sie essen (they eat)

können (can, to be able to)
müssen (must, to have to)
sollen (should, ought to)
wollen (want, to intend to)
lassen (to let, to allow)
dürfen (may, to be allowed to)
mögen (like, to be fond of)

Ich kann Deutsch sprechen. (I can speak German.)
Darf ich das Fenster öffnen? (May I open the window?)
Du musst mehr lernen. (You have to study more.)
Wir sollen pünktlich sein. (We should be on time.)
Ich will das Buch lesen. (I want to read the book.)
Er mag Kaffee trinken. (He likes to drink coffee.)

groß (big)
klein (small)
lang (long)
kurz (short)
breit (wide)
schmal (narrow)
hoch (high/tall)
niedrig (low)
schwer (heavy)
leicht (light)
schnell (fast/quick)
langsam (slow)
heiß (hot)
kalt (cold)
warm (warm)
kühl (cool)
trocken (dry)
nass (wet)
teuer (expensive)
billig (cheap)
gut (good)
schlecht (bad)
schön (beautiful/nice)
hässlich (ugly)
sauber (clean)
schmutzig (dirty)
neu (new)
alt (old)
frisch (fresh)
faul (lazy)


    arbeiten (to work)
    essen (to eat)
    trinken (to drink)
    gehen (to go)
    kommen (to come)
    sein (to be)
    haben (to have)
    machen (to make, to do)
    lesen (to read)
    schreiben (to write)
    sprechen (to speak)
    verstehen (to understand)
    helfen (to help)
    lernen (to learn)
    spielen (to play)
    sehen (to see)
    hören (to hear)
    sagen (to say)
    denken (to think)
    wollen (to want)
    können (to be able to, can)
    müssen (to have to, must)
    dürfen (to be allowed to, may)
    lassen (to let, to allow)


Flauschig - Fluffy
Hügel - Hill
Glitzer - Glitter
Quelle - Source
Gemälde - Painting
Ausblick - View
Löwenzahn - Dandelion
Schnäppchen - Bargain
Schmacht - Longing
Entzückend - Enchanting
Habseligkeiten - Belongings
Marmelade - Jam
Tusch - Fanfare
Bändiger - Tamer
Meerschweinchen - Guinea Pig
Eichhörnchen - Squirrel
Pusteblume - Dandelion Clock
Verzauberung - Enchantment
Fernweh - Wanderlust
Zimperlich - Picky

Immer - manchmal - nie
Alles - etwas - nichts
Jeder - jemand - niemand
Überall - irgendwo - nirgendwo

#

#Generic category words in German with English translation, like food, drink, clothes, place to live, means of transportation etc

Food - Essen
Drink - Getränk
Clothes - Kleidung
Place to live - Wohnort
Means of transportation - Transportmittel
Furniture - Möbel
Electronics - Elektronik
Sports - Sport
Animals - Tiere
Plants - Pflanzen
Colors - Farben
Jobs - Berufe
Hobbies - Hobbys
Music - Musik
Art - Kunst
Books - Bücher
Technology - Technologie
Education - Bildung
Health - Gesundheit
Nature - Natur

#Generic category words in Spanish with English translation, like food, drink, clothes, place to live, means of transportation etc

Food - Comida
Drink - Bebida
Clothes - Ropa
Place to live - Lugar para vivir
Means of transportation - Medios de transporte
Furniture - Muebles
Electronics - Electrónica
Sports - Deportes
Animals - Animales
Plants - Plantas
Colors - Colores
Jobs - Trabajos
Hobbies - Pasatiempos
Music - Música
Art - Arte
Books - Libros
Technology - Tecnología
Education - Educación
Health - Salud
Nature - Naturaleza

#Generic category words in French with English translation, like food, drink, clothes, place to live, means of transportation etc

Food - Nourriture
Drink - Boisson
Clothes - Vêtements
Place to live - Lieu de résidence
Means of transportation - Moyen de transport
Furniture - Mobilier
Electronics - Électronique
Sports - Sports
Animals - Animaux
Plants - Plantes
Colors - Couleurs
Jobs - Emplois
Hobbies - Loisirs
Music - Musique
Art - Art
Books - Livres
Technology - Technologie
Education - Éducation
Health - Santé
Nature - Nature

#Generic category words in Italian with English translation, like food, drink, clothes, place to live, means of transportation etc

Food - Cibo
Drink - Bevanda
Clothes - Vestiti
Place to live - Luogo di residenza
Means of transportation - Mezzi di trasporto
Furniture - Mobili
Electronics - Elettronica
Sports - Sport
Animals - Animali
Plants - Piante
Colors - Colori
Jobs - Lavori
Hobbies - Hobby
Music - Musica
Art - Arte
Books - Libri
Technology - Tecnologia
Education - Educazione
Health - Salute
Nature - Natura


#Generic category words in Portuguese with English translation, like food, drink, clothes, place to live, means of transportation etc

Food - Comida
Drink - Bebida
Clothes - Roupas
Place to live - Local para morar
Means of transportation - Meios de transporte
Furniture - Móveis
Electronics - Eletrônicos
Sports - Esportes
Animals - Animais
Plants - Plantas
Colors - Cores
Jobs - Empregos
Hobbies - Hobbies
Music - Música
Art - Arte
Books - Livros
Technology - Tecnologia
Education - Educação
Health - Saúde
Nature - Natureza

# 20 random circumstances of time,  e.g. yesterday,  today at 5, etc... in German with English translation

gestern - yesterday
heute - today
morgen - tomorrow
vor einer Stunde - an hour ago
später - later
am Wochenende - on the weekend
nächste Woche - next week
letzter Monat - last month
in zwei Tagen - in two days
diesen Abend - this evening
in der Vergangenheit - in the past
in der Zukunft - in the future
vor Kurzem - recently
am Vormittag - in the morning
heute Abend - tonight
vor langer Zeit - a long time ago
nächstes Jahr - next year
in wenigen Minuten - in a few minutes
diesen Sommer - this summer
in der Nacht - at night

# 20 random circumstances of time,  e.g. yesterday,  today at 5, etc... in Spanish with English translation

ayer - yesterday
hoy - today
mañana - tomorrow
hace una hora - an hour ago
más tarde - later
durante el fin de semana - during the weekend
la próxima semana - next week
el mes pasado - last month
en dos días - in two days
esta noche - tonight
en el pasado - in the past
en el futuro - in the future
recientemente - recently
por la mañana - in the morning
esta tarde - this afternoon
hace mucho tiempo - a long time ago
el próximo año - next year
en pocos minutos - in a few minutes
este verano - this summer
por la noche - at night


# 20 random circumstances of time,  e.g. yesterday,  today at 5, etc... in French with English translation

hier - yesterday
aujourd'hui - today
demain - tomorrow
il y a une heure - an hour ago
plus tard - later
ce week-end - this weekend
la semaine prochaine - next week
le mois dernier - last month
dans deux jours - in two days
ce soir - tonight
dans le passé - in the past
dans le futur - in the future
récemment - recently
le matin - in the morning
cet après-midi - this afternoon
il y a longtemps - a long time ago
l'année prochaine - next year
dans quelques minutes - in a few minutes
cet été - this summer
la nuit - at night

# 20 random circumstances of time,  e.g. yesterday,  today at 5, etc... in Italian with English translation

ieri - yesterday
oggi - today
domani - tomorrow
un'ora fa - an hour ago
più tardi - later
nel fine settimana - during the weekend
la settimana prossima - next week
il mese scorso - last month
tra due giorni - in two days
stasera - tonight
in passato - in the past
in futuro - in the future
di recente - recently
al mattino - in the morning
questo pomeriggio - this afternoon
tanto tempo fa - a long time ago
l'anno prossimo - next year
tra pochi minuti - in a few minutes
quest'estate - this summer
di notte - at night

# 20 random circumstances of time,  e.g. yesterday,  today at 5, etc... in Portuguese with English translation

ontem - yesterday
hoje - today
amanhã - tomorrow
há uma hora - an hour ago
mais tarde - later
durante o fim de semana - during the weekend
na próxima semana - next week
no mês passado - last month
em dois dias - in two days
esta noite - tonight
no passado - in the past
no futuro - in the future
recentemente - recently
de manhã - in the morning
esta tarde - this afternoon
há muito tempo - a long time ago
no próximo ano - next year
em poucos minutos - in a few minutes
este verão - this summer
à noite - at night

# 20 random circumstances of place,  e.g. in the house, at work etc... in German with English translation

Im Haus - In the house
Im Büro - At the office
In der Schule - At school
Im Krankenhaus - At the hospital
Im Restaurant - At the restaurant
Im Park - In the park
In der Bibliothek - In the library
Im Supermarkt - At the supermarket
Im Fitnessstudio - At the gym
In der Kirche - In the church
Am Strand - At the beach
In der U-Bahn - In the subway
Im Kino - At the cinema
Im Flugzeug - On the airplane
Im Museum - In the museum
Im Schwimmbad - At the swimming pool
Auf der Baustelle - At the construction site
Im Hotel - At the hotel
Im Zoo - At the zoo
In der Bar - At the bar

# 20 random circumstances of place,  e.g. in the house, at work etc... in Spanish with English translation

En casa - At home
En el trabajo - At work
En la escuela - At school
En el hospital - At the hospital
En el restaurante - At the restaurant
En el parque - In the park
En la biblioteca - In the library
En el supermercado - At the supermarket
En el gimnasio - At the gym
En la iglesia - In the church
En la playa - At the beach
En el metro - In the subway
En el cine - At the cinema
En el avión - On the airplane
En el museo - In the museum
En la piscina - At the swimming pool
En la obra - At the construction site
En el hotel - At the hotel
En el zoológico - At the zoo
En el bar - At the bar

# 20 random circumstances of place,  e.g. in the house, at work etc... in French with English translation

À la maison - At home
Au travail - At work
À l'école - At school
À l'hôpital - At the hospital
Au restaurant - At the restaurant
Au parc - At the park
À la bibliothèque - At the library
Au supermarché - At the supermarket
À la salle de sport - At the gym
À l'église - At the church
À la plage - At the beach
Dans le métro - In the subway
Au cinéma - At the cinema
Dans l'avion - On the airplane
Au musée - At the museum
À la piscine - At the swimming pool
Sur le chantier - At the construction site
À l'hôtel - At the hotel
Au zoo - At the zoo
Au bar - At the bar

# 20 random circumstances of place,  e.g. in the house, at work etc... in Italian with English translation

In casa - At home
Al lavoro - At work
A scuola - At school
All'ospedale - At the hospital
Al ristorante - At the restaurant
Al parco - At the park
In biblioteca - In the library
Al supermercato - At the supermarket
In palestra - At the gym
In chiesa - In the church
In spiaggia - At the beach
In metropolitana - In the subway
Al cinema - At the cinema
In aereo - On the airplane
Al museo - At the museum
In piscina - At the swimming pool
Sul cantiere - At the construction site
All'hotel - At the hotel
Allo zoo - At the zoo
Al bar - At the bar

# 20 random circumstances of place,  e.g. in the house, at work etc... in Portuguese with English translation

Em casa - At home
No trabalho - At work
Na escola - At school
No hospital - At the hospital
No restaurante - At the restaurant
No parque - At the park
Na biblioteca - In the library
No supermercado - At the supermarket
Na academia - At the gym
Na igreja - At the church
Na praia - At the beach
No metrô - In the subway
No cinema - At the cinema
No avião - On the airplane
No museu - At the museum
Na piscina - At the swimming pool
Na obra - At the construction site
No hotel - At the hotel
No zoológico - At the zoo
No bar - At the bar

# 20 random frequencies, e.g. daily, rarely, often... in German with English translation

Täglich - Daily
Selten - Rarely
Häufig - Frequently
Gelegentlich - Occasionally
Regelmäßig - Regularly
Manchmal - Sometimes
Immer - Always
Ab und zu - Once in a while
Jährlich - Yearly
Wöchentlich - Weekly
Mehrmals pro Woche - Multiple times per week
Monatlich - Monthly
Kaum - Hardly
Alle paar Tage - Every few days
Stündlich - Hourly
Nie - Never
Oft - Often
Einmal im Jahr - Once a year
Mehrmals täglich - Several times a day
Sporadisch - Sporadically

# 20 random frequencies, e.g. daily, rarely, often... in Spanish with English translation

Diariamente - Daily
Raramente - Rarely
Frecuentemente - Frequently
Ocasionalmente - Occasionally
Regularmente - Regularly
A veces - Sometimes
Siempre - Always
De vez en cuando - Once in a while
Anualmente - Yearly
Semanalmente - Weekly
Varias veces por semana - Several times per week
Mensualmente - Monthly
Casi nunca - Hardly ever
Cada pocos días - Every few days
Por hora - Hourly
Nunca - Never
A menudo - Often
Una vez al año - Once a year
Varias veces al día - Several times a day
Esporádicamente - Sporadically

# 20 random frequencies, e.g. daily, rarely, often... in French with English translation

Quotidiennement - Daily
Rarement - Rarely
Fréquemment - Frequently
Occasionnellement - Occasionally
Régulièrement - Regularly
Parfois - Sometimes
Toujours - Always
De temps en temps - From time to time
Annuellement - Yearly
Hebdomadairement - Weekly
Plusieurs fois par semaine - Multiple times per week
Mensuellement - Monthly
Presque jamais - Hardly ever
Tous les quelques jours - Every few days
À chaque heure - Hourly
Jamais - Never
Souvent - Often
Une fois par an - Once a year
Plusieurs fois par jour - Several times a day
De manière sporadique - Sporadically

# 20 random frequencies, e.g. daily, rarely, often... in Italian with English translation

Giornalmente - Daily
Raramente - Rarely
Spesso - Often
Occasionalmente - Occasionally
Regolarmente - Regularly
A volte - Sometimes
Sempre - Always
Ogni tanto - Once in a while
Annualmente - Yearly
Settimanalmente - Weekly
Più volte alla settimana - Multiple times per week
Mensilmente - Monthly
Quasi mai - Hardly ever
Ogni pochi giorni - Every few days
Ogni ora - Hourly
Mai - Never
Molto spesso - Very often
Una volta all'anno - Once a year
Diverse volte al giorno - Several times a day
Sporadicamente - Sporadically

# 20 random frequencies, e.g. daily, rarely, often... in Portuguese with English translation

Diariamente - Daily
Raramente - Rarely
Frequentemente - Frequently
Ocasionalmente - Occasionally
Regularmente - Regularly
Às vezes - Sometimes
Sempre - Always
De vez em quando - Once in a while
Anualmente - Yearly
Semanalmente - Weekly
Várias vezes por semana - Several times per week
Mensalmente - Monthly
Quase nunca - Hardly ever
A cada poucos dias - Every few days
Por hora - Hourly
Nunca - Never
Com frequência - Often
Uma vez por ano - Once a year
Várias vezes por dia - Several times a day
Esporadicamente - Sporadically

# clothes items in German with English translation

T-Shirt - T-Shirt
Hemd - Shirt
Bluse - Blouse
Pullover - Sweater
Jacke - Jacket
Mantel - Coat
Hose - Pants
Jeans - Jeans
Rock - Skirt
Kleid - Dress
Anzug - Suit
Krawatte - Tie
Socken - Socks
Schuhe - Shoes
Stiefel - Boots
Handschuhe - Gloves
Mütze - Hat
Schal - Scarf
Unterwäsche - Underwear
Badeanzug - Swimsuit

# clothes items in Spanish with English translation

Camiseta - T-shirt
Camisa - Shirt
Blusa - Blouse
Suéter - Sweater
Chaqueta - Jacket
Abrigo - Coat
Pantalones - Pants
Vaqueros - Jeans
Falda - Skirt
Vestido - Dress
Traje - Suit
Corbata - Tie
Calcetines - Socks
Zapatos - Shoes
Botas - Boots
Guantes - Gloves
Sombrero - Hat
Bufanda - Scarf
Ropa interior - Underwear
Traje de baño - Swimsuit

# clothes items in French with English translation

T-shirt - T-shirt
Chemise - Shirt
Blouse - Blouse
Pull - Sweater
Veste - Jacket
Manteau - Coat
Pantalon - Pants/Trousers
Jeans - Jeans
Jupe - Skirt
Robe - Dress
Costume - Suit
Cravate - Tie
Chaussettes - Socks
Chaussures - Shoes
Bottes - Boots
Gants - Gloves
Chapeau - Hat
Écharpe - Scarf
Sous-vêtements - Underwear
Maillot de bain - Swimsuit

# clothes items in Italian with English translation

Maglietta - T-shirt
Camicia - Shirt
Blusa - Blouse
Maglione - Sweater
Giacca - Jacket
Cappotto - Coat
Pantaloni - Pants/Trousers
Jeans - Jeans
Gonna - Skirt
Vestito - Dress
Abito - Suit
Cravatta - Tie
Calzini - Socks
Scarpe - Shoes
Stivali - Boots
Guanti - Gloves
Cappello - Hat
Sciarpa - Scarf
Biancheria intima - Underwear
Costume da bagno - Swimsuit

# clothes items in Portuguese with English translation

Camiseta - T-shirt
Camisa - Shirt
Blusa - Blouse
Suéter - Sweater
Jaqueta - Jacket
Casaco - Coat
Calças - Pants/Trousers
Jeans - Jeans
Saia - Skirt
Vestido - Dress
Terno - Suit
Gravata - Tie
Meias - Socks
Sapatos - Shoes
Botas - Boots
Luvas - Gloves
Chapéu - Hat
Cachecol - Scarf
Roupa íntima - Underwear
Maiô - Swimsuit

# furniture words In German with English translation

Tisch - Table
Stuhl - Chair
Sofa - Sofa
Bett - Bed
Schrank - Cabinet
Regal - Shelf
Kommode - Dresser
Couch - Couch
Sessel - Armchair
Hocker - Stool
Schreibtisch - Desk
Bücherregal - Bookshelf
Esstisch - Dining table
Nachttisch - Nightstand
Kleiderschrank - Wardrobe
Sideboard - Sideboard
Vitrine - Display cabinet
Spiegel - Mirror
Garderobe - Coat rack
TV-Schrank - TV stand

# furniture words In Spanish with English translation

Mesa - Table
Silla - Chair
Sofá - Sofa
Cama - Bed
Armario - Wardrobe
Estantería - Bookshelf
Cajonera - Chest of drawers
Diván - Chaise longue
Taburete - Stool
Escritorio - Desk
Mesita de noche - Nightstand
Mueble de televisión - TV stand
Aparador - Sideboard
Espejo - Mirror
Cómoda - Dresser
Cuna - Crib
Banqueta - Bench
Perchero - Coat rack
Cómoda - Dresser
Vitrina - Display cabinet

# furniture words In French with English translation

Table - Table
Chaise - Chair
Canapé - Sofa
Lit - Bed
Armoire - Wardrobe
Étagère - Shelf
Commode - Dresser
Fauteuil - Armchair
Tabouret - Stool
Bureau - Desk
Table de chevet - Nightstand
Meuble TV - TV stand
Buffet - Sideboard
Miroir - Mirror
Berceau - Crib
Banc - Bench
Porte-manteau - Coat rack
Coiffeuse - Vanity table
Vitrine - Display cabinet
Penderie - Clothes rack

# furniture words In Italian with English translation

Tavolo - Table
Sedia - Chair
Divano - Sofa
Letto - Bed
Armadio - Wardrobe
Scaffale - Shelf
Cassettiera - Chest of drawers
Poltrona - Armchair
Sgabello - Stool
Scrivania - Desk
Comodino - Nightstand
Mobile TV - TV stand
Vetrina - Display cabinet
Specchio - Mirror
Culla - Crib
Panchina - Bench
Attaccapanni - Coat rack
Toeletta - Vanity table
Libreria - Bookcase
Appendiabiti - Clothes hanger

# furniture words In Portuguese with English translation

Mesa - Table
Cadeira - Chair
Sofá - Sofa
Cama - Bed
Guarda-roupa - Wardrobe
Estante - Bookshelf
Cômoda - Dresser
Poltrona - Armchair
Banqueta - Stool
Escrivaninha - Desk
Criado-mudo - Nightstand
Rack - TV stand
Bufê - Sideboard
Espelho - Mirror
Berço - Crib
Banco - Bench
Cabideiro - Coat rack
Penteadeira - Vanity table
Prateleira - Shelf
Cabide - Clothes hanger

# kitchen utencils in German with English translation

Der Löffel - The spoon
Die Gabel - The fork
Das Messer - The knife
Der Teller - The plate
Die Schüssel - The bowl
Der Topf - The pot
Die Pfanne - The pan
Das Sieb - The sieve
Der Schneebesen - The whisk
Der Pfannenwender - The spatula
Der Kochlöffel - The cooking spoon
Die Schneidematte - The cutting board
Der Dosenöffner - The can opener
Der Korkenzieher - The corkscrew
Die Teekanne - The teapot
Die Kaffeemaschine - The coffee machine
Die Reibe - The grater
Die Zange - The tongs
Der Mixer - The blender
Der Eierbecher - The egg cup

# kitchen utencils in Spanish with English translation

La cuchara - The spoon
El tenedor - The fork
El cuchillo - The knife
El plato - The plate
El bol - The bowl
La olla - The pot
La sartén - The pan
El colador - The strainer
El batidor - The whisk
La espátula - The spatula
La cuchara de cocina - The cooking spoon
La tabla de cortar - The cutting board
El abrelatas - The can opener
El sacacorchos - The corkscrew
La tetera - The teapot
La cafetera - The coffee maker
El rallador - The grater
Las pinzas - The tongs
La batidora - The blender
La huevera - The egg cup

# kitchen utencils in French with English translation

La cuillère - The spoon
La fourchette - The fork
Le couteau - The knife
L'assiette (f) - The plate
Le bol - The bowl
La casserole - The saucepan
La poêle - The frying pan
La passoire - The strainer
Le fouet - The whisk
La spatule - The spatula
La louche - The ladle
La planche à découper - The cutting board
L'ouvre-boîte (m) - The can opener
Le tire-bouchon - The corkscrew
La théière - The teapot
La cafetière - The coffee maker
La râpe - The grater
Les pinces (f) - The tongs
Le mixeur - The blender
Le coquetier - The egg cup

# kitchen utencils in Italian with English translation

Il cucchiaio - The spoon
La forchetta - The fork
Il coltello - The knife
Il piatto - The plate
La ciotola - The bowl
La pentola - The pot
La padella - The pan
Il colino - The strainer
La frusta - The whisk
La spatola - The spatula
Il mestolo - The ladle
Il tagliere - The cutting board
L'apriscatole (m) - The can opener
Il cavatappi - The corkscrew
La teiera - The teapot
La macchina del caffè - The coffee machine
La grattugia - The grater
Le pinze - The tongs
Il frullatore - The blender
Il portauovo - The egg cup


# kitchen utencils in Portuguese with English translation

A colher - The spoon
O garfo - The fork
A faca - The knife
O prato - The plate
A tigela - The bowl
A panela - The pot
A frigideira - The frying pan
O coador - The strainer
O batedor - The whisk
A espátula - The spatula
A concha - The ladle
A tábua de cortar - The cutting board
O abridor de latas - The can opener
O saca-rolhas - The corkscrew
A bule - The teapot
A cafeteira - The coffee maker
O ralador - The grater
As pinças - The tongs
O liquidificador - The blender
O porta-ovo - The egg cup

# food words In German with English translation

Der Apfel - The apple
Die Banane - The banana
Die Orange - The orange
Die Erdbeere - The strawberry
Die Traube - The grape
Die Karotte - The carrot
Die Kartoffel - The potato
Die Zwiebel - The onion
Der Knoblauch - The garlic
Das Brot - The bread
Die Butter - The butter
Der Käse - The cheese
Das Fleisch - The meat
Der Fisch - The fish
Die Hühnchen - The chicken
Der Reis - The rice
Die Nudeln - The pasta
Die Tomate - The tomato
Die Salat - The salad
Das Ei - The egg

# food words In Spanish with English translation

La manzana - The apple
El plátano - The banana
La naranja - The orange
La fresa - The strawberry
La uva - The grape
La zanahoria - The carrot
La patata / La papa - The potato
La cebolla - The onion
El ajo - The garlic
El pan - The bread
La mantequilla - The butter
El queso - The cheese
La carne - The meat
El pescado - The fish
El pollo - The chicken
El arroz - The rice
Los fideos / La pasta - The pasta
El tomate - The tomato
La ensalada - The salad
El huevo - The egg

# food words In French with English translation

La pomme - The apple
La banane - The banana
L'orange (f) - The orange
La fraise - The strawberry
Le raisin - The grape
La carotte - The carrot
La pomme de terre - The potato
L'oignon (m) - The onion
L'ail (m) - The garlic
Le pain - The bread
Le beurre - The butter
Le fromage - The cheese
La viande - The meat
Le poisson - The fish
Le poulet - The chicken
Le riz - The rice
Les pâtes (f) - The pasta
La tomate - The tomato
La salade - The salad
L'œuf (m) - The egg

# food words In Italian with English translation

La mela - The apple
La banana - The banana
L'arancia (f) - The orange
La fragola - The strawberry
L'uva - The grape
La carota - The carrot
La patata - The potato
La cipolla - The onion
L'aglio (m) - The garlic
Il pane - The bread
Il burro - The butter
Il formaggio - The cheese
La carne - The meat
Il pesce - The fish
Il pollo - The chicken
Il riso - The rice
Le paste - The pasta
Il pomodoro - The tomato
L'insalata (f) - The salad
L'uovo - The egg

# food words In Portuguese with English translation

A maçã - The apple
A banana - The banana
A laranja - The orange
O morango - The strawberry
A uva - The grape
A cenoura - The carrot
A batata - The potato
A cebola - The onion
O alho - The garlic
O pão - The bread
A manteiga - The butter
O queijo - The cheese
A carne - The meat
O peixe - The fish
O frango - The chicken
O arroz - The rice
A massa - The pasta
O tomate - The tomato
A salada - The salad
O ovo - The egg

# scientific words, like idea, hypothesis, formula in German with English translations

Die Idee - The idea
Die Hypothese - The hypothesis
Die Theorie - The theory
Das Experiment - The experiment
Die Beobachtung - The observation
Die Messung - The measurement
Die Daten - The data
Die Analyse - The analysis
Die Ergebnisse - The results
Die Schlussfolgerung - The conclusion
Die Formel - The formula
Der Beweis - The proof
Die Variable - The variable
Der Parameter - The parameter
Die Gleichung - The equation
Die Konstante - The constant
Die Skala - The scale
Die Einheit - The unit
Die Abhängigkeit - The dependence
Der Zusammenhang - The relationship

# scientific words, like idea, hypothesis, formula in Spanish with English translations

La idea - The idea
La hipótesis - The hypothesis
La teoría - The theory
El experimento - The experiment
La observación - The observation
La medición - The measurement
Los datos - The data
El análisis - The analysis
Los resultados - The results
La conclusión - The conclusion
La fórmula - The formula
La prueba - The proof
La variable - The variable
El parámetro - The parameter
La ecuación - The equation
La constante - The constant
La escala - The scale
La unidad - The unit
La dependencia - The dependence
La relación - The relationship


# scientific words, like idea, hypothesis, formula in French with English translations

L'idée - The idea
L'hypothèse - The hypothesis
La théorie - The theory
L'expérience - The experiment
L'observation - The observation
La mesure - The measurement
Les données - The data
L'analyse - The analysis
Les résultats - The results
La conclusion - The conclusion
La formule - The formula
La preuve - The proof
La variable - The variable
Le paramètre - The parameter
L'équation - The equation
La constante - The constant
L'échelle - The scale
L'unité - The unit
La dépendance - The dependence
La relation - The relationship

# scientific words, like idea, hypothesis, formula in Italian with English translations

L'idea - The idea
L'ipotesi - The hypothesis
La teoria - The theory
L'esperimento - The experiment
L'osservazione - The observation
La misurazione - The measurement
I dati - The data
L'analisi - The analysis
I risultati - The results
La conclusione - The conclusion
La formula - The formula
La prova - The proof
La variabile - The variable
Il parametro - The parameter
L'equazione - The equation
La costante - The constant
La scala - The scale
L'unità - The unit
La dipendenza - The dependence
La relazione - The relationship

# scientific words, like idea, hypothesis, formula in Portuguese with English translations

A ideia - The idea
A hipótese - The hypothesis
A teoria - The theory
O experimento - The experiment
A observação - The observation
A medição - The measurement
Os dados - The data
A análise - The analysis
Os resultados - The results
A conclusão - The conclusion
A fórmula - The formula
A prova - The proof
A variável - The variable
O parâmetro - The parameter
A equação - The equation
A constante - The constant
A escala - The scale
A unidade - The unit
A dependência - The dependence
A relação - The relationship

# 20 common adjectives in German with English translation

groß (big)
klein (small)
schön (beautiful)
hässlich (ugly)
gut (good)
schlecht (bad)
schnell (fast)
langsam (slow)
alt (old)
jung (young)
teuer (expensive)
billig (cheap)
einfach (simple)
schwierig (difficult)
lecker (delicious)
frisch (fresh)
warm (warm)
kalt (cold)
laut (loud)
leise (quiet)

# 20 common adjectives in Spanish with English translation

grande (big)
pequeño (small)
hermoso (beautiful)
feo (ugly)
bueno (good)
malo (bad)
rápido (fast)
lento (slow)
viejo (old)
joven (young)
caro (expensive)
barato (cheap)
fácil (easy)
difícil (difficult)
delicioso (delicious)
fresco (fresh)
caliente (hot)
frío (cold)
ruidoso (loud)
tranquilo (calm)

# 20 common adjectives in French with English translation

grand(e) (big)
petit(e) (small)
beau (beautiful)
laid(e) (ugly)
bon(ne) (good)
mauvais(e) (bad)
rapide (fast)
lent(e) (slow)
vieux/vieille (old)
jeune (young)
cher/chère (expensive)
bon marché (cheap)
facile (easy)
difficile (difficult)
délicieux/délicieuse (delicious)
frais/fraîche (fresh)
chaud(e) (hot)
froid(e) (cold)
bruyant(e) (noisy)
calme (calm)

# 20 common adjectives in Italian with English translation

grande (big)
piccolo (small)
bello (beautiful)
brutto (ugly)
buono (good)
cattivo (bad)
veloce (fast)
lento (slow)
vecchio (old)
giovane (young)
costoso (expensive)
economico (cheap)
facile (easy)
difficile (difficult)
delizioso (delicious)
fresco (fresh)
caldo (hot)
freddo (cold)
rumoroso (noisy)
tranquillo (calm)

# 20 common adjectives in Portuguese with English translation

grande (big)
pequeno (small)
bonito (beautiful)
feio (ugly)
bom (good)
ruim (bad)
rápido (fast)
lento (slow)
velho (old)
jovem (young)
caro (expensive)
barato (cheap)
fácil (easy)
difícil (difficult)
delicioso (delicious)
fresco (fresh)
quente (hot)
frio (cold)
barulhento (noisy)
tranquilo (calm)

# Here are 20 common adverbs in German with their English translations:

oft - often
immer - always
schnell - quickly
langsam - slowly
gerne - gladly
bald - soon
vielleicht - maybe
bereits - already
sofort - immediately
manchmal - sometimes
gern - willingly
selten - rarely
gestern - yesterday
heute - today
morgen - tomorrow
hier - here
dort - there
dort drüben - over there
sehr - very
echt - really

# 20 common adverbs in Spanish with English translation

siempre - always
nunca - never
también - also
nunca más - never again
a menudo - often
rápidamente - quickly
lentamente - slowly
bien - well
mal - badly
tarde - late
temprano - early
ahora - now
luego - later
todavía - still
ya - already
aquí - here
allí - there
lejos - far
cerca - near
bastante - quite

# 20 common adverbs in French with English translation

souvent - often
toujours - always
rapidement - quickly
lentement - slowly
bien - well
mal - badly
beaucoup - a lot
peu - a little
déjà - already
encore - still/yet
ici - here
là - there
maintenant - now
hier - yesterday
demain - tomorrow
vite - fast
doucement - gently
vraiment - truly/really
parfois - sometimes
tôt - early

# 20 common adverbs in Italian with English translation

sempre - always
mai - never
molto - very/much
poco - little/few
velocemente - quickly
lentamente - slowly
bene - well
male - badly
spesso - often
subito - immediately
ancora - still/yet
qui - here
là - there
adesso - now
prima - before/earlier
dopo - after/later
presto - soon/early
tardi - late
proprio - really/just
già - already

# 20 common adverbs in Portuguese with English translation

sempre - always
nunca - never
também - also/too
ainda - still/yet
já - already
muito - very/much
pouco - little/few
rapidamente - quickly
lentamente - slowly
bem - well
mal - badly
bastante - quite/a lot
agora - now
depois - after/later
cedo - early
tarde - late
aqui - here
lá - there
bastante - enough
certamente - certainly/surely

# 50 common German verbs with English translations

sein - to be
haben - to have
werden - to become
machen - to do/make
sagen - to say
gehen - to go
kommen - to come
können - to be able to
wollen - to want
müssen - to have to/must
sehen - to see
geben - to give
finden - to find
nehmen - to take
wissen - to know
denken - to think
tun - to do
sprechen - to speak
liegen - to lie (be situated)
helfen - to help
nehmen - to take
stehen - to stand
bleiben - to stay
glauben - to believe
setzen - to set/put
bringen - to bring
halten - to hold
führen - to lead
leben - to live
arbeiten - to work
verstehen - to understand
meinen - to mean
fragen - to ask
sagen - to tell
schreiben - to write
spielen - to play
lesen - to read
lernen - to learn
bekommen - to receive/get
sehen - to see
stehen - to stand
fahren - to drive
bekommen - to get
sprechen - to speak
suchen - to search
denken - to think
öffnen - to open
schließen - to close
treffen - to meet
fühlen - to feel

# 50 common Spanish verbs with English translations

ser - to be
estar - to be
tener - to have
hacer - to do/make
decir - to say/tell
ir - to go
venir - to come
poder - to be able to
querer - to want
deber - to have to/must/ought to
ver - to see
dar - to give
encontrar - to find
tomar - to take
saber - to know
pensar - to think
sentir - to feel
hablar - to speak
llevar - to carry/wear/take
ayudar - to help
necesitar - to need
gustar - to like
poner - to put/place
salir - to go out/leave
entender - to understand
conocer - to know/meet
vivir - to live
trabajar - to work
estudiar - to study
comer - to eat
beber - to drink
dormir - to sleep
comprar - to buy
vender - to sell
aprender - to learn
escribir - to write
leer - to read
escuchar - to listen
mirar - to look/watch
seguir - to follow/continue
esperar - to wait/hope
jugar - to play
creer - to believe
sentirse - to feel (emotionally)
encontrar - to meet/find
abrir - to open
cerrar - to close
pensar - to plan/think
conocer - to be familiar with
sentir - to regret

# 50 common French verbs with English translations

être - to be
avoir - to have
faire - to do/make
dire - to say/tell
aller - to go
venir - to come
pouvoir - to be able to
vouloir - to want
devoir - to have to/must
voir - to see
donner - to give
trouver - to find
prendre - to take
savoir - to know
penser - to think
sentir - to feel
parler - to speak
aimer - to love/like
comprendre - to understand
apprendre - to learn
travailler - to work
manger - to eat
boire - to drink
dormir - to sleep
sortir - to go out
venir - to come
partir - to leave
arriver - to arrive
vivre - to live
étudier - to study
regarder - to watch/look
écouter - to listen
lire - to read
écrire - to write
acheter - to buy
vendre - to sell
penser - to think
connaître - to know/be familiar with
montrer - to show
jouer - to play
croire - to believe
attendre - to wait
choisir - to choose
sentir - to smell
voir - to meet/see
ouvrir - to open
fermer - to close
finir - to finish
partir - to start/leave
courir - to run

# 50 common Italian verbs with English translations

essere - to be
avere - to have
fare - to do/make
dire - to say/tell
andare - to go
venire - to come
potere - to be able to
volere - to want
dovere - to have to/must
vedere - to see
dare - to give
trovare - to find
prendere - to take
sapere - to know
pensare - to think
sentire - to hear/feel
parlare - to speak
amare - to love
capire - to understand
studiare - to study
lavorare - to work
mangiare - to eat
bere - to drink
dormire - to sleep
uscire - to go out
venire - to come
partire - to leave
arrivare - to arrive
vivere - to live
imparare - to learn
guardare - to look/watch
ascoltare - to listen
leggere - to read
scrivere - to write
comprare - to buy
vendere - to sell
pensare - to think
conoscere - to know/be familiar with
mostrare - to show
giocare - to play
credere - to believe
aspettare - to wait
scegliere - to choose
sentire - to smell
vedere - to meet/see
aprire - to open
chiudere - to close
finire - to finish
partire - to start/leave
correre - to run

# 50 common Portuguese verbs with English translations

ser - to be
estar - to be
ter - to have
fazer - to do/make
dizer - to say/tell
ir - to go
vir - to come
poder - to be able to
querer - to want
precisar - to need
ver - to see
dar - to give
encontrar - to find
pegar - to take
saber - to know
pensar - to think
sentir - to feel
falar - to speak
amar - to love
entender - to understand
aprender - to learn
trabalhar - to work
comer - to eat
beber - to drink
dormir - to sleep
sair - to go out/leave
chegar - to arrive
viver - to live
estudar - to study
ler - to read
escrever - to write
comprar - to buy
vender - to sell
acreditar - to believe
conhecer - to know/meet
ensinar - to teach
ouvir - to hear
assistir - to watch/attend
contar - to tell/count
jogar - to play
ajudar - to help
esperar - to wait/hope
escolher - to choose
sentir - to sense
ver - to check/see
abrir - to open
fechar - to close
terminar - to finish
começar - to start
correr - to run

# 50 common German nouns with English translations

Haus - house
Auto - car
Zeit - time
Tag - day
Jahr - year
Freund - friend
Familie - family
Stadt - city
Land - country
Schule - school
Buch - book
Arbeit - work/job
Geld - money
Essen - food
Wasser - water
Hausaufgabe - homework
Telefon - telephone
Mutter - mother
Vater - father
Kind - child
Frau - woman/wife
Mann - man/husband
Bruder - brother
Schwester - sister
Oma - grandma
Opa - grandpa
Baum - tree
Blume - flower
Tier - animal
Himmel - sky
Sonne - sun
Mond - moon
Straße - street
Park - park
Markt - market
Film - movie
Musik - music
Zeitung - newspaper
Problem - problem
Frage - question
Antwort - answer
Farbe - color
Schnee - snow
Wetter - weather
Kaffee - coffee
Tee - tea
Kuchen - cake
Brot - bread
Milch - milk
Apfel - apple

# 50 common Spanish nouns with English translations

casa - house
coche - car
tiempo - time/weather
día - day
año - year
amigo/amiga - friend
familia - family
ciudad - city
país - country
escuela - school
libro - book
trabajo - work/job
dinero - money
comida - food
agua - water
tarea - homework
teléfono - telephone
madre - mother
padre - father
niño/niña - child
mujer/esposa - woman/wife
hombre/esposo - man/husband
hermano - brother
hermana - sister
abuela - grandmother
abuelo - grandfather
árbol - tree
flor - flower
animal - animal
cielo - sky
sol - sun
luna - moon
calle - street
parque - park
mercado - market
película - movie
música - music
periódico - newspaper
problema - problem
pregunta - question
respuesta - answer
color - color
nieve - snow
clima - climate
café - coffee
té - tea
pastel - cake
pan - bread
leche - milk
manzana - apple

# 50 common French nouns with English translations

maison - house
voiture - car
temps - time/weather
jour - day
année - year
ami/amie - friend
famille - family
ville - city
pays - country
école - school
livre - book
travail - work/job
argent - money
nourriture - food
eau - water
devoir - homework
téléphone - telephone
mère - mother
père - father
enfant - child
femme/épouse - woman/wife
homme/époux - man/husband
frère - brother
sœur - sister
grand-mère - grandmother
grand-père - grandfather
arbre - tree
fleur - flower
animal - animal
ciel - sky
soleil - sun
lune - moon
rue - street
parc - park
marché - market
film - movie
musique - music
journal - newspaper
problème - problem
question - question
réponse - answer
couleur - color
neige - snow
temps - weather
café - coffee
thé - tea
gâteau - cake
pain - bread
lait - milk
pomme - apple

# 50 common Italian nouns with English translations

casa - house
auto - car
tempo - time
giorno - day
anno - year
amico/amica - friend
famiglia - family
città - city
paese - country
scuola - school
libro - book
lavoro - work/job
soldi - money
cibo - food
acqua - water
compito - homework
telefono - telephone
madre - mother
padre - father
bambino/bambina - child
donna/moglie - woman/wife
uomo/marito - man/husband
fratello - brother
sorella - sister
nonna - grandmother
nonno - grandfather
albero - tree
fiore - flower
animale - animal
cielo - sky
sole - sun
luna - moon
strada - street
parco - park
mercato - market
film - movie
musica - music
giornale - newspaper
problema - problem
domanda - question
risposta - answer
colore - color
neve - snow
tempo - weather
caffè - coffee
tè - tea
torta - cake
pane - bread
latte - milk
mela - apple

# 50 common Portuguese nouns with English translations

casa - house
carro - car
tempo - time/weather
dia - day
ano - year
amigo/amiga - friend
família - family
cidade - city
país - country
escola - school
livro - book
trabalho - work/job
dinheiro - money
comida - food
água - water
tarefa - homework
telefone - telephone
mãe - mother
pai - father
criança - child
mulher/esposa - woman/wife
homem/marido - man/husband
irmão - brother
irmã - sister
avó - grandmother
avô - grandfather
árvore - tree
flor - flower
animal - animal
céu - sky
sol - sun
lua - moon
rua - street
parque - park
mercado - market
filme - movie
música - music
jornal - newspaper
problema - problem
pergunta - question
resposta - answer
cor - color
neve - snow
clima - climate
café - coffee
chá - tea
bolo - cake
pão - bread
leite - milk
maçã - apple

# words like potato, tomato, carrot in German with English translations

Kartoffel (Potato)
Tomate (Tomato)
Karotte (Carrot)
Zwiebel (Onion)
Knoblauch (Garlic)
Gurke (Cucumber)
Paprika (Bell Pepper)
Spinat (Spinach)
Brokkoli (Broccoli)
Mais (Corn)
Erbse (Pea)
Sellerie (Celery)
Spargel (Asparagus)
Zucchini (Zucchini)
Aubergine (Eggplant)

# words like potato, tomato, carrot in Spanish with English translations

Patata/Papa (Potato)
Tomate (Tomato)
Zanahoria (Carrot)
Cebolla (Onion)
Ajo (Garlic)
Pepino (Cucumber)
Pimiento (Bell Pepper)
Espinaca (Spinach)
Brócoli (Broccoli)
Maíz (Corn)
Guisante/Chícharo (Pea)
Apio (Celery)
Espárrago (Asparagus)
Calabacín (Zucchini)
Berenjena (Eggplant)

# words like potato, tomato, carrot in French with English translations

Pomme de terre (Potato)
Tomate (Tomato)
Carotte (Carrot)
Oignon (Onion)
Ail (Garlic)
Concombre (Cucumber)
Poivron (Bell Pepper)
Épinard (Spinach)
Brocoli (Broccoli)
Maïs (Corn)
Petit pois (Pea)
Céleri (Celery)
Asperge (Asparagus)
Courgette (Zucchini)
Aubergine (Eggplant)

# words like potato, tomato, carrot in Italian with English translations

Patata (Potato)
Pomodoro (Tomato)
Carota (Carrot)
Cipolla (Onion)
Aglio (Garlic)
Cetriolo (Cucumber)
Peperone (Bell Pepper)
Spinaci (Spinach)
Broccolo (Broccoli)
Mais (Corn)
Pisello (Pea)
Sedano (Celery)
Asparago (Asparagus)
Zucchina (Zucchini)
Melanzana (Eggplant)

# words like potato, tomato, carrot in Portguese with English translations

Batata (Potato)
Tomate (Tomato)
Cenoura (Carrot)
Cebola (Onion)
Alho (Garlic)
Pepino (Cucumber)
Pimentão (Bell Pepper)
Espinafre (Spinach)
Brócolis (Broccoli)
Milho (Corn)
Ervilha (Pea)
Aipo (Celery)
Aspargo (Asparagus)
Abobrinha (Zucchini)
Berinjela (Eggplant)


we had - avevamo
many - tantas
schickt - sends
justement - exactly
appy - contente
pleasant - agréable
cold - frio
selected - choisi
remember - rappelle
they think - pensano
now - al presente
knife - messer
should - faudrait
to bring - apporter
own - eigenen
we had - avevamo
terrible - terrível
meet - rencontré
pass - reichen
survey - lève
pensi - think
several - vários
ass - arsch
tombée - fall
fact that - facto
to hide - esconder
called - heißt
debout - standing
temer - to fear
outside - draußen
i got it - consegui
reason - grund
have to (present) - devo
kapiert - got it
ill - krank
ma - but
tôt - early
voler - steal
venuta - coming
ferido - injured
uccello - bird
écoute - listen
traurig - sad
esqueça - forget
hero - held
good - buono
soient - are
verde - green
your - ihre
page - seite
dopo - hour (future)
comer - eat
saúde - cheers
pues - well
può - can he
several - vários
cocksucker - enculé
cortar - cut
short - breve
dopo - hour (future)
pan - pá
stay - quede
morrer - die
dies - stirbt
in order to - damit
due - debido
enjoy - gozar
pass - reichen
wine - vin
aies - hast
meinen - mean
ordnung - order
absolutely - absolutamente
looked for - cercato
piacciono - like
tornato - got back
happens - sucede
allowed - permis
alors - so
facto - fact that
creare - create
duele - it hurt
droite - right
nulle part - nowhere
partout - everywhere
alors - so
you have - tienes
sendo - being
sound - suono
unknown - ignore
desert - deserto
sera - evening
bien - well
thought - dachten
find - achar
chacun - each
faux - false
dopo - hour (future)
donner - give
procès - trial
soient - are
năo - no


# 20 short sentences in Spanish with English translations

¡Buenos días! (Good morning!)
¿Cómo estás? (How are you?)
Te quiero. (I love you.)
¿Qué haces hoy? (What are you doing today?)
¿Dónde está el restaurante más cercano? (Where is the nearest restaurant?)
¿Qué hora es? (What time is it?)
¿Puedes ayudarme? (Can you help me?)
¿Dónde está la parada de autobús más cercana? (Where is the nearest bus stop?)
Estoy cansado/a. (I'm tired.)
¿Cuál es tu comida favorita? (What is your favorite food?)
¿Dónde está el baño? (Where is the bathroom?)
Perdón, me he perdido. (Sorry, I'm lost.)
¿Cuál es tu nombre? (What is your name?)
¿De dónde eres? (Where are you from?)
Me gustaría pedir un helado. (I would like to order an ice cream.)
¿Cuánto cuesta esto? (How much does this cost?)
¿Tienes tiempo para hablar conmigo? (Do you have time to talk to me?)
¿Dónde está el supermercado más cercano? (Where is the nearest supermarket?)
Lo siento, no entendí eso. (I'm sorry, I didn't understand that.)
¡Gracias por tu ayuda! (Thank you for your help!)

# 20 short sentences in German with English translations

Guten Morgen! (Good morning!)
Wie geht es dir? (How are you?)
Ich liebe dich. (I love you.)
Was machst du heute? (What are you doing today?)
Wo ist das nächste Restaurant? (Where is the nearest restaurant?)
Wie spät ist es? (What time is it?)
Kannst du mir helfen? (Can you help me?)
Wo ist die nächste Bushaltestelle? (Where is the nearest bus stop?)
Ich bin müde. (I'm tired.)
Was ist dein Lieblingsessen? (What is your favorite food?)
Wo ist die Toilette? (Where is the bathroom?)
Entschuldigung, ich habe mich verlaufen. (Sorry, I'm lost.)
Was ist dein Name? (What is your name?)
Woher kommst du? (Where are you from?)
Ich möchte ein Eis bestellen. (I would like to order an ice cream.)
Wie viel kostet das? (How much does it cost?)
Hast du Zeit, um mit mir zu reden? (Do you have time to talk to me?)
Wo ist der nächste Supermarkt? (Where is the nearest supermarket?)
Es tut mir leid, das habe ich nicht verstanden. (I'm sorry, I didn't understand that.)
Danke für deine Hilfe! (Thank you for your help!)

# 20 short sentences in French with English translations

Bonjour! (Hello!)
Comment ça va? (How are you?)
Je t'aime. (I love you.)
Qu'est-ce que tu fais aujourd'hui? (What are you doing today?)
Où se trouve le restaurant le plus proche? (Where is the nearest restaurant?)
Quelle heure est-il? (What time is it?)
Peux-tu m'aider? (Can you help me?)
Où se trouve l'arrêt de bus le plus proche? (Where is the nearest bus stop?)
Je suis fatigué(e). (I'm tired.)
Quel est ton plat préféré? (What is your favorite dish?)
Où sont les toilettes? (Where are the restrooms?)
Excusez-moi, je suis perdu(e). (Excuse me, I'm lost.)
Comment tu t'appelles? (What's your name?)
D'où viens-tu? (Where are you from?)
J'aimerais commander une glace. (I would like to order an ice cream.)
Combien cela coûte-t-il? (How much does it cost?)
As-tu le temps de parler avec moi? (Do you have time to talk with me?)
Où se trouve le supermarché le plus proche? (Where is the nearest supermarket?)
Désolé(e), je n'ai pas compris. (Sorry, I didn't understand.)
Merci pour ton aide! (Thank you for your help!)

# 20 short sentences in Italian with English translations

Ciao! (Hello!)
Come stai? (How are you?)
Ti amo. (I love you.)
Cosa fai oggi? (What are you doing today?)
Dove si trova il ristorante più vicino? (Where is the nearest restaurant?)
Che ora è? (What time is it?)
Puoi aiutarmi? (Can you help me?)
Dove si trova la fermata dell'autobus più vicina? (Where is the nearest bus stop?)
Sono stanco/a. (I'm tired.)
Qual è il tuo piatto preferito? (What is your favorite dish?)
Dove sono i servizi? (Where are the restrooms?)
Scusa, mi sono perso/a. (Sorry, I'm lost.)
Come ti chiami? (What's your name?)
Da dove vieni? (Where are you from?)
Vorrei ordinare un gelato. (I would like to order an ice cream.)
Quanto costa? (How much does it cost?)
Hai tempo per parlare con me? (Do you have time to talk with me?)
Dove si trova il supermercato più vicino? (Where is the nearest supermarket?)
Mi dispiace, non ho capito. (I'm sorry, I didn't understand.)
Grazie per il tuo aiuto! (Thank you for your help!)

# 20 short sentences in Portuguese with English translations

Olá! (Hello!)
Como você está? (How are you?)
Eu te amo. (I love you.)
O que você está fazendo hoje? (What are you doing today?)
Onde fica o restaurante mais próximo? (Where is the nearest restaurant?)
Que horas são? (What time is it?)
Você pode me ajudar? (Can you help me?)
Onde fica o ponto de ônibus mais próximo? (Where is the nearest bus stop?)
Estou cansado(a). (I'm tired.)
Qual é o seu prato favorito? (What is your favorite dish?)
Onde fica o banheiro? (Where is the bathroom?)
Desculpe, estou perdido(a). (Sorry, I'm lost.)
Como você se chama? (What's your name?)
De onde você é? (Where are you from?)
Eu gostaria de pedir um sorvete. (I would like to order an ice cream.)
Quanto custa isso? (How much does this cost?)
Você tem tempo para conversar comigo? (Do you have time to talk with me?)
Onde fica o supermercado mais próximo? (Where is the nearest supermarket?)
Desculpe, não entendi. (Sorry, I didn't understand.)
Obrigado(a) pela sua ajuda! (Thank you for your help!)

# 20 short questions in Spanish with English translations

¿Cómo estás? (How are you?)
¿Qué hora es? (What time is it?)
¿Dónde vives? (Where do you live?)
¿Cuál es tu comida favorita? (What is your favorite food?)
¿Qué estás haciendo? (What are you doing?)
¿Cuál es tu nombre? (What is your name?)
¿De dónde eres? (Where are you from?)
¿Tienes hermanos? (Do you have siblings?)
¿Qué te gusta hacer en tu tiempo libre? (What do you like to do in your free time?)
¿Cuál es tu color favorito? (What is your favorite color?)
¿Qué idiomas hablas? (What languages do you speak?)
¿Has viajado a otro país? (Have you traveled to another country?)
¿Qué te gustaría hacer en el futuro? (What would you like to do in the future?)
¿Cuál es tu película favorita? (What is your favorite movie?)
¿Tienes mascotas? (Do you have pets?)
¿Qué música te gusta escuchar? (What music do you like to listen to?)
¿Cuál es tu deporte favorito? (What is your favorite sport?)
¿Cuál es tu libro favorito? (What is your favorite book?)
¿Qué te hace feliz? (What makes you happy?)
¿Qué planes tienes para el fin de semana? (What are your plans for the weekend?)

# 20 short questions in German with English translations

Wie geht es dir? (How are you?)
Wie spät ist es? (What time is it?)
Wo wohnst du? (Where do you live?)
Was ist dein Lieblingsessen? (What is your favorite food?)
Was machst du gerade? (What are you doing right now?)
Wie ist dein Name? (What is your name?)
Woher kommst du? (Where are you from?)
Hast du Geschwister? (Do you have siblings?)
Was machst du gerne in deiner Freizeit? (What do you like to do in your free time?)
Was ist deine Lieblingsfarbe? (What is your favorite color?)
Welche Sprachen sprichst du? (Which languages do you speak?)
Warst du schon einmal in einem anderen Land? (Have you been to another country?)
Was möchtest du in der Zukunft machen? (What would you like to do in the future?)
Was ist dein Lieblingsfilm? (What is your favorite movie?)
Hast du Haustiere? (Do you have pets?)
Welche Musik hörst du gerne? (What kind of music do you like to listen to?)
Was ist dein Lieblingssport? (What is your favorite sport?)
Was ist dein Lieblingsbuch? (What is your favorite book?)
Was macht dich glücklich? (What makes you happy?)
Was sind deine Pläne für das Wochenende? (What are your plans for the weekend?)

# 20 short questions in French with English translations

Comment ça va ? (How are you?)
Quelle heure est-il ? (What time is it?)
Où habites-tu ? (Where do you live?)
Quel est ton plat préféré ? (What is your favorite dish?)
Que fais-tu en ce moment ? (What are you doing right now?)
Comment t'appelles-tu ? (What is your name?)
D'où viens-tu ? (Where are you from?)
As-tu des frères et sœurs ? (Do you have siblings?)
Qu'aimes-tu faire pendant ton temps libre ? (What do you like to do in your free time?)
Quelle est ta couleur préférée ? (What is your favorite color?)
Quelles langues parles-tu ? (Which languages do you speak?)
As-tu déjà visité un autre pays ? (Have you ever visited another country?)
Qu'aimerais-tu faire dans le futur ? (What would you like to do in the future?)
Quel est ton film préféré ? (What is your favorite movie?)
As-tu des animaux de compagnie ? (Do you have pets?)
Quel type de musique aimes-tu écouter ? (What type of music do you like to listen to?)
Quel est ton sport préféré ? (What is your favorite sport?)
Quel est ton livre préféré ? (What is your favorite book?)
Qu'est-ce qui te rend heureux(se) ? (What makes you happy?)
Quels sont tes projets pour le week-end ? (What are your plans for the weekend?)

# 20 short questions in Italian with English translations

Come stai? (How are you?)
Che ora è? (What time is it?)
Dove abiti? (Where do you live?)
Qual è il tuo piatto preferito? (What is your favorite dish?)
Cosa stai facendo in questo momento? (What are you doing right now?)
Come ti chiami? (What is your name?)
Da dove vieni? (Where are you from?)
Hai fratelli o sorelle? (Do you have siblings?)
Cosa ti piace fare nel tempo libero? (What do you like to do in your free time?)
Qual è il tuo colore preferito? (What is your favorite color?)
Quali lingue parli? (Which languages do you speak?)
Hai mai visitato un altro paese? (Have you ever visited another country?)
Cosa ti piacerebbe fare in futuro? (What would you like to do in the future?)
Qual è il tuo film preferito? (What is your favorite movie?)
Hai animali domestici? (Do you have pets?)
Che tipo di musica ti piace ascoltare? (What kind of music do you like to listen to?)
Qual è il tuo sport preferito? (What is your favorite sport?)
Qual è il tuo libro preferito? (What is your favorite book?)
Cosa ti rende felice? (What makes you happy?)
Quali sono i tuoi piani per il weekend? (What are your plans for the weekend?)

# 20 short questions in Portuguese with English translations

Como você está? (How are you?)
Que horas são? (What time is it?)
Onde você mora? (Where do you live?)
Qual é o seu prato favorito? (What is your favorite dish?)
O que você está fazendo agora? (What are you doing now?)
Como você se chama? (What is your name?)
De onde você é? (Where are you from?)
Você tem irmãos ou irmãs? (Do you have siblings?)
O que você gosta de fazer no seu tempo livre? (What do you like to do in your free time?)
Qual é a sua cor favorita? (What is your favorite color?)
Quais idiomas você fala? (Which languages do you speak?)
Você já visitou outro país? (Have you ever visited another country?)
O que você gostaria de fazer no futuro? (What would you like to do in the future?)
Qual é o seu filme favorito? (What is your favorite movie?)
Você tem animais de estimação? (Do you have pets?)
Que tipo de música você gosta de ouvir? (What kind of music do you like to listen to?)
Qual é o seu esporte favorito? (What is your favorite sport?)
Qual é o seu livro favorito? (What is your favorite book?)
O que te faz feliz? (What makes you happy?)
Quais são seus planos para o fim de semana? (What are your plans for the weekend?)


# 20 travel related sentences in Spanish with English translations

Me encanta viajar y descubrir nuevos lugares. (I love to travel and discover new places.)
Este verano voy a hacer un viaje por Europa. (This summer I'm going on a trip around Europe.)
¿Dónde está la oficina de turismo? (Where is the tourist office?)
Me gustaría reservar una habitación en un hotel. (I would like to book a room in a hotel.)
¿Cuánto cuesta un billete de avión a Nueva York? (How much does a plane ticket to New York cost?)
Voy a tomar un vuelo directo a Madrid. (I'm going to take a direct flight to Madrid.)
¿Cuánto tiempo dura el vuelo de Londres a París? (How long does the flight from London to Paris take?)
Prefiero viajar en tren porque es más cómodo. (I prefer to travel by train because it's more comfortable.)
Quiero alquilar un coche para recorrer la costa. (I want to rent a car to explore the coast.)
¿Cuál es la mejor época para visitar la playa? (What is the best time to visit the beach?)
Voy a hacer una excursión a las montañas mañana. (I'm going on a mountain excursion tomorrow.)
Me gustaría probar la comida típica de este país. (I would like to try the typical food of this country.)
¿Dónde puedo encontrar un buen restaurante? (Where can I find a good restaurant?)
¿Cuál es el horario de los museos? (What is the schedule of the museums?)
¿Podría recomendarme algunos lugares turísticos? (Could you recommend me some tourist attractions?)
Quiero comprar recuerdos para mis amigos. (I want to buy souvenirs for my friends.)
¿Dónde puedo encontrar un mapa de la ciudad? (Where can I find a map of the city?)
¿Cuánto tiempo se tarda en llegar al centro desde aquí? (How long does it take to get to the city center from here?)
Necesito un taxi para ir al aeropuerto. (I need a taxi to go to the airport.)
Estoy disfrutando mucho de mi viaje. (I'm really enjoying my trip.)

# 20 travel related sentences in German with English translations

Ich liebe es zu reisen und neue Orte zu entdecken. (I love to travel and discover new places.)
Diesen Sommer werde ich eine Reise durch Europa machen. (This summer I'm going to take a trip through Europe.)
Wo befindet sich die Touristeninformation? (Where is the tourist information office?)
Ich möchte ein Hotelzimmer reservieren. (I would like to book a hotel room.)
Wie viel kostet ein Flugticket nach New York? (How much does a plane ticket to New York cost?)
Ich werde einen Direktflug nach Madrid nehmen. (I'm going to take a direct flight to Madrid.)
Wie lange dauert der Flug von London nach Paris? (How long does the flight from London to Paris take?)
Ich bevorzuge es, mit dem Zug zu reisen, weil es bequemer ist. (I prefer to travel by train because it's more comfortable.)
Ich möchte ein Auto mieten, um die Küste zu erkunden. (I want to rent a car to explore the coast.)
Wann ist die beste Zeit, um den Strand zu besuchen? (When is the best time to visit the beach?)
Morgen mache ich einen Ausflug in die Berge. (Tomorrow, I'm going on a mountain excursion.)
Ich möchte gerne die typische Küche dieses Landes probieren. (I would like to try the typical cuisine of this country.)
Wo kann ich ein gutes Restaurant finden? (Where can I find a good restaurant?)
Wie sind die Öffnungszeiten der Museen? (What are the opening hours of the museums?)
Können Sie mir einige touristische Sehenswürdigkeiten empfehlen? (Can you recommend me some tourist attractions?)
Ich möchte Souvenirs für meine Freunde kaufen. (I want to buy souvenirs for my friends.)
Wo kann ich eine Stadtkarte finden? (Where can I find a city map?)
Wie lange dauert es, um ins Zentrum zu gelangen? (How long does it take to get to the city center?)
Ich benötige ein Taxi, um zum Flughafen zu gelangen. (I need a taxi to get to the airport.)
Ich genieße meine Reise sehr. (I'm enjoying my trip a lot.)

# 20 travel related sentences in French with English translations

J'adore voyager et découvrir de nouveaux endroits. (I love to travel and discover new places.)
Cet été, je vais faire un voyage en Europe. (This summer, I'm going on a trip to Europe.)
Où se trouve l'office du tourisme ? (Where is the tourist office?)
Je voudrais réserver une chambre d'hôtel. (I would like to book a hotel room.)
Combien coûte un billet d'avion pour New York ? (How much does a plane ticket to New York cost?)
Je vais prendre un vol direct pour Paris. (I'm going to take a direct flight to Paris.)
Combien de temps dure le vol de Londres à Rome ? (How long does the flight from London to Rome take?)
Je préfère voyager en train car c'est plus confortable. (I prefer to travel by train because it's more comfortable.)
Je souhaite louer une voiture pour explorer la côte. (I want to rent a car to explore the coast.)
Quelle est la meilleure période pour visiter la plage ? (What is the best time to visit the beach?)
Demain, je vais faire une excursion en montagne. (Tomorrow, I'm going on a mountain excursion.)
J'aimerais goûter la cuisine typique de ce pays. (I would like to try the typical cuisine of this country.)
Où puis-je trouver un bon restaurant ? (Where can I find a good restaurant?)
Quels sont les horaires des musées ? (What are the museum's opening hours?)
Pouvez-vous me recommander quelques attractions touristiques ? (Can you recommend me some tourist attractions?)
Je veux acheter des souvenirs pour mes amis. (I want to buy souvenirs for my friends.)
Où puis-je trouver une carte de la ville ? (Where can I find a city map?)
Combien de temps faut-il pour arriver au centre-ville d'ici ? (How long does it take to get to the city center from here?)
J'ai besoin d'un taxi pour me rendre à l'aéroport. (I need a taxi to go to the airport.)
Je profite vraiment de mon voyage. (I'm really enjoying my trip.)

# 20 travel related sentences in Italian with English translations

Amo viaggiare e scoprire nuovi posti. (I love to travel and discover new places.)
Quest'estate farò un viaggio in Europa. (This summer I'm going on a trip to Europe.)
Dove si trova l'ufficio del turismo? (Where is the tourist office?)
Vorrei prenotare una camera d'albergo. (I would like to book a hotel room.)
Quanto costa un biglietto aereo per New York? (How much does a plane ticket to New York cost?)
Prenderò un volo diretto per Roma. (I'm going to take a direct flight to Rome.)
Quanto dura il volo da Londra a Parigi? (How long does the flight from London to Paris take?)
Preferisco viaggiare in treno perché è più comodo. (I prefer to travel by train because it's more comfortable.)
Vorrei noleggiare una macchina per esplorare la costa. (I want to rent a car to explore the coast.)
Qual è il miglior periodo per visitare la spiaggia? (What is the best time to visit the beach?)
Domani farò un'escursione in montagna. (Tomorrow, I'm going on a mountain excursion.)
Mi piacerebbe provare la cucina tipica di questo paese. (I would like to try the typical cuisine of this country.)
Dove posso trovare un buon ristorante? (Where can I find a good restaurant?)
Quali sono gli orari dei musei? (What are the museum's opening hours?)
Puoi consigliarmi alcune attrazioni turistiche? (Can you recommend me some tourist attractions?)
Voglio comprare dei souvenirs per i miei amici. (I want to buy souvenirs for my friends.)
Dove posso trovare una mappa della città? (Where can I find a city map?)
Quanto tempo ci vuole per arrivare al centro da qui? (How long does it take to get to the city center from here?)
Ho bisogno di un taxi per andare all'aeroporto. (I need a taxi to go to the airport.)
Sto davvero godendo del mio viaggio. (I'm really enjoying my trip.)

# 20 travel related sentences in Portuguese with English translations

Adoro viajar e descobrir novos lugares. (I love to travel and discover new places.)
Neste verão, farei uma viagem pela Europa. (This summer, I'm going on a trip through Europe.)
Onde fica o escritório de turismo? (Where is the tourist office?)
Gostaria de reservar um quarto de hotel. (I would like to book a hotel room.)
Quanto custa uma passagem de avião para Nova York? (How much does a plane ticket to New York cost?)
Vou pegar um voo direto para Lisboa. (I'm going to take a direct flight to Lisbon.)
Quanto tempo dura o voo de Londres para Paris? (How long does the flight from London to Paris take?)
Prefiro viajar de trem porque é mais confortável. (I prefer to travel by train because it's more comfortable.)
Quero alugar um carro para explorar a costa. (I want to rent a car to explore the coast.)
Qual é a melhor época para visitar a praia? (What is the best time to visit the beach?)
Amanhã, farei um passeio nas montanhas. (Tomorrow, I'm going on a mountain excursion.)
Gostaria de experimentar a comida típica deste país. (I would like to try the typical food of this country.)
Onde posso encontrar um bom restaurante? (Where can I find a good restaurant?)
Quais são os horários dos museus? (What are the museum's opening hours?)
Você pode me recomendar algumas atrações turísticas? (Can you recommend me some tourist attractions?)
Quero comprar lembranças para os meus amigos. (I want to buy souvenirs for my friends.)
Onde posso encontrar um mapa da cidade? (Where can I find a city map?)
Quanto tempo leva para chegar ao centro daqui? (How long does it take to get to the city center from here?)
Preciso de um táxi para ir ao aeroporto. (I need a taxi to go to the airport.)
Estou realmente aproveitando minha viagem. (I'm really enjoying my trip.)


# Spanish words for tools and their English translations

Hammer - Martillo
Screwdriver - Destornillador
Wrench - Llave inglesa
Pliers - Alicates
Saw - Sierra
Drill - Taladro
Tape measure - Cinta métrica
Chisel - Formón
Level - Nivel
Screw - Tornillo
Nail - Clavo
Stapler - Grapadora
Sander - Lijadora
File - Lima
Clamp - Sargento

# German words for tools and their English translations

Hammer - Hammer
Screwdriver - Schraubenzieher
Wrench - Schraubenschlüssel
Pliers - Zange
Saw - Säge
Drill - Bohrer
Tape measure - Maßband
Chisel - Meißel
Level - Wasserwaage
Screw - Schraube
Nail - Nagel
Stapler - Tacker
Sander - Schleifmaschine
File - Feile
Clamp - Klemme

# French words for tools and their English translations

Hammer - Marteau
Screwdriver - Tournevis
Wrench - Clé à molette
Pliers - Pince
Saw - Scie
Drill - Perceuse
Tape measure - Mètre ruban
Chisel - Ciseau
Level - Niveau
Screw - Vis
Nail - Clou
Stapler - Agrafeuse
Sander - Ponceuse
File - Lime
Clamp - Serre-joint

# Italian words for tools and their English translations

Hammer - Martello
Screwdriver - Cacciavite
Wrench - Chiave inglese
Pliers - Pinze
Saw - Sega
Drill - Trapano
Tape measure - Metro a nastro
Chisel - Scalpello
Level - Livella
Screw - Vite
Nail - Chiodo
Stapler - Sparachiodi
Sander - Levigatrice
File - Lima
Clamp - Morsetto

# Portuguese words for tools and their English translations

Hammer - Martelo
Screwdriver - Chave de fenda
Wrench - Chave inglesa
Pliers - Alicate
Saw - Serra
Drill - Furadeira
Tape measure - Fita métrica
Chisel - Cinzel
Level - Nível
Screw - Parafuso
Nail - Prego
Stapler - Grampeador
Sander - Lixadeira
File - Lima
Clamp - Grampo



# 20 Spanish sentences using tools and their English translations

Utilizo un martillo para clavar clavos. (I use a hammer to drive nails.)
Necesito una llave inglesa para apretar tuercas. (I need a wrench to tighten nuts.)
El destornillador es útil para aflojar tornillos. (The screwdriver is useful for loosening screws.)
El taladro eléctrico es ideal para hacer agujeros en la pared. (The electric drill is ideal for making holes in the wall.)
Con unas tenazas, puedo sujetar objetos firmemente. (With pliers, I can hold objects firmly.)
Utilizo un nivel para asegurarme de que las superficies estén rectas. (I use a level to make sure surfaces are straight.)
La sierra eléctrica es excelente para cortar madera. (The electric saw is excellent for cutting wood.)
Necesito una cinta métrica para medir distancias. (I need a tape measure to measure distances.)
El alicate es ideal para doblar y cortar cables. (The pliers are ideal for bending and cutting wires.)
La pistola de calor es útil para despegar adhesivos. (The heat gun is useful for removing adhesives.)
Utilizo una lijadora para alisar superficies. (I use a sander to smooth surfaces.)
Con una llave de tubo, puedo ajustar conexiones de fontanería. (With a pipe wrench, I can tighten plumbing connections.)
El soplete de soldadura es necesario para unir metales. (The welding torch is necessary for joining metals.)
Con un compás, puedo trazar círculos perfectos. (With a compass, I can draw perfect circles.)
Utilizo una sierra de calar para hacer cortes curvos en la madera. (I use a jigsaw to make curved cuts in wood.)
El nivel láser es preciso para nivelar grandes áreas. (The laser level is precise for leveling large areas.)
Con una broca adecuada, puedo perforar azulejos. (With an appropriate drill bit, I can drill through tiles.)
La llave de impacto es eficiente para aflojar tuercas apretadas. (The impact wrench is efficient for loosening tight nuts.)
Utilizo una pistola de clavos para fijar materiales rápidamente. (I use a nail gun to fasten materials quickly.)
La cizalla es perfecta para cortar láminas de metal. (The shear is perfect for cutting metal sheets.)

# 20 German sentences using tools and their English translations

Ich verwende einen Hammer, um Nägel einzuschlagen. (I use a hammer to drive nails.)
Ich benötige einen Schraubenschlüssel, um Muttern festzuziehen. (I need a wrench to tighten nuts.)
Der Schraubenzieher ist nützlich, um Schrauben zu lösen. (The screwdriver is useful for loosening screws.)
Der elektrische Bohrer ist ideal, um Löcher in die Wand zu bohren. (The electric drill is ideal for drilling holes in the wall.)
Mit einer Zange kann ich Gegenstände festhalten. (With pliers, I can hold objects firmly.)
Ich benutze eine Wasserwaage, um sicherzustellen, dass Oberflächen gerade sind. (I use a level to ensure surfaces are straight.)
Die elektrische Säge ist hervorragend zum Schneiden von Holz. (The electric saw is excellent for cutting wood.)
Ich benötige ein Maßband, um Entfernungen zu messen. (I need a tape measure to measure distances.)
Die Zange ist ideal zum Biegen und Schneiden von Kabeln. (The pliers are ideal for bending and cutting wires.)
Die Heißluftpistole ist nützlich, um Klebstoffe zu lösen. (The heat gun is useful for removing adhesives.)
Ich verwende einen Schleifer, um Oberflächen zu glätten. (I use a sander to smooth surfaces.)
Mit einem Rohrschlüssel kann ich Sanitärverbindungen festziehen. (With a pipe wrench, I can tighten plumbing connections.)
Der Schweißbrenner ist notwendig, um Metalle zu verbinden. (The welding torch is necessary for joining metals.)
Mit einem Zirkel kann ich perfekte Kreise zeichnen. (With a compass, I can draw perfect circles.)
Ich benutze eine Stichsäge, um in Holz kurvige Schnitte zu machen. (I use a jigsaw to make curved cuts in wood.)
Der Laser-Level ist präzise, um große Flächen zu nivellieren. (The laser level is precise for leveling large areas.)
Mit einem geeigneten Bohrer kann ich Fliesen durchbohren. (With an appropriate drill bit, I can drill through tiles.)
Der Schlagschrauber ist effizient, um festsitzende Muttern zu lösen. (The impact wrench is efficient for loosening tight nuts.)
Ich verwende eine Nagelpistole, um Materialien schnell zu befestigen. (I use a nail gun to fasten materials quickly.)
Die Blechschere ist perfekt, um Metallplatten zu schneiden. (The shear is perfect for cutting metal sheets.)

# 20 French sentences using tools and their English translations

J'utilise un marteau pour enfoncer des clous. (I use a hammer to drive nails.)
J'ai besoin d'une clé pour serrer les écrous. (I need a wrench to tighten nuts.)
Le tournevis est utile pour desserrer les vis. (The screwdriver is useful for loosening screws.)
La perceuse électrique est idéale pour faire des trous dans le mur. (The electric drill is ideal for making holes in the wall.)
Avec des pinces, je peux tenir fermement des objets. (With pliers, I can hold objects firmly.)
J'utilise un niveau pour m'assurer que les surfaces sont droites. (I use a level to ensure surfaces are straight.)
La scie électrique est excellente pour couper du bois. (The electric saw is excellent for cutting wood.)
J'ai besoin d'un mètre ruban pour mesurer les distances. (I need a tape measure to measure distances.)
Les pinces sont idéales pour plier et couper les câbles. (Pliers are ideal for bending and cutting wires.)
Le pistolet thermique est utile pour enlever les adhésifs. (The heat gun is useful for removing adhesives.)
J'utilise une ponceuse pour lisser les surfaces. (I use a sander to smooth surfaces.)
Avec une clé à molette, je peux serrer les raccords de plomberie. (With a pipe wrench, I can tighten plumbing connections.)
Le chalumeau de soudage est nécessaire pour assembler les métaux. (The welding torch is necessary for joining metals.)
Avec un compas, je peux tracer des cercles parfaits. (With a compass, I can draw perfect circles.)
J'utilise une scie sauteuse pour faire des découpes courbes dans le bois. (I use a jigsaw to make curved cuts in wood.)
Le niveau laser est précis pour niveler de grandes surfaces. (The laser level is precise for leveling large areas.)
Avec un foret approprié, je peux percer des carreaux. (With an appropriate drill bit, I can drill through tiles.)
La clé à chocs est efficace pour desserrer les écrous serrés. (The impact wrench is efficient for loosening tight nuts.)
J'utilise un cloueur pour fixer rapidement des matériaux. (I use a nail gun to fasten materials quickly.)
Les cisailles sont parfaites pour couper des feuilles de métal. (Shears are perfect for cutting metal sheets.)

# 20 Italian sentences using tools and their English translations

Utilizzo un martello per inchiodare. (I use a hammer to drive nails.)
Ho bisogno di una chiave per stringere i dadi. (I need a wrench to tighten nuts.)
Il cacciavite è utile per allentare le viti. (The screwdriver is useful for loosening screws.)
Il trapano elettrico è ideale per fare buchi nel muro. (The electric drill is ideal for making holes in the wall.)
Con le pinze posso tenere saldamente gli oggetti. (With pliers, I can hold objects firmly.)
Utilizzo una livella per assicurarmi che le superfici siano dritte. (I use a level to make sure surfaces are straight.)
La sega elettrica è ottima per tagliare il legno. (The electric saw is excellent for cutting wood.)
Ho bisogno di un metro a nastro per misurare le distanze. (I need a tape measure to measure distances.)
Le pinze sono ideali per piegare e tagliare i cavi. (Pliers are ideal for bending and cutting wires.)
La pistola termica è utile per rimuovere adesivi. (The heat gun is useful for removing adhesives.)
Utilizzo una levigatrice per levigare le superfici. (I use a sander to smooth surfaces.)
Con una chiave a tubo posso serrare i raccordi idraulici. (With a pipe wrench, I can tighten plumbing connections.)
Il cannello da saldatura è necessario per unire i metalli. (The welding torch is necessary for joining metals.)
Con un compasso posso tracciare cerchi perfetti. (With a compass, I can draw perfect circles.)
Utilizzo una sega alternativa per fare tagli curvi nel legno. (I use a jigsaw to make curved cuts in wood.)
Il livello laser è preciso per livellare grandi superfici. (The laser level is precise for leveling large areas.)
Con una punta da trapano adatta, posso forare le piastrelle. (With an appropriate drill bit, I can drill through tiles.)
La chiave a impulso è efficiente per allentare dadi stretti. (The impact wrench is efficient for loosening tight nuts.)
Utilizzo una chiodatrice per fissare velocemente i materiali. (I use a nail gun to fasten materials quickly.)
Le cesoie sono perfette per tagliare lastre di metallo. (Shears are perfect for cutting metal sheets.)

# 20 Portuguese sentences using tools and their English translations

Utilizo um martelo para pregar pregos. (I use a hammer to drive nails.)
Preciso de uma chave para apertar as porcas. (I need a wrench to tighten the nuts.)
O parafuso é útil para soltar os parafusos. (The screwdriver is useful for loosening screws.)
A furadeira elétrica é ideal para fazer furos na parede. (The electric drill is ideal for making holes in the wall.)
Com um alicate, consigo segurar objetos firmemente. (With pliers, I can hold objects firmly.)
Uso um nível para garantir que as superfícies estejam retas. (I use a level to ensure surfaces are straight.)
A serra elétrica é excelente para cortar madeira. (The electric saw is excellent for cutting wood.)
Preciso de uma fita métrica para medir distâncias. (I need a tape measure to measure distances.)
O alicate é ideal para dobrar e cortar fios. (The pliers are ideal for bending and cutting wires.)
A pistola de calor é útil para remover adesivos. (The heat gun is useful for removing adhesives.)
Utilizo uma lixadeira para alisar superfícies. (I use a sander to smooth surfaces.)
Com uma chave de tubo, posso apertar conexões hidráulicas. (With a pipe wrench, I can tighten plumbing connections.)
O maçarico de solda é necessário para unir metais. (The welding torch is necessary for joining metals.)
Com um compasso, consigo traçar círculos perfeitos. (With a compass, I can draw perfect circles.)
Uso uma serra tico-tico para fazer cortes curvos na madeira. (I use a jigsaw to make curved cuts in wood.)
O nível a laser é preciso para nivelar grandes áreas. (The laser level is precise for leveling large areas.)
Com uma broca adequada, posso perfurar azulejos. (With an appropriate drill bit, I can drill through tiles.)
A chave de impacto é eficiente para soltar porcas apertadas. (The impact wrench is efficient for loosening tight nuts.)
Utilizo um pregador para fixar materiais rapidamente. (I use a nail gun to fasten materials quickly.)
A tesoura de chapa é perfeita para cortar folhas de metal. (The shear is perfect for cutting metal sheets.)


# Spanish words for construction materials and their English translations

Ladrillo - Brick
Bloque - Block
Concreto - Concrete
Acero - Steel
Madera - Wood
Piedra - Stone
Vidrio - Glass
Azulejo - Tile
Yeso - Plaster
Cemento - Cement
Arena - Sand
Grava - Gravel
Mortero - Mortar
Teja - Roof tile
Adoquín - Cobblestone
Hierro - Iron
Asfalto - Asphalt
Aluminio - Aluminum
PVC - PVC (polyvinyl chloride)
Tabique - Partition wall
These are just a few examples, but there are many more construction materials with their respective translations.

# German words for construction materials and their English translations

Ziegelstein - Brick
Beton - Concrete
Stahl - Steel
Holz - Wood
Stein - Stone
Glas - Glass
Fliese - Tile
Gips - Plaster
Zement - Cement
Sand - Sand
Kies - Gravel
Mörtel - Mortar
Dachziegel - Roof tile
Pflasterstein - Cobblestone
Eisen - Iron
Asphalt - Asphalt
Aluminium - Aluminum
PVC - PVC (Polyvinylchlorid)
Gipskarton - Drywall
Putz - Stucco

# French words for construction materials and their English translations

Brique - Brick
Béton - Concrete
Acier - Steel
Bois - Wood
Pierre - Stone
Verre - Glass
Carreau - Tile
Plâtre - Plaster
Ciment - Cement
Sable - Sand
Gravier - Gravel
Mortier - Mortar
Tuile - Roof tile
Pavé - Cobblestone
Fer - Iron
Asphalte - Asphalt
Aluminium - Aluminum
PVC - PVC (Polyvinyl chloride)
Placo(plâtre + carton) - Drywall
Enduit - Stucco

# Italian words for construction materials and their English translations

Mattone - Brick
Cemento - Concrete
Acciaio - Steel
Legno - Wood
Pietra - Stone
Vetro - Glass
Piastrella - Tile
Gesso - Plaster
Cemento - Cement
Sabbia - Sand
Ghiaia - Gravel
Malta - Mortar
Tegola - Roof tile
Selciato - Cobblestone
Ferro - Iron
Asfalto - Asphalt
Alluminio - Aluminum
PVC - PVC (Policloruro di vinile)
Cartongesso - Drywall
Stucco - Stucco

# Portuguese words for construction materials and their English translations

Tijolo - Brick
Concreto - Concrete
Aço - Steel
Madeira - Wood
Pedra - Stone
Vidro - Glass
Azulejo - Tile
Gesso - Plaster
Cimento - Cement
Areia - Sand
Brita - Gravel
Argamassa - Mortar
Telha - Roof tile
Paralelepípedo - Cobblestone
Ferro - Iron
Asfalto - Asphalt
Alumínio - Aluminum
PVC - PVC (Policloreto de vinila)
Drywall - Drywall
Estuque - Stucco

Food: Essen (Nahrung, Lebensmittel)
Drink: Getränk (Trank)
Clothes: Kleidung
Place to live: Wohnort (Wohnung, Haus)
Means of transportation: Verkehrsmittel (Transportmittel)
Animal: Tier
Plant: Pflanze
Vehicle: Fahrzeug
Furniture: Möbel
Tool: Werkzeug
Musical instrument: Musikinstrument
Book: Buch
Electronic device: Elektronisches Gerät
Sports equipment: Sportgerät
Building: Gebäude
Toy: Spielzeug
Artwork: Kunstwerk
Household appliance: Haushaltsgerät
Office supply: Büromaterial
Weapon: Waffe


# Here are 25 travel-related words in Spanish:

Viaje - Trip
Destino - Destination
Pasaporte - Passport
Avión - Plane
Hotel - Hotel
Playa - Beach
Excursión - Excursion
Turista - Tourist
Reserva - Reservation
Vuelo - Flight
Maleta - Suitcase
Aeropuerto - Airport
Estación de tren - Train station
Crucero - Cruise
Mapa - Map
Guía turístico - Tour guide
Alojamiento - Accommodation
Visado - Visa
Carretera - Road
Itinerario - Itinerary
Aventura - Adventure
Moneda - Currency
Camarote - Cabin
Albergue - Hostel
Tarjeta de embarque - Boarding pass

# 25 travel related words in German

Reise - Trip
Ziel - Destination
Pass - Passport
Flugzeug - Airplane
Hotel - Hotel
Strand - Beach
Ausflug - Excursion
Tourist - Tourist
Buchung - Reservation
Flug - Flight
Koffer - Suitcase
Flughafen - Airport
Bahnhof - Train station
Kreuzfahrt - Cruise
Karte - Map
Reiseführer - Tour guide
Unterkunft - Accommodation
Visum - Visa
Straße - Road
Reiseplan - Itinerary
Abenteuer - Adventure
Währung - Currency
Kabine - Cabin
Herberge - Hostel
Bordkarte - Boarding pass

# 25 travel related words in French

Voyage - Trip
Destination - Destination
Passeport - Passport
Avion - Plane
Hôtel - Hotel
Plage - Beach
Excursion - Excursion
Touriste - Tourist
Réservation - Reservation
Vol - Flight
Valise - Suitcase
Aéroport - Airport
Gare - Train station
Croisière - Cruise
Carte - Map
Guide touristique - Tour guide
Hébergement - Accommodation
Visa - Visa
Route - Road
Itinéraire - Itinerary
Aventure - Adventure
Devise - Currency
Cabine - Cabin
Auberge de jeunesse - Hostel
Carte d'embarquement - Boarding pass

# 25 travel related words in Italian

Viaggio - Trip
Destinazione - Destination
Passaporto - Passport
Aereo - Airplane
Hotel - Hotel
Spiaggia - Beach
Escursione - Excursion
Turista - Tourist
Prenotazione - Reservation
Volo - Flight
Valigia - Suitcase
Aeroporto - Airport
Stazione ferroviaria - Train station
Crociera - Cruise
Mappa - Map
Guida turistica - Tour guide
Alloggio - Accommodation
Visto - Visa
Strada - Road
Itinerario - Itinerary
Avventura - Adventure
Valuta - Currency
Cabina - Cabin
Ostello - Hostel
Carta d'imbarco - Boarding pass

# 25 travel related words in Portuguese

Viagem - Trip
Destino - Destination
Passaporte - Passport
Avião - Airplane
Hotel - Hotel
Praia - Beach
Excursão - Excursion
Turista - Tourist
Reserva - Reservation
Voo - Flight
Mala - Suitcase
Aeroporto - Airport
Estação de trem - Train station
Cruzeiro - Cruise
Mapa - Map
Guia turístico - Tour guide
Acomodação - Accommodation
Visto - Visa
Estrada - Road
Itinerário - Itinerary
Aventura - Adventure
Moeda - Currency
Cabine - Cabin
Albergue - Hostel
Cartão de embarque - Boarding pass

# weather related words and expressions in Spanish

El tiempo - The weather
El clima - The climate
El pronóstico del tiempo - The weather forecast
Hace frío - It's cold
Hace calor - It's hot
Hace buen tiempo - The weather is nice
Hace mal tiempo - The weather is bad
Está nublado - It's cloudy
Está soleado - It's sunny
Está lloviendo - It's raining
Está nevando - It's snowing
El viento - The wind
La lluvia - The rain
La nieve - The snow
La tormenta - The storm
El trueno - The thunder
El relámpago - The lightning
La brisa - The breeze
El arcoíris - The rainbow
El amanecer - The sunrise
El atardecer - The sunset
La humedad - The humidity
El huracán - The hurricane
El tornado - The tornado
El granizo - The hail

Está haciendo mucho frío - It's very cold
Hace un calor sofocante - It's sweltering hot
Está cayendo un aguacero - There's a downpour
Está granizando - It's hailing
Hay niebla - There's fog
Hace un viento fuerte - It's windy
Está despejado - It's clear
Hay probabilidad de lluvia - There's a chance of rain
Va a haber una tormenta - There's going to be a storm
Está refrescando - It's getting cooler

# weather related words and expressions in German

Das Wetter - The weather
Das Klima - The climate
Die Wettervorhersage - The weather forecast
Es ist kalt - It's cold
Es ist heiß - It's hot
Es ist schönes Wetter - The weather is nice
Es ist schlechtes Wetter - The weather is bad
Es ist bewölkt - It's cloudy
Es ist sonnig - It's sunny
Es regnet - It's raining
Es schneit - It's snowing
Der Wind - The wind
Der Regen - The rain
Der Schnee - The snow
Das Gewitter - The thunderstorm
Der Donner - The thunder
Der Blitz - The lightning
Die Brise - The breeze
Der Nebel - The fog
Der Sturm - The storm
Der Sonnenaufgang - The sunrise
Der Sonnenuntergang - The sunset
Die Luftfeuchtigkeit - The humidity
Der Hurrikan - The hurricane
Der Tornado - The tornado
Der Hagel - The hail

Es ist eiskalt - It's freezing cold
Es ist drückend heiß - It's oppressively hot
Es schüttet wie aus Eimern - It's raining cats and dogs (literally: It's pouring like from buckets)
Es hagelt - It's hailing
Es ist neblig - It's foggy
Es ist stürmisch - It's stormy
Der Himmel ist wolkenlos - The sky is cloudless
Es besteht die Möglichkeit von Regen - There's a chance of rain
Es wird ein Gewitter geben - There will be a thunderstorm
Es kühlt sich ab - It's getting cooler

# weather related words and expressions in French

Le temps - The weather
Le climat - The climate
La prévision météo - The weather forecast
Il fait froid - It's cold
Il fait chaud - It's hot
Il fait beau temps - The weather is nice
Il fait mauvais temps - The weather is bad
Il y a des nuages - It's cloudy
Il y a du soleil - It's sunny
Il pleut - It's raining
Il neige - It's snowing
Le vent - The wind
La pluie - The rain
La neige - The snow
L'orage - The thunderstorm
Le tonnerre - The thunder
L'éclair - The lightning
La brise - The breeze
Le brouillard - The fog
La tempête - The storm
Le lever du soleil - The sunrise
Le coucher du soleil - The sunset
L'humidité - The humidity
L'ouragan - The hurricane
La tornade - The tornado
La grêle - The hail

Il fait très froid - It's very cold
Il fait une chaleur étouffante - It's sweltering hot
Il pleut des cordes - It's raining cats and dogs (literally: It's raining ropes)
Il grêle - It's hailing
Il y a du brouillard - There's fog
Il y a beaucoup de vent - It's very windy
Le ciel est dégagé - The sky is clear
Il y a des chances de pluie - There's a chance of rain
Il va y avoir un orage - There's going to be a thunderstorm
Il fait plus frais - It's getting cooler

# weather related words and expressions in Italian

Il tempo - The weather
Il clima - The climate
Il previsione del tempo - The weather forecast
Fa freddo - It's cold
Fa caldo - It's hot
Fa bel tempo - The weather is nice
Fa brutto tempo - The weather is bad
È nuvoloso - It's cloudy
C'è il sole - It's sunny
Piove - It's raining
Nevica - It's snowing
Il vento - The wind
La pioggia - The rain
La neve - The snow
Il temporale - The thunderstorm
Il tuono - The thunder
Il lampo - The lightning
La brezza - The breeze
La nebbia - The fog
La tempesta - The storm
L'alba - The sunrise
Il tramonto - The sunset
L'umidità - The humidity
L'uragano - The hurricane
Il tornado - The tornado
La grandine - The hail

Fa freddissimo - It's extremely cold
Fa un caldo torrido - It's scorching hot
Piove a dirotto - It's pouring rain (literally: It's raining heavily)
Sta grandinando - It's hailing
C'è la nebbia - There's fog
C'è molto vento - It's very windy
Il cielo è sereno - The sky is clear
C'è possibilità di pioggia - There's a chance of rain
Ci sarà un temporale - There will be a thunderstorm
Si sta rinfrescando - It's getting cooler

# weather related words and expressions in Portuguese

O tempo - The weather
O clima - The climate
A previsão do tempo - The weather forecast
Está frio - It's cold
Está quente - It's hot
Está bom tempo - The weather is nice
Está mau tempo - The weather is bad
Está nublado - It's cloudy
Está ensolarado - It's sunny
Está chovendo - It's raining
Está nevando - It's snowing
O vento - The wind
A chuva - The rain
A neve - The snow
A tempestade - The storm
O trovão - The thunder
O relâmpago - The lightning
A brisa - The breeze
A névoa - The fog
A umidade - The humidity
O nascer do sol - The sunrise
O pôr do sol - The sunset
O furacão - The hurricane
O tornado - The tornado
O granizo - The hail

Está muito frio - It's very cold
Está um calor insuportável - It's unbearably hot
Está chovendo muito - It's raining a lot
Está granizando - It's hailing
Tem neblina - There's fog
Está ventando muito - It's very windy
O céu está limpo - The sky is clear
Existe a possibilidade de chuva - There's a chance of rain
Vai ter uma tempestade - There's going to be a storm
Está esfriando - It's getting cooler


# words for relatives in Spanish

Father: Padre/Papá
Mother: Madre/Mamá
Son: Hijo
Daughter: Hija
Brother: Hermano
Sister: Hermana
Grandfather: Abuelo
Grandmother: Abuela
Grandson: Nieto
Granddaughter: Nieta
Uncle: Tío
Aunt: Tía
Cousin: Primo/Prima
Nephew: Sobrino
Niece: Sobrina
Husband: Esposo/Marido
Wife: Esposa/Mujer
Brother-in-law: Cuñado
Sister-in-law: Cuñada
Father-in-law: Suegro
Mother-in-law: Suegra

# words for relatives in German

Father: Vater
Mother: Mutter
Son: Sohn
Daughter: Tochter
Brother: Bruder
Sister: Schwester
Grandfather: Großvater/Opa
Grandmother: Großmutter/Oma
Grandson: Enkelsohn
Granddaughter: Enkeltochter
Uncle: Onkel
Aunt: Tante
Cousin (male): Cousin
Cousin (female): Cousine
Nephew: Neffe
Niece: Nichte
Husband: Ehemann/Mann
Wife: Ehefrau/Frau
Brother-in-law: Schwager
Sister-in-law: Schwägerin
Father-in-law: Schwiegervater
Mother-in-law: Schwiegermutter

# words for relatives in French

Father: Père
Mother: Mère
Son: Fils
Daughter: Fille
Brother: Frère
Sister: Sœur
Grandfather: Grand-père
Grandmother: Grand-mère
Grandson: Petit-fils
Granddaughter: Petite-fille
Uncle: Oncle
Aunt: Tante
Cousin (male): Cousin
Cousin (female): Cousine
Nephew: Neveu
Niece: Nièce
Husband: Mari/Époux
Wife: Femme/Épouse
Brother-in-law: Beau-frère
Sister-in-law: Belle-sœur
Father-in-law: Beau-père
Mother-in-law: Belle-mère

# words for relatives in Italian

Father: Padre
Mother: Madre
Son: Figlio
Daughter: Figlia
Brother: Fratello
Sister: Sorella
Grandfather: Nonno
Grandmother: Nonna
Grandson: Nipote (masculine)
Granddaughter: Nipote (feminine)
Uncle: Zio
Aunt: Zia
Cousin (male): Cugino
Cousin (female): Cugina
Nephew: Nipote (masculine)
Niece: Nipote (feminine)
Husband: Marito
Wife: Moglie
Brother-in-law: Cognato
Sister-in-law: Cognata
Father-in-law: Suocero
Mother-in-law: Suocera

# words for relatives in Portuguese

Father: Pai
Mother: Mãe
Son: Filho
Daughter: Filha
Brother: Irmão
Sister: Irmã
Grandfather: Avô
Grandmother: Avó
Grandson: Neto
Granddaughter: Neta
Uncle: Tio
Aunt: Tia
Cousin (male): Primo
Cousin (female): Prima
Nephew: Sobrinho
Niece: Sobrinha
Husband: Marido
Wife: Esposa
Brother-in-law: Cunhado
Sister-in-law: Cunhada
Father-in-law: Sogro
Mother-in-law: Sogra

# Please write 3 verb-object examples and the English translations of those examples for each of the 20 most common Spanish verbs.
Ser (to be)
Ella es médico. (She is a doctor.)
La casa es grande. (The house is big.)
Somos amigos. (We are friends.)
Estar (to be)
Estoy cansado. (I am tired.)
El libro está en la mesa. (The book is on the table.)
Estamos felices. (We are happy.)
Tener (to have)
Tengo un perro. (I have a dog.)
Ella tiene dos hijos. (She has two children.)
Tenemos una reunión mañana. (We have a meeting tomorrow.)
Hacer (to do, to make)
Él hace la tarea. (He does the homework.)
Hago ejercicio todos los días. (I exercise every day.)
Haz la cama. (Make the bed.)
Decir (to say, to tell)
Le dije la verdad. (I told him/her the truth.)
Ellos dicen que van a venir. (They say they will come.)
Dime tu nombre. (Tell me your name.)
Ir (to go)
Vamos al cine. (We are going to the movies.)
Ellos van a la playa. (They are going to the beach.)
¿Adónde vas? (Where are you going?)
Ver (to see)
Veo un perro en el parque. (I see a dog in the park.)
Ella ve la televisión. (She watches TV.)
Vemos una película. (We watch a movie.)
Saber (to know)
Sé la respuesta. (I know the answer.)
Ellos saben tocar la guitarra. (They know how to play the guitar.)
No sé dónde está. (I don't know where it is.)
Poder (to be able to, can)
Puedes hablar inglés. (You can speak English.)
Ella puede bailar muy bien. (She can dance very well.)
No puedo ir contigo. (I can't go with you.)
Querer (to want)
Quiero un helado. (I want an ice cream.)
Ellos quieren viajar. (They want to travel.)
¿Quieres venir conmigo? (Do you want to come with me?)
Llegar (to arrive)
Llegamos tarde a la fiesta. (We arrived late to the party.)
Ella llega a las 8 en punto. (She arrives at 8 o'clock sharp.)
¿Cuándo llegas a casa? (When do you arrive home?)
Pasar (to pass, to spend)
Pasé el examen. (I passed the exam.)
Ellos pasaron el día en la playa. (They spent the day at the beach.)
¿Puedes pasar la sal, por favor? (Can you pass the salt, please?)
Gustar (to like)
Me gusta el chocolate. (I like chocolate.)
A ella le gustan los libros. (She likes books.)
¿Te gusta la música? (Do you like music?)
Trabajar (to work)
Trabajo en una oficina. (I work in an office.)
Él trabaja mucho. (He works a lot.)
¿Dónde trabajas? (Where do you work?)
Haber (to have, to exist)
Ha habido un accidente. (There has been an accident.)
Hay muchos libros en la biblioteca. (There are many books in the library.)
No ha habido noticias. (There hasn't been any news.)
Deber (to owe, should)
Le debo dinero. (I owe him/her money.)
Deberías estudiar más. (You should study more.)
¿Qué deberíamos hacer? (What should we do?)
Parecer (to seem, to appear)
Eso me parece interesante. (That seems interesting to me.)
Parece que va a llover. (It looks like it's going to rain.)
¿Qué te parece este vestido? (What do you think of this dress?)
Llamar (to call)
Llámame cuando llegues. (Call me when you arrive.)
Ella llama a su madre todos los días. (She calls her mother every day.)
¿Puedes llamar al médico? (Can you call the doctor?)
Vivir (to live)
Vivo en Madrid. (I live in Madrid.)
Ellos viven en una casa grande. (They live in a big house.)
¿Dónde vives? (Where do you live?)
Sentir (to feel, to regret)
Siento frío. (I feel cold.)
Él siente tristeza. (He feels sadness.)
Lo siento, no puedo ir. (I'm sorry, I can't go.)
# Please write 3 verb-object examples and the English translations of those examples for each of the 20 most common German verbs.
sein (to be)
Er ist ein Arzt. (He is a doctor.)
Das Buch ist interessant. (The book is interesting.)
Wir sind Freunde. (We are friends.)
haben (to have)
Ich habe einen Hund. (I have a dog.)
Sie hat zwei Kinder. (She has two children.)
Wir haben eine Besprechung morgen. (We have a meeting tomorrow.)
werden (to become, will)
Ich werde Arzt. (I will become a doctor.)
Du wirst bald Großvater. (You will soon become a grandfather.)
Sie wird müde. (She is getting tired.)
können (to be able to, can)
Ich kann Deutsch sprechen. (I can speak German.)
Er kann gut schwimmen. (He can swim well.)
Können Sie mir helfen? (Can you help me?)
sagen (to say, to tell)
Ich habe ihm die Wahrheit gesagt. (I told him the truth.)
Sie sagt, dass sie kommt. (She says she is coming.)
Sag mir deinen Namen. (Tell me your name.)
machen (to do, to make)
Er macht seine Hausaufgaben. (He does his homework.)
Sie macht jeden Tag Sport. (She exercises every day.)
Mach das Bett. (Make the bed.)
geben (to give)
Gib mir das Buch bitte. (Give me the book, please.)
Er gibt ihr Blumen. (He gives her flowers.)
Geben Sie mir Bescheid. (Let me know.)
sollen (should, ought to)
Du solltest mehr Sport treiben. (You should do more sports.)
Sie soll pünktlich sein. (She should be on time.)
Sollen wir gehen? (Should we go?)
wollen (to want)
Ich will ein Eis. (I want an ice cream.)
Er will verreisen. (He wants to travel.)
Willst du mitkommen? (Do you want to come along?)
gehen (to go)
Ich gehe ins Kino. (I am going to the cinema.)
Sie gehen zum Supermarkt. (They are going to the supermarket.)
Gehst du nach Hause? (Are you going home?)
wissen (to know)
Ich weiß die Antwort. (I know the answer.)
Sie weiß, wie man kocht. (She knows how to cook.)
Weißt du, wo das ist? (Do you know where that is?)
sehen (to see)
Ich sehe einen Hund im Park. (I see a dog in the park.)
Sie sieht fern. (She watches TV.)
Wir sehen einen Film. (We watch a movie.)
kommen (to come)
Ich komme später. (I am coming later.)
Sie kommt aus Frankreich. (She comes from France.)
Kommst du mit uns? (Are you coming with us?)
denken (to think)
Ich denke, es ist eine gute Idee. (I think it's a good idea.)
Er denkt viel nach. (He thinks a lot.)
Denk darüber nach. (Think about it.)
nehmen (to take)
Ich nehme den Bus. (I take the bus.)
Sie nimmt ein Bad. (She takes a bath.)
Nimm es mit. (Take it with you.)
tun (to do)
Ich tue mein Bestes. (I do my best.)
Er tut, was er will. (He does what he wants.)
Tu es einfach. (Just do it.)
mögen (to like)
Ich mag Schokolade. (I like chocolate.)
Sie mag Bücher. (She likes books.)
Magst du Musik? (Do you like music?)
lassen (to let, to allow)
Lass mich das machen. (Let me do it.)
Sie lässt ihn gehen. (She lets him go.)
Lassen Sie mich wissen. (Let me know.)
stehen (to stand)
Ich stehe früh auf. (I get up early.)
Er steht vor der Tür. (He is standing in front of the door.)
Steh auf! (Stand up!)
halten (to hold, to stop)
Ich halte die Tür auf. (I hold the door open.)
Sie hält das Baby. (She holds the baby.)
Halt an! (Stop!)
# Please write 3 verb-object examples and the English translations of those examples for each of the 20 most common French verbs.
être (to be)
Elle est médecin. (She is a doctor.)
La maison est grande. (The house is big.)
Nous sommes amis. (We are friends.)
avoir (to have)
J'ai un chien. (I have a dog.)
Elle a deux enfants. (She has two children.)
Nous avons une réunion demain. (We have a meeting tomorrow.)
faire (to do, to make)
Il fait ses devoirs. (He does his homework.)
Je fais de l'exercice tous les jours. (I exercise every day.)
Fais ton lit. (Make your bed.)
dire (to say, to tell)
Je lui ai dit la vérité. (I told him/her the truth.)
Ils disent qu'ils vont venir. (They say they will come.)
Dis-moi ton nom. (Tell me your name.)
aller (to go)
On va au cinéma. (We are going to the movies.)
Ils vont à la plage. (They are going to the beach.)
Où vas-tu? (Where are you going?)
voir (to see)
Je vois un chien dans le parc. (I see a dog in the park.)
Elle voit la télévision. (She watches TV.)
Nous regardons un film. (We watch a movie.)
savoir (to know)
Je sais la réponse. (I know the answer.)
Ils savent jouer de la guitare. (They know how to play the guitar.)
Je ne sais pas où il est. (I don't know where he is.)
pouvoir (to be able to, can)
Tu peux parler anglais. (You can speak English.)
Elle peut bien danser. (She can dance well.)
Je ne peux pas venir avec toi. (I can't come with you.)
vouloir (to want)
Je veux une glace. (I want an ice cream.)
Ils veulent voyager. (They want to travel.)
Veux-tu venir avec moi? (Do you want to come with me?)
devoir (to have to, must)
Je dois étudier. (I have to study.)
Il doit arriver à l'heure. (He must arrive on time.)
Que devons-nous faire? (What must we do?)
venir (to come)
Je viens plus tard. (I am coming later.)
Elle vient de France. (She comes from France.)
Viens avec nous? (Are you coming with us?)
prendre (to take)
Je prends le bus. (I take the bus.)
Elle prend un bain. (She takes a bath.)
Prends-le avec toi. (Take it with you.)
donner (to give)
Donne-moi le livre, s'il te plaît. (Give me the book, please.)
Il donne des fleurs à sa mère. (He gives flowers to his mother.)
Donnez-moi des nouvelles. (Give me some news.)
pouvoir (to can, to be able to)
Je peux t'aider. (I can help you.)
Elle peut chanter très bien. (She can sing very well.)
Pouvez-vous me rappeler? (Can you call me back?)
savoir (to know, to be aware of)
Je sais la vérité. (I know the truth.)
Ils savent nager. (They know how to swim.)
Sais-tu où il est? (Do you know where he is?)
voir (to see)
Je vois un film. (I see a movie.)
Elle voit ses amis. (She sees her friends.)
Voyez-vous ce que je veux dire? (Do you see what I mean?)
pouvoir (to be able to, can)
Je peux venir demain. (I can come tomorrow.)
Il peut parler plusieurs langues. (He can speak multiple languages.)
Pouvez-vous m'aider? (Can you help me?)
savoir (to know)
Je sais cuisiner. (I know how to cook.)
Elle sait jouer du piano. (She knows how to play the piano.)
Sais-tu la réponse? (Do you know the answer?)
venir (to come)
Je viens te voir. (I come to see you.)
Il vient de loin. (He comes from far away.)
Viens-tu à la fête? (Are you coming to the party?)
falloir (to need, to be necessary)
Il faut étudier. (It is necessary to study.)
Il faut partir maintenant. (We need to leave now.)
Il faut que je parte. (I need to go.)
# Please write 3 verb-object examples and the English translations of those examples for each of the 20 most common Italian verbs.
essere (to be)
Sono un insegnante. (I am a teacher.)
Lei è italiana. (She is Italian.)
Siamo amici. (We are friends.)
avere (to have)
Ho una macchina. (I have a car.)
Lui ha due fratelli. (He has two brothers.)
Abbiamo una casa grande. (We have a big house.)
fare (to do, to make)
Faccio i compiti. (I do my homework.)
Lei fa sport ogni giorno. (She does sports every day.)
Faciamo una passeggiata. (Let's take a walk.)
dire (to say, to tell)
Dico la verità. (I tell the truth.)
Lui dice che arriva presto. (He says he will arrive soon.)
Dì il tuo nome. (Say your name.)
andare (to go)
Vado al cinema. (I go to the movies.)
Lei va in spiaggia. (She goes to the beach.)
Andiamo a cena fuori. (Let's go out for dinner.)
vedere (to see)
Vedo un gatto. (I see a cat.)
Lui vede la televisione. (He watches TV.)
Vediamo un film. (Let's watch a movie.)
sapere (to know)
So la risposta. (I know the answer.)
Lei sa suonare il pianoforte. (She knows how to play the piano.)
Sai dov'è? (Do you know where it is?)
potere (to be able to, can)
Posso aiutarti. (I can help you.)
Lei può parlare italiano. (She can speak Italian.)
Possiamo partire domani. (We can leave tomorrow.)
volere (to want)
Voglio una pizza. (I want a pizza.)
Lui vuole viaggiare. (He wants to travel.)
Volete venire con noi? (Do you want to come with us?)
dovere (to have to, must)
Devo studiare. (I have to study.)
Lei deve arrivare in orario. (She must arrive on time.)
Dobbiamo fare la spesa. (We have to do the grocery shopping.)
venire (to come)
Vengo dopo. (I come later.)
Lei viene dalla Francia. (She comes from France.)
Venite con noi? (Are you coming with us?)
prendere (to take)
Prendo l'autobus. (I take the bus.)
Lui prende un bagno. (He takes a bath.)
Prendiamo un caffè. (Let's have a coffee.)
dare (to give)
Dammi il libro, per favore. (Give me the book, please.)
Lui dà fiori a sua madre. (He gives flowers to his mother.)
Date mi aggiornamenti. (Give me updates.)
stare (to stay, to be)
Sto a casa. (I stay at home.)
Lei sta bene. (She is doing well.)
State attenti! (Be careful!)
parlare (to speak, to talk)
Parlo italiano. (I speak Italian.)
Lui parla francese. (He speaks French.)
Parliamo di politica. (Let's talk about politics.)
trovare (to find)
Trovo le chiavi. (I find the keys.)
Lui trova sempre una soluzione. (He always finds a solution.)
Troviamo un ristorante. (Let's find a restaurant.)
sentire (to hear, to feel)
Sento la musica. (I hear the music.)
Lei sente freddo. (She feels cold.)
Sentiamo il profumo dei fiori. (We smell the scent of flowers.)
lasciare (to leave, to let)
Lascio la stanza. (I leave the room.)
Lei lascia che il cane esca. (She lets the dog out.)
Lasciate che vi aiuti. (Let me help you.)
prendere (to take)
Prendo il treno. (I take the train.)
Lui prende un appuntamento. (He makes an appointment.)
Prendiamo una decisione. (Let's make a decision.)
capire (to understand)
Capisco il problema. (I understand the problem.)
Lei capisce l'inglese. (She understands English.)
Capite quello che dico? (Do you understand what I'm saying?)
# Please write 3 verb-object examples and the English translations of those examples for each of the 20 most common Portuguese verbs.
ser (to be)
Eu sou professor. (I am a teacher.)
Ele é brasileiro. (He is Brazilian.)
Nós somos amigos. (We are friends.)
ter (to have)
Eu tenho um carro. (I have a car.)
Ela tem dois filhos. (She has two children.)
Nós temos uma casa grande. (We have a big house.)
fazer (to do, to make)
Eu faço os deveres de casa. (I do my homework.)
Ele faz exercício todos os dias. (He exercises every day.)
Nós fazemos um passeio. (We take a walk.)
dizer (to say, to tell)
Eu digo a verdade. (I tell the truth.)
Ele diz que vai chegar cedo. (He says he will arrive early.)
Diga seu nome. (Say your name.)
ir (to go)
Eu vou ao cinema. (I go to the movies.)
Ela vai à praia. (She goes to the beach.)
Nós vamos jantar fora. (We go out for dinner.)
ver (to see)
Eu vejo um gato. (I see a cat.)
Ele vê televisão. (He watches TV.)
Vamos ver um filme. (Let's watch a movie.)
saber (to know)
Eu sei a resposta. (I know the answer.)
Ele sabe tocar piano. (He knows how to play the piano.)
Sabe onde fica? (Do you know where it is?)
poder (to be able to, can)
Eu posso te ajudar. (I can help you.)
Ela pode falar italiano. (She can speak Italian.)
Podemos sair amanhã. (We can go out tomorrow.)
querer (to want)
Eu quero uma pizza. (I want a pizza.)
Ele quer viajar. (He wants to travel.)
Vocês querem vir comigo? (Do you want to come with me?)
precisar (to need)
Eu preciso estudar. (I need to study.)
Ele precisa chegar na hora. (He needs to arrive on time.)
Precisamos fazer compras. (We need to do the shopping.)
vir (to come)
Eu venho depois. (I come later.)
Ele vem da França. (He comes from France.)
Vocês vêm conosco? (Are you coming with us?)
pegar (to take)
Eu pego o ônibus. (I take the bus.)
Ele pega um banho. (He takes a bath.)
Vamos pegar um café. (Let's have a coffee.)
dar (to give)
Dê-me o livro, por favor. (Give me the book, please.)
Ele dá flores para a mãe. (He gives flowers to his mother.)
Dê-me notícias. (Give me news.)
ficar (to stay, to be)
Eu fico em casa. (I stay at home.)
Ela fica bem. (She is doing well.)
Fiquem atentos! (Stay alert!)
falar (to speak, to talk)
Eu falo português. (I speak Portuguese.)
Ele fala francês. (He speaks French.)
Vamos falar sobre política. (Let's talk about politics.)
encontrar (to find)
Eu encontro as chaves. (I find the keys.)
Ele sempre encontra uma solução. (He always finds a solution.)
Vamos encontrar um restaurante. (Let's find a restaurant.)
sentir (to feel)
Eu sinto a música. (I feel the music.)
Ele sente frio. (He feels cold.)
Sentimos o cheiro das flores. (We smell the scent of flowers.)
deixar (to leave, to let)
Eu deixo o quarto. (I leave the room.)
Ela deixa o cachorro sair. (She lets the dog out.)
Deixem-me ajudar vocês. (Let me help you.)
tomar (to take)
Eu tomo o trem. (I take the train.)
Ele toma um banho. (He takes a shower.)
Vamos tomar uma decisão. (Let's make a decision.)
entender (to understand)
Eu entendo o problema. (I understand the problem.)
Ele entende inglês. (He understands English.)
Vocês entendem o que estou dizendo? (Do you understand what I'm saying?)

# colors in Spanish with German and English translations
Rojo (Red) - Rot (German), Red (English)
Azul (Blue) - Blau (German), Blue (English)
Amarillo (Yellow) - Gelb (German), Yellow (English)
Verde (Green) - Grün (German), Green (English)
Naranja (Orange) - Orange (German/English)
Morado (Purple) - Lila (German), Purple (English)
Rosa (Pink) - Rosa (German), Pink (English)
Marrón (Brown) - Braun (German), Brown (English)
Negro (Black) - Schwarz (German), Black (English)
Blanco (White) - Weiß (German), White (English)
Gris (Gray) - Grau (German), Gray (English)
Beige (Beige) - Beige (German/English)
Dorado (Gold) - Gold (German/English)
Plateado (Silver) - Silber (German), Silver (English)
Violeta (Violet) - Violett (German), Violet (English)
# colors in French with Spanish , German and English translations
Rouge (Red) - Rojo (Spanish), Rot (German), Red (English)
Bleu (Blue) - Azul (Spanish), Blau (German), Blue (English)
Jaune (Yellow) - Amarillo (Spanish), Gelb (German), Yellow (English)
Vert (Green) - Verde (Spanish), Grün (German), Green (English)
Orange (Orange) - Naranja (Spanish), Orange (German/English)
Violet (Purple) - Morado (Spanish), Lila (German), Purple (English)
Rose (Pink) - Rosa (Spanish), Rosa (German), Pink (English)
Marron (Brown) - Marrón (Spanish), Braun (German), Brown (English)
Noir (Black) - Negro (Spanish), Schwarz (German), Black (English)
Blanc (White) - Blanco (Spanish), Weiß (German), White (English)
Gris (Gray) - Gris (Spanish), Grau (German), Gray (English)
Beige (Beige) - Beige (Spanish), Beige (German/English)
Doré (Gold) - Dorado (Spanish), Gold (German/English)
Argenté (Silver) - Plateado (Spanish), Silber (German), Silver (English)
Violet (Violet) - Violeta (Spanish), Violett (German), Violet (English)
# colors in Italian with Spanish , German and English translations
Rosso (Red) - Rojo (Spanish), Rot (German), Red (English)
Blu (Blue) - Azul (Spanish), Blau (German), Blue (English)
Giallo (Yellow) - Amarillo (Spanish), Gelb (German), Yellow (English)
Verde (Green) - Verde (Spanish), Grün (German), Green (English)
Arancione (Orange) - Naranja (Spanish), Orange (German/English)
Viola (Purple) - Morado (Spanish), Lila (German), Purple (English)
Rosa (Pink) - Rosa (Spanish), Rosa (German), Pink (English)
Marrone (Brown) - Marrón (Spanish), Braun (German), Brown (English)
Nero (Black) - Negro (Spanish), Schwarz (German), Black (English)
Bianco (White) - Blanco (Spanish), Weiß (German), White (English)
Grigio (Gray) - Gris (Spanish), Grau (German), Gray (English)
Beige (Beige) - Beige (Spanish/German/English)
Oro (Gold) - Dorado (Spanish), Gold (German/English)
Argento (Silver) - Plateado (Spanish), Silber (German), Silver (English)
Violetto (Violet) - Violeta (Spanish), Violett (German), Violet (English)
# colors in Portuguese with Spanish , German and English translations
Vermelho (Red) - Rojo (Spanish), Rot (German), Red (English)
Azul (Blue) - Azul (Spanish), Blau (German), Blue (English)
Amarelo (Yellow) - Amarillo (Spanish), Gelb (German), Yellow (English)
Verde (Green) - Verde (Spanish), Grün (German), Green (English)
Laranja (Orange) - Naranja (Spanish), Orange (German/English)
Roxo (Purple) - Morado (Spanish), Lila (German), Purple (English)
Rosa (Pink) - Rosa (Spanish), Rosa (German), Pink (English)
Marrom (Brown) - Marrón (Spanish), Braun (German), Brown (English)
Preto (Black) - Negro (Spanish), Schwarz (German), Black (English)
Branco (White) - Blanco (Spanish), Weiß (German), White (English)
Cinza (Gray) - Gris (Spanish), Grau (German), Gray (English)
Bege (Beige) - Beige (Spanish/German/English)
Ouro (Gold) - Dorado (Spanish), Gold (German/English)
Prata (Silver) - Plateado (Spanish), Silber (German), Silver (English)
Violeta (Violet) - Violeta (Spanish), Violett (German), Violet (English)

# professions in Spanis with English translations
Médico - Doctor/Physician
Enfermero/a - Nurse
Ingeniero/a - Engineer
Profesor/a - Teacher/Professor
Abogado/a - Lawyer
Arquitecto/a - Architect
Contador/a - Accountant
Periodista - Journalist
Psicólogo/a - Psychologist
Actor/Actriz - Actor/Actress
Músico/a - Musician
Dentista - Dentist
Bombero/a - Firefighter
Policía - Police Officer
Farmacéutico/a - Pharmacist
Economista - Economist
Escritor/a - Writer
Traductor/a - Translator
Chef/Cocinero/a - Chef/Cook
Electricista - Electrician
# professions in German with English translations
Arzt/Ärztin - Doctor/Physician
Krankenschwester/Krankenpfleger - Nurse
Ingenieur/Ingenieurin - Engineer
Lehrer/Lehrerin - Teacher
Anwalt/Anwältin - Lawyer
Architekt/Architektin - Architect
Buchhalter/Buchhalterin - Accountant
Journalist/Journalistin - Journalist
Psychologe/Psychologin - Psychologist
Schauspieler/Schauspielerin - Actor/Actress
Musiker/Musikerin - Musician
Zahnarzt/Zahnärztin - Dentist
Feuerwehrmann/Feuerwehrfrau - Firefighter
Polizist/Polizistin - Police Officer
Apotheker/Apothekerin - Pharmacist
Ökonom/Ökonomin - Economist
Schriftsteller/Schriftstellerin - Writer
Übersetzer/Übersetzerin - Translator
Koch/Köchin - Chef/Cook
Elektriker/Elektrikerin - Electrician
# professions in French with English translations
Médecin - Doctor/Physician
Infirmier/Infirmière - Nurse
Ingénieur - Engineer
Professeur/Enseignant - Teacher/Professor
Avocat/Avocate - Lawyer
Architecte - Architect
Comptable - Accountant
Journaliste - Journalist
Psychologue - Psychologist
Acteur/Actrice - Actor/Actress
Musicien/Musicienne - Musician
Dentiste - Dentist
Sapeur-pompier - Firefighter
Policier/Policière - Police Officer
Pharmacien/Pharmacienne - Pharmacist
Économiste - Economist
Écrivain - Writer
Traducteur/Traductrice - Translator
Chef/Cuisinier - Chef/Cook
Électricien/Électricienne - Electrician
# professions in Italian with English translations
Medico - Doctor/Physician
Infermiere/Infermiera - Nurse
Ingegnere - Engineer
Insegnante - Teacher
Avvocato/Avvocatessa - Lawyer
Architetto/Architetta - Architect
Commercialista - Accountant
Giornalista - Journalist
Psicologo/Psicologa - Psychologist
Attore/Attrice - Actor/Actress
Musicista - Musician
Dentista - Dentist
Vigile del fuoco - Firefighter
Poliziotto/Poliziotta - Police Officer
Farmacista - Pharmacist
Economista - Economist
Scrittore/Scrittrice - Writer
Traduttore/Traduttrice - Translator
Chef/Cuoco - Chef/Cook
Elettricista - Electrician
# professions in Portuguese with English translations
Médico/Médica - Doctor/Physician
Enfermeiro/Enfermeira - Nurse
Engenheiro/Engenheira - Engineer
Professor/Professora - Teacher/Professor
Advogado/Advogada - Lawyer
Arquiteto/Arquiteta - Architect
Contador/Contadora - Accountant
Jornalista - Journalist
Psicólogo/Psicóloga - Psychologist
Ator/Atriz - Actor/Actress
Músico/Música - Musician
Dentista - Dentist
Bombeiro/Bombeira - Firefighter
Policial - Police Officer
Farmacêutico/Farmacêutica - Pharmacist
Economista - Economist
Escritor/Escritora - Writer
Tradutor/Tradutora - Translator
Chef/Chefe de cozinha - Chef/Cook
Eletricista - Electrician

# Hobbies in Spanish with English translations
Leer (To read)
Escribir (To write)
Bailar (To dance)
Cantar (To sing)
Pintar (To paint)
Dibujar (To draw)
Cocinar (To cook)
Jugar al fútbol (To play soccer)
Nadar (To swim)
Correr (To run)
Viajar (To travel)
Fotografiar (To take photographs)
Jugar videojuegos (To play video games)
Hacer ejercicio (To exercise)
Tocar un instrumento (To play an instrument)
Tejer (To knit)
Coser (To sew)
Hacer manualidades (To do crafts)
Coleccionar (To collect)
Ver películas (To watch movies)
# Hobbies in German with English translations
Lesen (To read)
Schreiben (To write)
Tanzen (To dance)
Singen (To sing)
Malen (To paint)
Zeichnen (To draw)
Kochen (To cook)
Fußball spielen (To play soccer)
Schwimmen (To swim)
Laufen (To run)
Reisen (To travel)
Fotografieren (To take photographs)
Videospiele spielen (To play video games)
Sport treiben (To do sports)
Ein Instrument spielen (To play an instrument)
Stricken (To knit)
Nähen (To sew)
Basteln (To do crafts)
Sammeln (To collect)
Filme anschauen (To watch movies)
# Hobbies in French with English translations
Lire (To read)
Écrire (To write)
Danser (To dance)
Chanter (To sing)
Peindre (To paint)
Dessiner (To draw)
Cuisiner (To cook)
Jouer au football (To play soccer)
Nager (To swim)
Courir (To run)
Voyager (To travel)
Photographier (To take photographs)
Jouer aux jeux vidéo (To play video games)
Faire du sport (To do sports)
Jouer d'un instrument (To play an instrument)
Tricoter (To knit)
Coudre (To sew)
Faire des travaux manuels (To do crafts)
Collectionner (To collect)
Regarder des films (To watch movies)
# Hobbies in Italian with English translations
Leggere (To read)
Scrivere (To write)
Ballare (To dance)
Cantare (To sing)
Pitturare (To paint)
Disegnare (To draw)
Cucinare (To cook)
Giocare a calcio (To play soccer)
Nuotare (To swim)
Correre (To run)
Viaggiare (To travel)
Fotografare (To take photographs)
Giocare ai videogiochi (To play video games)
Fare sport (To do sports)
Suonare uno strumento (To play an instrument)
Lavorare a maglia (To knit)
Cucire (To sew)
Fare lavori manuali (To do crafts)
Collezionare (To collect)
Guardare film (To watch movies)
# Hobbies in Portuguese with English translations
Ler (To read)
Escrever (To write)
Dançar (To dance)
Cantar (To sing)
Pintar (To paint)
Desenhar (To draw)
Cozinhar (To cook)
Jogar futebol (To play soccer)
Nadar (To swim)
Correr (To run)
Viajar (To travel)
Fotografar (To take photographs)
Jogar videogame (To play video games)
Fazer exercícios (To exercise)
Tocar um instrumento (To play an instrument)
Tricotar (To knit)
Costurar (To sew)
Fazer artesanato (To do crafts)
Colecionar (To collect)
Assistir filmes (To watch movies)
# Animals in Spanish with English translations
Perro (Dog)
Gato (Cat)
Caballo (Horse)
Vaca (Cow)
Oveja (Sheep)
Cerdo (Pig)
Conejo (Rabbit)
Rata (Rat)
Ratón (Mouse)
Tigre (Tiger)
León (Lion)
Elefante (Elephant)
Jirafa (Giraffe)
Mono (Monkey)
Gorila (Gorilla)
Cebra (Zebra)
Oso (Bear)
Lobo (Wolf)
Zorro (Fox)
Serpiente (Snake)
Tortuga (Turtle)
Cocodrilo (Crocodile)
Pájaro (Bird)
Águila (Eagle)
Pato (Duck)
Pollo (Chicken)
Gallo (Rooster)
Pavo (Turkey)
Pez (Fish)
Ballena (Whale)
# Animals in German with English translations
Hund (Dog)
Katze (Cat)
Pferd (Horse)
Kuh (Cow)
Schaf (Sheep)
Schwein (Pig)
Hase (Rabbit)
Ratte (Rat)
Maus (Mouse)
Tiger (Tiger)
Löwe (Lion)
Elefant (Elephant)
Giraffe (Giraffe)
Affe (Monkey)
Gorilla (Gorilla)
Zebra (Zebra)
Bär (Bear)
Wolf (Wolf)
Fuchs (Fox)
Schlange (Snake)
Schildkröte (Turtle)
Krokodil (Crocodile)
Vogel (Bird)
Adler (Eagle)
Ente (Duck)
Huhn (Chicken)
Hahn (Rooster)
Truthahn (Turkey)
Fisch (Fish)
Wal (Whale)
# Animals in French with English translations
Chien (Dog)
Chat (Cat)
Cheval (Horse)
Vache (Cow)
Mouton (Sheep)
Cochon (Pig)
Lapin (Rabbit)
Rat (Rat)
Souris (Mouse)
Tigre (Tiger)
Lion (Lion)
Éléphant (Elephant)
Girafe (Giraffe)
Singe (Monkey)
Gorille (Gorilla)
Zèbre (Zebra)
Ours (Bear)
Loup (Wolf)
Renard (Fox)
Serpent (Snake)
Tortue (Turtle)
Crocodile (Crocodile)
Oiseau (Bird)
Aigle (Eagle)
Canard (Duck)
Poulet (Chicken)
Coq (Rooster)
Dinde (Turkey)
Poisson (Fish)
Baleine (Whale)
# Animals in Italian with English translations
Cane (Dog)
Gatto (Cat)
Cavallo (Horse)
Mucca (Cow)
Pecora (Sheep)
Maiale (Pig)
Coniglio (Rabbit)
Topo (Mouse)
Tigre (Tiger)
Leone (Lion)
Elefante (Elephant)
Giraffa (Giraffe)
Scimmia (Monkey)
Gorilla (Gorilla)
Zebra (Zebra)
Orso (Bear)
Lupo (Wolf)
Volpe (Fox)
Serpente (Snake)
Tartaruga (Turtle)
Coccodrillo (Crocodile)
Uccello (Bird)
Aquila (Eagle)
Anatra (Duck)
Pollo (Chicken)
Gallo (Rooster)
Tacchino (Turkey)
Pesce (Fish)
Balena (Whale)
Delfino (Dolphin)
# Animals in Portuguese with English translations
Cão (Dog)
Gato (Cat)
Cavalo (Horse)
Vaca (Cow)
Ovelha (Sheep)
Porco (Pig)
Coelho (Rabbit)
Rato (Rat)
Tigre (Tiger)
Leão (Lion)
Elefante (Elephant)
Girafa (Giraffe)
Macaco (Monkey)
Gorila (Gorilla)
Zebra (Zebra)
Urso (Bear)
Lobo (Wolf)
Raposa (Fox)
Cobra (Snake)
Tartaruga (Turtle)
Crocodilo (Crocodile)
Pássaro (Bird)
Águia (Eagle)
Pato (Duck)
Galinha (Chicken)
Galo (Rooster)
Peru (Turkey)
Peixe (Fish)
Baleia (Whale)
Golfinho (Dolphin)

Quizás: Perhaps / Maybe
Quizás vaya al cine esta noche. (Perhaps I'll go to the cinema tonight.)
Quizás mañana llueva. (Maybe it will rain tomorrow.)
No sé si vendrán a la fiesta, quizás tengan otros planes. (I don't know if they'll come to the party, maybe they have other plans.)
Tal vez: Maybe / Possibly
Tal vez pueda ayudarte con tu tarea. (Maybe I can help you with your homework.)
Tal vez lleguemos tarde a la reunión. (We might arrive late to the meeting.)
Tal vez vaya de vacaciones a la playa este verano. (I might go on vacation to the beach this summer.)
Quizás - Perhaps / Maybe
Tal vez - Maybe / Possibly
Seguramente - Surely / Certainly
Probablemente - Probably
Posiblemente - Possibly
Ciertamente - Certainly
Quizá - Maybe
Acaso - Perhaps / Maybe
Seguro - Surely / For sure
Indudablemente - Undoubtedly
Tal vez sí - Maybe yes
Tal vez no - Maybe no
Eventualmente - Eventually
Casi seguro - Almost certain
Es posible - It is possible
#Please list 20 modal words in Spanish and give one example for each. Do not use word 'example:'
Quizás - Tal vez llegue temprano a la reunión. (Maybe I'll arrive early to the meeting.)
Seguramente - Seguramente ganaremos el partido de fútbol. (We'll surely win the soccer match.)
Probablemente - Probablemente llueva mañana. (It will probably rain tomorrow.)
Posiblemente - Posiblemente viaje a Europa el próximo año. (I may possibly travel to Europe next year.)
Ciertamente - Ciertamente es un problema complicado de resolver. (Certainly, it's a complex problem to solve.)
Quizá - Quizá venga a la fiesta, depende de mi horario. (Perhaps I'll come to the party, it depends on my schedule.)
Acaso - Acaso no me haya dado cuenta de tu mensaje. (Maybe I didn't notice your message.)
Seguro - Seguro que disfrutarás de la película. (You'll surely enjoy the movie.)
Indudablemente - Indudablemente, ella es una gran cantante. (Undoubtedly, she is a great singer.)
Tal vez - Tal vez me mude a otra ciudad en el futuro. (Maybe I'll move to another city in the future.)
Eventualmente - Eventualmente, todos encontramos nuestro camino. (Eventually, we all find our path.)
Inevitablemente - Inevitablemente, el tiempo pasa rápido. (Inevitably, time passes quickly.)
Seguramente - Seguramente llegará a tiempo para la cita. (He will surely arrive on time for the appointment.)
Quién sabe - Quién sabe qué pasará en el futuro. (Who knows what will happen in the future.)
A lo mejor - A lo mejor encuentro una solución más tarde. (Maybe I'll find a solution later.)
Es probable - Es probable que necesite ayuda con este proyecto. (It's probable that I'll need help with this project.)
Sin duda - Sin duda, él es el mejor en su campo. (Without a doubt, he is the best in his field.)
Posible - Es posible que viaje al extranjero el próximo año. (It's possible that I'll travel abroad next year.)
Quizás sí, quizás no - Quizás sí, quizás no acepte tu invitación. (Maybe yes, maybe no, I'll accept your invitation.)
A caso - A caso no has considerado todas las opciones. (Perhaps you haven't considered all the options.)
# Please list 20 modal words in German and give one example for each. Do not use word 'example:'
Vielleicht - Vielleicht komme ich später vorbei. (Maybe I'll come by later.)
Wahrscheinlich - Wahrscheinlich regnet es morgen. (It will probably rain tomorrow.)
Möglicherweise - Möglicherweise haben sie den Zug verpasst. (They might have missed the train.)
Eventuell - Eventuell treffen wir uns nächste Woche. (We might meet next week.)
Sicherlich - Sicherlich wird er pünktlich sein. (He will certainly be on time.)
Vermutlich - Vermutlich hat sie den Termin vergessen. (Presumably, she forgot about the appointment.)
Gegebenenfalls - Gegebenenfalls können wir die Reservierung ändern. (If necessary, we can change the reservation.)
Möglich - Es ist möglich, dass er heute nicht kommt. (It is possible that he won't come today.)
Gerne - Gerne helfe ich dir bei deinem Projekt. (I'm happy to help you with your project.)
Notfalls - Notfalls können wir einen Plan B in Betracht ziehen. (If necessary, we can consider a Plan B.)
Unter Umständen - Unter Umständen können wir eine Lösung finden. (Under certain circumstances, we can find a solution.)
Eventuell - Eventuell nehme ich an der Konferenz teil. (Perhaps I'll attend the conference.)
Wahrscheinlicherweise - Wahrscheinlicherweise wird sie den Job bekommen. (Most likely, she will get the job.)
Allenfalls - Allenfalls können wir eine Verlängerung beantragen. (At best, we can apply for an extension.)
Möglicherweise - Möglicherweise habe ich meinen Schlüssel verloren. (I might have possibly lost my key.)
Ohne Zweifel - Ohne Zweifel ist er der beste Spieler im Team. (Without a doubt, he is the best player on the team.)
Eventuell - Eventuell sehen wir uns später im Café. (Maybe we'll meet later at the café.)
Wahrscheinlich - Wahrscheinlich hat er die Nachricht nicht erhalten. (He probably didn't receive the message.)
Sicher - Sicher werde ich an der Veranstaltung teilnehmen. (I will definitely attend the event.)
Möglicherweise - Möglicherweise haben wir uns bereits getroffen. (We might have possibly met already.)
# Please list 20 modal words in French and give one example for each. Do not use word 'example:'
Peut-être - Peut-être viendra-t-il à la fête ce soir. (Maybe he'll come to the party tonight.)
Probablement - Probablement il pleuvra demain. (It will probably rain tomorrow.)
Certainement - Certainement, je serai là à l'heure. (Certainly, I'll be there on time.)
Éventuellement - Éventuellement, nous pourrions envisager une autre solution. (Potentially, we could consider another solution.)
Peut-être bien - Peut-être bien qu'elle a déjà entendu la nouvelle. (It's quite possible she has already heard the news.)
Sans doute - Sans doute il est déjà en route. (No doubt he is already on his way.)
Éventuellement - Éventuellement, nous pourrions organiser une réunion pour discuter de ce problème. (Possibly, we could organize a meeting to discuss this issue.)
Éventuel - Un départ éventuel serait envisageable dans le futur. (A possible departure would be conceivable in the future.)
Peut-être que - Peut-être qu'elle aura besoin d'un peu plus de temps pour prendre une décision. (Maybe she will need some more time to make a decision.)
Vraisemblablement - Vraisemblablement, il a déjà terminé son travail. (Most likely, he has already finished his work.)
Sûrement - Sûrement, il se souvient de cette conversation. (Surely, he remembers that conversation.)
Éventuellement - Éventuellement, nous pourrions envisager une collaboration future. (Potentially, we could consider future collaboration.)
Peut-être bien que - Peut-être bien qu'elle aura besoin d'aide pour accomplir cette tâche. (It's quite possible she will need help to complete this task.)
Probablement - Probablement, il aura besoin d'un peu plus de temps pour terminer le projet. (Probably, he will need some more time to finish the project.)
Assurément - Assurément, cette information est essentielle. (Undoubtedly, this information is crucial.)
Éventuellement - Éventuellement, nous pourrions envisager de changer de stratégie. (Potentially, we could consider changing our strategy.)
Vraisemblablement - Vraisemblablement, ils ne seront pas disponibles demain. (Most likely, they won't be available tomorrow.)
Peut-être bien - Peut-être bien que nous pourrons trouver une solution ensemble. (It's quite possible that we can find a solution together.)
Sûrement - Sûrement, il y a une explication logique à tout cela. (Surely, there is a logical explanation for all of this.)
Éventuellement - Éventuellement, nous pourrions envisager une extension du délai. (Potentially, we could consider an extension of the deadline.)
# Please list 20 modal words in Italian and give one example for each. Do not use word 'example:'
Forse - Forse andrò al cinema stasera. (Maybe I'll go to the cinema tonight.)
Probabilmente - Probabilmente pioverà domani. (It will probably rain tomorrow.)
Sicuramente - Sicuramente vinceremo la partita. (We will definitely win the match.)
Eventualmente - Eventualmente potremmo cambiare piano. (Potentially, we could change the plan.)
Magari - Magari riesco a finire il lavoro in tempo. (Maybe I can manage to finish the work on time.)
Forse - Forse arriverò un po' più tardi. (Perhaps I'll arrive a bit later.)
Eventualmente - Eventualmente potremmo prendere in considerazione un'altra opzione. (Potentially, we could consider another option.)
Possibilmente - Possibilmente verrò alla tua festa. (I will possibly come to your party.)
Certamente - Certamente verrò al tuo matrimonio. (Certainly, I'll come to your wedding.)
Magari - Magari mi concedo una pausa e vado a fare una passeggiata. (Maybe I'll treat myself to a break and go for a walk.)
Eventualmente - Eventualmente potremmo trovare una soluzione insieme. (Potentially, we could find a solution together.)
Probabilmente - Probabilmente sarà meglio posticipare la riunione. (It will probably be better to postpone the meeting.)
Sicuramente - Sicuramente ti aiuterò con il trasloco. (I will definitely help you with the move.)
Eventualmente - Eventualmente potrei prendere una decisione diversa. (Potentially, I could make a different decision.)
Chissà - Chissà cosa riserverà il futuro. (Who knows what the future holds.)
Probabilmente - Probabilmente arriveremo in ritardo. (We will probably arrive late.)
Certamente - Certamente riuscirai a superare questa difficoltà. (Certainly, you will manage to overcome this difficulty.)
Eventualmente - Eventualmente potremmo pensare a una nuova strategia. (Potentially, we could consider a new strategy.)
Magari - Magari riesco a organizzare una cena la prossima settimana. (Maybe I can arrange a dinner next week.)
Possibilmente - Possibilmente concluderemo il progetto entro la fine del mese. (We will possibly complete the project by the end of the month.)
# Please list 20 modal words in Portuguese and give one example for each. Do not use word 'example:'
Talvez - Talvez eu vá à praia amanhã. (Maybe I'll go to the beach tomorrow.)
Provavelmente - Provavelmente choverá mais tarde. (It will probably rain later.)
Certamente - Certamente farei o meu melhor no exame. (Certainly, I will do my best on the exam.)
Eventualmente - Eventualmente, podemos marcar um encontro. (Eventually, we can arrange a meeting.)
Possivelmente - Possivelmente, ele já saiu de férias. (Possibly, he has already gone on vacation.)
Quem sabe - Quem sabe podemos encontrar uma solução juntos. (Who knows, we might find a solution together.)
Talvez - Talvez eu compre um novo celular este mês. (Maybe I'll buy a new phone this month.)
Eventualmente - Eventualmente, ela vai se acostumar com a nova rotina. (Eventually, she will get used to the new routine.)
Certamente - Certamente você conseguirá alcançar seus objetivos. (Certainly, you will achieve your goals.)
Possivelmente - Possivelmente, iremos viajar no próximo fim de semana. (Possibly, we will travel next weekend.)
Talvez - Talvez eu esteja ocupado naquela hora. (Maybe I'll be busy at that time.)
Provavelmente - Provavelmente ela virá à festa comigo. (She will probably come to the party with me.)
Certamente - Certamente ele merece o reconhecimento pelo seu trabalho. (Certainly, he deserves recognition for his work.)
Eventualmente - Eventualmente, teremos que lidar com esses problemas. (Eventually, we will have to deal with these problems.)
Possivelmente - Possivelmente, vamos precisar de mais tempo para concluir o projeto. (Possibly, we will need more time to complete the project.)
Quem sabe - Quem sabe ela esteja interessada em participar do projeto. (Who knows, maybe she is interested in joining the project.)
Provavelmente - Provavelmente o resultado será positivo. (The result will probably be positive.)
Certamente - Certamente haverá consequências para suas ações. (Certainly, there will be consequences for your actions.)
Eventualmente - Eventualmente, encontraremos uma solução para esse problema. (Eventually, we will find a solution to this problem.)
Possivelmente - Possivelmente, haverá um atraso na entrega do pedido. (Possibly, there will be a delay in the delivery of the order.)

# how to say I may, I can, I should etc in Spanish? Please give examples, then English translations. Do not use word 'example:'
I may - Puede que
Puede que vaya al cine esta noche. (I may go to the movies tonight.)
I can - Puedo
Puedo ayudarte con tu tarea. (I can help you with your homework.)
I should - Debería
Debería estudiar más para el examen. (I should study more for the exam.)
I must - Debo
Debo llegar temprano a la reunión. (I must arrive early to the meeting.)
I want to - Quiero
Quiero viajar por el mundo. (I want to travel the world.)
I need to - Necesito
Necesito hacer ejercicio regularmente. (I need to exercise regularly.)
I have to - Tengo que
Tengo que ir al supermercado después del trabajo. (I have to go to the supermarket after work.)
I would like to - Me gustaría
Me gustaría probar ese nuevo restaurante. (I would like to try that new restaurant.)
I might - Podría
Podría ir a la fiesta si tengo tiempo. (I might go to the party if I have time.)
I will - Voy a
Voy a llamar a mi madre más tarde. (I will call my mother later.)
I want - Quiero
Quiero comprar un nuevo coche. (I want to buy a new car.)
I should not - No debería
No debería comer tantos dulces. (I shouldn't eat so many sweets.)
# how to say I may, I can, I should etc in German? Please give examples, then English translations. Do not use word 'example:'
I may - Ich darf
Ich darf heute Abend ausgehen. (I may go out tonight.)
I can - Ich kann
Ich kann Deutsch sprechen. (I can speak German.)
I should - Ich sollte
Ich sollte mehr Sport treiben. (I should do more exercise.)
I must - Ich muss
Ich muss früh aufstehen. (I must wake up early.)
I want to - Ich möchte
Ich möchte eine Tasse Kaffee trinken. (I want to have a cup of coffee.)
I need to - Ich muss
Ich muss meine Hausaufgaben erledigen. (I need to do my homework.)
I have to - Ich muss
Ich muss zum Arzt gehen. (I have to go to the doctor.)
I would like to - Ich würde gerne
Ich würde gerne nach Japan reisen. (I would like to travel to Japan.)
I might - Ich könnte
Ich könnte später vorbeikommen. (I might come by later.)
I will - Ich werde
Ich werde dich morgen anrufen. (I will call you tomorrow.)
I want - Ich möchte
Ich möchte ein Eis essen. (I want to eat ice cream.)
I should not - Ich sollte nicht
Ich sollte nicht so viel Zeit mit Videospielen verbringen. (I should not spend so much time playing video games.)
# how to say I may, I can, I should etc in French? Please give examples, then English translations. Do not use word 'example:'
I may - Je peux
Je peux venir te rendre visite demain. (I may come to visit you tomorrow.)
I can - Je peux
Je peux jouer de la guitare. (I can play the guitar.)
I should - Je devrais
Je devrais étudier pour mon examen. (I should study for my exam.)
I must - Je dois
Je dois aller faire les courses. (I must go grocery shopping.)
I want to - Je veux
Je veux aller au cinéma ce soir. (I want to go to the movies tonight.)
I need to - J'ai besoin de
J'ai besoin de prendre une pause. (I need to take a break.)
I have to - Je dois
Je dois terminer ce projet avant la fin de la semaine. (I have to finish this project by the end of the week.)
I would like to - J'aimerais
J'aimerais visiter Paris un jour. (I would like to visit Paris one day.)
I might - Je pourrais
Je pourrais arriver en retard à la réunion. (I might arrive late to the meeting.)
I will - Je vais
Je vais appeler ma mère ce soir. (I will call my mother tonight.)
I want - Je veux
Je veux acheter un nouveau livre. (I want to buy a new book.)
I should not - Je ne devrais pas
Je ne devrais pas manger autant de sucreries. (I should not eat so many sweets.)
# how to say I may, I can, I should etc in Italian? Please give examples, then English translations. Do not use word 'example:'
I may - Potrei
Potrei uscire con te stasera. (I may go out with you tonight.)
I can - Posso
Posso parlare italiano. (I can speak Italian.)
I should - Dovrei
Dovrei studiare di più per l'esame. (I should study more for the exam.)
I must - Devo
Devo andare al supermercato. (I must go to the supermarket.)
I want to - Voglio
Voglio mangiare una pizza. (I want to eat pizza.)
I need to - Devo
Devo fare i compiti. (I need to do my homework.)
I have to - Devo
Devo incontrare un amico. (I have to meet a friend.)
I would like to - Mi piacerebbe
Mi piacerebbe visitare Roma. (I would like to visit Rome.)
I might - Potrei
Potrei venire alla festa se ho tempo. (I might come to the party if I have time.)
I will - Farò
Farò una passeggiata nel parco. (I will take a walk in the park.)
I want - Voglio
Voglio comprare un regalo. (I want to buy a gift.)
I should not - Non dovrei
Non dovrei mangiare troppi dolci. (I should not eat too many sweets.)
# how to say I may, I can, I should etc in Portuguese? Please give examples, then English translations. Do not use word 'example:'
I may - Eu posso
Eu posso ir ao cinema hoje à noite. (I may go to the movies tonight.)
I can - Eu posso
Eu posso falar português fluentemente. (I can speak Portuguese fluently.)
I should - Eu deveria
Eu deveria estudar mais para a prova. (I should study more for the exam.)
I must - Eu devo
Eu devo acordar cedo amanhã. (I must wake up early tomorrow.)
I want to - Eu quero
Eu quero viajar pelo mundo. (I want to travel the world.)
I need to - Eu preciso
Eu preciso fazer exercícios regularmente. (I need to exercise regularly.)
I have to - Eu tenho que
Eu tenho que ir ao supermercado depois do trabalho. (I have to go to the supermarket after work.)
I would like to - Eu gostaria de
Eu gostaria de experimentar aquele novo restaurante. (I would like to try that new restaurant.)
I might - Eu posso
Eu posso ir à festa se eu tiver tempo. (I might go to the party if I have time.)
I will - Eu vou
Eu vou ligar para minha mãe mais tarde. (I will call my mother later.)
I want - Eu quero
Eu quero comprar um carro novo. (I want to buy a new car.)
I should not - Eu não deveria
Eu não deveria comer tantos doces. (I shouldn't eat so many sweets.)

# news related words in Spanish
Noticias - News
Periódico - Newspaper
Titular - Headline
Reportero - Reporter
Entrevista - Interview
Artículo - Article
Editorial - Editorial
Columna - Column
Redacción - Newsroom
Investigación - Investigation
Informe - Report
Medios de comunicación - Media
Prensa - Press
Publicación - Publication
Cobertura - Coverage
Noticiero - Newscast
Boletín - Bulletin
Suceso - Event
Actualidad - Current events
Corresponsal - Correspondent
# news related words in German
Nachrichten - News
Zeitung - Newspaper
Schlagzeile - Headline
Reporter - Reporter
Interview - Interview
Artikel - Article
Redaktion - Editorial department
Kolumne - Column
Berichterstattung - Coverage
Untersuchung - Investigation
Bericht - Report
Medien - Media
Presse - Press
Veröffentlichung - Publication
Sendung - Broadcast
Bulletin - Bulletin
Ereignis - Event
Aktuelle Nachrichten - Current news
Korrespondent - Correspondent
Öffentlichkeit - Public
# news related words in French
Actualités - News
Journal - Newspaper
Titre - Headline
Journaliste - Journalist
Interview - Interview
Article - Article
Rédaction - Editorial department
Chronique - Column
Couverture médiatique - Media coverage
Enquête - Investigation
Rapport - Report
Médias - Media
Presse - Press
Publication - Publication
Émission - Broadcast
Bulletin - Bulletin
Événement - Event
Nouvelles actuelles - Current news
Correspondant - Correspondent
Public - Public
# news related words in Italian
Notizie - News
Giornale - Newspaper
Titolo - Headline
Giornalista - Journalist
Intervista - Interview
Articolo - Article
Redazione - Editorial department
Rubrica - Column
Copertura mediatica - Media coverage
Inchiesta - Investigation
Rapporto - Report
Media - Media
Stampa - Press
Pubblicazione - Publication
Trasmissione - Broadcast
Bollettino - Bulletin
Evento - Event
Notizie attuali - Current news
Corrispondente - Correspondent
Pubblico - Public
# news related words in Portuguese
Notícias - News
Jornal - Newspaper
Manchete - Headline
Repórter - Reporter
Entrevista - Interview
Artigo - Article
Redação - Editorial department
Coluna - Column
Cobertura - Coverage
Investigação - Investigation
Relatório - Report
Mídia - Media
Imprensa - Press
Publicação - Publication
Transmissão - Broadcast
Boletim - Bulletin
Evento - Event
Notícias atuais - Current news
Correspondente - Correspondent
Público - Public

# film related words in Spanish
Película - Movie
Cine - Cinema
Director - Director
Actor - Actor
Actriz - Actress
Guion - Script
Escena - Scene
Rodaje - Filming
Estreno - Premiere
Taquilla - Box office
Premio - Award
Género - Genre
Argumento - Plot
Trama - Storyline
Reparto - Cast
Secuela - Sequel
Remake - Remake
Doblaje - Dubbing
Subtítulos - Subtitles
Banda sonora - Soundtrack
Montaje - Editing
Vestuario - Costume
Maquillaje - Makeup
Efectos especiales - Special effects
Fotografía - Cinematography
# film related words in German
Film - Film
Kino - Cinema
Regisseur - Director
Schauspieler - Actor
Schauspielerin - Actress
Drehbuch - Script
Szene - Scene
Dreharbeiten - Filming
Premiere - Premiere
Kasse - Box office
Preis - Award
Genre - Genre
Handlung - Plot
Handlungsstrang - Storyline
Besetzung - Cast
Fortsetzung - Sequel
Neuverfilmung - Remake
Synchronisation - Dubbing
Untertitel - Subtitles
Filmmusik - Soundtrack
Schnitt - Editing
Kostüm - Costume
Make-up - Makeup
Spezialeffekte - Special effects
Kameraarbeit - Cinematography
# film related words in French
Film - Movie
Cinéma - Cinema
Réalisateur - Director
Acteur - Actor
Actrice - Actress
Scénario - Script
Scène - Scene
Tournage - Filming
Première - Premiere
Box-office - Box office
Prix - Award
Genre - Genre
Intrigue - Plot
Trame - Storyline
Casting - Cast
Suite - Sequel
Remake - Remake
Doublage - Dubbing
Sous-titres - Subtitles
Bande originale - Soundtrack
Montage - Editing
Costume - Costume
Maquillage - Makeup
Effets spéciaux - Special effects
Photographie - Cinematography
# film related words in Italian
Film - Movie
Cinema - Cinema
Regista - Director
Attore - Actor
Attrice - Actress
Sceneggiatura - Script
Scena - Scene
Riprese - Filming
Prima - Premiere
Incassi - Box office
Premio - Award
Genere - Genre
Trama - Plot
Intreccio - Storyline
Cast - Cast
Sequel - Sequel
Remake - Remake
Doppiaggio - Dubbing
Sottotitoli - Subtitles
Colonna sonora - Soundtrack
Montaggio - Editing
Costume - Costume
Trucco - Makeup
Effetti speciali - Special effects
Fotografia - Cinematography
# film related words in Portuguese
Filme - Movie
Cinema - Cinema
Diretor - Director
Ator - Actor
Atriz - Actress
Roteiro - Script
Cena - Scene
Filmagem - Filming
Estreia - Premiere
Bilheteria - Box office
Prêmio - Award
Gênero - Genre
Enredo - Plot
Trama - Storyline
Elenco - Cast
Sequência - Sequel
Refilmagem - Remake
Dublagem - Dubbing
Legendas - Subtitles
Trilha sonora - Soundtrack
Edição - Editing
Figurino - Costume
Maquiagem - Makeup
Efeitos especiais - Special effects
Fotografia - Cinematography

Gracias por tu ayuda.
Danke für deine Hilfe. (informal) / Danke für Ihre Hilfe. (formal)
Merci pour votre aide.
Grazie per il tuo aiuto. (informal) / Grazie per il vostro aiuto. (formal)
Obrigado(a) pela sua ajuda.



# body parts
Cabeza - Head
Cabello / Pelo - Hair
Rostro / Cara - Face
Ojo - Eye
Nariz - Nose
Boca - Mouth
Oreja - Ear
Cuello - Neck
Hombro - Shoulder
Brazo - Arm
Codo - Elbow
Mano - Hand
Dedo - Finger
Pecho - Chest
Estómago - Stomach
Espalda - Back
Pierna - Leg
Rodilla - Knee
Pie - Foot
Dedo del pie - Toe
#
Kopf - Head
Haar - Hair
Gesicht - Face
Auge - Eye
Nase - Nose
Mund - Mouth
Ohr - Ear
Hals - Neck
Schulter - Shoulder
Arm - Arm
Ellbogen - Elbow
Hand - Hand
Finger - Finger
Brust - Chest
Bauch - Stomach
Rücken - Back
Bein - Leg
Knie - Knee
Fuß - Foot
Zeh - Toe
#
Tête - Head
Cheveux - Hair
Visage - Face
Œil - Eye
Nez - Nose
Bouche - Mouth
Oreille - Ear
Cou - Neck
Épaule - Shoulder
Bras - Arm
Coude - Elbow
Main - Hand
Doigt - Finger
Poitrine - Chest
Estomac - Stomach
Dos - Back
Jambe - Leg
Genou - Knee
Pied - Foot
Orteil - Toe
#
Testa - Head
Capelli - Hair
Viso / Faccia - Face
Occhio - Eye
Naso - Nose
Bocca - Mouth
Orecchio - Ear
Collo - Neck
Spalla - Shoulder
Braccio - Arm
Gomito - Elbow
Mano - Hand
Dito - Finger
Petto - Chest
Stomaco - Stomach
Schiena - Back
Gamba - Leg
Ginocchio - Knee
Piede - Foot
Dito del piede - Toe
#
Cabeça - Head
Cabelo - Hair
Rosto - Face
Olho - Eye
Nariz - Nose
Boca - Mouth
Orelha - Ear
Pescoço - Neck
Ombro - Shoulder
Braço - Arm
Cotovelo - Elbow
Mão - Hand
Dedo - Finger
Peito - Chest
Estômago - Stomach
Costas - Back
Perna - Leg
Joelho - Knee
Pé - Foot
Dedo do pé - Toe
#
Tengo dolor de cabeza. (I have a headache.)
Me gusta peinarme el cabello. (I like to comb my hair.)
Ella tiene una cicatriz en el rostro. (She has a scar on her face.)
Me limpio la frente con una toalla. (I wipe my forehead with a towel.)
Mis ojos están cansados después de leer tanto. (My eyes are tired after reading so much.)
Mi hermano tiene una nariz grande. (My brother has a big nose.)
Me duele el oído derecho. (My right ear hurts.)
Abre la boca y di "ah". (Open your mouth and say "ah".)
Necesito ir al dentista para revisar mis dientes. (I need to go to the dentist to check my teeth.)
La lengua es un órgano importante para saborear los alimentos. (The tongue is an important organ for tasting food.)
Me puse una bufanda alrededor del cuello para abrigarme. (I put a scarf around my neck to keep warm.)
Levanta los hombros y encogelos. (Raise your shoulders and shrug.)
El brazo izquierdo me duele después de hacer ejercicio. (My left arm hurts after exercising.)
Me golpeé el codo contra la mesa. (I bumped my elbow against the table.)
Lávate las manos antes de comer. (Wash your hands before eating.)
#
Ich habe Kopfschmerzen. (I have a headache.)
Ich kämme meine Haare gerne. (I like to comb my hair.)
Sie hat eine Narbe im Gesicht. (She has a scar on her face.)
Ich wische mir die Stirn mit einem Handtuch ab. (I wipe my forehead with a towel.)
Meine Augen sind müde nach so viel Lesen. (My eyes are tired after reading so much.)
Mein Bruder hat eine große Nase. (My brother has a big nose.)
Mein Ohr tut weh. (My ear hurts.)
Öffne den Mund und sag "ah". (Open your mouth and say "ah".)
Ich muss zum Zahnarzt, um meine Zähne überprüfen zu lassen. (I need to go to the dentist to have my teeth checked.)
Die Zunge ist ein wichtiger Teil, um Essen zu schmecken. (The tongue is an important part for tasting food.)
Ich trage einen Schal um den Hals, um mich warm zu halten. (I wear a scarf around my neck to keep warm.)
Hebe die Schultern und zucke mit ihnen. (Raise your shoulders and shrug.)
Mein linker Arm tut nach dem Training weh. (My left arm hurts after the workout.)
Ich habe mir den Ellenbogen am Tisch gestoßen. (I bumped my elbow against the table.)
Wasche dir die Hände, bevor du isst. (Wash your hands before eating.)
#
J'ai mal à la tête. (I have a headache.)
J'aime me peigner les cheveux. (I like to comb my hair.)
Elle a une cicatrice sur le visage. (She has a scar on her face.)
Je m'essuie le front avec une serviette. (I wipe my forehead with a towel.)
Mes yeux sont fatigués après avoir tant lu. (My eyes are tired after reading so much.)
Mon frère a un gros nez. (My brother has a big nose.)
Mon oreille me fait mal. (My ear hurts.)
Ouvre la bouche et dis "ah". (Open your mouth and say "ah".)
J'ai besoin d'aller chez le dentiste pour faire vérifier mes dents. (I need to go to the dentist to have my teeth checked.)
La langue est un organe important pour goûter les aliments. (The tongue is an important organ for tasting food.)
Je mets une écharpe autour du cou pour me tenir chaud. (I put a scarf around my neck to keep warm.)
Lève les épaules et hausse-les. (Raise your shoulders and shrug.)
Mon bras gauche me fait mal après avoir fait de l'exercice. (My left arm hurts after exercising.)
Je me suis cogné le coude contre la table. (I bumped my elbow against the table.)
Lave-toi les mains avant de manger. (Wash your hands before eating.)
#
Ho mal di testa. (I have a headache.)
Mi piace pettinarmi i capelli. (I like to comb my hair.)
Ha una cicatrice sul viso. (He/she has a scar on the face.)
Mi asciugo la fronte con un asciugamano. (I wipe my forehead with a towel.)
I miei occhi sono stanchi dopo aver letto tanto. (My eyes are tired after reading so much.)
Mio fratello ha un naso grande. (My brother has a big nose.)
Mi fa male l'orecchio. (My ear hurts.)
Apri la bocca e di' "ah". (Open your mouth and say "ah".)
Ho bisogno di andare dal dentista per controllare i denti. (I need to go to the dentist to check my teeth.)
La lingua è un organo importante per gustare il cibo. (The tongue is an important organ for tasting food.)
Mi metto una sciarpa intorno al collo per tenermi caldo/a. (I put a scarf around my neck to keep warm.)
Alza le spalle e falle scendere. (Raise your shoulders and let them drop.)
Mi fa male il braccio sinistro dopo l'allenamento. (My left arm hurts after the workout.)
Mi sono sbattuto il gomito contro il tavolo. (I bumped my elbow against the table.)
Lavati le mani prima di mangiare. (Wash your hands before eating.)
#
Estou com dor de cabeça. (I have a headache.)
Gosto de pentear meu cabelo. (I like to comb my hair.)
Ele tem uma cicatriz no rosto. (He has a scar on his face.)
Eu limpo minha testa com uma toalha. (I wipe my forehead with a towel.)
Meus olhos estão cansados depois de ler tanto. (My eyes are tired after reading so much.)
Meu irmão tem um nariz grande. (My brother has a big nose.)
Meu ouvido está doendo. (My ear hurts.)
Abra a boca e diga "ah". (Open your mouth and say "ah".)
Preciso ir ao dentista para verificar meus dentes. (I need to go to the dentist to check my teeth.)
A língua é um órgão importante para saborear os alimentos. (The tongue is an important organ for tasting food.)
Coloco um cachecol ao redor do pescoço para me aquecer. (I put a scarf around my neck to keep warm.)
Levante os ombros e encolha-os. (Raise your shoulders and shrug.)
Meu braço esquerdo dói depois de fazer exercícios. (My left arm hurts after exercising.)
Bati o cotovelo na mesa. (I bumped my elbow against the table.)
Lave as mãos antes de comer. (Wash your hands before eating.)

# combos
De la (Of the)
En el (In the)
A la (To the)
Por el (By the)
Con el (With the)
Para el (For the)
Del mundo (Of the world)
En los (In the)
Por la (By the)
Con la (With the)

En el mundo (In the world)
Por lo tanto (Therefore)
A través de (Through)
En este caso (In this case)
De acuerdo con (According to)
Es importante (It is important)
Al mismo tiempo (At the same time)
Por otro lado (On the other hand)
Con el fin (With the purpose)
En la actualidad (Currently)

En el caso de (In the case of)
De acuerdo con (According to)
En este sentido (In this sense)
En el ámbito (In the field)
En la mayoría (In the majority)
Por otro lado (On the other hand)
A través de (Through)
En relación con (In relation to)
En la actualidad (Currently)
Al mismo tiempo (At the same time)

Aufgrund der Tatsache (Due to the fact)
In Bezug auf (With regard to)
Im Rahmen der (In the context of)
Es ist wichtig (It is important)
Auf der anderen (On the other)
In der Regel (Usually)
Zum Beispiel für (For example, for)
Mit Hilfe von (With the help of)
In diesem Fall (In this case)
In der Nähe von (Nearby)

En el caso de (In the case of)
De acuerdo con (According to)
En este sentido (In this sense)
En relación con (In relation to)
En la mayoría (In the majority)
Por otro lado (On the other hand)
A través de (Through)
En cuanto a (Regarding)
En términos de (In terms of)
En función de (Based on)

Aufgrund der Tatsache (Due to the fact)
In Bezug auf (In reference to)
Im Rahmen der (In the context of)
Es ist wichtig (It is important)
Auf der anderen (On the other)
In der Regel (Usually)
Zum Beispiel für (For example, for)
Mit Hilfe von (With the help of)
In diesem Fall (In this case)
In der Nähe von (Nearby)

Au fil du temps (Over time)
Dans le cadre (In the context)
En ce qui concerne (Regarding)
D'après ce que (According to what)
À travers le monde (Across the world)
Il est important (It is important)
De plus en plus (More and more)
En fonction de (Depending on)
À partir de maintenant (From now on)
Pour la plupart (For the most part)

In base al (Based on the)
Nel corso del (During the course of)
Per quanto riguarda (Regarding)
Al fine di (In order to)
A causa di (Because of)
In modo da (In such a way that)
Da un lato (On one hand)
In generale, il (In general, the)
Per la maggior parte (For the most part)
D'ora in poi (From now on)

De acordo com (According to)
Em relação a (Regarding)
No entanto, é (However, it is)
A partir de (From)
Com o objetivo (With the goal)
Por outro lado (On the other hand)
Ao longo do (Throughout the)
Por meio de (Through)
Em termos de (In terms of)
Em função de (Due to)

de - of
que - what
no - not
a - to
la - the
el - he
es - is
en - in
lo - the
un - a
por - by
qué - what
me - I
una - a
te - tea
se - I know
los - the
con - with
para - for
mi - me
está - this
si - yes
sí - yes
pero - but
las - the
bien - good
yo - me
su - his
eso - that
aquí - here
del - of the
al - to the
como - how
le - you
tu - you
más - plus
todo - all
ya - already
muy - very
esto - this
vamos - Lets go
ha - he has
ahora - now
esta - this
hay - there are
estoy - am
algo - something
tú - you
tengo - I have
así - So
nada - nothing
nos - us
cuando - when
cómo - how
él - he
sé - I know
estás - these
sólo - single
o - or
quiero - I want
este - this
tiene - have
gracias - thanks
he - I
puedo - may l
bueno - good
soy - I am
era - was
ser - to be
vez - time
hacer - do
todos - everybody
ella - she
son - they are
fue - it was
eres - you are
usted - you
tienes - you have
puede - may
señor - Sir
ese - that
voy - I go
quién - who
casa - house
creo - I think
porque - why
tan - so
hola - hello
dónde - where
nunca - never
sus - their
sabes - you know
verdad - true
quieres - you want
mucho - a lot
entonces - so
estaba - I was
tiempo - weather
mí - me
esa - that
mejor - best
hombre - man
hace - does
va - goes
dios - God
también - too
has - you
vida - lifetime
sin - without
están - is it so
ver - watch
sr - Mr
siempre - always
oh - oh
hasta - until
ti - you
ahí - there
siento - sorry
puedes - you may
decir - tell
ni - neither
sobre - on
años - years
tenemos - we have
día - day
noche - night
cosas - stuff
alguien - someone
antes - before
mis - my
ir - go
poco - little bit
otra - other
quiere - wants
solo - alone
nadie - nobody
nosotros - us
padre - father
gente - people
parece - It seems
dinero - money
estar - to be
hecho - done
les - them
mismo - same
sea - be
estamos - we are
mira - look
pasa - pass
trabajo - job
dijo - he said
ellos - they
vas - you go
claro - sure
mañana - tomorrow
han - they have
otro - other
después - then
desde - since
mundo - world
hablar - talk
tal - such
había - there were
sabe - knows
acuerdo - agreement
momento - moment
donde - where
fuera - outside
hijo - son
podría - might
seguro - sure
mujer - woman
amigo - friend
días - days
madre - mother
allí - there
cosa - thing
tus - your
lugar - place
dice - he says
gusta - like
será - will be
gran - great
mierda - shit
tenía - I had
mamá - mom
papá - dad
espera - wait
hoy - today
tener - to have
ven - come
buena - good
estado - state
nuevo - new
luego - then
podemos - we can
dije - said
nuestro - our
sido - been
menos - less
debe - should
tipo - type
buen - good
conmigo - with me
mal - evil
todas - all
nombre - name
haciendo - doing
crees - think
toda - all
amor - love
mío - own
visto - viewed
estas - these
quería - wanted to
tarde - late
importa - matters
parte - part
aún - yet
nuestra - our
tienen - they have
tanto - so much
cada - each
hora - time
veces - times
necesito - needed
contigo - with you
ve - go
haber - to have
buenas - good
dicho - saying
quien - who
hacerlo - do what
demasiado - too
oye - hears
haces - do
hombres - mens
saber - to know
entre - between
adiós - goodbye
problema - trouble
unos - some
vaya - go
hemos - we have
cierto - true
debo - I must
razón - reason
alguna - any
esos - those
pues - well
veo - I see
idea - idea
chica - girl
realmente - Really
policía - policeman
hizo - did
estos - these
amigos - friends
ustedes - your
quizá - maybe
serio - I laughed
cabeza - head
hermano - brother
digo - I say
van - go
pasado - past
salir - get out
cuenta - account
familia - family
cariño - sweetie
vale - okay
algún - some
muchas - many
señora - Ms
somos - we are
pueden - they can
noches - nights
muerto - dead
ud - you
todavía - still
rápido - quick
viejo - old
lado - side
debería - should
ves - you see
sabía - I knew
suerte - luck
cuidado - watch out
buenos - good ones
sería - would
da - gives
mientras - while
miedo - fear
primera - first
contra - against
puerta - door
pronto - soon
e - and
casi - almost
nueva - new
espero - I hope
cualquier - any
esas - those
agua - water
os - you
chico - boy
cuánto - how much
niños - children
venga - come on
camino - road
primero - first
hacia - toward
pensé - I thought
dentro - inside
pasó - he passed
debes - you must
ciudad - city
historia - history
año - year
viene - comes
deja - let
durante - during
forma - shape
volver - return
feliz - happy
ojos - eyes
guerra - war
caso - case
chicos - boys
esposa - wife
adelante - ahead
cuál - which one
mano - hand
hice - I did
vi - saw
gustaría - would like
muerte - death
allá - there
mas - more
loco - crazy
supuesto - supposed
toma - taking
minutos - minutes
haré - I will do
entiendo - I get it
pasar - pass
iba - I was going
corazón - heart
semana - week
jefe - boss
venir - come
manos - hands
ayuda - help
problemas - problems
juntos - together
supongo - I suppose
déjame - let me
importante - important
vete - go away
niño - child
arriba - up
hija - daughter
otros - others
sra - Mrs
personas - people
tierra - land
manera - way
hablando - talking
fin - end
mujeres - women
cara - face
grande - big
ningún - any
nuestros - our
llama - call
hey - hey
habla - speaks
bajo - low
dices - say
poder - power
cuándo - when
quizás - maybe
escucha - listens
persona - person
horas - hours
tío - uncle
aunque - although
io - io
único - only
dijiste - said
siquiera - at least
quieren - they want
ninguna - none
cerca - close
pequeño - little
debemos - we must
cree - cree
dame - give to me
sigue - follow
auto - car
dejar - leave
muchos - Many
igual - same
hago - I make
listo - ready
significa - it means
capitán - captain
clase - class
llegar - to get
suficiente - enough
tomar - drink
vivir - to live
joven - young
trabajar - to work
haya - beech
abajo - down
hubiera - had
primer - first
genial - great
justo - fair
pensar - think
misma - same
puta - bitch
comer - eat
necesita - needs to
conozco - I know
fui - I was
algunos - some
entrar - get in
fuerte - strong
número - number
srta - Ms
morir - to die
basta - enough
dar - give
bastante - quite
amo - love
atrás - behind
dicen - say
difícil - difficult
éste - this
pueda - can
punto - point
vino - wine
hermana - sister
hijos - sons
unas - some
escuela - school
podía - I could
pueblo - village
haga - make
sangre - blood
meses - months
coche - car
juego - game
encontrar - find
realidad - reality
cuerpo - body
mayor - higher
última - last
eran - they were
queda - remains
ok - okay
paz - peace
dime - tell me
vuelta - return
hiciste - did
tenido - had
sola - alone
hacen - make
ido - gone
querida - Dear
iré - I will go
culpa - guilt
malo - bad
chicas - girls
comida - food
dólares - dollars
dr - dr
saben - they know
fácil - easy
alto - high
posible - possible
maldito - damned
dormir - sleep
deberías - you should
maldita - damn
pregunta - question
incluso - even
fiesta - party
tampoco - neither
cama - bed
lejos - far
medio - means, medium
preocupes - worry
ay - Oh
teléfono - phone
diga - tell
ei - ei
trata - about
equipo - team
palabra - word
cuanto - how much
idiota - moron
esté - this
luz - light
tuve - I had
país - country
segundo - second
querido - Dear
diablos - devils
hagas - you do
señorita - miss
oportunidad - opportunity
matar - kill
algunas - some
esperando - waiting
necesitamos - we need
adónde - where
verte - to see you
estará - will be
venido - I come
estabas - you were
fueron - were
tenga - have
cuarto - room
cielo - heaven
vivo - alive
recuerdo - memory
perdón - sorry
falta - lack
pequeña - little
oído - ear
creer - believe
pienso - I think
ésta - this
esperar - wait
necesitas - you need
aqui - here
película - movie
además - further
marido - husband
perro - dog
general - general
calle - Street
exactamente - exactly
rey - king
padres - parents
lista - list
habrá - there will be
habitación - room
pensando - thinking
par - pair
fuego - fire
niña - girl
seguir - follow
música - music
di - gave
habría - there would be
mucha - a lot
paso - He passed
sentido - sense
diré - I will say
podrías - could you
afuera - outside
digas - you say
ia - ia
mía - mine
murió - died
dio - it gave
café - coffee
entiendes - you understand
nuestras - our
piensa - think
ello - it
lleva - carries
estuvo - he was
último - latest
diciendo - saying
grandes - big
sitio - site
libro - book
buscando - searching
bebé - baby
cállate - shut up
vuelve - returns
jamás - Never
minuto - minute
arma - weapon
viaje - travel
única - only
muchachos - boys
perdido - lost
jugar - to play
vemos - we see
dado - dice
sabemos - we know
demás - the rest
gusto - taste
peor - worst
irme - leave
estaban - they were
orden - order
pasando - going
cambio - change
extraño - strange
pobre - poor
ropa - clothing
queremos - we want
oficina - office
sino - if not
modo - mode
ocurre - occurs
muchacho - boy
otras - other
hará - will
libre - free
conoces - know
piensas - think
presidente - president
especial - special
anoche - last night
millones - millions
acerca - about
derecho - law
negro - black
acá - here
caballeros - gentlemen
semanas - weeks
palabras - words
buscar - search for
segura - safe
correcto - right
frente - front
hacemos - we make
seas - be
detrás - behind
puesto - market stall
asunto - affair
duro - lasted
sucede - happens
llamar - to call
disculpe - sorry
boca - mouth
atención - attention
mire - look
armas - weapons
encima - over
demonios - got damn
mala - bad
llevar - wear
cual - which one
odio - hate
deben - should
sueño - dream
quieras - want
resto - rest
llamo - I call
perder - to lose
llamado - called
perfecto - perfect
estaré - I will be
tranquilo - quiet
seguridad - security
ayudar - help
tuvo - he had
largo - long
pena - pain
probablemente - probably
ayer - yesterday
dile - tell him
prueba - proof
siendo - being
bonito - beautiful
recuerdas - remember
haz - make
real - real
veras - youll see
increíble - amazing
quisiera - I would like
tonto - fool
simplemente - simply
vámonos - Lets go
haría - would do
preguntas - questions
aire - air
conoce - known
fuerza - strength
carta - letter
trato - treatment
plan - plan
ése - that
verlo - see him
hambre - hungry
vuelto - turned
empezar - start
campo - countryside
acaba - just
hablas - speak
vive - lives
barco - ship
poner - set
grupo - group
creí - thought
sol - Sun
tuyo - of yours
pase - pass
joe - joe
voz - voice
baño - bathroom
usar - use
conseguir - get
placer - pleasure
llegado - arrived
decirte - tell you
profesor - Teacher
noticias - news
lamento - lament
decirle - tell
blanco - white
quédate - stay
estuve - I was
pie - foot
anda - anda
espere - wait
edad - age
secreto - secret
podríamos - we could
compañía - company
tren - train
recuerda - remember
tras - after
siéntate - sit down
prisa - rush
vista - view
hermosa - beautiful
negocio - deal
deberíamos - we should
gustan - like
pagar - pay
george - george
futuro - future
silencio - silence
siente - feels
médico - doctor
maestro - teacher
quiera - want
llegó - I arrive
loca - crazy
cambiar - change
frank - frank
sal - salt
control - control
raro - rare
viste - dresses
novia - girlfriend
diferente - different
imposible - impossible
amiga - friend
enseguida - right away
llamada - call
dan - give
dejó - left
mes - month
llevo - I wear
avión - plane
pelo - hair
the - the
haremos - will
tendrá - will have
propia - own
siguiente - following
ganar - win
ley - law
dolor - pain
oro - gold
acabó - finished
maldición - damn
oficial - official
situación - situation
daño - hurt
sientes - you feel
entendido - it is understood
deseo - wish
mente - mind
ejército - army
comprar - to buy
muertos - dead
pensaba - thought
darle - give him
estúpido - stupid
decía - He said
acabo - finished
suena - it sounds
mitad - half
caballo - horse
asesino - assassin
vio - he saw
permiso - excuse me
ellas - they
trabajando - working
maravilloso - wonderful
mesa - table
divertido - funny
mejores - top
próxima - next
entra - enters
tom - tom
mar - sea
hacía - toward
sexo - sex
encanta - love
amable - nice
mensaje - message
información - information
traje - suit
alma - soul
encontrado - found
coronel - colonel
dale - go ahead
san - saint
cena - dinner
encontré - I found
charlie - charlie
tendrás - you will have
eras - ages
propio - own
culo - ass
asi - so
adentro - indoors
canción - song
gobierno - government
temo - fear
abre - opens
dijeron - they said
fuiste - you were
media - half
das - you give
estábamos - we were
estaría - It would
daré - I will give
vosotros - you
frío - cold
foto - photo
accidente - accident
derecha - right
funciona - works
vayas - go
centro - center
necesario - necessary
miren - look
bonita - pretty
ante - before
terrible - terrible
pude - I could
teniente - lieutenant
luna - moon
izquierda - left
uds - You
doy - I give
servicio - service
llamas - calls
normal - normal
junto - together
tienda - store
navidad - Christmas
dirección - direction
abuela - grandmother
alrededor - around
vine - came
tendré - I will have
libertad - freedom
sale - comes out
línea - line
abogado - attorney
pies - feet
honor - honor
tratando - trying
regresar - to return
hablo - I speak
vieja - old woman
papel - paper
terminado - finished
dejado - left
juro - I swear
hermoso - beautiful
dulce - candy
sentir - feel
principio - beginning
interesante - interesting
caja - box
cualquiera - anyone
horrible - horrible
respuesta - answer
perra - female dog
gracioso - funny
trae - brings
personal - personal
mató - he killed
completamente - completely
paul - paul
vienen - they come
sean - are
llega - arrives
abuelo - grandfather
tengas - you have
linda - cute
tendremos - we will have
partes - parts
cárcel - jail
hubo - there was
sistema - system
lindo - cute
director - director
hazlo - do it
hicieron - they made
tía - aunt
busca - search
don - Don
baja - low
pudo - could
salud - health
listos - ready
cita - appointment
tenías - had
negocios - business
tipos - types
cámara - camera
agente - agent
verás - youll see
infierno - hell
regalo - present
río - river
través - through
carne - meat
totalmente - totally
decirme - tell me
piso - floor
esposo - husband
oír - hear
harry - harry
sargento - sergeant
deje - leave
tuya - yours
ambos - both of them
beber - to drink
calma - calm
vestido - dress
salvo - except
ésa - that
verdadero - true
basura - garbage
suelo - floor
carrera - career
cumpleaños - birthday
rato - little while
iremos - we ll go
universidad - college
bailar - dance
triste - sad
iglesia - church
delante - in front of
nena - baby
banco - bank
cuántos - how many
encuentra - find
supone - supposed
existe - exists
programa - program
alegro - glad
santo - holy
porqué - why
novio - boyfriend
broma - joke
diría - would say
salió - he left
jesús - Jesus
prometo - I promise
partido - match
pregunto - I ask
radio - radio
vuelva - return
cenar - dinner
ocurrió - occurred
creía - thought
corre - run
disculpa - excuse
vienes - you come
cerveza - beer
muerta - dead
pensado - thought-out
destino - destination
bob - bob
matrimonio - marriage
fotos - photos
diablo - devil
volveré - I will be back
saberlo - I know
cielos - heavens
norte - north
sala - room
órdenes - orders
según - according
harás - you will do
ataque - attack
parís - Paris
ejemplo - example
sorpresa - surprise
té - tea
pudiera - could
baile - dance
temprano - early
público - public
tí - you
oí - heard
mirando - looking
ventana - window
conocido - known
duda - doubt
boda - wedding
peligro - danger
trabaja - working
quise - I wanted
querías - wanted
caliente - hot
escribir - to write
reina - queen
esperaba - I expected
embargo - embargo
sur - south
enfermo - sick
excelente - excellent
pone - places
escena - scene
encuentro - meeting
asesinato - murder
mike - mike
obra - work
veré - I will see
llamó - I call
aquel - that
terminar - finish
ganas - forward
conocer - know
pruebas - tests
señores - Sirs
vos - you
escúchame - listen to me
veamos - lets see
creen - believe
aun - yet
ninguno - none
parecía - looked like
mary - mary
viva - live
apenas - barely
segunda - second
bill - bill
llave - key
regreso - return
trasero - rear
ojalá - hopefully
veremos - we will see
simple - simple
seré - I will be
irse - leave
cartas - letters
libros - books
apuesto - handsome
leer - read
imbécil - fool
opinión - opinion
cambiado - changed
sucedió - it happened
señal - signal
habían - they had
agradable - nice
cocina - kitchen
relación - relationship
sueños - dreams
segundos - seconds
corte - cut
escuchar - hear
cerebro - brain
locura - madness
peligroso - dangerous
hermanos - siblings
entender - understand
cine - movie theater
dejes - leave
reunión - meeting
tendría - would have
verla - see it
duele - it hurt
hicimos - we did
tocar - play
mirar - look at
verme - see me
ben - ben
suyo - yours
causa - cause
pelea - fight
prisión - prison
jim - jim
mayoría - most
fondo - background
acaso - perhaps
vuelvo - I come back
serán - will be
montón - heap
toca - plays
comandante - commander
tome - take
éxito - success
misión - mission
vidas - lifes
decisión - decision
hogar - home
rico - rich
trago - drink
capaz - able
cargo - position
unidos - united
lleno - full
bar - pub
estrella - star
posición - position
estación - station
interesa - interested
edificio - building
vayan - go
consejo - advice
pistola - gun
humano - human
irnos - leave
fantástico - fantastic
ojo - eye
jóvenes - young boys
zapatos - shoes
majestad - majesty
lee - read
flores - flowers
ocupado - occupied
bienvenido - welcome
zona - zone
contacto - Contact
sacar - take
podrían - could
jimmy - jimmy
tema - theme
matado - killed
soldado - soldier
sabías - You know
pido - I ask
cierra - closes
peter - peter
intento - tried
irá - go to
calor - hot
finalmente - finally
equivocado - wrong
animales - animals
departamento - department
enemigo - enemy
caballero - gentleman
color - colour
necesitan - need
empieza - starts
soldados - soldiers
vea - see
entiende - understands
valor - value
azul - blue
miles - thousands
espacio - space
estarás - you will
mantener - keep
aprender - to learn
inteligente - intelligent
serás - you will
arte - art
respeto - respect
pedir - ask
puso - put
llaman - call
oiga - Listen
juez - judge
inglés - English
precio - price
rojo - red
formas - shapes
hagan - make
verano - summer
podido - I have
piernas - legs
isla - island
darme - give me
damas - ladies
guardia - guard
espalda - back
vengan - come
parar - stop
llevas - take
banda - band
quedarme - stay
habéis - have
marcha - March
luces - lights
estuviera - was
crimen - crime
dejo - left
ayudarte - help you
esperen - expect
teníamos - we had
diferencia - difference
llamaré - I will call
ama - love
conocí - I met
tiempos - time
déjalo - leave it alone
debajo - under
compañero - partner
dejé - leave
come - eat
déjeme - let me
molesta - upset
contar - tell
dejaré - I ll leave
hablamos - we speak
cansado - tired
ganado - won
pareces - look
juicio - judgment
hablado - spoken
estilo - style
ayúdame - Help me
sepa - know
viendo - seeing
salida - departure
alegra - happy
despierta - awake
estupendo - great
darte - to give you
estados - state
quedan - are
próximo - next
nota - note
llevó - I wear
puedas - can
podrá - you can
james - James
nave - ship
base - base
tenían - They had
sube - goes up
vuelo - flight
excepto - except
golpe - knock
viento - wind
estaremos - we will be
acción - action
tonterías - silly stuff
respecto - respect
desea - you want
sigues - are you still
debía - should
vendrá - will come
encontramos - we find
beso - kiss
cuestión - question
volvió - went back
reglas - rules
ruido - noise
acabado - finish
salga - out
olvidado - forgotten
mentira - lie
brazo - arm
empezó - it started
cálmate - take it easy
caballos - horses
experiencia - experience
tranquila - quiet
quedar - stay
esperanza - hope
irte - leave
vd - you
perros - dogs
casado - married
llegue - I arrived
drogas - drugs
pidió - he asked
espíritu - spirit
vacaciones - holidays
copa - cup
investigación - investigation
prefiero - I prefer
solía - used to
llevaré - I'll take
menudo - often
partir - from
visita - visit
alta - high
abrir - open
bomba - bomb
energía - energy
bolsa - bag
hacerte - make
santa - St.
pan - bread
piel - skin
usa - uses
metros - meters
perdona - forgives
escrito - written
exacto - exact
jugando - playing
cuello - neck
larga - long
escapar - escape
salvar - save
escuche - I listened
perdone - forgive
sirve - it serves
preocupe - worry
especie - species
aquella - that
verá - you will see
brazos - arms
llena - full
subir - rise
blanca - white
fe - faith
steve - steve
modos - modes
traído - brought
películas - films
dama - Lady
suya - hers
decirlo - I say
doble - double
inmediatamente - immediately
culpable - guilty
preocupa - worries
tardes - afternoons
vengo - I come
bosque - forest
perdí - I missed
max - max
volverá - to return to
taxi - cab
volar - fly
debido - due
repente - suddenly
bromeando - joking
ios - ios
viejos - old
planeta - planet
leche - milk
tanta - so much
tuviera - had
encantado - charmed
cabrón - dumbass
correr - run
depende - It depends
eddie - eddie
común - common
informe - report
billy - billy
solamente - only
máquina - machine
muere - go dead
principal - principal
ridículo - ridiculous
entrada - entry
encontró - he found
podamos - we can
acabar - finish
américa - America
regresa - came back
probar - try out
príncipe - the prince
preparado - prepared
pedido - order
propósito - purpose
dieron - they gave
salido - stepped out
cliente - client
árbol - tree
absoluto - absolute
dejas - you let
quiénes - who
habías - had
parecen - they look like
belleza - beauty
llame - I called
intenta - try
humanos - humans
tratar - try
vuestra - your
hayas - have
princesa - princess
sigo - I follow
quedarse - stay
oeste - west
traer - bring
olvídalo - forget this
francia - France
tuvimos - we had
ayudarme - help me
deprisa - quickly
llaves - keys
tiro - threw
cerdo - pork
gato - cat
inglaterra - England
vistazo - glance
cuántas - how many
defensa - defending
nuevos - new
últimos - latest
reloj - watch
fuimos - we went
batalla - battle
hable - I talked
caminar - walk
hacerle - make
vayamos - we go
interior - inside
bella - beautiful
felices - happy
intentando - trying
apartamento - apartment
teatro - theater
hacerme - me
papi - daddy
asuntos - issues
confiar - trust
hielo - ice
detective - detective
deberían - should
cantar - sing
bajar - go down
vuestro - your
pelear - fight
locos - locos
paga - pay
oyes - hear
completo - full
lucha - fight
fuerzas - forces
ideas - Ideas
borracho - drunk
héroe - hero
camión - truck
cabo - cape
dientes - teeth
verde - green
despacio - slowly
decidido - decided
sociedad - society
pareja - partner
dígame - tell me
estuviste - you were
nariz - nose
vergüenza - shame
caer - fall out
herido - injured
cuentas - accounts
pista - track
siéntese - sit down
bebe - baby
sonido - sound
estrellas - stars
sombrero - hat
cayó - it fell
evitar - avoid
pasará - it will happen
memoria - memory
solos - alone
llorar - cry
nervioso - nervous
lástima - pity
haberlo - I have
época - epoch
naturaleza - nature
vender - to sell
política - politics
levántate - get up
estudio - study
brillante - sparkly
nivel - level
diferentes - different
dando - giving
hubiese - had
permite - It allows
justicia - justice
planes - plans
mírame - look at me
llegamos - we arrived
roma - Rome
seguramente - surely
papa - dad
parecer - seem
terminó - finished
pierna - leg
quienes - who
ray - ray
millón - million
enorme - huge
charles - charles
inocente - innocent
mismos - same
pantalones - pants
ministro - minister
bienvenida - welcome
u - or
refiero - I mean
nombres - names
mando - I send
ponte - put
preciosa - precious
quedó - it was
podrás - you can
pesar - to weigh
animal - animal
enferma - sick
extraña - strange
enamorado - in love
autobús - bus
recordar - remember
estáis - you are
pequeños - little ones
luchar - to struggle
date - date
contrario - contrary
tomado - taken
sois - you are
movimiento - movement
estan - is it so
sentado - seated
gana - desire
estén - are
motivo - reason
absolutamente - absolutely
dé - of
puente - bridge
comprendo - I understand
huevos - eggs
tomó - I take
cuento - story
botella - bottle
cuesta - cost
detente - stop
corriendo - running
confianza - trust
felicidad - happiness
espada - sword
silla - chair
bobby - bobby
noticia - news
casas - houses
acuerdas - remember
necesitaba - needed
pared - wall
aquellos - those
prensa - press
trampa - trap
presente - present
estarán - will be
jardín - yard
cabello - hair
espectáculo - show
podré - I will be able
grave - serious
bastardo - bastard
dará - give to
siga - follow
periódico - newspaper
coño - cone
danny - danny
negros - black
alguno - any
anillo - ring
monstruo - monster
total - total
tommy - tommy
piedra - stone
contento - happy
quedarte - stay
tengan - have
oigan - hear
sentí - felt
debí - should
ahi - there
policías - police
lugares - places
contrato - contract
playa - beach
costa - coast
puertas - doors
asiento - seat
tarjeta - card
restaurante - restaurant
quede - stay
paseo - walk
hechos - acts
hagamos - lets do
maravillosa - wonderful
pon - put
inspector - inspector
especialmente - especially
velocidad - speed
negra - black
intentar - try
proyecto - draft
clientes - customers
victoria - victory
encantaría - love
operación - operation
perdió - lost
tonta - dumb
imagen - image
lleve - I carried
amas - love
responsable - responsable
gustaba - He liked
aspecto - appearance
tantos - many
sentimientos - feelings
creerlo - I believe it
objetivo - objective
llevan - they carry
malas - bad
red - net
dejen - leave
nuevas - news
muchacha - girl
dormido - asleep
and - and
historias - stories
arreglar - fix
turno - turn
yendo - going
tuviste - You saw
ponga - put
olvides - forget
escuché - I listened
pasada - pass
mata - bush
tantas - many
montaña - Montana
gracia - grace
enfermedad - disease
dedos - fingers
guapa - beautiful
querer - want
ocurrido - happened
pocos - few
deber - must
refieres - mean
preocupado - worried
clases - lessons
rayos - ray
inútil - useless
washington - Washington
abierto - open
haberte - sorry
oscuridad - darkness
verdadera - real
americano - American
trajo - brought
gustó - taste
primo - cousin
nacional - national
supe - I knew
colegio - school
malditos - accursed
cuchillo - knife
ibas - going
llegué - I arrived
sir - sir
diario - diary
francés - French
quedo - I remain
podremos - we will can
orgulloso - proud
ladrón - thief
preguntar - ask
pedí - I asked
central - central
voluntad - will
harán - will
militar - military
agradezco - I appreciate
llevaba - he wore
mami - mommy
lluvia - rain
éramos - we were
natural - natural
calles - streets
lengua - language
china - China
testigo - witness
ayude - help
quiso - he wanted
cansada - tired
puse - I put
irás - you will go
alemanes - German
pago - payment
mirada - look
momentos - moments
quieto - still
sentía - felt
escuchen - listen
descansar - rest
mercado - market
dura - hard
humana - human
estúpida - stupid
humor - humor
bienvenidos - welcome
conocía - he knew
entero - whole
roja - red
llamaba - he called
tomas - shots
dueño - owner
echar - throw
emergencia - emergency
roto - broken
actuar - act
mark - mark
inmediato - righ now
puntos - points
paciente - patient
olvidé - forgot
hables - talk
varios - various
polvo - dust
ángeles - angels
coger - take
distancia - distance
europa - Europe
mataron - they killed
tomando - taking
verle - see
señoría - lordship
casarse - get marry
toque - I touched
toques - touches
ángel - angel
amante - lover
habló - I speak
saca - pulls out
digamos - let's say
perfecta - perfect
rosa - rose
llámame - giving me a call
nosotras - we
peso - weight
carga - load
acto - act
robar - steal
dejaste - you left
desastre - disaster
bote - boat
huele - smells
embarazada - pregnant
muestra - sample
gordo - fat
sheriff - sheriff
viviendo - living
cerrar - to close
papeles - papers
valiente - brave
gloria - glory
aceptar - to accept
perdóname - excuse me
perfectamente - perfectly
oscuro - dark
cuidar - look after
dedo - finger
ruego - I beg
pareció - it seemed
tumba - tomb
coge - picks
resulta - result
dejarlo - leave
comenzar - start
área - area
metido - I got
limpio - cleansed
descanso - break
lados - sides
posibilidad - possibility
jerry - jerry
guapo - handsome
uso - use
talento - talent
matarme - kill me
continuar - continue
código - code
comenzó - started
duerme - sleeps
definitivamente - definitely
directo - direct
vuelvas - return
dia - day
demonio - demon
parque - park
cambia - change
olvidar - to forget
cinta - headband
famoso - famous
mataré - I will kill
siguen - follow
saliendo - coming out
muevas - move
señoras - ladies
disparar - shoot
sóio - only
pide - requests
debió - he must have
empresa - company
precioso - beautiful
termina - ends
intención - intention
tambien - too
recibir - to receive
hubieras - had
abrigo - coat
encuentras - you find
diste - you gave
tendrán - will
cerrado - closed
conocerte - meet
hablé - I talked
menor - less
querría - I would want
imagino - I imagine
genio - genius
profesional - professional
oigo - hear
pongo - I put
niñas - girls
muévete - move on
opción - option
tribunal - court
tenéis - you have
lago - lake
unidad - unit
abierta - open
efecto - effect
presión - pressure
varias - several
robo - stole
saldrá - will
veía - he looked
quedado - left
alcalde - mayor
empleo - job
pollo - chicken
whisky - whiskey
california - California
carretera - highway
aeropuerto - airport
pobres - poor
medicina - medicine
llevará - carry
gratis - free
cae - falls off
fortuna - fortune
castillo - castle
nieve - snow
busco - I search
riesgo - risk
alemán - German
sucio - dirty
idiotas - idiots
conversación - conversation
fuese - it was
comienzo - start
pasé - pass
encontraron - they found
elección - choice
salgan - leave
carro - car
piensan - they think
rostro - face
razones - reasons
fué - it was
propiedad - property
mundial - world
familiar - family
libras - pounds
hablemos - let's talk
pedazo - piece
continúa - keep going
cola - tail
enemigos - enemies
marca - brand
líder - leader
hablan - speak
durmiendo - sleeping
socorro - help
fútbol - football
detalles - details
hiciera - do
recibido - received
tesoro - treasure
camisa - shirt
comienza - begins
conducir - drive
andar - walk

lunes - Monday
martes - Tuesday
miércoles - Wednesday
jueves - Thursday
viernes - Friday
sábado - Saturday
domingo - Sunday

uno - one
dos - two
tres - three
cuatro - four
cinco - five
seis - six
siete - seven
ocho - eight
nueve - nine
diez - ten






once - 11
doce - 12
trece - 13
catorce - 14
quince - 15

dieciséis - 16
diecisiete - 17
dieciocho - 18
diecinueve - 19
 - 
 - 


veinte - 20
veintiuno - 21
veintidós - 22
veintitrés - 23
veinticuatro - 24
veinticinco - 25
veintiséis - 26
veintisiete - 27
veintiocho - 28
veintinueve - 29

treinta - 30
treinta y uno - 31

cuarenta - 40
cincuenta - 50
sesenta - 60
setenta - 70
ochenta - 80
noventa - 90

cien - one hundred

doscientos - 200
doscientos veintidós - 222

trescientos - 300
trescientos treinta y tres - 333

cuatrocientos - 400
cuatrocientos cuarenta y cuatro - 444

quinientos - 500
quinientos cincuenta y cinco - 555

seiscientos - 600
seiscientos sesenta y seis - 666

setecientos - 700
setecientos setenta y siete - 777

ochocientos - 800
ochocientos ochenta y ocho - 888

novecientos - 900
novecientos noventa y nueve - 999

mil - thousand

mil novecientos sesenta - 1960
mil novecientos sesenta y uno - 1961
mil novecientos sesenta y dos - 1962
mil novecientos sesenta y tres - 1963
mil novecientos sesenta y cuatro - 1964
mil novecientos sesenta y cinco - 1965
mil novecientos sesenta y seis - 1966
mil novecientos sesenta y siete - 1967
mil novecientos sesenta y ocho - 1968
mil novecientos sesenta y nueve - 1969

mil novecientos setenta - 1970
mil novecientos setenta y uno - 1971
mil novecientos setenta y dos - 1972
mil novecientos setenta y tres - 1973
mil novecientos setenta y cuatro - 1974
mil novecientos setenta y cinco - 1975
mil novecientos setenta y seis - 1976
mil novecientos setenta y siete - 1977
mil novecientos setenta y ocho - 1978
mil novecientos setenta y nueve - 1979

mil novecientos ochenta - 1980
mil novecientos ochenta y uno - 1981
mil novecientos ochenta y dos - 1982
mil novecientos ochenta y tres - 1983
mil novecientos ochenta y cuatro - 1984
mil novecientos ochenta y cinco - 1985
mil novecientos ochenta y seis - 1986
mil novecientos ochenta y siete - 1987
mil novecientos ochenta y ocho - 1988
mil novecientos ochenta y nueve - 1989

mil novecientos noventa - 1990
mil novecientos noventa y uno - 1991
mil novecientos noventa y dos - 1992
mil novecientos noventa y tres - 1993
mil novecientos noventa y cuatro - 1994
mil novecientos noventa y cinco - 1995
mil novecientos noventa y seis - 1996
mil novecientos noventa y siete - 1997
mil novecientos noventa y ocho - 1998
mil novecientos noventa y nueve - 1999

dos mil - 2000
dos mil uno - 2001
dos mil dos - 2002
dos mil tres - 2003
dos mil cuatro - 2004
dos mil cinco - 2005
dos mil seis - 2006
dos mil siete - 2007
dos mil ocho - 2008
dos mil nueve - 2009

dos mil diez - 2010
dos mil once - 2011
dos mil doce - 2012
dos mil trece - 2013
dos mil catorce - 2014
dos mil quince - 2015
dos mil dieciséis - 2016
dos mil diecisiete - 2017
dos mil dieciocho - 2018
dos mil diecinueve - 2019

dos mil veinte - 2020
dos mil veintiuno - 2021
dos mil veintidós - 2022
dos mil veintitrés - 2023
dos mil veinticuatro - 2024
dos mil veinticinco - 2025
dos mil veintiséis - 2026
dos mil veintisiete - 2027
dos mil veintiocho - 2028
dos mil veintinueve - 2029

dos mil treinta - 2030
dos mil treinta y uno - 2031
dos mil treinta y dos - 2032

dos mil cuarenta - 2040
dos mil cincuenta - 2050
dos mil sesenta - 2060
dos mil setenta - 2070
dos mil ochenta - 2080
dos mil noventa - 2090
dos mil cien - 2100
dos mil ciento veinte - 2120

temer - to fear
alcanzar - reach



vale - okay
bueno - okay
bien - okay
de acuerdo - okay
tal vez - maybe
quizás - maybe
quizá - maybe
por supuesto - of course
ciertamente - of course
por cierto - of course
claro - of course
desde luego - of course
¿cómo no? - of course
encantado - nice to meet you
es un placer - nice to meet you
mucho gusto - nice to meet you
guay - cool
chévere - cool
suave - cool
genial - cool
bello - beautiful
guapo - beautiful
precioso - beautiful
bonito - beautiful
lindo - beautiful
maravilloso - beautiful
diferente - different
distinto - different
amable - kind
agradable - kind
simpático - kind
cariñoso - kind
bueno - kind
desagradable - unpleasant
antipático - unpleasant
duro - difficult
difícil - difficult
grande - large
gran - large
fuerte - large
pequeño - small
minúsculo - small
diminuto - small
chico - small
ahora - now
actualmente - now
hoy día - now
al presente - now
lengua - language
idioma - language
estudiante - student
alumno - student
trabajo - job
empleo - job
tarea - job
oficina - office
despacho - office
ropa - clothes
vestido - clothes
gafas - glasses
anteojos - glasses
lentes - glasses
mandar - to send
enviar - to send
caminar - to walk
andar - to walk
pasear - to walk
recorrer - to walk
marchar - to walk
elegir - to choose
escoger - to choose
seleccionar - to choose
decir - to say
afirmar - to say
expresar - to say
ver - to watch/to see
mirar - to watch/to see
observar - to watch/to see
contemplar - to watch/to see


casa : morada, vivienda, hogar, domicilio, residencia, mansión, habitación, palacio, estancia, paradero, señas, dirección, edificio, inmueble, obra, edificación, construcción, refugio, nido, cobijo, techo, albergue, alojamiento, posada, piso, apartamento, departamento, despacho,  firma, empresa, sociedad, compañía, asociación, comercio, corporación, entidad, consorcio, razón social,  prosapia, cepa, sangre, abolengo, blasón, linaje, casta, familia, raza, estirpe, progenie, descendencia,  quinta, cortijo, finca, alquería, casería, palacete, villa, caserón,
bueno : humano, caritativo, compasivo, piadoso, bienhechor, misericordioso, clemente, sensible, desprendido, generoso, sacrificado, benévolo, benigno, bondadoso, indulgente, comprensivo, virtuoso, honesto,  afable, servicial, agradable, afectuoso, divertido, cordial, tierno,  cándido, simple, bonachón, inocente, crédulo, buenazo, provechoso, ventajoso, beneficioso, valioso, fructuoso, productivo, adecuado, conveniente, utilizable, servible, favorable, propicio,  justo, estricto, exacto, riguroso,  sano, saludable, benéfico, robusto,  excelente, óptimo, grande, elevado, distinguido, escogido,  bastante, suficiente, basta, hábil ,
mal: enfermedad, dolencia, indisposición, achaque, morbo, trastorno, desarreglo, complicación, dificultad.  ofensa, ignominia, infamia, inconveniencia, maldición, traición, ganga, bajeza, vileza, indignidad, mezquindad, jugada, faena, vicio, depravación, inmoralidad, deshonestidad, maldad, iniquidad, perversidad, malignidad, crueldad, ferocidad, abuso, injusticia, delito.  desgracia, molestia, adversidad, desventura, contrariedad, fatalidad, dolor, pena, aflicción, tristeza, desolación, amargura, padecimiento, sufrimiento, malestar, tormento.  calamidad, pérdida, ruina, destrucción, catástrofe, desastre, estrago, plaga, peste, daño, perjuicio, deterioro, menoscabo, detrimento, desventaja, imperfección, lacra, tara
muy : estrechamente, tremendamente, terriblemente, exageradamente, desmesuradamente, inmensamente, grandemente, enormemente, considerablemente, extraordinariamente
hacer (do) : crear, formar, inventar, forjar, concebir, descubrir, innovar, imaginar, urdir, elaborar, fabricar, confeccionar, manufacturar, armar, producir, engendrar, causar, originar, ocasionar, criar.  obrar, trabajar, practicar, proceder, ejercer, actuar, intervenir, desempeñar.  realizar, efectuar, ejecutar, cumplir, verificar, acabar, concluir, plasmar, perpetrar, caber, consumar, cometer, ultimar, recrear, materializar.  construir, establecer, fundar, organizar, preparar, combinar, amasar, determinar, componer, arreglar, aderezar.  representar, corresponder, fingir, afectar, simular, aparentar, imitar.  reparar, rehacer, mejorar, ganar, perfeccionar
va/ir (to go) : marcha, camina, parte, corre, anda, pasea, cambia, visita, recorre, viaja, pasa, emigra, dirige, traslada, desplaza, mueve, marcha, encamina.  asiste, acude, concurre, comparece, sigue, llega, presenta, aparece, sale, entra, sube.  conduce, guía, transporta, remueve.  obra, procede, baja, cae, estira, alarga
tener (have) : poseer, haber, apalear, asumir, disfrutar, gozar, beneficiarse, obtener, adquirir.  mantener, conservar, sostener, abrigar, acariciar, atesorar, alimentar, guardar, esconder, hospedar.  detener, parar, retener, frenar, contener, refrenar, dominar, sujetar.  incluir, comprender, abarcar, entender, encerrar.  coger, agarrar, tomar, asir.  aguantar, seguir, resistir, sufrir, padecer, adolecer.  disponer, ofrecer, presentar, ostentar.  juzgar, considerar, profesar, apreciar, estimar, valuar, evaluar, cumplir, realizar, compartir, participar.  precisar, necesitar, obligarse, comprometerse, sentir, experimentar
tiempo : cosecha, estación, época, turno.  lapso, período, espacio, duración, curso, ciclo, lugar, vez, proceso, etapa, fase, grado, era, temporada, trecho, tirada, momento, instante, minuto, hora, segundo, rato.  fecha, sazón, plazo, día, término, prórroga, retardo, vencimiento, dilación, mora.  ocasión, oportunidad, coyuntura, pie, circunstancia, actualidad, conveniencia, suceso, ocurrencia, caso.  transcurso, intervalo, periodo, tregua, brevedad, precisión.  edad, siglo, reinado, longevidad, asentada, sentada, años, primaveras.  temperatura, ambiente, cielo, clima, intemperie, meteorología, elementos.  movimiento, paso, ejercicio.  ritmo, proporción, compás.  parte, división, fracción
es/ser: existe, está, ha, halla, florece, coexiste, yace, concurre, preexiste, reside, consiste, vive, subsiste, queda, permanece, dura, mantiene, conserva.  sucede, acontece, acaece, ocurre, transcurre.  pertenece, toca, corresponde, depende, atañe, conviene.  sirve, aprovecha, vale, cuesta.  anda, actúa, obra
ayuda : auxilio, favor, socorro, asistencia, refuerzo, apoyo, beneficio, servicio, caridad, limosna, donativo, paliativo, subvención, sufragio, contribución, subsidio, prestación, donación, amparo, protección, defensa, patrocinio, refugio.  cooperación, colaboración, reciprocidad, mediación, concomitancia, concurso, concurrencia, alianza, asociación
rico : opulento, acaudalado, pudiente, poderoso, acomodado, desahogado, holgado, sobrado, harto, propietario, capitalista, rentista, mecenas, burgués, millonario, potentado, magnate, personaje, ricacho. sabroso, gustoso, apetitoso, exquisito, delicioso, suculento, delicado, sazonado, condimentado, agradable, simpático, dulce.  valioso, fructuoso, fructífero, bueno, abundante, copioso, cuantioso, exuberante, pingüe, feraz, fértil, fecundo.  próspero, floreciente, florido, adelantado, progresivo.  magnífico, espléndido, excelente, fastuoso, lujoso.  costoso, caro, querido
pueblo : población, villa, poblado, aldea, lugar, caserío, municipio, parroquia, partido, cortijo, puebla.  nación, país, patria, estado, reino, terruño, suelo.  público, gente, plebe, masa, vulgo, proletariado, estado llano, gente de la calle, hombre de la calle.  raza, casta, linaje, familia, tribu, clan, ascendientes.  pobladores, ciudadanos, nativos, súbditos, gentes, habitantes, vecinos, vecindario
vender: cede, traspasa, transfiere, salta, entrega, ofrece, adjudica, suministra, provee.  despacha, comercia, negocia, exporta, importa, trajina.  salda, liquida, realiza.  revende, expende, regatea, pregona.  traiciona, delata, denuncia, engaña, descubre.  enajena, aliena, expropia, feria, mercadea, desprende, quita, disponer de, deshacerse de.  mercantiliza, comercia, mercadea, distribuye, merca, comercializa, trata, intercambia, permuta, trueca, negocia, tranza
poco : brizna, átomo, miga, pizca, partícula, punta, tilde, grano, algo, adarme, nonada, pellizco, puñado, miseria.  asomo, atisbo, nada, ribetes, tanto, brote.  escaso, insuficiente, exiguo, corto, irrisorio, parvo, ridículo, raro, disminuido, menguado, falto, incompleto, pobre, truncado, limitado, reducido, estrecho, justo, relativo, pequeño, mínimo, diminuto, chico, minúsculo, insignificante.  tasado, módico, contado, ralo, roído, mediano.  parco, templado, sobrio, moderado
caro : costoso, dispendioso, subido, alto, gravoso, elevado, oneroso, lujoso, alzado, encarecido, sobrecargado, aumentado, prohibitivo.  amado, idolatrado, dilecto, adorado, entrañable, querido, apreciado, estimado, preciado, bienquisto.  exorbitante, abusivo, inmoderado, excesivo, exagerado.  precioso, valioso, inapreciable, incalculable.  penoso, dificultoso, difícil
mucho : cantidad, profusión, abundancia, copia, saciedad, exuberancia, riqueza, raudal, plétora, fertilidad, exceso, demasía, montón, cúmulo, afluencia, aglomeración, acumulación.  numeroso, cuantioso, considerable, incontable, grande, profuso, innúmero, inconmensurable, superabundante, dilatado, nutrido, inmenso, inagotable, importante, abundante, copioso, pingüe.  exagerado, excesivo, extremado
hablar: converso, departo, platico, conferencio, dialogo, discuto, entrevisto, parlamento, charlo, parloteo, rajo, enhebro, ensarto, predico, arengo, diserto, declamo, recito, sacar a colación, traer a cuento, poner paño al púlpito, calentársele la boca, meter baza, gastar palabras, hablar a chorros, no dejar meter baza, hablar por los codos.  digo, expreso, manifiesto, exteriorizo, declaro, proclamo, atestiguo, comunico, comento, explico, aseguro, afirmo, reitero, confirmo, ratifico.  pronuncio, articulo, enuncio, propongo, formulo, opino, profiero, prorrumpo, exclamo, vocifero, grito, trueno.  murmuro, musito, balbuzco, critico, balbuceo, mascullo, respondo, rezongo, susurro, cuchicheo, comadreo, chismorreo, hablar entre dientes.  razono, discurro, alego, pienso.  clamo, intercedo, ruego, suplico, influyo. ,
pensar : cavilar, especular, recapacitar, repasar, rumiar, madurar, preocuparse, deliberar, masticar, ponderar, abstraerse, recogerse, concentrarse, ensimismarse, enfrascarse, reconcentrarse, repensar, asumir, detenerse, filosofar, premeditar, marearse, presuponer, preconcebir, torturarse, remirar, digerir, descabezarse, enfocar, hablar consigo mismo, tener presente, dar vueltas a la cabeza, calentarse los cascos, devanarse los sesos, romperse la cabeza, dar vueltas, consultar con la almohada, despertar a uno, hacer calendarios, decir para sí, parar mientes.  imaginar, idear, concebir, soñar, inventar, crear, trazar, acariciar, proyectar, planear, fraguar, tramar, urdir.  discurrir, reflexionar, meditar, razonar, relacionar, deducir, colegir, inducir, hilar, raciocinar, tejer.  examinar, estudiar, analizar, investigar, buscar, ver, observar, reparar.  calcular, tantear, medir, intentar.  juzgar, creer, considerar, entender, penetrar, profundizar.  figurarse, sospechar, recelar, presumir, escamarse, olerse, maliciar
oír : escuchar, atender, auscultar, enterarse, interesarse, ocuparse, dar oídos, no perder ripio, aguzar el oído, aguzar las orejas, hacerse cargo, beber las palabras, tomar nota, prestar atención, prestar oídos, aguzar los sentidos.  percibir, notar, advertir, entender, sentir.  acceder, admitir, conceder, acoger, otorgar
comprar (to buy) : adquirir, tomar, obtener, conseguir, lograr, captar, ganar, conquistar, consumir.  feriar, regatear, proporcionarse, pujar.  sobornar, corromper, untar, captarse, perder, tapar la boca.  operar, luchar, acordar, pactar, estipular.  retraer, retractar, mohatrar.  pagar, abonar, redimir, recobrar, picar, dar, regalar.  mercantilizar, comerciar, mercadear, distribuir, mercar, comercializar, tratar, intercambiar, permutar, trocar, negociar, tranzar
preguntar : examinar, inquirir, investigar, curiosear, indagar, averiguar, aclarar, sonsacar.  interrogar, interpelar, demandar, consultar, solicitar, interesarse, requerir, pedir, articular, comunicar, cuestionar, rogar, pedir cuenta
ver: advertir, distinguir, notar, percibir, reparar, conocer, comprensa, enterar, prevenir, avistar, divisar, descubierta, ojear, vislumbrar, otear, revisar, entrevista, sacar, presentir.  avispar, presenciar, echar la vista encima, echar un vistazo, no perder de vista, estar a la mira, comerse con la vista, mirar con el rabillo del ojo, mirar de arriba abajo, dar una ojeada.  mirar, contemplar, observar, fija, acatar, acechar, vigilar, espiar, atenta, cuidar, curiosear, escarbar, entrometer, hurgar, remover, buscar, averiguar, escudriñar, indagar, inquirir, preguntar, sonsacar, imaginar, reconocer, explorar, sondear, cachear, estudiar, examinar.  experimentar, probar, ensayar, catar, tratar, intentar.  considerar, juzgar, apreciar, tantear, calcular, recapacitar, pensar, reflexionar, meditar, especular, hallar, tropezar
trabajo : adeudo, débito, compromiso, saldo, encargo, responsabilidad.  labor, faena, obra, tarea, operación, fajina, quehacer, cometido, trajín, misión, función, obligación, ajetreo, labranza, maniobra, carga, servicio, asunto, agotamiento, gestión, recado, ocupación, empleo, oficio, colocación, actividad, cuidado, diligencia, laboriosidad, profesión, ejercicio, práctica, ministerio.  monografía, memoria, exposición, disertación, escrito, tesis, artículo, tratado, ensayo, publicación, resumen.  afán, esfuerzo, empujón, empeño.  estudio, investigación, examen, análisis.  penalidad, cuita, tormento, martirio, pena, dolor, padecimiento.  trote, reventón, tute, jornada.  manipulación, elaboración, fabricación, manufactura, realización.  molestia, enfado, dificultad, estorbo, impedimento.  empresa, campaña, hazaña, apretón.  paliza, julepe, tunda.  lucha, batalla, pugna, forcejeo, sudor
trabajar: ocupo, atareo, afano, buscárselas, pasto, aporreo, deshago, atareo, velo, remo, abrumo, agobio, ponerse a, sudar la gota gorda, verse y desearse, arrimar el hombro, batirse el cobre, romperse la cabeza, llevar la carga, meterse a, ganarse la vida, dejarse la vida, no parar, echar el bofe, ir a jornal, ganarse el pan, ganarse el sustento.  elaboro, hago, produzco, fabrico, ejecuto, formo, manipulo, actúo, obro, ejerzo, profeso, funciono, ocupo, gano.  sudo, afano, esfuerzo, brego, mato, multiplico, agenciárselas, trajino, canso, ajetreo, reviento, muevo, dedico, aplico, consagro, persevero, peleo, batallo, lucho, acaloro.  cultivo, ejercito, adiestro, siembro, educo.  molesto, inquieto, atosigo, cargo, perturbo.  estudio, investigo, busco.  procuro, intento, gestiono, despacho.  colaboro, contribuyo, coopero, sirvo, marcho, voy, aprieto, empujo
aprender : instruirse, educarse, cultivarse, formarse, ilustrarse, ejercitarse, asimilar, empollar, cursar, aplicarse, estudiar, repasar, ensayar, experimentar.  penetrar, profundizar, ahondar, pasar.  practicar, cultivar, seguir. ,
saber (to know) : estar al corriente, estar al tanto, echar de ver, estar al cabo de la calle, estar fuerte en, saber al dedillo, no pecar de ignorancia, saber de buena tinta, calzar muchos puntos, pasarse de listo.  conocer, dominar, percibir, observar, percatarse, notar, alcanzar, distinguir, aprender.  entender, comprender, discernir, penetrar, intuir, averiguar, descifrar, interpretar, creer, pensar, opinar, concebir, juzgar
llama (call) : flama, fogonazo, llamarada, soflama, deflagración, fuego, hogar, pira, lumbre, fogata, marjal, falla, chispazo, explosión, soplete, antorcha, tea, ascua, brasa, fuegos fatuos.  ardor, pasión, entusiasmo, vehemencia, arrebato, fogosidad, ataque, efervescencia, paroxismo, rapto, volcán, acaloramiento, encendimiento, apasionamiento.  fulgor, luz, claror, claridad, resplandor, brillo, chispa.  alpaca, caracha, rumiante, vicuña, carnero. ,
llamar (to call): cita, convoca, emplaza, reúne.  grita, vocifera, aclama, exclama, di, vocea.  nombra, designa, señala, distingue, denomina, apellida, titula, apoda, intitula, bautiza, califica, adjetiva.  reclama, clama, avisa, solicita, requiere, exige, convida, invita, invoca, apela, evoca.  chista, silba, pía, atraer la atención.  toca, pulsa, interesa, oprime, atrae, seduce
mejor : superior, excelente, principal, alto, sobresaliente, dominante, conspicuo, adelantado, aventajado, supremo, sumo.  preferible, perfeccionado, mejorado
peor (worst) : malo, bajo, infame, vil, execrable.  inferior, peyorativo, deficiente, pésimo
caliente : acalorado, ardiente, fogoso, vivo, violento, ardoroso, reñido, excitado, exaltado, febril, apasionado, enardecido, vehemente, exacerbado.  cálido, caluroso, tórrido, caldeado, tropical, bochornoso, caliginoso, térmico, calenturiento, candente, abrasador, rojo, incandescente, hirviente, humeante, encendido, inflamado, al rojo
fría: sofría, saltee, dore, estofe, cocine, caliente, hierva, cueza, recaliente.  moleste, importune, fastidie, mortifique, incomode, irrite, exaspere, arrebate.  satirice, zahiera, vilipendie
freír : sofreír, saltear, dorar, estofar, cocinar, calentar, hervir, cocer, recalentar.  molestar, importunar, fastidiar, mortificar, incomodar, irritar, exasperar, arrebatar.  satirizar, zaherir, vilipendiar
ropa : ropaje, vestido, indumentaria, ajuar, traje, atavío, vestuario, atuendo, uniforme, vestidura, jaez, pelaje, trapos, paños, ropilla, prendas, galas, trajes.  trapo, género, tela, tejido
comida (food): pitanza, manducatoria, pan, pábulo, bucólica, puchero, rozo, comestible, viático, ración, refracción, víveres, vianda, manjar, plato, golosina, bazofia, sustancia, potingue, bodrio, sustento, subsistencia, nutrición.  colación, refrigerio, tentempié, piscolabis, refacción, bocado, bocadillo, banquete, cena, comilona, merienda, convite, festín, gaudeamus, simposio, almuerzo, desayuno
comer (eat): almorzada, desayunada, merendada.  consumida, disipada, gastada, derrochada, dilapidada, rebajada, malgastada, destruida, debilitada, tirada, despachada.  masticada, mascada, desmenuzada, triturada, corroída, roída, erosionada.  nutrida, cebada, rellenada, embutida.  saboreada, paladeada, disfrutada, gozada.  tragada, engullida, zampada, ingerida, tomada, absorbida, embuchada, ganada, alimentada, nutrida, sustentada, jalada, devorada, atiborrada, embutida, echar un bocado, hacer penitencia, llenar la andorga, matar el hambre. ,
dinero : capital, caudal, fortuna, peculio, fondos, patrimonio, riqueza, posición, tesoro, cantidad, suma, bienes, bolsillo, sustancia, posibles, hacienda, bolsa, talega, economías, ahorros, ahorro.  moneda, metálico, efectivo, oro, numerario, gato, divisas, suelto, calderilla, cambio, cuartos, valores, mosca, monises, pasta, papel, blanca, talego, dineruelo, dinerillo, níquel, porqué, unto, resuello, paga, un tanto.  dólares, plata, billete.   ,
buscar : investigar, indagar, averiguar, rebuscar, escudriñar, inquirir, examinar, escrutar, preguntar, escarbar, revolver, husmear, fisgonear, bucear, cachear, explorar, rastrear, perseguir, registrar, sondear, batir, andar a caza de, ir al encuentro, sacar de debajo de la tierra, hacerse el encontradizo, dar vueltas.  demandar, pedir, solicitar, reclamar, mendigar. ,
nada : simulacro, quimera, ficción, entelequia, sueño, ensueño, ofuscación, apariencia.  ausencia, inexistencia, carencia, falta, negación, nulo, nulidad, poco. ,
nadar: bracea, baña, zambulle, bucea, flota, sobrenada.  rebosa, sobrepasa, sobra, abunda, huelga
puedo/ poder (could): logro, consigo, obtengo, alcanzo, tomo, realizo, sé.  valgo, agencio, merezco, otorgo, permito.  doy, concedo, otorgo, capacito.  disfruto, tengo, ostento.  influyo, intervengo, asumo, reasumo.   dominio, potestad, autoridad, imperio, jurisdicción, poderío, mando, soberanía, señorío, atribución, gobierno, absolutismo, autocracia, preponderancia, supremacía, superioridad, influjo, influencia, mano, hegemonía, omnipotencia, jerarquía, prepotencia, albedrío, arbitrio, recurso.  fuerza, vigor, eficacia, energía, virtud, eficiencia, peso, diligencia, pujanza, empuje, potencia.  facultad, capacidad, derecho, competencia, aptitud, voz.  prerrogativa, privilegio, exención, libertad, autorización, permiso, licencia, venia, concesión, salvoconducto
belleza : hermosura, beldad, preciosidad, lindeza, perfección, primor, lindura, divinidad, gallardía, apostura, morbidez.  atractivo, encanto, gracia, seducción.  esplendor, magnificencia, brillo.  pimpollo, guapa, bonita, preciosa, hermosa, linda, agraciada, bella.  ejemplar, prototipo, norma.   ,
fuerza : pujanza, potencia, fibra, nervio, impulso, poderío, ímpetu, influencia, robustez, reciedumbre, vigor, energía, fortaleza, eficacia, dinamismo, vivacidad, ánimo, aliento, empuje, brío, esfuerzo, bizarría, fervor, afán, empeño, ahínco.  resistencia, firmeza, dureza, corpulencia, solidez, capacidad.  forcejeo, tirón, sudor, reacción, brega, puja.  avanzada, avanzadilla, delantera, vanguardia, descubierta, destacamento, patrulla, pelotón, flota, escuadra, grupo, tropa, ejército.  batalla, lucha, acción, pugna. ,
forzar: obliga, compele, constriñe, exige, violenta, impón, compromete, manda, grava, carga, apremia, azuza, impulsa.  desflora, desvirga, forcejea, goza, forceja, rapta, puja, viola, abusa, atropella, vulnera, profana, escarnece, mancilla, deshonra.  conquista, ocupa, toma, allana, penetra, asalta, invade, convence.  domina, retén, sujeta, reprime.   ,
vez : ciclo, período, tiempo, sucesión, orden, intervalo, fecha, momento.  mano, turno, tanda, rueda, vicisitud, alternativa.  ocasión, coyuntura, razón, proporción, oportunidad, circunstancia, coincidencia, particularidad, trance, lance, punto, situación.  vuelta, revuelta, compás. ,
creer: opino, profeso, entiendo, juzgo, reputo, pretendo, conceptúo, parecerle, fanatizo.  supongo, conjeturo, sospecho, presumo, figuro, pienso, imagino, estimo, calculo, considero.  afirmo, confío, manifiesto, declaro, evidencio.  admito, acepto, adopto.  sostengo, mantengo, sigo.  trago, parecerle a uno, dar crédito, dar asenso, tener buenas tragaderas, tragarse la píldora.   ,
crear: fundo, establezco, instituyo, instauro, organizo, implanto, erijo, introduzco.  hago, formo, elaboro, realizo, compongo, invento, concibo, forjo, descubro, plasmo, imagino, pienso.  produzco, origino, engendro, paro, genero, procreo, alumbro.  nombro, designo, elijo. ,
hombre : persona, individuo, mortal, prójimo, semejante, personaje, tipo.  varón, macho, masculino, caballero.  esposo, tipazo, castizo.  niño, joven, adolescente.   ,
mujer : señora, dama, dueña, ama, matrona, adulta, hembra, madre.  joven, chica, muchacha, moza, niña, doncella, señorita, venus, hurí, beldad, hermosura.  esposa, consorte, cónyuge, pareja, contrayente, novia, compañera, casada, desposada, media naranja, cara mitad. ,
vida : existencia, savia, subsistencia, duración, lapso, vidorria, substancia, supervivencia.  energía, fuerza, vigor, fortaleza, espíritu, aliento.  biografía, hazañas, acontecimientos, historia, relación, crónica, relato, memoria.  conducta, comportamiento, proceder, manera, modo.  carrera, empleo, ocupación, quehacer, actividad.  peregrinación, jornada, paso, movimiento.   ,
cosa: ente, objeto, sujetas, formas, unidades, entidades, organismo, cuerpo, esencias, substancias.  trasto, chisme, chirimbolo, cacharro.  elemento, componente, piezas, factor.  caídas, ocurrencias.  efectos, enseres, arreglos.  mercancías, bien, artículo. ,
acuerdo : pacto, convenio, alianza, contrato, arreglo, concierto, compromiso, unión, ajuste, acomodo, colaboración, relación, tratado, estipulación, acto, convención, transacción, negociación, trato, componenda, connivencia, manejo.  armonía, avenencia, unidad, paz, inteligencia, entendimiento.  dictamen, fallo, consejo, arbitraje, sentencia, opinión, resolución, decisión, determinación, decreto, edicto.  conformidad, consentimiento, concordancia, asentimiento.   ,
amigo : camarada, compañero, aliado, conocido, colaborador, coadjutor, adicto, partidario, inseparable, incondicional, afecto, seguidor, hincha, devoto, apegado, leal, aficionado, inclinado, encariñado. ,
lugar (place) : parte, término, zona, terreno, esfera, distrito, territorio, comarca, sector, bando, expresión.  pueblo, aldea, ciudad, villa, localidad, población.  sitio, punto, paraje, andurrial, rincón, recinto, local, teatro, circuito.  situación, asentamiento, colocación, puesto, empleo, dignidad, oficio, ministerio, autoridad.  medio, ámbito, ambiente, atmósfera, espacio.  ocasión, circunstancia, momento, tiempo.  causa, motivo, fundamento.  posición.   ,
gustar (like): saborea, cata, prueba, relame, experimenta, goza, deleita, siente.  encanta, atrae, cautiva, embelesa, toma, arrastra, capta, convence, conquista, enamora, deslumbra, seduce, suspende, interesa, prefiere, arrebata, embriaga, prenda.  desea, quiere, apetece, ambiciona, apasiona, codicia, pretende, aspira, hipa, encapricha, anhela, ansía.  agrada, complace, deleita, place, regala, entusiasma, satisfaz, contenta, alegra, celebra. ,
beber : gustar, saborear, catar, probar, trincar, tragar, tomar, ingerir, consumir, absorber, sorber, succionar, chupar.  refrescar, soplarse, brindar, refrescarse, servirse, emborracharse, empinar el codo, echar un trago, humedecer el gañote, tener buen saque.   ,
leer : estudiar, examinar, analizar, averiguar, observar, repasar, ojear, percibir.  descifrar, explicar, interpretar, instruir, adivinar, acertar, descubrir.  hojear, releer, devorar, deletrear, silabear.  asimilar, ilustrarse, cultivarse, aprender.  recitar, decir, contar, balbucear.  penetrar, comprender, profundizar, pasar, recorrer. ,
escribir (write) : rasguear, garrapatear, trazar, borronear, subrayar, garabatear, corresponderse, cifrar, firmar, autografiar, rotular, mecanografiar, documentar.  apuntar, dictar, asentar, anotar, marginar, notar, poner.  redactar, componer, estilar.  copiar, transcribir, representar, pintar.  extender, expresar, publicar, editar, reflejar.  consignar, expedir, librar.   ,
llevar (wear/ carry) : transportar, trasladar, acarrear, facturar, cargar, transbordar, producir, trajinar, reportar, despachar, trasegar, aportar, barrer, meter, subir, pasear, trasplantar, levar, transferir, traspasar, pasar.  soportar, aguantar, sufrir, tolerar, sobrellevar, conllevar, resignarse, sostener, adaptarse.  conducir, guiar, encaminar, dirigir, mandar, manejar, regir, exigir.  escoltar, embalar, acompañar.  usar, utilizar, gastar, emplear.  cobrar, recaudar, tomar en cuenta.  inducir, persuadir, derivar, empujar, mover, incitar, excitar, arrastrar, remolcar.  ponerse, colocarse, vestir.  rebanar, trinchar, cortar.  quitar, sacar, apropiarse, apoderarse.  obtener, conseguir, merecer.  suministrar, dar, servir
deben/ deber (should): corresponden, incumben, comprometen, compensan.  obligan, comprometen, convienen, han. obligación, necesidad, compromiso, convenio, contrato, juramento, cuenta, molestia, cargo, peso.  obligación, peso, compromiso, carga, deuda, imposición, exigencia, necesidad, gravamen, servidumbre, cruz, lazo.  cometido, responsabilidad, trabajo, labor, encargo, cumplimiento, tarea, ejercicio, misión, comisión, competencia, oficio, cargo
espera (wait) : expectativa, expectación, aguardo, plantón, esperanza, perspectiva, entretenida, confianza.  dilación, demora, prórroga, retraso, aplazamiento, plazo.  acecho, alerta, vigilancia, guardia, atención, cuidado.  paciencia, flema, permanencia, aguante, conformidad, calma, tranquilidad, sosiego, serenidad.   ,
esperar (to wait): hacer cola, hacer tiempo, esperar sentado, dar tiempo al tiempo, hacer antesala, salir al camino, ir al encuentro, estar por, estar a la expectativa, tomarse tiempo.  persiste, persevera, detén, permanece, queda, dura, aguanta, sostén, conserva, insiste.  aguarda, acecha, atiende, prorroga, difiere, posterga.  cree, presume, supón, piensa, imagina, concibe, confía, fía.  anhela, desea, quiere.  anima, alienta, tranquiliza, promete.  capotea, entretén, hacer esperar, dar plantón, dar largas.  ilusiona, convence, abriga, alimenta. ,
prosperar: hacer baza, salir a flote, alzar la cabeza.  progreso, adelanto, mejoro, perfecciono, renuevo, asciendo, subo, florezco, surjo, enriquezco.  acreciento, aumento, desarrollo, incremento, amplío, agrando, intensifico, expando.  encumbro, esponjo, impongo, cuajo, gano, triunfo, prevalezco, aventajo, abrirse camino, abrirse paso, ganar terreno.   ,
camino : vía, carretera, calle, ronda, calzada, autopista, avenida, pasaje, galería, trillo, coladero, cordel, atajuelo, cancha, senda, sendero, vereda, atajo, trocha, carril, cañada, cruce, acceso, cañón, paso, meandro, rodeo, pista, rastro.  ruta, recorrido, trayecto, itinerario, rumbo, trayectoria, derrota, carrera, distancia, curso, viaje, excursión, paseo, cruzada, caminata, travesía.  medio, procedimiento, manera, método, sistema, línea, margen. ,
caminar: marcho, recorro, transito, circulo, paso, voy, viajo, avanzo, troto, deslizo, atajo, trajino, muevo, traslado, dirijo, vengo, llego, ando, paseo, vago, yerro
amable : afable, cordial, simpático, cariñoso, agradable, afectuoso, benévolo, dulce, benigno, bondadoso, humano, sociable, tratable, campechano, acogedor, abierto, accesible, amigable, llano, sencillo, atento, educado, urbano, complaciente, obsequioso, risueño, solícito, servicial.  encantador, gracioso, sugestivo, atractivo, gentil. ,
pequeño : chico, niño, chiquillo, chaval, infante, crío, criatura, nene, párvulo
ciertamente : positivamente, indisputablemente, indubitablemente, concluyentemente, infaliblemente, palpablemente, indudablemente, evidentemente, por de contado, por supuesto, a punto fijo, de juro, en verdad, de seguro, está visto, claro está
encantado : contento, satisfecho, complacido, alegre, gozoso, radiante, conforme, entusiasmado, dichoso.  absorto, abstraído, distraído, extático.  embaucado, seducido, hipnotizado, magnetizado, impresionado, cegado, fascinado, alucinado, deslumbrado, ofuscado, desorientado, pasmado, boquiabierto, atónito, sorprendido, trastornado, atontado, aturdido, hechizado, embrujado, maldito. ,
duro : rígido, cruel, áspero, riguroso, inhumano, severo, rudo, tieso, despiadado, insensible, inclemente, crudo, empedernido, rugoso, violento, perverso, inflexible, inexorable, intolerante.  tenaz, resistente, firme, terco, obstinado, perseverante, porfiado.  férreo, pétreo, inquebrantable, diamantino, irrompible, calloso, invulnerable, hiriente, infrangible, correoso, zapatero.  consistente, sólido, concreto, compacto, fuerte, recio.  sufrido, estoico, entero.  intolerable, pesado, insoportable, ofensivo.  penoso, doloroso, triste, trabajoso, agotador, fatigoso.   ,
fácil : hacedero, posible, cómodo, factible, realizable, practicable, viable, dable, conquistable, asequible, accesible, tratable.  sencillo, llano, simple, franco, natural, corriente.  obvio, claro, evidente, manifiesto, elemental, inteligible, comprensible.  ligero, liviano, frágil, manejable, dócil.  indulgente, complaciente, benigno.  libre, suelto, expedito. ,
difícil : dificultoso, arduo, espinoso, embarazoso, delicado, peliagudo, peligroso, comprometido, complejo, resbaladizo, trabajoso, agotador, fatigoso, laborioso, enojoso, pesado, engorroso, penoso, doloroso, complicado, incomprensible, confuso, enredado, enigmático, enmarañado, problemático, dudoso, enrevesado, inextricable, morrocotudo, sobrehumano, inaccesible, imposible, inasequible, abstruso.  duro, escabroso, desigual, áspero, abrupto, rudo, serio.  rebelde, indócil, indisciplinado, renuente.   ,
cambiar: liar los bártulos, cambiar la casaca, ser otro hombre, dar uno la vuelta, pasar de un extremo a otro, ahorcar los hábitos, mudar de aires, volver la hoja, volver la tortilla.  permuta, canjea, trueca, alterna, conmuta, reemplaza, substituye, suple, releva, recambia, muda, varía, invierte, vuelve, vira, diferencia, revuelve, baraja, altera, modifica, transforma, reforma, renueva, rectifica, corrige, enmienda, retoca, innova, transfigura, evoluciona, transmuta, convierte, deforma, disfraza, desfigura, disimula, tergiversa, desnaturaliza, equivoca. ,
solía : costumbre, hábito,
centro : foco, eje, médula, polo, miga, sede, fondo, yema, cogollo, entraña.  mitad, medio, promedio.  casino, ateneo, club, sociedad, agrupación, círculo, institución, organismo, establecimiento.  lugar, sitio.  fin, objeto, meta.  núcleo, principal, corazón, meollo. ,
centrar: concentro, centralizo, agrupo, reúno.  ajusto, coloco, calculo, mido, señalo, apunto, acierto
rápido : vertiginoso, resuelto, expedito, alígero, expeditivo, fulminante, atropellado, apresurado, presuroso, acelerado, urgente, acucioso, pronto, presto, repentino, súbito, precipitado, momentáneo, instantáneo, fugaz, veloz, ligero, ágil, suelto, raudo, impetuoso, febril, violento, recio, activo, diligente, dinámico, vivaz, vivo, listo, agudo, de vértigo. ,
lento : tardo, pausado, torpe, pesado, parsimonioso, lánguido, flemático, acompasado, calmoso, espacioso, cachazudo, moroso, premioso, parado, tardío, soñoliento, remiso, paulatino, paciente, pánfilo, reacio, rezagado, porrón, adormecido, lerdo, roncero.  flojo, perezoso, indolente, apático, débil, negligente, blando, tibio, suave, vago, haragán.  tranquilo, sosegado, reposado
escritorio : bufete, pupitre, mesa, escribanía, contador, buró, papelera, estudio, gaveta.  oficina, despacho, administración. ,
poco : brizna, átomo, miga, pizca, partícula, punta, tilde, grano, algo, adarme, nonada, pellizco, puñado, miseria.  asomo, atisbo, nada, ribetes, tanto, brote.   escaso, insuficiente, exiguo, corto, irrisorio, parvo, ridículo, raro, disminuido, menguado, falto, incompleto, pobre, truncado, limitado, reducido, estrecho, justo, relativo, pequeño, mínimo, diminuto, chico, minúsculo, insignificante.  tasado, módico, contado, ralo, roído, mediano.  parco, templado, sobrio, moderado. ,
listo (ready): dispuestos, preparado, capaz, alerta, maduros, a punto.  inteligente, perspicaz, avispado, sutil, clarividente, precoz, penetrante, linces, largos, finos, atentos, agudos, ingeniosos, astutos, sagaz, avisado, ladinos, pillos, despiertos, despabilado.  prontos, ligeros, prestos, despejado, expeditos, veloz, claros, activos, diligente, dinámicos, vivos
sentir (feel): aprecio, concibo, profeso, juzgo, opino, creo, considero, abrigo.  percibo, noto, advierto, reparo, comprendo, observo, cobro, percato, oigo.  deploro, lamento, arrepiento, añoro, extraño, aflijo, entristezco, conmuevo, emociono, impresiono, afecto, conduelo, compadezco.  experimento, compruebo, sufro, soporto, padezco.  presiento, adivino, pronostico, preveo, sospecho, figuro, temo.  conmuevo, disgusto, impresiono, altero, apasiono, estremezco, compadezco, enternezco, afecto, intereso.  tengo, cojo, tomo.  inspiro, insinúo, causo, muevo, excito. ,
siempre : eternamente, perpetuamente, perennemente, persistentemente, constantemente, invariablemente, continuamente
también : asimismo, además, igualmente, todavía, siempre, del mismo modo, de igual forma, de la misma manera
verdad (truth) : realidad, exactitud, autenticidad, veracidad, sinceridad, conformidad, propiedad, existencia, legitimidad, efectividad.  axioma, verosimilitud, postulado, perogrullada, dogma, evangelio, ortodoxia, artículo de fe, verdad de Perogrullo.  evidencia, prueba, demostración, comprobación, muestra, justificación, confirmación, testimonio, certificación, declaración, manifestación, afirmación, aseveración, certeza, certidumbre.  fundamento, principio, razón.  ,
traje (suit) : terno, ropaje, vestidura, vestimenta, vestido, atavío, prenda, ropa, indumentaria, uniforme, vestuario, atuendo, hábito, trapos, paños, galas, sayo, jaez, pelaje
traer (bring): trasladé, transporté, acarreé, aporté, transferí, envié, facturé, trasplanté, reporté, porté.  atraje, convencí, persuadí, empujé.  conduje, guié, manejé, traté, usé.  ocasioné, causé, produje, originé, motivé, resulté.  obligué, retraje, constreñí, impuse, exigí.  lucí, mostré, vestí, puse, serví, ofrecí
disculpar (excuse): excuse, justifique, absuelva, descargue, dispense, exima, disimule, comprenda, exonere, pruebe, libre, salve.  alegue, razone, defienda, apoye, echar la carga de sí.  motive, probar la coartada, tener en su haber
acordar: convienes, pactas, conciertas, ajustas, quedas, tratas, asocias, encajas, subscribes, contratas, estipulas.  concilias, reconcilias, pacificas, templas, colaboras, intervienes, medias, armonizas, concuerdas.  decides, resuelves, solucionas, concluyes, determinas, estableces, decretas, dictas.  dispones, arreglas, acomodas, compones. ,
encontrar (to find): hallar, topar, tropezar, localizar, chocar, acertar, atinar.  descubrir, ver, notar, percibir, juzgar, apreciar, averiguar, examinar.  concurrir, coincidir, estar, seguir, andar, ubicar.  inventar, idear, perfeccionar, imaginar.  coger, tocar, pillar, sorprender.  sacar, obtener, conseguir.  convenir, concordar, reunir
jugar (to play): retoza, juguetea, travesiea, enreda, brinca, corretea, salta, pasar el tiempo.  divierte, recrea, entretén, distrae, solaza, esparce.  actúa, intervén, funciona, participa, tomar parte.  apuesta, pon, reta, desafía, compite, rivaliza, pugna, pelotea, arriesga, aventura.  marcha, camina, mueve, anda.  niñea, pasarlo bien, pasar el rato.  estipula, acuerda, convén, integra, compón. ,
temer (to fear): no tenerlas todas consigo, no saber dónde meterse, no llegarle la camisa al cuerpo, dar diente con diente, atravesársele a uno un nudo en la garganta, hacerse un nudo en la garganta, temblar las carnes, no quedar gota de sangre en el cuerpo, ciscarse de miedo, estar con el alma en un hilo, no llegar la camisa al cuerpo, cerrar los ojos.  recelo, sospecho, desconfío, escamo, dudo, imagino, pienso.  asusto, sobrecojo, amedrento, intimido, atemorizo, espanto, amilano, azoro, encrespo, encojo, acobardo, aterro, aterrorizo, despavorir, inquieto, tiemblo, alarmo, sobresalto, preocupo.   ,
tarde : crepúsculo, ocaso, víspera, oscurecer, puesta, caída.  tardíamente, lentamente, pausadamente, perezosamente, morosamente, retrasadamente, a última hora, a hora avanzada, a deshora, a las tantas, a las veinte, de día en día, mañana será otro día. ,
tardar (to spend time): difiera, aplace, rezague, prorrogue, atrase, espere, entretenga, demore, retrase, retarde, dilate, postergue, posponga, dar largas.  eternice, perpetúe, dure, rodee, ir para largo, dar un rodeo.  detenga, detenga, pare, retenga.  rezague, demore, enrede, invierta.   ,
resto : parte, pedazo, migaja, pieza, polvo, miga, colilla.  reliquia, estela, indicio.  residuo, remanente, desperdicio, ceniza, poso, excedente, escombro, resta, restante.  residuo, remanente, sobrante, exceso, despojo, bagazo, restante, relieves, piltrafa, broza, retal, ceniza, escombros, migajas, rebuscallas, tetón, gancho, morralla, pozo, sedimentos, rebusco, huesos, reliquias, ruinas, muñón, tocón, sobras, despojos, desperdicios, basura, desechos, excrementos.  vestigio, señal, rastro, indicio, reliquia, huella, resultado.  fracción, pedazo, trozo, parte.  sedimento, poso, suelo.  cadáver, cuerpo, restos mortales
restar: sustraigo, quito, deduzco, tomo, descuento, saco.  rebajo, disminuyo, mermo, aminoro, cerceno
desarrollar: desplegar, desenvolver, desdoblar, tender, desenrollar, abrir, deshacer.  ampliar, extender, ensanchar, amplificar, explayar, estirar, expandir, propagar, difundir.  aumentar, acrecentar, incrementar, crecer, perfeccionar, progresar, prosperar, mejorar, adelantar, subir, avanzar.  explicar, exponer, comentar, interpretar, glosar, revelar, esclarecer, definir, especificar.  hacerse, madurar, estudiar, analizar, argumentar, tratar, investigar, tomar vuelo.  realizar, llevar a cabo
embargar: retengo, impido, suspendo, estorbo, embarazo, detengo, paralizo, abrumo.  secuestro, confisco, decomiso, incauto, aprehendo, usurpo, recojo, desposeo, bloqueo, quito, apropio, apodero, domino.  absorbo, fascino, alucino, maravillo, embeleso, entusiasmo, embobo, cautivo, enajeno, atonto.  ejecuto, intervengo, aprehender los bienes.   ,
alcanzar : lograr, conseguir, obtener, adquirir, descubrir, merecer, sacar, agenciar, inventar, averiguar, merendarse, resolver.  coger, tocar, llegar, atrapar, tomar, pillar, cazar, apresar, aprehender.  comprender, entender, saber, penetrar.  rebasar, sobrepasar, aventajar.


¿Estás listo? ¡Vamos! - Are you ready? Let's go!
Who? - ¿Quién?
De quién - Whose
¿Quién es? - Who is it?
¿Quiénes son? - Who are they?
¿De quién son estos libros? - Whose books are these?
What? - ¿Qué? 
Which - ¿Cuál?
¿Qué haces ahora? - What are you doing right now?
¿Qué es esto? - What’s that?
¿Cuál es tu favorito? - Which is your favourite?
¿Cuál es tu película favorita? - What is your favourite movie?
When? - ¿Cuándo?
¿A qué hora es la película? - What time is the movie?
¿Cuándo es tu cumpleaños? - When is your birthday?
¿Cuándo vas a ir? - When will you go?
Where? - ¿Dónde
¿Dónde vives? - Where do you live?
¿A dónde vas? - To where are you going?
¿De dónde eres? - Where are you from?
from where - de dónde
¿Por qué? / ¿Para qué? - Why?
¿Por qué dices eso? - Why do you say that?
¿Para qué estás aprendiendo español?,  	What are you learning Spanish for?
¿Cómo? - How?
¿Cómo está usted? - How are you?
¿Cómo hiciste eso? - How did you do that?
¿Cuántos? / ¿Cuánto? / ¿Cuántas? / ¿Cuánta? - How many? / How much?
¿Cuántas manzanas? - How many apples?
¿Cuántos aguacates? - How many avocados?
¿Cuánta agua? - How much water?
¿Cuánto té? - How much tea?
Bueno, ¿qué hay de la cena? - Well, what’s for dinner?
Tengo una pregunta - I have a question
¿Puedo hacerte una pregunta? - Can I ask you a question?
Tengo una pregunta para ti - I have one question for you.
Tengo dos preguntas para ti - I have two questions for you.
¿Puedo preguntarte algo? - May I ask you something?
Hola, ¿cómo te llamas? - Hello, what’s your name?
Soy Benny. - I’m Benny.
¿Que tal? - How’re you?
Muy bien, gracias. ¿Y tu? - I’m great, thanks. And you?
¿Cuántos años tienes? - How old are you?
Tengo treinta años. - I am 30 years old.
¿A qué te dedicas? - What do you do for a living?
Soy escritor y orador. - I am a writer and speaker.
¿Donde trabajas? - Where do you work?
Trabajo en un restaurante. - I work at a restaurant.
¿Cuáles son tus aficiones? - What are your hobbies?
Me gusta leer libros y ver películas 	I like to read books and watch movies.
¿De donde eres? - Where are you from?
Soy de Irlanda. - I’m from Ireland.

¿Cuál es tu película favorita? - What’s your favourite movie?
Me encanta Star Wars. - I love Star Wars.
¿Desde cuándo aprendes español?, How long have you been learning Spanish?
Aprendo español desde hace tres meses I’ve been learning Spanish for 3 months.
¿Cuál es tu color favorito? - What is your favourite colour?
Me gusta el verde. - I like green.
¿Hablas otros idiomas? - Do you speak other languages?
Sí, hablo inglés y francés. - Yes, I speak English and French.
¿Tienes hermanos? - Do you have any siblings?
Sí, una hermana. - Yes, one sister.
¿Tienes hijos? - Do you have any kids?
No, no tengo hijos. - No, I don’t have kids.
¿Cuántos en tu familia? - How many in your family?
Tres. Yo, mi mujer y mi perrito. - Me, my wife, and my puppy.
¿Tienes alguna mascota? - Do you have a pet?
Sí, tengo un perro. - Yes, I have a dog.
¿Cuál es el nombre de tu hermano/hermana?, 	What is your brother’s/sister’s name?


El nombre de mi hermano/hermana es… - My brother’s/sister’s name is…
¿Qué hacen tus padres? - What do your parents do?
Mi padre es ingeniero y mi madre es enfermera - My dad is an engineer and my mom is a nurse.
¿Dónde creciste? - Where did you grow up?
Yo crecí en… - I grew up in…
¿Que hora es? - What time is it?
Es la una. - It’s 1 o’clock.
¿Qué día es? - What day is it?
Es viernes. - It’s Friday.
¿A dónde vas? - Where are you going?
Me voy a trabajar. - I’m going to work.
¿Qué haces? - What are you doing?
Estoy estudiando español. - I’m studying Spanish.
¿Estás de acuerdo? - Do you agree?
Pues… yo no sé. - Well… I don’t know.
¿Qué piensas? - What do you think?
Creo que esta bien. - I think it’s good.
¿Qué has dicho? - What did you say?
Dije… - I said…
¿Dónde está el baño? - Where’s the bathroom?
Por ahí. - Over there.
Hola, soy Benny. - Hi, I'm Benny.
Holo, ¿cómo te llamas? - Hi, what's your name?
¿Está desocupada esta silla? - Is this seat taken
¿Sabe qué hora es? - Do you know what the time is?
¿Sabe a qué hora cierra este lugar? - Do you know what time this place closes?
¿Sabe dónde está el/la [place? - Do you know where the [place is?
¿De dónde eres? - Where are you from?
¿A qué te dedicas? - What do you do for a living?
¿Qué estudias? - What do you study/What's your major?
¿Qué te trae por aquí? - What brings you here?
¿Cuánto tiempo llevas aquí? - How long have you been here?
¿Cómo conoces a José? - How do you know José?
¿A quién conoces aquí? - Who do you know here?
¿Con quién estás aquí? - Who are you here with?
¿Vienes seguido por aquí? - Do you come here often?
¿Tienes hermanos/hijos? - Do you have any siblings/children?
¿Qué edad tienen? - How old are they?
¿Qué hacen tus padres? - What do your parents do?
¿Donde creciste? - Where did you grow up?
¿Ves a menudo a tus abuelos? - Do you see your grandparents often?
¿Eres cercano/a sus padres? - Are you close with your parents?
¿Cómo es tu pueblo natal? - What's your hometown like?
¿Tienes alguna mascota? - Do you have any pets?
¿Qué raza es tu perro/gato? - What breed is your dog/cat?


¿Te gusta viajar? - Do you like to travel?
¿Cuál es el lugar favorito en que has estado? - What's your favourite place you've been to?
¿En qué países has estado? - Which countries have you been to?
¿Has estado en [Roma? - Have you been to [Rome?
¿Querrías ir a [Barcelona? - Would you like to go to [Barcelona?
Si pudieras viajar a cualquier lugar, ¿dónde viajarías? - If you could travel anywhere, where would you go?
¿Hablas otros idiomas? - Do you speak any other languages?
¿A dónde fuiste la ultima vez de vacaciones? - Where was the last place you went on holiday?
¿Cuándo empezaste a aprender [español? - When did you start learning [Spanish?
¿Qué te hizo convertirte en [médico? - Why did you become a [doctor?
¿Te gusta tu trabajo? - Do you like your job?
¿Qué es lo que más te gusta de tu trabajo? - What do you like the most about your job?
¿Qué es la cosa más difícil sobre tu trabajo? - What's the most difficult thing about your job?
¿Fuiste a la universidad? - Did you go to university?
¿La disfrutaste? - Did you enjoy it?



¿Qué consejo le darías a alguien que quiere convertirse en [programador? - What advice would you give to someone who wants to become a [programmer?
¿Si pudieras volver atrás en el tiempo, estudiarías [psicología de nuevo? - If you could go back in time, would you study [psychology again?
¿Te gusta cocinar? - Do you like to cook?
¿Cuál es tu comida favorita? - What's your favourite food?
¿Te gusta la comida [italiana? - Do you like [Italian food?
¿Puedes recomendarme un buen restaurante cerca de aquí? - Can you recommend me a good restaurant near here?
¿Qué comen en su país? - What do they eat in your country?
¿Qué haces para divertirte? - What do you like to do for fun?
¿Te gusta [leer? - Do you like to [read?
¿Cuál tipo de música te gusta más? - What's your favourite type of music?
¿Cuál es tu [película/libro/banda favorita? - What's your favourite [film/book/band?
¿Tocas un instrumento? - Do you play an instrument?



¿Cuál es la peor película que has visto? - What's the worst film you've seen?
¿Practicas algún deporte? - Do you play a sport?
¿De qué equipo eres? - What team do you support?
¿Estás de acuerdo? - Do you agree?
¿Qué piensas tú sobre [X? - What do you think about [X?
Háblame/Cuéntame más de [X - Tell me more about [X.
Si no te importa que te pregunte… - If you don't mind me asking…
Alguien me dijo que… - Someone told me that…
Escuché que… - I heard that…
¿Estás de acuerdo en que…? - Would you agree that… ?
Eso me recuerda… - That reminds me…
Hablando de eso… - Speaking of which…
Por otra parte… - On another note…

Estoy cambiando de tema, pero… - I'm changing the subject, but…
Me preguntaba… - I was wondering…
Te voy a decir una cosa… - Let me tell you something
¡Por supuesto! or ¡Claro que si! - Of course!
¿En serio? - Really? / Seriously?
¡Oye! - Hey! (literally, 'listen!')
¡Hostia! - Damn!
¡Ostras! - A family-friendly version of '¡hostia!'.
¡Dios mio! - Oh my god!
A ver… - Let’s see…

¡No me digas! - No way! (Literally: don’t tell me!)
¡Vale! - Okay! (Used in Spain, “dale” is more common in the Americas.)
Qué yo sepa - As far as I know.
Digo… - Literally “I say”, but you can use this to correct yourself after you misspeak. “Somos dos… digo, tres personas.”
O sea - I mean…/Or rather….
¿Sabes? - You know?
Una pregunta… - a question



spring - la primavera
summer - el verano
autumn/fall - el otoño
winter - el invierno
la estación lluviosa - the rainy season
la estación seca - the dry season
Es verano. - It’s summer.
Nos vamos en primavera - We’re leaving in the spring.
Es una fiesta de invierno - It’s a winter party.
la flor - flower/blossom
florecer - to bloom
la oruga - caterpillar
la mariposa - butterfly
el pájaro - bird
la mariquita - ladybug
la semilla - seed
la planta - plant
el ramo - bouquet
clima templado - temperate weather
temperatura fresca - cool temperature
lloviznar - to drizzle
la brisa - breeze


Tengo un poco de frío - I’m a bit cold
sembrar - to sow/to plant
ir de picnic - to have a picnic
la limpieza de primavera - spring cleaning
el mar - sea
la arena - sand
el campo - the country
los mosquitos - mosquitoes
la fruta - fruits
la sandía - watermelon
la piña - pineapple
una barbacoa - a barbecue
el chicle - chewing gum
el helado - ice cream
colores vivos - vibrant colors
colores llamativos - flashy colors
azul - blue
amarillo - yellow
El clima - the weather


clima templado - temperate weather
temperaturas altas - high temperatures
el sol - sun
un día soleado - a sunny day
días largos - long days
noches cortas - short nights
Actividades - activities

las vacaciones de verano - summer vacations
tomar helado - to have ice cream
ir a la playa - to go to the beach
nadar - to swim
ir de viaje - to go on a trip
acampar, ir de acampada, or ir de camping - to go camping
una excursión - a hike/a field trip
relajarse - to relax
divertirse - to have fun
la Noche de San Juan - Saint John’s Night


El Día de los Padres - Father’s Day
fiestas - parties
La naturaleza - nature

la hoja - leaf
el árbol - tree
el tronco - trunk
el caracol - snail
el barro or el lodo - mud
cosecha - harvest
los colores - colors

marrón - brown
rojo - red
naranja or anaranjado - orange
colores cálidos - warm colors
el clima - the weather

el viento - wind
temperaturas en caída - falling temperatures
el cielo gris - grey sky
la tormenta - storm
La comida - food

el vino - wine
la manzana - apple
el maíz - corn
la calabaza - pumpkin
Actividades - activities

recoger hojas - gather up leaves
saltar en charcos - jump into puddles
bricolaje - DIY
hacer una fogata - to build a bonfire
La Fiesta de la Hispanidad - Spanish Culture Day/October 12th

Día de los Muertos - Day of the Dead
pureza - purity


La naturaleza - nature

la montaña - mountain
el muérdago - mistletoe
hibernación - hibernation
el pino - pine
Los colores - colors

colores fríos - cold colors
white - blanco
gris - grey
plata - silver
dorado - golden
El clima - the weather

temperaturas bajas - low temperatures
la nieve - snow
el hielo - ice
la escarcha - frost
las nubes - clouds



la bufanda - scarf
las medias/lo calcetines - socks
el abrigo - coat
las botas - boots
el gorro - coat
los guantes - gloves
La comida - food

la cena - dinner
chocolate a la taza/chocolate caliente - hot chocolate
bebidas calientes - hot drinks
la sopa - soup
Actividades - activities

hacer un muñeco/hombre de nieve - to build a snowman
tirar bolas de nieve - to play snowballs
vuna vuelta en trineo - a sleigh ride
celebrar - to celebrate
esquiar - to ski
patinar sobre hielo - to ice skate
snowboard - to snowboard

La ropa - clothes
la Navidad - Christmas
Nochebuena - Christmas Eve/Good Night
Nochevieja - New Year’s Eve/Old Night
Día de Año Nuevo - New Year’s Day
la Epifanía - Epiphany
Día de Reyes - Day of the Kings
Reyes Magos - Three Wise Men
San Valentín - Valentine’s Day
el Carnaval - Carnival


Jueves Lardero, Jueves Gordo, Jueves Graso, Jueves de Carnival - Fat Thursday / Carnival Thursday
El Miércoles de Cenizas - Ash Wednesday
¿Cuál es tu estación favorita? - What’s your favorite season? 
Mi estación favorita es… - My favorite season is…
¿Cuál es la estación que te gusta más? - Which season do you like the most?
La estación que más me gusta es… - The season I like the most is…
¿Cuál es la estación que te gusta menos? - Which season do you like the least?
La estación que menos me gusta es… - The season I like the least is…
Prefieres (el otoño) o (la primavera)? - Do you prefer (autumn) or (spring)?
Prefiero (el otoño), porque me gusta (el clima) - I prefer (autumn) because I like (the weather)

¿Qué te gusta más (del otoño)? / ¿Qué es lo que te gusta más (del otoño)? - What do you like the most about (autumn)?
Lo que me gusta más (del otoño) es… - What I like the most about (autumn) is…
Month - Mes
tres meses - three months
enero - January
febrero - February
marzo - March
abril - April
mayo - May
junio - June
julio - July
agosto - August
septiembre - September
octubre - October
noviembre - November
diciembre - December
un Junio caluroso - a hot June
un Diciembre frío - a cold December

in June - en junio
in December - en diciembre
el clima - the weather
hace frio - “does cold”
Hace calor/frío/fresco - It’s hot/cold/cool
Hace buen/mal tiempo - The weather is good/bad
Está soleado - It’s sunny
Está lloviendo - It’s raining
Está nevando - It’s snowing
Hay sol - There’s sun
Hay viento - There’s wind
”Hello” en español es “hola - Hello in Spanish is hola
Genial, ¡vamos! - Great, let’s go!

How Are You? - ¿Cómo estás?
Hello, how are you? - Hola, ¿cómo estás?
How are you today? - ¿Cómo estás hoy?
How Are You Doing? - ¿Cómo te va?
Good, and you - Bien, ¿y tú?
Very well, thanks - Muy bien, gracias
Así así - so-so
Más o menos - so-so
Normal - okay
No tan bien - Not so good
No muy bien - Not very well
Mal - bad
Fatal - awful
What's Up - ¿Qué tal?

¿Qué más? - What else?
¿Qué hay? - What is there?/What’s happening?
¿Qué hubo? - What happened/ ¿Qué hay?
¿Qué hay de nuevo? - What’s new?
¿Qué haces? - What are you doing?
Good Morning - ¡Buenos días!
Good Afternoon - ¡Buenas tardes!
Good Evening - ¡Buenas noches!
Mucho gusto - much pleasure/ Nice to Meet You
Encantado/a - glad/ Nice to Meet You
¿Cómo te llamas? - What’s your name?
¿Cuál es tu nombre? - What’s your name?
Mi nombre es… - My name is…
Soy… - I am…
Me llamo… - I am called…
¡Bienvenido!/a - Welcome
Estimado/a Señor/Señora/Señorita - Dear Sir/Mrs./Ms.
Distinguido/a Señor/Señora/Señorita - Distinguished Sir/Mrs./Ms.
Querido/a… - Dear…
A quien corresponda - To Whom it May Concern
Gracias por llamar… - Thank you for calling…
En que le puedo ayudar? - How may I help you?
cordiales saludos - best regards
Dile hola a tu hermana - Say hi to your sister
Diles hola a tus primos - Say hi to your cousins
héroe/protagonista - Hero
el guerrero / la guerrera - Warrior
caballero de brillante armadura - Knight in shining armor
un dios / una diosa - A god or goddess
el semidiós / la semidiosa - Demigod
el soldado - Soldier
pacificadora - Peacekeeper
el campeón / la campeona - Champion
el capitán / la capitana - Captain
el prefesor / la profesora - Professor
los mutantes - Mutants
el vengador / la vengadora - Avenger

Thor, dios del trueno - Thor, God of Thunder
El Soldado de Invierno - The Winter Sollder
maestro jedi - jedi master
mi héroe - my hero
Los Vengadores - The Avengers
Hawkeye - Ojo de Halcón
Viuda Negra - Black Widow
Máquina de Guerra - War Machine
Pantera Negra - Black Panther
La Avispa - The Wasp
miembros del equipo - team members



Identidad secreta - Secret identity
La máscara - Mask
Capa - Cape
Enemigo / Enemiga - Enemy
Origen - Origin
El centro de comando - Command center
El compañero / La compañera - Sidekick
El universo - Universe
La galaxia - Galaxy
La astronave - Spaceship
La batalla - Battle
La guerra - War
Los inmortales - Immortals
El poder - Power
La responsabilidad - Responsibility
El deber - Duty
El villano malvado / La villana malvada - Evil Villain
Rescatar - Rescue
Salvar - Save
Proteger - Protect
Guardar - Guard
Luchar - Fight


cine / película - movie
el libro cómico - comic book
Me encantan las películas de superhéroes - I love superhero movies




ladrar - to bark

El perro seguía ladrando - The dog kept barking
Hubo una fuerte explosión, como ¡PATAPLUM! - There was a loud explosion, like ‘BOOM!’


Pataplum - Boom
Ñeec - Squeak
Zasca - Bang
Zas - Zap
Plaf - Splash
Pum - Pow
Ñam, ñam - Om nom nom
Jajaja - Hahaha
Rin - Ding
Achí - Achoo
Chinchín - Clink
Siseo - Hiss
Tan, tan - Clank, clank
Toc toc - Knock knock
Crag - Crack



Araña - Spidergirl


¿Cómo te llamas? - What’s your name?

Me llamo David. ¿Y tú, cómo te llamas? - My name is David. And you, what is your name?
¡ Hola! Mucho gusto. ¿Cómo te llamas? - Hi ! Nice to meet you. What is your name?

 

¿Puedes ayudarme, por favor? - Could you help me, please?

 

¿De dónde eres? - Where are you from?

No reconozco su acento. ¿De dónde es usted? - I don’t recognize your accent.  Where are you from?

Yo soy de Venezuela. ¿De dónde eres tú? - I’m from Venezuela. Where are you from?

 

¿Hablas inglés? - Do you speak English?
¿Hablas inglés en la casa? - Do you speak English at home?
¿Dónde está el baño? - Where is the washroom?

¿Estás bien? - Are you alright?
Te ves pálido - You look pale
¿Dónde está el baño? - Where’s the toilet?
¿Dónde vives? - Where do you live?
Te llevaré a casa - I will drive you home
¿Cuántos años tienes? - How old are you?
Tengo trenta años - I’m thirty years old
¿Te gusta _______? - Do you like _______?
¿Te gusta este cancion? - Do you like this song?
¿Cuál es tu _______? - Which/What is your ______?
¿Cuál es tu película favorita? - Which/What is your favorite movie?
Cuál es su número de teléfono? - What’s your telephone number?
¿Que haces ________? - What are you doing ______?
¿Que haces esta noche? - What are you doing tonight?
Por qué no? - Why not?
¿Y usted? - And you?
¿Qué hora es? - What time is it?
Es la una de la tarde - It’s one in the afternoon
Disculpe, ¿sabe usted qué hora es? - Excuse me, do you know what time it is?
¿Hay un(a) ______ cerca? - Is there a ______ close by?
¿Hay un banco cerca? - Is there a bank nearby?
¿Como llego a el/la ______? - How do I get to ______?
¿Como llego a el aeropuerto? - How do I get to the airport?
¿Como llego a la playa? - How do I get to the beach?
¿Qué significa esta palabra? - What does this word mean?
Qué tiempo hace? - What’s the weather like?
¿Qué tiempo hace? Hace sol y bastante calor - What’s the weather like? It’s sunny and quite hot
Quiero un/una _______ - I would like a ________
Quiero una cerveza - I would like a beer
Quiero un café - I would like a coffee
¿Cuánto es? - How much is that?
¿Quieren pagar juntos o por separado? - Do you want to pay together or separately?
¿Tienes un/una______? - Do you have a ________?
¿Tienes chicle? - Do you have gum?
¿Dispone usted de información más precisa sobre este tema? - Do you have more precise information on this subject?
¿Quién es? - Who’s there?
¿Comprende? - Do you understand?
¿Adónde va usted? - Where are you going?
Where are you going? You have to leave in ten minutes! - ¿Para dónde vas? ¡Te tienes que ir en diez minutos!
What are you waiting for? - ¡Vamos!
Hola - Hello
¿Qué tal? - How are you?
¿Qué pasa? - What’s up?
¿Cómo te va? - How’re you doing?
Bien - Good
Muy bien - Very good
Así así - So-so
No tan bien - Not so good
¿Y tú? - And you?
Me llamo… - My name is…
¿Cómo te llamas? - What’s your name?
Mucho gusto - Nice to meet you
Placér - A pleasure
Encantado/Encantada - Charmed, Likewise
Nos vemos mañana - See you tomorrow
Hasta luego - See you later
Hasta pronto amigo - See you soon, friend
Gracias - Thank you
De nada - You’re welcome
No hay de qué - No problem
Disculpe - Excuse me
Lo siento - I’m sorry

¿Qué te gusta hacer? - What do you like to do?
Mi pasatiempo favorito es… - My favourite pastime is…
¿Cuáles son tus pasatiempos? - What are your hobbies?
¿Qué haces en tu tiempo libre? - What do you do in your free time?
Me gusta / No me gusta… - I like / I don’t like…
Me encanta… - I love…
¿Qué te gusta leer? - Do you like to read?
¿Que música te gusta? - What music do you like?
Mi favorito es… - My favourite is…
Me gusta ir… - I like going to…
¿En qué trabajas? - What’s your job?
¿Te gusta tu trabajo? - Do you like your job?
Trabajo en… - I work at…




Me encanta café. ¿Quieres ir a tomar una taza? - I love coffee. Wanna go grab a cup?
Trabajo en la escuela. Soy profesor. - I work at the school. I’m a teacher.

¿Cuánto cuesta? - How much is this?
¿Dónde está el baño? - Where’s the bathroom?
¿Qué hora es? - What time is it?
¿Pasa algo? - Is something wrong?
¿Es esto correcto? - Is this right?
¿Me equivocado? - Was I wrong?
¿Me puede ayudar con esto? - Can you help me with this?
¿Puedes traerme … por favor? - Can you bring me … please?
¿Puedo entrar? - Can I come in?
¿Quieres tomar una copa? - Want to grab a drink?
¿A dónde deberíamos ir a comer? - Where should we go to eat?
¿Estás listo? - Are you ready?



¡Cuánto tiempo sin verlo(a)! - Long time no see!
¡Feliz cumpleaños! - Happy birthday!
¡Buena suerte! - Good luck!
¡Alto! - Stop!
¡Salud! - Cheers!
Que te mejores - Get well soon
Buen provecho - Bon appetit
Cuídate - Take care
Felicitaciones - Congratulations
¡Bien hecho! - Well done!
¡Genio! - Genius!
Estupendo - Stupendous, Amazing
Genial - Great, Awesome
¡Increíble! - Incredible!, Impressive!


A ver… - Let’s see…
Pues… - Well…
Bueno… - Well then…
¿Sabes? - You know?
Por supuesto - Of course
Por otra parte… - On another note…
Pero… - But…
De verdad? - Really?
Dios mio - Oh my god
Entonces… - So…
Asi que… - So… About that…

Necesito ayuda - I need help
Llámame cuando llegues - Call me when you arrive
Me voy a casa - I’m going home
Necesito ir a… - I need to go to…
¿Como llego hasta ahí? - How do I get there?
No lo sé - I don´t know
No tengo idea - I have no idea
¿Lo entiendes? - Do you understand?
No entiendo - I don’t understand.
Quiero… - I want…
¿Puede hablar más despacio, por favor? - Can you speak slowly, please?
Hola - Hello
Buenas - Hi (informal)
Buenos días - Good morning
Buen día - Good morning (less common, used in Argentina)
Buenas tardes - Good afternoon
Buenas noches - Good evening
Bienvenido - Welcome
Que gusto de verlo - What a pleasure to see you
¡Buenos días! - Good morning!
¡Bienvenido! - Welcome!
¡Que gusto de verlo! - What a pleasure to see you!
Adiós - Goodbye
Chao - Goodbye
Hasta luego - See you later
Hasta pronto - See you soon
Hasta la vista - See you next time
Hasta mañana - See you tomorrow
Nos vemos - See ya
Buenas noches - Good night
Que tengas un buen día - Have a good day
Que te vaya bien - Have a good day
Cuídate - Take care (informal)
Cuídese - Take care (formal)
¿Qué tal? - How are you?
¿Cómo estás? - How are you?
¿Cómo está usted? - How are you? (usted is more formal than tú)
¿Cómo te va? - How are you?
¿Cómo te ha ido? - How have you been?
¿Qué pasa? - What’s up?
¿Qué cuentas? - What’s up?
Estoy bien, ¿y tú? - I am fine, and you?
Bien, ¿y usted? - Good, and you? (usted is more formal than tú)
Estoy estupendo - I am great
Estoy muy bien - I am very well
Estoy así así - I am okay
Estoy más o menos. - I am so-so
Estoy regular - I am regular
Estoy mal - I feel unwell
Estoy fatal - I am terrible
Estoy un poco cansado - I am a little tired
Estoy exhausto - I am exhausted
Estoy enfermo - I am sick
¿Cuál es tu nombre? - What is your name? (informal)
¿Cuál es su nombre? - What is your name? (formal)
¿Cómo te llamas? - What is your name? (informal)
¿Cómo se llama? - What is your name? (formal)
Me llamo… - My name is…
Mi nombre es… - My name is…
Gracias - Thank you
Muchas gracias - Thank you very much
De nada - You’re welcome
Perdón - I am sorry
Lo siento - I am sorry
Disculpe - Sorry
Mil disculpas - A thousand sorry’s
Por favor - Please
Con permiso - Excuse me
Perdone / Perdona - Excuse me
Señor (Sr.) - Mr.
Señora (Sra.) - Mrs.
Señorita (Srta.) - Miss
¿De dónde eres? - Where are you from? (informal)
¿De dónde es? - Where are you from? (formal)
¿De dónde son? - Where are you from? (plural)
¿Dónde vives? - Where do you live?
Yo soy de… - I am from…
Somos de… - We are from…
¿Qué…? - What…?
¿Cómo…? - How…?
¿Cuándo…? - When…?
¿Cuánto…? - How much…?
¿Dónde…? - Where…?
¿Quién…? - Who…?
¿Por qué…? - Why…?
¿Cuál? - Which…?
¿Qué hora tienes? - What time is it?
¿Qué edad tienes? - How old are you?
¿Cuántos años tienes? - How old are you?
¿Cuándo es tu cumpleaños? - When is your birthday?
¿Cuánto cuesta eso? - How much is that?
¿Quién eres? - Who are you?
¿Qué es esto? - What is this?
¿Cuál es la fecha de hoy? - What is the date today?
¿Entiende? - Do you understand?
¿Comprende? - Do you understand?
¿Por qué te gusta? - Why do you like it?
¿Hablas inglés? - Do you speak English?
¿Dónde está el baño? - Where is the bathroom?
Necesito ayuda - I need help
Sí - Yes
Claro - Of course
Siempre - Always
A veces - Sometimes
Tal vez - Maybe
Nunca - Never
Buena suerte - Good luck
Buen viaje - Have a good trip
Buen provecho - Enjoy your meal
Diviértete - Have fun
Salud - Cheers / Bless you (when someone sneezes)
Muy bien - Well done
Felicitaciones - Congratulations
Feliz Cumpleaños - Happy Birthday
Feliz Navidad - Merry Christmas
Feliz Año Nuevo - Happy New Year
Siento interrumpir - I am sorry to interrupt
No se preocupe - Don’t worry
Te amo - I love you
Con mucho amor - With much love
Hola - Hello
Adiós - Goodbye
Por favor - Please
Gracias - Thank you
Lo siento - Sorry
Salud - Bless you (after someone sneezes)
¿Quién? - Who?
¿Qué? - What?
¿Por qué? - Why?
¿Dónde? - Where?
Buenos días - Good morning
Buenas tardes - Good afternoon
Buenas noches - Good evening
Hola, me llamo Juan - Hello, my name is John
Me llamo… - My name is…
¿Cómo te llamas? - What’s your name?
Mucho gusto - Nice to meet you
¿Cómo estás? - How are you?
Estoy bien, gracias - I’m well thank you
Disculpa. ¿Dónde está el baño? - Excuse me. Where is the bathroom?
¿Qué hora es? - What time is it?
¿Cómo se dice ‘concert’ en español? - How do you say ‘concert’ in Spanish?
Estoy perdido/a - I am lost
Yo no comprendo - I do not understand
Por favor, habla más despacio - Would you speak slower, please
Te extraño - I miss you
Te quiero - I love you
Despacito - Slowly
Mi Gente - My people
Bailando - Dancing
Bésame mucho - Kiss me a lot
Gasolina - Gasoline
La Bicicleta - The bicycle
Sin Pijama - Without pajamas
Bella - Beautiful
Clandestino - Clandestine, secret
No Me Acuerdo - I don’t remember
¡Buenos días, Estela! - Good morning, Estela!
Buenos días, Esteban. ¿Cómo estás? - Good morning, Esteban. How are you?
Bien, ¿y tú? - Well, how about you?
Como siempre. - As always.
Buenos días - good morning
Buenas tardes - good afternoon
Buenas noches - good evening
Hola - hello
¿Cómo estás? - How are you?
¿Cómo está usted? - How are you?(more formal)
¿Cómo te va? - How's it going?
¿Cómo has ido? - How've you been?
¿Qué tal? - What's up?
¿Qué pasa? - What's happening?
¿Qué haces? - What are you doing?
Más o menos - Okay, so-so
Mal - Bad
Todo bien - All good

¿Qué haces? - What are you doing? 
Nada, nada. Estoy enferma. - Nothing, nothing. I'm sick. 
Ah, lo siento. - Ah, sorry. 
¿Y tú? ¿Cómo te va? ¿Bien? - How about you? How are you doing? Well? 
Sí, todo bien. - Yes, all right. 
Lo siento. - I'm sorry. 
Te amo. - I love you. 
Necesito ayuda. - I need help 


adiós - goodbye 

chao - goodbye 

hasta luego - later 

hasta pronto - see you soon 

hasta la vista - until we see each other again 

nos vemos - see ya 

¡Buena suerte! - Good luck! 

¡Diviértete! - Have fun! 

¡Con mucho amor! - Lots of love! 

¡Buen viaje! - Have a good trip! 

¡Buen provecho! - Enjoy your meal! 

¡Salud! - Cheers! 

¡Muy bien! - Well done! 

¡Cuídate! - Take care! 

¡Cuídese! - Take care! (formal) 

Los mejores deseos para… - Best wishes to… 

¡Felicitaciones! - Congratulations! 

¡Bienvenidos! / ¡Bienvenidas! - Welcome! 

¡Feliz Cumpleaños! - Happy Birthday! 

¡Salud! - Bless you! 

¡Feliz Navidad! - Merry Christmas! 

¡Feliz Año Nuevo! - Happy New Year! 


¡Lo siento! - I'm sorry! 

Perdón, pero dónde están los baños? - Excuse me, but where are the toilets? 

¡Perdón! - Excuse me! 


¡Mil disculpas! - A thousand sorry's! 


Siento interrumpir. - Sorry to interrupt. 


Con permiso. - Excuse me. 


¡No se preocupe! - No worries! 


See you soon! - ¡Hasta pronto! 









Why? (for what purpose) - ¿Para qué? 

Who? - ¿Quién? 

What? - ¿Cómo? ¿Qué? 

Which? - ¿Cuál? 

Seriously? - ¿En serio? 


What time is it? - ¿Qué hora es? 

It is 1 o’clock - Es la una* 

It is 8 o’clock - Son las ocho 

It is half past five - Son las cinco y media 

It is quarter to eleven - Son las once menos cuarto 


I’m lost - Estoy perdido(a) 

Where is the bus station/bank/supermarket? - ¿Dónde está la estación de autobuses / banco / supermercado? 

It is straight ahead - Está más adelante. 

It is to the left / to the right - Está a la izquierda / a la derecha 

It is around the corner - Está a la vuelta 


I would like to reserve a table for five people - Quisiera reservar una mesa para cinco personas 

A table for two please - Una mesa para dos, por favor 

The menu, please - La carta, por favor 

I would like - … Quisiera… 

Can you bring me a_____, please? - ¿Me trae un(a)_____, por favor? 

Can I ask you for a_____? - ¿Le pido un(a)_____? 

A beer / a glass of wine, please - Una cerveza / una copa de vino, por favor 

I am hungry - Tengo hambre 

I am thirsty - Tengo sed 

At what time does the bus / train arrive? - ¿A qué hora llega el tren / el autobús? 

A single ticket for_____, please - Un billete sencillo / pasaje de ida para_____, por favor 

A round trip ticket for_____, please - Un billete / pasaje de ida y vuelta para_____, por favor 

Have a safe journey! - ¡Buen viaje! 

Have a great holiday! - ¡Felices vacaciones! 



Happy Easter - ¡Felices Pascuas! 

Happy Christmas - ¡Feliz Navidad! 

Happy New Year - ¡Feliz Año Nuevo! 

Happy Birthday - ¡Feliz cumpleaños! 

Cheers! - ¡Salud! 

Congratulations! - ¡Felicitaciones! 


Where’s the bathroom? - ¿Dónde está el baño? 

Shall we go for a drink? - ¿Vamos a tomar una copa? 

How much does this cost? - ¿Cuánto cuesta? 

Don’t worry - ¡No te preocupes! 

Good luck! - ¡Suerte! 

Sorry! - ¡Lo siento! 


Do you speak English? - ¿Hablas inglés? 

Thank you - Gracias 

You’re welcome - De nada 

Don’t worry about it - No pasa nada 

I don’t understand - No entiendo 

No problem - No hay problema 

That’s a shame - Es una lástima 

I don’t know - No sé 

Quick! - ¡Rápido! 



¡Mucho tiempo sin verte! - Long time no see! 
¡Cuánto tiempo sin verte! - Long time no see! (alternative) 
¡Qué alegría verte! - How nice to see you! 
¡No me lo puedo creer! - I can’t believe it! 
¿Qué cuentas? - Literally: “What do you tell?” (asking for news) 
¿Qué hay de nuevo? - What’s new? 

Soy de Inglaterra. - I’m from England. 
Soy inglés. - I’m English. 
Vivo en Australia. - I live in Australia. 
Tengo 27 años. - Literally 'I have 27 years'. 
Soy casado(a). - I’m married. 
Soy soltero(a). - I’m single. 


Soy profesora de yoga. - I’m a yoga teacher. 
Soy estudiante. - I’m a student. 
Estoy jubilado/retirado. - I’m retired. 
Estudio historia. - I study history (for example, as a degree) 
Estoy estudiando español. - I’m studying Spanish (temporary, doing it right now) 
Trabajo aquí. - I work here. 
Trabajo a tiempo parcial. - I work part-time. 
Estoy buscando trabajo. - I’m looking for a job. 


¿Cómo te llamas? - What’s your name? 
¿De dónde es? - Where are you from? 
¿Dónde vives? - Where do you live? 
¿Cuáles son tus pasatiempos? - What are your hobbies? 
¿A qué te dedicas? - What do you dedicate yourself to (what’s your job?) 
¿Cuál es tu trabajo/ocupación? - What’s your job/occupation? 

Porque me encanta la cultura española. - Because I love Spanish culture. 
Porque mi compañero(a)/pareja es venezolano. - Because my partner is Venezuelan. 
Porque mis abuelos eran mexicanos. - Because my grandparents were Mexican. 
Porque quiero entender la música en español. - Because I want to understand music in Spanish. 


Sólo hablo un poco. - I only speak a little bit. 
Entiendo bien el español. - I understand Spanish well. 
Me cuesta hablar con fluidez. - It’s hard for me to speak fluently. 
Puedo escribir/leer/hablar muy bien. - I can write/read/speak very well. 
Todavía tengo que hablar despacio. - I still have to speak slowly. 
Prefiero hablar que escribir. - I prefer talking than writing. 

Soy principiante. - I’m a beginner. 


Me gusta escuchar música. - I like listening to music. 

Me gustan las series de terror. - I like horror series. 

Uno de mis pasatiempos es escribir. - One of my hobbies is writing. 
Me encanta el cine español. - I love Spanish cinema. 
Me encantan los libros de fantasía. - I love fantasy books. 


¿Te gustaría ir conmigo? - Would you like to come with me? 
¿Te gustaría ir al cine mañana? - Would you like to go to the movies tomorrow? 
¿Quieres tomar un café? - Do you want to grab some coffee? 
¿Te gustaría salir conmigo? - Would you like to go out with me? (romantic undertones) 

Estoy estresado(a). - I’m stressed out. 
Estoy triste. - I’m sad. 
Estoy muy nervioso(a). - I’m very nervous. 
¡Estoy feliz! - I’m happy! 
Estoy decepcionado. - I’m disappointed. 
Me siento mal. - I feel bad. 
Tengo miedo. - I’m scared. 

No entiendo. - I don’t understand. 
No lo sé. - I don’t know. 
No tengo idea. - I have no idea. 
No tengo ni idea de qué hacer. - I have no clue what to do. 
Estoy perdido(a). - I’m lost. 
Estoy confundido(a). - I’m confused. 
No estoy seguro(a). - I’m not sure. 
¿Puede(s) hablar más despacio, por favor? - Could you please speak slowly? 

¡Buen viaje! - Have a nice trip! 
¡Buena suerte! - Good luck! 



Muchas gracias! - Thanks a lot! 
¡Muchísimas gracias! - Thank you so much! 
Eres/Es muy amable. - It’s so kind of you. (The first is informal, the second is a formal option.) 

Estoy muy agradecido(a). - I’m really thankful. 
Te lo agradezco. - I thank you for that. 

¡Perdón! - Pardon, excuse me, sorry. 
Disculpe(a). - Sorry. (Use the letter 'a' instead of 'e' to make it informal) 
Lo siento. - I’m sorry. 
Lo siento mucho/muchíssimo. - I’m so sorry. 
Me equivoqué. - I was wrong. 

¿Nos trae la carta, por favor? - Can you bring us the menu, please? 
¿Qué me/nos recomienda? - What do you recommend me/us? 
Voy a tomar un té, gracias. - I’ll take a tea, thanks. 
Para mí, las enchiladas. - I’ll have the enchiladas. 
Tenéis pulpo a la gallega? - Do you have octopus a la gallega? 
¿Nos puede traer la cuenta? - Can you bring us the check? 

¿Así que estás pensando viajar mañana? - So you’re thinking of traveling tomorrow? 
No tenéis paella? Pues, entonces un bocadillo. - You don’t have paella? Well, then a sandwhich. 
Pues…no sé qué hacer. - Well... I don’t know what to do. 
A ver. Que quieres hacer hoy? - Let’s see. What do you want to do today? 
No quiero ir con él. Es que me siento mal por lo que pasó. - I don’t want to go with him. It’s just that I feel bad about what happened. 


 ich - I
 sie - you
 das - the
 ist - is
 du - you
 nicht - Not
 die - the
 und - and
 es - it
 der - of the
 was - What
 wir - we
 er - he
 zu - to
 ein - one
 in - in
 mit - With
 mir - me
 den - the
 wie - how
 ja - Yes
 auf - on
 mich - me
 so - so
 eine - a
 aber - but
 hier - here
 sind - are
 für - For
 von - from
 haben - to have
 hat - Has
 dich - you
 war - was
 dass - that
 wenn - if
 an - on
 da - there
 nein - No
 bin - am
 noch - yet
 dir - to you
 nur - just
 habe - have
 ihr - their
 sich - themselves
 einen - one
 uns - us
 hast - have
 dem - the
 ihn - him
 aus - out
 kann - can
 gut - Good
 auch - also
 schon - beautiful
 jetzt - now
 im - in the
 sein - be
 mal - times
 dann - then
 meine - my
 als - when
 um - around
 mein - my
 doch - but
 bist - are
 wird - becomes
 keine - no
 nach - to
 alles - everything
 man - you
 lch - l
 oder - or
 nichts - Nothing
 wo - Where
 werden - will
 weiß - White
 will - want
 geht - going
 mehr - more
 warum - Why
 hab - hab
 ihnen - them
 bitte - Sorry
 etwas - something
 bei - at
 muss - got to
 los - Come on
 immer - always
 oh - Oh
 vor - in front
 mann - man
 zum - to the
 wieder - again
 sehr - very
 sehen - see
 sagen - say
 also - so
 gehen - go
 wer - who
 alle - all
 denn - because
 machen - do
 ihm - him
 können - can
 diese - this
 komm - come over
 danke - Thank you
 euch - to you
 einem - one
 tun - to do
 einer - one
 gibt - gives
 nie - never
 über - about
 des - of
 soll - should
 kein - no
 vielleicht - perhaps
 weg - path
 deine - yours
 wissen - knowledge
 am - at the
 werde - will
 leben - Life
 kommen - come
 kommt - coming
 müssen - have to
 viel - a lot of
 wirklich - for real
 frau - Mrs
 hatte - would have
 heute - today
 ok - OK
 willst - want
 dein - your
 würde - would
 tut - does
 ihre - your
 ganz - all
 zeit - time
 bis - to
 wollen - want
 einfach - easy
 macht - power
 gott - God
 zurück - back
 nun - now
 weil - because
 damit - in order to
 dieser - this
 kannst - can
 wurde - has been
 gesagt - told
 wäre - would
 seine - his
 wollte - wanted to
 na - n / A
 zwei - two
 hallo - Hello
 meinen - mean
 sicher - for sure
 weißt - know
 sir - sir
 morgen - morning
 ab - from
 leid - suffering
 lassen - to let
 hey - hey
 waren - were
 zur - to
 lass - let
 geld - money
 liebe - love
 tag - Day
 leute - People
 vater - father
 genau - I agree
 sagte - said
 hätte - would have
 mach - mach
 raus - Out
 durch - by
 lhr - LHR
 könnte - could
 schön - beautiful
 wohl - well
 gesehen - seen
 keinen - no
 klar - clear
 glaube - faith
 her - here
 okay - OK
 mutter - mother
 sag - say
 dieses - this
 nacht - night
 besser - better
 ohne - without
 unsere - our
 jemand - someone
 sei - be
 reden - talk
 gerade - straight
 ob - if
 gehört - heard
 geh - go
 möchte - would like to
 dort - there
 sagt - says
 anderen - other
 gemacht - made
 hör - hear
 sollte - should
 selbst - self
 diesen - this
 gute - quality
 dachte - thought
 paar - pair
 weiter - continue
 vom - from
 ins - in the
 herr - Mr
 wirst - will
 geben - give
 ordnung - order
 passiert - happens
 meiner - mine
 lange - Long
 gar - at all
 mädchen - girl
 meinem - my
 hören - Listen
 sieht - looks
 daß - that
 guten - good
 hin - down
 gleich - equal
 ach - Oh
 diesem - this
 freund - friend
 seit - since
 welt - world
 musst - must
 hause - home
 natürlich - Naturally
 abend - Eve
 angst - fear
 drei - three
 recht - Law
 richtig - right
 viele - lots
 deinen - your
 finden - Find
 wieso - how so
 bleiben - stay
 tot - dead
 unter - under
 junge - Boy
 haus - House
 rein - purely
 essen - eat
 davon - from that
 nehmen - to take
 sollen - should
 helfen - help
 schnell - fast
 machst - doing
 eines - one
 andere - other
 unser - our
 warte - wait
 wegen - because of
 menschen - People
 stimmt - Right
 dafür - for this
 darf - may
 kinder - children
 genug - enough
 sonst - otherwise
 ganze - whole
 scheiße - crap
 he - hey
 halt - stop
 sollten - should
 zusammen - together
 gegen - versus
 jahre - years
 erst - first
 denke - think
 steht - stands
 habt - have
 verdammt - damned
 moment - moment
 ihren - their
 glauben - believe
 bringen - bring
 gib - give
 seid - are
 niemand - nobody
 warten - waiting
 brauchen - need
 lhre - Their
 fragen - ask
 arbeit - job
 wann - when
 heißt - called
 sprechen - speak
 siehst - see
 jeder - everyone
 kam - came
 sofort - immediately
 getan - done
 fertig - finished
 kennen - know
 einmal - once
 sohn - son
 halten - hold
 dabei - there
 hatten - had
 männer - Men
 kind - child
 jahren - years
 beim - at the
 seinen - his
 mag - like
 komme - get
 allein - alone
 bevor - before
 bruder - brothers
 musik - music
 wahr - true
 konnte - could
 lieber - Dear
 uhr - clock
 kopf - head
 sache - thing
 gern - gladly
 denken - think
 brauche - need
 ende - the end
 später - later
 gehe - go
 vergessen - to forget
 runter - down
 fahren - drive
 sieh - look
 warst - were
 stadt - city
 namen - names
 problem - problem
 sehe - see
 augen - eyes
 gab - gave
 dank - thanks
 sage - legend
 würden - would
 eins - one
 daran - it
 dazu - to
 egal - no matter
 frage - question
 weit - far
 familie - family
 sterben - to die
 könnten - could
 jungs - guys
 jeden - each
 minuten - minutes
 verstehe - understand
 deiner - yours
 hilfe - help
 beide - both
 bald - soon
 all - Alles
 deinem - your
 nimm - take
 kleine - small
 baby - infant
 glück - happiness
 freunde - friends
 wusste - knew
 verrückt - insane
 ruhig - calm
 land - country
 darüber - about that
 gefunden - found
 tür - door
 mache - make
 seiner - his
 wasser - water
 auto - automobile
 sah - saw
 dies - this
 eigentlich - actually
 eure - your
 ruhe - quiet
 stehen - stand
 hand - hand
 ihrer - of their
 frauen - women
 meinst - mean
 töten - kill
 fall - case
 ging - went
 polizei - police
 vorbei - past
 krieg - war
 je - ever
 darauf - thereon
 vielen - a lot of
 letzte - latest
 lang - long
 bisschen - little
 dran - tuned
 hoch - high
 kenne - know
 fast - nearly
 ganzen - all
 schau - show
 sogar - even
 spielen - play
 wurden - were
 hinter - Behind
 teufel - devil
 dinge - things
 keiner - none
 mama - mummy
 spät - late
 bekommen - to get
 oben - above
 name - surname
 hört - hears
 hätten - had
 bereit - ready
 drin - in it
 neue - new
 kommst - coming
 woher - from where
 ihrem - their
 wagen - dare
 arbeiten - work
 verstehen - understand
 jahr - year
 tod - death
 etwa - approximately
 echt - real
 seinem - his
 geschichte - story
 bringt - brings
 braucht - need
 treffen - to meet
 toll - Great
 gerne - with pleasure
 draußen - outside
 fünf - five
 lhnen - wages sent
 zimmer - room
 job - job
 nett - kind
 weiss - white
 the - the
 spiel - game
 verstanden - understood
 miss - ill
 große - size
 anders - different
 sorgen - to care
 welche - which
 einzige - single
 art - kind
 liegt - lies
 verloren - lost
 ahnung - idea
 vier - four
 alter - Age
 gekommen - came
 jemanden - someone
 gehst - going
 woche - week
 kerl - Guy
 gestern - yesterday
 wenig - little
 bestimmt - certainly
 kurz - short
 überhaupt - at all
 finde - find
 darum - therefore
 tage - days
 erste - first
 schwester - sister
 schwer - heavy
 suchen - search
 bleibt - remains
 tochter - daughter
 typ - Type
 guter - goods
 gewesen - been
 grund - reason
 zeigen - demonstrate
 film - Movie
 schlecht - bad
 schatz - sweetheart
 deshalb - therefore
 holen - to fetch
 hoffe - hope
 tu - tu
 sagst - say
 bett - bed
 muß - got to
 seite - page
 gefällt - like
 eben - just
 lasst - leaves
 gefallen - like
 stunden - hours
 herz - heart
 wohin - where
 trinken - drink
 letzten - last
 mensch - human
 ersten - first
 unten - below
 gesicht - face
 versuchen - to attempt
 wort - word
 denen - to those
 verlassen - leave
 endlich - Finally
 denkst - think
 solltest - should
 schlafen - sleep
 ziemlich - quite
 arsch - ass
 manchmal - sometimes
 fest - firmly
 wiedersehen - meet again
 beste - best
 kleinen - small
 kriegen - Obtain
 läuft - running
 wahrheit - truth
 zwischen - between
 niemals - No way
 bring - bring
 unserer - our
 nehme - take
 allen - all
 während - while
 glaubst - think
 ding - thing
 idee - idea
 wollten - wanted to
 lässt - leaves
 musste - had to
 sachen - stuff
 ah - Ah
 bleib - permanent
 kleiner - smaller
 euer - your
 nummer - number
 sondern - rather
 frei - free
 oft - often
 entschuldigung - Excuse me
 wen - whom
 ernst - serious
 alte - old
 schule - school
 ort - place
 erzählt - tells
 anderes - other
 new - new
 alt - old
 chance - chance
 einige - some
 bloß - just
 entschuldigen - to apologize
 setzen - put
 bedeutet - means
 erzählen - tell
 feuer - Fire
 pass - passport
 würdest - would
 schuld - fault
 dad - dad
 getötet - killed
 jungen - boys
 drauf - it
 platz - place
 wären - would
 tust - do
 papa - father
 spaß - fun
 versucht - tries
 wichtig - important
 besten - best
 sorge - worry
 kennst - know
 lst - lst
 hund - dog
 blut - blood
 hierher - here
 reicht - enough
 alten - old
 wär - would
 glücklich - happy
 brauchst - need
 hände - hands
 unseren - our
 hättest - had
 kaum - barely
 rede - speech
 zuerst - first
 stellen - put
 beiden - both
 falls - if
 früh - early
 wartet - waiting
 neuen - new
 sechs - six
 jede - each
 freundin - girlfriend
 lieben - love
 teil - part
 stunde - hour
 langsam - slowly
 scheint - seems
 früher - earlier
 großen - huge
 waffe - weapon
 telefon - phone
 himmel - sky
 lernen - learn
 äh - um
 zehn - ten
 gedacht - thought
 willkommen - welcome
 frank - frank
 luft - air
 licht - light
 hol - hol
 seht - look
 menge - quantity
 voll - full
 überall - all over
 tat - did
 erde - earth
 gebe - give
 ruf - call
 möglich - possible
 spricht - speaks
 könig - king
 eltern - parents
 außer - except
 nächsten - next
 ziehen - pull
 wahrscheinlich - probably
 wollt - want
 dürfen - allowed to
 nennen - call
 falsch - not correct
 ehrlich - honest
 irgendwas - anything
 nächste - next
 wochen - weeks
 meines - mine
 herren - Men's
 straße - road
 hm - Hm
 heiraten - marry
 stück - piece
 sam - sam
 doktor - doctor
 neues - new
 gegeben - given
 kaffee - coffee
 möchten - want
 verstehst - understand
 krank - ill
 danach - after that
 geworden - become
 arzt - doctor
 schaffen - create
 stelle - Job
 groß - big
 wem - whom
 hölle - hell
 völlig - completely
 weh - sore
 fehler - error
 drüben - over there
 harry - harry
 büro - office
 captain - captain
 rufen - call
 irgendwie - somehow
 eigenen - own
 probleme - problems
 allem - all
 wert - value
 tue - do
 buch - book
 lebt - lives
 scheiß - shit
 kaufen - to buy
 erinnern - recall
 direkt - directly
 laufen - to run
 george - George
 trotzdem - Nevertheless
 schreiben - write
 still - quiet
 kleines - small
 körper - body
 retten - save
 fand - found
 unserem - our
 solche - such
 denkt - thinks
 könnt - can
 ln - ln
 alleine - alone
 sitzen - to sit
 höre - hear
 millionen - millions
 tagen - meet
 york - York
 suche - search
 vergiss - forget
 gutes - good
 leider - Unfortunately
 sagten - said
 typen - types
 schlüssel - key
 tragen - carry
 mund - mouth
 worden - been
 hält - keeps
 zwar - though
 bereits - already
 leicht - light
 spielt - plays
 schiff - ship
 hörst - hear
 onkel - uncle
 glaub - think
 verlieren - to lose
 großer - greater
 klingt - sounds
 irgendwo - somewhere
 zukunft - future
 kennt - knows
 plan - plan
 schöne - lovely
 verschwinden - disappear
 interessiert - Interested
 waffen - weapons
 kämpfen - fight
 party - party
 bringe - bring
 hinten - behind
 setz - translated
 kumpel - Dude
 wolltest - wanted
 boden - ground
 zeig - show
 böse - evil
 halte - think
 gegangen - went
 richtige - right one
 liebling - Darling
 acht - eight
 froh - glad
 machte - made
 jedes - each
 hart - hard
 vorsichtig - careful
 joe - joe
 versuch - attempt
 getroffen - met
 mögen - to like
 zeug - stuff
 damals - back then
 stimme - voice
 gefühl - feeling
 leuten - people
 lesen - read
 mist - damn
 zug - train
 hattest - had
 verdammte - damned
 geschäft - business
 arschloch - asshole
 rest - rest
 mom - mom
 de - de
 aufhören - stop
 könntest - could
 klasse - great
 lasse - leave
 boss - boss
 erklären - to explain
 fliegen - to fly
 laden - load
 stolz - proud
 stark - strongly
 hasse - hate
 wohnung - flat
 gebracht - brought
 fort - on
 genauso - just like that
 mai - May
 entschuldige - Excuse me
 besonders - especially
 seien - are
 tages - day
 weniger - fewer
 zieh - pulling
 ärger - trouble
 fühle - feel
 schauen - watch
 schneller - more quickly
 denk - thinking
 geschafft - made
 verzeihung - forgiveness
 daddy - daddy
 charlie - charlie
 tja - tja
 schicken - send
 erwartet - expected
 nachricht - message
 findet - finds
 funktioniert - is working
 werd - expectant
 stand - was standing
 traum - dream
 sollst - shalt
 fallen - fall
 wovon - About what
 gefängnis - jail
 aufs - onto
 hotel - hotel
 krankenhaus - hospital
 umbringen - kill
 fällt - falls
 redest - talking about
 weisst - know
 gottes - god
 total - total
 fenster - window
 lebens - life
 glaubt - believes
 vorstellen - to introduce
 and - and
 sinn - sense
 ändern - to change
 versuche - tries
 heraus - out
 heißen - be called
 tanzen - to dance
 monate - months
 lachen - laugh
 kampf - struggle
 nachdem - after this
 arm - poor
 wenigstens - at least
 geschehen - done
 hörte - heard
 kamen - came
 passt - fit
 liebt - loves
 folgen - consequences
 eher - rather
 gefragt - asked
 dumm - stupid
 deswegen - therefore
 solange - as long as
 lustig - funny
 starb - died
 unmöglich - impossible
 bild - image
 boot - boat
 genommen - took
 dame - lady
 führen - to lead
 unglaublich - incredible
 vertrauen - trust
 verletzt - injured
 passieren - happen
 cool - cool
 meisten - most
 tom - tom
 vorher - previously
 plötzlich - suddenly
 angerufen - called
 bewegung - Move
 kümmern - To take care of
 rüber - over
 komisch - funny
 paris - Paris
 super - Super
 sieben - seven
 erinnere - remember
 lhrer - lhrer
 ne - ne
 rufe - call
 bier - beer
 augenblick - moment
 herum - around
 kalt - cold
 wunderbar - wonderful
 großartig - Great
 wahl - choice
 auge - eye
 fahr - driving
 konnten - could
 länger - longer
 tisch - table
 rum - rum
 antwort - answer
 jedem - each
 david - David
 arme - poor
 umgebracht - killed
 schlimm - bad
 verheiratet - married
 steh - stand
 anrufen - call
 worte - worte
 möchtest - want
 vorsicht - Attention
 hilf - help
 bezahlt - paid
 voller - full of
 links - Left
 sekunden - seconds
 werdet - will
 liegen - lie
 fühlen - feel
 nochmal - again
 armee - army
 bitten - ask
 gestorben - died
 finger - finger
 meinung - opinion
 nimmt - takes
 zahlen - numbers
 sicherheit - safety
 verkaufen - to sell
 gesprochen - spoken
 wozu - what for
 müde - tired
 seele - soul
 welcher - which one
 schießen - shoot
 michael - Michael
 arbeite - working
 sitzt - seated
 to - to
 sonne - Sun
 damen - Ladies
 laß - let
 bezahlen - pay
 selber - himself
 reise - travel
 team - team
 sobald - as soon as
 meister - master
 majestät - majesty
 anfang - Beginning
 fangen - to catch
 außerdem - Furthermore
 geschrieben - written
 sex - sex
 hole - get
 kriegt - gets
 yeah - yeah
 magst - like
 laut - loud
 klappe - flap
 amerika - America
 nahm - took
 niemanden - anyone
 gefährlich - dangerous
 mörder - killer
 gewinnen - win
 gedanken - thoughts
 obwohl - even though
 monat - month
 mike - mike
 arbeitet - is working
 herrn - Mr
 behalten - to keep
 legen - lay
 bob - bob
 person - person
 herzen - heart
 brief - letter
 präsident - president
 rechts - right
 anfangen - to begin
 schluss - Enough
 hübsch - pretty
 don - Don
 gewonnen - won
 wisst - know
 versprochen - promised
 chef - boss
 findest - find
 perfekt - Perfect
 schlagen - beat
 tatsächlich - indeed
 pferd - horse
 dagegen - on the other hand
 erfahren - Experienced
 monsieur - monsieur
 mord - murder
 paul - paul
 nähe - neighborhood
 nötig - necessary
 aller - all
 offen - open
 wach - awake
 singen - to sing
 beispiel - example
 ais - ais
 sowieso - anyway
 jedenfalls - in any case
 schwein - pig
 bank - Bank
 ziel - target
 klein - small
 verdient - earned
 band - tape
 geist - ghost
 ma - ma
 max - Max
 neu - New
 schreit - screams
 anwalt - lawyer
 monaten - months
 show - show
 heim - home
 führt - leads
 lauf - run
 ehre - honor
 unterwegs - on road
 gelernt - learned
 minute - minute
 reich - rich
 wunder - wonder
 opfer - Victim
 erzähl - tell
 bekannt - known
 hau - hau
 haut - skin
 weder - neither
 rücken - move
 bekommt - gets
 peter - Peter
 jemals - ever
 partner - partner
 zieht - attracts
 nase - nose
 gefahr - danger
 regeln - regulate
 absolut - absolutely
 tief - deep
 flugzeug - plane
 befehl - command
 geschickt - cleverly
 wette - bet
 nennt - is called
 jung - young
 sucht - investigated
 gehabt - had
 geboren - born
 rolle - role
 schönen - beautiful
 holt - get
 erinnerst - remember
 heiße - name is
 kraft - force
 lhrem - lhrem
 lacht - laughs
 bar - bar
 richtung - direction
 tasche - bag
 schlag - blow
 professor - professor
 steckt - plugged
 ständig - constantly
 erwischt - Caught
 stell - Vice
 schrecklich - dreadful
 verschwinde - disappear
 weise - wise
 schlimmer - worse
 ließ - was
 frieden - peace
 verliebt - in love
 bleibe - stay
 ehe - marriage
 kriege - wars
 näher - closer
 gelesen - read
 dahin - then
 wofür - for what
 dauert - lasts
 neben - Next
 gold - gold
 raum - room
 benutzt - used
 welches - which
 regierung - government
 fährt - moves
 volk - people
 fernsehen - watch TV
 zeiten - times
 toten - kill
 achtung - Danger
 karte - map
 hunger - hunger
 diesmal - this time
 preis - price
 benutzen - to use
 scheisse - Shit
 hilft - help
 geschenk - gift
 hoffentlich - hopefully
 manche - some
 ansehen - look at
 kriegst - get
 lage - location
 wünschte - wish
 fehlt - is missing
 willen - sake
 bescheid - decision
 heiß - hot
 kamera - camera
 gleiche - same
 ruft - calls
 unfall - accident
 ans - ans
 bullen - cops
 szene - scene
 gericht - dish
 gerettet - rescued
 schlaf - sleep
 schicksal - fate
 gesetz - law
 fürs - for
 verkauft - sold
 bewegen - move
 leiche - corpse
 soldaten - soldiers
 geburtstag - birthday
 lebe - live
 darfst - allowed to
 ewig - forever
 schade - what a shame
 witz - joke
 müsste - should
 erwarten - expect
 aiies - aiies
 ihres - their
 fahre - ride
 ähm - um
 pro - Per
 traurig - Sad
 hältst - hold
 doc - doc
 jemandem - somebody
 setzt - puts
 gesellschaft - society
 punkt - Point
 freiheit - freedom
 jimmy - Jimmy
 darin - in this
 brachte - brought
 weile - while
 jawohl - Yes
 dasselbe - the same thing
 maul - mouth
 zeigt - shows
 taxi - taxi
 erreichen - to reach
 redet - talks
 foto - photo
 gekauft - Bought
 meer - sea
 sheriff - sheriff
 liebst - love
 unbedingt - absolutely
 aussehen - look
 tante - aunt
 drehen - rotate
 stirbt - dies
 bord - shelf
 kirche - church
 tee - tea
 of - of
 erledigt - done
 wein - Wine
 weihnachten - Christmas
 irgendwann - Sometime
 billy - billy
 euren - your
 brauch - custom
 hochzeit - wedding
 dorf - Village
 sagtest - told
 james - james
 lady - lady
 lust - lust
 kontrolle - control
 tolle - amazing
 beine - legs
 hut - cap
 wiii - wiii
 hoffnung - hope
 firma - company
 me - me
 lügen - lying
 sergeant - sergeant
 fürchte - fear
 kaputt - broken
 bekam - got
 is - is
 nachrichten - news
 ball - ball
 haare - hair
 tschüss - bye
 seltsam - strange
 vergnügen - pleasure
 sauber - clean
 bill - bill
 zuhause - At home
 anderer - another
 zeichen - character
 herein - in
 liste - list
 haltet - think
 normal - normal
 see - lake
 schätze - wealth
 bewegt - emotional
 wussten - knew
 blick - view
 naja - well
 gesucht - searched
 gestohlen - stolen
 vorne - ahead
 jim - jim
 kindern - children
 frag - question
 bleibst - stay
 nachts - at night
 neun - nine
 nämlich - namely
 wunderschön - beautiful
 stecken - stick
 großes - great
 freut - pleased
 weitere - Further
 gehören - belong
 schwöre - swear
 nervös - nervous
 hals - neck
 gearbeitet - worked
 eigene - own
 glas - Glass
 versteckt - hidden
 feind - enemy
 schönes - beautiful
 verzeihen - forgive
 öffnen - to open
 meter - meter
 drogen - drugs
 schöner - more beautiful
 nehmt - take
 madame - madame
 mary - mary
 süß - sweet
 entscheidung - decision
 erschossen - shot
 verändert - changed
 la - la
 wind - wind
 ray - ray
 wohnen - live
 schuhe - Shoes
 interessant - Interesting
 übrigens - by the way
 letzter - last
 müsst - need
 nächstes - next
 schaut - looks
 armen - poor
 verstand - understanding
 verraten - betray
 besuch - visit
 beweise - proofs
 sekunde - second
 polizist - police officer
 meint - means
 fur - For
 insel - island
 beweisen - to prove
 antworten - reply
 fotos - photos
 passen - fit
 werfen - throw
 persönlich - personally
 fragte - asked
 namens - called
 gegenüber - across from
 unsinn - nonsense
 fuß - foot
 besuchen - visit
 güte - quality
 lieb - dear
 guck - peep
 deines - yours
 roger - roger
 richtigen - right
 übrig - left
 major - major
 bein - leg
 messer - knife
 geheimnis - secret
 kannte - knew
 gegessen - eaten
 ungefähr - approximately
 ran - ran
 maria - Maria
 nahe - Near
 meinte - said
 nimmst - take
 gruppe - group
 bücher - Books
 weib - woman
 geschlafen - slept
 letztes - last
 zeitung - newspaper
 zufrieden - satisfied
 verdammten - damned
 zweite - second
 geliebt - loved
 freude - joy
 loch - hole
 stellt - provides
 statt - instead of
 fleisch - flesh
 ganzes - whole
 verschwunden - disappeared
 ee - ee
 worauf - whereupon
 sauer - angry
 erkennen - detect
 weißen - white
 entfernt - away
 nick - nick
 mut - courage
 mitnehmen - take
 anruf - Call
 lied - song
 träume - dreams
 for - for
 kostet - costs
 fisch - fish
 amerikaner - American
 schuldig - guilty
 zumindest - at least
 entweder - either
 mark - mark
 sprach - spoke
 informationen - information
 miteinander - together
 sowas - like this
 gibst - give
 sahen - saw
 schmerz - pain
 furchtbar - awful
 niemandem - no one
 vaters - father
 vorwärts - forward
 computer - computer
 teilen - divide
 gefahren - hazards
 erster - first
 eier - eggs
 seines - his
 kontakt - Contact
 situation - situation
 bus - bus
 verstecken - hide
 händen - hands
 ehren - to honor
 entlang - along
 küche - kitchen
 wütend - angry
 mami - mommy
 fühlt - feels
 eddie - eddie
 überraschung - surprise
 tony - tony
 haar - hair
 schwert - sword
 schreien - scream
 lag - was
 fräulein - young lady
 ha - Ha
 hielt - held
 richter - judge
 gespielt - played
 gegend - area
 red - red
 gebäude - building
 geredet - spake
 rat - advice
 schlechte - bad
 süße - sweet
 hängt - hangs
 eis - ice
 big - big
 zerstört - destroyed
 koffer - suitcase
 wohnt - lives
 schwarze - black
 versteht - understood
 kümmere - take care
 erledigen - take care of
 lieutenant - lieutenant
 alex - Alex
 männern - men
 witzig - funny
 schließlich - in the end
 position - position
 drinnen - indoors
 fbi - fbi
 soweit - so far
 falsche - FALSE
 entscheiden - decide
 erhalten - receive
 bauen - to build
 kleid - dress
 dachten - thought
 übel - evil
 überleben - to survive
 hinaus - out
 beeil - hurry
 wald - Forest
 töte - kill
 beschäftigt - employed
 ring - ring
 verbindung - connection
 königin - queen
 ecke - corner
 halb - half
 bericht - report
 gingen - went
 vergangenheit - past
 spiele - games
 angefangen - started
 weinen - cry
 welchen - which
 radio - radio
 nah - close
 beziehung - relationship
 hängen - hang
 feiern - to celebrate
 mussten - had
 verhaftet - arrested
 maschine - machine
 ermordet - murdered
 aiie - aII
 richard - Richard
 größte - greatest
 betrunken - drunk
 mußt - must
 soldat - soldier
 irgendetwas - anything
 on - on
 gefühle - emotions
 rauf - up
 rief - cried
 beginnt - starts
 witze - joking
 engel - Angel
 quatsch - nonsense
 hälfte - half
 spreche - speak
 lehrer - teacher
 england - England
 charles - charles
 dessen - whose
 schwierig - difficult
 fang - fishing
 gleichen - equal
 respekt - respect
 adresse - address
 brücke - bridge
 falschen - FALSE
 blumen - flowers
 bobby - Bobby
 besorgen - to get
 sommer - summer
 bilder - pictures
 park - park
 flug - flight
 agent - agent
 schlampe - slut
 hunde - dogs
 geschlagen - beaten
 beginnen - begin
 danken - to thank
 schritt - step
 zerstören - to destroy
 au - au
 martin - martin
 bombe - bomb
 san - san
 schwarzen - black
 ted - ted
 gelassen - calmly
 aufgabe - task
 jerry - jerry
 allerdings - Indeed
 unseres - our
 washington - Washington
 prinzessin - princess
 colonel - colonel
 kümmert - takes care
 treten - to step
 unterschied - difference
 gesund - healthy
 stimmen - be right
 knast - slammer
 fahrt - journey
 heisst - called
 steig - sidewalk
 gehirn - brain
 besorgt - concerned
 fluss - River
 tiere - animals
 bekomme - get
 brüder - brothers
 indem - by doing
 trägt - wearing
 gewartet - waited
 bisher - so far
 tor - gate
 glückwunsch - congratulation
 tommy - tommy
 gebt - give
 schafft - creates
 planeten - planet
 wünsche - Wishes
 blöd - stupid
 rom - Rome
 hintern - butt
 falle - cases
 singt - sings
 dach - top, roof
 tötet - killing
 helfe - help
 pistole - pistol
 freunden - friends
 karten - cards
 leiden - To suffer
 wünschen - to wish
 gewehr - gun
 fühlst - feel
 kapitän - captain
 neuer - new
 reichen - pass
 system - system
 sprich - speak
 schläft - is sleeping
 worüber - about what
 katze - cat
 vogel - bird
 rennen - run
 erinnert - remind
 rechte - right
 bringst - bring
 tier - animal
 steigen - climb
 flasche - bottle
 traf - hit
 küssen - kiss
 deren - their
 leisten - Afford
 halbe - half
 eurer - yours
 verspreche - promise
 vermisst - missing
 genannt - called
 fragt - asks
 verbrechen - crime
 aussieht - looks
 melden - Report
 stehe - am
 verantwortlich - responsible
 pferde - horses
 erfolg - success
 lee - lee
 ohren - ears
 bad - bath
 keinem - any
 weiße - white
 besonderes - special
 theater - theatre
 natur - nature
 lächeln - smile
 club - club
 auftrag - assignment
 wichser - wanker
 aufhalten - stop
 schmerzen - pain
 by - by
 davor - before
 wüsste - know
 abendessen - dinner
 sarah - sarah
 verdienen - to earn
 trifft - meets
 deutschen - German
 überrascht - surprised
 baum - tree
 kosten - costs
 leer - empty
 morgens - In the morning
 gefangen - captured
 van - van
 wand - wall
 city - City
 haufen - heap
 schließen - shut down
 möglichkeit - possibility
 schützen - protect
 besteht - consists
 rauchen - smoke
 schwierigkeiten - trouble
 stein - stone
 mitten - in the middle
 hinein - in
 hose - trousers
 autos - cars
 zuvor - before
 prima - great
 schwanz - tail
 lächerlich - ridiculous
 schickt - sends
 wieviel - how much
 beschützen - to protect
 liebes - dear
 befehle - commands
 echte - real
 vermutlich - presumably
 englisch - English
 bedeuten - mean
 junger - younger
 lüge - lie
 gemeinsam - together
 pause - Break
 versteh - understand
 aufpassen - watch out
 einverstanden - I Agree
 brechen - break
 grad - Degree
 prinz - prince
 polizisten - police officers
 lord - lord
 druck - print
 heilige - saint
 daher - therefore
 schwarz - black
 solchen - such a
 übernehmen - take
 nachmittag - afternoon
 regen - rain
 schätzchen - baby
 my - my
 zweiten - second
 rock - skirt
 fassen - take
 tote - dead
 fiel - fell
 madam - madam
 mitgebracht - brought
 mannes - man
 mochte - would like to
 wart - serviceable
 lief - ran
 dorthin - there
 unterhalten - to chat
 schuss - shot
 angriff - attack
 freue - look
 gebaut - built
 gebrochen - Broken
 fanden - found
 aiso - aiso
 beruhige - calm down
 offensichtlich - obviously
 versprechen - promise
 monster - monster
 fängt - catches
 kapiert - Got it
 ehemann - husband
 geschlossen - closed
 frühstück - breakfast
 gebeten - asked
 stören - to disturb
 irre - crazy
 farbe - colour
 chris - chris
 taten - doings
 zufällig - coincidentally
 geschieht - happens
 pfund - lb
 mission - mission
 thomas - Thomas
 zeige - show
 wochenende - weekend
 unternehmen - Companies
 fantastisch - fantastic
 kate - cottage
 geb - give
 schlägt - beats
 entschieden - decided
 spur - track
 liebte - loved
 hieß - was called
 vertrag - contract
 dienst - service
 held - hero
 verpasst - lost
 irgendwelche - any
 filme - movies
 stock - floor
 louis - louis
 meilen - miles
 wahnsinn - madness
 erschießen - shoot dead
 nee - nope
 einzigen - single
 mitkommen - come along
 braut - bride
 reisen - to travel
 gewissen - conscience
 schmeckt - tastes
 sprache - language
 begann - started
 eigenes - own
 reihe - line
 fern - remote
 drüber - about it
 mond - moon
 gang - corridor
 schauspieler - actor
 vollkommen - completely
 runde - round
 restaurant - restaurant
 dreck - dirt
 schrieb - wrote
 untertitel - subtitle
 arthur - arthur
 sprichst - speak
 warm - warm
 mistkerl - dirty swine
 nette - nice
 bekommst - get
 lager - warehouse
 atmen - to breathe
 legt - puts
 daraus - from that
 schloss - lock
 danny - danny
 geschossen - shot
 gespräch - conversation
 usa - USA
 leise - quietly
 flughafen - Airport
 wunsch - wish
 schwanger - pregnant
 operation - surgery
 anzug - suit
 gelegenheit - opportunity
 folge - episode
 kunden - Customers
 dankbar - grateful
 welchem - wherein
 gewusst - know
 tanz - dance
 füße - feet
 thema - theme
 brauchte - needed
 dreh - twist
 netter - nice
 verantwortung - responsibility
 umsonst - for free
 geändert - changed
 subtitles - subtitles
 verboten - forbidden
 schlechter - worse
 million - million
 dick - thick
 größer - greater
 nerven - annoy
 schaden - damage
 erreicht - reached
 jagen - to hunt
 urlaub - vacation
 erlaubt - allowed
 gäste - Guests
 erfahrung - Experience
 viei - Viei
 rot - red
 getrunken - drunk
 freuen - looking forward
 besseres - better
 wache - guard
 gewalt - violence
 entkommen - escape
 wußte - knew
 hasst - hates
 riecht - smells
 strand - Beach
 sterbe - die
 konntest - could
 aufstehen - get up
 wahnsinnig - insane
 nachgedacht - thought
 oberst - colonel
 william - william
 beenden - break up
 kino - movie theater
 lauter - volume up
 folgt - follows
 aha - Aha
 wahre - real
 angebot - offer
 erklärt - explained
 trink - drinking
 soii - soii
 stört - disturbs
 gilt - applies
 keller - basement, cellar
 post - post Office
 senator - senator
 eurem - your
 isst - eats
 geschichten - stories
 frankreich - France
 no - no
 gentlemen - gentlemen
 kugel - Bullet
 gemeint - meant
 milch - milk
 machten - made
 kleider - clothes
 herausfinden - find out
 mindestens - at least
 eh - eh
 einigen - some
 trottel - Fool
 schaffst - manage
 kuss - kiss
 geholfen - helped
 knie - knee
 worum - about what
 grab - dig
 voraus - ahead
 robin - robin
 blind - blind
 that - did
 schande - shame
 carl - carl
 schönheit - beauty
 versuchte - tried
 fuhr - drove
 schatten - shadow
 schulden - owe
 dauern - last
 schwimmen - swim
 such - search
 beruhigen - soothe
 form - shape
 bessere - better
 verschwindet - disappears
 zweimal - twice
 präsidenten - president
 wei - wei
 dunkel - dark
 idioten - idiot
 sieg - victory
 riggs - riggs
 pläne - plans
 bat - asked
 zufall - coincidence
 eingeladen - invited
 scherz - hoax
 gezeigt - shown
 geheiratet - got married
 ed - ed
 fahrer - driver
 ähnlich - similar
 verhalten - behavior
 staaten - states
 garten - garden
 großvater - grandfather
 schreibt - writes
 pflicht - mandatory
 spielte - played
 deckung - cover
 energie - energy
 zeugen - testify
 star - star
 fährst - are going
 nachdenken - think
 roy - roy
 risiko - risk
 geschäfte - shops
 erstes - first
 kunst - art
 behandelt - treated
 geschah - happened
 helft - help
 dürfte - might
 heiligen - hallow
 mädels - girls
 beweis - proof
 priester - priest
 wusstest - knew
 stopp - stop
 zustand - Status
 direktor - director
 gehalten - held
 grenze - border
 juden - Jewry
 geblieben - remained
 erzählte - told
 vieiieicht - vieiieicht
 brennt - burns
 interesse - interest
 seiten - pages 


 de - of
 je - I
 est - East
 pas - not
 le - the
 vous - you
 la - the
 tu - you
 que - than
 un - a
 il - he
 et - and
 à - at
 a - at
 ne - born
 les - the
 ce - this
 en - in
 on - we
 ça - it
 une - a
 ai - have
 pour - for
 des - of the
 moi - me
 qui - who
 nous - we
 mais - But
 y - there
 me - me
 dans - in
 du - of
 bien - well
 elle - she
 si - if
 tout - all
 plus - more
 non - no
 mon - my
 suis - am
 te - you
 au - at
 avec - with
 oui - Yes
 va - go
 toi - you
 fait - made
 ils - they
 as - ace
 être - be
 faire - to do
 se - himself
 comme - as
 était - was
 sur - sure
 quoi - what
 ici - here
 sais - know
 lui - him
 veux - want
 ma - my
 là - the
 rien - nothing
 dit - said
 es - es
 où - or
 votre - your
 pourquoi - Why
 sont - are
 cette - this
 quand - when
 par - by
 son - his
 ton - your
 peux - can
 alors - so
 dire - say
 vais - am going to
 comment - How? 'Or' What
 avez - have
 bon - Well
 ou - or
 très - very
 même - even
 merci - thank you
 ont - have
 jamais - never
 aussi - also
 chose - thing
 voir - see
 allez - going
 tous - all
 ces - these
 deux - of them
 sa - her
 faut - should
 été - summer
 êtes - are
 ta - your
 avoir - to have
 fais - do
 peut - can
 autre - other
 maintenant - now
 encore - again
 peu - little
 vraiment - really
 mes - my
 temps - time
 toujours - always
 notre - our
 vie - life
 oh - Oh
 juste - fair
 sans - without
 avait - had
 quelque - some
 monde - world
 accord - agreement
 vu - seen
 fois - time
 aller - to go
 trop - too much
 viens - come
 crois - think
 dois - have
 père - dad
 dieu - God
 homme - man
 sûr - sure
 aux - to the
 leur - their
 avant - before
 étais - was
 besoin - need
 femme - women
 personne - no one
 avais - had
 aime - love
 chez - in
 vrai - true
 ans - years
 ses - his
 mal - wrong
 parler - talk
 vos - your
 après - after
 mort - death
 ca - it
 eu - had
 veut - wants
 parce - by
 sera - will be
 mieux - better
 bonne - good
 petit - small
 tes - your
 dis - tell
 beaucoup - many
 monsieur - gentleman
 voilà - here
 depuis - since
 doit - must
 mère - mother
 quel - what
 vas - going
 vois - see
 fille - girl
 déjà - already
 gens - people
 donc - so
 jour - day
 ll - It
 autres - other
 soir - evening
 toute - all
 ouais - yeah
 argent - silver
 maison - House
 nom - last name
 bonjour - Hello
 pense - thought
 nos - our
 cela - it
 nuit - night
 avons - have
 ii - ii
 merde - shit
 cet - this
 papa - dad
 maman - mom
 reste - rest
 peur - fear
 désolé - sorry
 salut - Hi
 seul - only
 arrive - come
 vite - quick
 prendre - take
 regarde - looked
 soit - is
 air - air
 quelle - what
 passé - past
 trois - three
 savoir - know
 plaît - please
 choses - things
 fils - son
 ah - ha
 bas - low
 moins - less
 entre - Between
 passe - past
 hé - Hey
 demain - tomorrow
 appelle - call
 grand - tall
 tête - head
 voulez - want
 faites - make
 arrête - stopped
 hein - huh
 attends - hold on
 raison - reason
 enfants - children
 assez - enough
 aurais - would
 elles - they
 voulais - wanted
 sommes - are
 jours - days
 parle - speak
 moment - moment
 amour - love
 toutes - all
 heure - hour
 puis - then
 tard - late
 tuer - kill
 eh - eh
 dû - of
 ami - friend
 petite - small
 partir - go
 hommes - men
 connais - know
 aider - help
 savez - know
 gars - guys
 chance - luck
 combien - how much
 tant - so
 sait - know
 part - go
 voiture - car
 pris - taken
 problème - problem
 hui - hui
 coup - stroke
 porte - door
 serait - would be
 prends - take
 venir - come
 travail - job
 pu - could
 famille - family
 seule - only
 sens - meaning
 allons - let's go
 putain - whore
 idée - idea
 ni - or
 contre - against
 revoir - meet again
 entendu - heard
 comprends - understand
 passer - pass
 pendant - while
 trouvé - find
 trouver - find
 quelques - a few
 vient - just
 vieux - old
 aurait - would have
 attention - Warning
 demande - request
 chercher - look for
 sous - under
 pouvez - can
 voici - here is
 pourrait - could
 sang - blood
 histoire - history
 amis - friends
 sortir - go out
 question - question
 venez - come
 rester - stay
 frère - brother
 ville - city
 fini - finished
 nouveau - new
 eux - them
 truc - thing
 tiens - here
 yeux - eyes
 mois - month
 laisse - leash
 mec - guy
 longtemps - long time
 belle - pretty
 police - police
 seulement - only
 importe - imported
 heures - hours
 eau - water
 car - because
 super - Great
 chaque - each
 cas - case
 vont - will
 tué - kill
 terre - Earth
 place - square
 main - hand
 ensemble - together
 type - type
 beau - beautiful
 pardon - sorry
 vers - towards
 aucun - no
 guerre - war
 trouve - find
 partie - part
 suite - after
 prie - pray
 devant - in front of
 compris - including
 arrivé - come
 mme - Mrs
 leurs - their
 étaient - were
 mettre - to put
 matin - morning
 aide - help
 dessus - above
 sois - be
 genre - kind
 fin - end
 perdu - lost
 jeune - young
 chérie - sweetheart
 premier - first
 attendez - Wait
 enfant - child
 donne - given
 venu - came
 aimerais - would like to
 droit - law
 côté - side
 chambre - bedroom
 loin - far
 donner - give
 devrais - should
 laisser - let
 feu - fire
 jouer - to play
 ie - ie
 train - train
 gros - large
 compte - account
 savais - knew
 mourir - pass away
 pouvoir - power
 regardez - look
 parlé - speak
 donné - given
 première - first
 aura - will have
 dernière - latest
 minutes - minutes
 aucune - any
 mari - husband
 enfin - finally
 madame - Mrs
 façon - way
 devrait - should
 mis - placed
 film - movie
 femmes - women
 fort - strong
 pourrais - could
 écoute - listen
 pays - country
 parti - left
 affaire - case
 endroit - place
 corps - body
 ia - ia
 fou - crazy
 vivre - live
 prêt - ready
 dont - whose
 espère - hope
 grande - big
 cause - cause
 point - point
 filles - girls
 dehors - outside
 hier - yesterday
 boulot - job
 pensais - thought
 garçon - boy
 près - near
 désolée - sorry
 cinq - five
 chef - chief
 ainsi - so
 haut - high
 celui - the one
 demandé - request
 dirait - would say
 bébé - baby
 possible - possible
 école - school
 plein - full
 mains - hands
 années - years
 dites - say
 nouvelle - news
 manger - eat
 docteur - doctor
 tour - tower
 croire - believe
 ceux - those
 quatre - four
 plutôt - rather
 marche - market
 semaine - week
 vérité - truth
 envie - desire
 capitaine - captain
 arrêter - Stop
 affaires - business
 bientôt - soon
 vue - view
 demander - request
 dernier - latest
 instant - moment
 essaie - try
 arriver - arrive
 font - make
 tellement - so much
 derrière - behind
 tomber - fall
 presque - almost
 voulait - wanted to
 meilleur - better
 numéro - number
 dr - dr
 journée - day
 appeler - call
 dollars - dollars
 c - vs
 attendre - wait
 confiance - trust
 garde - keep
 souviens - remember
 dur - hard
 serai - will
 bureau - office
 voyez - see
 abord - on board
 important - important
 devez - must
 ben - ben
 peine - trouble
 cours - Classes
 fera - will
 prend - take
 seigneur - Lord
 suffit - enough
 route - road
 cul - ass
 lls - They
 minute - minute
 bonsoir - Good evening
 jeu - Game
 croyais - thought
 ferme - closed
 plaisir - pleasure
 voudrais - would like
 heureux - happy
 mot - word
 musique - music
 chien - dog
 messieurs - gentlemen
 prenez - take
 calme - calm
 parents - parents
 dedans - in
 fous - crazy
 arrêtez - stop
 mariage - wedding
 entrer - enter
 rentrer - return
 ait - has
 lit - bed
 voit - sees
 autant - as much
 reviens - come back
 parfait - perfect
 coeur - heart
 ceci - this
 service - service
 téléphone - phone
 pauvre - poor
 mlle - Ms
 attend - waits
 drôle - funny
 ira - will
 parfois - sometimes
 retour - return
 á - at
 verre - glass
 pensé - thought
 six - six
 ci - this
 impossible - impossible
 ferai - will
 aimes - love
 payer - pay
 facile - easy
 maître - master
 new - new
 appelé - called
 mauvais - bad
 doute - doubt
 prison - jail
 adore - love
 faute - fault
 entends - hear
 oublié - forget it
 bras - arms
 exactement - exactly
 fête - Party
 café - coffee
 chéri - Darling
 sors - go outside
 gentil - kind
 penser - think
 vaut - worth
 lieu - location
 malade - sick
 changer - switch
 roi - King
 commence - start
 entendre - hear
 président - President
 travailler - to work
 partout - all over
 cher - expensive
 morts - dead
 rendre - return
 écrit - written
 équipe - team
 joue - play
 sinon - if not
 esprit - mind
 regarder - watch
 rentre - returns
 plan - plan
 cœur - heart
 veulent - want
 montrer - to show
 voulu - desired
 boire - to drink
 travaille - work
 propre - clean
 année - year
 état - state
 soyez - are
 bois - wood
 cherche - looking
 laissé - leash
 essayer - try
 dès - from
 semble - seems
 dix - ten
 faisait - was
 génial - awesome
 penses - think
 sécurité - security
 tôt - early
 mets - dish
 rêve - dream
 armée - army
 perdre - to lose
 parles - talk
 avis - view
 surtout - mostly
 difficile - difficult
 york - york
 dormir - to sleep
 ensuite - then
 pire - worst
 ecoute - listen
 simple - simple
 allait - was going to
 paix - peace
 morte - dead woman
 arme - armed
 sujet - topic
 retard - delay
 voyons - see
 livre - delivered
 appris - learned
 peuvent - can
 sale - dirty
 serais - would
 souvent - often
 an - year
 sauf - except
 choix - choice
 sûrement - surely
 étiez - were
 or - gold
 visage - face
 ordre - order
 comprendre - understand
 essayé - tried
 noir - black
 dîner - having dinner
 âge - age
 chemin - path
 changé - exchange
 bout - end
 face - face
 rue - street
 inquiète - worry
 photo - Photo
 allé - go
 personnes - people
 sérieux - serious
 ciel - sky
 honneur - honor
 amie - friend
 questions - Questions
 force - strength
 garder - keep
 petits - small
 tirer - shoot
 millions - million
 grave - serious
 marché - market
 nouvelles - news
 voix - voice
 semaines - weeks
 pouvais - could
 courant - current
 propos - about
 bateau - boat
 oublie - forget it
 con - cunt
 celle - that
 gauche - left
 content - happy
 prix - price
 rouge - red
 faim - hunger
 ferais - would
 avion - plane
 devenir - to become
 devoir - duty
 prochaine - next
 restez - stay
 acheter - buy
 voyage - trip
 sorte - kind
 long - long
 espèce - species
 idiot - idiot
 gueule - mouth
 début - beginning
 bouge - moves
 continue - keep on going
 hôpital - hospital
 sort - fate
 grâce - grace
 problèmes - problems
 message - message
 certains - some
 patron - boss
 sûre - safe
 reçu - received
 trucs - stuff
 avaient - had
 ouvre - opens
 promis - promised
 the - tea
 oncle - uncle
 euh - uh
 connaissez - know
 laissez - leave
 devons - must
 bienvenue - welcome
 occupe - busy
 allais - going
 camp - camp
 manque - lack
 soleil - Sun
 devait - was
 pars - leave
 pouvait - could
 cheveux - hair
 armes - arms
 pensez - think
 salle - room
 croyez - believe
 bizarre - weird
 gagner - to win
 commencé - start
 fond - background
 sauver - to save
 pièce - room
 erreur - mistake
 ailleurs - elsewhere
 rapport - report
 froid - cold
 apprendre - learn
 scène - scene
 secret - secret
 sac - bag
 seconde - second
 cru - vintage
 allô - Hello
 revenir - return
 battre - beat
 hôtel - hotel
 soirée - evening
 aurai - have
 soeur - sister
 pieds - feet
 seras - shalt
 carte - menu
 jolie - pretty one
 n - not
 pied - foot
 groupe - group
 venue - arrival
 monte - mounted
 agent - agent
 fallait - needed
 effet - effect
 libre - free
 seront - will
 mots - words
 neuf - new
 tire - drawn
 faux - false
 situation - situation
 tue - kill
 lumière - light
 vieille - old
 droite - right
 debout - standing
 noël - Christmas
 cheval - horse
 intérieur - inside
 écoutez - Listen
 joli - pretty
 gagné - won
 loi - law
 entrez - Come in
 auras - get
 incroyable - unbelievable
 lettre - letter
 présent - present
 occuper - to occupy
 connaît - knows
 absolument - absolutely
 aviez - had
 dame - lady
 professeur - professor
 fric - money
 george - george
 retrouver - find
 coin - corner
 table - table
 colonel - colonel
 âme - soul
 dos - back
 magnifique - magnificent
 rencontrer - meet
 réussi - success
 meilleure - best
 rappelle - remember
 tranquille - quiet
 fut - was
 chaud - hot
 mr - mr
 commencer - to start
 sœur - sister
 agit - is
 cool - cool
 doucement - slowly
 pareil - the same
 jeunes - youth
 joe - joe
 accident - accident
 appel - call
 anniversaire - anniversary
 blanc - White
 finir - finish
 risque - risk
 doivent - have to
 moyen - way
 terminé - finished
 complètement - completely
 clair - clear
 meurtre - murder
 sam - sat
 parlez - speak
 heureuse - happy
 ordres - orders
 disais - said
 touche - touch
 frank - frank
 prêts - loans
 fasse - make
 puisse - can
 déjeuner - lunch
 envoyé - sent
 lire - read
 disait - said
 tombe - grave
 su - knew
 marcher - walk
 avance - advanced
 déteste - hated
 forme - form
 â - at
 mauvaise - bad
 bord - edge
 décidé - decided
 mer - sea
 vivant - living
 médecin - doctor
 midi - midday
 devenu - become
 montre - watch
 porter - carry
 vraie - real
 disent - say
 ferait - would do
 ignore - unknown
 charlie - charlie
 connaître - know
 silence - silence
 diable - Devil
 sortez - get out
 tom - tom
 cadeau - gift
 suppose - Assumed
 flics - cops
 avocat - lawyer
 jure - sworn
 anglais - English
 sept - seven
 devriez - should
 moitié - half
 aimé - love
 surprise - surprise
 chacun - each
 serez - will
 exact - exact
 commandant - commanding officer
 télé - TV
 autour - around
 disparu - faded away
 ligne - line
 expliquer - explain
 aimer - like
 arrivée - arrival
 grosse - big
 simplement - simply
 mission - mission
 monter - ascend
 tenir - hold
 bons - good
 balle - ball
 quitter - to leave
 selon - according to
 classe - class
 paris - Paris
 sorti - got out
 mange - eat
 peuple - people
 habitude - habit
 voie - way
 dangereux - dangerous
 pote - mate
 contrôle - control
 prête - ready
 honte - shame
 rencontré - meet
 photos - Pictures
 impression - impression
 folle - crazy woman
 écrire - to write
 suivre - to follow
 oublier - forget
 livres - books
 aille - go
 retourner - return
 offre - offer
 chanson - song
 envoie - send
 trou - hole
 arrière - back
 poste - post
 amérique - America
 huit - eight
 radio - radio
 paul - paul
 ressemble - looks like
 attaque - attack
 arrêté - stopped
 change - exchange
 baiser - kiss
 pourtant - However
 réponse - reply
 connu - known
 connard - shithead
 lu - read
 pute - bitch
 bande - bandaged
 enfer - hell
 tenez - hold
 rend - makes
 triste - sad
 tel - Phone
 bravo - well done
 etre - be
 savait - knew
 david - david
 plusieurs - many
 existe - exist
 met - puts
 rire - to laugh
 compagnie - company
 étrange - strange
 exemple - example
 devais - had
 vit - lives
 combat - fight
 secours - help
 aurez - will
 conneries - bullshit
 visite - visit
 joué - play
 michael - michael
 pourra - will
 coucher - sleep
 imagine - conceived
 bob - bob
 merveilleux - wonderful
 continuer - Continue
 ecoutez - Listen
 dirai - tell
 volé - Fly
 lune - Moon
 bouche - mouth
 sud - South
 danse - dance
 ennuis - trouble
 but - goal
 aie - Ouch
 hors - except
 sortie - exit
 boîte - box
 vol - flight
 public - public
 lieutenant - lieutenant
 écouter - listen
 présente - present
 système - system
 époque - time
 retourne - return
 certain - certain
 bête - stupid
 vendre - sell
 avenir - to come up
 grands - great
 coups - shots
 santé - health
 partez - leave
 amoureux - lover
 envoyer - to send
 cuisine - cooked
 normal - normal
 danger - danger
 gouvernement - government
 village - town
 poser - to pose
 ouvrir - to open
 journal - newspaper
 approche - approach
 faudra - will
 dommage - pity
 peau - skin
 pleine - full
 voler - steal
 nez - nose
 danser - dance
 servir - to serve
 sympa - friendly
 bonnes - good
 mille - thousand
 héros - hero
 banque - bank
 sergent - sergeant
 clé - key
 secondes - seconds
 nord - North
 inspecteur - inspector
 hey - hey
 liberté - freedom
 salaud - bastard
 plait - please
 cour - court
 juge - judge
 viennent - are coming
 bruit - noise
 flic - cop
 tient - is holding
 terrible - terrible
 paraît - seems
 crime - crime
 prochain - next
 pouvons - can
 assis - seated
 thé - tea
 bonheur - happiness
 payé - paid
 tas - heap
 travers - through
 stupide - stupid
 blague - joke
 préfère - prefer
 conseil - advice
 robe - dress
 tiré - drawn
 protéger - protect
 rêves - dreams
 seuls - only
 pitié - pity
 oeil - eye
 mêmes - same
 vin - wine
 avions - had
 don - Don
 sol - ground
 vent - wind
 club - club
 garçons - boys
 gamin - kid
 tante - aunt
 croit - believes
 mesdames - ladies
 bar - bar
 milieu - middle
 reine - Queen
 signe - sign
 centre - center
 probablement - probably
 bière - beer
 dingue - crazy
 inutile - useless
 nulle - nothing
 mike - mike
 sent - feels
 différent - different
 emmener - bring
 comprenez - understand
 verra - will
 prise - taking
 vêtements - clothing
 liste - listing
 savent - know
 unis - United
 société - society
 chère - Dear
 soin - care
 pierre - Pierre
 appelez - call
 utiliser - use
 acheté - bought
 laquelle - which
 fiche - plug
 parole - speech
 mecs - guys
 faisais - doing
 marier - marry
 départ - departure
 ennemi - enemy
 irai - go
 aimez - like
 spectacle - show
 vouloir - want to
 recherche - research
 devient - bECOMES
 choisi - selected
 pose - pose
 films - movies
 intérêt - interest
 intéresse - interested
 rôle - role
 félicitations - Congratulations
 descendre - go down
 harry - harry
 tourne - turned
 position - position
 sert - serves
 blessé - injured
 humain - human
 asseoir - Sit
 match - match
 coupable - guilty
 environ - about
 art - art
 mise - setting
 londres - London
 espoir - hope
 quitté - quits
 lequel - which
 mur - wall
 peter - to fart
 ouvert - open
 église - church
 salope - slut
 beauté - beauty
 lâche - loose
 adresse - address
 mademoiselle - miss
 petites - small
 sauter - jump
 colère - anger
 directeur - director
 adieu - farewell
 jimmy - jimmy
 faisons - do
 parie - bet
 entrée - Entrance
 tort - wrong
 conduire - drive
 américain - American
 revenu - returned
 justice - justice
 soldat - soldier
 expérience - experience
 auriez - would
 cerveau - brain
 fenêtre - window
 quartier - district
 prince - prince
 vis - screw
 promets - promise
 venus - Venus
 soldats - soldiers
 tombé - grave
 riche - rich
 fleurs - flowers
 bill - bill
 mary - mary
 œil - eye
 présenter - present
 presse - hurry
 frères - brothers
 ridicule - ridiculous
 preuve - evidence
 ouvrez - open
 revient - come back
 pourriez - might
 épouser - marry
 intéressant - interesting
 gosse - kid
 faudrait - should
 histoires - stories
 rose - pink
 veuillez - please
 nature - nature
 vide - empty
 responsable - responsible
 courage - courage
 capable - able
 cinéma - cinema
 max - max
 décision - decision
 taxi - Taxi
 chanter - sing
 excuse - excuse
 sentir - feel
 jim - jim
 portes - doors
 james - james
 fier - proud
 deuxième - second
 eiie - eiie
 appartement - apartment
 contact - contact
 essayez - try
 sauvé - Safe
 cacher - hide
 ià - ià
 répondre - reply
 manière - way
 aimais - liked
 jambes - legs
 occasion - opportunity
 défense - defense
 longue - long
 jésus - Jesus
 jeter - throw
 allée - driveway
 formidable - wonderful
 base - based
 telle - such
 marie - married
 san - san
 glace - ice cream
 dents - teeth
 parmi - among
 immédiatement - at once
 marié - married
 paie - pay
 nul - no
 vacances - vacation
 épouse - wife
 monstre - monster
 souvenir - memory
 tueur - killer
 né - born
 continuez - go on
 français - French
 rendu - made
 course - race
 majesté - majesty
 mien - mine
 types - Types
 certainement - certainly
 coupe - chopped off
 ouest - Where is
 idées - ideas
 gagne - wins
 oubliez - forget
 chat - cat
 ayez - have
 trouves - found
 dégage - releases
 chier - take a dump
 ravi - delighted
 étions - were
 arrivent - arrive
 joie - joy
 prévu - planned
 lorsque - when
 superbe - superb
 touché - touch
 bain - bath
 contente - content
 horrible - horrible
 retrouve - finds
 court - short
 dérange - disturbs
 and - and
 bombe - bomb
 ramener - bring back
 certaines - some
 réalité - reality
 enquête - investigation
 camion - truck
 signifie - means
 cent - hundred
 toucher - to touch
 occupé - busy
 attendais - expecting
 rencontre - meet
 excellent - excellent
 respect - respect
 quitte - quits
 tourner - turn
 terrain - ground
 blanche - white
 projet - project
 éviter - to avoid
 poisson - fish
 plupart - mostly
 descends - down
 joyeux - happy
 empêcher - avoid
 mariée - married
 mangé - eat
 envers - towards
 ange - angel
 meilleurs - best
 copine - girlfriend
 chaussures - shoes
 dossier - folder
 règles - rules
 dure - tough
 animaux - animals
 langue - language
 américains - US
 imbécile - imbecile
 chevaux - horses
 princesse - princess
 zone - zoned
 pius - pius
 drogue - drug
 charge - charge
 nourriture - food
 pont - bridge
 refuse - refuse
 chiens - dogs
 contraire - opposite
 enchanté - nice to meet you
 douleur - pain
 politique - politics
 faits - facts
 arrivera - to arrive at
 essaye - try
 magasin - shop
 soient - are
 dirais - say
 entier - full
 vécu - lived
 offrir - to offer
 chapeau - hat
 raconte - recounts
 cartes - cards
 discuter - discuss
 papier - paper
 action - action
 permis - allowed
 bu - drank
 rapide - fast
 shérif - sheriff
 frais - fresh
 partis - gone
 emmène - takes
 réunion - meeting
 mettez - put
 île - Isle
 toilettes - bathroom
 code - coded
 billy - billy
 opération - surgery
 spécial - special
 planète - planet
 viendra - will come
 champ - field
 couleur - color
 pain - bread
 excuser - excuse
 destin - destiny
 rends - thank
 découvert - discovered
 puisque - since
 taille - cut
 nick - nick
 tony - tony
 vaisseau - vessel
 sexe - sex
 sacré - sacred
 repas - meal
 contrat - contract
 qu - that
 nécessaire - necessary
 client - customer
 détruire - destroy
 lait - milk
 iis - iis
 faite - done
 mémoire - memory
 pleurer - cry
 copain - boyfriend
 miss - Miss
 restes - remains
 ray - ray
 personnel - staff
 double - double
 mignon - cute
 couteau - knife
 sache - know
 témoin - witness
 foi - faith
 dors - sleep
 remercie - thank
 direction - direction
 steve - steve
 malin - malignant
 niveau - level
 remettre - reset
 habite - lives
 apporté - brought
 aiment - like
 mienne - mine
 procès - trial
 doux - soft
 eddie - eddie
 trouvez - find
 solution - solution
 raconter - tell
 fermer - to close
 choisir - to choose
 goût - taste
 nouveaux - new
 end - end
 amuser - amuse
 différence - difference
 stop - stop
 charles - charles
 gosses - kids
 réfléchir - reflect
 clients - clients
 enceinte - pregnant
 beaux - beautiful
 université - university
 bleu - blue
 mètres - meters
 vus - seen
 aimait - loved
 marre - fed up
 menti - lied
 appelles - call
 courir - run
 arranger - arrange
 travaillé - work
 papiers - papers
 retrouvé - found
 officier - officer
 espace - space
 sourire - smile
 dise - tell
 mérite - deserved
 lettres - letters
 accepter - accept
 quels - what
 failli - bankrupt
 angleterre - England
 vitesse - speed
 jambe - leg
 caméra - camera
 rappeler - call back
 arbre - tree
 pièces - rooms
 forces - strengths
 trésor - treasure
 victime - victim
 énergie - energy
 disons - say
 énorme - huge
 rentré - returns
 alex - alex
 appartient - belongs
 préparer - to prepare
 propres - own
 regrette - sorry
 finalement - finally
 france - France
 invité - guest
 moindre - lesser
 censé - supposed
 washington - Washington
 bobby - bobby
 image - picture
 justement - exactly
 to - to
 compter - count
 enlever - to take off
 chasse - hunt
 unique - unique
 fout - fout
 arrêt - stop
 file - file
 balles - bullets
 preuves - evidence
 dimanche - Sunday
 lycée - high school
 fil - wire
 morceau - piece
 noms - names
 durant - during
 sarah - sarah
 cassé - broken
 doigts - fingers
 vérifier - check
 million - million
 appareil - apparatus
 tirez - pull
 apporte - brings
 réponds - answer
 piste - track
 derniers - last
 man - man
 troisième - third
 dépend - depends
 humains - humans
 programme - program
 honnête - honest
 voitures - Car
 bougez - move
 richard - richard
 belles - beautiful
 régler - adjust
 flingue - gat
 couper - cut
 noire - black
 entendez - hear
 aveugle - blinded
 bouger - move
 venait - had
 présence - presence
 savons - know
 crise - crisis
 amène - bring
 interdit - prohibited
 trés - very
 lever - raise
 partons - leave
 clés - Keywords
 obtenir - get
 pluie - rain
 récupérer - recover
 grandes - great
 quelles - what
 prouver - to prove
 souris - mouse
 restaurant - restaurant
 regard - look
 okay - okay
 intention - intention
 forte - strong
 danny - danny
 cou - neck
 points - points
 manqué - lack
 proche - close
 urgence - emergency
 folie - madness
 ancien - former
 relation - relationship
 bouteille - bottle
 étage - floor
 rejoindre - rejoin
 casse - broken
 jardin - garden
 malgré - despite
 oiseau - bird
 méchant - mean
 raisons - reasons
 perds - lose
 pleure - cry
 meurt - dies
 claire - Claire
 frappé - hit
 chante - sung
 pourrai - could
 nombre - number
 gentille - kind
 pourras - able
 sentiments - feelings
 regardé - looked
 toit - roof
 lors - then
 métier - job
 maladie - disease
 poche - poached
 três - very
 frapper - hit
 tommy - tommy
 succès - success
 étant - being
 lee - lee
 dessous - below
 voudrait - would
 théâtre - theater
 chinois - Chinese
 crains - fear
 afin - to
 gare - station
 billets - tickets
 douce - fresh
 frappe - hit
 remarqué - Note
 paradis - paradise
 étranger - foreign
 campagne - campaign
 fermé - closed
 alcool - alcohol
 jerry - jerry
 vendu - sold
 samedi - Saturday
 parlait - speaking
 produit - product
 répète - say again
 amoureuse - in love
 souhaite - wish
 odeur - odour
 appelait - called
 vôtre - your
 attendant - Meanwhile
 montagne - Mountain
 oû - or
 vies - lives
 demandez - ask
 fantastique - fantastic
 victoire - victory
 mens - mens
 carrière - career
 enlève - removes
 fatigué - tired
 suivi - followed
 animal - animal
 raté - missed
 règle - rule
 meurs - die
 remercier - thank
 assurer - ensure
 queue - tail
 viande - meat
 rivière - river
 falloir - have to
 suivant - following
 assure - assures
 obligé - forced
 martin - martin
 fusil - musket
 passage - passage
 hasard - hazard
 pauvres - poor
 neige - snow
 parfaitement - perfectly
 journaux - newspapers
 échapper - escape
 plage - beach
 secrets - secrets
 signal - signal
 crétin - dumbass
 aies - hast
 coffre - chest
 pression - pressure
 costume - suit
 informations - news
 futur - future
 disant - saying
 univers - universe
 auraient - would
 gardes - guards
 lis - Lily
 volonté - will
 attendu - expected
 verras - see
 donnez - give
 demandais - asked
 excuses - apology
 vienne - Vienna
 pensent - think
 faible - low
 cache - hidden
 fiston - son
 van - van
 prendra - will take
 attraper - to catch
 dort - sleeps
 décider - decide
 inquiétez - worry
 cesse - constantly
 gaffe - gaffe
 serons - will
 ministre - minister
 naissance - birth
 agir - to act
 utile - useful
 gaz - gas
 bataille - battle
 noirs - black
 vouliez - wanted
 retraite - retirement
 voleur - thief
 poids - weight
 discours - speech
 star - star
 nouvel - new
 gâteau - cake
 cents - cents
 ventre - belly
 connaissance - knowledge
 voulons - want to
 vive - viva
 blancs - whites
 assassin - assassin
 jeux - games
 vendredi - Friday
 europe - Europe
 accepte - accepted
 parlons - let's talk
 certaine - some
 couple - couple
 sérieusement - seriously
 militaire - military
 date - dated
 rome - Rome
 entend - hears
 droits - rights
 resté - rest
 montez - mount
 titre - title
 génie - genius
 couilles - balls
 revenez - return
 recevoir - to receive
 autrement - other
 répondu - answered
 amené - bring
 os - bone
 perd - loses
 valeur - value
 puissant - powerful
 style - style
 vert - green
 fortune - fortune
 vieil - old
 major - Staff
 amener - lead
 prépare - prepare
 poulet - chicken
 embrasser - to kiss
 genoux - knees
 acte - act
 détruit - destroy
 célèbre - popular
 cible - target
 cousin - cousin
 conscience - consciousness
 prévenir - prevent
 ramène - brings back
 arrivés - arrived
 doigt - finger
 californie - California
 article - article
 cherchez - looking
 étoiles - stars
 milliers - thousands
 reprendre - resume
 mine - mine
 regardes - look
 servi - served
 ennemis - enemies
 charmant - charming
 sentiment - feeling
 reposer - rest
 note - note
 couché - layer
 gardez - keep
 jake - jake
 www - www
 agréable - pleasant
 préféré - prefer
 château - castle
 bal - ball
 oreilles - ears
 découvrir - discover
 apparemment - apparently
 los - the bone
 zéro - zero
 saint - Holy
 côtés - sides
 marrant - funny
 comprend - comprises
 pourrez - can
 joues - play
 salon - living room
 lève - survey
 utilise - uses
 conversation - conversation
 pilote - pilot
 fer - iron
 attendent - wait
 humaine - human
 conduit - pipe
 gorge - throat
 victimes - victims
 détails - details
 talent - talent
 passée - past
 sexy - sexy
 iui - iui
 maria - maria
 privé - private
 apporter - to bring
 tuée - killed
 violence - violence
 feras - shalt
 nerveux - nervous
 aéroport - airport
 direct - direct
 enculé - cocksucker
 tribunal - court
 commande - ordered
 in - in
 jette - throws
 paquet - package
 fumer - to smoke
 aise - easy
 dieux - gods
 emmerde - hassle
 joindre - join
 lance - spear
 usine - factory
 défendre - defend
 will - will
 forêt - forest
 champion - champion
 horreur - horror
 importante - important
 paroles - lyrics
 test - test
 désormais - from now on
 tres - very
 dernières - latest
 tombée - fall
 chris - chris
 extérieur - outside
 désert - desert
 coupé - chopped off
 intelligent - clever
 aidé - help
 saura - will know
 dira - tell
 passera - will pass
 comptes - accounts
 mode - fashion
 parlais - speaking
 invités - guests
 série - series
 pis - udder
 sage - wise
 rappelles - remember
 concerne - concerned
 mariés - married
 grandi - grown up
 pousse - shoot
 vache - cow
 accepté - accepted
 meme - even
 pensait - thought
 repos - rest
 ordinateur - computer
 rock - rock
 allo - Hello
 smith - smith
 ombre - shadow
 it - it
 russe - Russian
 minuit - midnight
 vole - Fly
 amusant - amusing
 membres - members
 jane - jane
 moyens - means
 surpris - surprised
 ouverte - opened
 nombreux - numerous
 également - also
 imaginer - imagine
 mince - thin
 dormi - slept
 page - page
 essence - gasoline
 maire - mayor
 faisant - making
 lundi - Monday
 entré - Between
 billet - ticket
 moteur - engine
 réparer - to fix
 franchement - frankly
 caché - hidden
 cigarette - cigarette
 al - al
 riches - rich
 partager - share
 puissance - power
 trouvée - found
 parfaite - perfect
 hiver - winter
 épée - sword
 of - of
 reviendra - will come back
 haute - high
 souffle - breath
 tente - attempted
 vingt - twenty
 miracle - miracle
 arbres - trees
 apprécie - appreciate
 senti - felt
 manquer - to lack
 artiste - artist
 créer - create
 lac - lake
 jeté - thrown
 souvenirs - memories
 sommeil - sleep
 vrais - real
 réveiller - wake
 leçon - lesson
 casser - break
 courses - racing
 chemise - shirt
 fantôme - ghost
 membre - member
 passez - skip
 acteur - actor
 battu - beaten
 parc - Park
 chair - flesh
 rues - streets
 utilisé - in use
 reculez - step back
 japonais - Japanese
 mentir - lie
 rentrez - come back
 plans - Plans
 coûte - cost
 champagne - Champagne
 no - No.
 américaine - American
 risques - risks
 pete - pete
 offert - Free
 semblant - show
 annonce - ad
 échange - exchange
 paye - paid
 premiers - first
 débarrasser - get rid of
 fuir - to run away
 louis - louis
 supplie - beseech
 saute - jumped up
 signer - sign 
 

non - not
che - that
di - of
e - is
la - there
il - the
un - a
a - to
è - is
per - for
in - in
una - a
sono - I am
mi - me
ho - I have
si - Yes
lo - the
ma - but
ti - you
ha - has
le - the
cosa - thing
con - with
da - from
se - self
come - how
io - I
ci - us
questo - this
qui - here
hai - you have
bene - well
sei - six
tu - you
del - of the
me - myself
mio - my
al - to the
solo - only
sì - Yup
tutto - all
te - you
più - more
della - of the
era - era
lei - she
gli - the
mia - my
questa - this
ne - neither
fare - do
quando - when
essere - to be
fatto - done
perché - because
so - I know
ora - Now
o - or
va - it goes
mai - never
chi - who
detto - say
così - so
alla - a
quello - one
tutti - all
oh - Oh
anche - also
molto - very
dei - of
lui - he
voglio - I want
niente - anything
stato - state
grazie - thank you
dove - where is it
abbiamo - we have
tuo - your
nel - in
allora - then
sta - It is
posso - I can
siamo - we are
uno - one
vuoi - do you want
hanno - have
noi - we
prima - before
suo - his
stai - are you
tua - your
due - two
ancora - yet
casa - home
fa - does
sua - her
qualcosa - something
vero - true
su - on
sai - you know
sia - be
sempre - always
dire - to say
loro - their
quella - that
andiamo - here we go
andare - to go
delle - of the
vi - you
quel - that
ehi - Hey
devo - I must
signore - lord
nella - in
ad - to
tempo - time
certo - of course
voi - you
vita - life
forse - perhaps
adesso - now
fuori - out
li - there
davvero - really
sto - I am
anni - years
poi - then
altro - other
dio - God
via - Street
visto - seen
proprio - own
parte - part
ok - ok
beh - Well
puoi - can
credo - I think
sul - on the
ciao - Hello
volta - time
cose - whats this
quanto - how much
uomo - man
nessuno - nobody
padre - father
dopo - after
amico - friend
fai - do
può - can he
vuole - wants
posto - place
lavoro - work
qualcuno - someone
già - already
meglio - better
devi - you have to
ed - and
giorno - day
vedere - see
cazzo - dick
dai - come on
cui - which
cos - cos
dal - from
vai - Go
bisogno - need
ogni - every
vieni - Come
ecco - here
senza - without
ce - there is
male - bad
stata - was
troppo - too much
signor - Mr
qualche - some
mamma - mum
perchè - why
tanto - much
dobbiamo - we have to
avete - you have
dalla - from
sarà - Sara
prego - You are welcome
modo - way
grande - great
tra - between
ll - The
miei - my
guarda - look
favore - favor
alle - to
quindi - therefore
sembra - it seems
sa - know
soldi - money
parlare - speak
sulla - on
sarebbe - would be
dispiace - sorry
ai - to
deve - needs to
gente - people
dice - He says
tre - three
madre - mother
momento - moment
aspetta - wait up
cosi - so
altra - other
questi - these
siete - you are
nuovo - new
successo - success
mondo - world
piace - like it
nostro - our
aveva - had
forza - power
possiamo - We can
avere - to have
oggi - today
dov - dov
ah - ha
figlio - son
dentro - inside
ragazzi - boys
penso - I think
ero - I was
accordo - agreement
queste - these
faccio - I do
facendo - doing
degli - from
fosse - it were
donna - woman
giusto - quite right
avevo - I had
altri - others
nome - first name
avanti - come on
eh - huh
subito - immediately
tutte - all
signora - Mrs
basta - thats enough
notte - night
farlo - to do it
sapere - know
tutta - all
bella - beautiful
lì - there
porta - door
sicuro - sure
testa - head
faccia - face
vado - I go
senti - feeling
persone - people
nostra - our
sentito - heard
stare - to stay
appena - as soon as
sotto - under
uomini - men
preso - taken
merda - shit
tipo - guy
ragazzo - boy
morto - dead
paura - fear
pronto - ready
avuto - had
buona - good
ragazza - girl
presto - soon
erano - were
moglie - wife
capito - I got it
stesso - same
abbia - has
é - is
potrebbe - could
suoi - his
pensi - think
problema - problem
amore - love
ii - ii
insieme - together
papà - Pope
tuoi - your
succede - It happens
volte - times
domani - tomorrow
vorrei - I would like to
tesoro - treasure
caso - case
ragione - reason
storia - history
okay - okay
volevo - I wanted
qua - here
prendere - to take
fino - till
nulla - nothing
trovato - found
bello - beautiful
dici - you say
macchina - machine
venire - to come
dato - given
nei - in
giorni - days
dico - I say
mano - but no
stiamo - we are
aver - having
serve - need
famiglia - family
buon - good
vediamo - we see
terra - land
fratello - brother
stanno - they are
letto - bed
facciamo - let's make
scusa - sorry
piacere - pleasure
fine - end
secondo - second
ciò - it
aiuto - Help
avrei - I would have
amici - friends
polizia - police
piano - plan
capo - boss
state - been
diavolo - Devil
meno - less
morte - death
capisco - I see
vedo - I see
stati - States
neanche - neither
quale - which
primo - first
bel - beautiful
vostro - your
là - there
scusi - sorry
vedi - you see
strada - Street
quei - those
po - bit
persona - person
occhi - eyes
giro - round
quelle - those
quasi - almost
salve - Hello
credi - believe
mentre - while
dollari - dollars
bambino - child
sera - evening
film - movie
avrebbe - it would have
ucciso - killed
indietro - back
contro - versus
sento - I hear
dovuto - due
tornare - return
mani - hands
mie - my
acqua - water
nessun - no
abbastanza - quite
pensavo - I thought
minuti - minutes
bambini - children
andato - went
vostra - your
finito - finished
cercando - looking for
tardi - late
trovare - to find
stavo - I was
col - with the
viene - it is
veramente - really
ore - hours
nostri - our
chiama - who loves
far - to
guerra - war
piccolo - small
prendi - take
anch - anch
sola - one
cuore - heart
nemmeno - not even
forte - strong
bravo - good boy
quelli - those
giù - down
stasera - tonight
parla - speaks
venuto - came
sig - Mr
sue - its
comunque - However
numero - number
punto - point
roba - stuff
fanno - do
stessa - itself
scuola - school
felice - happy
vecchio - old
perso - lost
uscire - go out
città - city
importa - it matters
dietro - behind
invece - instead
pensato - thought
fu - it was
lascia - leaves
nelle - in
donne - women
importante - important
figlia - daughter
spero - hope
chiesto - asked
poco - little
verso - towards
marito - husband
morire - to die
dovrebbe - it should
com - com
migliore - best
quattro - four
puttana - bitch
cinque - five
almeno - at least
ricordi - memories
sapevo - I knew
però - However
sangue - blood
settimana - week
potrei - I could
entrare - to come in
fate - you do
colpa - fault
dottore - doctor
pensa - thinks
anno - year
possibile - possible
piedi - feet
vicino - close
amo - I love
dovrei - I should
passato - past
piccola - small
messo - put
capitano - captain
fatta - done
ultima - latest
qual - what
andata - going
dovresti - you should
dammi - give me
farò - lighthouse
sentire - feel
altre - other
pensare - to think
vivere - to live
portato - brought
eri - you was
riesco - I can
gia - already
ia - ia
parlando - speaking
pure - mashed potato
stanza - room
telefono - phone
ascolta - listen
buongiorno - good morning
parlato - spoken
conosco - I know
nessuna - none
tue - your
significa - it means
chiamato - called
musica - music
lasciato - left
volete - want
conto - bill
corpo - body
dare - give
ricordo - I remember
culo - ass
perdere - to lose
serio - serious
be - well
mezzo - half
andando - going
fossi - I
vista - view
difficile - hard
stava - he was
sopra - above
mangiare - to eat
prova - test
ieri - yesterday
genere - kind
fuoco - fire
strano - strange
ben - well
paese - country
signorina - young lady
parola - word
figli - sons
ln - ln
possa - can
magari - maybe
fortuna - luck
voleva - she wanted
problemi - problems
mesi - months
dimmi - tell me
potuto - could
chiamo - call
dicendo - saying
quanti - How many
gioco - game
possono - can
signori - gentlemen
farti - you
qualsiasi - any
molti - lot of
resto - rest
ragazze - girls
nuova - new
sorella - sister
davanti - in front of
re - king
foto - photo
dica - tell
torna - returns
domanda - demand
pare - apparently
pace - peace
tieni - keep
mente - mind
sacco - bag
auto - car
finita - over
capire - to understand
verità - truth
paio - pair
cane - dog
vogliono - want
attimo - moment
senso - sense
dovremmo - we should
lavorare - to work
perche - because
vivo - I live
stia - is
dalle - give her
andate - go
attenzione - caution
fra - between
pistola - gun
agli - to
vada - go
mr - mr
farmi - me
festa - party
saranno - they will be
vede - sees
buono - good
dicono - they say
presidente - president
unica - only
bere - drinking
passare - to pass
unico - single
sapete - you know
fantastico - fantastic
affari - business
dell - of
cielo - sky
coraggio - courage
spiace - sorry
ufficio - office
cara - Dear
agente - agent
smettila - stop that
luce - light
fammi - let me
dormire - to sleep
facile - easy
piu - more
capisci - Do you understand
parole - words
hey - hey
avessi - I had
giovane - young
potete - you can
divertente - funny
new - new
generale - general
ultimo - last
entra - come in
controllo - control
voce - voice
lungo - long
morta - dead
gran - great
esatto - exact
morti - dead
probabilmente - probably
cena - dinner
libro - book
sappiamo - we know
siano - are
arrivato - arrived
avevi - you had
squadra - team
scritto - written
faremo - we will
fatti - facts
credere - to believe
cristo - Christ
cerca - search for
vogliamo - we want
sulle - on
nostre - our
uccidere - kill
vuol - wants
farà - will make
attento - careful
sarei - I would be
molte - many
voglia - wish
chiedo - I ask
esattamente - exactly
pronti - ready
cura - care
sui - on
caro - Dear
chiaro - clear
lontano - far
tratta - is
pazzo - crazy
sicura - safety
stronzo - asshole
potresti - could
cercare - search for
ordine - order
conosci - know
parli - you speak
perfetto - perfect
sbagliato - mistaken
quest - quest
dieci - ten
restare - to remain
venite - you come
prendo - I take
stupido - stupid
arrivare - arrive
aria - air
credevo - I thought
passo - step
motivo - reason
prossima - next
sarai - you will be
farai - do
alcuni - some
chiami - who do you Love
lasciami - leave me
sarò - I ll be
fermo - stationary
eravamo - we were
aspettare - wait
viaggio - travel
finché - as long as
mettere - to put
resta - remains
arriva - arrives
aspetto - appearance
avresti - you would have
campo - field
papa - Pope
arrivo - arrival
dello - of the
minuto - minute
portare - bring
guardare - to watch
camera - room
benissimo - very well
milioni - millions
lasciare - to leave
diventare - become
ospedale - Hospital
venga - come
zio - uncle
soltanto - only
bocca - mouth
né - neither
zitto - Shut up
continua - go on
bagno - bathroom
durante - during
ricevuto - received
bisogna - need
idiota - idiot
negli - in
bambina - child
colpo - blow
fretta - hurry
dottor - Dr.
metti - put
causa - cause
inizio - Start
giocare - play
voluto - would
trova - find
vanno - they go
permesso - permit
armi - weapons
bastardo - Bastard
devono - must
crede - you think
succedendo - happening
guardate - watch
tornato - got back
potremmo - we could
dovete - you have to
venuta - coming
vostri - your
sole - Sun
torno - I return
gruppo - group
genitori - parents
situazione - situation
dirmi - tell me
lasci - leave
the - the
denaro - money
settimane - weeks
alto - tall
preoccuparti - worry
grandi - great
onore - honor
piacerebbe - would like to
sogno - dream
giornata - day
deciso - decided
capelli - hair
pezzo - piece
disse - She said
tom - tom
porto - port
chiamare - to call
addio - goodbye
york - york
allo - the
fondo - background
aspetti - wait
traduzione - translation
mandato - mandate
guardi - look
ormai - by now
piuttosto - Rather
oltre - over
matrimonio - marriage
circa - about
brava - good
vattene - get out
grae - grae
avesse - had
qualunque - whatever
www - www
frank - frank
vera - real
futuro - future
do - do
joe - joe
prende - he takes
sicurezza - safety
vengo - I come
potere - power
tanti - many
scelta - choice
legge - law
odio - hate
cibo - food
fame - hunger
prigione - prison
guai - trouble
mattina - morning
quell - that
semplice - simple
chiunque - anyone
vecchia - old
brutto - ugly
usare - use
saperlo - know
mese - month
occhio - eye
speciale - special
provare - try out
cambiare - to change
domande - questions
piacciono - like
funziona - it works
sistema - system
natale - Christmas
prossimo - next one
messaggio - message
incidente - accident
radio - radio
aereo - plane
buonanotte - good night
finalmente - finally
assolutamente - absolutely
sam - sam
ottimo - great
solito - usual
avvocato - lawyer
compagnia - company
ve - you
nave - ship
glielo - him
gentile - kind
peccato - sin
servizio - service
scena - scene
incredibile - unbelievable
michael - michael
tv - TV
specie - species
spesso - often
dirlo - tell
david - david
pensando - thinking
entrambi - both
finire - to end
veloce - rapid
intorno - around
addosso - on
parti - set off
avrai - you will have
tante - many
provato - tried
poteva - he could
pagare - to pay
calma - calm
conosce - know
sanno - know
tizio - someone
sette - seven
segreto - secret
pieno - full
doveva - where you go
carino - cute
dirti - tell you
arrivederci - see you later
amica - friend
quali - Which
ritardo - delay
faceva - it was
vederti - see you
poter - can
grosso - big
giuro - I swear
esercito - army
occhiata - look
freddo - cold
vestiti - clothes
avrà - will
santo - holy
scusami - Im sorry
libero - free
centro - center
dimenticato - Forgot
america - America
lettera - letter
cavallo - horse
grado - degree
cercato - looked for
chiave - key
andrà - will
fallo - just do it
mare - sea
fermi - firm
nello - in
treno - train
sinistra - left
completamente - completely
saputo - known
scoperto - discovered
scusate - sorry
avevano - they had
caffè - coffee
tempi - times
rumore - noise
sesso - sex
silenzio - silence
uh - uh
intenzione - intention
laggiù - over there
arrivando - coming
chiedere - to ask
rapporto - relationship
sente - hears
apri - you open
servono - serve
ricorda - remember
trovo - I find
maestro - master
terribile - terrible
fronte - front
otto - eight
pubblico - public
cervello - brain
interessa - interest
tranquillo - quiet
rispetto - respect
destra - right
quante - how much it is
aiutare - to help
nero - black
mille - one thousand
diritto - right
accidenti - damn
saremo - we will be
peggio - worse
realtà - reality
consiglio - Advice
dovevo - I had to
stanotte - tonight
diverso - different
dolore - ache
pronta - ready
impossibile - impossible
anima - soul
prove - evidence
omicidio - murder
alcune - some
vestito - dress
risposta - reply
siediti - sit down
cambiato - changed
ferma - stop
governo - government
aspettando - waiting for
linea - line
normale - normal
tenente - lieutenant
ragae - ragae
sorpresa - surprise
colonnello - colonel
dí - of
vengono - are
porti - ports
farci - make us
partita - game
guardia - guard
chiuso - closed
direi - Id say
soli - just
sapeva - He knew
fin - from
manca - it lacks
cavolo - cabbage
base - basis
diceva - he said
harry - harry
san - St.
vale - worth
duro - hard
chiamata - call
george - george
ordini - orders
tenere - to keep
presa - socket
charlie - charlie
mike - mike
riguardo - about
luogo - place
paul - paul
personale - staff
incontro - meeting
volevi - you wanted
vinto - won
conosciuto - known
dagli - by
interessante - Interesting
sergente - sergeant
sparato - shot
oro - gold
dl - dl
dà - from
avevamo - we had
sembrava - It seemed
altrimenti - otherwise
aspettate - expect
posizione - position
caldo - hot
nonno - not no
potevo - I could
immagino - I imagine
migliori - best
inferno - hell
nonna - grandmother
dolce - sweet
vive - lives
notizie - news
luna - moon
miss - miss
semplicemente - simply
medico - doctor
esiste - exists
esempio - example
zona - area
proposito - purpose
uniti - united
pezzi - pieces
trovi - find
inglese - English
parlo - I speak
errore - mistake
maggiore - greater
continuare - to continue
scappare - to run away
seconda - second
oddio - oh God
eccolo - there he is
gesù - Jesus
attraverso - through
programma - program
perciò - therefore
riesci - are able
net - net
chiudi - close
gamba - leg
vostre - your
saresti - would you be
passi - steps
verrà - it will come
salute - health
birra - beer
comandante - commander
assassino - murderess
simile - similar
possibilità - possibility
rimasto - remained
caccia - hunting
poliziotto - policeman
questione - question
carta - paper
lavora - working
controllare - to check
spettacolo - show
naturalmente - of course
scrivere - to write
jimmy - jimmy
contento - happy
volo - flight
promesso - promised
stessi - themselves
passa - passes
insomma - in conclusion
chiesa - church
partire - start
oppure - or
carne - meat
pranzo - lunch
studio - study
entro - within
appuntamento - appointment
sembri - you look
pena - punishment
bianco - White
secondi - seconds
missione - mission
usa - USA
dia - dia
arrivati - arrived
fermati - stopped
calmati - take it easy
forma - form
giusta - right
compleanno - birthday
rimanere - stay
palle - balls
barca - boat
affare - deal
ie - ie
de - de
esserci - occur
peter - peter
max - max
coi - with
nord - north
leggere - to read
uscita - Exit
cioè - that is
ascoltami - listen to me
braccio - arm
informazioni - information
certamente - of course
direttore - director
canzone - song
maledizione - curse
scarpe - shoes
colpito - hit it
schifo - disgust
pericolo - danger
andati - gone
mica - not
necessario - necessary
umano - human
bellissima - gorgeous
rosso - red
soldato - soldier
don - Don
fossero - they were
dite - of you
corso - course
regalo - gift
rubato - stolen
carina - nice
dunque - therefore
bar - bar
figliolo - son
classe - class
stronzate - bullshit
brutta - ugly
scherzando - joking
lunga - long
benvenuto - welcome
banca - bank
negozio - shop
sogni - dreams
sud - south
spalle - shoulders
mostro - monster
pochi - few
intendo - I mean
dura - tough
triste - sad
buonasera - good evening
attacco - attack
bob - bobsleigh
james - james
tocca - touching
muoviti - move
dirò - I will say
potrebbero - they might
affatto - at all
sala - room
lavori - works
piena - full
vedrai - you will see
sappia - know
comprare - to buy
qualcun - someone
belle - beautiful
metri - meters
scelto - chosen
professore - teacher
sbrigati - hurry up
jim - jim
adoro - I adore
aiuti - aid
parigi - Paris
vivi - alive
comando - command
pericoloso - dangerous
dannazione - damnation
scommetto - I bet
occasione - opportunity
mary - mary
metà - half
spazio - space
regole - rules
contatto - contact
spirito - spirit
povero - poor
senta - hear
appartamento - flat
gambe - legs
parliamo - let's talk
pelle - skin
riuscito - succeeded
cucina - kitchen
bomba - bomb
combattere - fight
pomeriggio - afternoon
pianeta - planet
diventato - become
avremo - we ll have
ehm - hum
viva - Viva
stavi - you were
conoscere - know
mangia - it eats
visita - visit
soldati - soldiers
cattivo - bad
aiutami - help me
prometto - I promise
sposato - married
ovunque - everywhere
ama - loves
stupida - stupid
bill - bill
rotto - Broken
tale - such
fiume - river
fratelli - brothers
nemico - enemy
ovviamente - obviously
arma - weapon
lingua - tongue
borsa - bag
uscito - released
vino - wine
libri - books
destino - destiny
sicuramente - certainly
maria - Mary
piangere - to cry
dovrai - you
reale - real
palla - ball
preoccupare - worry
ballo - dance
venuti - came
iniziato - started
arrivata - arrived
usato - used
sentite - feeling
urla - yell out
cerco - I look for
nato - born
alzati - get up
aperto - open
ritorno - return
nove - nine
molta - much
salvare - to save
salvato - saved
capisce - understands
ê - is
principe - prince
lista - list
intero - full
avremmo - we would
popolo - people
passaggio - passage
finestra - window
alex - alex
ricerca - Research
differenza - difference
saltare - jump
torni - return
tavolo - table
quegli - those
ridere - to laugh
codice - code
notizia - news
avrebbero - would
vento - wind
libera - free
speranza - hope
pagato - paid
diciamo - let's say
posti - seats
ufficiale - official
frega - cares
costa - it costs
sparare - shoot
animali - animals
buone - good
farebbe - would do
libertà - freedom
farsi - get
incontrato - met
pesce - fish
serata - evening
certa - certain
all - all
società - society
francese - French
temo - I fear
livello - level
stazione - railway station
americano - American
computer - computer
droga - drug
digli - say to Him
prenda - take
detective - detective
lato - side
lasciate - leave
ami - do you love
vecchi - old people
guardando - watching
hotel - hotel
ultimi - last
sceriffo - sheriff
lascio - leave
americani - American
sezione - section
imparato - learned
you - you
regina - Queen
tommy - tommy
ballare - to dance
bellissimo - very beautifull
cominciare - begin
vederlo - see him
averlo - have it
esci - go out
scorsa - last
tony - tony
riguarda - it concerns
star - star
naso - nose
bobby - bobby
padrone - master
andremo - we will go
danny - danny
alta - high
comprato - bought
vorrebbe - he would
metto - I put
seguito - following
aprire - to open
correre - to run
farei - I would do
dovrebbero - they should
alcun - any
fiori - flowers
inutile - useless
danno - damage
stesse - same
corri - run
sí - Yes
casino - casino
imparare - learn
torniamo - we return
natura - nature
lavorato - worked
cliente - customer
rende - makes
londra - London
riesce - succeeds
immediatamente - immediately
giovani - Young people
guida - guide
biglietto - ticket
stavamo - we were
zia - aunt
razza - race
cani - dogs
stamattina - This morning
intelligente - intelligent
blu - blue
effetti - effects
cominciato - started
avrò - I will
cambio - exchange
chiavi - keys
intera - whole
taxi - Taxi
gay - gay
fortunato - lucky
corsa - race
jake - jake
giudice - judge
accanto - next
villaggio - village
cinema - cinema
stanco - tired out
lezione - lesson
decisione - decision
bianca - white
eddie - eddie
bordo - board
ray - ray
segno - sign
ponte - bridge
club - club
nuovi - new
umani - human
muro - wall
interno - internal
energia - power
aiutarti - help you
sapevi - Did you know
darmi - me
trovata - stunt
seduto - sitting
spada - sword
andrò - I will go
presente - here I am
guardami - watch me
processo - process
scoprire - to discover
faranno - will
piccoli - little ones
segnale - signal
ferito - injured
farla - it
battaglia - battle
meraviglioso - wonderful
scherzo - joke
it - it
cavalli - horses
paga - pay
ride - laughs
porca - ridge
chiedi - ask
mangiato - eat
ascolti - you listen
ringrazio - I thank
comincia - it starts
mette - puts
prezzo - price
grave - serious
dovevi - you had to
tanta - so much
billy - billy
infatti - indeed
strana - strange
eroe - hero
and - and
suono - sound
iniziare - to start
fece - he made
documenti - documents
collo - neck
comune - common
denti - teeth
sarebbero - would
vincere - to win
lavorando - working
vedete - you see
pensate - think
intendi - you mean
los - los
storie - stories
memoria - memory
data - date
terzo - third
buoni - good
aiutarmi - help
massimo - maximum
miglior - best
buio - dark
colore - color
matto - crazy
prendete - take
vederla - see her
carte - cards
suona - it sounds
rispondere - reply
cerchi - circles
cellulare - cell phone
soprattutto - mostly
sarah - sarah
italianshare - italianshare
diventa - becomes
difesa - defence
corte - court
suppongo - I presume
maledetto - cursed
potrà - will
opera - Opera
partito - party
attenti - careful
pazza - crazy
persino - even
scendere - alight
fede - wedding ring
esperienza - experience
vorresti - would you
parlarti - talk to you
gliel - vaccum
bacio - kiss
farcela - do it
responsabile - responsible
enorme - huge
chiamano - they call
messa - mass
ex - former
fiducia - confidence
ognuno - each one
periodo - period
dovere - duty
albero - tree
verde - green
steve - steve
smettere - stop
darti - give you
azione - action
odore - smell
rispondi - Reply
locale - local
latte - milk
bellezza - beauty
vittima - victim
vicini - neighbors
cae - cae
visti - visas
entrato - entered
congratulazioni - congratulations
felici - happy
nell - in
prendiamo - we take
tira - pulls
nomi - names
nick - nick
colazione - Breakfast
íl - the
tornata - returned
ottima - Great
idee - ideas
isola - island
fila - row
farle - them
contrario - contrary
sveglia - Wake Up
lee - lee
maggior - greatest
leggi - read
chissà - who knows
sembrano - they seem
roma - Rome
dubbio - doubt
camion - truck
braccia - arms
sissignore - yes sir
lasciatemi - let me
stella - star
malato - sick
nascosto - hidden away
citta - city
rischio - risk
averti - have you
pressione - pressure
orribile - horrible
edificio - building
progetto - project
portata - flow
età - age
diversi - different
parlarne - talk about
sara - Sara
camminare - to walk
lascialo - leave him
capace - to be able
dott - Dr.
piede - foot
calmo - calm
chiusa - closed
principessa - princess
dimenticare - forget
zitta - shut up
attenta - careful
potrai - you
sali - salts
scopo - purpose
dipende - It depends
grida - shout
sii - Yay
show - show
abbiano - have
vorrà - will want
andava - He was
piaciuto - liked
stampa - press
viso - face
ottenere - obtain
segreti - secrets
stelle - stars
rosa - pink
nuove - new
salire - to go up
pensiero - thought
dappertutto - everywhere
ristorante - restaurant
potesse - could
conta - counts
giornale - newspaper
serie - series
test - test
luci - lights
chiudere - to close
gatto - cat
aiutarla - help
giustizia - justice
tranne - except
albergo - hotel
ascoltare - to listen
tiro - shot
relazione - report
basso - bass
resti - remains
compagno - partner
stavolta - this time
crimine - crime
tengo - tengo
angolo - angle
dovremo - we will
cappello - hat
operazione - operation
fore - fore
chiamate - calls
estate - summer
desiderio - desire
mercato - market
preoccupi - worry
incinta - pregnant
rilassati - take it easy
clienti - customers
sposa - bride
arte - art
coltello - knife
strade - roads
continui - continues
mossa - move
macchine - cars
preferisco - I prefer
rose - rose
vite - lives
certe - certain
son - son
toccare - to touch
milione - million
buco - hole
centrale - central
lassù - up there
tranquilla - Quiet
carriera - career
anello - ring
uso - use
stile - style
metta - put
contratto - contract
compito - task
faresti - would you do
paradiso - paradise
provi - try
forze - Strength
indirizzo - address
domattina - tomorrow morning
anzi - rather
poliziotti - policemen
finta - fake
riunione - meeting
effetto - effect
punti - points
torta - cake
scorso - last
troia - slut
animale - animal
qualcos - qualcos
to - to
faccenda - affair
darò - I will give
lettere - letters
chiede - asks
notato - noted
particolare - particular
inoltre - Moreover
offerta - offer
prendermi - take
campione - sample
fermare - stop
aperta - open
agenti - agents
sembrare - to seem
politica - policy
colpevole - guilty
scegliere - to choose
rimane - remains
vedremo - we ll see
ghiaccio - ice
washington - Washington
dovrà - will
finisce - ends
fucile - rifle
colpi - shots
utile - helpful
averla - have it
voci - voices
perfetta - perfect
ispettore - inspector
autobus - bus
dati - data
ridicolo - ridiculous
will - will
potessi - I could
altezza - height
guidare - to drive
primi - first
decidere - to decide
sottofondo - background
volare - to fly
valore - value
campagna - countryside
tè - you
tornate - return
vendere - to sell
muore - dies
charles - charles
bevi - Frequency
eccola - here she is
cadere - fall
scatola - box
peso - weight
magnifico - magnificent
ragazzino - little boy
prendendo - taking
ubriaco - drunk
mentito - lied
santa - holy
egli - he
tenga - takes
martin - martin
sensazione - sensation
principale - main
saremmo - we would
schiena - back
caduto - fallen
girare - turn
contenta - happy
piaceva - He liked
orologio - clock
insegnato - taught
sbaglio - mistake
entri - enter
porte - doors
cioe - ie
maestà - majesty
arrivano - they arrive
conti - accounts
cantare - to sing
bevuto - drunk
angelo - angel
sparo - shot
creato - created
dimmelo - tell me
naturale - natural
importanza - importance
baby - baby
case - houses
manda - sends
fumo - smoke
domenica - Sunday
uccisa - killed
umana - Human
verita - truth
cento - one hundred
rotta - route
nipote - grandson
date - at your place
teatro - theater
militare - military
povera - poor
andartene - leave
pensano - they think
muoversi - move
palazzo - palace
convinto - convinced
ascoltate - listen
innocente - innocent
finale - the final
purtroppo - Unfortunately
giochi - games
innamorato - in love
gira - runs
breve - short
dall - from
crederci - believe it
turno - round
stavano - they were
uccidermi - kill myself
emergenza - emergency
benvenuti - welcome
improvviso - sudden
andarci - go there
tetto - roof
montagna - mountain
dirle - tell
diverse - different
tiene - keeps
dovrò - I will have to
bottiglia - bottle
andrai - you will go
chiedendo - asking
nera - Black
pane - bread
muovetevi - move
preoccupato - worried
venne - it was
ricco - rich
stanca - weary
richard - richard
mark - mark
chiamami - Call me
discorso - speech
mandare - send
evitare - to avoid
accettare - to accept
immagini - images
giornali - newspapers
sir - sir
ministro - minister
momenti - moments
simon - simon
mantenere - to maintain
giardino - garden
lotta - fight
distrutto - destroyed
pò - bit
antonio - antonio
retro - back
cerchiamo - try
bicchiere - glass
pantaloni - trousers
siate - you are
tribunale - court
lasciamo - we leave
gioia - joy
bastardi - bastards
paziente - patient
dr - dr
controlla - check it out
arrabbiato - angry
avermi - me
genio - genius
saprei - know
giu - down
debole - weak
piani - plans
coppia - couple
arresto - arrest
scusatemi - excuse me
mettiti - put yourself
allarme - alarm
sarete - you will be
seguire - follow
est - East
ricordare - to remember
incontrare - meet
talento - talent
vissuto - lived
furono - they were
condizioni - conditions
cattiva - bad
cinese - Chinese
aiutato - helped
malattia - disease
suonare - play
tipi - types
dito - finger
laboratorio - laboratory
preferito - favorite
nemici - enemies
vittoria - victory
potevi - you could
dritto - straight ahead
ferita - wound
svegliati - wake up
unità - unit
francia - France
diamo - let's
grossa - gross
creare - create
direzione - direction
propria - own
sposata - married
migliaia - thousand
mal - ache
rimani - stay
occupato - busy
sabato - Saturday
mattino - morning
morendo - dying
canta - sings
provo - I try
sentimenti - feelings
sene - sene
bei - beautiful
vuoto - empty
spiaggia - beach
testimone - witness
dita - fingers
esce - goes out
jerry - jerry
isubs - isubs
cambia - change
troviamo - we find
gas - gas
dipartimento - department
chris - chris
amor - sake
thomas - thomas
lucy - lucy
miglia - miles
smesso - stopped
facevo - I did
sedia - chair
corrente - current
cadavere - dead body
andarmene - leave
victor - victor
importanti - important
jane - jane
obiettivo - target
fianco - side
entrate - revenue
conosciamo - we know
fantastica - fantastic
furgone - van
amato - beloved
iscrew - iscrew
motore - engine
inizia - it begins
presento - present
ladro - thief
soluzione - solution
matt - matt
sguardo - look
parlano - they talk
fantasma - ghost
sposare - to marry
spiegare - explain
pensarci - think about it
immagine - image
entrata - entry
pioggia - rain
eppure - but yet
immaginare - to imagine
potente - powerful
rock - rock
sé - self
vittime - victims
famoso - famous
uccello - bird
scendi - get off
accaduto - happened
giacca - jacket


 que - what
 o - the
 a - the
 não - no
 de - in
 é - It's
 e - and
 um - one
 eu - me
 para - for
 se - if
 me - me
 uma - an
 está - it is
 com - with
 por - per
 do - of
 te - you
 os - the
 em - in
 ele - him
 bem - good
 isso - that
 mas - but
 como - as
 da - gives
 você - you
 sim - yea
 no - at the
 as - at
 mais - more
 meu - my
 aqui - on here
 na - at
 muito - much
 vamos - let's go
 foi - was
 estou - I am
 ela - she
 vai - go
 fazer - do
 tem - have
 isto - this
 já - already
 minha - my
 tudo - all
 só - only
 nos - we
 ser - to be
 ao - to
 tenho - have
 agora - now
 tu - you
 vou - I'm going
 à - the
 sei - know
 quando - when
 lá - over there
 há - there is
 porque - because
 onde - where
 nada - anything
 seu - your
 estás - these
 quem - who
 então - so
 era - was
 sua - your
 ou - or
 lhe - you
 quero - I want
 sou - am
 nós - we
 coisa - thing
 são - are
 ter - Tue
 dizer - tell
 eles - they
 pode - can
 esta - it is
 bom - good
 mesmo - same
 todos - all
 mim - me
 dos - from
 estava - was
 posso - can
 este - this one
 ver - to see
 nunca - never
 assim - like this
 estão - they are
 casa - house
 lo - it
 até - up until
 disse - said
 quer - would you like
 temos - we have
 tempo - time
 acho - think
 ir - go
 obrigado - thank you
 também - also
 tens - hast
 deus - God
 quê - what
 ainda - still
 vez - turn
 noite - night
 pai - dad
 tão - so
 teu - your
 falar - speak
 tua - your
 melhor - best
 dia - day
 sobre - about
 certo - right
 sempre - ever
 sabe - you know
 és - are
 depois - after
 vida - life
 mãe - mom
 oh - oh
 nem - nor
 senhor - Mr
 estamos - we are
 anos - years
 olá - hi
 talvez - perhaps
 sr - Mr.
 homem - man
 sem - without
 sabes - know
 alguém - someone
 das - of
 boa - good
 algo - something
 ti - you
 alguma - some
 vocês - you
 coisas - things
 tinha - had
 dois - two
 dele - his
 claro - clear
 vais - going
 estar - be
 ficar - stay
 aí - there
 pelo - fur
 pessoas - people
 queres - want
 essa - that
 esse - that
 verdade - truth
 faz - does
 parece - looks
 grande - big
 antes - before
 dinheiro - money
 ninguém - nobody
 apenas - only
 pouco - little
 preciso - need
 la - over there
 comigo - with me
 outra - other
 trabalho - job
 merda - shit
 tipo - type
 vão - vain
 fora - out
 vá - go
 espera - wait
 qualquer - any
 hoje - today
 qual - what
 todo - all
 olha - looks
 pela - through the
 podes - can
 saber - to know
 toda - all
 deve - should
 daqui - from here
 podemos - we can
 filho - son
 mulher - woman
 mundo - world
 disso - of this
 meus - my
 seus - their
 nome - name
 dar - to give
 cá - here
 seja - be
 outro - other
 nosso - our
 pois - because
 diz - says
 num - on one
 nossa - wow
 quanto - how much
 ei - hey
 sair - get out
 queria - I wanted
 vem - comes
 volta - return
 amigo - friend
 novo - new
 embora - although
 lugar - place
 será - will be
 certeza - assurance
 três - three
 sério - seriously
 mal - bad
 têm - have
 desculpa - excuse
 carro - car
 às - at
 problema - problem
 menos - any less
 passa - goes by
 vezes - times
 nas - at the
 ali - there
 dela - her
 dentro - inside
 aconteceu - It happened
 querida - Dear
 primeiro - first
 amor - love
 pensar - think
 todas - all
 cara - guy
 lado - side
 fez - did
 contigo - with you
 aos - to
 parte - part
 consigo - I can
 anda - walking
 algum - some
 numa - in
 aquele - that
 hora - hour
 voltar - come back
 homens - men
 dias - days
 gente - people
 tentar - try
 gosto - taste
 porquê - because
 vi - saw
 tarde - evening
 pensei - thought
 entre - in between
 suas - your
 los - them
 duas - two
 obrigada - thanks
 desculpe - excuse me
 sabia - I knew
 fui - went
 podem - can
 atrás - behind
 uns - some
 cabeça - head
 fica - stay
 somos - are
 pra - for
 frente - front
 cidade - city
 amanhã - tomorrow
 cima - top
 momento - time
 razão - reason
 nenhum - none
 família - family
 amigos - friends
 desde - since
 vos - you
 tal - such
 horas - hours
 sinto - I
 acha - think
 achas - think
 polícia - police
 outros - others
 foram - were
 tenha - has
 seria - would be
 medo - fear
 tanto - so much
 pronto - ready
 precisa - need
 entrar - log in
 nova - new
 deles - their
 forma - form
 aquilo - that
 passar - pass
 chegar - to arrive
 quase - almost
 história - history
 deixar - leave
 porta - door
 cuidado - caution
 cada - each
 ia - would
 podia - could
 ah - ah
 fiz - I did
 pessoa - person
 lhes - them
 realmente - really
 ideia - idea
 fosse - was
 irmão - brother
 morrer - die
 devia - should
 alguns - some
 morto - dead
 minhas - my
 adeus - goodbye
 feliz - happy
 minutos - minutes
 primeira - first
 ajudar - to help
 caso - case
 contra - against
 sorte - luck
 aquela - that
 ano - year
 encontrar - meet
 vir - come over
 caminho - way
 rapaz - boy
 ouvir - hear
 enquanto - while
 näo - no
 maneira - way
 olhos - eyes
 estes - these
 espero - I expect
 sido - been
 poderia - could
 semana - week
 desta - this
 trabalhar - to work
 água - water
 matar - kill
 durante - during
 quarto - bedroom
 conta - account
 senhora - lady
 morte - death
 tive - I had
 neste - in this
 terra - Earth
 logo - soon
 ajuda - help
 guerra - war
 estas - these
 dá - gives
 rápido - fast
 feito - done
 pára - for
 querido - Dear
 levar - take along
 óptimo - optimum
 mãos - hands
 jogo - game
 manhã - morning
 arma - weapon
 querem - they want
 fala - speaks
 perto - close
 for - is
 nossos - our
 importante - important
 algumas - some
 faço - I do
 poder - power
 cinco - five
 pessoal - folks
 calma - calm
 teus - your
 precisamos - we need
 rapazes - boys
 á - The
 juntos - together
 acontecer - to happen
 comer - eat
 filha - daughter
 fim - end
 faça - knife
 acredito - I believe
 diga - say it
 baixo - low
 venha - come on
 causa - cause
 sra - Mrs.
 espere - hang on
 escola - school
 meio - means
 maior - bigger
 umas - some
 vê - see
 mão - hand
 problemas - problems
 vejo - watch
 nisso - in that
 mesma - same
 começar - begin
 chefe - boss
 dormir - to sleep
 velho - old
 havia - there were
 acabou - ended
 disto - from this
 dr - dr
 mulheres - women
 idiota - moron
 única - only
 última - last
 sabem - know
 nenhuma - none
 viu - saw
 dólares - dollars
 difícil - difficult
 quatro - four
 coração - heart
 número - number
 deste - this
 lamento - am sorry
 viver - to live
 prazer - pleasure
 sai - leaves
 crianças - children
 olhe - look
 ouve - hears
 segundo - second
 chega - arrives
 eram - they were
 fazendo - doing
 andar - walk
 capitão - captain
 muitas - many
 ouvi - I heard
 muitos - many
 elas - they
 sangue - blood
 estado - state
 importa - it matters
 corpo - body
 teve - had
 penso - I think
 parar - stop
 gostaria - would
 mil - thousand
 usar - use
 ontem - yesterday
 rapariga - girl
 significa - means
 festa - party
 deixa - cue
 pequeno - small
 devo - I
 mau - bad
 força - force
 longe - far
 filhos - children
 depressa - quickly
 morreu - died
 marido - husband
 olhar - look
 presidente - president
 tomar - to take
 essas - these
 nesta - in this
 demais - too much
 meses - months
 gosta - like
 esses - those
 muita - lots of
 pena - pity
 pensa - think
 perder - lose
 veio - came
 trás - back
 esperar - wait
 contar - tell
 buscar - search
 paz - peace
 procura - demand
 irmã - sister
 disseste - said
 raio - lightning
 teria - it would have
 pais - parents
 altura - height
 digo - I say
 menina - girl
 estavam - they were
 errado - wrong
 tivesse - had
 fazes - you do
 vindo - coming
 filme - movie
 fácil - easy
 acordo - wake up
 nao - no
 pergunta - question
 possível - possible
 vivo - live
 cama - bed
 dizem - say
 acabar - end
 suficiente - enough
 fizeste - did
 estranho - weird
 sabemos - we know
 segurança - safety
 puta - hooker
 brincar - play
 licença - license
 além - beyond
 conseguir - get
 livro - book
 tirar - take
 país - parents
 jantar - dinner
 palavra - word
 seis - six
 conheço - I know
 deu - He gave
 nossas - our
 passado - past
 fique - stay
 boca - mouth
 outras - others
 comida - food
 falta - lack
 armas - weapons
 ficou - stayed
 fazem - make
 bastante - quite
 sozinho - alone
 deveria - should
 ai - there
 minuto - minute
 pelos - by
 luz - light
 ar - air
 tuas - your
 música - music
 pagar - pay
 fogo - fire
 próprio - own
 atenção - attention
 chegou - has arrived
 quiser - want
 forte - strong
 existe - exist
 possa - be likely to
 pedir - ask
 sentir - to feel
 acreditar - to believe
 partir - leave
 continua - to be continued
 mudar - to change
 toma - takes
 rei - king
 direito - right
 jovem - young
 único - single
 café - coffee
 diferente - different
 vossa - yours
 culpa - fault
 plano - plan
 rua - street
 foste - wast
 milhões - millions
 consegue - can
 pé - foot
 correr - run
 próxima - next
 devias - You should
 equipa - team
 pequena - small
 linda - beautiful
 pare - stop
 sequer - even
 jogar - play
 fico - I get
 provavelmente - most likely
 exactamente - exactly
 passou - passed on
 casamento - marriage
 deixe - leave
 aqueles - those
 especial - special
 ganhar - win
 sala - living room
 grandes - big ones
 semanas - weeks
 resto - rest
 houve - there was
 pior - worse
 esteja - is
 esposa - wife
 natal - Christmas
 mr - mr
 continuar - continue
 quis - wanted
 veja - look
 dez - ten
 bonito - pretty
 precisas - accurate
 ponto - score
 cão - dog
 visto - visa
 médico - doctor
 estavas - wast
 estive - I have been
 criança - kid
 vim - I came
 louco - crazy
 raios - rays
 queremos - we want
 amo - master
 devem - should
 beber - drink
 agente - agent
 seguir - follow
 negócio - business
 alto - high
 irá - will
 gostava - I liked
 las - them
 último - last
 modo - mode
 oi - hi
 demasiado - too
 haver - be
 sentido - sense
 bonita - beautiful
 chamar - to call
 acontece - it happens
 senhores - gentlemen
 lindo - pretty
 boas - good
 comprar - purchase
 matou - killed
 sol - Sun
 devemos - we must
 vosso - your
 entra - goes into
 vês - you see
 falando - speaking
 consegues - can you
 cedo - early
 chama - flame
 tom - tone
 entendo - I understand
 frank - frank
 viste - you saw
 esteve - was
 livre - free
 prisão - prison
 viagem - trip
 doutor - doctor
 palavras - words
 querer - want
 sistema - system
 tio - uncle
 oportunidade - opportunity
 campo - field
 banho - shower
 novamente - again
 seguro - safe
 pôr - per
 próximo - next
 conhece - knows
 preocupes - worry
 vontade - will
 sexo - sex
 sob - under
 mortos - dead
 barco - boat
 adoro - love
 respeito - respect
 grupo - group
 professor - teacher
 descobrir - to discover
 cabelo - hair
 chão - floor
 fazemos - We do
 certa - certain
 ligar - turn on
 manter - keep
 perfeito - perfect
 miúdo - kid
 terá - will have
 capaz - able
 portanto - therefore
 situação - situation
 arranjar - get
 avião - airplane
 começou - started
 simples - simple
 finalmente - finally
 ordem - order
 futuro - future
 própria - own
 dessa - of that
 bebé - baby
 george - george
 connosco - us
 linha - line
 deves - must
 sítio - site
 encontro - meeting
 vista - view
 saia - skirt
 charlie - charlie
 questão - question
 gostas - like
 precisar - need
 achei - I found
 david - david
 sinal - signal
 desse - of this
 deixou - left
 aonde - where
 emprego - job
 completamente - completely
 sam - sam
 dê - in
 local - local
 vale - Valley
 droga - damn it
 perguntar - to ask
 creio - I think
 idade - age
 pelas - by
 the - the
 nisto - on this
 estávamos - we were
 bocado - bit
 casar - marry
 nessa - in that
 lutar - fight
 hey - hey
 carta - letter
 apanhar - take
 leva - takes
 peço - I ask
 pensas - think
 jeito - way
 fundo - bottom
 tinham - they had
 céu - sky
 mesa - table
 assunto - subject matter
 fome - hunger
 exército - army
 ler - read
 roupa - clothing
 perguntas - questions
 nesse - in that
 sonho - dream
 gajo - dude
 amiga - friend
 notícias - news
 miúda - girl
 quiseres - want
 interessa - interest
 doente - sick
 governo - government
 conhecer - to know
 estúpido - stupid
 estiver - is
 melhores - best
 bons - good
 daí - so
 faria - would make
 mostrar - show
 joe - joe
 pegar - take
 fiquei - I stayed
 tipos - types
 estrada - road
 banco - bank
 verdadeiro - true
 povo - people
 sozinha - alone
 escritório - office
 tocar - touch
 sete - seven
 indo - going
 engraçado - funny
 iria - would go
 nele - in him
 lei - law
 padre - priest
 trouxe - brought
 fizeram - made
 dito - said
 tá - OK
 simplesmente - simply
 tratar - treat
 programa - program
 diabo - devil
 mente - mind
 serviço - service
 voz - voice
 acredita - believes
 encontrei - found it
 presente - gift
 após - after
 resposta - answer
 mensagem - message
 fugir - to run away
 quantos - how many
 quente - hot
 companhia - company
 chamada - call
 volto - back
 mike - mike
 facto - fact that
 conversa - conversation
 mamã - mom
 através - through
 acabei - I have finished
 tinhas - you had
 consegui - I got it
 olhem - look
 normal - normal
 espaço - space
 escrever - write
 senhoras - ladies
 incrível - incredible
 dizes - say
 viva - alive
 bela - beautiful
 esquerda - left
 breve - short
 preso - stuck
 abrir - open
 procurar - search for
 preocupe - worry
 faças - do
 feira - market
 direita - right
 inferno - hell
 gostar - to like
 ataque - attack
 acidente - accident
 cabo - cable
 saiu - exited
 idéia - idea
 fixe - cool
 assassino - killer
 tempos - time
 segundos - the 2nd
 estivesse - was
 costas - back
 graças - thanks
 olho - eye
 mar - sea
 papel - paper
 chamado - called
 fomos - we
 salvar - to save
 ambos - both
 dor - pain
 frio - cold
 esperem - expect
 missão - mission
 diabos - hell
 pensava - thought
 ouça - listen
 pés - foot
 imediatamente - immediately
 cair - fall
 ouro - gold
 tenente - lieutenant
 escuta - listening
 chave - key
 mês - month
 luta - fight
 crime - crime
 bebida - beverage
 maldito - damn you
 venham - will
 ora - now
 centro - center
 bola - ball
 ótimo - great
 sente - feels
 cavalo - horse
 lembro - I remember
 fantástico - fantastic
 norte - north
 velha - old woman
 parabéns - congratulations
 guarda - guard
 caixa - cashier
 aposto - bet
 segunda - Monday
 relação - relationship
 disseram - they said
 coronel - colonel
 excelente - great
 conseguiu - got
 trazer - bring
 metade - half
 menino - boy
 sendo - being
 alma - soul
 juro - swear
 má - bad
 loja - store
 estará - will be
 parem - stop
 almoço - lunch
 advogado - lawyer
 sul - south
 mestre - master
 cheio - full
 surpresa - surprise
 garota - girl
 lista - list
 abre - opens
 acerca - about
 ordens - instructions
 oito - eight
 morta - dead
 paul - paul
 erro - error
 namorada - girlfriend
 começa - begins
 américa - America
 pobre - poor
 dançar - to dance
 fazia - was
 saiam - leave
 carne - beef
 cena - scene
 falou - said
 impossível - impossible
 conversar - talk
 escolha - choice
 informação - information
 animais - animals
 interessante - interesting
 posição - position
 branco - white
 legal - cool
 rio - river
 voltou - came back
 digas - tell
 realidade - reality
 belo - beautiful
 devíamos - should
 tiro - shot
 comandante - commander
 aprender - learn
 dizendo - saying
 prova - test
 harry - harry
 soube - I knew
 ouviu - heard
 negócios - business
 vestido - dress
 sargento - sergeant
 destino - destiny
 tivemos - we had
 abaixo - below
 hei - hei
 honra - honor
 energia - energy
 falo - I speak
 fizemos - we did
 igreja - church
 trabalha - works
 passo - step
 ben - ben
 vidas - lives
 funciona - it works
 falei - I spoke
 liberdade - freedom
 socorro - help
 vêm - comes
 vive - lives
 parecia - It looked
 cerca - about
 esquece - forgets
 tenham - have
 conseguimos - we can
 câmara - chamber
 papai - dad
 bar - Pub
 tira - strip
 horrível - horrible
 pá - Pan
 segredo - secret
 maravilhoso - wonderful
 cerveja - beer
 precisam - need
 divertido - funny
 naquela - at that
 basta - enough
 ouviste - heard
 reunião - meeting
 contente - happy
 volte - come back
 regras - rules
 miúdos - kids
 peter - peter
 planeta - planet
 triste - sad
 piada - joke
 ihe - ihe
 vejam - see
 entender - understand
 prometo - promise
 passada - last
 jimmy - jimmy
 aniversário - birthday
 pudesse - could
 exemplo - example
 tiver - have
 eras - ages
 acaba - ends
 perdi - I've lost
 tenta - try
 fato - fact
 debaixo - under
 sejas - thou be
 prontos - ready
 tentei - I tried
 serão - will be
 explicar - explain
 americano - American
 avó - grandfather
 levou - it took
 meia - sock
 totalmente - totally
 delas - from them
 receber - to receive
 perigo - danger
 saúde - cheers
 máquina - machine
 tentando - trying
 namorado - boyfriend
 diria - would say
 conheci - met
 cristo - Christ
 quantas - how many
 tínhamos - we had
 saída - output
 tenhas - you've
 maioria - majority
 bater - hit
 bolas - balls
 apartamento - apartment
 diferentes - many different
 negro - black
 podias - you could
 estarei - will be
 desejo - wish
 perdeu - lost
 garoto - boy
 naquele - that
 tanta - so
 livros - books
 năo - no
 leve - light
 diferença - difference
 fale - speak
 destes - of these
 base - base
 perceber - to perceive
 humano - human
 esquecer - forget
 quais - which are
 irei - I will go
 terrível - terrible
 mamãe - mom
 duro - hard
 mandar - send
 janela - window
 junto - together
 vender - sell
 ama - love
 público - public
 ás - at
 nave - nave
 sonhos - dreams
 põe - put
 tradução - translation
 provas - evidences
 entendido - understood
 tribunal - court
 monte - hill
 meninas - girls
 área - area
 conheces - know
 bomba - bomb
 farei - I will
 perigoso - dangerous
 experiência - experience
 bill - bill
 acima - above
 percebo - I realize
 existem - exist
 pernas - legs
 lua - moon
 graça - grace
 acaso - chance
 peça - piece
 estaria - would
 decisão - decision
 odeio - I hate
 par - pair
 sabias - knew
 pronta - ready
 metros - meters
 silêncio - silence
 humanos - humans
 seguinte - following
 subir - ride up
 devagar - slowly
 espécie - species
 clube - club
 oficial - official
 dei - I gave
 percebi - I noticed
 senão - if no
 compreendo - I understand
 verão - summer
 enorme - huge
 avô - grandfather
 cérebro - brain
 televisão - television
 propósito - purpose
 resolver - solve
 últimos - last
 inglês - English
 esperança - hope
 trata - treats
 maluco - crazy
 irmãos - brothers
 apesar - although
 dessas - these
 poderá - can
 contrário - contrary
 rainha - queen
 igual - equal
 parecer - seem
 suponho - I suppose
 dúvida - doubt
 achar - find
 doce - sweet
 danny - danny
 ilha - island
 repente - suddenly
 conselho - advice
 colocar - put on
 aquelas - those
 espírito - spirit
 tome - take
 corre - run
 cartas - cards
 raparigas - girls
 vossos - your
 encontrou - found
 saco - bag
 empresa - company
 foto - photograph
 loucura - madness
 acham - they find
 sejam - are
 controlo - control
 voce - you
 pensando - thinking
 azul - blue
 comboio - train
 vermelho - red
 hipótese - hypothesis
 destas - these
 roupas - clothes
 inteligente - smart
 afinal - after all
 estrela - star
 filmes - movies
 gelo - ice
 principal - main
 chá - tea
 parecem - look
 terminar - finish
 motivo - reason
 desculpem - sorry
 soldados - soldiers
 teres - esters
 vinho - wine
 americanos - American
 longo - long
 dizia - said
 chorar - cry
 universidade - university
 certamente - certainly
 usa - uses
 perdido - lost
 defesa - defense
 buraco - hole
 teste - test
 preço - price
 roubar - to steal
 braço - arm
 fotos - photos
 inteiro - all
 teremos - will
 xerife - sheriff
 comando - command
 carros - cars
 mentir - to lie
 cantar - sing
 cozinha - kitchen
 porcaria - filth
 zona - zone
 lembrar - remember
 desapareceu - disappeared
 toca - burrow
 necessário - required
 justo - fair
 confiar - trust
 nick - nick
 façam - make
 coragem - courage
 controle - control
 vós - you
 pareces - seem
 entende - you see
 nove - nine
 traz - brings
 proteger - protect
 aparecer - appear
 fiquem - becomes
 inimigo - enemy
 pele - skin
 percebes - barnacles
 contas - accounts
 tia - aunt
 deixei - I left
 saiba - know
 voar - fly
 nível - level
 desses - these
 lixo - trash
 tentou - he tried
 beleza - beauty
 suposto - supposed
 srta - MS
 preparar - prepare
 noites - nights
 dança - dance
 sapatos - shoes
 cuidar - take care
 soldado - soldier
 gostei - liked it
 novos - new
 come - eats
 segura - secure
 lembra - remember
 entrada - input
 entrou - came in
 arte - art
 peixe - fish
 pense - think
 chance - chance
 cheia - flood
 opinião - opinion
 podíamos - could
 rabo - tail
 serei - will be
 senti - felt
 alta - high
 esperando - waiting
 aceitar - accept
 som - sound
 querias - wanted
 ficam - are
 ficas - you stay
 pega - catch
 férias - vacation
 esqueça - forget
 exatamente - exactly
 precisava - needed
 cabrão - bastard
 nela - it
 animal - animal
 pediu - asked
 planos - plans
 sarah - sarah
 cheiro - smell
 herói - hero
 acontecendo - going
 funcionar - function
 passei - I spent
 código - code
 perna - leg
 londres - London
 drogas - drugs
 queira - want
 unidos - United
 lugares - places
 perdão - pardon
 vossas - yours
 estiveste - you were
 dentes - teeth
 contacto - contact
 viram - seen
 ideias - ideas
 espectáculo - show
 novas - new
 provar - prove
 nariz - nose
 vergonha - shame
 criar - create
 chaves - keys
 estados - states
 estrelas - stars
 louca - crazy
 fará - will make
 natureza - nature
 vens - come
 cliente - client
 ocupado - occupied
 iorque - york
 jovens - young
 começo - beginning
 estação - station
 vendo - seeing
 preto - black
 preocupado - worried
 dum - of a
 mudou - has changed
 liga - turns on
 caras - faces
 copo - cup
 cor - color
 tamanho - size
 cu - ass
 caiu - dropped down
 princesa - princess
 pedra - stone
 corrida - running
 nomes - names
 fé - faith
 branca - white
 escute - listen
 monstro - monster
 época - time
 brilhante - bright
 ficará - will
 terei - I will have
 direcção - direction
 daquele - that
 vento - wind
 dou - I give
 haverá - there will be
 casaco - coat
 chamas - flames
 início - start
 cansado - tired out
 mala - suitcase
 tiveste - you had
 árvore - tree
 mentira - lie
 batalha - battle
 continue - continues
 pegue - take it
 esperava - expected
 serve - it suits
 rico - rich
 charles - charles
 dado - given away
 eua - USA
 verdadeira - real
 cheguei - I arrived
 costumava - I used to
 majestade - majesty
 tente - try
 ido - gone
 sucesso - success
 céus - heavens
 pedido - order
 alvo - target
 rosto - face
 termos - terms
 classe - class
 cães - dogs
 velocidade - velocity
 saudades - miss you
 forças - forces
 santo - holy
 canção - song
 calças - pants
 cabra - goat
 pensam - think
 departamento - department
 maldita - damn
 limpar - to clean
 cartão - card
 relatório - report
 navio - ship
 velhos - old
 barulho - noise
 flores - flowers
 ê - and
 steve - steve
 detective - detective
 visita - visit
 lidar - to deal
 atrasado - late
 pedi - I asked
 gato - cat
 emergência - emergency
 disparar - shoot
 parede - wall
 operação - operation
 jamais - never
 tornar - become
 longa - long
 milhares - thousands
 cavalheiros - gentlemen
 absolutamente - absolutely
 sentes - feel
 lsso - that
 gostam - like
 vimos - saw
 destruir - to destroy
 beijo - kiss
 risco - risk
 preparado - prepared
 seres - beings
 ha - there is
 comum - common
 computador - computer
 cavalos - horses
 falamos - speak
 restaurante - restaurant
 cinema - movie theater
 prefiro - I prefer
 responsável - responsible
 vinte - twenty
 jornal - newspaper
 li - I read
 descer - go down
 esperto - clever
 esconder - to hide
 daquela - that
 somente - only
 movimento - movement
 caro - expensive
 pista - track
 porco - pig
 doido - crazy
 rir - laugh
 praia - beach
 estilo - style
 acção - action
 ajude - help
 cortar - cut
 escolher - to choose
 maldição - curse
 vieram - they came
 imaginar - to imagine
 irão - will
 luzes - lights
 histórias - stories
 abra - open it
 língua - language
 distância - distance
 fechar - close
 evitar - avoid
 príncipe - prince
 total - total
 errada - wrong
 conhecido - known
 toque - touch
 discutir - to discuss
 juiz - judge
 pressão - pressure
 informações - information
 especialmente - especially
 estranha - strange
 cadeia - jail
 banda - band
 devido - due
 justiça - justice
 verde - green
 puder - can
 quieto - quiet
 milhão - million
 duma - of
 pescoço - neck
 mandou - sent
 imagem - image
 conhecemos - we know
 memória - memory
 ponte - bridge
 máximo - maximum
 meninos - boys
 futebol - soccer
 responder - answer
 desculpas - apologies
 braços - arms
 deixes - leave
 agradável - nice
 porreiro - cool
 manda - sends
 ligação - link
 tchau - bye
 oeste - west
 venho - I come
 alô - hello
 ó - the
 pago - paid out
 nervoso - nervous
 vindos - coming
 sociedade - society
 calor - heat
 falas - words
 confiança - confidence
 noiva - bride
 relógio - clock
 casas - houses
 edifício - building
 casado - married
 parque - park
 nacional - national
 ridículo - ridiculous
 fotografia - photography
 washington - washington
 espada - sword
 felizes - happy
 partido - broken
 pequenos - small
 tire - remove
 humana - human
 valor - value
 levantar - rise
 aula - class
 tido - had
 meter - put
 caramba - damn it
 morre - dies
 autocarro - bus
 inglaterra - England
 diante - against
 central - central
 iremos - we will
 cadeira - chair
 chapéu - hat
 idiotas - idiots
 pontos - points
 serem - being
 deviam - should
 trato - tract
 faca - knife
 ligou - called
 andando - walking
 acorda - wake up
 investigação - investigation
 ponha - put
 calhar - handy
 processo - process
 imenso - immense
 apareceu - appeared
 sentado - seated
 escuro - dark
 uau - wow
 posto - post
 comecei - started
 aulas - classes
 inteira - entire
 dados - dice
 acabado - finished
 corte - cut
 baixa - low
 treinador - coach
 limpo - clean
 voo - flight
 várias - various
 combate - combat
 conduzir - drive
 gritar - shout out
 deixem - leave
 atirar - shoot
 ficamos - we
 portas - doors
 carreira - career
 perdemos - we lost
 descansar - rest
 leite - milk
 bordo - maple
 simpático - nice
 chuva - rain
 fumar - smoke
 faremos - we will
 visão - eyesight
 ouvido - heard
 ruas - streets
 policia - police
 pensou - thought
 política - policy
 universo - universe
 tantas - many
 líder - leader
 mapa - map
 conseguia - could
 normalmente - normally
 dono - owner
 gozar - enjoy
 mercado - market
 uso - use
 salvo - saved
 dedos - fingers
 infelizmente - unfortunately
 jogos - games
 troca - exchange
 inocente - innocent
 militar - military
 aspecto - aspect
 escapar - escape
 entendi - understand
 bebê - baby
 vieste - you came
 conseguiste - did you get
 série - series
 apoio - support
 matei - killed
 clientes - customers
 orgulho - proud
 éramos - we were
 verificar - check
 conseguem - can
 vêem - see
 vemos - we see
 números - numbers
 julgamento - judgment
 terem - have
 depende - It depends
 respirar - breathe
 teoria - theory
 larga - wide
 laboratório - laboratory
 larry - larry
 correcto - correct
 rapidamente - quickly
 mudança - change
 faculdade - college
 pedaço - piece
 rosa - pink
 maiores - higher
 sacana - bastard
 tiveram - they had
 preocupar - bother
 anel - ring
 patrão - boss
 vítima - victim
 encontramos - found
 grávida - pregnant
 entanto - however
 bebe - baby
 confusão - confusion
 terceiro - third
 andy - andy
 busca - search
 lago - lake
 possamos - can
 procurando - searching
 escrito - written
 frança - France
 vários - several
 pude - I could
 corpos - bodies
 escreveu - wrote
 montanha - mountain
 aeroporto - airport
 estúpida - stupid
 mata - woods
 andado - been
 miúdas - girls
 passe - pass
 sobreviver - survive
 bala - bullet
 prestes - ready
 dever - to owe
 excepto - except
 pressa - hurry
 suspeito - suspect
 marca - brand
 poucos - few
 brian - brian
 director - director
 acreditas - believe
 controlar - to control
 antigo - old
 interesse - interest
 mexer - stir
 unidade - unity
 chame - call
 material - material
 perfeita - perfect
 construir - ramp up
 notícia - news
 telemóvel - phone
 correu - ran
 apresentar - to present
 ouçam - listen
 carrinha - van
 más - but
 acordar - wake up
 floresta - forest
 ando - walk
 costa - coast
 amar - love
 geral - general
 dedo - finger
 sentimentos - feelings
 parceiro - partner
 bolsa - handbag
 profissional - professional
 merdas - shits
 morreram - died
 encontrado - found
 feita - done
 doença - disease
 mostra - show
 martin - martin
 crescer - grow up
 imbecil - asshole
 ferido - injured
 leste - east
 regressar - return
 queiras - wanna
 neve - snow
 peso - Weight
 baile - prom
 sentar - to sit
 mundial - worldwide
 médicos - doctors
 dão - give
 judeus - Jews
 contou - said
 campeão - champion
 ovos - eggs
 importo - care
 servir - serve
 óptima - great
 garrafa - bottle
 momentos - moments
 deseja - want
 agentes - agents
 imprensa - press
 aberta - opening
 quão - how
 recebi - I received
 ganhou - has won
 mano - bro
 maravilhosa - wonderful
 atacar - attack
 desistir - give up
 aldeia - village
 parecido - like
 entregar - deliver
 disser - says
 rock - rock
 partida - match
 acesso - access
 tantos - many
 decidir - decide
 homicídio - murder
 entendes - understand
 chamam - call
 instante - moment
 vivos - living
 soubesse - knew
 deixado - left
 obviamente - obviously
 chegaram - they arrived
 viemos - we came
 culpado - guilty
 resultado - result
 direitos - rights
 desaparece - fades away
 jardim - garden
 deserto - desert
 nâo - no
 ficaria - would
 ruim - bad
 paga - pay
 próprios - own
 lixar - sanding
 interessado - interested
 ouvidos - ears
 fantasma - ghost
 estudar - to study
 domingo - Sunday
 entrem - enter
 oferta - offer
 notas - grades
 contrato - contract
 encontraram - found
 brincadeira - just kidding
 sábado - Saturday
 tempestade - storm
 bolo - cake
 lar - home
 gabinete - cabinet
 colega - classmate
 companheiro - companion
 demorar - delay
 gás - gas
 agradecer - to thank
 thomas - thomas
 data - date
 tendo - by having
 fizer - do
 bêbado - drunk
 estaremos - will be
 acredite - believe
 enviar - submit
 bilhete - ticket
 pessoalmente - in person
 reino - kingdom
 propriedade - property
 ministro - minister
 entendeu - understood
 aparece - pops up
 receio - fear
 visitar - visit
 crer - believe
 daqueles - those
 francês - French
 viajar - travel
 recuperar - to recover
 responsabilidade - responsibility
 voltas - turns
 mel - honey
 carl - carl
 alemães - German
 garotas - girls
 pro - pro
 testemunha - witness
 equipe - team
 simon - simon
 queriam - they wanted
 pão - bread
 pequenas - small
 califórnia - California
 senhorita - Ms
 conhecimento - knowledge
 primo - cousin
 europa - Europe
 méxico - Mexico
 peito - chest
 fugiu - ran away
 sensação - sensation
 william - william
 poderoso - powerful
 podiam - could
 centenas - hundreds
 inimigos - enemies
 hein - huh
 ganha - wins
 mantém - keeps
 farto - tired
 magia - magic
 agradeço - appreciate
 aberto - open
 vitória - victory
 achou - found
 voltem - return
 partes - parts
 assassinato - murder
 massa - pasta
 fecha - closes
 bravo - angry
 ligue - call
 ligado - switched on
 boleia - hitchhiking
 vinha - came
 efeito - It is made 


Hola, ¿cómo estás? - Hello, how are you?
¿Qué tal tu día? - How was your day?
Me gusta mucho la música. - I really like music.
¿Dónde está el baño? - Where is the bathroom?
¿Puedes ayudarme, por favor? - Can you help me, please?
¿Cuál es tu película favorita? - What's your favorite movie?
¡Feliz cumpleaños! - Happy birthday!
¿Cuántos años tienes? - How old are you?
¡Qué bonito día hace hoy! - What a beautiful day today!
¿Qué planes tienes para el fin de semana? - What are your plans for the weekend?
Me encanta viajar y descubrir nuevos lugares. - I love to travel and discover new places.
¿Sabes cocinar? - Do you know how to cook?
¿Qué te gustaría comer hoy? - What would you like to eat today?
Disculpa, no entiendo lo que estás diciendo. - Sorry, I don't understand what you're saying.
¿Puedes repetirlo, por favor? - Can you repeat it, please?
¿Cómo te llamas? - What's your name?
Vivo en una ciudad pequeña pero acogedora. - I live in a small but cozy city.
Me gustaría aprender a bailar salsa. - I would like to learn how to dance salsa.
¿Dónde está la estación de tren? - Where is the train station?
Estoy emocionado/a por el concierto de esta noche. - I'm excited about tonight's concert.
¿Qué hora es? - What time is it?
Me encantan los perros, son muy leales. - I love dogs, they're very loyal.
¿Tienes hermanos o hermanas? - Do you have any brothers or sisters?
¿Qué idiomas hablas? - What languages do you speak?
¿A qué te dedicas? - What do you do for a living?
Estoy cansado/a después de un largo día de trabajo. - I'm tired after a long day at work.
¿Cuál es tu deporte favorito? - What's your favorite sport?
¿Has estado alguna vez en otro país? - Have you ever been to another country?
Me encanta la playa, es mi lugar favorito para relajarme. - I love the beach, it's my favorite place to relax.
¿Dónde puedo encontrar un buen restaurante? - Where can I find a good restaurant?
Estoy aprendiendo a tocar la guitarra. - I'm learning to play the guitar.
¿Te gusta el café o prefieres el té? - Do you like coffee or do you prefer tea?
¡Felicidades por tu logro! - Congratulations on your achievement!
¿Qué opinas sobre el cambio climático? - What's your opinion on climate change?
Estoy deseando conocer nuevos amigos. - I'm looking forward to making new friends.
¿Cómo se dice "hola" en inglés? - How do you say "hello" in English?
Me encanta la comida mexicana, especialmente los tacos. - I love Mexican food, especially tacos.
¿Has leído algún buen libro últimamente? - Have you read any good books lately?
¿Cuál es tu canción favorita en este momento? - What's your favorite song right now?
Estoy emocionado/a por las vacaciones de verano. - I'm excited about the summer vacation.

Guten Morgen! - Good morning!
Wie geht es dir? - How are you?
Ich liebe es, neue Dinge zu lernen. - I love learning new things.
Wo ist der nächste Bahnhof? - Where is the nearest train station?
Kannst du mir bitte helfen? - Can you please help me?
Was ist dein Lieblingsessen? - What is your favorite food?
Alles Gute zum Geburtstag! - Happy birthday!
Wie alt bist du? - How old are you?
Das Wetter heute ist wunderschön. - The weather today is beautiful.
Hast du Pläne für das Wochenende? - Do you have plans for the weekend?
Ich reise gerne und entdecke neue Orte. - I enjoy traveling and discovering new places.
Kannst du kochen? - Can you cook?
Was möchtest du heute essen? - What would you like to eat today?
Entschuldigung, ich verstehe nicht, was du sagst. - Sorry, I don't understand what you're saying.
Kannst du das bitte wiederholen? - Can you please repeat that?
Wie heißt du? - What is your name?
Ich lebe in einer kleinen, aber gemütlichen Stadt. - I live in a small but cozy town.
Ich möchte gerne Salsa tanzen lernen. - I would like to learn how to dance salsa.
Wo ist das nächste Krankenhaus? - Where is the nearest hospital?
Ich bin aufgeregt für das Konzert heute Abend. - I'm excited for the concert tonight.
Wie spät ist es? - What time is it?
Ich liebe Hunde, sie sind sehr treu. - I love dogs, they are very loyal.
Hast du Geschwister? - Do you have siblings?
Welche Sprachen sprichst du? - What languages do you speak?
Was ist dein Beruf? - What is your profession?
Ich bin müde nach einem langen Arbeitstag. - I'm tired after a long day at work.
Was ist dein Lieblingssport? - What is your favorite sport?
Warst du schon einmal in einem anderen Land? - Have you ever been to another country?
Ich liebe den Strand, es ist mein Lieblingsort zum Entspannen. - I love the beach, it's my favorite place to relax.
Wo kann ich ein gutes Restaurant finden? - Where can I find a good restaurant?
Ich lerne gerade Gitarre spielen. - I'm currently learning to play the guitar.
Magst du Kaffee oder bevorzugst du Tee? - Do you like coffee or do you prefer tea?
Herzlichen Glückwunsch zu deiner Leistung! - Congratulations on your achievement!
Was denkst du über den Klimawandel? - What do you think about climate change?
Ich freue mich darauf, neue Freunde kennenzulernen. - I'm looking forward to meeting new friends.
Wie sagt man "Hallo" auf Englisch? - How do you say "hello" in English?
Ich liebe mexikanisches Essen, besonders Tacos. - I love Mexican food, especially tacos.
Hast du kürzlich ein gutes Buch gelesen? - Have you read any good books recently?
Was ist dein Lieblingslied im Moment? - What is your favorite song at the moment?
Ich freue mich auf die Sommerferien. - I'm looking forward to the summer vacation.
Wo ist die nächste Bushaltestelle? - Where is the nearest bus stop?
Was sind deine Hobbys? - What are your hobbies?
Kannst du mir ein gutes Restaurant empfehlen? - Can you recommend a good restaurant to me?
Wie lange dauert der Flug nach Paris? - How long is the flight to Paris?
Hast du heute Abend Zeit? - Do you have time tonight?
Wo kann ich Tickets für das Konzert kaufen? - Where can I buy tickets for the concert?
Wie war dein Tag? - How was your day?
Wo finde ich einen Geldautomaten? - Where can I find an ATM?
Was ist deine Lieblingsfarbe? - What is your favorite color?
Ich bin froh, dich kennengelernt zu haben. - I'm glad to have met you.

Bonjour, comment ça va ? - Hello, how are you?
Quel temps fait-il aujourd'hui ? - What's the weather like today?
J'adore écouter de la musique. - I love listening to music.
Où se trouve la gare ? - Where is the train station?
Pouvez-vous m'aider, s'il vous plaît ? - Can you help me, please?
Quel est ton plat préféré ? - What's your favorite dish?
Joyeux anniversaire ! - Happy birthday!
Quel âge as-tu ? - How old are you?
Il fait beau aujourd'hui. - It's nice weather today.
Quels sont tes plans pour le week-end ? - What are your plans for the weekend?
J'adore voyager et découvrir de nouveaux endroits. - I love traveling and discovering new places.
Sais-tu cuisiner ? - Can you cook?
Qu'est-ce que tu aimerais manger aujourd'hui ? - What would you like to eat today?
Excusez-moi, je ne comprends pas ce que vous dites. - Excuse me, I don't understand what you're saying.
Pouvez-vous répéter, s'il vous plaît ? - Can you repeat that, please?
Comment t'appelles-tu ? - What's your name?
J'habite dans une petite ville mais confortable. - I live in a small but cozy town.
J'aimerais apprendre à danser la salsa. - I would like to learn how to dance salsa.
Où se trouve l'hôpital le plus proche ? - Where is the nearest hospital?
Je suis excité(e) pour le concert ce soir. - I'm excited for the concert tonight.
Quelle heure est-il ? - What time is it?
J'adore les chiens, ils sont très fidèles. - I love dogs, they are very loyal.
As-tu des frères ou sœurs ? - Do you have any brothers or sisters?
Quelles langues parles-tu ? - What languages do you speak?
Quel est ton métier ? - What is your profession?
Je suis fatigué(e) après une longue journée de travail. - I'm tired after a long day of work.
Quel est ton sport préféré ? - What's your favorite sport?
As-tu déjà visité un autre pays ? - Have you ever visited another country?
J'adore la plage, c'est mon endroit préféré pour me détendre. - I love the beach, it's my favorite place to relax.
Où puis-je trouver un bon restaurant ? - Where can I find a good restaurant?
J'apprends actuellement à jouer de la guitare. - I'm currently learning to play the guitar.
Aimes-tu le café ou préfères-tu le thé ? - Do you like coffee or do you prefer tea?
Félicitations pour ton accomplissement ! - Congratulations on your achievement!
Quelle est ton opinion sur le changement climatique ? - What is your opinion on climate change?
J'ai hâte de rencontrer de nouveaux amis. - I'm looking forward to meeting new friends.
Comment dit-on "hello" en anglais ? - How do you say "hello" in English?
J'adore la cuisine mexicaine, surtout les tacos. - I love Mexican cuisine, especially tacos.
As-tu récemment lu un bon livre ? - Have you recently read a good book?
Quelle est ta chanson préférée en ce moment ? - What is your favorite song right now?
Je suis impatient(e) pour les vacances d'été. - I'm looking forward to the summer vacation.
Où se trouve l'arrêt de bus le plus proche ? - Where is the nearest bus stop?
Quels sont tes hobbies ? - What are your hobbies?
Peux-tu me recommander un bon restaurant ? - Can you recommend a good restaurant to me?
Combien de temps dure le vol jusqu'à Paris ? - How long is the flight to Paris?
As-tu du temps ce soir ? - Do you have time tonight?
Où puis-je acheter des billets pour le concert ? - Where can I buy tickets for the concert?
Comment s'est passé ta journée ? - How was your day?
Où puis-je trouver un distributeur automatique de billets ? - Where can I find an ATM?
Quelle est ta couleur préférée ? - What is your favorite color?
Je suis content(e) de t'avoir rencontré(e). - I'm glad to have met you.

Ciao, come stai? - Hi, how are you?
Che tempo fa oggi? - What's the weather like today?
Adoro ascoltare la musica. - I love listening to music.
Dove si trova la stazione? - Where is the train station?
Puoi aiutarmi, per favore? - Can you help me, please?
Qual è il tuo piatto preferito? - What's your favorite dish?
Buon compleanno! - Happy birthday!
Quanti anni hai? - How old are you?
Oggi fa bel tempo. - It's nice weather today.
Hai dei piani per il fine settimana? - Do you have any plans for the weekend?
Adoro viaggiare e scoprire nuovi posti. - I love traveling and discovering new places.
Sai cucinare? - Can you cook?
Cosa ti piacerebbe mangiare oggi? - What would you like to eat today?
Scusa, non capisco quello che stai dicendo. - Sorry, I don't understand what you're saying.
Puoi ripetere, per favore? - Can you repeat that, please?
Come ti chiami? - What's your name?
Vivo in una piccola ma accogliente città. - I live in a small but cozy town.
Mi piacerebbe imparare a ballare la salsa. - I would like to learn how to dance salsa.
Dove si trova l'ospedale più vicino? - Where is the nearest hospital?
Sono emozionato/a per il concerto stasera. - I'm excited for the concert tonight.
Che ore sono? - What time is it?
Adoro i cani, sono molto fedeli. - I love dogs, they are very loyal.
Hai dei fratelli o delle sorelle? - Do you have any brothers or sisters?
Quali lingue parli? - What languages do you speak?
Qual è la tua professione? - What is your profession?
Sono stanco/a dopo una lunga giornata di lavoro. - I'm tired after a long day at work.
Qual è il tuo sport preferito? - What's your favorite sport?
Sei mai stato/a in un altro paese? - Have you ever been to another country?
Adoro la spiaggia, è il mio posto preferito per rilassarmi. - I love the beach, it's my favorite place to relax.
Dove posso trovare un buon ristorante? - Where can I find a good restaurant?
Al momento sto imparando a suonare la chitarra. - I'm currently learning to play the guitar.
Ti piace il caffè o preferisci il tè? - Do you like coffee or do you prefer tea?
Congratulazioni per il tuo traguardo! - Congratulations on your achievement!
Qual è la tua opinione sul cambiamento climatico? - What is your opinion on climate change?
Non vedo l'ora di fare nuove amicizie. - I'm looking forward to making new friends.
Come si dice "hello" in inglese? - How do you say "hello" in English?
Adoro il cibo messicano, specialmente i tacos. - I love Mexican food, especially tacos.
Hai letto recentemente qualche bel libro? - Have you read any good books recently?
Qual è la tua canzone preferita in questo momento? - What's your favorite song right now?
Non vedo l'ora delle vacanze estive. - I'm looking forward to the summer vacation.
Dove si trova la fermata dell'autobus più vicina? - Where is the nearest bus stop?
Quali sono i tuoi hobby? - What are your hobbies?
Puoi consigliarmi un buon ristorante? - Can you recommend a good restaurant to me?
Quanto dura il volo per Parigi? - How long is the flight to Paris?
Hai tempo stasera? - Do you have time tonight?
Dove posso comprare i biglietti per il concerto? - Where can I buy tickets for the concert?
Come è andata la tua giornata? - How was your day?
Dove posso trovare un bancomat? - Where can I find an ATM?
Qual è il tuo colore preferito? - What is your favorite color?
Sono contento/a di averti conosciuto/a. - I'm glad to have met you.

Olá, como você está? - Hello, how are you?
Qual é a previsão do tempo para hoje? - What's the weather forecast for today?
Eu gosto de ouvir música. - I enjoy listening to music.
Onde fica a estação de trem? - Where is the train station?
Você pode me ajudar, por favor? - Can you help me, please?
Qual é o seu prato favorito? - What's your favorite dish?
Feliz aniversário! - Happy birthday!
Quantos anos você tem? - How old are you?
O clima está bom hoje. - The weather is nice today.
Você tem planos para o fim de semana? - Do you have plans for the weekend?
Eu adoro viajar e conhecer novos lugares. - I love traveling and exploring new places.
Você sabe cozinhar? - Can you cook?
O que você gostaria de comer hoje? - What would you like to eat today?
Desculpe, eu não entendi o que você disse. - Sorry, I didn't understand what you said.
Você poderia repetir, por favor? - Could you repeat that, please?
Qual é o seu nome? - What's your name?
Eu moro em uma cidade pequena, mas aconchegante. - I live in a small but cozy town.
Eu gostaria de aprender a dançar salsa. - I would like to learn how to dance salsa.
Onde fica o hospital mais próximo? - Where is the nearest hospital?
Estou animado(a) para o show esta noite. - I'm excited for the concert tonight.
Que horas são? - What time is it?
Eu adoro cachorros, eles são muito leais. - I love dogs, they are very loyal.
Você tem irmãos ou irmãs? - Do you have siblings?
Quais idiomas você fala? - What languages do you speak?
Qual é a sua profissão? - What is your profession?
Estou cansado(a) após um longo dia de trabalho. - I'm tired after a long day of work.
Qual é o seu esporte favorito? - What's your favorite sport?
Você já visitou outro país? - Have you ever visited another country?
Eu adoro a praia, é o meu lugar favorito para relaxar. - I love the beach, it's my favorite place to relax.
Onde posso encontrar um bom restaurante? - Where can I find a good restaurant?
Atualmente, estou aprendendo a tocar violão. - I'm currently learning to play the guitar.
Você gosta de café ou prefere chá? - Do you like coffee or do you prefer tea?
Parabéns pela sua conquista! - Congratulations on your achievement!
Qual é a sua opinião sobre as mudanças climáticas? - What's your opinion on climate change?
Estou ansioso(a) para conhecer novos amigos. - I'm looking forward to meeting new friends.
Como se diz "olá" em inglês? - How do you say "hello" in English?
Eu amo a comida mexicana, especialmente tacos. - I love Mexican food, especially tacos.
Você leu algum bom livro recentemente? - Have you read any good books recently?
Qual é a sua música favorita no momento? - What's your favorite song at the moment?
Estou ansioso(a) pelas férias de verão. - I'm looking forward to the summer vacation.
Onde fica o ponto de ônibus mais próximo? - Where is the nearest bus stop?
Quais são os seus hobbies? - What are your hobbies?
Você pode me recomendar um bom restaurante? - Can you recommend a good restaurant to me?
Quanto tempo dura o voo para Paris? - How long is the flight to Paris?
Você tem tempo hoje à noite? - Do you have time tonight?
Onde posso comprar ingressos para o show? - Where can I buy tickets for the concert?
Como foi o seu dia? - How was your day?
Onde posso encontrar um caixa eletrônico? - Where can I find an ATM?
Qual é a sua cor favorita? - What is your favorite color?
Estou feliz por ter te conhecido. - I'm happy to have met you.



Hola, ¿cómo estás? - Hello, how are you?
Me llamo Ana. - My name is Ana.
¿Dónde está el baño? - Where is the bathroom?
Tengo hambre. - I'm hungry.
¿Qué hora es? - What time is it?
¿Cómo te llamas? - What's your name?
Estoy cansado/a. - I'm tired.
No entiendo. - I don't understand.
Gracias por tu ayuda. - Thank you for your help.
¿Qué quieres hacer hoy? - What do you want to do today?
¿Cuántos años tienes? - How old are you?
¿Puedes repetir, por favor? - Can you repeat, please?
Me gusta mucho esta canción. - I really like this song.
¿Dónde vives? - Where do you live?
Estoy perdido/a. - I'm lost.
¿Cuál es tu comida favorita? - What's your favorite food?
¿Puedes hablar más despacio? - Can you speak more slowly?
¡Feliz cumpleaños! - Happy birthday!
¿Qué te gustaría hacer mañana? - What would you like to do tomorrow?
¿Cómo se dice "hola" en inglés? - How do you say "hello" in English?
Estoy emocionado/a por el viaje. - I'm excited about the trip.
¿Tienes hermanos o hermanas? - Do you have brothers or sisters?
No tengo tiempo ahora. - I don't have time right now.
Me encanta este lugar. - I love this place.
¿A qué hora sales de casa por la mañana? - What time do you leave home in the morning?
¿Qué opinas sobre el nuevo restaurante? - What do you think about the new restaurant?
¿Puedes ayudarme con esto, por favor? - Can you help me with this, please?
Estoy estudiando español. - I'm studying Spanish.
¡Felicidades! - Congratulations!
¿Cuál es tu película favorita? - What's your favorite movie?
¿Cuánto cuesta esto? - How much does this cost?
Me siento triste hoy. - I feel sad today.
¿Tienes planes para el fin de semana? - Do you have any plans for the weekend?
¿Dónde podemos encontrar un buen restaurante? - Where can we find a good restaurant?
¡Qué rico! - How delicious!
Estoy contento/a con mi nuevo trabajo. - I'm happy with my new job.
¿Puedo tomar prestado tu bolígrafo? - Can I borrow your pen?
Me gustaría reservar una habitación de hotel. - I would like to book a hotel room.
¿Cuál es tu color favorito? - What's your favorite color?
Me duele la cabeza. - I have a headache.
¡Buena suerte! - Good luck!
¿A qué hora abre la tienda? - What time does the store open?
Me encanta viajar. - I love traveling.
¿Quieres venir a mi fiesta? - Do you want to come to my party?
Estoy ocupado/a en este momento. - I'm busy at the moment.
¿Qué hiciste ayer? - What did you do yesterday?
Me gustaría un café con leche. - I would like a coffee with milk.
¿Cuál es tu libro favorito? - What's your favorite book?
No tengo idea. - I have no idea.
¡Diviértete! - Have fun!
Estoy preocupado/a por el examen. - I'm worried about the exam.
¿Puedes recomendarme un buen restaurante? - Can you recommend a good restaurant?
Necesito ayuda con esta tarea. - I need help with this task.
¿Qué tipo de música te gusta? - What kind of music do you like?
¿A qué hora empieza la película? - What time does the movie start?
¿Cuál es tu deporte favorito? - What's your favorite sport?
Estoy enfermo/a. - I'm sick.
¿Dónde puedo comprar boletos para el concierto? - Where can I buy tickets for the concert?
No me siento bien. - I don't feel well.
¿Cuándo es tu cumpleaños? - When is your birthday?
Me gustaría ordenar comida para llevar. - I would like to order takeout.
¿Has estado en España? - Have you been to Spain?
Estoy aburrido/a. - I'm bored.
¿Cuánto tiempo llevas estudiando español? - How long have you been studying Spanish?
Me gustaría probar algo nuevo. - I would like to try something new.
¿Cuál es tu serie de televisión favorita? - What's your favorite TV series?
Tengo sed. - I'm thirsty.
¿Cuál es tu pasatiempo favorito? - What's your favorite hobby?
¿A qué te dedicas? - What do you do for a living?
Estoy emocionado/a por las vacaciones. - I'm excited about the holidays.
¿Cuál es tu animal favorito? - What's your favorite animal?
No puedo esperar. - I can't wait.
¿Cómo se dice "gracias" en francés? - How do you say "thank you" in French?
Me siento feliz hoy. - I feel happy today.
¿Cuál es tu lugar turístico favorito? - What's your favorite tourist spot?
No tengo dinero. - I don't have money.
¿Quieres tomar algo? - Do you want to have a drink?
Estoy listo/a para empezar. - I'm ready to start.
¿Cuál es tu canción favorita? - What's your favorite song?
No tengo tiempo suficiente. - I don't have enough time.
¿Cuál es tu programa de televisión favorito? - What's your favorite TV show?
¿Puedes hablar más alto? - Can you speak louder?
Me gustaría hacer una reservación para dos personas. - I would like to make a reservation for two people.
¿Cómo te sientes hoy? - How do you feel today?
Estoy emocionado/a por el concierto. - I'm excited about the concert.
¿Cuál es tu lugar de vacaciones favorito? - What's your favorite vacation spot?
No entiendo lo que dices. - I don't understand what you're saying.
¿A qué hora cierra la tienda? - What time does the store close?
Me gustaría aprender a bailar salsa. - I would like to learn how to dance salsa.
¿Dónde puedo encontrar un cajero automático? - Where can I find an ATM?
Estoy en camino. - I'm on my way.
¿Cuál es tu equipo de fútbol favorito? - What's your favorite soccer team?
No me importa. - I don't care.
¿Puedes darme un poco de agua, por favor? - Can you give me some water, please?
Estoy preocupado/a por el futuro. - I'm worried about the future.
¿Cuál es tu lugar histórico favorito? - What's your favorite historical site?
Me gustaría visitar Sudamérica. - I would like to visit South America.
¿Puedes recomendarme un buen libro? - Can you recommend a good book?
Estoy ocupado/a en este momento. - I'm busy at the moment.
¿Cuántos idiomas hablas? - How many languages do you speak?


Guten Morgen! - Good morning!
Wie geht es dir? - How are you?
Mein Name ist Anna. - My name is Anna.
Wo ist das Badezimmer? - Where is the bathroom?
Ich habe Hunger. - I'm hungry.
Wie spät ist es? - What time is it?
Wie heißt du? - What's your name?
Ich bin müde. - I'm tired.
Ich verstehe nicht. - I don't understand.
Danke für deine Hilfe. - Thank you for your help.
Was möchtest du heute machen? - What would you like to do today?
Wie alt bist du? - How old are you?
Kannst du bitte wiederholen? - Can you repeat, please?
Ich mag dieses Lied sehr. - I really like this song.
Wo wohnst du? - Where do you live?
Ich habe mich verlaufen. - I'm lost.
Was ist dein Lieblingsessen? - What's your favorite food?
Kannst du langsamer sprechen? - Can you speak more slowly?
Alles Gute zum Geburtstag! - Happy birthday!
Was möchtest du morgen machen? - What would you like to do tomorrow?
Wie sagt man "Hallo" auf Englisch? - How do you say "hello" in English?
Ich bin aufgeregt wegen der Reise. - I'm excited about the trip.
Hast du Geschwister? - Do you have siblings?
Ich habe gerade keine Zeit. - I don't have time right now.
Ich liebe diesen Ort. - I love this place.
Wann gehst du morgens aus dem Haus? - What time do you leave home in the morning?
Was denkst du über das neue Restaurant? - What do you think about the new restaurant?
Kannst du mir bitte dabei helfen? - Can you help me with this, please?
Ich lerne Deutsch. - I'm learning German.
Herzlichen Glückwunsch! - Congratulations!
Was ist dein Lieblingsfilm? - What's your favorite movie?
Wie viel kostet das? - How much does this cost?
Ich fühle mich heute traurig. - I feel sad today.
Hast du Pläne für das Wochenende? - Do you have any plans for the weekend?
Wo können wir ein gutes Restaurant finden? - Where can we find a good restaurant?
Wie lecker! - How delicious!
Ich bin zufrieden mit meinem neuen Job. - I'm happy with my new job.
Kann ich deinen Kugelschreiber ausleihen? - Can I borrow your pen?
Ich würde gerne ein Hotelzimmer reservieren. - I would like to book a hotel room.
Was ist deine Lieblingsfarbe? - What's your favorite color?
Ich habe Kopfschmerzen. - I have a headache.
Viel Glück! - Good luck!
Um wie viel Uhr öffnet der Laden? - What time does the store open?
Ich liebe es zu reisen. - I love traveling.
Möchtest du zu meiner Party kommen? - Do you want to come to my party?
Ich bin gerade beschäftigt. - I'm busy right now.
Was hast du gestern gemacht? - What did you do yesterday?
Ich hätte gerne einen Kaffee mit Milch. - I would like a coffee with milk.
Was ist dein Lieblingsbuch? - What's your favorite book?
Ich habe keine Ahnung. - I have no idea.
Viel Spaß! - Have fun!
Ich mache mir Sorgen wegen der Prüfung. - I'm worried about the exam.
Kannst du mir ein gutes Restaurant empfehlen? - Can you recommend a good restaurant?
Ich brauche Hilfe bei dieser Aufgabe. - I need help with this task.
Welche Art von Musik magst du? - What kind of music do you like?
Um wie viel Uhr beginnt der Film? - What time does the movie start?
Was ist dein Lieblingssport? - What's your favorite sport?
Ich fühle mich krank. - I feel sick.
Wo kann ich Tickets für das Konzert kaufen? - Where can I buy tickets for the concert?
Mir geht es nicht gut. - I don't feel well.
Wann ist dein Geburtstag? - When is your birthday?
Ich möchte Essen zum Mitnehmen bestellen. - I would like to order takeout.
Warst du schon einmal in Deutschland? - Have you ever been to Germany?
Ich langweile mich. - I'm bored.
Wie lange lernst du schon Deutsch? - How long have you been learning German?
Ich möchte gerne etwas Neues ausprobieren. - I would like to try something new.
Was ist deine Lieblingsserie? - What's your favorite TV series?
Ich habe Durst. - I'm thirsty.
Was ist dein Lieblingshobby? - What's your favorite hobby?
Was machst du beruflich? - What do you do for a living?
Ich freue mich auf den Urlaub. - I'm excited about the vacation.
Was ist dein Lieblingstier? - What's your favorite animal?
Ich kann es kaum erwarten. - I can't wait.
Wie sagt man "Danke" auf Französisch? - How do you say "thank you" in French?
Ich fühle mich heute glücklich. - I feel happy today.
Was ist dein Lieblingsurlaubsort? - What's your favorite holiday destination?
Ich habe kein Geld. - I don't have money.
Möchtest du etwas trinken? - Would you like to have a drink?
Ich bin bereit anzufangen. - I'm ready to start.
Was ist dein Lieblingslied? - What's your favorite song?
Ich habe nicht genug Zeit. - I don't have enough time.
Was ist deine Lieblingssendung? - What's your favorite TV show?
Kannst du lauter sprechen? - Can you speak louder?
Ich würde gerne eine Reservierung für zwei Personen machen. - I would like to make a reservation for two people.
Wie fühlst du dich heute? - How do you feel today?
Ich freue mich auf das Konzert. - I'm excited about the concert.
Was ist dein Lieblingsreiseziel? - What's your favorite travel destination?
Ich verstehe nicht, was du sagst. - I don't understand what you're saying.
Um wie viel Uhr schließt der Laden? - What time does the store close?
Ich würde gerne Salsa tanzen lernen. - I would like to learn how to dance salsa.
Wo kann ich einen Geldautomaten finden? - Where can I find an ATM?
Ich bin auf dem Weg. - I'm on my way.
Es ist mir egal. - I don't care.
Kannst du mir bitte etwas Wasser geben? - Can you please give me some water?
Ich mache mir Sorgen um die Zukunft. - I'm worried about the future.
Was ist dein Lieblingshistorischer Ort? - What's your favorite historical site?
Ich würde gerne Südamerika besuchen. - I would like to visit South America.
Kannst du mir ein gutes Buch empfehlen? - Can you recommend a good book?
Ich bin gerade beschäftigt. - I'm busy at the moment.
Wie viele Sprachen sprichst du? - How many languages do you speak?


Bonjour ! - Hello!
Comment ça va ? - How are you?
Je m'appelle Pierre. - My name is Pierre.
Où est la salle de bains ? - Where is the bathroom?
J'ai faim. - I'm hungry.
Quelle heure est-il ? - What time is it?
Comment tu t'appelles ? - What's your name?
Je suis fatigué(e). - I'm tired.
Je ne comprends pas. - I don't understand.
Merci pour ton aide. - Thank you for your help.
Qu'est-ce que tu veux faire aujourd'hui ? - What do you want to do today?
Quel âge as-tu ? - How old are you?
Peux-tu répéter, s'il te plaît ? - Can you repeat, please?
J'aime beaucoup cette chanson. - I really like this song.
Où habites-tu ? - Where do you live?
Je suis perdu(e). - I'm lost.
Quel est ton plat préféré ? - What's your favorite dish?
Peux-tu parler plus lentement ? - Can you speak more slowly?
Joyeux anniversaire ! - Happy birthday!
Qu'est-ce que tu veux faire demain ? - What do you want to do tomorrow?
Comment dit-on "hello" en anglais ? - How do you say "hello" in English?
Je suis excité(e) à propos du voyage. - I'm excited about the trip.
As-tu des frères et sœurs ? - Do you have siblings?
Je n'ai pas le temps en ce moment. - I don't have time right now.
J'adore cet endroit. - I love this place.
À quelle heure pars-tu le matin ? - What time do you leave in the morning?
Que penses-tu du nouveau restaurant ? - What do you think of the new restaurant?
Peux-tu m'aider avec ça, s'il te plaît ? - Can you help me with this, please?
J'apprends le français. - I'm learning French.
Félicitations ! - Congratulations!
Quel est ton film préféré ? - What's your favorite movie?
Combien ça coûte ? - How much does it cost?
Je me sens triste aujourd'hui. - I feel sad today.
As-tu des projets pour le week-end ? - Do you have any plans for the weekend?
Où pouvons-nous trouver un bon restaurant ? - Where can we find a good restaurant?
Comme c'est délicieux ! - How delicious!
Je suis satisfait(e) de mon nouveau travail. - I'm satisfied with my new job.
Puis-je emprunter ton stylo ? - Can I borrow your pen?
J'aimerais réserver une chambre d'hôtel. - I would like to book a hotel room.
Quelle est ta couleur préférée ? - What's your favorite color?
J'ai mal à la tête. - I have a headache.
Bonne chance ! - Good luck!
À quelle heure est-ce que le magasin ouvre ? - What time does the store open?
J'adore voyager. - I love to travel.
Veux-tu venir à ma fête ? - Do you want to come to my party?
Je suis occupé(e) en ce moment. - I'm busy at the moment.
Qu'as-tu fait hier ? - What did you do yesterday?
J'aimerais un café avec du lait. - I would like a coffee with milk.
Quel est ton livre préféré ? - What's your favorite book?
Je n'en ai aucune idée. - I have no idea.
Amuse-toi bien ! - Have fun!
Je suis inquiet(e) à propos de l'examen. - I'm worried about the exam.
Peux-tu me recommander un bon restaurant ? - Can you recommend a good restaurant?
J'ai besoin d'aide avec cette tâche. - I need help with this task.
Quel genre de musique aimes-tu ? - What kind of music do you like?
À quelle heure commence le film ? - What time does the movie start?
Quel est ton sport préféré ? - What's your favorite sport?
Je me sens malade. - I feel sick.
Où puis-je acheter des billets pour le concert ? - Where can I buy tickets for the concert?
Je ne me sens pas bien. - I don't feel well.
Quand est ton anniversaire ? - When is your birthday?
J'aimerais commander un repas à emporter. - I would like to order takeout.
Es-tu déjà allé(e) en France ? - Have you ever been to France?
Je m'ennuie. - I'm bored.
Depuis combien de temps apprends-tu le français ? - How long have you been learning French?
J'aimerais essayer quelque chose de nouveau. - I would like to try something new.
Quelle est ta série préférée ? - What's your favorite TV series?
J'ai soif. - I'm thirsty.
Quel est ton passe-temps préféré ? - What's your favorite hobby?
Que fais-tu dans la vie ? - What do you do for a living?
J'ai hâte d'être en vacances. - I'm looking forward to the vacation.
Quel est ton animal préféré ? - What's your favorite animal?
Je suis impatient(e). - I can't wait.
Comment dit-on "Merci" en français ? - How do you say "thank you" in French?
Je me sens heureux(se) aujourd'hui. - I feel happy today.
Quelle est ta destination de vacances préférée ? - What's your favorite holiday destination?
Je n'ai pas d'argent. - I don't have any money.
Veux-tu boire quelque chose ? - Would you like to have a drink?
Je suis prêt(e) à commencer. - I'm ready to start.
Quelle est ta chanson préférée ? - What's your favorite song?
Je n'ai pas assez de temps. - I don't have enough time.
Quelle est ta série préférée ? - What's your favorite TV show?
Peux-tu parler plus fort ? - Can you speak louder?
J'aimerais réserver pour deux personnes. - I would like to make a reservation for two people.
Comment te sens-tu aujourd'hui ? - How do you feel today?
J'ai hâte d'assister au concert. - I'm excited about the concert.
Quelle est ta destination de voyage préférée ? - What's your favorite travel destination?
Je ne comprends pas ce que tu dis. - I don't understand what you're saying.
À quelle heure est-ce que le magasin ferme ? - What time does the store close?
Je suis en train d'arriver. - I'm on my way.
Ça m'est égal. - I don't care.
Peux-tu me donner de l'eau, s'il te plaît ? - Can you please give me some water?
Je m'inquiète pour l'avenir. - I'm worried about the future.
Qu'est-ce que tu penses du nouvel hôtel ? - What do you think of the new hotel?
Je suis occupé(e) en ce moment. - I'm busy at the moment.
Quel est ton lieu historique préféré ? - What's your favorite historical site?
J'aimerais visiter l'Amérique du Sud. - I would like to visit South America.
Peux-tu me recommander un bon livre ? - Can you recommend a good book?
Je suis en ce moment. - I'm busy at the moment.
Combien de langues parles-tu ? - How many languages do you speak?


Ciao! - Hello!
Come stai? - How are you?
Mi chiamo Marco. - My name is Marco.
Dove si trova il bagno? - Where is the bathroom?
Ho fame. - I'm hungry.
Che ora è? - What time is it?
Come ti chiami? - What's your name?
Sono stanco/a. - I'm tired.
Non capisco. - I don't understand.
Grazie per l'aiuto. - Thank you for the help.
Cosa vuoi fare oggi? - What do you want to do today?
Quanti anni hai? - How old are you?
Puoi ripetere, per favore? - Can you repeat, please?
Mi piace molto questa canzone. - I really like this song.
Dove abiti? - Where do you live?
Sono perso/a. - I'm lost.
Qual è il tuo piatto preferito? - What's your favorite dish?
Puoi parlare più lentamente? - Can you speak more slowly?
Buon compleanno! - Happy birthday!
Cosa vuoi fare domani? - What do you want to do tomorrow?
Come si dice "hello" in italiano? - How do you say "hello" in Italian?
Sono entusiasta del viaggio. - I'm excited about the trip.
Hai fratelli o sorelle? - Do you have siblings?
Non ho tempo al momento. - I don't have time at the moment.
Adoro questo posto. - I love this place.
A che ora parti la mattina? - What time do you leave in the morning?
Cosa ne pensi del nuovo ristorante? - What do you think of the new restaurant?
Mi puoi aiutare con questo, per favore? - Can you help me with this, please?
Sto imparando l'italiano. - I'm learning Italian.
Congratulazioni! - Congratulations!
Qual è il tuo film preferito? - What's your favorite movie?
Quanto costa? - How much does it cost?
Mi sento triste oggi. - I feel sad today.
Hai dei piani per il weekend? - Do you have any plans for the weekend?
Dove possiamo trovare un buon ristorante? - Where can we find a good restaurant?
Che buono! - How delicious!
Sono soddisfatto/a del mio nuovo lavoro. - I'm satisfied with my new job.
Posso prendere in prestito la tua penna? - Can I borrow your pen?
Vorrei prenotare una stanza d'albergo. - I would like to book a hotel room.
Qual è il tuo colore preferito? - What's your favorite color?
Ho mal di testa. - I have a headache.
Buona fortuna! - Good luck!
A che ora apre il negozio? - What time does the store open?
Adoro viaggiare. - I love to travel.
Vuoi venire alla mia festa? - Do you want to come to my party?
Sono occupato/a al momento. - I'm busy at the moment.
Cosa hai fatto ieri? - What did you do yesterday?
Vorrei un caffè con latte. - I would like a coffee with milk.
Qual è il tuo libro preferito? - What's your favorite book?
Non ne ho idea. - I have no idea.
Divertiti! - Have fun!
Sono preoccupato/a per l'esame. - I'm worried about the exam.
Mi puoi consigliare un buon ristorante? - Can you recommend a good restaurant?
Ho bisogno di aiuto con questo compito. - I need help with this task.
Che tipo di musica ti piace? - What kind of music do you like?
A che ora inizia il film? - What time does the movie start?
Qual è il tuo sport preferito? - What's your favorite sport?
Mi sento male. - I feel sick.
Dove posso comprare i biglietti per il concerto? - Where can I buy tickets for the concert?
Non mi sento bene. - I don't feel well.
Quando è il tuo compleanno? - When is your birthday?
Vorrei ordinare da asporto. - I would like to order takeout.
Sei mai stato/a in Italia? - Have you ever been to Italy?
Mi annoio. - I'm bored.
Da quanto tempo stai imparando l'italiano? - How long have you been learning Italian?
Vorrei provare qualcosa di nuovo. - I would like to try something new.
Qual è la tua serie preferita? - What's your favorite TV series?
Ho sete. - I'm thirsty.
Qual è il tuo passatempo preferito? - What's your favorite hobby?
Cosa fai nella vita? - What do you do for a living?
Non vedo l'ora di andare in vacanza. - I can't wait to go on vacation.
Qual è il tuo animale preferito? - What's your favorite animal?
Sono impaziente. - I'm impatient.
Come si dice "Grazie" in italiano? - How do you say "thank you" in Italian?
Mi sento felice oggi. - I feel happy today.
Qual è la tua meta di viaggio preferita? - What's your favorite travel destination?
Non ho soldi. - I don't have any money.
Vuoi bere qualcosa? - Would you like to have a drink?
Sono pronto/a a cominciare. - I'm ready to start.
Qual è la tua canzone preferita? - What's your favorite song?
Non ho abbastanza tempo. - I don't have enough time.
Qual è il tuo show preferito? - What's your favorite TV show?
Puoi parlare più forte? - Can you speak louder?
Vorrei prenotare per due persone. - I would like to make a reservation for two people.
Come ti senti oggi? - How do you feel today?
Non vedo l'ora di andare al concerto. - I'm looking forward to the concert.
Qual è la tua meta di vacanza preferita? - What's your favorite holiday destination?
Non ho soldi al momento. - I don't have money at the moment.
A che ora chiude il negozio? - What time does the store close?
Sto arrivando. - I'm coming.
Non mi importa. - I don't care.
Puoi darmi dell'acqua, per favore? - Can you give me some water, please?
Sono preoccupato/a per il futuro. - I'm worried about the future.
Cosa ne pensi dell'hotel nuovo? - What do you think of the new hotel?
Sono occupato/a al momento. - I'm busy at the moment.
Qual è il tuo sito storico preferito? - What's your favorite historical site?
Vorrei visitare il Sud America. - I would like to visit South America.
Mi puoi consigliare un buon libro? - Can you recommend a good book?
Sono occupato/a in questo momento. - I'm busy at the moment.
Quante lingue parli? - How many languages do you speak?


Olá! - Hello!
Como está você? - How are you?
Meu nome é Pedro. - My name is Pedro.
Onde fica o banheiro? - Where is the bathroom?
Estou com fome. - I'm hungry.
Que horas são? - What time is it?
Como você se chama? - What's your name?
Estou cansado(a). - I'm tired.
Eu não entendo. - I don't understand.
Obrigado(a) pela ajuda. - Thank you for the help.
O que você quer fazer hoje? - What do you want to do today?
Quantos anos você tem? - How old are you?
Você pode repetir, por favor? - Can you repeat, please?
Eu gosto muito dessa música. - I really like this song.
Onde você mora? - Where do you live?
Estou perdido(a). - I'm lost.
Qual é o seu prato favorito? - What's your favorite dish?
Você pode falar mais devagar? - Can you speak more slowly?
Feliz aniversário! - Happy birthday!
O que você quer fazer amanhã? - What do you want to do tomorrow?
Como se diz "hello" em português? - How do you say "hello" in Portuguese?
Estou animado(a) com a viagem. - I'm excited about the trip.
Você tem irmãos ou irmãs? - Do you have siblings?
Não tenho tempo no momento. - I don't have time at the moment.
Eu adoro este lugar. - I love this place.
A que horas você sai de manhã? - What time do you leave in the morning?
O que você acha do novo restaurante? - What do you think of the new restaurant?
Você pode me ajudar com isso, por favor? - Can you help me with this, please?
Estou aprendendo português. - I'm learning Portuguese.
Parabéns! - Congratulations!
Qual é o seu filme favorito? - What's your favorite movie?
Quanto custa? - How much does it cost?
Estou me sentindo triste hoje. - I'm feeling sad today.
Você tem planos para o fim de semana? - Do you have any plans for the weekend?
Onde podemos encontrar um bom restaurante? - Where can we find a good restaurant?
Que delícia! - How delicious!
Estou satisfeito(a) com o meu novo trabalho. - I'm satisfied with my new job.
Posso pegar emprestado sua caneta? - Can I borrow your pen?
Gostaria de reservar um quarto de hotel. - I would like to book a hotel room.
Qual é a sua cor favorita? - What's your favorite color?
Estou com dor de cabeça. - I have a headache.
Boa sorte! - Good luck!
A que horas a loja abre? - What time does the store open?
Adoro viajar. - I love to travel.
Você quer vir para a minha festa? - Do you want to come to my party?
Estou ocupado(a) no momento. - I'm busy at the moment.
O que você fez ontem? - What did you do yesterday?
Gostaria de um café com leite. - I would like a coffee with milk.
Qual é o seu livro favorito? - What's your favorite book?
Eu não faço ideia. - I have no idea.
Divirta-se! - Have fun!
Estou preocupado(a) com o exame. - I'm worried about the exam.
Você pode me recomendar um bom restaurante? - Can you recommend a good restaurant?
Preciso de ajuda com essa tarefa. - I need help with this task.
Que tipo de música você gosta? - What kind of music do you like?
A que horas o filme começa? - What time does the movie start?
Qual é o seu esporte favorito? - What's your favorite sport?
Estou me sentindo mal. - I'm feeling sick.
Onde posso comprar ingressos para o concerto? - Where can I buy tickets for the concert?
Não estou me sentindo bem. - I don't feel well.
Quando é o seu aniversário? - When is your birthday?
Gostaria de pedir para viagem. - I would like to order takeout.
Você já esteve no Brasil? - Have you ever been to Brazil?
Estou entediado(a). - I'm bored.
Há quanto tempo você está aprendendo português? - How long have you been learning Portuguese?
Gostaria de experimentar algo novo. - I would like to try something new.
Qual é a sua série favorita? - What's your favorite TV series?
Estou com sede. - I'm thirsty.
Qual é o seu passatempo favorito? - What's your favorite hobby?
O que você faz da vida? - What do you do for a living?
Mal posso esperar para ir de férias. - I can't wait to go on vacation.
Qual é o seu animal favorito? - What's your favorite animal?
Estou impaciente. - I'm impatient.
Como se diz "obrigado" em português? - How do you say "thank you" in Portuguese?
Estou me sentindo feliz hoje. - I'm feeling happy today.
Qual é o seu destino de viagem favorito? - What's your favorite travel destination?
Não tenho dinheiro. - I don't have any money.
Você gostaria de tomar algo? - Would you like to have a drink?
Estou pronto(a) para começar. - I'm ready to start.
Qual é a sua música favorita? - What's your favorite song?
Não tenho tempo suficiente. - I don't have enough time.
Qual é o seu programa de TV favorito? - What's your favorite TV show?
Você pode falar mais alto? - Can you speak louder?
Gostaria de fazer uma reserva para duas pessoas. - I would like to make a reservation for two people.
Como você está se sentindo hoje? - How are you feeling today?
Mal posso esperar pelo show. - I can't wait for the show.
Qual é o seu destino de férias favorito? - What's your favorite holiday destination?
Não tenho dinheiro no momento. - I don't have money at the moment.
A que horas a loja fecha? - What time does the store close?
Estou chegando. - I'm coming.
Eu não me importo. - I don't mind.
Você pode me dar água, por favor? - Can you give me some water, please?
Estou preocupado(a) com o futuro. - I'm worried about the future.
O que você acha do novo hotel? - What do you think of the new hotel?
Estou ocupado(a) no momento. - I'm busy at the moment.
Qual é o seu local histórico favorito? - What's your favorite historical site?
Gostaria de visitar a América do Sul. - I would like to visit South America.
Você pode me recomendar um bom livro? - Can you recommend a good book?
Estou ocupado(a) no momento. - I'm busy at the moment.
Quantas línguas você fala? - How many languages do you speak?



Hola, ¿cómo estás? - Hello, how are you?
Me llamo María. - My name is María.
¿Qué hora es? - What time is it?
¿Dónde está el baño? - Where is the bathroom?
¿Cuántos años tienes? - How old are you?
Estoy cansado. - I'm tired.
Me gusta el chocolate. - I like chocolate.
No entiendo. - I don't understand.
¿Qué pasa? - What's happening?
Estoy feliz. - I'm happy.
¿Puedo ayudarte? - Can I help you?
¿Cuál es tu película favorita? - What is your favorite movie?
Tengo hambre. - I'm hungry.
¿Dónde vives? - Where do you live?
Me encanta viajar. - I love to travel.
Estoy estudiando español. - I am studying Spanish.
¿Puedes repetir, por favor? - Can you repeat that, please?
¿Quieres salir conmigo? - Do you want to go out with me?
Estoy perdido. - I'm lost.
¿Cuál es tu deporte favorito? - What is your favorite sport?
¿Qué quieres hacer hoy? - What do you want to do today?
Tengo sed. - I'm thirsty.
¿Cómo te llamas? - What's your name?
Me gusta bailar. - I like to dance.
No sé. - I don't know.
¿A qué te dedicas? - What do you do for a living?
Estoy emocionado. - I'm excited.
¿Qué estás haciendo? - What are you doing?
Estoy enfermo. - I'm sick.
¿Cuál es tu comida favorita? - What is your favorite food?
Me encanta la música. - I love music.
No puedo hacerlo. - I can't do it.
¿Cuánto cuesta? - How much does it cost?
Estoy aburrido. - I'm bored.
¿Qué piensas? - What do you think?
Me gustaría pedir algo de comer. - I would like to order something to eat.
¿Dónde puedo encontrar un buen restaurante? - Where can I find a good restaurant?
Estoy ocupado. - I'm busy.
¿Puedes hablar más despacio? - Can you speak more slowly?
¿Cuál es tu color favorito? - What is your favorite color?
Me encanta leer. - I love to read.
Estoy preocupado. - I'm worried.
¿Dónde está la estación de tren? - Where is the train station?
¿Cuál es tu canción favorita? - What is your favorite song?
Tengo frío. - I'm cold.
¿Puedes ayudarme, por favor? - Can you help me, please?
Estoy emocionada de verte. - I'm excited to see you.
¿Qué quieres ser cuando crezcas? - What do you want to be when you grow up?
Me gusta jugar al fútbol. - I like to play soccer.
No puedo esperar. - I can't wait.
¿Cuántos hermanos tienes? - How many siblings do you have?
Estoy listo. - I'm ready.
¿Dónde puedo comprar recuerdos? - Where can I buy souvenirs?
¿Cuál es tu libro favorito? - What is your favorite book?
Tengo sueño. - I'm sleepy.
¿Cómo te sientes? - How do you feel?
Me encanta cocinar. - I love to cook.
Estoy en casa. - I'm at home.
¿Puedes explicar eso de nuevo? - Can you explain that again?
¿Cuál es tu pasatiempo favorito? - What is your favorite hobby?
Me gusta nadar. - I like to swim.
No tengo tiempo. - I don't have time.
¿Dónde está el supermercado más cercano? - Where is the nearest supermarket?
¿Cuál es tu serie de televisión favorita? - What is your favorite TV series?
Tengo calor. - I'm hot.
¿Puedes darme un consejo? - Can you give me some advice?
Estoy contento. - I'm content.
¿Qué te gusta hacer en tu tiempo libre? - What do you like to do in your free time?
Me gusta dibujar. - I like to draw.
No puedo creerlo. - I can't believe it.
¿Cuántas hermanas tienes? - How many sisters do you have?
Estoy ocupada. - I'm busy (female speaker).
¿Dónde puedo encontrar un buen hotel? - Where can I find a good hotel?
¿Cuál es tu artista favorito? - Who is your favorite artist?
Tengo miedo. - I'm scared.
¿Cuántos idiomas hablas? - How many languages do you speak?
Me encanta ir de compras. - I love to go shopping.
Estoy en el trabajo. - I'm at work.
¿Puedes recomendarme un buen restaurante? - Can you recommend a good restaurant?
¿Cuál es tu película favorita de todos los tiempos? - What is your all-time favorite movie?
Tengo dolor de cabeza. - I have a headache.
¿Puedo tomar prestado tu bolígrafo? - Can I borrow your pen?
Estoy emocionado por el concierto. - I'm excited about the concert.
¿Qué te gusta más, el café o el té? - What do you like better, coffee or tea?
Me gusta correr. - I like to run.
No entiendo el significado de esa palabra. - I don't understand the meaning of that word.
¿Cuál es tu lugar favorito para visitar? - What is your favorite place to visit?
Tengo ganas de ir de vacaciones. - I feel like going on vacation.
¿Dónde puedo tomar un buen café? - Where can I get a good coffee?
¿Cuál es tu género musical favorito? - What is your favorite music genre?
Me encanta hacer ejercicio. - I love to exercise.
Estoy triste. - I'm sad.
¿Dónde puedo encontrar información turística? - Where can I find tourist information?
¿Cuál es tu deporte favorito para ver? - What is your favorite sport to watch?
Tengo prisa. - I'm in a hurry.
¿Puedes abrir la ventana, por favor? - Can you open the window, please?
Estoy sorprendido. - I'm surprised.
¿Qué te gusta comer en el desayuno? - What do you like to eat for breakfast?
Me gusta cantar. - I like to sing.
No puedo esperar a verte de nuevo. - I can't wait to see you again.
¿Cuál es tu animal favorito? - What is your favorite animal?
Estoy agotado. - I'm exhausted.
¿Dónde puedo encontrar un cajero automático? - Where can I find an ATM?
¿Cuál es tu programa de televisión favorito? - What is your favorite TV show?
Tengo dolor de estómago. - I have a stomachache.
¿Puedes explicarme cómo llegar allí? - Can you explain to me how to get there?
Estoy feliz de verte. - I'm happy to see you.
¿Qué música te gusta escuchar? - What kind of music do you like to listen to?
Me gusta montar en bicicleta. - I like to ride a bike.
No puedo encontrar mis llaves. - I can't find my keys.
¿Cuál es tu sueño en la vida? - What is your dream in life?
Estoy emocionado por el viaje. - I'm excited about the trip.
¿Qué tipo de comida te gusta? - What kind of food do you like?
Me gusta jugar videojuegos. - I like to play video games.
No tengo idea. - I have no idea.
¿Dónde puedo comprar boletos? - Where can I buy tickets?
¿Cuál es tu programa de radio favorito? - What is your favorite radio program?
Tengo dolor de garganta. - I have a sore throat.
¿Puedes cerrar la puerta, por favor? - Can you close the door, please?
Estoy impresionado. - I'm impressed.
¿Cuál es tu lugar favorito en el mundo? - What is your favorite place in the world?
Me encanta ver películas. - I love watching movies.
Estoy abrumado. - I'm overwhelmed.
¿Dónde puedo encontrar un buen lugar para tomar fotos? - Where can I find a good spot to take pictures?
¿Cuál es tu estilo de música favorito? - What is your favorite music style?
Me gusta jugar al tenis. - I like to play tennis.
No puedo recordarlo. - I can't remember it.
¿Cuál es tu estación del año favorita? - What is your favorite season?
Estoy de acuerdo contigo. - I agree with you.
¿Qué te gusta hacer los fines de semana? - What do you like to do on weekends?
Me gusta ver series en Netflix. - I like to watch series on Netflix.
No me importa. - I don't care.
¿Dónde puedo encontrar un buen parque? - Where can I find a nice park?
¿Cuál es tu género de película favorito? - What is your favorite movie genre?
Me encanta ir de excursión. - I love to go hiking.
Estoy decepcionado. - I'm disappointed.
¿Cuál es tu plato típico favorito? - What is your favorite typical dish?
Tengo alergia. - I have an allergy.
¿Puedes prestarme dinero? - Can you lend me some money?
Estoy emocionado por la fiesta. - I'm excited about the party.
¿Qué tipo de libros te gusta leer? - What kind of books do you like to read?
Me gusta jugar al baloncesto. - I like to play basketball.
No tengo ni idea. - I have no clue.
¿Dónde puedo encontrar un buen museo? - Where can I find a good museum?
¿Cuál es tu género de música favorito? - What is your favorite music genre?
Me gusta viajar en avión. - I like to travel by plane.
Estoy enojado. - I'm angry.
¿Cuál es tu lugar favorito para relajarte? - What is your favorite place to relax?
Tengo alergia al polen. - I'm allergic to pollen.
¿Puedes pasarme la sal, por favor? - Can you pass me the salt, please?
Estoy fascinado. - I'm fascinated.
¿Cuál es tu programa de podcasts favorito? - What is your favorite podcast?
Me encanta ir de camping. - I love to go camping.
No tengo ni la menor idea. - I have no idea whatsoever.
¿Dónde puedo encontrar información sobre eventos locales? - Where can I find information about local events?
¿Cuál es tu autor favorito? - Who is your favorite author?
Me gusta tocar el piano. - I like to play the piano.
No puedo hacerlo solo. - I can't do it alone.
¿Dónde puedo comprar souvenirs? - Where can I buy souvenirs?
¿Cuál es tu estilo de baile favorito? - What is your favorite dance style?
Me encanta ir a conciertos. - I love going to concerts.
Estoy nervioso. - I'm nervous.
¿Cuál es tu comida favorita para cenar? - What is your favorite dinner?
Tengo alergia a los gatos. - I'm allergic to cats.
¿Puedes decirme cómo llegar a la estación de tren? - Can you tell me how to get to the train station?
Estoy agradecido. - I'm grateful.
¿Qué te gusta hacer en tus vacaciones? - What do you like to do on your vacations?
Me gusta montar a caballo. - I like to ride horses.
No puedo imaginarlo. - I can't imagine it.
¿Cuál es tu instrumento musical favorito? - What is your favorite musical instrument?
Me encanta la playa. - I love the beach.
Estoy preocupada. - I'm worried (female speaker).
¿Dónde puedo encontrar un buen bar? - Where can I find a good bar?
¿Cuál es tu estilo de arte favorito? - What is your favorite art style?
Tengo alergia al cacahuate. - I'm allergic to peanuts.
¿Puedes darme un poco de agua, por favor? - Can you give me some water, please?
Estoy impresionada. - I'm impressed (female speaker).
¿Qué te gusta hacer en tu tiempo libre? - What do you like to do in your free time?
Me gusta esquiar. - I like to ski.
No tengo ni idea de qué estás hablando. - I have no idea what you're talking about.
¿Dónde puedo encontrar un buen lugar para bailar? - Where can I find a good place to dance?
¿Cuál es tu género cinematográfico favorito? - What is your favorite film genre?
Me encanta ir a la ópera. - I love going to the opera.
Estoy mareado. - I'm dizzy.
¿Cuál es tu hobby favorito? - What is your favorite hobby?
Tengo alergia al marisco. - I'm allergic to seafood.
¿Puedes llevarme al aeropuerto, por favor? - Can you take me to the airport, please?
Estoy intrigado. - I'm intrigued.
¿Qué te gusta hacer en tu tiempo libre? - What do you like to do in your free time?
Me gusta hacer senderismo. - I like to go hiking.
No tengo la menor idea. - I have no slightest idea.
¿Dónde puedo encontrar información sobre lugares turísticos? - Where can I find information about tourist spots?
¿Cuál es tu género de música favorito? - What is your favorite music genre?
Me gusta volar en avión. - I like to fly in an airplane.
Estoy furioso. - I'm furious.
¿Cuál es tu lugar favorito para descansar? - What is your favorite place to relax?
Tengo alergia al polvo. - I'm allergic to dust.
¿Puedes darme una mano, por favor? - Can you give me a hand, please?
Estoy impresionado/a contigo. - I'm impressed with you.
¿Qué te gusta hacer durante tus vacaciones? - What do you like to do during your vacations?
Me gusta montar en bicicleta. - I like to ride a bicycle.
No tengo idea de lo que estás hablando. - I have no idea what you're talking about.
¿Dónde puedo encontrar una buena discoteca? - Where can I find a good nightclub?
¿Cuál es tu estilo de cine favorito? - What is your favorite film style?
Me encanta ir a festivales. - I love going to festivals.
Estoy mareada. - I'm feeling dizzy (female speaker).
¿Cuál es tu pasatiempo favorito? - What is your favorite pastime?
Tengo alergia al polen. - I'm allergic to pollen.
¿Puedes decirme cómo llegar a la estación de tren? - Can you tell me how to get to the train station?
Estoy emocionada por la fiesta. - I'm excited about the party (female speaker).
¿Qué tipo de comida te gusta comer en el desayuno? - What kind of food do you like to eat for breakfast?
Me gusta jugar al baloncesto. - I like to play basketball.
No puedo hacerlo solo. - I can't do it alone.
¿Dónde puedo comprar recuerdos? - Where can I buy souvenirs?
¿Cuál es tu programa de radio favorito? - What is your favorite radio program?
Me encanta ir de camping. - I love to go camping.
No tengo ni idea. - I have no idea.
¿Dónde puedo encontrar un buen museo? - Where can I find a good museum?
¿Cuál es tu género de música favorito? - What is your favorite music genre?
Me gusta viajar en avión. - I like to travel by plane.
Estoy enojada. - I'm angry (female speaker).
¿Cuál es tu comida favorita para cenar? - What is your favorite dinner?
Tengo alergia a los gatos. - I'm allergic to cats.
¿Puedes decirme cómo llegar a la estación de autobuses? - Can you tell me how to get to the bus station?
Estoy agradecida. - I'm grateful (female speaker).
¿Qué te gusta hacer en tus vacaciones? - What do you like to do on your vacations?
Me gusta montar a caballo. - I like to ride horses.
No puedo imaginarlo. - I can't imagine it.
¿Dónde puedo encontrar información sobre eventos locales? - Where can I find information about local events?
¿Cuál es tu autor favorito? - Who is your favorite author?
Me gusta tocar el piano. - I like to play the piano.
No puedo hacerlo por mí mismo. - I can't do it by myself.
¿Dónde puedo comprar regalos? - Where can I buy gifts?
¿Cuál es tu estilo de baile favorito? - What is your favorite dance style?
Me encanta ir a conciertos. - I love going to concerts.
No tengo ni idea de lo que estás hablando. - I have no idea what you're talking about.
¿Dónde puedo encontrar un buen lugar para tomar fotos? - Where can I find a good place to take pictures?
¿Cuál es tu género cinematográfico favorito? - What is your favorite film genre?
Me gusta hacer ejercicio. - I like to exercise.
Estoy mareado. - I'm dizzy.
¿Cuál es tu comida favorita para cenar? - What is your favorite dinner?
Tengo alergia a los mariscos. - I'm allergic to seafood.
¿Puedes llevarme al aeropuerto, por favor? - Can you take me to the airport, please?
Estoy intrigado/a. - I'm intrigued.
¿Qué te gusta hacer en tu tiempo libre? - What do you like to do in your free time?
Me gusta hacer senderismo. - I like to go hiking.
No tengo la más mínima idea. - I have no slightest idea.
¿Dónde puedo encontrar información sobre lugares turísticos? - Where can I find information about tourist spots?
¿Cuál es tu género de música favorito? - What is your favorite music genre?
Me gusta volar en avión. - I like to fly in an airplane.
Estoy furiosa. - I'm furious (female speaker).
¿Cuál es tu lugar favorito para descansar? - What is your favorite place to relax?
Tengo alergia al polvo. - I'm allergic to dust.
¿Puedes ayudarme, por favor? - Can you help me, please?
Estoy impresionada contigo. - I'm impressed with you (female speaker).
¿Qué te gusta hacer durante tus vacaciones? - What do you like to do during your vacations?
Me gusta montar en bicicleta. - I like to ride a bicycle.
No tengo ni idea de lo que estás hablando. - I have no idea what you're talking about.
¿Dónde puedo encontrar un buen bar? - Where can I find a good bar?
¿Cuál es tu estilo de cine favorito? - What is your favorite film style?
Me encanta ir a festivales. - I love going to festivals.
Estoy mareada. - I'm feeling dizzy (female speaker).
¿Cuál es tu pasatiempo favorito? - What is your favorite pastime?
Tengo alergia al polen. - I'm allergic to pollen.
¿Puedes decirme cómo llegar a la estación de autobuses? - Can you tell me how to get to the bus station?
Estoy emocionada por la fiesta. - I'm excited about the party (female speaker).
¿Qué tipo de comida te gusta comer en el desayuno? - What kind of food do you like to eat for breakfast?
Me gusta jugar al baloncesto. - I like to play basketball.
No puedo hacerlo por mí misma. - I can't do it by myself (female speaker).
¿Dónde puedo encontrar un buen restaurante? - Where can I find a good restaurant?
¿Cuál es tu género literario favorito? - What is your favorite literary genre?
Me encanta ir al cine. - I love going to the cinema.
Estoy mareado. - I'm feeling dizzy.
¿Cuál es tu plato típico favorito? - What is your favorite typical dish?
Tengo alergia al polen. - I'm allergic to pollen.
¿Puedes decirme cómo llegar a la estación de autobuses? - Can you tell me how to get to the bus station?
Estoy agradecido/a. - I'm grateful.
¿Qué te gusta hacer en tus vacaciones? - What do you like to do on your vacations?
Me gusta montar a caballo. - I like to ride horses.
No puedo imaginarlo. - I can't imagine it.
¿Dónde puedo encontrar información sobre eventos locales? - Where can I find information about local events?
¿Cuál es tu autor favorito? - Who is your favorite author?
Me gusta tocar el piano. - I like to play the piano.
No puedo hacerlo por mí mismo. - I can't do it by myself.
¿Dónde puedo comprar regalos? - Where can I buy gifts?
¿Cuál es tu estilo de baile favorito? - What is your favorite dance style?
Me encanta ir a conciertos. - I love going to concerts.
Estoy mareado. - I'm feeling dizzy.
¿Cuál es tu comida favorita para cenar? - What is your favorite dinner?
Tengo alergia a los gatos. - I'm allergic to cats.
¿Puedes decirme cómo llegar al centro comercial? - Can you tell me how to get to the mall?
Estoy emocionada por la fiesta. - I'm excited about the party (female speaker).
¿Qué tipo de comida te gusta comer en el desayuno? - What kind of food do you like to eat for breakfast?
Me gusta jugar al fútbol. - I like to play soccer.
No puedo hacerlo solo. - I can't do it alone.
¿Dónde puedo encontrar un buen hotel? - Where can I find a good hotel?
¿Cuál es tu género literario favorito? - What is your favorite literary genre?
Me encanta ir al cine. - I love going to the movies.
Estoy mareada. - I'm feeling dizzy (female speaker).
¿Cuál es tu plato típico favorito? - What is your favorite typical dish?
Tengo alergia al polen. - I'm allergic to pollen.
¿Puedes decirme cómo llegar a la estación de tren? - Can you tell me how to get to the train station?
Estoy agradecida. - I'm grateful (female speaker).
¿Qué te gusta hacer en tus vacaciones? - What do you like to do on your vacations?
Me gusta montar a caballo. - I like to ride horses.
No puedo imaginarlo. - I can't imagine it.
¿Dónde puedo encontrar información sobre eventos locales? - Where can I find information about local events?
¿Cuál es tu autor favorito? - Who is your favorite author?
Me gusta tocar la guitarra. - I like to play the guitar.
No puedo hacerlo por mí misma. - I can't do it by myself (female speaker).
¿Dónde puedo comprar recuerdos? - Where can I buy souvenirs?
¿Cuál es tu estilo de baile favorito? - What is your favorite dance style?
Me encanta ir a conciertos. - I love going to concerts.
Estoy mareado. - I'm feeling dizzy.
¿Cuál es tu comida favorita para cenar? - What is your favorite dinner?
Tengo alergia a los gatos. - I'm allergic to cats.
¿Puedes decirme cómo llegar a la estación de tren? - Can you tell me how to get to the train station?
Estoy emocionado/a por la fiesta. - I'm excited about the party.
¿Qué tipo de comida te gusta comer en el desayuno? - What kind of food do you like to eat for breakfast?
Me gusta jugar al fútbol. - I like to play soccer.
No puedo hacerlo solo. - I can't do it alone.
¿Dónde puedo encontrar un buen hotel? - Where can I find a good hotel?
¿Cuál es tu género literario favorito? - What is your favorite literary genre?
Me encanta ir al cine. - I love going to the movies.
Estoy mareado. - I'm feeling dizzy.
¿Cuál es tu plato típico favorito? - What is your favorite typical dish?
Tengo alergia al polen. - I'm allergic to pollen.
¿Puedes decirme cómo llegar al centro comercial? - Can you tell me how to get to the mall?
Estoy agradecida. - I'm grateful (female speaker).
¿Qué te gusta hacer en tus vacaciones? - What do you like to do on your vacations?
Me gusta montar a caballo. - I like to ride horses.
No puedo imaginarlo. - I can't imagine it.
¿Dónde puedo encontrar información sobre eventos locales? - Where can I find information about local events?
¿Cuál es tu autor favorito? - Who is your favorite author?
Me gusta tocar la guitarra. - I like to play the guitar.
No puedo hacerlo por mí misma. - I can't do it by myself (female speaker).
¿Dónde puedo comprar recuerdos? - Where can I buy souvenirs?
¿Cuál es tu estilo de baile favorito? - What is your favorite dance style?
Me encanta ir a conciertos. - I love going to concerts.
Estoy mareado. - I'm feeling dizzy.
¿Cuál es tu comida favorita para cenar? - What is your favorite dinner?
Tengo alergia a los perros. - I'm allergic to dogs.
¿Puedes decirme cómo llegar a la estación de tren? - Can you tell me how to get to the train station?
Estoy emocionado/a por la fiesta. - I'm excited about the party.
¿Qué tipo de comida te gusta comer en el desayuno? - What kind of food do you like to eat for breakfast?
Me gusta jugar al baloncesto. - I like to play basketball.
No puedo hacerlo solo. - I can't do it alone.
¿Dónde puedo encontrar un buen restaurante? - Where can I find a good restaurant?
¿Cuál es tu género literario favorito? - What is your favorite literary genre?
Me encanta ir al cine. - I love going to the cinema.
Estoy mareada. - I'm feeling dizzy (female speaker).
¿Cuál es tu plato típico favorito? - What is your favorite typical dish?
Tengo alergia a los perros. - I'm allergic to dogs.
¿Puedes decirme cómo llegar al centro de la ciudad? - Can you tell me how to get to the city center?
Estoy agradecido/a. - I'm grateful.
¿Qué te gusta hacer en tus vacaciones? - What do you like to do on your vacations?
Me gusta montar en bicicleta. - I like to ride a bicycle.
No puedo imaginarlo. - I can't imagine it.
¿Dónde puedo encontrar información sobre eventos locales? - Where can I find information about local events?
¿Cuál es tu autor favorito? - Who is your favorite author?
Me gusta tocar la batería. - I like to play the drums.
No puedo hacerlo por mí mismo. - I can't do it by myself.
¿Dónde puedo comprar regalos? - Where can I buy gifts?
¿Cuál es tu estilo de baile favorito? - What is your favorite dance style?
Me encanta ir a conciertos. - I love going to concerts.
Estoy mareado. - I'm feeling dizzy.
¿Cuál es tu comida favorita para cenar? - What is your favorite dinner?
Tengo alergia a los perros. - I'm allergic to dogs.
¿Puedes decirme cómo llegar al centro de la ciudad? - Can you tell me how to get to the city center?
Estoy emocionada por la fiesta. - I'm excited about the party (female speaker).
¿Qué tipo de comida te gusta comer en el desayuno? - What kind of food do you like to eat for breakfast?
Me gusta jugar al tenis. - I like to play tennis.
No puedo hacerlo solo. - I can't do it alone.
¿Dónde puedo encontrar un buen restaurante? - Where can I find a good restaurant?
¿Cuál es tu género literario favorito? - What is your favorite literary genre?
Me encanta ir al cine. - I love going to the cinema.
Estoy mareada. - I'm feeling dizzy.
¿Cuál es tu plato típico favorito? - What is your favorite typical dish?
Tengo alergia a los perros. - I'm allergic to dogs.
¿Puedes decirme cómo llegar al centro de la ciudad? - Can you tell me how to get to the city center?
Estoy agradecida. - I'm grateful (female speaker).
¿Qué te gusta hacer en tus vacaciones? - What do you like to do on your vacations?
Me gusta montar en bicicleta. - I like to ride a bicycle.
No puedo imaginarlo. - I can't imagine it.
¿Dónde puedo encontrar información sobre eventos locales? - Where can I find information about local events?
¿Cuál es tu autor favorito? - Who is your favorite author?
Me gusta tocar el violín. - I like to play the violin.
No puedo hacerlo por mí misma. - I can't do it by myself (female speaker).
¿Dónde puedo comprar recuerdos? - Where can I buy souvenirs?
¿Cuál es tu estilo de baile favorito? - What is your favorite dance style?
Me encanta ir a conciertos. - I love going to concerts.
Estoy mareada. - I'm feeling dizzy.
¿Cuál es tu comida favorita para cenar? - What is your favorite dinner?
Tengo alergia a los perros. - I'm allergic to dogs.
¿Puedes decirme cómo llegar al centro de la ciudad? - Can you tell me how to get to the city center?
Estoy emocionada por la fiesta. - I'm excited about the party.
¿Qué tipo de comida te gusta comer en el desayuno? - What kind of food do you like to eat for breakfast?
Me gusta jugar al tenis. - I like to play tennis.
No puedo hacerlo solo. - I can't do it alone.
¿Dónde puedo encontrar un buen restaurante? - Where can I find a good restaurant?



Ich liebe dich. - I love you.
Wie geht es dir? - How are you?
Guten Morgen! - Good morning!
Ich bin müde. - I am tired.
Wo ist das Badezimmer? - Where is the bathroom?
Entschuldigung! - Excuse me!
Was ist dein Name? - What is your name?
Es tut mir leid. - I'm sorry.
Ich habe Hunger. - I'm hungry.
Wo ist der Bahnhof? - Where is the train station?
Danke schön! - Thank you very much!
Ich spreche ein wenig Deutsch. - I speak a little German.
Wie alt bist du? - How old are you?
Auf Wiedersehen! - Goodbye!
Ich habe Durst. - I'm thirsty.
Wo ist das Krankenhaus? - Where is the hospital?
Bitte schön! - You're welcome!
Wo kommst du her? - Where are you from?
Das ist fantastisch! - That is fantastic!
Ich bin verwirrt. - I'm confused.
Was ist das? - What is that?
Kannst du mir helfen? - Can you help me?
Schönen Tag noch! - Have a nice day!
Das ist wunderbar! - That is wonderful!
Ich habe keine Ahnung. - I have no idea.
Wo kann ich Geld wechseln? - Where can I exchange money?
Alles Gute zum Geburtstag! - Happy birthday!
Ich freue mich darauf. - I'm looking forward to it.
Gute Nacht! - Good night!
Ich habe Angst. - I'm scared.
Wie spät ist es? - What time is it?
Kein Problem! - No problem!
Ich verstehe nicht. - I don't understand.
Wo ist die nächste U-Bahn-Station? - Where is the nearest subway station?
Entschuldigen Sie bitte! - Excuse me! (formal)
Was machst du gerne? - What do you like to do?
Ich bin beschäftigt. - I'm busy.
Wie heißt du? - What's your name?
Herzlichen Glückwunsch! - Congratulations!
Das ist richtig. - That is correct.
Wo ist der nächste Supermarkt? - Where is the nearest supermarket?
Viel Glück! - Good luck!
Ich bin froh. - I'm glad.
Was hast du gesagt? - What did you say?
Wie geht's? - How's it going?
Kannst du das bitte wiederholen? - Can you please repeat that?
Sei vorsichtig! - Be careful!
Was ist los? - What's wrong?
Wo ist das nächste Restaurant? - Where is the nearest restaurant?
Das ist nicht fair. - That's not fair.
Ich bin hier neu. - I'm new here.
Wo kann ich ein Taxi finden? - Where can I find a taxi?
Keine Sorge! - Don't worry!
Das ist unglaublich! - That is unbelievable!
Ich bin traurig. - I'm sad.
Wie lange dauert es? - How long does it take?
Wo ist der nächste Geldautomat? - Where is the nearest ATM?
Ich weiß nicht. - I don't know.
Das ist lustig! - That's funny!
Wo ist der nächste Park? - Where is the nearest park?
Alles ist möglich. - Everything is possible.
Ich bin gespannt. - I'm curious.
Was möchtest du tun? - What would you like to do?
Wo kann ich einen Arzt finden? - Where can I find a doctor?
Es ist nicht wichtig. - It's not important.
Ich bin verliebt. - I'm in love.
Was empfiehlst du? - What do you recommend?
Wo ist das nächste Hotel? - Where is the nearest hotel?
Das ist seltsam. - That's strange.
Ich bin aufgeregt. - I'm excited.
Was machst du beruflich? - What do you do for a living?
Wo kann ich Souvenirs kaufen? - Where can I buy souvenirs?
Das ist beeindruckend. - That's impressive.
Ich bin müde. - I'm tired.
Was hast du vor? - What are your plans?
Wo ist der nächste Strand? - Where is the nearest beach?
Ich bin zufrieden. - I'm satisfied.
Was ist deine Lieblingsfarbe? - What is your favorite color?
Wo kann ich essen gehen? - Where can I go to eat?
Das ist merkwürdig. - That's weird.
Ich bin glücklich. - I'm happy.
Was ist deine Telefonnummer? - What's your phone number?
Wo kann ich mich ausruhen? - Where can I rest?
Das ist interessant. - That's interesting.
Ich bin verwirrt. - I'm confused.
Was ist dein Lieblingsessen? - What is your favorite food?
Wo kann ich eine Fahrkarte kaufen? - Where can I buy a ticket?
Das ist komisch. - That's weird.
Ich bin neugierig. - I'm curious.
Was ist dein Lieblingsfilm? - What is your favorite movie?
Wo kann ich Kleidung kaufen? - Where can I buy clothes?
Das ist erstaunlich. - That's amazing.
Ich bin gestresst. - I'm stressed.
Was ist deine Adresse? - What is your address?
Wo kann ich Sehenswürdigkeiten besichtigen? - Where can I visit tourist attractions?
Das ist beeindruckend. - That's impressive.
Ich bin dankbar. - I'm grateful.
Was ist deine Nationalität? - What is your nationality?
Wo kann ich etwas trinken? - Where can I get a drink?
Das ist lustig. - That's funny.
Ich bin hungrig. - I'm hungry.
Was ist dein Lieblingsbuch? - What is your favorite book?
Wo kann ich ein Museum besuchen? - Where can I visit a museum?
Das ist ermutigend. - That's encouraging.
Ich bin müde. - I'm tired.
Was ist deine Lieblingsmusik? - What is your favorite music?
Wo kann ich einen Spaziergang machen? - Where can I take a walk?
Das ist traurig. - That's sad.
Ich bin frustriert. - I'm frustrated.
Was ist deine Lieblingssportart? - What is your favorite sport?
Wo kann ich ein Fahrrad mieten? - Where can I rent a bicycle?
Das ist faszinierend. - That's fascinating.
Ich bin erschöpft. - I'm exhausted.
Was ist deine Lieblingsstadt? - What is your favorite city?
Wo kann ich mich entspannen? - Where can I relax?
Das ist inspirierend. - That's inspiring.
Ich bin begeistert. - I'm thrilled.
Was ist deine Lieblingsband? - What is your favorite band?
Wo kann ich eine Pause machen? - Where can I take a break?
Das ist großartig. - That's great.
Ich bin aufgeregt. - I'm thrilled.
Was ist deine Lieblingsfarbe? - What is your favorite color?
Wo kann ich essen gehen? - Where can I go to eat?
Das ist beeindruckend. - That's impressive.
Ich bin müde. - I'm tired.
Was hast du vor? - What are your plans?
Wo ist der nächste Strand? - Where is the nearest beach?
Ich bin zufrieden. - I'm satisfied.
Was ist deine Lieblingsfarbe? - What is your favorite color?
Wo kann ich essen gehen? - Where can I go to eat?
Das ist merkwürdig. - That's weird.
Ich bin glücklich. - I'm happy.
Was ist deine Telefonnummer? - What's your phone number?
Wo kann ich mich ausruhen? - Where can I rest?
Das ist interessant. - That's interesting.
Ich bin verwirrt. - I'm confused.
Was ist dein Lieblingsessen? - What is your favorite food?
Wo kann ich eine Fahrkarte kaufen? - Where can I buy a ticket?
Das ist komisch. - That's weird.
Ich bin neugierig. - I'm curious.
Was ist dein Lieblingsfilm? - What is your favorite movie?
Wo kann ich Kleidung kaufen? - Where can I buy clothes?
Das ist erstaunlich. - That's amazing.
Ich bin gestresst. - I'm stressed.
Was ist deine Adresse? - What is your address?
Wo kann ich Sehenswürdigkeiten besichtigen? - Where can I visit tourist attractions?
Das ist beeindruckend. - That's impressive.
Ich bin dankbar. - I'm grateful.
Was ist deine Nationalität? - What is your nationality?
Wo kann ich etwas trinken? - Where can I get a drink?
Das ist lustig. - That's funny.
Ich bin hungrig. - I'm hungry.
Was ist dein Lieblingsbuch? - What is your favorite book?
Wo kann ich ein Museum besuchen? - Where can I visit a museum?
Das ist ermutigend. - That's encouraging.
Ich bin müde. - I'm tired.
Was ist deine Lieblingsmusik? - What is your favorite music?
Wo kann ich einen Spaziergang machen? - Where can I take a walk?
Das ist traurig. - That's sad.
Ich bin frustriert. - I'm frustrated.
Was ist deine Lieblingssportart? - What is your favorite sport?
Wo kann ich ein Fahrrad mieten? - Where can I rent a bicycle?
Das ist faszinierend. - That's fascinating.
Ich bin erschöpft. - I'm exhausted.
Was ist deine Lieblingsstadt? - What is your favorite city?
Wo kann ich mich entspannen? - Where can I relax?
Das ist inspirierend. - That's inspiring.
Ich bin begeistert. - I'm thrilled.
Was ist deine Lieblingsband? - What is your favorite band?
Wo kann ich eine Pause machen? - Where can I take a break?
Das ist großartig. - That's great.
Ich bin erstaunt. - I'm amazed.
Was ist deine Lieblingsbeschäftigung? - What is your favorite activity?
Wo kann ich schöne Fotos machen? - Where can I take nice photos?
Das ist atemberaubend. - That's breathtaking.
Ich bin entspannt. - I'm relaxed.
Was ist deine Lieblingszeit des Jahres? - What is your favorite time of the year?
Wo kann ich mich unterhalten? - Where can I socialize?
Das ist magisch. - That's magical.
Ich bin neidisch. - I'm jealous.
Was ist deine Lieblingsfernsehserie? - What is your favorite TV series?
Wo kann ich eine Veranstaltung finden? - Where can I find an event?
Das ist bemerkenswert. - That's remarkable.
Ich bin motiviert. - I'm motivated.
Was ist deine Lieblingsküche? - What is your favorite cuisine?
Wo kann ich Spaß haben? - Where can I have fun?
Das ist unvergesslich. - That's unforgettable.
Ich bin erfreut. - I'm delighted.
Was ist deine Lieblingszeitung? - What is your favorite newspaper?
Wo kann ich gute Musik hören? - Where can I listen to good music?
Das ist herzlich. - That's heartwarming.
Ich bin optimistisch. - I'm optimistic.
Was ist deine Lieblingshobby? - What is your favorite hobby?
Wo kann ich Kunstwerke sehen? - Where can I see artworks?
Das ist bezaubernd. - That's enchanting.
Ich bin fasziniert. - I'm fascinated.
Was ist deine Lieblingsjahreszeit? - What is your favorite season?
Wo kann ich eine Pause machen? - Where can I take a break?
Das ist entspannend. - That's relaxing.
Ich bin beeindruckt. - I'm impressed.



Bonjour! - Hello!
Comment ça va? - How are you?
Je t'aime. - I love you.
Merci beaucoup! - Thank you very much!
Où est la gare? - Where is the train station?
Excusez-moi! - Excuse me!
Je suis désolé(e). - I'm sorry.
Quel est ton nom? - What is your name?
J'ai faim. - I'm hungry.
Au revoir! - Goodbye!
Je ne comprends pas. - I don't understand.
Comment tu t'appelles? - What's your name?
Bonne nuit! - Good night!
J'ai soif. - I'm thirsty.
Ça va bien. - I'm doing well.
Où est la plage? - Where is the beach?
Je suis perdu(e). - I'm lost.
De rien! - You're welcome!
Quel âge as-tu? - How old are you?
Comment ça s'écrit? - How is it spelled?
Je suis fatigué(e). - I'm tired.
Qu'est-ce que tu fais? - What are you doing?
Où est la bibliothèque? - Where is the library?
Quelle est ta nationalité? - What is your nationality?
Ça me fait plaisir. - It's my pleasure.
Comment ça marche? - How does it work?
Je ne sais pas. - I don't know.
Où est l'hôpital? - Where is the hospital?
Qu'est-ce que tu aimes faire? - What do you like to do?
Je suis content(e). - I'm happy.
Combien ça coûte? - How much does it cost?
Je suis occupé(e). - I'm busy.
Quel est ton numéro de téléphone? - What is your phone number?
Ça dépend. - It depends.
Où est la station de métro? - Where is the subway station?
Comment ça s'appelle? - What is it called?
Je suis triste. - I'm sad.
À bientôt! - See you soon!
Quelle est ta couleur préférée? - What is your favorite color?
Je suis désolé(e). - I'm sorry.
Où est le supermarché le plus proche? - Where is the nearest supermarket?
Qu'est-ce que tu veux faire? - What do you want to do?
Je suis excité(e). - I'm excited.
Quelle heure est-il? - What time is it?
Je suis inquiet(e). - I'm worried.
Où est le restaurant? - Where is the restaurant?
Qu'est-ce qui se passe? - What's happening?
Je suis prêt(e). - I'm ready.
Ça n'a pas d'importance. - It doesn't matter.
Où habites-tu? - Where do you live?
Quel est ton film préféré? - What is your favorite movie?
Je suis curieux(se). - I'm curious.
Est-ce que tu peux m'aider? - Can you help me?
Où est la banque? - Where is the bank?
Qu'est-ce que tu aimes manger? - What do you like to eat?
Je suis en retard. - I'm late.
Comment ça va aujourd'hui? - How are you today?
Je ne suis pas sûr(e). - I'm not sure.
Où est la pharmacie? - Where is the pharmacy?
Quel est ton sport préféré? - What is your favorite sport?
Je suis en vacances. - I'm on vacation.
Qu'est-ce que tu étudies? - What are you studying?
J'ai besoin d'aide. - I need help.
Où est la poste? - Where is the post office?
Quel est ton livre préféré? - What is your favorite book?
Je suis en colère. - I'm angry.
Est-ce que tu parles anglais? - Do you speak English?
Où est la sortie? - Where is the exit?
Qu'est-ce que tu veux boire? - What do you want to drink?
Je suis occupé(e). - I'm busy.
Comment ça se prononce? - How is it pronounced?
Je suis en bonne santé. - I'm in good health.
Où est le musée? - Where is the museum?
Qu'est-ce que tu fais ce soir? - What are you doing tonight?
Je suis surpris(e). - I'm surprised.
Est-ce que tu peux répéter, s'il te plaît? - Can you repeat, please?
Où est le bureau de change? - Where is the currency exchange office?
Qu'est-ce que tu aimes écouter? - What do you like to listen to?
Je suis impatient(e). - I'm impatient.
Comment tu trouves ça? - What do you think of it?
Je suis en train de travailler. - I'm working.
Où est le parc? - Where is the park?
Qu'est-ce que tu as fait aujourd'hui? - What did you do today?
Je suis froid(e). - I'm cold.
Est-ce que tu as des frères ou des sœurs? - Do you have any brothers or sisters?
Où est la salle de bains? - Where is the bathroom?
Qu'est-ce que tu veux acheter? - What do you want to buy?
Je suis chaud(e). - I'm hot.
Comment ça s'est passé? - How did it go?
Je suis ennuyé(e). - I'm bored.
Où est la piscine? - Where is the swimming pool?
Qu'est-ce que tu veux visiter? - What do you want to visit?
Je suis nerveux(se). - I'm nervous.
Est-ce que tu peux me donner un coup de main? - Can you give me a hand?
Où est le cinéma? - Where is the cinema?
Qu'est-ce que tu as appris aujourd'hui? - What did you learn today?
Je suis en train de lire. - I'm reading.
Où est le restaurant le plus proche? - Where is the nearest restaurant?
Qu'est-ce que tu aimes porter? - What do you like to wear?
Je suis heureux(se). - I'm happy.
Comment ça s'est passé aujourd'hui? - How did it go today?
Je suisexcité(e). - I'm excited.
Où est la boutique de souvenirs? - Where is the souvenir shop?
Qu'est-ce que tu veux découvrir? - What do you want to discover?
Je suis ennuyé(e). - I'm bored.
Est-ce que tu peux me prêter de l'argent? - Can you lend me some money?
Où est la cathédrale? - Where is the cathedral?
Qu'est-ce que tu as fait le week-end dernier? - What did you do last weekend?
Je suis stressé(e). - I'm stressed.
Comment ça se passe? - How is it going?
Je suis en train de cuisiner. - I'm cooking.
Où est la station de bus? - Where is the bus station?
Qu'est-ce que tu veux améliorer? - What do you want to improve?
Je suis épuisé(e). - I'm exhausted.
Est-ce que tu peux me donner des conseils? - Can you give me some advice?
Où est le magasin de vêtements? - Where is the clothing store?
Qu'est-ce que tu as fait hier soir? - What did you do last night?
Je suis soulagé(e). - I'm relieved.
Comment ça se passe au travail? - How is it going at work?
Je suis en train de regarder la télévision. - I'm watching TV.
Où est la salle de concert? - Where is the concert hall?
Qu'est-ce que tu veux réaliser? - What do you want to achieve?
Je suis préoccupé(e). - I'm concerned.
Est-ce que tu peux m'expliquer? - Can you explain to me?
Où est la librairie? - Where is the bookstore?
Qu'est-ce que tu as fait pendant les vacances? - What did you do during the holidays?
Je suis confus(e). - I'm confused.
Comment ça se passe à l'école? - How is it going at school?
Je suis en train de faire du sport. - I'm doing sports.
Où est la boulangerie? - Where is the bakery?
Qu'est-ce que tu veux atteindre? - What do you want to accomplish?
Je suis déçu(e). - I'm disappointed.
Est-ce que tu peux m'accompagner? - Can you accompany me?
Où est la place principale? - Where is the main square?
Qu'est-ce que tu as prévu de faire? - What do you plan to do?
Je suis inquiet(e). - I'm worried.
Comment ça se passe en famille? - How is it going with the family?
Je suis en train de prendre des photos. - I'm taking photos.
Où est la gare routière? - Where is the bus station?
Qu'est-ce que tu veux changer? - What do you want to change?
Je suis distrait(e). - I'm distracted.
Est-ce que tu peux me prêter ton stylo? - Can you lend me your pen?
Où est la rue principale? - Where is the main street?
Qu'est-ce que tu as fait hier? - What did you do yesterday?
Je suis inquiet(e). - I'm worried.
Comment ça se passe avec tes amis? - How is it going with your friends?
Je suis en train de travailler sur un projet. - I'm working on a project.
Où est la gare ferroviaire? - Where is the train station?
Qu'est-ce que tu veux partager? - What do you want to share?
Je suis ému(e). - I'm moved.


Ciao! - Hello!
Come stai? - How are you?
Ti amo. - I love you.
Grazie mille! - Thank you very much!
Dove si trova la stazione? - Where is the train station?
Mi scusi! - Excuse me!
Mi dispiace. - I'm sorry.
Come ti chiami? - What's your name?
Ho fame. - I'm hungry.
Arrivederci! - Goodbye!
Non capisco. - I don't understand.
Come si chiama? - What is it called?
Buona notte! - Good night!
Ho sete. - I'm thirsty.
Sto bene. - I'm fine.
Dove si trova la spiaggia? - Where is the beach?
Sono perso(a). - I'm lost.
Prego! - You're welcome!
Quanti anni hai? - How old are you?
Come si pronuncia? - How is it pronounced?
Sono stanco(a). - I'm tired.
Cosa stai facendo? - What are you doing?
Dove si trova la biblioteca? - Where is the library?
Qual è la tua nazionalità? - What is your nationality?
Con piacere. - With pleasure.
Come funziona? - How does it work?
Non lo so. - I don't know.
Dove si trova l'ospedale? - Where is the hospital?
Cosa ti piace fare? - What do you like to do?
Sono felice. - I'm happy.
Quanto costa? - How much does it cost?
Sono occupato(a). - I'm busy.
Qual è il tuo numero di telefono? - What is your phone number?
Dipende. - It depends.
Dove si trova la stazione della metropolitana? - Where is the subway station?
Come si chiama? - What's your name?
Sono triste. - I'm sad.
A presto! - See you soon!
Qual è il tuo colore preferito? - What is your favorite color?
Sono dispiaciuto(a). - I'm sorry.
Dove si trova il supermercato più vicino? - Where is the nearest supermarket?
Cosa vuoi fare? - What do you want to do?
Sono emozionato(a). - I'm excited.
Che ore sono? - What time is it?
Sono preoccupato(a). - I'm worried.
Dove si trova il ristorante? - Where is the restaurant?
Cosa sta succedendo? - What's happening?
Sono pronto(a). - I'm ready.
Non importa. - It doesn't matter.
Dove abiti? - Where do you live?
Qual è il tuo film preferito? - What is your favorite movie?
Sono curioso(a). - I'm curious.
Mi puoi aiutare? - Can you help me?
Dove si trova la farmacia? - Where is the pharmacy?


Olá! - Hello!
Como vai? - How are you?
Eu te amo. - I love you.
Muito obrigado(a)! - Thank you very much!
Onde fica a estação de trem? - Where is the train station?
Com licença! - Excuse me!
Desculpe. - I'm sorry.
Qual é o seu nome? - What's your name?
Estou com fome. - I'm hungry.
Tchau! - Goodbye!
Eu não entendo. - I don't understand.
Como se chama isso? - What is it called?
Boa noite! - Good night!
Estou com sede. - I'm thirsty.
Estou bem. - I'm fine.
Onde fica a praia? - Where is the beach?
Estou perdido(a). - I'm lost.
De nada! - You're welcome!
Quantos anos você tem? - How old are you?
Como se pronuncia? - How is it pronounced?
Estou cansado(a). - I'm tired.
O que você está fazendo? - What are you doing?
Onde fica a biblioteca? - Where is the library?
Qual é a sua nacionalidade? - What is your nationality?
Com prazer. - With pleasure.
Como funciona? - How does it work?
Eu não sei. - I don't know.
Onde fica o hospital? - Where is the hospital?
O que você gosta de fazer? - What do you like to do?
Estou feliz. - I'm happy.
Quanto custa? - How much does it cost?
Estou ocupado(a). - I'm busy.
Qual é o seu número de telefone? - What is your phone number?
Depende. - It depends.
Onde fica a estação de metrô? - Where is the subway station?
Como se chama isso? - What's your name?
Estou triste. - I'm sad.
Até logo! - See you soon!
Qual é a sua cor favorita? - What is your favorite color?
Sinto muito. - I'm sorry.
Onde fica o supermercado mais próximo? - Where is the nearest supermarket?
O que você quer fazer? - What do you want to do?
Estou animado(a). - I'm excited.
Que horas são? - What time is it?
Estou preocupado(a). - I'm worried.
Onde fica o restaurante? - Where is the restaurant?
O que está acontecendo? - What's happening?
Estou pronto(a). - I'm ready.
Não importa. - It doesn't matter.
Onde você mora? - Where do you live?
Qual é o seu filme preferido? - What is your favorite movie?
Estou curioso(a). - I'm curious.
Você pode me ajudar? - Can you help me?
Onde fica a farmácia? - Where is the pharmacy?
Estou ocupado(a). - I'm busy.
Como se chama a rua? - What's the street called?
Estou cansado(a) de trabalhar. - I'm tired of working.
Onde fica o banco? - Where is the bank?
Quais são seus hobbies? - What are your hobbies?
Estou com pressa. - I'm in a hurry.
Quanto tempo leva para chegar lá? - How long does it take to get there?
Estou com frio. - I'm cold.
Onde fica a estação de ônibus? - Where is the bus station?
Eu gostaria de fazer uma reserva. - I would like to make a reservation.
Estou com calor. - I'm hot.
Qual é o seu prato preferido? - What is your favorite dish?
Estou com medo. - I'm scared.
Onde fica o correio? - Where is the post office?
O que você recomenda? - What do you recommend?
Estou com sono. - I'm sleepy.
Onde fica a loja de roupas? - Where is the clothing store?
Eu não concordo. - I don't agree.
Estou com dor de cabeça. - I have a headache.
O que você está estudando? - What are you studying?
Estou com dor de estômago. - I have a stomachache.
Onde posso encontrar um bom restaurante? - Where can I find a good restaurant?
Estou com dor nas costas. - I have back pain.
O que você quer assistir? - What do you want to watch?
Estou com dor de garganta. - I have a sore throat.
Onde fica a estação de trem? - Where is the train station?
Estou com febre. - I have a fever.
Quanto custa o ingresso? - How much does the ticket cost?
Estou com alergia. - I have an allergy.
O que você está lendo? - What are you reading?
Estou com gripe. - I have the flu.
O que você está vestindo? - What are you wearing?
Estou com tosse. - I have a cough.
O que você está pensando? - What are you thinking?
Estou com frio. - I feel cold.
O que você está procurando? - What are you looking for?
Estou com calor. - I feel hot.
O que você está sonhando? - What are you dreaming about?
Estou com fome. - I feel hungry.
O que você está cozinhando? - What are you cooking?
Estou com sede. - I feel thirsty.
O que você está ouvindo? - What are you listening to?
Estou com sono. - I feel sleepy.
O que você está escrevendo? - What are you writing?
Estou com pressa. - I feel rushed.
O que você está fazendo? - What are you doing?
Estou com vontade de chorar. - I feel like crying.
O que você está dizendo? - What are you saying?
Estou com vontade de rir. - I feel like laughing.
O que você está pensando? - What are you thinking?
Estou com vontade de dançar. - I feel like dancing.
O que você está sonhando? - What are you dreaming about?
Estou com vontade de cantar. - I feel like singing.
O que você está olhando? - What are you looking at?
Estou com vontade de viajar. - I feel like traveling.
O que você está desenhando? - What are you drawing?
Estou com vontade de comer chocolate. - I feel like eating chocolate.
O que você está planejando? - What are you planning?
Estou com vontade de tomar um café. - I feel like having a coffee.
O que você está assistindo? - What are you watching?
Estou com vontade de sair. - I feel like going out.
O que você está aprendendo? - What are you learning?
Estou com vontade de relaxar. - I feel like relaxing.
O que você está pesquisando? - What are you researching?
Estou com vontade de ler um livro. - I feel like reading a book.
O que você está procurando? - What are you searching for?
Estou com vontade de ouvir música. - I feel like listening to music.
O que você está esperando? - What are you waiting for?
Estou com vontade de nadar. - I feel like swimming.
O que você está comemorando? - What are you celebrating?
Estou com vontade de fazer exercícios. - I feel like exercising.
O que você está imaginando? - What are you imagining?
Estou com vontade de passear. - I feel like going for a walk.
O que você está discutindo? - What are you discussing?
Estou com vontade de assistir a um filme. - I feel like watching a movie.
O que você está construindo? - What are you building?
Estou com vontade de viajar. - I feel like traveling.
O que você está planejando? - What are you planning?
Estou com vontade de dançar. - I feel like dancing.
O que você está pensando? - What are you thinking?
Estou com vontade de comer uma pizza. - I feel like eating pizza.
O que você está assistindo? - What are you watching?
Estou com vontade de sair. - I feel like going out.
O que você está fazendo? - What are you doing?
Estou com vontade de tomar um sorvete. - I feel like having ice cream.
O que você está aprendendo? - What are you learning?
Estou com vontade de relaxar. - I feel like relaxing.
O que você está escrevendo? - What are you writing?
Estou com vontade de ler um livro. - I feel like reading a book.
O que você está pesquisando? - What are you researching?
Estou com vontade de ouvir música. - I feel like listening to music.
O que você está esperando? - What are you waiting for?
Estou com vontade de nadar. - I feel like swimming.
O que você está comemorando? - What are you celebrating?
Estou com vontade de fazer exercícios. - I feel like exercising.
O que você está imaginando? - What are you imagining?
Estou com vontade de passear. - I feel like going for a walk.
O que você está discutindo? - What are you discussing?
Estou com vontade de assistir a um filme. - I feel like watching a movie.
O que você está construindo? - What are you building?
Estou com vontade de cozinhar. - I feel like cooking.
O que você está preparando? - What are you preparing?
Estou com vontade de tomar um chá. - I feel like having tea.
O que você está estudando? - What are you studying?
Estou com vontade de abraçar alguém. - I feel like hugging someone.
O que você está criando? - What are you creating?
Estou com vontade de assistir a um show. - I feel like going to a concert.
O que você está procurando? - What are you looking for?
Estou com vontade de explorar. - I feel like exploring.
O que você está tocando? - What are you playing?
Estou com vontade de rir. - I feel like laughing.
O que você está construindo? - What are you constructing?
Estou com vontade de caminhar. - I feel like hiking.
O que você está preparando? - What are you preparing?
Estou com vontade de jogar videogame. - I feel like playing video games.
O que você está imaginando? - What are you imagining?
Estou com vontade de aprender algo novo. - I feel like learning something new.
O que você está assistindo? - What are you watching?
Estou com vontade de tirar uma soneca. - I feel like taking a nap.
O que você está lendo? - What are you reading?
Estou com vontade de tirar fotos. - I feel like taking pictures.
O que você está desejando? - What are you wishing for?
Estou com vontade de conhecer novas pessoas. - I feel like meeting new people.
O que você está curtindo? - What are you enjoying?
Estou com vontade de explorar a cidade. - I feel like exploring the city.
O que você está tocando? - What are you touching?
Estou com vontade de escrever uma história. - I feel like writing a story.
O que você está esperando? - What are you waiting for?
Estou com vontade de experimentar algo novo. - I feel like trying something new.
O que você está cozinhando? - What are you cooking?
Estou com vontade de assistir a uma peça de teatro. - I feel like watching a play.
O que você está desenhando? - What are you drawing?
Estou com vontade de viajar para a praia. - I feel like traveling to the beach.
O que você está sonhando? - What are you dreaming about?
Estou com vontade de dançar salsa. - I feel like dancing salsa.
O que você está comemorando? - What are you celebrating?
Estou com vontade de fazer uma trilha. - I feel like going hiking.
O que você está planejando? - What are you planning?
Estou com vontade de praticar esportes. - I feel like practicing sports.
O que você está investigando? - What are you investigating?
Estou com vontade de assistir a um jogo de futebol. - I feel like watching a soccer match.
O que você está aprendendo? - What are you learning?
Estou com vontade de visitar um museu. - I feel like visiting a museum.
O que você está discutindo? - What are you discussing?
Estou com vontade de fazer um piquenique. - I feel like having a picnic.
O que você está tocando? - What are you playing?
Estou com vontade de meditar. - I feel like meditating.
O que você está lendo? - What are you reading?
Estou com vontade de tomar um vinho. - I feel like having wine.
O que você está desejando? - What are you wishing for?
Estou com vontade de fazer compras. - I feel like shopping.
O que você está curtindo? - What are you enjoying?
Estou com vontade de ver um filme de comédia. - I feel like watching a comedy movie.
O que você está planejando? - What are you planning?
Estou com vontade de visitar um parque. - I feel like visiting a park.
O que você está comemorando? - What are you celebrating?
Estou com vontade de fazer um curso. - I feel like taking a course.
O que você está investigando? - What are you investigating?
Estou com vontade de assistir a um concerto. - I feel like attending a concert.
O que você está aprendendo? - What are you learning?
Estou com vontade de cozinhar uma nova receita. - I feel like cooking a new recipe.
O que você está discutindo? - What are you discussing?
Estou com vontade de experimentar um novo hobby. - I feel like trying a new hobby.
O que você está tocando? - What are you playing?
Estou com vontade de fazer uma viagem de aventura. - I feel like going on an adventure trip.
O que você está planejando? - What are you planning?
Estou com vontade de fazer um curso de idiomas. - I feel like taking a language course.
O que você está comemorando? - What are you celebrating?
Estou com vontade de fazer uma sessão de fotos. - I feel like having a photoshoot.
O que você está investigando? - What are you investigating?
Estou com vontade de assistir a um espetáculo de dança. - I feel like watching a dance performance.
O que você está aprendendo? - What are you learning?
Estou com vontade de fazer um piquenique no parque. - I feel like having a picnic in the park.
O que você está discutindo? - What are you discussing?
Estou com vontade de praticar ioga. - I feel like practicing yoga.
O que você está fazendo? - What are you doing?
Estou com vontade de experimentar uma nova receita de sobremesa. - I feel like trying a new dessert recipe.
O que você está assistindo? - What are you watching?
Estou com vontade de fazer uma trilha na montanha. - I feel like hiking in the mountains.
O que você está preparando? - What are you preparing?
Estou com vontade de aprender a tocar um instrumento. - I feel like learning to play an instrument.
O que você está imaginando? - What are you imagining?
Estou com vontade de fazer um cruzeiro. - I feel like going on a cruise.
O que você está comemorando? - What are you celebrating?
Estou com vontade de fazer voluntariado. - I feel like volunteering.
O que você está planejando? - What are you planning?
Estou com vontade de fazer uma aula de pintura. - I feel like taking a painting class.
O que você está investigando? - What are you investigating?
Estou com vontade de assistir a uma peça de teatro musical. - I feel like watching a musical play.
O que você está aprendendo? - What are you learning?
Estou com vontade de fazer um churrasco com amigos. - I feel like having a barbecue with friends.
O que você está discutindo? - What are you discussing?
Estou com vontade de fazer um curso de fotografia. - I feel like taking a photography course.
O que você está tocando? - What are you playing?
Estou com vontade de fazer uma viagem de acampamento. - I feel like going on a camping trip.
O que você está planejando? - What are you planning?
Estou com vontade de fazer uma aula de culinária. - I feel like taking a cooking class.
O que você está comemorando? - What are you celebrating?
Estou com vontade de fazer um passeio de bicicleta. - I feel like going for a bike ride.
O que você está investigando? - What are you investigating?
Estou com vontade de assistir a um jogo de basquete. - I feel like watching a basketball game.
O que você está aprendendo? - What are you learning?
Estou com vontade de fazer uma viagem de mochila. - I feel like going on a backpacking trip.
O que você está discutindo? - What are you discussing?
Estou com vontade de fazer uma aula de dança. - I feel like taking a dance class.
O que você está tocando? - What are you playing?
Estou com vontade de fazer uma visita a um zoológico. - I feel like visiting a zoo.
O que você está planejando? - What are you planning?
Estou com vontade de fazer uma viagem de trem. - I feel like going on a train trip.
O que você está comemorando? - What are you celebrating?
Estou com vontade de fazer um passeio de barco. - I feel like going on a boat ride.
O que você está investigando? - What are you investigating?
Estou com vontade de assistir a uma partida de tênis. - I feel like watching a tennis match.
O que você está aprendendo? - What are you learning?
Estou com vontade de fazer um passeio de helicóptero. - I feel like going on a helicopter tour.
O que você está discutindo? - What are you discussing?
Estou com vontade de fazer uma aula de ioga. - I feel like taking a yoga class.
O que você está fazendo? - What are you doing?
Estou com vontade de fazer um tour gastronômico. - I feel like going on a food tour.
O que você está assistindo? - What are you watching?
Estou com vontade de fazer uma viagem de carro. - I feel like going on a road trip.
O que você está preparando? - What are you preparing?
Estou com vontade de fazer uma aula de artesanato. - I feel like taking a crafting class.
O que você está imaginando? - What are you imagining?
Estou com vontade de fazer uma viagem de esqui. - I feel like going on a skiing trip.
O que você está comemorando? - What are you celebrating?
Estou com vontade de fazer uma aula de teatro. - I feel like taking an acting class.
O que você está planejando? - What are you planning?
Estou com vontade de fazer um passeio de balão. - I feel like going on a hot air balloon ride.
O que você está investigando? - What are you investigating?
Estou com vontade de assistir a uma corrida de carros. - I feel like watching a car race.
O que você está aprendendo? - What are you learning?
Estou com vontade de fazer uma viagem de veleiro. - I feel like going on a sailing trip.
O que você está discutindo? - What are you discussing?
Estou com vontade de fazer uma aula de mergulho. - I feel like taking a diving class.
O que você está tocando? - What are you playing?
Estou com vontade de fazer uma viagem de trem-bala. - I feel like going on a bullet train trip.
O que você está planejando? - What are you planning?
Estou com vontade de fazer um passeio de cavalo. - I feel like going on a horseback ride.
O que você está comemorando? - What are you celebrating?
Estou com vontade de fazer uma aula de tiro ao arco. - I feel like taking an archery class.
O que você está investigando? - What are you investigating?
Estou com vontade de assistir a um jogo de beisebol. - I feel like watching a baseball game.
O que você está aprendendo? - What are you learning?
Estou com vontade de fazer uma viagem de paraquedas. - I feel like going on a skydiving trip.
O que você está discutindo? - What are you discussing?
Estou com vontade de fazer uma aula de escalada. - I feel like taking a climbing class.
O que você está tocando? - What are you playing?
Estou com vontade de fazer uma viagem de bungee jump. - I feel like going on a bungee jump trip.
O que você está planejando? - What are you planning?
Estou com vontade de fazer um passeio de caiaque. - I feel like going on a kayaking trip.
O que você está comemorando? - What are you celebrating?

 ser - be
 estar - be
 tener - have
 hacer - do, make
 poder - can, be able to
 decir - say
 haber - have [aux
 ir - go
 dar - give
 ver - see
 saber - know
 pasar - walk by, pass
 deber - must, have to
 querer - want, love
 llegar - arrive
 dejar - leave
 llevar - carry
 encontrar - find
 seguir - follow
 poner - put
 quedarse - stay
 parecer - seem
 hablar - speak
 pensar - think
 volver - return
 conocer - know
 salir - go out
 realizar - do, realize
 tomar - take, drink
 tratar - try, deal with
 contar - count, tell
 llamarse - call, name
 venir - come, arrive
 mirar - see, look
 presentar - present, show
 permitir - allow
 esperar - wait
 sentir - feel
 vivir - live
 buscar - look for
 creer - believe
 crear - create
 perder - lose
 existir - exist
 considerar - consider
 abrir - open
 trabajar - work
 recibir - receive
 mantener - maintain
 explicar - explain
 lograr - achieve
 empezar - begin
 recordar - remember
 comenzar - start
 pedir - ask for
 preguntar - ask
 producir - produce
 convertir - convert, change
 entrar - enter
 mostrar - show
 señalar - point
 escribir - write
 utilizar - use
 entender - understand
 terminar - end
 ganar - win, earn
 incluir - include
 morir - die
 asegurar - ensure, secure
 ocurrir - occur
 ofrecer - offer
 jugar - play
 gustar - like
 escuchar - listen to
 sentar - sit
 cambiar - change
 aparecer - appear
 acabar - finish, end
 decidir - decide
 resultar - result, prove
 caer - fall
 desarrollar - develop
 necesitar - need
 sacar - remove
 establecer - establish, set
 conseguir - get
 indicar - indicate
 formar - form
 reconocer - recognize
 dirigir - lead
 servir - serve
 alcanzar - reach
 intentar - try
 cumplir - accomplish
 leer - read
 obtener - get
 ayudar - help
 usar - use
 observar - observe
 responder - answer

Sein - To be
Haben - To have
Werden - To become
Kommen - To come
Ankommen - To arrive
Verlassen - To leave
Fahren - To drive, to ride
Halten - To hold, to keep
Schlafen - To sleep
Erhalten - To receive, to get
Fangen - To catch
Anfangen - To begin
Fallen - To fall
Vergessen - To forget
Essen - To eat
Sterben - To die
Nehmen - To take
Geschehen - To happen
Helfen - To help
Lesen - To read
Sprechen - To speak
Geben - To give
Treffen - To meet
Sehen - To see
Können - Can, to be able to
Müssen - Must
Wollen - To want
Wissen - To know
Tun - To do
Gehen - To go, to walk, to leave
Schreiben - To write
Erkennen - To recognize
Beschreiben - To describe
Schreien - To scream
Trinken - To drink
Denken - To think
Entscheiden - To decide
Verstehen - To understand
Finden - To find
Singen - To sing
Sitzen - To sit
Lügen - To lie
Anbieten - To offer
Bringen - To bring
Brennen - To burn
Schneiden - To cut
Beginnen - To start, to begin
Gewinnen - To win
Bleiben - To stay, to last
Rennen - To run
Verlieren - To lose
Rufen - To call
Heißen - To mean
Lernen - To learn
Machen - To do, to make
Besuchen - To visit
Reisen - To travel
Brauchen - To need
Legen - To lay, to put
Zeigen - To show
Hören - To hear
Schauen - To look
Sagen - To say
Erklären - To explain
Erzählen - To tell
Fragen - To ask
Reden - To talk
Wiederholen - To repeat
Lehren - To teach
Studieren - To study
Ausruhen - To rest
Erlauben - To allow
Glauben - To believe
Hoffen - To hope
Tanzen - To dance
Bewegen - To move
Kämpfen - To fight
Auswählen - To choose
Hassen - To hate
Lieben - To love
Bevorzugen - To prefer
Lachen - To laugh
Weinen - To cry
Versuchen - To try
üben - To practice
Berühren - To touch
Drücken - To push, to hug
Leben - To live
Fühlen - To feel
Spielen - To play
Kaufen - To buy
Verkaufen - To sell
Kosten - To cost, to taste
Benutzen - To use
Handeln - To act, to trade
Verbessern - To improve
Lächeln - To smile
Arbeiten - To work
Antworten - To answer
Schalten - To switch


être	to be; being
avoir	to have
aller	to go
faire	to do, make
dire	to say, tell
pouvoir	can, to be able to
vouloir	to want
savoir	to know
voir	to see
devoir	to have to, must; duty, test
venir	to come, occur
suivre	to follow
parler	to speak, talk
prendre	to take, get
croire	to believe, think
aimer	to love, like, be fond of
falloir	it is necessary, must, have to
passer	to pass, go by, cross
penser	to think
attendre	to wait for, expect
trouver	to find
laisser	to leave
arriver	to arrive
donner	to give, give away
regarder	to look at, watch
appeler	to call, ring
partir	to go, leave, go away
mettre	to put, put on, wear
rester	to stay, remain
arrêter	to stop
connaître	to know, experience
demander	to ask, ask for, be looking for
comprendre	to understand
sortir	to go out; take out
entendre	to hear, listen to, understand
chercher	to look for, seek
aider	to help, aid
essayer	to try, try out, test
revenir	to come back, return
jouer	to play
finir	to finish, end
perdre	to lose, miss
sentir	to smell, sniff, feel
rentrer	to bring in, take in; to get in, go in, come home
vivre	to live, be alive, go through
rendre	to return, give back, repay
tenir	to hold, run, keep, last
oublier	to forget, miss
travailler	to work, work on, practice
manger	to eat
entrer	to go in, enter, come in
devenir	to become
commencer	to start, begin
payer	to pay
tirer	to pull, draw
ouvrir	to open
changer	to change, exchange
excuser	to forgive, pardon, excuse
dormir	to sleep; to lie idle
occuper	to occupy, live in, take up
marcher	to walk, march, go
envoyer	to send, throw, dispatch, refer
apprendre	to learn, to hear (about)
boire	to drink (consume alcohol), to soak up
garder	to keep, to look after, to guard
montrer	to show, point out
asseoir	to sit down, sit up
porter	to carry, wear
prier	to pray
servir	to serve
écrire	to write
retrouver	to find; to meet
gagner	to win, earn
acheter	to buy
rappeler	to remind, remember, call back, be reminiscent of
lire	to read
monter	to go up, rise, come up
quitter	to leave, depart
emmener	to take (somebody), take along
toucher	to touch
continuer	to continue, go on
Raconter	to tell
répondre	to answer, reply
sauver	to save
rencontrer	to meet, encounter
fermer	to close, shut
valoir	to hold, apply; to be worth
compter	to count
bouger	to move
apporter	to bring, supply
décider	to decide
vendre	to sell
expliquer	to explain, account for
agir	to act, behave; work, take effect
adorer	to adore, love
recevoir	to receive, to get
utiliser	to use
coucher	to put to bed, lay down, to sleep
préférer	to prefer
offrir	to offer, give
préparer	to prepare, make, get ready
choisir	to choose
conduire	to drive, lead
chanter	to sing
présenter	to introduce, present
accepter	to accept
refuser	to refuse, turn down
terminer	to end, finish
amuser	to amuse, entertain
intéresser	to interest
Rire	to laugh, have fun, joke
pardonner	to forgive, pardon, excuse
embrasser	to kiss; to embrace, encompass
danser	to dance
détester	to hate, detest
maintenir	to keep, maintain
supposer	to suppose, assume
épouser	to marry, to espouse
approcher	to approach
craindre	to fear, to be afraid of
crier	to shout
inviter	to invite
arranger	to arrange, to organize
remercier	to thank
répéter	to repeat; to go over, rehearse
signer	to sign
accompagner	to go with, accompany
oser	to dare
permettre	Allow
annuler	Cancel
laver	Clean
se plaindre	Complain
faire du mal	Hurt
avoir besoin	to have
épeler	to spell
traduire	Translate
éteindre	turn off
allumer	turn on
se réveiller	wake up
ajouter	to add
goûter	to taste
coûter	to cost
cuire	to cook
décrire	to describe
effacer	to erase
enseigner	to teach
nettoyer	to clean
noter	to write down
reconnaître	to recognize
remplacer	to replace
visiter	to visit
souhaiter	to wish
tomber	to fall
acclamer	to cheer, acclaim
accorder	to admit
accourir	to hurry
accrocher	to hang (up)
accueillir	to welcome
acquérir	to acquire
adjoindre	to appoint
admirer	to admire
annoncer	to announce
arracher	to pull up/out
augmenter	to increase
avoir raison	to be right
blaguer	to joke
causer	to chat, cause
cheminer	to walk on
confondre	to confuse
conseiller	to recommend
dépenser	to spend
emprunter	to borrow
endormir	to fall asleep
éviter	to avoid
féliciter	to congratulate
geindre	to groan
informer	to inform
nommer	to name
louer	to rent
ressentir	to feel
secouer	to shake
soutenir	to support
jurer	to swear, vow
méprendre	to mistake
mélanger	to mix
apprendre par coeur	to memorize
reconduire	to renew
rejeter	to reject
gérer	to manage
refléter	to reflect
presser	to squeeze
répandre	to spread
frapper	to knock
remettre	to put back (on)
revêtir	to put on
enregistrer	to record
pêcher	to fish
rougir	to redden
tousser	to cough
pleurer	to cry

Ser - To be
Ter - To have
Vir - To come
Estar - To be
Ir - To go
Dar - To give
Haver - To have
Fazer - To do, to make
Satisfazer - To satisfy
Ler - To read
Dizer - To say, to tell
Trazer - To bring
Ver - To see
Prever - To predict
Conter - To contain, to have
Manter - To keep
Obter - To get
Querer - To want
Poder - Can, to be able to
Seguir - To follow
Conseguir - To get
Perseguir - To pursue, to chase
Saber - To know
Pôr - To put
Expor - To expose, to exhibit
Propor - To propose
Compor - To fix, to write, to compose
Conhecer - To know
Parecer - To look, to seem
Acontecer - To happen
Ouvir - To hear, to listen
Pedir - To ask
Despedir - To fire, to say goodbye
Medir - To measure
Impedir - To prevent, to stop
Sair - To leave, to go out
Cair - To fall
Distrair - To distract
Perder - To lose
Valer - To cost, to count
Escrever - To write
Caber - To fit
Agredir - To attack
Dormir - To sleep
Cobrir - To cover
Descobrir - To discover
Rir - To laugh
Passear - To walk
Subir - To go up, to climb
Fugir - To escape
Concluir - To conclude
Construir - To build
Destruir - To destroy
Falar - To speak
Amar - To love
Deixar - To leave, to let
Encontrar - To find
Levar - To take, to bring
Pensar - To think
Olhar - To look
Tornar - To become
Voltar - To return
Achar - To think, to find
Entrar - To enter
Chamar - To call
Tomar - To have, to take
Acabar - To end, to finish
Andar - To walk
Trabalhar - To work
Contar - To tell, to count
Esperar - To wait
Gostar - To like
Usar - To use
Lembrar - To remember
Tentar - To try
Ganhar - To win, to earn
Precisar - To need
Perguntar - To ask
Tirar - To take, to remove
Acreditar - To believe
Levantar - To raise, to lift
Enviar - To send
Parar - To stop
Fechar - To close
Mudar - To change
Iniciar - To start, to begin
Ajudar - To help
Comer - To eat
Dever - Must
Viver - To live
Receber - To receive
Morrer - To die
Correr - To run
Responder - To answer
Bater - To hit, to knock
Partir - To leave, to break
Existir - To exist
Permitir - To allow, to let
Dividir - To share, to divide
Assistir - To watch

A	To
De	Of/From
En	In/On/At
Sobre	About/On
Con	With
Para	For
Por	By/For
Sin	Without
Antes de	Before
Después de	After
Durante	During
Contra	Against
Entre	Between/Among
Encima de	Above/On top of
Debajo de	Below/Underneath
Sobre	Above/On
Bajo	Below/Under
A través de	Through
Alrededor de	Around
A la derecha de	To the right of
A la izquierda de	To the left of
Delante de	In front of
Detrás de	Behind
Junto a	Next to/Beside
Dentro de	Inside
Fuera de	Outside


    Essen - food
    Trinken - drink
    Frühstück - breakfast
    Mittagessen - lunch
    Abendessen - dinner
    Nachtisch - dessert
    Kaffee - coffee
    Tee - tea
    Wasser - water
    Bier - beer
    Wein - wine
    Saft - juice
    Milch - milk
    Ei - egg
    Fleisch - meat
    Fisch - fish
    Gemüse - vegetables
    Obst - fruit
    Brot - bread
    Käse - cheese

To	Zu
From	Von/Aus
In	In/Im/Auf
On	Auf
At	An
With	Mit
For	Für
Of	Von
About	Über
By	Durch
Without	Ohne
Before	Vor
After	Nach
During	Während
Against	Gegen
Among	Unter/Zwischen
Between	Zwischen
Above	Über
Below	Unter
Over	Über
Under	Unter
Through	Durch
Around	Umher
Across	Über
To the right of	Rechts von
To the left of	Links von
In front of	Vor
Behind	Hinter
Beside	Neben
Inside	Innen
Outside	Außen
Above	Über
Below	Unter


sein	ser/estar	to be
haben	tener	to have
werden	convertirse en/llegar a ser	to become/to get/to turn into
können	poder	to be able to/can
müssen	tener que/deber	must/have to
sagen	decir	to say
machen	hacer	to make/do
geben	dar	to give
kommen	venir	to come
sollen	deber	should/ought to
wollen	querer	to want
gehen	ir	to go
sehen	ver	to see
lassen	dejar/hacer que	to let/allow/make
stehen	estar de pie/permanecer	to stand
finden	encontrar	to find
wissen	saber	to know
denken	pensar	to think
tun	hacer	to do
können	saber hacer/poder	to be able to/can
möchten	gustaría	would like
nehmen	tomar/coger	to take
dürfen	poder/tener permiso	to be allowed to/may
glauben	creer	to believe
heißen	llamarse	to be called/to be named
nennen	llamar	to call/to name
kommen	llegar	to arrive
zeigen	mostrar	to show
leben	vivir	to live
arbeiten	trabajar	to work
führen	dirigir/llevar	to lead/to carry
sprechen	hablar	to speak
halten	sostener/parar	to hold/to stop/to keep
liegen	estar acostado/estar ubicado	to lie/to be located
verstehen	entender/comprender	to understand
bringen	llevar/traducir	to bring/to take/to carry
lesen	leer	to read
machen	crear/hacer	to make/to do
scheinen	parecer	to seem/to shine
bleiben	quedarse/permanecer	to stay/to remain
setzen	poner/colocar	to set/to put/to place
bekommen	obtener/recibir	to get/to receive
beginnen	empezar	to begin/to start
tun	actuar/hacer algo	to do/to act
erzählen	contar	to tell/to narrate
gehören	pertenecer	to belong
arbeiten	trabajar	to work
bedeuten	significar	to mean
treffen	encontrarse/reunirse	to meet/to hit/to encounter
suchen	buscar	to search/to look for
finden	encontrar	to find


sein - Ich bin müde. (I am tired.)
haben - Ich habe einen Hund. (I have a dog.)
werden - Ich werde bald heiraten. (I will soon get married.)
können - Ich kann Deutsch sprechen. (I can speak German.)
müssen - Ich muss arbeiten. (I have to work.)
sagen - Ich sage die Wahrheit. (I am telling the truth.)
machen - Ich mache meine Hausaufgaben. (I am doing my homework.)
geben - Ich gebe dir ein Geschenk. (I am giving you a gift.)
kommen - Ich komme aus Deutschland. (I am from Germany.)
sehen - Ich sehe ein schönes Bild. (I see a beautiful picture.)
gehen - Ich gehe nach Hause. (I am going home.)
stehen - Ich stehe auf. (I am getting up.)
wissen - Ich weiß nicht. (I don't know.)
wollen - Ich will ein Eis. (I want ice cream.)
lassen - Ich lasse dich in Ruhe. (I will leave you alone.)
müssen - Ich muss zum Arzt gehen. (I have to go to the doctor.)
sprechen - Ich spreche Deutsch. (I speak German.)
finden - Ich finde das Buch interessant. (I find the book interesting.)
glauben - Ich glaube an Gott. (I believe in God.)
nehmen - Ich nehme eine Tasse Kaffee. (I am taking a cup of coffee.)
tun - Ich tue, was ich kann. (I do what I can.)
heißen - Wie heißt du? (What is your name?)
sehen - Ich sehe den Film im Kino. (I am watching the movie in the cinema.)
bleiben - Ich bleibe zu Hause. (I am staying at home.)
geben - Ich gebe dir einen Kuss. (I am giving you a kiss.)
fragen - Kann ich dich etwas fragen? (Can I ask you something?)
arbeiten - Ich arbeite in einer Firma. (I work in a company.)
laufen - Ich laufe jeden Tag. (I run every day.)
halten - Ich halte dich fest. (I am holding you tight.)
nennen - Wie nennt man das auf Deutsch? (What is that called in German?)
bringen - Kannst du mir das bringen? (Can you bring that to me?)
verstehen - Ich verstehe nicht. (I don't understand.)
setzen - Ich setze mich auf den Stuhl. (I am sitting on the chair.)
bekommen - Ich bekomme eine neue Wohnung. (I am getting a new apartment.)
spielen - Ich spiele Gitarre. (I play guitar.)
suchen - Ich suche meine Brille. (I am looking for my glasses.)
anfangen - Ich fange morgen an zu arbeiten. (I am starting to work tomorrow.)
denken - Ich denke an dich. (I am thinking of you.)
bringen - Ich bringe die Kinder zur Schule. (I am taking the kids to school.)
mögen - Ich mag Schokolade. (I like chocolate.)
lesen - Ich lese ein Buch. (I am reading a book.)

sein (to be) - Ich bin ein Lehrer. (I am a teacher.) / Sie ist glücklich. (She is happy.) / Wir sind zu Hause. (We are at home.)
haben (to have) - Ich habe ein Auto. (I have a car.) / Du hast eine Idee. (You have an idea.) / Sie hat viel Geld. (She has a lot of money.)
werden (to become) - Ich werde Lehrer. (I will become a teacher.) / Du wirst großartig. (You will become great.) / Sie wird reich. (She will become rich.)
können (to be able to) - Ich kann schwimmen. (I can swim.) / Du kannst Deutsch sprechen. (You can speak German.) / Sie kann Klavier spielen. (She can play piano.)
sagen (to say) - Ich sage ja. (I say yes.) / Du sagst nein. (You say no.) / Sie sagt Hallo. (She says hello.)
machen (to make/do) - Ich mache meine Hausaufgaben. (I do my homework.) / Du machst ein Foto. (You take a photo.) / Sie macht Sport. (She does sports.)
geben (to give) - Ich gebe dir ein Geschenk. (I give you a gift.) / Du gibst ihm einen Rat. (You give him advice.) / Sie gibt uns ihr Geld. (She gives us her money.)
kommen (to come) - Ich komme aus Deutschland. (I come from Germany.) / Du kommst zu spät. (You come too late.) / Sie kommt mit mir. (She comes with me.)
müssen (to have to) - Ich muss lernen. (I have to study.) / Du musst arbeiten. (You have to work.) / Sie muss einkaufen. (She has to go shopping.)
möchten (to would like to) - Ich möchte Tee trinken. (I would like to have some tea.) / Du möchtest Pizza bestellen. (You would like to order pizza.) / Sie möchte nach Hause gehen. (She would like to go home.)
gehen (to go) - Ich gehe in die Schule. (I go to school.) / Du gehst ins Kino. (You go to the cinema.) / Sie geht spazieren. (She goes for a walk.)
stehen (to stand) - Ich stehe hier. (I am standing here.) / Du stehst vor dem Haus. (You are standing in front of the house.) / Sie steht auf dem Platz. (She is standing on the square.)
wissen (to know) - Ich weiß das nicht. (I don't know that.) / Du weißt es besser. (You know it better.) / Sie weiß alles. (She knows everything.)
sehen (to see) - Ich sehe einen Vogel. (I see a bird.) / Du siehst einen Film. (You watch a movie.) / Sie sieht ihre Freunde. (She sees her friends.)
lassen (to let/allow) - Ich lasse dich in Ruhe. (I let you be.) / Du lässt das Buch fallen. (You drop the book.) / Sie lässt ihn sprechen. (She allows him to speak.)

#
sein - ser/estar (to be)
haben - tener (to have)
werden - convertirse en/llegar a ser (to become)
können - poder (to be able to)
machen - hacer (to do/make)
gehen - ir (to go)
wollen - querer (to want)
kommen - venir (to come)
sagen - decir (to say/tell)
müssen - tener que/deber (to must/have to)
stehen - estar de pie (to stand)
sehen - ver (to see)
wissen - saber (to know)
lassen - dejar/hacer que (to let/allow)
geben - dar (to give)
finden - encontrar (to find)
nehmen - tomar (to take)
zeigen - mostrar (to show)
spielen - jugar (to play)
arbeiten - trabajar (to work)
führen - conducir/llevar (to lead)
denken - pensar (to think)
bringen - traer (to bring)
heißen - llamarse (to be called)
leben - vivir (to live)
liegen - estar acostado/estar situado (to lie/be located)
erhalten - recibir/obtener (to receive/get)
setzen - poner (to set/put)
bleiben - quedarse (to stay)
zeigen - mostrar (to show)
meinen - pensar/creer (to mean/think)
fragen - preguntar (to ask)
wissen - saber (to know)
nehmen - tomar (to take)
bekommen - recibir/obtener (to get/receive)
suchen - buscar (to search)
kommen - venir (to come)
halten - sostener/mantener (to hold/keep)
verstehen - entender (to understand)
stellen - colocar (to put/place)
benötigen - necesitar (to need)
finden - encontrar (to find)
fühlen - sentir (to feel)
bleiben - quedarse (to stay)
beginnen - comenzar/empezar (to begin/start)
glauben - creer (to believe)
hoffen - esperar (to hope)
schreiben - escribir (to write)
sprechen - hablar (to speak)
laufen - correr (to run/walk)
bringen - llevar (to bring)
bedeuten - significar (to mean)
lernten - aprender (to learn)
hören - oír (to hear)
fallen - caer (to fall)
setzen - sentar/poner (to set/put)
erhalten - recibir/obtener (to receive/get)
bleiben - quedarse (to stay)
zeigen - mostrar (to show)
meinen - pensar/creer (to mean/think)
fragen - preguntar (to ask)
wissen - saber (to know)
nehmen - tomar (to take)
bekommen - recibir/obtener (to get/receive)
suchen - buscar (to search)
kommen - venir (to come)
halten - sostener/mantener (to hold/keep)
verstehen - entender (to understand)
stellen - colocar (to put/place)
benötigen - necesitar (to need)
finden - encontrar (to find)
fühlen - sentir (to feel)
bleiben - quedarse (to stay)
beginnen - comenzar/empezar (to begin/start)
glauben - creer (to believe)
hoffen - esperar (to hope)
schreiben - escribir (to write)
sprechen - hablar (to speak)
laufen - correr (to run/walk)
bringen - llevar (to bring)
bedeuten - significar (to mean)
lernen - aprender (to learn)
hören - oír (to hear)
fallen - caer (to fall)
suchen - buscar (to search)
treffen - encontrarse (to meet)
kaufen - comprar (to buy)
arbeiten - trabajar (to work)
verstehen - entender (to understand)
beginnen - comenzar/empezar (to begin/start)
erzählen - contar (to tell/narrate)
gewinnen - ganar (to win)
schaffen - lograr (to achieve)
versuchen - intentar (to try)
brauchen - necesitar (to need)
erwarten - esperar (to expect)
glauben - creer (to believe)
erklären - explicar (to explain)
bedeuten - significar (to mean)
schließen - cerrar (to close)

Zeit - tiempo (time)
Jahr - año (year)
Tag - día (day)
Leben - vida (life)
Mensch - persona (human being)
Welt - mundo (world)
Frau - mujer (woman)
Mann - hombre (man)
Kind - niño/niña (child)
Familie - familia (family)
Haus - casa (house)
Stadt - ciudad (city)
Land - país (country)
Freund - amigo (friend)
Name - nombre (name)
Schule - escuela (school)
Zeitung - periódico (newspaper)
Arbeit - trabajo (work)
Problem - problema (problem)
Frage - pregunta (question)
Antwort - respuesta (answer)
Film - película (film/movie)
Musik - música (music)
Bild - imagen (picture)
Buch - libro (book)
Idee - idea (idea)
Geld - dinero (money)
Augenblick - momento (moment)
Geschichte - historia (history/story)
Stadt - ciudad (city)
Jahrhundert - siglo (century)
Krieg - guerra (war)
Liebe - amor (love)
Arbeit - trabajo (job)
Grund - motivo/razón (reason)
Problem - problema (problem)
Wort - palabra (word)
Frage - pregunta (question)
Antwort - respuesta (answer)
Land - país (country)
Film - película (film/movie)
Mannschaft - equipo (team)
Firma - empresa (company)
Plan - plan (plan)
Buch - libro (book)
Moment - momento (moment)
Woche - semana (week)
Hand - mano (hand)
Stunde - hora (hour)
Platz - lugar (place)
Fall - caso (case)
Haus - casa (house)
Seite - página (page)
Eltern - padres (parents)
Problem - problema (problem)
Abend - noche/tarde (evening)
Morgen - mañana (morning)
Jahrzehnt - década (decade)
Monat - mes (month)
Minute - minuto (minute)
Beziehung - relación (relationship)
Sache - cosa (thing)
Antwort - respuesta (response)
Art - tipo/clase (type/kind)
Freundin - amiga (friend)
Bruder - hermano (brother)
Schwester - hermana (sister)
Mut - valor (courage)
Essen - comida (food)
Ende - final (end)
Teil - parte (part)
Wasser - agua (water)
Weg - camino (way)
Arbeit - trabajo (labor)
Auge - ojo (eye)
Geist - espíritu (spirit)
Ort - lugar (place)
Schritt - paso (step)
Stück - pieza (piece)
Baum - árbol (tree)
Zimmer - habitación (room)
Gesicht - cara (face)
Jahrhundert - siglo (century)
Problem - problema (issue)
Hand - mano (hand)
Zimmer - habitación (room)
Gruppe - grupo (group)
Ergebnis - resultado (result)
Land - país (land)
Freunde - amigos (friends)
Prozess - proceso (process)
Mensch - ser humano (human being)
Schule - escuela (school)
Buch - libro (book)
Gespräch - conversación (conversation)
Recht - derecho (right)
Person - persona (person)
Problem - problema (problem)
Mann - hombre (man)
Ziel - objetivo (goal)

gut - bueno (good)
groß - grande (big/large)
neu - nuevo (new)
alt - viejo (old)
klein - pequeño (small)
schön - hermoso/bonito (beautiful/nice)
wichtig - importante (important)
jung - joven (young)
lang - largo (long)
richtig - correcto (right/correct)
schwarz - negro (black)
weiß - blanco (white)
viel - mucho (much/many)
klar - claro (clear)
einfach - fácil (simple/easy)
klein - pequeño (little)
groß - grande (great)
frei - libre (free)
kurz - corto (short)
stark - fuerte (strong)
schnell - rápido (fast/quick)
richtig - correcto (true/real)
leicht - ligero/fácil (light/easy)
schwer - pesado (heavy/difficult)
voll - lleno (full)
möglich - posible (possible)
schön - hermoso (beautiful)
ganz - completo/todo (whole/all)
sicher - seguro (safe/secure)
offen - abierto (open)
langsam - lento (slow)
falsch - incorrecto (wrong/false)
besonders - especial (special/particular)
bunt - colorido (colorful)
klar - claro (obvious)
bekannt - conocido (known/famous)
nett - agradable (nice)
einfach - simple (simple)
tot - muerto (dead)
hart - duro (hard/tough)
ruhig - tranquilo (calm/quiet)
echt - auténtico (genuine/real)
wichtig - importante (significant)
dumm - tonto (stupid)
schwer - difícil (difficult)
lustig - divertido (funny)
müde - cansado (tired)
alt - antiguo (ancient)
ernst - serio (serious)
möglich - posible (feasible)
jung - joven (youthful)
heiß - caliente (hot)
früh - temprano (early)
reich - rico (rich)
dunkel - oscuro (dark)
kalt - frío (cold)
klug - inteligente (smart/wise)
sauber - limpio (clean)
modern - moderno (modern)
wichtig - relevante (relevant)
großartig - maravilloso (great)
scharf - afilado (sharp)
schön - hermoso (gorgeous)
arm - pobre (poor)
toll - genial (fantastic)
einfach - fácil (easy)
schwierig - difícil (difficult)
wahr - verdadero (true)
stolz - orgulloso (proud)
langweilig - aburrido (boring)
leer - vacío (empty)
frisch - fresco (fresh)
spannend - emocionante (exciting)
laut - ruidoso (loud)
süß - dulce (sweet)
wichtig - esencial (essential)
genug - suficiente (enough)
offen - abierto (open)
angenehm - agradable (pleasant)
bitter - amargo (bitter)
freundlich - amable (friendly)
bekannt - conocido (familiar)
tief - profundo (deep)
dünn - delgado (thin)
vorsichtig - cuidadoso (careful)
glücklich - feliz (happy)
gleich - igual (equal)
schön - hermoso (lovely)
bequem - cómodo (comfortable)
grün - verde (green)
lang - largo (lengthy)
einzigartig - único (unique)
lecker - delicioso (tasty)
krank - enfermo (sick)
dreckig - sucio (dirty)
mühsam - laborioso (tedious)
normal - normal (normal)
spät - tarde (late)
wahr - cierto (real/true)
schwach - débil (weak)

der - el (the)
die - la (the)
und - y (and)
in - en/dentro de (in/inside)
zu - a/para (to/for)
den - el (the)
das - el (the)
nicht - no (not)
von - de (of/from)
sie - ella/ellas (she/they)
ist - es (is)
sich - se (oneself)
mit - con (with)
das - que (that)
auf - en/sobre (on/onto)
für - para (for)
er - él (he)
als - como (as)
auch - también (also)
es - él/ello (it)
an - a (at/on)
nach - después de (after)
man - uno (one)
so - así (so)
noch - aún (still/yet)
aus - de (out of/from)
haben - tener (to have)
wir - nosotros (we)
was - qué (what)
wird - se convertirá en (will become)
sein - ser/estar (to be)
über - sobre (about/over)
um - alrededor de (around)
wenn - si (if)
mich - me (me)
ihre - su (their)
dich - te (you)
einem - uno (one)
habe - tengo (I have)
seine - su (his)
hat - tiene (he/she has)
auf - en/sobre (on/onto)
so - así (so)
eine - una (a/an)
ihm - a él (to him)
einen - un (a/an)
aber - pero (but)
seine - su (his)
oder - o (or)
nach - después de (after)
haben - tener (to have)
Ihnen - a ustedes (to you)
haben - tener (to have)
noch - aún (still/yet)
doch - sin embargo (however)
werde - me convertiré en (I will become)
sein - ser/estar (to be)
Ihnen - a ustedes (to you)
uns - nosotros (us)
sich - se (themselves)
haben - tener (to have)
ihre - su (their)
aus - de (from)
durch - a través de (through)
machen - hacer (to do/make)
machen - hacer (to do/make)
gegen - contra (against)
beim - en (at)
noch - aún (still/yet)
mal - vez (time)
jemand - alguien (someone)
dann - entonces (then)
etwas - algo (something)
etwas - algo (something)
müssen - tener que/deber (must/have to)
haben - tener (to have)
Ihnen - a ustedes (to you)
gehen - ir (to go)
ganz - completamente (completely)
sehr - muy (very)
also - así que (so)
doch - sin embargo (however)
durch - a través de (through)
ihnen - a ellos/ellas (to them)
doch - sin embargo (however)
machen - hacer (to do/make)
lassen - dejar (to let/allow)
viel - mucho (much/many)
alles - todo (everything)
weil - porque (because)
ihm - a él (to him)
ihm - a él (to him)
machen - hacer (to do/make)
wenn - si (if)
ihnen - a ellos/ellas (to them)
ihm - a él (to him)
alles - todo (all/everything)
mich - me (me)
dir - a ti (to you)
ihn - a él (to him)


être - ser/estar - sein - to be
avoir - tener/haber - haben - to have
faire - hacer - machen - to do/make
dire - decir - sagen - to say/tell
aller - ir - gehen - to go
pouvoir - poder - können - to be able to
vouloir - querer - wollen - to want
devoir - deber - müssen - to have to
prendre - tomar - nehmen - to take
savoir - saber - wissen - to know (information)
venir - venir - kommen - to come
voir - ver - sehen - to see
mettre - poner - setzen/stellen - to put
falloir - ser necesario - brauchen - to need
croire - creer - glauben - to believe
partir - partir - abfahren - to leave
trouver - encontrar - finden - to find
donner - dar - geben - to give
aimer - amar - lieben - to love
parler - hablar - sprechen - to speak
savoir - saber - wissen - to know (how to)
rester - quedarse - bleiben - to stay
tenir - mantener - halten - to hold
suivre - seguir - folgen - to follow
travailler - trabajar - arbeiten - to work
croire - creer - glauben - to believe
demander - preguntar - fragen - to ask
arriver - llegar - ankommen - to arrive
regarder - mirar - schauen - to look/watch
comprendre - comprender - verstehen - to understand
sortir - salir - ausgehen - to go out
vivre - vivir - leben - to live
entrer - entrar - eintreten - to enter
attendre - esperar - warten - to wait
entendre - oír - hören - to hear
aider - ayudar - helfen - to help
penser - pensar - denken - to think
prendre - tomar - nehmen - to take
reprendre - retomar - wieder nehmen - to take back
finir - terminar - beenden - to finish
rencontrer - encontrar - treffen - to meet
appeler - llamar - anrufen - to call
croire - creer - glauben - to believe
revoir - volver a ver - wieder sehen - to see again
jouer - jugar - spielen - to play
arrêter - parar - aufhören - to stop
connaître - conocer - kennen - to know (someone)
montrer - mostrar - zeigen - to show
rester - quedarse - bleiben - to stay
écrire - escribir - schreiben - to write
arriver - pasar - passieren - to happen
tomber - caer - fallen - to fall
essayer - intentar - versuchen - to try
reprendre - retomar - wieder aufnehmen - to resume
offrir - ofrecer - anbieten - to offer
perdre - perder - verlieren - to lose
aider - ayudar - helfen - to help
porter - llevar - tragen - to carry/wear
entendre - oír - hören - to hear
penser - pensar - denken - to think
choisir - elegir - wählen - to choose
apprendre - aprender - lernen - to learn
rappeler - recordar - erinnern - to remember
montrer - mostrar - zeigen - to show
gagner - ganar - gewinnen - to win
proposer - proponer - vorschlagen - to propose
ouvrir - abrir - öffnen - to open
attendre - esperar - warten - to wait
finir - terminar - beenden - to finish
commencer - empezar - anfangen - to start/begin
marcher - caminar - gehen - to walk
entendre - oír - hören - to hear
reprendre - retomar - wieder aufnehmen - to take back
expliquer - explicar - erklären - to explain
trouver - encontrar - finden - to find
monter - subir - hinaufgehen - to go up
offrir - ofrecer - anbieten - to offer
devenir - convertirse en - werden - to become
attendre - esperar - warten - to wait
servir - servir - dienen - to serve
envoyer - enviar - senden - to send
devenir - convertirse en - werden - to become
recevoir - recibir - erhalten - to receive
tenir - mantener - halten - to hold
parler - hablar - sprechen - to speak
commencer - empezar - anfangen - to start/begin
arrêter - parar - aufhören - to stop
penser - pensar - denken - to think
aimer - amar - lieben - to love
utiliser - usar - benutzen - to use
choisir - elegir - wählen - to choose
rentrer - volver a casa - nach Hause gehen - to go home
offrir - ofrecer - anbieten - to offer
préparer - preparar - vorbereiten - to prepare
voir - ver - sehen - to see
quitter - abandonar - verlassen - to leave
devoir - deber - müssen - to have to
montrer - mostrar - zeigen - to show
attendre - esperar - warten - to wait
entendre - oír - hören - to hear

personne - persona - Person - person
temps - tiempo - Zeit - time
vie - vida - Leben - life
jour - día - Tag - day
chose - cosa - Ding - thing
année - año - Jahr - year
homme - hombre - Mann - man
moment - momento - Moment - moment
main - mano - Hand - hand
partie - parte - Teil - part
monde - mundo - Welt - world
œil - ojo - Auge - eye
enfant - niño - Kind - child
famille - familia - Familie - family
maison - casa - Haus - house
travail - trabajo - Arbeit - work
femme - mujer - Frau - woman
place - lugar - Platz - place
partie - parte - Teil - part
raison - razón - Grund - reason
groupe - grupo - Gruppe - group
question - pregunta - Frage - question
main - mano - Hand - hand
cas - caso - Fall - case
gouvernement - gobierno - Regierung - government
pays - país - Land - country
problème - problema - Problem - problem
moment - momento - Moment - moment
soirée - fiesta - Abend - evening
semaine - semana - Woche - week
fin - fin - Ende - end
partie - parte - Teil - part
politique - política - Politik - politics
guerre - guerra - Krieg - war
ami - amigo - Freund - friend
travail - trabajo - Arbeit - job
livre - libro - Buch - book
école - escuela - Schule - school
maison - casa - Haus - home
mois - mes - Monat - month
gouvernement - gobierno - Regierung - government
soirée - fiesta - Abend - evening
année - año - Jahr - year
problème - problema - Problem - problem
nuit - noche - Nacht - night
équipe - equipo - Team - team
partie - parte - Teil - part
politique - política - Politik - policy
monde - mundo - Welt - world
corps - cuerpo - Körper - body
homme - hombre - Mann - man
lieu - lugar - Ort - place
travail - trabajo - Arbeit - work
matin - mañana - Morgen - morning
vie - vida - Leben - life
famille - familia - Familie - family
enfant - niño - Kind - child
problème - problema - Problem - problem
gouvernement - gobierno - Regierung - government
semaine - semana - Woche - week
société - sociedad - Gesellschaft - society
maison - casa - Haus - house
ville - ciudad - Stadt - city
ami - amigo - Freund - friend
école - escuela - Schule - school
travail - trabajo - Arbeit - job
livre - libro - Buch - book
nuit - noche - Nacht - night
argent - dinero - Geld - money
mois - mes - Monat - month
vie - vida - Leben - life
année - año - Jahr - year
matin - mañana - Morgen - morning
place - lugar - Platz - place
guerre - guerra - Krieg - war
partie - parte - Teil - part
homme - hombre - Mann - man
famille - familia - Familie - family
pays - país - Land - country
société - sociedad - Gesellschaft - society
enfant - niño - Kind - child
école - escuela - Schule - school
travail - trabajo - Arbeit - work
nuit - noche - Nacht - night
argent - dinero - Geld - money
mois - mes - Monat - month
année - año - Jahr - year
vie - vida - Leben - life
matin - mañana - Morgen - morning
guerre - guerra - Krieg - war
homme - hombre - Mann - man
famille - familia - Familie - family
pays - país - Land - country
société - sociedad - Gesellschaft - society
argent - dinero - Geld - money
équipe - equipo - Team - team
jour - día - Tag - day
travail - trabajo - Arbeit - work
guerre - guerra - Krieg - war
maison - casa - Haus - house

bon(ne) - bueno(a) - gut - good
grand(e) - grande - groß - big/tall
petit(e) - pequeño(a) - klein - small
nouveau (nouvelle) - nuevo(a) - neu - new
autre - otro(a) - anderer - other
premier (première) - primero(a) - erster - first
vieux (vieille) - viejo(a) - alt - old
meilleur(e) - mejor - besser - better
jeune - joven - jung - young
mauvais(e) - malo(a) - schlecht - bad
premier (première) - primero(a) - erster - first
seul(e) - solo(a) - allein - alone/only
vrai(e) - verdadero(a) - wahr - true
long(ue) - largo(a) - lang - long
petit(e) - pequeño(a) - klein - small
grand(e) - grande - groß - large
nouveau (nouvelle) - nuevo(a) - neu - new
autre - otro(a) - anderer - other
meilleur(e) - mejor - besser - best
beau (belle) - hermoso(a) - schön - beautiful/handsome
jeune - joven - jung - young
vieux (vieille) - viejo(a) - alt - old
mauvais(e) - malo(a) - schlecht - bad
premier (première) - primero(a) - erster - first
seul(e) - solo(a) - allein - alone/only
vrai(e) - verdadero(a) - wahr - true
long(ue) - largo(a) - lang - long
court(e) - corto(a) - kurz - short
fort(e) - fuerte - stark - strong
faible - débil - schwach - weak
cher(chère) - caro(a) - teuer - expensive
facile - fácil - einfach - easy
difficile - difícil - schwierig - difficult
prochain(e) - próximo(a) - nächster - next
possible - posible - möglich - possible
sûr(e) - seguro(a) - sicher - safe/sure
libre - libre - frei - free
joli(e) - bonito(a) - hübsch - pretty
fou(folle) - loco(a) - verrückt - crazy
doux (douce) - dulce - süß - sweet/soft
léger (légère) - ligero(a) - leicht - light
sombre - oscuro(a) - dunkel - dark
clair(e) - claro(a) - klar - clear
frais(e) - fresco(a) - frisch - fresh
fort(e) - fuerte - stark - strong
faible - débil - schwach - weak
propre - limpio(a) - sauber - clean
sale - sucio(a) - schmutzig - dirty
chaud(e) - caliente - heiß - hot
froid(e) - frío(a) - kalt - cold
sec (sèche) - seco(a) - trocken - dry
humide - húmedo(a) - feucht - humid
moderne - moderno(a) - modern - modern
ancien(ne) - antiguo(a) - alt - ancient
fort(e) - fuerte - stark - strong
faible - débil - schwach - weak
rapide - rápido(a) - schnell - fast/quick
lent(e) - lento(a) - langsam - slow
calme - tranquilo(a) - ruhig - calm
bruyant(e) - ruidoso(a) - laut - noisy
dur(e) - duro(a) - hart - hard
mou/molle - suave - weich - soft
léger (légère) - ligero(a) - leicht - light
lourd(e) - pesado(a) - schwer - heavy
cher(chère) - caro(a) - teuer - expensive
bon marché - barato(a) - billig - cheap
propre - limpio(a) - sauber - clean
sale - sucio(a) - schmutzig - dirty
beau (belle) - hermoso(a) - schön - beautiful
laid(e) - feo(a) - hässlich - ugly
grand(e) - grande - groß - tall
petit(e) - pequeño(a) - klein - short
gros(se) - grande - groß - big/fat
mince - delgado(a) - dünn - thin
fort(e) - fuerte - stark - strong
faible - débil - schwach - weak
rapide - rápido(a) - schnell - fast/quick
lent(e) - lento(a) - langsam - slow
doux (douce) - dulce - süß - sweet
amer (amère) - amargo(a) - bitter - bitter
salé(e) - salado(a) - salzig - salty
aigre - agrio(a) - sauer - sour
piquant(e) - picante - scharf - spicy
fade - insípido(a) - fade - tasteless
drôle - divertido(a) - lustig - funny
triste - triste - traurig - sad
heureux (heureuse) - feliz - glücklich - happy
malheureux (malheureuse) - infeliz - unglücklich - unhappy
content(e) - contento(a) - zufrieden - content
mécontent(e) - descontento(a) - unzufrieden - dissatisfied
célèbre - famoso(a) - berühmt - famous
inconnu(e) - desconocido(a) - unbekannt - unknown
intéressant(e) - interesante - interessant - interesting
ennuyeux (ennuyeuse) - aburrido(a) - langweilig - boring
beau (belle) - hermoso(a) - schön - beautiful
laid(e) - feo(a) - hässlich - ugly
propre - limpio(a) - sauber - clean
sale - sucio(a) - schmutzig - dirty
ordinaire - común - gewöhnlich - ordinary
extraordinaire - extraordinario(a) - außergewöhnlich - extraordinary

de - de - von, aus - of, from
et - y - und - and
à - a - zu, an - to, at
le (la, les) - el, la, los, las - der, die, das - the
en - en - in, auf - in, on
que - que - dass - that
pour - para - für - for
dans - en - in - in
ce (cet, cette) - este, esta - dieser, diese, dieses - this
pas - no - nicht - not
sur - sobre - auf - on, upon
se - se - sich - oneself
qui - quien - wer - who, which
par - por - durch - by, through
avec - con - mit - with
être - ser, estar - sein - to be
du - del - des, von - some, of
au - al - an, auf - to, at
mais - pero - aber - but
on - uno, se - man, wir - one, we
il - él - er, es - he, it
avoir - tener, haber - haben - to have
pour - para - für - for
me - me - mich, mir - me
faire - hacer - machen - to do, to make
moi - yo, mí - ich, mir - me
ne - no - nicht - not
plus - más - mehr - more
pouvoir - poder - können - to be able to
aller - ir - gehen - to go
venir - venir - kommen - to come
tout - todo - alles - all, everything
lui - él - ihm - him
comme - como - wie - like, as
si - si - wenn, ob - if, whether
ici - aquí - hier - here
bien - bien - gut - well
vous - usted, ustedes - Sie - you
où - donde - wo - where
rien - nada - nichts - nothing
autre - otro - anderer - other
devoir - deber - müssen - to have to, must
nos - nuestros - unsere - our
alors - entonces - dann - so, then
même - mismo - gleich - same
tout - todo - alles - everything
peut-être - tal vez - vielleicht - maybe, perhaps
encore - todavía - noch - still, yet
cela - eso - das - that, it
sans - sin - ohne - without
chaque - cada - jeder - each, every
depuis - desde - seit - since, from
deux - dos - zwei - two
être - ser, estar - sein - to be
mon - mi - mein - my
ceux - aquellos - diejenigen - those
peu - poco - wenig - few, little
entre - entre - zwischen - between
temps - tiempo - Zeit - time
venir - venir - kommen - to come
cela - eso - das - that
ceux - aquellos - diejenigen - those
souvent - a menudo - oft - often
ça - eso - das - that
alors - entonces - dann - so, then
dont - de quien - wessen - whose
pourquoi - por qué - warum - why
pendant - durante - während - during
chez - en casa de - bei - at, with (someone's place)
avant - antes - vor - before
rien - nada - nichts - nothing
encore - todavía - noch - still, yet
tous - todos - alle - all
puis - luego - dann - then
jamais - nunca - nie - never
chaque - cada - jeder - each, every
personne - nadie - niemand - nobody
ainsi - así - so - thus
contre - contra - gegen - against
n'est - no es - ist nicht - is not
trop - demasiado - zu - too much, too
toujours - siempre - immer - always
même - mismo - gleich - same
donner - dar - geben - to give
parfois - a veces - manchmal - sometimes
entre - entre - zwischen - between
possible - posible - möglich - possible
moins - menos - weniger - less
suivant - siguiente - folgend - following
selon - según - gemäß - according to
passer - pasar - verbringen - to pass, to spend
autre - otro - anderer - other
jour - día - Tag - day
semaine - semana - Woche - week
car - porque - denn - because
tous - todos - alle - all
entendre - oír - hören - to hear
monde - mundo - Welt - world
toujours - siempre - immer - always
rester - quedarse - bleiben - to stay


a - a - zu - to
o - el - der - the
de - de - von - of, from
e - y - und - and
que - que - dass - that
do - del - vom - of the
da - de la - von der - of the
em - en - in - in
um - un - ein - a, an
para - para - für - for, to
com - con - mit - with
não - no - nicht - not
se - se - sich - if
uma - una - eine - a, an
por - por - durch - by, for
mais - más - mehr - more
os - los - die - the (plural)
como - como - wie - like, as
mas - pero - aber - but
ao - al - zum - to the
ele - él - er - he
está - está - ist - is
meu - mi - mein - my
você - tú - du, Sie - you
aqui - aquí - hier - here
bem - bien - gut - well
isso - eso - das - that
sim - sí - ja - yes
muito - mucho - sehr - very, much
só - solo - nur - only
está - está - ist - is
já - ya - schon - already
eu - yo - ich - I
quando - cuando - wann - when
até - hasta - bis - until
mesmo - mismo - gleich - same
nos - nos - uns - us
seu - su - dein - your
lhe - le - ihm - him, her
sem - sin - ohne - without
também - también - auch - also
ainda - aún - noch - still
sempre - siempre - immer - always
só - solo - nur - only
ele - él - er - he
pode - puede - kann - can, may
tudo - todo - alles - everything
aqui - aquí - hier - here
fazer - hacer - machen - to do, make
dizer - decir - sagen - to say
tem - tiene - hat - has
sua - su - seine - his, her
meu - mi - mein - my
ser - ser - sein - to be
tenho - tengo - habe - I have
nós - nosotros - wir - we
pelo - por - durch - through
isso - eso - das - that
você - tú - du, Sie - you
porque - porque - weil - because
nada - nada - nichts - nothing
posso - puedo - kann - I can
aqui - aquí - hier - here
sua - su - seine - his, her
tem - tiene - hat - has
seu - su - dein - your
ela - ella - sie - she
onde - donde - wo - where
esse - ese - dieser - this
está - está - ist - is
dia - día - Tag - day
sempre - siempre - immer - always
vamos - vamos - wir gehen - let's go
ainda - aún - noch - still
como - como - wie - how
tempo - tiempo - Zeit - time
mais - más - mehr - more
meu - mi - mein - my
ele - él - er - he
bem - bien - gut - well
isso - eso - das - that
assim - así - so - like this
hoje - hoy - heute - today
agora - ahora - jetzt - now
vida - vida - Leben - life
quem - quien - wer - who
meu - mi - mein - my
sempre - siempre - immer - always
mesmo - mismo - gleich - same
sabe - sabe - weiß - know
lá - allá - dort - there
tudo - todo - alles - everything
coisa - cosa - Ding - thing
porque - porque - weil - because
você - tú - du, Sie - you
tempo - tiempo - Zeit - time
já - ya - schon - already
pode - puede - kann - can, may
onde - donde - wo - where
grande - grande - groß - big, great

tempo - tiempo - Zeit - time
vida - vida - Leben - life
dia - día - Tag - day
casa - casa - Haus - house
mundo - mundo - Welt - world
trabalho - trabajo - Arbeit - work
ano - año - Jahr - year
parte - parte - Teil - part
pessoa - persona - Person - person
forma - forma - Form - form
lugar - lugar - Ort - place
momento - momento - Moment - moment
coisa - cosa - Ding - thing
razão - razón - Grund - reason
momento - momento - Moment - moment
homem - hombre - Mann - man
vida - vida - Leben - life
ponto - punto - Punkt - point
forma - forma - Form - form
sentido - sentido - Sinn - sense
palavra - palabra - Wort - word
trabalho - trabajo - Arbeit - work
mãe - madre - Mutter - mother
fim - fin - Ende - end
caso - caso - Fall - case
noite - noche - Nacht - night
parte - parte - Teil - part
vez - vez - Mal - time
cidade - ciudad - Stadt - city
escola - escuela - Schule - school
governo - gobierno - Regierung - government
país - país - Land - country
trabalho - trabajo - Arbeit - job
momento - momento - Moment - moment
grupo - grupo - Gruppe - group
problema - problema - Problem - problem
forma - forma - Form - way
mãe - madre - Mutter - mother
semana - semana - Woche - week
governo - gobierno - Regierung - government
mão - mano - Hand - hand
casa - casa - Haus - home
empresa - empresa - Unternehmen - company
parte - parte - Teil - part
hora - hora - Stunde - hour
trabalho - trabajo - Arbeit - labor
pessoa - persona - Person - person
situação - situación - Situation - situation
ponto - punto - Punkt - point
caso - caso - Fall - case
trabalho - trabajo - Arbeit - work
vida - vida - Leben - life
mãe - madre - Mutter - mother
governo - gobierno - Regierung - government
grupo - grupo - Gruppe - group
parte - parte - Teil - part
noite - noche - Nacht - night
ponto - punto - Punkt - point
país - país - Land - country
problema - problema - Problem - problem
forma - forma - Form - form
escola - escuela - Schule - school
cidade - ciudad - Stadt - city
trabalho - trabajo - Arbeit - job
palavra - palabra - Wort - word
sentido - sentido - Sinn - sense
vez - vez - Mal - time
mundo - mundo - Welt - world
mãe - madre - Mutter - mother
caso - caso - Fall - case
noite - noche - Nacht - night
problema - problema - Problem - problem
ponto - punto - Punkt - point
grupo - grupo - Gruppe - group
cidade - ciudad - Stadt - city
pessoa - persona - Person - person
escola - escuela - Schule - school
país - país - Land - country
forma - forma - Form - form
vida - vida - Leben - life
trabalho - trabajo - Arbeit - work
empresa - empresa - Unternehmen - company
momento - momento - Moment - moment
hora - hora - Stunde - hour
mãe - madre - Mutter - mother
ponto - punto - Punkt - point
parte - parte - Teil - part
caso - caso - Fall - case
noite - noche - Nacht - night
pessoa - persona - Person - person
grupo - grupo - Gruppe - group
cidade - ciudad - Stadt - city
trabalho - trabajo - Arbeit - job
problema - problema - Problem - problem
palavra - palabra - Wort - word
sentido - sentido - Sinn - sense
mãe - madre - Mutter - mother
hora - hora - Stunde - hour
mundo - mundo - Welt - world
país - país - Land - country

ser - ser - sein - to be
ter - tener - haben - to have
fazer - hacer - machen - to do, make
estar - estar - sein - to be
poder - poder - können - to be able to, can
ver - ver - sehen - to see
dar - dar - geben - to give
ir - ir - gehen - to go
saber - saber - wissen - to know
querer - querer - wollen - to want
chegar - llegar - ankommen - to arrive
ficar - quedarse - bleiben - to stay
dizer - decir - sagen - to say
vir - venir - kommen - to come
sair - salir - ausgehen - to go out
encontrar - encontrar - treffen - to meet, find
pensar - pensar - denken - to think
sentir - sentir - fühlen - to feel
deixar - dejar - lassen - to let, allow
começar - empezar - beginnen - to begin, start
trazer - traer - bringen - to bring
ver - ver - sehen - to see
pedir - pedir - bitten - to ask for, request
passar - pasar - vorbeigehen - to pass, go by
parecer - parecer - scheinen - to seem, appear
continuar - continuar - fortsetzen - to continue
precisar - necesitar - brauchen - to need
entender - entender - verstehen - to understand
achar - encontrar - finden - to find, think
conseguir - conseguir - erreichen - to achieve, manage
pôr - poner - setzen, legen - to put, place
olhar - mirar - schauen - to look, watch
seguir - seguir - folgen - to follow
sair - salir - ausgehen - to go out
trabalhar - trabajar - arbeiten - to work
levar - llevar - nehmen - to take, carry
mostrar - mostrar - zeigen - to show
conhecer - conocer - kennen - to know, be acquainted with
sentir - sentir - fühlen - to feel
precisar - necesitar - brauchen - to need
continuar - continuar - fortsetzen - to continue
falar - hablar - sprechen - to speak
acreditar - creer - glauben - to believe
ficar - quedarse - bleiben - to stay
amar - amar - lieben - to love
pensar - pensar - denken - to think
entrar - entrar - eintreten - to enter
ligar - llamar - anrufen - to call
colocar - poner - setzen, legen - to put, place
esperar - esperar - warten - to wait, hope
ajudar - ayudar - helfen - to help
acontecer - ocurrir - geschehen - to happen
precisar - necesitar - brauchen - to need
querer - querer - wollen - to want
saber - saber - wissen - to know
usar - usar - benutzen - to use
achar - encontrar - finden - to find, think
precisar - necesitar - brauchen - to need
fazer - hacer - machen - to do, make
passar - pasar - vorbeigehen - to pass, go by
pensar - pensar - denken - to think
chegar - llegar - ankommen - to arrive
ver - ver - sehen - to see
dar - dar - geben - to give
trazer - traer - bringen - to bring
começar - empezar - beginnen - to begin, start
continuar - continuar - fortsetzen - to continue
sentir - sentir - fühlen - to feel
deixar - dejar - lassen - to let, allow
encontrar - encontrar - treffen - to meet, find
dizer - decir - sagen - to say
pedir - pedir - bitten - to ask for, request
passar - pasar - vorbeigehen - to pass, go by
parecer - parecer - scheinen - to seem, appear
entender - entender - verstehen - to understand
seguir - seguir - folgen - to follow
conseguir - conseguir - erreichen - to achieve, manage
pôr - poner - setzen, legen - to put, place
olhar - mirar - schauen - to look, watch
trabalhar - trabajar - arbeiten - to work
levar - llevar - nehmen - to take, carry
mostrar - mostrar - zeigen - to show
conhecer - conocer - kennen - to know, be acquainted with
precisar - necesitar - brauchen - to need
continuar - continuar - fortsetzen - to continue
falar - hablar - sprechen - to speak
acreditar - creer - glauben - to believe
ficar - quedarse - bleiben - to stay
amar - amar - lieben - to love
pensar - pensar - denken - to think
entrar - entrar - eintreten - to enter
ligar - llamar - anrufen - to call
colocar - poner - setzen, legen - to put, place
esperar - esperar - warten - to wait, hope
ajudar - ayudar - helfen - to help
acontecer - ocurrir - geschehen - to happen
precisar - necesitar - brauchen - to need
querer - querer - wollen - to want
saber - saber - wissen - to know
usar - usar - benutzen - to use

bom - bueno - gut - good
grande - grande - groß - big, large
novo - nuevo - neu - new
próprio - propio - eigen - own
velho - viejo - alt - old
certo - cierto - richtig - certain, right
pequeno - pequeño - klein - small
último - último - letzter - last
melhor - mejor - besser - better
novo - nuevo - neu - new
primeiro - primero - erster - first
bom - bueno - gut - good
grande - grande - groß - big, large
velho - viejo - alt - old
próprio - propio - eigen - own
pequeno - pequeño - klein - small
último - último - letzter - last
melhor - mejor - besser - better
novo - nuevo - neu - new
primeiro - primero - erster - first
certo - cierto - richtig - certain, right
bom - bueno - gut - good
grande - grande - groß - big, large
velho - viejo - alt - old
próprio - propio - eigen - own
pequeno - pequeño - klein - small
último - último - letzter - last
melhor - mejor - besser - better
novo - nuevo - neu - new
primeiro - primero - erster - first
certo - cierto - richtig - certain, right
bom - bueno - gut - good
grande - grande - groß - big, large
velho - viejo - alt - old
próprio - propio - eigen - own
pequeno - pequeño - klein - small
último - último - letzter - last
melhor - mejor - besser - better
novo - nuevo - neu - new
primeiro - primero - erster - first
certo - cierto - richtig - certain, right
bom - bueno - gut - good
grande - grande - groß - big, large
velho - viejo - alt - old
próprio - propio - eigen - own
pequeno - pequeño - klein - small
último - último - letzter - last
melhor - mejor - besser - better
novo - nuevo - neu - new
primeiro - primero - erster - first
certo - cierto - richtig - certain, right
bom - bueno - gut - good
grande - grande - groß - big, large
velho - viejo - alt - old
próprio - propio - eigen - own
pequeno - pequeño - klein - small
último - último - letzter - last
melhor - mejor - besser - better
novo - nuevo - neu - new
primeiro - primero - erster - first
certo - cierto - richtig - certain, right
bom - bueno - gut - good
grande - grande - groß - big, large
velho - viejo - alt - old
próprio - propio - eigen - own
pequeno - pequeño - klein - small
último - último - letzter - last
melhor - mejor - besser - better
novo - nuevo - neu - new
primeiro - primero - erster - first
certo - cierto - richtig - certain, right
bom - bueno - gut - good
grande - grande - groß - big, large
velho - viejo - alt - old
próprio - propio - eigen - own
pequeno - pequeño - klein - small
último - último - letzter - last
melhor - mejor - besser - better
novo - nuevo - neu - new
primeiro - primero - erster - first
certo - cierto - richtig - certain, right
bom - bueno - gut - good
grande - grande - groß - big, large
velho - viejo - alt - old
próprio - propio - eigen - own
pequeno - pequeño - klein - small
último - último - letzter - last
melhor - mejor - besser - better
novo - nuevo - neu - new
primeiro - primero - erster - first
certo - cierto - richtig - certain, right
bom - bueno - gut - good
grande - grande - groß - big, large
velho - viejo - alt - old
próprio - propio - eigen - own
pequeno - pequeño - klein - small
último - último - letzter - last
melhor - mejor - besser - better
novo - nuevo - neu - new
primeiro - primero - erster - first

che - que - dass - that
di - de - von - of, from
non - no - nicht - not
la - la - das - the (feminine)
il - el - der - the (masculine)
a - a - zu - to
e - y - und - and
in - en - in - in, into
un - un - ein - a, an
per - para - für - for
con - con - mit - with
si - se - sich - oneself
da - desde - von - from
suo - su - sein - his, her, its
più - más - mehr - more
come - como - wie - like, as
ma - pero - aber - but
su - sobre - auf - on, upon
anche - también - auch - also, even
ci - nos - uns - us, there
essere - ser - sein - to be
avere - tener - haben - to have
fare - hacer - machen - to do, make
potere - poder - können - to be able to, can
dire - decir - sagen - to say
andare - ir - gehen - to go
vedere - ver - sehen - to see
venire - venir - kommen - to come
sapere - saber - wissen - to know
prendere - tomar - nehmen - to take
dare - dar - geben - to give
volere - querer - wollen - to want
stare - estar - bleiben - to stay, be
pensare - pensar - denken - to think
trovare - encontrar - finden - to find
sentire - sentir - fühlen - to feel, hear
lasciare - dejar - lassen - to leave, let
guardare - mirar - schauen - to look
capire - entender - verstehen - to understand
uscire - salir - ausgehen - to go out
chiamare - llamar - anrufen - to call
mettere - poner - setzen, legen - to put
parlare - hablar - sprechen - to speak
credere - creer - glauben - to believe
prendere - tomar - nehmen - to take
continuare - continuar - weitermachen - to continue
sentire - sentir - fühlen - to feel, hear
vedere - ver - sehen - to see
lasciare - dejar - lassen - to leave, let
guardare - mirar - schauen - to look
capire - entender - verstehen - to understand
uscire - salir - ausgehen - to go out
chiamare - llamar - anrufen - to call
mettere - poner - setzen, legen - to put
parlare - hablar - sprechen - to speak
credere - creer - glauben - to believe
prendere - tomar - nehmen - to take
continuare - continuar - weitermachen - to continue
sentire - sentir - fühlen - to feel, hear
vedere - ver - sehen - to see
lasciare - dejar - lassen - to leave, let
guardare - mirar - schauen - to look
capire - entender - verstehen - to understand
uscire - salir - ausgehen - to go out
chiamare - llamar - anrufen - to call
mettere - poner - setzen, legen - to put
parlare - hablar - sprechen - to speak
credere - creer - glauben - to believe
prendere - tomar - nehmen - to take
continuare - continuar - weitermachen - to continue
sentire - sentir - fühlen - to feel, hear
vedere - ver - sehen - to see
lasciare - dejar - lassen - to leave, let
guardare - mirar - schauen - to look
capire - entender - verstehen - to understand
uscire - salir - ausgehen - to go out
chiamare - llamar - anrufen - to call
mettere - poner - setzen, legen - to put
parlare - hablar - sprechen - to speak
credere - creer - glauben - to believe
prendere - tomar - nehmen - to take
continuare - continuar - weitermachen - to continue
sentire - sentir - fühlen - to feel, hear
vedere - ver - sehen - to see
lasciare - dejar - lassen - to leave, let
guardare - mirar - schauen - to look
capire - entender - verstehen - to understand
uscire - salir - ausgehen - to go out
chiamare - llamar - anrufen - to call
mettere - poner - setzen, legen - to put
parlare - hablar - sprechen - to speak
credere - creer - glauben - to believe
prendere - tomar - nehmen - to take
continuare - continuar - weitermachen - to continue
sentire - sentir - fühlen - to feel, hear
vedere - ver - sehen - to see
lasciare - dejar - lassen - to leave, let
guardare - mirar - schauen - to look
capire - entender - verstehen - to understand
uscire - salir - ausgehen - to go out

tempo - tiempo - Zeit - time
anno - año - Jahr - year
giorno - día - Tag - day
vita - vida - Leben - life
parte - parte - Teil - part
casa - casa - Haus - house
uomo - hombre - Mann - man
volta - vez - Mal - time (occasion)
mondo - mundo - Welt - world
lavoro - trabajo - Arbeit - work, job
mano - mano - Hand - hand
occhio - ojo - Auge - eye
momento - momento - Moment - moment
modo - modo - Art - way, manner
mamma - mamá - Mutter - mom, mother
persona - persona - Person - person
figlio - hijo - Sohn - son
cosa - cosa - Sache - thing
padre - padre - Vater - father
amore - amor - Liebe - love
casa - casa - Zuhause - home
mamma - mamá - Mama - mom
ragazza - chica - Mädchen - girl
città - ciudad - Stadt - city
mano - mano - Hand - hand
testa - cabeza - Kopf - head
voce - voz - Stimme - voice
strada - calle - Straße - street
scuola - escuela - Schule - school
amico - amigo - Freund - friend
momento - momento - Moment - moment
lavoro - trabajo - Arbeit - work, job
padre - padre - Vater - father
vita - vida - Leben - life
uomo - hombre - Mann - man
città - ciudad - Stadt - city
ragazza - chica - Mädchen - girl
mano - mano - Hand - hand
testa - cabeza - Kopf - head
occhio - ojo - Auge - eye
voce - voz - Stimme - voice
scuola - escuela - Schule - school
strada - calle - Straße - street
amico - amigo - Freund - friend
giorno - día - Tag - day
mondo - mundo - Welt - world
parte - parte - Teil - part
cosa - cosa - Sache - thing
lavoro - trabajo - Arbeit - work, job
casa - casa - Haus - house
tempo - tiempo - Zeit - time
anno - año - Jahr - year
vita - vida - Leben - life
uomo - hombre - Mann - man
volta - vez - Mal - time (occasion)
mamma - mamá - Mutter - mom, mother
persona - persona - Person - person
figlio - hijo - Sohn - son
modo - modo - Art - way, manner
amore - amor - Liebe - love
casa - casa - Zuhause - home
mamma - mamá - Mama - mom
ragazza - chica - Mädchen - girl
città - ciudad - Stadt - city
mano - mano - Hand - hand
testa - cabeza - Kopf - head
voce - voz - Stimme - voice
strada - calle - Straße - street
scuola - escuela - Schule - school
amico - amigo - Freund - friend
momento - momento - Moment - moment
lavoro - trabajo - Arbeit - work, job
padre - padre - Vater - father
vita - vida - Leben - life
uomo - hombre - Mann - man
città - ciudad - Stadt - city
ragazza - chica - Mädchen - girl
mano - mano - Hand - hand
testa - cabeza - Kopf - head
occhio - ojo - Auge - eye
voce - voz - Stimme - voice
strada - calle - Straße - street
scuola - escuela - Schule - school
amico - amigo - Freund - friend
giorno - día - Tag - day
mondo - mundo - Welt - world
parte - parte - Teil - part
cosa - cosa - Sache - thing
lavoro - trabajo - Arbeit - work, job
casa - casa - Haus - house
tempo - tiempo - Zeit - time
anno - año - Jahr - year
vita - vida - Leben - life
uomo - hombre - Mann - man
volta - vez - Mal - time (occasion)
mamma - mamá - Mutter - mom, mother
persona - persona - Person - person
figlio - hijo - Sohn - son
modo - modo - Art - way, manner
amore - amor - Liebe - love


grande - grande - groß - big, large
nuovo - nuevo - neu - new
altro - otro - anderer - other
piccolo - pequeño - klein - small
primo - primero - erster - first
buono - bueno - gut - good
proprio - propio - eigen - own
vecchio - viejo - alt - old
lungo - largo - lang - long
bello - bonito - schön - beautiful
ultimo - último - letzter - last
meglio - mejor - besser - better
difficile - difícil - schwierig - difficult
giovane - joven - jung - young
nuovo - nuevo - neu - new
importante - importante - wichtig - important
alto - alto - hoch - tall, high
certo - cierto - richtig - certain, sure
giusto - justo - richtig - right, correct
intero - entero - ganz - whole, entire
diverso - diferente - unterschiedlich - different
diverso - diferente - verschieden - various
sicuro - seguro - sicher - safe, secure
normale - normal - normal - normal
proprio - propio - eigen - own
possibile - posible - möglich - possible
migliore - mejor - besser - best
grande - grande - groß - great
nuovo - nuevo - neu - new
vecchio - viejo - alt - old
certo - cierto - richtig - certain, sure
bello - bonito - schön - beautiful
piccolo - pequeño - klein - small
giovane - joven - jung - young
importante - importante - wichtig - important
meglio - mejor - besser - better
altro - otro - anderer - other
lungo - largo - lang - long
primo - primero - erster - first
buono - bueno - gut - good
ultimo - último - letzter - last
difficile - difícil - schwierig - difficult
alto - alto - hoch - tall, high
proprio - propio - eigen - own
giusto - justo - richtig - right, correct
intero - entero - ganz - whole, entire
diverso - diferente - unterschiedlich - different
sicuro - seguro - sicher - safe, secure
possibile - posible - möglich - possible
normale - normal - normal - normal
migliore - mejor - besser - best
grande - grande - groß - big, large
nuovo - nuevo - neu - new
bello - bonito - schön - beautiful
piccolo - pequeño - klein - small
primo - primero - erster - first
buono - bueno - gut - good
giovane - joven - jung - young
importante - importante - wichtig - important
vecchio - viejo - alt - old
certo - cierto - richtig - certain, sure
giusto - justo - richtig - right, correct
intero - entero - ganz - whole, entire
diverso - diferente - unterschiedlich - different
sicuro - seguro - sicher - safe, secure
possibile - posible - möglich - possible
normale - normal - normal - normal
altro - otro - anderer - other
lungo - largo - lang - long
meglio - mejor - besser - better
migliore - mejor - besser - best
grande - grande - groß - great
nuovo - nuevo - neu - new
vecchio - viejo - alt - old
bello - bonito - schön - beautiful
piccolo - pequeño - klein - small
giovane - joven - jung - young
importante - importante - wichtig - important
buono - bueno - gut - good
primo - primero - erster - first
difficile - difícil - schwierig - difficult
altro - otro - anderer - other
certo - cierto - richtig - certain, sure
giusto - justo - richtig - right, correct
intero - entero - ganz - whole, entire
sicuro - seguro - sicher - safe, secure
diverso - diferente - unterschiedlich - different
normale - normal - normal - normal
possibile - posible - möglich - possible
migliore - mejor - besser - best
grande - grande - groß - big, large
nuovo - nuevo - neu - new
bello - bonito - schön - beautiful
piccolo - pequeño - klein - small
giovane - joven - jung - young
importante - importante - wichtig - important
vecchio - viejo - alt - old
buono - bueno - gut - good
primo - primero - erster - first
difficile - difícil - schwierig - difficult


di - de - von - of, from
che - que - dass - that
non - no - nicht - not
per - para - für - for
con - con - mit - with
su - sobre - auf - on, over
essere - ser - sein - to be
avere - tener - haben - to have
fare - hacer - machen - to do, make
un - un - ein - a, an
in - en - in - in, into
al - al - zum - to the, at the
si - sí - ja - yes
ma - pero - aber - but
anche - también - auch - also, too
come - como - wie - like, as
però - sin embargo - jedoch - however
se - si - wenn - if
tra - entre - zwischen - between, among
più - más - mehr - more
o - o - oder - or
solo - solo - nur - only
senza - sin - ohne - without
tutto - todo - alles - all, everything
qui - aquí - hier - here
molto - mucho - viel - very, much
così - así - so - so, thus
proprio - propio - genau - exactly, just
sempre - siempre - immer - always
bene - bien - gut - well
giorno - día - Tag - day
poi - luego - dann - then, afterwards
ora - ahora - jetzt - now
tanto - tanto - viel - so much, a lot
solo - solo - allein - alone
ancora - aún - noch - still, yet
cosa - cosa - Ding - thing
quindi - entonces - daher - therefore
dove - donde - wo - where
niente - nada - nichts - nothing
così - así - so - so, like this
perché - porque - weil - because
tanto - tanto - so viel - so much
sempre - siempre - immer - always
bene - bien - gut - well
giorno - día - Tag - day
poi - luego - dann - then, afterwards
ora - ahora - jetzt - now
solo - solo - allein - alone
ancora - aún - noch - still, yet
cosa - cosa - Ding - thing
quindi - entonces - daher - therefore
dove - donde - wo - where
niente - nada - nichts - nothing
così - así - so - so, like this
perché - porque - weil - because
vero - verdadero - wahr - true
certo - cierto - sicher - certain, sure
quando - cuando - wenn - when
tutto - todo - alles - all, everything
poco - poco - wenig - little, few
giorno - día - Tag - day
mentre - mientras - während - while
dopo - después - nach - after
prima - antes - vor - before
volere - querer - wollen - to want
potere - poder - können - to be able to, can
dire - decir - sagen - to say, tell
vedere - ver - sehen - to see
andare - ir - gehen - to go
venire - venir - kommen - to come
sapere - saber - wissen - to know
pensare - pensar - denken - to think
prendere - tomar - nehmen - to take
lasciare - dejar - lassen - to leave, let
sentire - sentir - hören - to hear, feel
stare - estar - bleiben - to stay, be
capire - entender - verstehen - to understand
mettere - poner - setzen - to put, place
trovare - encontrar - finden - to find
dare - dar - geben - to give
parlare - hablar - sprechen - to speak, talk
guardare - mirar - schauen - to look, watch
credere - creer - glauben - to believe
vivere - vivir - leben - to live
amare - amar - lieben - to love
conoscere - conocer - kennen - to know, be familiar with
pensare - pensar - denken - to think
lavorare - trabajar - arbeiten - to work
sentire - sentir - hören - to hear, feel
dovere - deber - müssen - to have to, must
cercare - buscar - suchen - to search, look for
lasciare - dejar - lassen - to leave, let
studiare - estudiar - studieren - to study
provare - probar - versuchen - to try, test
restare - quedar - bleiben - to stay, remain
continuare - continuar - weitermachen - to continue
comprendere - comprender - verstehen - to understand, comprehend
chiamare - llamar - anrufen - to call
rispondere - responder - antworten - to answer, respond

Willkommen!: Welcome!
Wie komme ich dorthin?: How do I get there?
Bis zum nächsten Mal.: See you next time.
Lass uns ein bisschen Spaß haben!: Let's have some fun!
Wiederholen Sie bitte.: Please repeat.
Tschüss!: Bye!
Bitte schön.: You're welcome
Danke.: Thank you
Entschuldigung..: Excuse me.
Wie alt bist du?: How old are you?
Ich bin ... Jahre alt.: I’m… years old
Keine sorge.: Don't worry.
Ich möchte ... kaufen.: I would like to buy ....
Handschuh: Hand + Schuh (Hand + shoe): Glove
Flugzeug: Flug + Zeug (Flight + Staff): Airplane
Staubsauger: Staub + Sauger (Dust + Vacuum): Vacuum cleaner
Waschmaschine: Wasch + Maschine (Wash + Machine): Washing machine
Trockenzeit: Trocken + Zeit (Dry + Time): Dry season
Orangensaft: Orange + Saft (Orange + Juice): Orange juice
Haustürschlüssel: Haus + Tür + Schlüssel (House + Door + Key): Front door key
Sprachschule: Sprache + Schule: Language school
Zimmerservice: Zimmer + Service: Room service
Hauptbahnhof: Haupt + Bahnof: Main train station
Superwetter: Super + Wetter: Great weather
Buchladen: bookshop
Supermarkt: supermarket
Bäckerei: bakery
Einkaufszentrum: shopping mall
Krankenhaus: hospital
Polizeirevier: police station
Stunde: hour
Sekunde: second
Gestern: yesterday
Morgen: tomorrow
Heute: today
Jahr: year
Woche: week
Kaffee: coffee
Bier: beer
Tee: tea
Wein: wine
Wasser: water
Salat: salad
Suppe: soup
Hähnchen: chicken
Rindfleisch: beef
Fisch: fish
Sehnsucht – to yearn for, to crave
Torschlusspanik – last-minute panic
Zeitgeist – the defining spirit or mood of a particular period of history as shown by the ideas and beliefs of the time
Reisefieber – travel fever
Wanderlust – the desire to travel the world; similar to Reisefieber
Luftkuss – an air kiss, blown kiss, or thrown kiss
Augenblick – a super short moment
Vorfreude– joyful anticipation
Waldeinsamkeit – sublime and peaceful feeling you get while being alone in the woods
Ver­gan­gen­heits­be­wäl­ti­gung – coping with the past
Wo finde ich… (Where do I find… ) … den Bahnhof? (… the train station?)   … einen Geldautomaten? (… a cash machine?) … die Touristeninformation? (… the tourist information?)  … ein Taxi? (… a cab?)  … eine Toilette? (… a toilet?)
Darf ich bitte vorbei? (Could you let me pass please?)
Wie viel kostet das? (How much does this cost?)
Wann fährt…  (When’s… ) … der nächste Bus? (… the next bus?) … die nächste Bahn? (… the next train?)
Ich habe mich verlaufen. (I’m lost.)
Wie komme ich zu… (How do I get to… )
Können Sie mir helfen? / Kannst du mir helfen? (Can you help me?)
Sprechen Sie English?/ Sprichst du Englisch? (Do you speak English?)
Einen Moment, bitte. (One moment, please.)
Das ist alles, danke. (That’s all, thank you.)
Ich habe eine Reservierung auf den Namen… (I’ve got a reservation under… )
Ich möchte bitte… (I would like… ) … einen Tisch reservieren. (… to book a table, please.) … ein Glas Wein. (… a glass of wine, please.) … die Speisekarte. (… the menu.) … zahlen.(… to pay, please.)
Kann ich mit EC-Karte / Kreditkarte zahlen? (Do you take debit cards / credit cards?) 
Zum Wohl! / Prost! (Cheers!)
Guten Appetit. (Enjoy your meal.)
Die Rechnung, bitte. (The bill, please.)
Stimmt so. (Keep the change.)
Ich heiße… (My name is… )
Ich komme aus… (I’m from… ) … Großbritannien (… the UK.) … den Staaten (… the States.) … Australien. (… Australia.)
Ich habe… (I have…) … ein Zimmer reserviert. (… booked a room.)
Ich bin zum ersten Mal hier. (This is my first time here.)
Ich bleibe für… (I’m staying for… ) … das Wochenende (… the weekend.) … ein paar Tage. (… a few days.) … eine Woche. (… a week.)
Ich fahre weiter nach… (I’m travelling on to… ) 
Guten Tag! — Good day!
Guten Morgen! — Good morning!
Guten Abend! — Good evening!
Hallo! — Hello!
Wo kommst du her? — Where are you from? (informal)
Woher kommen Sie? — Where are you from? (formal)
Ich bin aus New York. or Ich komme aus New York. (for example) — I am from New York.
Ich komme aus Amerika/Kanada/Spanien. — I am from the US/Canada/Spain.
Ich bin Amerikaner/Kanadier/Spanier. — I am American/Canadian/Spanish.
Ich bin Amerikanerin/Kanadierin/Spanierin.
Freut mich, Sie kennen zu lernen. — Pleasure to meet you!
Freut mich, dich/euch kennen zu lernen. — Pleasure to meet you (guys)!
Wie lange lebst du schon in Stuttgart? — How long have you been living in Stuttgart?
Leben Sie schon lange hier? — Have you [polite] been living here for a long time?
“Sie können du zu mir sagen” or “Du kannst mich duzen”, which literally translates to “You can say you to me”.
Mit welchem Zug/mit welcher U-Bahn/mit welcher S-Bahn komme ich nach Pankow? — Which train/U-Bahn/S-Bahn do I have to take to get to Pankow?
Von welchem Gleis aus fährt der Zug? — Which platform is the train leaving from?
Hält diese S-Bahn an der Haltestelle Feuersee? — Does this train stop at the stop “Feuersee”?
Wann fährt der Zug ab? — When is the train departing?
Ist dies der Zug/Bus nach Esslingen? — Is this the train/bus going to Esslingen?
Entschuldigen Sie, fährt dieser Zug/Bus nach …? — Excuse me please, is this train/bus going to …?
Wann fährt der nächste Bus nach Mitte? — When is the next bus to Mitte leaving?
Wann fährt der nächste Bus in die Innenstadt? — When is the next bus to the city center leaving?
Was kostet ein Ticket nach Stuttgart? — How much is a ticket to Stuttgart?
Ich möchte nach Prenzlauer Berg. Wie komme ich am besten dorthin? — I’d like to go to Prenzlauer Berg. How can I get there best?
Wann fährt der letzte Zug/Bus nach Tübingen? — When is the last train/bus to Tübingen leaving?
Ein Ticket/zwei Tickets nach Stuttgart-Vaihingen bitte. — One ticket/two tickets to Stuttgart-Vaihingen, please.
Exploring New Territories
Entschuldigen Sie, ich habe eine Frage. — Excuse me please, I have a question.
Wie komme ich zur Stiftskirche? — How do I get to the Stiftskirche?
Gibt es hier in der Nähe eine Touristeninformation? — Is there a tourist information close by?
Kennen Sie einen Mietwagenverleih in der Nähe? — Do you know of any car rental services around here?
Komme ich auf diesem Weg zum Rathausplatz? — Is this the way to the Rathausplatz (city hall square)?
Könnten Sie mir das bitte auf der Karte zeigen? — Would you mind showing me this on the map, please?
Gibt es hier in der Gegend interessante Sehenswürdigkeiten? — Are there any interesting sights here in the area?
Wo ist der Bahnhof? — Where is the train station?
Gibt es hier in der Nähe eine öffentliche Toilette? — Is there a public restroom close by?
Geht es hier lang zum Museum? — Is it this way to get to the museum?
Geht es da lang? — Is it in this direction?
Ich habe mich verlaufen. — I am lost.
Ich habe mich verfahren. — I am lost (driving a car).
Wie viel Uhr ist es? — What time is it?
Kann ich hier auch mit Kreditkarte bezahlen? — Do you accept credit cards as well?
Ich bin auf der Suche nach einer Mütze. — I am looking for a (winter) hat.
Haben Sie das auch in einer kleineren/größeren Größe? — Do you still have this in a smaller/larger size?
Haben Sie das auch in einer anderen Farbe? — Do you have this in a different color?
Ich schaue mich nur um, danke. — I am just looking, thank you.
Das steht mir leider nicht. — Unfortunately, this doesn’t look good on me.
Könnten Sie das bitte für mich zurücklegen? — Could you please put this on hold for me?
Danke, ich suche erst einmal noch weiter. — Thanks, but for now I’ll keep looking.
Wie viel kostet ein halbes Kilo Kartoffeln? — How much is half a kilogram of potatoes?
Ich hätte gerne vier Laugenbrötchen. — I’d like four pretzel rolls, please.
Darf es noch etwas sein? - Nein, das ist alles, danke. — No, thanks, that’s all for today.
Einen Moment bitte. — Just a moment please.
Nein, danke. — No, thank you.
Ja, bitte! — Yes, please!
Danke, aber ich würde mich gerne noch ein bisschen umsehen. — Thank you, but I’d like to look around a bit more.
Haben Sie bereits geöffnet? — Are you open yet?
Ich würde gerne einen Tisch für zwei Personen für heute um sechs Uhr reservieren. — I’d like to reserve a table for two at six o’clock today.
Ich hätte gerne einen Tisch für eine Person, bitte. — I’d like a table for one, please.
Ich/wir hätten gerne einen Tisch für zwei/drei/vier Personen bitte. — I’d like/we’d like a table for two/three/four, please.
Wie lange ist die Wartezeit für einen Tisch? — How long would we have to wait for a table?
Haben Sie eine Speisekarte auf Englisch? — Do you have a menu in English?
Haben Sie auch eine Kinderkarte? — Do you have a children’s menu as well?
Was können Sie empfehlen? — What can you recommend?
Welches Gericht können Sie empfehlen? — Which dish can you recommend?
Welchen Wein würden Sie dazu empfehlen? — Which wine would you recommend with this dish?
Haben Sie auch Spezialitäten aus der Region? — Do you offer regional specialties as well?
Ein kleines Bier, bitte. — A small beer, please.
Ein großes Bier, bitte. — A large beer, please.
Haben Sie eine Dessertkarte? — Do you have a dessert menu?
Ich hätte gerne die Rechnung. — I’d like the check, please.
Ich/wir würde/würden gerne bezahlen. — I/we would like to pay, please.
Ich hätte gerne eine Pommes rot-weiß. — I’d like one portion of fries red and white, please.
Einen Döner “mit scharf”, bitte. — One Döner Kebap “with spicy”, please.
Ein Döner mit allem, bitte. — One Döner with everything, please.
Zum mitnehmen, bitte. — To go, please.
Zum hier essen, bitte. — For here, please.
Bieten Sie auch Gerichte zum Mitnehmen an? — Do you offer takeaway meals as well?
Können Sie mir bitte helfen? — Can you help me, please?
Haben Sie ein Handy? Ich brauche einen Krankenwagen. — Do you have a cell phone? I need an ambulance.
Rufen Sie bitte einen Krankenwagen. — Please call an ambulance.
Ich hatte einen Fahrradunfall/Autounfall. — I had a bicycle/car accident.
Ich brauche/wir brauchen einen Arzt. — I need/we need a doctor. (Or: I/we need to see a doctor.)
Ich bin verletzt. — I am hurt/injured.
Gibt es hier in der Nähe ein Krankenhaus? — Is there a hospital close by?
Bitte fahren Sie mich zum nächsten Krankenhaus. — Please drive me to the nearest hospital.
Kennen Sie einen guten Hausarzt? — Do you know any good family physicians?
Gibt es hier in der Nähe einen Kinderarzt? — Is there a pediatrician’s office close by?
Es geht mir nicht gut. — I don’t feel well.
Ich habe eine Grippe. — I have the flu.
Ich habe starke Kopfschmerzen/eine starke Migräne. — I have a very bad headache/a bad migraine.
Ich glaube, ich habe mir etwas gebrochen. — I think I have broken something.
Es tut mir hier weh. — It hurts here.
Ich bin auf der Suche nach einer Apotheke. — I am looking for a pharmacy.
Haben Sie auch etwas, das ich ohne Rezept bekomme? — Do you have anything that I won’t need a prescription for?
Er/Sie braucht Medikamente. — He/she needs medication.
Bitte rufen Sie die Polizei. — Please call the police.
Gibt es hier in der Nähe eine Polizeistation? — Is there a police department in the vicinity?
Ich bin bestohlen worden. — I was mugged.
In meinem Hotelzimmer wurde eingebrochen. — My hotel room was broken into.
Mein Auto wurde aufgebrochen. — My car was broken into.
Ich bin unschuldig! — I am innocent!


Immer - manchmal - nie : Always - sometimes- never 
Alles - etwas - nichts : Everything- something- nothing
Jeder - jemand - niemand : Everybody- somebody- nobody
Überall - irgendwo - nirgendwo : Everywhere- somewhere- nowhere

Toujours - parfois - jamais : Always - sometimes- never 
Tout - quelque chose - rien : Everything- something- nothing
Tout le monde - quelqu'un - personne : Everybody- somebody- nobody
Partout - quelque part - nulle part : Everywhere- somewhere- nowhere

Siempre - a veces - nunca : Always - sometimes- never 
Todo - algo - nada : Everything- something- nothing
Todo el mundo - alguien - nadie : Everybody- somebody- nobody
En todas partes - en algún lugar - en ninguna parte : Everywhere- somewhere- nowhere

Sempre - a volte - mai : Always - sometimes- never 
Tutto - qualcosa - niente : Everything- something- nothing
Tutti - qualcuno - nessuno : Everybody- somebody- nobody
Ovunque - da qualche parte - da nessuna parte : Everywhere- somewhere- nowhere

Sempre - às vezes - nunca : Always - sometimes- never 
Tudo - algo - nada : Everything- something- nothing
Todo mundo - alguém - ninguém : Everybody- somebody- nobody
Em todos os lugares - em algum lugar - em lugar nenhum : Everywhere- somewhere- nowhere

ser: yo soy, tú eres, él/ella/usted es, nosotros/nosotras somos, vosotros/vosotras sois, ellos/ellas/ustedes son
estar: yo estoy, tú estás, él/ella/usted está, nosotros/nosotras estamos, vosotros/vosotras estáis, ellos/ellas/ustedes están
tener: yo tengo, tú tienes, él/ella/usted tiene, nosotros/nosotras tenemos, vosotros/vosotras tenéis, ellos/ellas/ustedes tienen
haber: he, has, ha, hemos, habéis, han
hacer: yo hago, tú haces, él/ella/usted hace, nosotros/nosotras hacemos, vosotros/vosotras hacéis, ellos/ellas/ustedes hacen
decir: yo digo, tú dices, él/ella/usted dice, nosotros/nosotras decimos, vosotros/vosotras decís, ellos/ellas/ustedes dicen
ir: yo voy, tú vas, él/ella/usted va, nosotros/nosotras vamos, vosotros/vosotras vais, ellos/ellas/ustedes van
ver: yo veo, tú ves, él/ella/usted ve, nosotros/nosotras vemos, vosotros/vosotras veis, ellos/ellas/ustedes ven
saber: yo sé, tú sabes, él/ella/usted sabe, nosotros/nosotras sabemos, vosotros/vosotras sabéis, ellos/ellas/ustedes saben
poder: yo puedo, tú puedes, él/ella/usted puede, nosotros/nosotras podemos, vosotros/vosotras podéis, ellos/ellas/ustedes pueden
poner: yo pongo, tú pones, él/ella/usted pone, nosotros/nosotras ponemos, vosotros/vosotras ponéis, ellos/ellas/ustedes ponen
gustar: me gusta, te gusta, le gusta, nos gusta, os gusta, les gusta
dar: yo doy, tú das, él/ella/usted da, nosotros/nosotras damos, vosotros/vosotras dais, ellos/ellas/ustedes dan
venir: yo vengo, tú vienes, él/ella/usted viene, nosotros/nosotras venimos, vosotros/vosotras venís, ellos/ellas/ustedes vienen
decir: yo digo, tú dices, él/ella/usted dice, nosotros/nosotras decimos, vosotros/vosotras decís, ellos/ellas/ustedes dicen
poder: yo puedo, tú puedes, él/ella/usted puede, nosotros/nosotras podemos, vosotros/vosotras podéis, ellos/ellas/ustedes pueden
sentir: yo siento, tú sientes, él/ella/usted siente, nosotros/nosotras sentimos, vosotros/vosotras sentís, ellos/ellas/ustedes sienten
ver: yo veo, tú ves, él/ella/usted ve, nosotros/nosotras vemos, vosotros/vosotras veis, los/ellas/ustedes ven
oir: oigo, oyes, oye, oímos, oís, oyen
creer: yo creo, tú crees, él/ella/usted cree, nosotros/nosotras creemos, vosotros/vosotras creéis, ellos/ellas/ustedes creen
seguir: yo sigo, tú sigues, él/ella/usted sigue, nosotros/nosotras seguimos, vosotros/vosotras seguís, ellos/ellas/ustedes siguen
hablar: yo hablo, tú hablas, él/ella/usted habla, nosotros/nosotras hablamos, vosotros/vosotras habláis, ellos/ellas/ustedes hablan
pensar: yo pienso, tú piensas, él/ella/usted piensa, nosotros/nosotras pensamos, vosotros/vosotras pensáis, ellos/ellas/ustedes piensan
encontrar: encuentro, encuentras, encuentra, encontramos, encontráis, encuentran
saber: sé, sabes, sabe, sabemos, sabéis, saben
llegar: yo llego, tú llegas, él/ella/usted llega, nosotros/nosotras llegamos, vosotros/vosotras llegáis, ellos/ellas/ustedes llegan
pasar: yo paso, tú pasas, él/ella/usted pasa, nosotros/nosotras pasamos, vosotros/vosotras pasáis, ellos/ellas/ustedes pasan
quedar: yo quedo, tú quedas, él/ella/usted queda, nosotros/nosotras quedamos, vosotros/vosotras quedáis, ellos/ellas/ustedes quedan
parecer: yo parezco, tú pareces, él/ella/usted parece, nosotros/nosotras parecemos, vosotros/vosotras parecéis, ellos/ellas/ustedes parecen
mirar: yo miro, tú miras, él/ella/usted mira, nosotros/nosotras miramos, vosotros/vosotras miráis, ellos/ellas/ustedes miran
tocar: yo toco, tú tocas, él/ella/usted toca, nosotros/nosotras tocamos, vosotros/vosotras tocáis, ellos/ellas/ustedes tocan
comer: yo como, tú comes, él/ella/usted come, nosotros/nosotras comemos, vosotros/vosotras coméis, ellos/ellas/ustedes comen
vivir: yo vivo, tú vives, él/ella/usted vive, nosotros/nosotras vivimos, vosotros/vosotras vivís, ellos/ellas/ustedes viven
beber: yo bebo, tú bebes, él/ella/usted bebe, nosotros/nosotras bebemos, vosotros/vosotras bebéis, ellos/ellas/ustedes beben
escribir: yo escribo, tú escribes, él/ella/usted escribe, nosotros/nosotras escribimos, vosotros/vosotras escribís, ellos/ellas/ustedes escriben
sein: ich bin, du bist, er/sie/es ist, wir sind, ihr seid, sie/Sie sind
haben: ich habe, du hast, er/sie/es hat, wir haben, ihr habt, sie/Sie haben
werden: ich werde, du wirst, er/sie/es wird, wir werden, ihr werdet, sie/Sie werden
können: ich kann, du kannst, er/sie/es kann, wir können, ihr könnt, sie/Sie können
müssen: ich muss, du musst, er/sie/es muss, wir müssen, ihr müsst, sie/Sie müssen
sagen: ich sage, du sagst, er/sie/es sagt, wir sagen, ihr sagt, sie/Sie sagen
geben: ich gebe, du gibst, er/sie/es gibt, wir geben, ihr gebt, sie/Sie geben
kommen: ich komme, du kommst, er/sie/es kommt, wir kommen, ihr kommt, sie/Sie kommen
wollen: ich will, du willst, er/sie/es will, wir wollen, ihr wollt, sie/Sie wollen
gehen: ich gehe, du gehst, er/sie/es geht, wir gehen, ihr geht, sie/Sie gehen
sehen: ich sehe, du siehst, er/sie/es sieht, wir sehen, ihr seht, sie/Sie sehen
lassen: ich lasse, du lässt, er/sie/es lässt, wir lassen, ihr lasst, sie/Sie lassen
stehen: ich stehe, du stehst, er/sie/es steht, wir stehen, ihr steht, sie/Sie stehen
nehmen: ich nehme, du nimmst, er/sie/es nimmt, wir nehmen, ihr nehmt, sie/Sie nehmen
danken: ich danke, du dankst, er/sie/es dankt, wir danken, ihr dankt, sie/Sie danken
machen: ich mache, du machst, er/sie/es macht, wir machen, ihr macht, sie/Sie machen
denken: ich denke, du denkst, er/sie/es denkt, wir denken, ihr denkt, sie/Sie denken
sollen: ich soll, du sollst, er/sie/es soll, wir sollen, ihr sollt, sie/Sie sollen
finden: ich finde, du findest, er/sie/es findet, wir finden, ihr findet, sie/Sie finden
heißen: ich heiße, du heißt, er/sie/es heißt, wir heißen, ihr heißt, sie/Sie heißen
geben: ich gebe, du gibst, er/sie/es gibt, wir geben, ihr gebt, sie/Sie geben
sprechen: ich spreche, du sprichst, er/sie/es spricht, wir sprechen, ihr sprecht, sie/Sie sprechen
liegen: ich liege, du liegst, er/sie/es liegt, wir liegen, ihr liegt, sie/Sie liegen
glauben: ich glaube, du glaubst, er/sie/es glaubt, wir glauben, ihr glaubt, sie/Sie glauben
bringen: ich bringe, du bringst, er/sie/es bringt, wir bringen, ihr bringt, sie/Sie bringen
leben: ich lebe, du lebst, er/sie/es lebt, wir leben, ihr lebt, sie/Sie leben
halten: ich halte, du hältst, er/sie/es hält, wir halten, ihr haltet, sie/Sie halten
arbeiten: ich arbeite, du arbeitest, er/sie/es arbeitet, wir arbeiten, ihr arbeitet, sie/Sie arbeiten
bekommen: ich bekomme, du bekommst, er/sie/es bekommt, wir bekommen, ihr bekommt, sie/Sie bekommen
fragen: ich frage, du fragst, er/sie/es fragt, wir fragen, ihr fragt, sie/Sie fragen
fühlen: ich fühle, du fühlst, er/sie/es fühlt, wir fühlen, ihr fühlt, sie/Sie fühlen
être: je suis, tu es, il/elle est, nous sommes, vous êtes, ils/elles sont
avoir: j'ai, tu as, il/elle a, nous avons, vous avez, ils/elles ont
faire: je fais, tu fais, il/elle fait, nous faisons, vous faites, ils/elles font
dire: je dis, tu dis, il/elle dit, nous disons, vous dites, ils/elles disent
aller: je vais, tu vas, il/elle va, nous allons, vous allez, ils/elles vont
pouvoir: je peux, tu peux, il/elle peut, nous pouvons, vous pouvez, ils/elles peuvent
voir: je vois, tu vois, il/elle voit, nous voyons, vous voyez, ils/elles voient
savoir: je sais, tu sais, il/elle sait, nous savons, vous savez, ils/elles savent
venir: je viens, tu viens, il/elle vient, nous venons, vous venez, ils/elles viennent
devoir: je dois, tu dois, il/elle doit, nous devons, vous devez, ils/elles doivent
mettre: je mets, tu mets, il/elle met, nous mettons, vous mettez, ils/elles mettent
aimer: j'aime, tu aimes, il/elle aime, nous aimons, vous aimez, ils/elles aiment
parler: je parle, tu parles, il/elle parle, nous parlons, vous parlez, ils/elles parlent
trouver: je trouve, tu trouves, il/elle trouve, nous trouvons, vous trouvez, ils/elles trouvent
donner: je donne, tu donnes, il/elle donne, nous donnons, vous donnez, ils/elles donnent
regarder: je regarde, tu regardes, il/elle regarde, nous regardons, vous regardez, ils/elles regardent
venir: je viens, tu viens, il/elle vient, nous venons, vous venez, ils/elles viennent
croire: je crois, tu crois, il/elle croit, nous croyons, vous croyez, ils/elles croient
prendre: je prends, tu prends, il/elle prend, nous prenons, vous prenez, ils/elles prennent
comprendre: je comprends, tu comprends, il/elle comprend, nous comprenons, vous comprenez, ils/elles comprennent
vouloir: je veux, tu veux, il/elle veut, nous voulons, vous voulez, ils/elles veulent
lire: je lis, tu lis, il/elle lit, nous lisons, vous lisez, ils/elles lisent
écrire: j'écris, tu écris, il/elle écrit, nous écrivons, vous écrivez, ils/elles écrivent
connaître: je connais, tu connais, il/elle connaît, nous connaissons, vous connaissez, ils/elles connaissent
partir: je pars, tu pars, il/elle part, nous partons, vous partez, ils/elles partent
sortir: je sors, tu sors, il/elle sort, nous sortons, vous sortez, ils/elles sortent
venir: je viens, tu viens, il/elle vient, nous venons, vous venez, ils/elles viennent
voir: je vois, tu vois, il/elle voit, nous voyons, vous voyez, ils/elles voient
savoir: je sais, tu sais, il/elle sait, nous savons, vous savez, ils/elles savent
dire: je dis, tu dis, il/elle dit, nous disons, vous dites, ils/elles disent
sentir: je sens, tu sens, il/elle sent, nous sentons, vous sentez, ils/elles sentent
essere: io sono, tu sei, lui/lei è, noi siamo, voi siete, loro sono
avere: io ho, tu hai, lui/lei ha, noi abbiamo, voi avete, loro hanno
fare: io faccio, tu fai, lui/lei fa, noi facciamo, voi fate, loro fanno
dire: io dico, tu dici, lui/lei dice, noi diciamo, voi dite, loro dicono
andare: io vado, tu vai, lui/lei va, noi andiamo, voi andate, loro vanno
potere: io posso, tu puoi, lui/lei può, noi possiamo, voi potete, loro possono
vedere: io vedo, tu vedi, lui/lei vede, noi vediamo, voi vedete, loro vedono
sapere: io so, tu sai, lui/lei sa, noi sappiamo, voi sapete, loro sanno
venire: io vengo, tu vieni, lui/lei viene, noi veniamo, voi venite, loro vengono
dovere: io devo, tu devi, lui/lei deve, noi dobbiamo, voi dovete, loro devono
mettere: io metto, tu metti, lui/lei mette, noi mettiamo, voi mettete, loro mettono
amare: io amo, tu ami, lui/lei ama, noi amiamo, voi amate, loro amano
parlare: io parlo, tu parli, lui/lei parla, noi parliamo, voi parlate, loro parlano
trovare: io trovo, tu trovi, lui/lei trova, noi troviamo, voi trovate, loro trovano
prendere: io prendo, tu prendi, lui/lei prende, noi prendiamo, voi prendete, loro prendono
dare: io do, tu dai, lui/lei dà, noi diamo, voi date, loro danno
guardare: io guardo, tu guardi, lui/lei guarda, noi guardiamo, voi guardate, loro guardano
venire: io vengo, tu vieni, lui/lei viene, noi veniamo, voi venite, loro vengono
credere: io credo, tu credi, lui/lei crede, noi crediamo, voi credete, loro credono
volere: io voglio, tu vuoi, lui/lei vuole, noi vogliamo, voi volete, loro vogliono
leggere: io leggo, tu leggi, lui/lei legge, noi leggiamo, voi leggete, loro leggono
scrivere: io scrivo, tu scrivi, lui/lei scrive, noi scriviamo, voi scrivete, loro scrivono
conoscere: io conosco, tu conosci, lui/lei conosce, noi conosciamo, voi conoscete, loro conoscono
partire: io parto, tu parti, lui/lei parte, noi partiamo, voi partite, loro partono
uscire: io esco, tu esci, lui/lei esce, noi usciamo, voi uscite, loro escono
venirne: io vengo, tu vieni, lui/lei viene, noi veniamo, voi venite, loro vengono
sapere: io so, tu sai, lui/lei sa, noi sappiamo, voi sapete, loro sanno
dire: io dico, tu dici, lui/lei dice, noi diciamo, voi dite, loro dicono
sentire: io sento, tu senti, lui/lei sente, noi sentiamo, voi sentite, loro sentono
ser: eu sou, tu és, ele/ela é, nós somos, vós sois, eles/elas são
ter: eu tenho, tu tens, ele/ela tem, nós temos, vós tendes, eles/elas têm
fazer: eu faço, tu fazes, ele/ela faz, nós fazemos, vós fazeis, eles/elas fazem
dizer: eu digo, tu dizes, ele/ela diz, nós dizemos, vós dizeis, eles/elas dizem
ir: eu vou, tu vais, ele/ela vai, nós vamos, vós ides, eles/elas vão
poder: eu posso, tu podes, ele/ela pode, nós podemos, vós podeis, eles/elas podem
ver: eu vejo, tu vês, ele/ela vê, nós vemos, vós vedes, eles/elas veem
saber: eu sei, tu sabes, ele/ela sabe, nós sabemos, vós sabeis, eles/elas sabem
vir: eu venho, tu vens, ele/ela vem, nós vimos, vós vindes, eles/elas vêm
dar: eu dou, tu dás, ele/ela dá, nós damos, vós dais, eles/elas dão
falar: eu falo, tu falas, ele/ela fala, nós falamos, vós falais, eles/elas falam
ficar: eu fico, tu ficas, ele/ela fica, nós ficamos, vós ficais, eles/elas ficam
pôr: eu ponho, tu pões, ele/ela põe, nós pomos, vós pondes, eles/elas põem
amar: eu amo, tu amas, ele/ela ama, nós amamos, vós amais, eles/elas amam
parecer: eu pareço, tu pareces, ele/ela parece, nós parecemos, vós pareceis, eles/elas parecem
chegar: eu chego, tu chegas, ele/ela chega, nós chegamos, vós chegais, eles/elas chegam
começar: eu começo, tu começas, ele/ela começa, nós começamos, vós começais, eles/elas começam
deixar: eu deixo, tu deixas, ele/ela deixa, nós deixamos, vós deixais, eles/elas deixam
viver: eu vivo, tu vives, ele/ela vive, nós vivemos, vós viveis, eles/elas vivem
pensar: eu penso, tu pensas, ele/ela pensa, nós pensamos, vós pensais, eles/elas pensam
trazer: eu trago, tu trazes, ele/ela traz, nós trazemos, vós trazeis, eles/elas trazem
sentir: eu sinto, tu sentes, ele/ela sente, nós sentimos, vós sentis, eles/elas sentem
acabar: eu acabo, tu acabas, ele/ela acaba, nós acabamos, vós acabais, eles/elas acabam
conhecer: eu conheço, tu conheces, ele/ela conhece, nós conhecemos, vós conheceis, eles/elas conhecem
partir: eu parto, tu partes, ele/ela parte, nós partimos, vós partis, eles/elas partem
ficar: eu fico, tu ficas, ele/ela fica, nós ficamos, vós ficais, eles/elas ficam
ouvir: eu ouço, tu ouves, ele/ela ouve, nós ouvimos, vós ouvis, eles/elas ouvem
continuar: eu continuo, tu continuas, ele/ela continua, nós continuamos, vós continuais, eles/elas continuam
pegar: eu pego, tu pegas, ele/ela pega, nós pegamos, vós pegais, eles/elas pegam
passar: eu passo, tu passas, ele/ela passa, nós passamos, vós passais, eles/elas passam
encontrar: eu encontro, tu encontras, ele/ela encontra, nós encontramos, vós encontrais, eles/elas encontram


groß (grande)
klein (pequeño)
gut (bueno)
schlecht (malo)
schön (hermoso)
hässlich (feo)
lang (largo)
kurz (corto)
alt (viejo)
jung (joven)
schnell (rápido)
langsam (lento)
leicht (ligero/fácil)
schwer (pesado/difícil)
warm (caliente)
kalt (frío)
hoch (alto)
niedrig (bajo)
stark (fuerte)
schwach (débil)
sauber (limpio)
schmutzig (sucio)
hell (brillante)
dunkel (oscuro)
früh (temprano)
spät (tarde)
ruhig (tranquilo)
laut (ruidoso)
offen (abierto)
geschlossen (cerrado)
neu (nuevo)
altmodisch (anticuado)
teuer (caro)
billig (barato)
richtig (correcto)
falsch (incorrecto)
wichtig (importante)
unwichtig (no importante)
aktiv (activo)
passiv (pasivo)
interessant (interesante)
langweilig (aburrido)
schön (bonito)
hässlich (feo)
frisch (fresco)
trocken (seco)
jung (joven)
alt (viejo)
vorsichtig (cuidadoso)
unvorsichtig (descuidado)
reich (rico)
arm (pobre)
gesund (saludable)
krank (enfermo)
lecker (delicioso)
eklig (repugnante)
aktiv (activo)
müde (cansado)
glücklich (feliz)
traurig (triste)
wichtig (importante)
unwichtig (no importante)
scharf (afilado/picante)
stumpf (embotado)
freundlich (amable)
unfreundlich (desagradable)
hell (claro)
dunkel (oscuro)
klug (inteligente)
dumm (tonto)
großartig (maravilloso)
schrecklich (terrible)
einfach (simple)
kompliziert (complicado)
interessant (interesante)
langweilig (aburrido)
schön (hermoso)
hässlich (feo)
frisch (fresco)
faul (perezoso)
aktiv (activo)
lustig (divertido)
traurig (triste)
dünn (delgado)
dick (gordo)
neugierig (curioso)
gleichgültig (indiferente)
fleißig (trabajador)
faul (perezoso)
leise (silencioso)
laut (ruidoso)
pünktlich (puntual)
unpünktlich (impuntual)
schön (hermoso)
hässlich (feo)
stolz (orgulloso)
schüchtern (tímido)
ordentlich (ordenado)
unordentlich (desordenado)
sportlich (deportivo)

Table, Tavolo, Mesa, Tisch, Mesa, Table
Chair, Sedia, Cadeira, Stuhl, Silla, Chair
Bed, Letto, Cama, Bett, Cama, Bed
Sofa, Divano, Sofá, Sofa, Sofá, Sofa
Wardrobe, Armoire, Guarda-roupa, Kleiderschrank, Armario, Wardrobe

Desk, Scrivania, Escrivaninha, Schreibtisch, Escritorio, Desk
Bookcase, Bibliothèque, Libreria, Estante, Bücherregal, Librero, Bookcase
Dining table, Table à manger, Tavolo da pranzo, Mesa de jantar, Esstisch, Mesa de comedor, Dining table
Couch, Canapé, Divano, Sofá, Sofa, Sofá, Couch
Coffee table, Table basse, Tavolino da caffè, Mesa de centro, Couchtisch, Mesa de centro, Coffee table
Dresser, Commode, Cassettiera, Cômoda, Kommode, Cómoda, Dresser
Nightstand, Table de chevet, Comodino, Criado-mudo, Nachttisch, Mesilla de noche, Nightstand
Armchair, Fauteuil, Poltrona, Poltrona, Sessel, Sillón, Armchair
TV stand, Meuble TV, Mobile TV, Rack de TV, TV-Ständer, Mueble de TV, TV stand
Shelves, Étagères, Scaffali, Prateleiras, Regale, Estantes, Shelves

Maglietta, Camiseta, T-Shirt, Camiseta, T-shirt
Jeans, Calças jeans, Jeans, Vaqueros, Jeans
Vestito, Vestido, Kleid, Vestido, Dress
Gonna, Saia, Rock, Falda, Skirt
Maglione, Suéter, Pullover, Suéter, Sweater
Giacca, Casaco, Jacke, Chaqueta, Jacket
Cappotto, Casaco, Mantel, Abrigo, Coat
Camicia, Camisa, Hemd, Camisa, Shirt
Blusa, Blusa, Bluse, Blusa, Blouse
Pantaloni, Calças, Hose, Pantalones, Pants
Shorts, Calções, Shorts, Pantalones, Shorts
Abito, Vestido, Anzug, Traje, Suit
Cravatta, Gravata, Krawatte, Corbata, Tie
Calze, Meias, Socken, Calcetines, Socks
Scarpe, Sapatos, Schuhe, Zapatos, Shoes
Stivali, Botas, Stiefel, Botas, Boots
Cappello, Chapéu, Hut, Sombrero, Hat
Sciarpa, Cachecol, Schal, Bufanda, Scarf
Guanti, Luvas, Handschuhe, Guantes, Gloves
Biancheria, Roupa íntima, Unterwäsche, Ropa interior, Underwear

Pasta, Massa, Pasta, Pasta, Pasta
Pizza, Pizza, Pizza, Pizza, Pizza
Gelato, Gelado, Eis, Helado, Ice Cream
Espresso, Café expresso, Espresso, Café expreso, Espresso
Risotto, Risoto, Risotto, Risotto, Risotto
Cannoli, Cannoli, Cannoli, Cannoli, Cannoli
Tiramisu, Tiramisu, Tiramisu, Tiramisu, Tiramisu
Bruschetta, Bruschetta, Bruschetta, Bruschetta, Bruschetta
Croissant, Croissant, Croissant, Croissant, Croissant
Cioccolato, Chocolate, Schokolade, Chocolate, Chocolate
Paella, Paella, Paella, Paella, Paella
Sushi, Sushi, Sushi, Sushi, Sushi
Pretzel, Pretzel, Brezel, Pretzel, Pretzel
Empanada, Empanada, Empanada, Empanada, Empanada
Bratwurst, Linguiça, Bratwurst, Bratwurst, Bratwurst
Tapas, Petiscos, Tapas, Tapas, Tapas
Gelatina, Gelatina, Götterspeise, Gelatina, Jelly
Baguette, Baguete, Baguette, Baguette, Baguette
Cappuccino, Cappuccino, Cappuccino, Cappuccino, Cappuccino
Goulash, Goulash, Gulasch, Gulash, Goulash

Sedia, Cadeira, Stuhl, Silla, Chair
Tavolo, Mesa, Tisch, Mesa, Table
Divano, Sofá, Sofa, Sofá, Sofa
Armadio, Armário, Schrank, Armario, Wardrobe
Letto, Cama, Bett, Cama, Bed
Scrivania, Escrivaninha, Schreibtisch, Escritorio, Desk
Scaffale, Estante, Regal, Estantería, Shelf
Comò, Cômoda, Kommode, Cómoda, Dresser
Tavolino, Mesinha, Beistelltisch, Mesita, Coffee Table
Poltrona, Poltrona, Sessel, Sillón, Armchair
Lampada, Lâmpada, Lampe, Lámpara, Lamp
Specchio, Espelho, Spiegel, Espejo, Mirror
Credenza, Aparador, Sideboard, Aparador, Sideboard
Sgabello, Banqueta, Hocker, Taburete, Stool
Cassettiera, Cômoda, Schubladenschrank, Cajonera, Chest of Drawers
Vetrina, Vitrine, Vitrine, Vitrina, Display Cabinet
Scaffale, Prateleira, Regal, Estante, Bookshelf
Tappeto, Tapete, Teppich, Alfombra, Carpet
Porta, Porta, Tür, Puerta, Door
Cucina, Cozinha, Küche, Cocina, Kitchen


Aeroporto, Aeroporto, Flughafen, Aeropuerto, Airport
Hotel, Hotel, Hotel, Hotel, Hotel
Passaporto, Passaporte, Reisepass, Pasaporte, Passport
Biglietto, Bilhete, Fahrkarte, Billete, Ticket
Bagaglio, Bagagem, Gepäck, Equipaje, Luggage
Volo, Voo, Flug, Vuelo, Flight
Noleggio auto, Aluguer de carro, Autovermietung, Alquiler de coche,Car rental
Stazione, Estação, Bahnhof, Estación, Station
Mappa, Mapa, Karte, Mapa, Map
Destinazione, Destino, Reiseziel, Destino, Destination
Turista, Turista, Tourist, Turista, Tourist
Valigia, Mala, Koffer, Maleta, Suitcase
Spiaggia, Praia, Strand, Playa, Beach
Traghetto, Ferryboat, Fähre, Ferry, Ferry
Navigazione, Navegação, Navigation, Navegación, Navigation
Itinerario, Itinerário, Reiseroute, Itinerario, Itinerary
Prenotazione, Reserva, Reservierung, Reserva, Reservation
Escursione, Excursão, Ausflug, Excursión, Excursion
Guida, Guia, Reiseführer, Guía, Guide
Gita, Passeio, Ausflug, Excursión, Trip/Outing


Madre, Mãe, Mutter, Madre, Mother
Padre, Pai, Vater, Padre, Father
Figlio, Filho, Sohn, Hijo, Son
Figlia, Filha, Tochter, Hija, Daughter
Fratello, Irmão, Bruder, Hermano, Brother
Sorella, Irmã, Schwester, Hermana, Sister
Nonno, Avô, Großvater, Abuelo, Grandfather
Nonna, Avó, Großmutter, Abuela, Grandmother
Zio, Tio, Onkel, Tío, Uncle
Zia, Tia, Tante, Tía, Aunt
Cugino, Primo, Cousin (m), Primo, Cousin (male)
Cugina, Prima, Cousin (f), Prima, Cousin (female)
Nipote (m), Sobrinho, Neffe, Sobrino, Nephew
Nipote (f), Sobrinha, Nichte, Sobrina, Niece
Suocero, Sogro, Schwiegervater, Suegro, Father-in-law
Suocera, Sogra, Schwiegermutter, Suegra, Mother-in-law
Genero, Genro, Schwiegersohn, Yerno, Son-in-law
Nuora, Nora, Schwiegertochter, Nuera, Daughter-in-law
Suocero, Sogro, Schwiegervater, Suegro, Father-in-law
Suocera, Sogra, Schwiegermutter, Suegra, Mother-in-law


Pane, Pão, Brot, Pan, Bread
Latte, Leite, Milch, Leche, Milk
Uova, Ovos, Eier, Huevos, Eggs
Formaggio, Queijo, Käse, Queso, Cheese
Frutta, Frutas, Obst, Fruta, Fruit
Verdura, Legumes, Gemüse, Verduras, Vegetables
Carne, Carne, Fleisch, Carne, Meat
Pollo, Frango, Hähnchen, Pollo, Chicken
Pesce, Peixe, Fisch, Pescado, Fish
Riso, Arroz, Reis, Arroz, Rice
Pasta, Massa, Nudeln, Pasta, Pasta
Patate, Batatas, Kartoffeln, Patatas, Potatoes
Zucchero, Açúcar, Zucker, Azúcar, Sugar
Sale, Sal, Salz, Sal, Salt
Olio, Óleo, Öl, Aceite, Oil
Aceto, Vinagre, Essig, Vinagre, Vinegar
Salsa, Molho, Soße, Salsa, Sauce
Yogurt, Iogurte, Joghurt, Yogur, Yogurt
Biscotti, Biscoitos, Kekse, Galletas, Biscuits/Cookies
Caffè, Café, Kaffee, Café, Coffee


Cucina, Cozinha, Küche, Cocina, Kitchen
Soggiorno, Sala de estar, Wohnzimmer, Sala de estar, Living Room
Camera da letto, Quarto, Schlafzimmer, Dormitorio, Bedroom
Bagno, Banheiro, Badezimmer, Baño, Bathroom
Studio, Escritório, Arbeitszimmer, Estudio, Study/Office
Sala da pranzo, Sala de jantar, Esszimmer, Comedor, Dining Room
Lavanderia, Lavanderia, Waschküche, Lavandería, Laundry Room
Soggiorno, Sala, Wohnzimmer, Sala, Lounge
Garage, Garagem, Garage, Garaje, Garage
Giardino, Jardim, Garten, Jardín, Garden
Balcone, Varanda, Balkon, Balcón, Balcony
Cantina, Adega, Keller, Bodega, Cellar
Corridoio, Corredor, Flur, Pasillo, Hallway/Corridor
Terrazza, Terraço, Terrasse, Terraza, Terrace
Mansarda, Sótão, Dachgeschoss, Buhardilla, Attic
Veranda, Varanda, Veranda, Terraza, Veranda
Palestra, Academia, Fitnessraum, Gimnasio, Gym
Sala giochi, Sala de jogos, Spielzimmer, Sala de juegos, Game Room
Studio musicale, Estúdio de música, Musikzimmer, Estudio de música, Music Studio
Sauna, Sauna, Sauna, Sauna, Sauna

Negozio, Loja, Geschäft, Tienda, Store
Banca, Banco, Bank, Banco, Bank
Lavanderia, Lavandaria, Wäscherei, Lavandería, Laundry
Ristorante, Restaurante, Restaurant, Restaurante, Restaurant
Bar, Bar, Bar, Bar, Bar
Pasticceria, Pastelaria, Konditorei, Pastelería, Pastry Shop
Salone di bellezzaSalão de beleza, Schönheitssalon, Salón de belleza, Beauty Salon
Supermercato, Supermercado, Supermarkt, Supermercado, Supermarket
Farmacia, Farmácia, Apotheke, Farmacia, Pharmacy
Libreria, Livraria, Buchhandlung, Librería, Bookstore
Panetteria, Padaria, Bäckerei, Panadería, Bakery
Hotel, Hotel, Hotel, Hotel, Hotel
Parrucchiere, Cabeleireiro, Friseur, Peluquería, Hair Salon
Ottica, Ótica, Optiker, Óptica, Optician
Palestra, Academia, Fitnessstudio, Gimnasio, Gym
Lavaggio auto, Lavagem de carro, Autowäsche, Lavado de coches, Car Wash
Gioielleria, Joalharia, Schmuckgeschäft, Joyería, Jewelry Store
Edicola, Banca de jornal, Zeitungskiosk, Quiosco, Newsstand
Stazione di servizioPosto de gasolinaTankstelle, Estación de servicio, Gas Station
Elettronica, Eletrônica, Elektronik, Electrónica, Electronics Store


Rosso, Vermelho, Rot, Rojo, Red
Blu, Azul, Blau, Azul, Blue
Giallo, Amarelo, Gelb, Amarillo, Yellow
Verde, Verde, Grün, Verde, Green
Arancione, Laranja, Orange, Naranja, Orange
Viola, Roxo, Violett, Morado, Purple
Rosa, Rosa, Rosa, Rosa, Pink
Nero, Preto, Schwarz, Negro, Black
Bianco, Branco, Weiß, Blanco, White
Grigio, Cinzento, Grau, Gris, Gray
Marrone, Castanho, Braun, Marrón, Brown
Beige, Bege, Beige, Beige, Beige
Oro, Ouro, Gold, Oro, Gold
Argento, Prata, Silber, Plata, Silver
Bronzo, Bronze, Bronze, Bronce, Bronze
Indaco, Índigo, Indigo, Índigo, Indigo
Turchese, Turquesa, Türkis, Turquesa, Turquoise
Ciano, Ciano, Cyan, Cian, Cyan
Magenta, Magenta, Magenta, Magenta, Magenta
Avorio, Marfim, Elfenbein, Marfil, Ivory

Grande, Grande, Groß, Grande, Big
Piccolo, Pequeno, Klein, Pequeño, Small
Vecchio, Velho, Alt, Viejo, Old
Nuovo, Novo, Neu, Nuevo, New
Caldo, Quente, Warm, Caliente, Hot
Freddo, Frio, Kalt, Frío, Cold
Allegro, Alegre, Fröhlich, Alegre, Happy
Triste, Triste, Traurig, Triste, Sad
Buono, Bom, Gut, Bueno, Good
Cattivo, Mau, Schlecht, Malo, Bad
Forte, Forte, Stark, Fuerte, Strong
Debole, Fraco, Schwach, Débil, Weak
Bello, Bonito, Schön, Hermoso, Beautiful
Brutto, Feio, Hässlich, Feo, Ugly
Intelligente, Inteligente, Intelligent, Inteligente, Intelligent
Stupido, Estúpido, Dumm, Estúpido, Stupid
Paziente, Paciente, Geduldig, Paciente, Patient
Impaziente, Impaciente, Ungeduldig, Impaciente, Impatient
Gentile, Gentil, Freundlich, Amable, Kind
Cattivo, Mau, Schlecht, Malo, Mean

Mangiare, Comer, Essen, Comer, Eat
Bere, Beber, Trinken, Beber, Drink
Dormire, Dormir, Schlafen, Dormir, Sleep
Lavorare, Trabalhar, Arbeiten, Trabajar, Work
Studiare, Estudar, Studieren, Estudiar, Study
Parlare, Falar, Sprechen, Hablar, Speak
Scrivere, Escrever, Schreiben, Escribir, Write
Leggere, Ler, Lesen, Leer, Read
Guardare, Olhar, Schauen, Mirar, Watch
Ascoltare, Ouvir, Hören, Escuchar, Listen
Fare, Fazer, Machen, Hacer, Do
Vedere, Ver, Sehen, Ver, See
Sentire, Sentir, Fühlen, Sentir, Feel
Capire, Entender, Verstehen, Entender, Understand
Parlare, Falar, Sprechen, Hablar, Talk
Credere, Acreditar, Glauben, Creer, Believe
Amare, Amar, Lieben, Amar, Love
Camminare, Caminhar, Gehen, Caminar, Walk
Correre, Correr, Rennen, Correr, Run
Nuotare, Nadar, Schwimmen, Nadar, Swim
Ballare, Dançar, Tanzen, Bailar, Dance
Cantare, Cantar, Singen, Cantar, Sing
Viaggiare, Viajar, Reisen, Viajar, Travel
Pianificare, Planejar, Planen, Planificar, Plan
Guidare, Dirigir, Fahren, Conducir, Drive
Guardare, Ver, Anschauen, Mirar, Look
Prendere, Pegar, Nehmen, Tomar, Take
Iniziare, Começar, Anfangen, Empezar, Start
Finire, Terminar, Beenden, Terminar, Finish
Aiutare, Ajudar, Helfen, Ayudar, Help
Piacere, Gostar, Gefallen, Gustar, Like


Casa, Casa, Haus, Casa, House
Uomo, Homem, Mann, Hombre, Man
Donna, Mulher, Frau, Mujer, Woman
Bambino, Criança, Kind, Niño, Child
Cane, Cão, Hund, Perro, Dog
Gatto, Gato, Katze, Gato, Cat
Amico, Amigo, Freund, Amigo, Friend
Famiglia, Família, Familie, Familia, Family
Scuola, Escola, Schule, Escuela, School
Lavoro, Trabalho, Arbeit, Trabajo, Work
Libro, Livro, Buch, Libro, Book
Auto, Carro, Auto, Coche, Car
Tavolo, Mesa, Tisch, Mesa, Table
Città, Cidade, Stadt, Ciudad, City
Mare, Mar, Meer, Mar, Sea
Montagna, Montanha, Berg, Montaña, Mountain
Giardino, Jardim, Garten, Jardín, Garden
Luce, Luz, Licht, Luz, Light
Sole, Sol, Sonne, Sol, Sun
Luna, Lua, Mond, Luna, Moon
Musica, Música, Musik, Música, Music
Film, Filme, Film, Película, Film/Movie
Cibo, Comida, Essen, Comida, Food
Acqua, Água, Wasser, Agua, Water
Vino, Vinho, Wein, Vino, Wine
Frutta, Fruta, Obst, Fruta, Fruit
Verdura, Verdura, Gemüse, Verdura, Vegetable
Vestito, Roupa, Kleidung, Ropa, Clothing
Scarpe, Sapatos, Schuhe, Zapatos, Shoes
Borsa, Bolsa, Tasche, Bolso, Bag
Orologio, Relógio, Uhr, Reloj, Watch/Clock

Es ist unmöglich, diese Aufgabe alleine zu lösen. (It is impossible to solve this task alone.)
Es erscheint mir unmöglich, dass er sein Versprechen halten kann. (It seems impossible to me that he can keep his promise.)
Es ist unmöglich, die Zukunft genau vorherzusagen. (It is impossible to predict the future accurately.)
Es ist unmöglich, den Verlust eines geliebten Menschen vollständig zu überwinden. (It is impossible to fully overcome the loss of a loved one.)
Es ist mir unmöglich, mich auf diese laute Umgebung zu konzentrieren. (It is impossible for me to concentrate in this noisy environment.)
Es ist unmöglich, alle Menschen zufriedenzustellen. (It is impossible to satisfy everyone.)
Es ist unmöglich, ohne ausreichende Vorbereitung eine Prüfung zu bestehen. (It is impossible to pass an exam without sufficient preparation.)
Es ist unmöglich, dass sie das in so kurzer Zeit geschafft hat. (It is impossible that she has accomplished that in such a short time.)
Es ist unmöglich, die Vergangenheit ungeschehen zu machen. (It is impossible to undo the past.)
Es ist unmöglich, das Rätsel ohne Hinweise zu lösen. (It is impossible to solve the puzzle without clues.)

Es ist möglich, dass er morgen kommt. (It is possible that he will come tomorrow.)
Ich werde mein Bestes tun, um dir zu helfen, wenn es möglich ist. (I will do my best to help you if it is possible.)
Es ist möglich, diese Aufgabe rechtzeitig abzuschließen. (It is possible to complete this task on time.)
Wir müssen alle möglichen Optionen in Betracht ziehen. (We need to consider all possible options.)
Ist es möglich, den Termin zu verschieben? (Is it possible to reschedule the appointment?)
Es ist nicht möglich, alle Erwartungen zu erfüllen. (It is not possible to fulfill all expectations.)
Wir haben verschiedene Möglichkeiten, wie wir vorgehen können. (We have different possibilities of how we can proceed.)
Es ist wichtig, alle möglichen Risiken zu berücksichtigen. (It is important to consider all possible risks.)
Es ist möglich, dass es morgen regnen wird. (It is possible that it will rain tomorrow.)
Ich werde so schnell wie möglich antworten. (I will reply as soon as possible.)


`;	
