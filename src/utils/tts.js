// Text-to-Speech audio helper for Nepali and English/Malayalam pronunciations

export const playAudio = (text, lang = 'ne-NP') => {
  if (!('speechSynthesis' in window)) {
    alert("Speech synthesis is not supported in this browser.");
    return;
  }

  // Cancel any ongoing speech
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 0.85; // Slightly slower for clear learning pronunciation
  utterance.pitch = 1.0;

  const voices = window.speechSynthesis.getVoices();
  
  // Try to find Nepali voice, fallback to Hindi (hi-IN) which shares Devanagari phonetics accurately
  let targetVoice = voices.find(v => v.lang.includes('ne') || v.lang.includes('NP'));
  if (!targetVoice) {
    targetVoice = voices.find(v => v.lang.includes('hi') || v.lang.includes('IN'));
  }
  if (!targetVoice && lang === 'en') {
    targetVoice = voices.find(v => v.lang.includes('en'));
  }

  if (targetVoice) {
    utterance.voice = targetVoice;
  }
  utterance.lang = lang === 'ne' ? 'hi-IN' : lang;

  window.speechSynthesis.speak(utterance);
};
