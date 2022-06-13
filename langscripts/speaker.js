let voices = [];

function listVoices(lang) 
{
  voices = window.speechSynthesis.getVoices();
  if (voices.length > 0)
  {
    //console.log(voices);
    const br = document.createElement("br");
    document.body.appendChild(br);

    const voiceSelect = document.createElement("select");
    voiceSelect.id = "voice_select";
    document.body.appendChild(voiceSelect);

    for (let i = 0; i < voices.length ; ++i) 
    {
      const voice = voices[i];
      if (lang.length == 0 || voice.lang.startsWith(lang))
      {
        var option = document.createElement('option');
        option.textContent = voice.name + ' (' + voice.lang + ')';

        // if(voice.default) {
        //   option.textContent += ' -- DEFAULT';
        // }
		if (voice.lang.indexOf('US')>=0)
		{
			option.setAttribute ("selected", "selected");
		}
		
        option.setAttribute('data-name', voice.name);
        voiceSelect.appendChild(option);
    }
  }

  }
  else
  {
    setTimeout(listVoices, 500, lang);
  }
}

// = s.replaceAll("_", "'")
function hack001(s)
{
	let res = s;
	for (let i=0; i<20; ++i)
	{
		res = res.replace("_", "'");
	}
	return res;
}

// = s.replaceAll(' ', ', ');
function hack002(s)
{
	let res = s;
	for (let i=0; i<20; ++i)
	{
		res = res.replace(" ", "_");
	}
	
	for (let i=0; i<20; ++i)
	{
		res = res.replace("_", ", ");
	}
	
	return res;
}

function say(x, brks)
{
  //x = x.replaceAll("_", "'");
  x = hack001(x);
  let txt = x;
  if (brks)
  {
    //txt = txt.replaceAll(' ', ', ');
	txt = hack002(txt);
  }
  console.log(txt);
  const utterThis = new SpeechSynthesisUtterance(txt);
  const voiceSelect = document.getElementById('voice_select');
  const selectedOption = voiceSelect&&(voiceSelect.selectedOptions[0] || voiceSelect.options[0]) || null;

  if (selectedOption)
  {
    for (let i=0; i<voices.length; ++i)
    {
      if (voices[i].name === selectedOption.getAttribute('data-name'))
      {
        utterThis.voice = voices[i];
        break;
      }
    }
	utterThis.lang = utterThis.voice.lang; // required on Android
  }
  speechSynthesis.speak(utterThis);
}

function sayIn(lang, x)
{
  x = x.replaceAll("_", "\'");
  const utterThis = new SpeechSynthesisUtterance(x);

  for (let i=0; i<voices.length; ++i)
  {
    if (voices[i].lang.startsWith(lang))
    {
      utterThis.voice = voices[i];
      break;
    }
  }
  utterThis.lang = utterThis.voice.lang; // required on Android
  speechSynthesis.speak(utterThis);
}

function sayBrk(txt)
{
	//console.log('sayBrk ' + txt);
	say(txt, document.getElementById('brk1').checked);
}
