let voices = [];

function list() 
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
      if (voice.lang.startsWith('en-'))
      {
        var option = document.createElement('option');
        option.textContent = voice.name + ' (' + voice.lang + ')';

        // if(voice.default) {
        //   option.textContent += ' -- DEFAULT';
        // }
        option.setAttribute('data-name', voice.name);
        voiceSelect.appendChild(option);
    }
  }

  }
  else
  {
    setTimeout(list, 500);
  }
}

function say(x, brks)
{
  let txt = x;
  if (brks)
  {
    txt = txt.replaceAll(' ', ', ');
  }
  console.log(txt);
  const utterThis = new SpeechSynthesisUtterance(txt);
  const voiceSelect = document.getElementById('voice_select');
  const selectedOption = voiceSelect.selectedOptions[0] || voiceSelect.options[0];

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
  }
  speechSynthesis.speak(utterThis);
}

function sayIn(lang, x)
{
  const utterThis = new SpeechSynthesisUtterance(x);

  for (let i=0; i<voices.length; ++i)
  {
    if (voices[i].lang.startsWith(lang + '-'))
    {
      utterThis.voice = voices[i];
      break;
    }
  }

  speechSynthesis.speak(utterThis);
}

list();

