const DictCookieName = 'workset001';

function startup()
{
	let langCodes = window.location.search;
	
	if (langCodes.length == 0)
	{
		langCodes = "s";
	}
	langCodes = langCodes.toLowerCase();

	if (langCodes.includes('*'))
	{
		langCodes += "-bcdef--ijklmnopqrstuvwxyz0123456789";
		// all except agh
	}
	
	if (langCodes.includes('z'))
	{
		langCodes += "sq dfipu elr";// all west eur
	}
	
	if (langCodes.includes('a')) {data.dict = data.dict.concat(arabic);} 
	// running out of letters...
	if (langCodes.includes('b')) {data.dict = data.dict.concat(hungarian);} 
	if (langCodes.includes('c')) {data.dict = data.dict.concat(czech);} 
	if (langCodes.includes('d')) {data.dict = data.dict.concat(german);} 
	if (langCodes.includes('e')) {data.dict = data.dict.concat(esperanto);} 
	if (langCodes.includes('f')) {data.dict = data.dict.concat(french);} 
	if (langCodes.includes('g')) {data.dict = data.dict.concat(greek);} 
	if (langCodes.includes('h')) {data.dict = data.dict.concat(hebrew);} 
	if (langCodes.includes('i')) {data.dict = data.dict.concat(italian);} 
	if (langCodes.includes('l')) {data.dict = data.dict.concat(latin);} 
	if (langCodes.includes('m')) {data.dict = data.dict.concat(malay);} 
	if (langCodes.includes('n')) {data.dict = data.dict.concat(indonesian);} 
	if (langCodes.includes('o')) {data.dict = data.dict.concat(polish);} 
	if (langCodes.includes('p')) {data.dict = data.dict.concat(portuguese);} 
	if (langCodes.includes('q')) 
	{
		// loadSynonyms -- moved to the end 
//		loadSynonyms(data.dict, spanishSynonims);
		data.dict = data.dict.concat(spanishQ);
	}
	if (langCodes.includes('r')) {data.dict = data.dict.concat(romanian);} 
	if (langCodes.includes('s')) 
	{	
		data.dict = data.dict.concat(spanish);
		data.dict = data.dict.concat(spanish001);
	}		
	if (langCodes.includes('t')) {data.dict = data.dict.concat(turkish);} 
	if (langCodes.includes('u')) {data.dict = data.dict.concat(dutch);} 
	if (langCodes.includes('v')) {data.dict = data.dict.concat(vietnamese);} 
	if (langCodes.includes('x')) {data.dict = data.dict.concat(tagalog);} 
	if (langCodes.includes('y')) {data.dict = data.dict.concat(interlingua);} 

	if (langCodes.includes('0')) {data.dict = data.dict.concat(lang_0);} 

	
	// remove dupes
	for (let i=0; i<data.dict.length; ++i)
	{
		if (data.dict[i].length != 2)
		{
			console.log('format: ' + data.dict[i])
		}
		if (data.dict[i].length != 2
		|| data.dict[i][0].toLowerCase().trim() 
				=== data.dict[i][1].toLowerCase().trim()
		|| data.dict[i][0] === ""
		|| data.dict[i][1] === ""
		)
		{
			let tmp = data.dict.splice(i, 1);
			i--;
			console.log('skip: ' + tmp)
		}
	}

	if (langCodes.includes('-')) // invert the word pairs if requested
	{
		for (let arr of data.dict)
		{
			[arr[0], arr[1]] = [arr[1], arr[0]];
		}
	}

	if (langCodes.includes('+')) // dupe the word pairs if requested
	{
		const N = data.dict.length;
		for (let i=0; i<N; ++i)
		{
			// push inverted pair
			data.dict.push([data.dict[i][1], data.dict[i][0]]);
		}
	}
	
	if (langCodes.includes('q')) 
	{
		// synonyms are already inverted and duped, so had to move
		// this line to the end
		loadSynonyms(data.dict, spanishSynonims);
	} 
	
	startup1();

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

