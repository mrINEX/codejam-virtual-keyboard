function speechInput() {
  window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
  const recognition = new window.SpeechRecognition();
  // recognition.interimResults = true;
  recognition.maxAlternatives = 1;
  recognition.continuous = true;
  recognition.lang = localStorage.getItem('lang') || 'en';
  return recognition;
}

module.exports = speechInput;
