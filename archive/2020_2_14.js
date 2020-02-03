
// TIP: When analyzing AudioContext,
// You have 2 different frequencies
// you can use to create audio
// visualizations

const AudioContext = (window.AudioContext || window.webkitAudioContext);
const audioCtx = new AudioContext();
const el = document.getElementById('audio');
const track = audioCtx.createMediaElementSource(el);

// Create audio analyzer
const analyzer = audioCtx.createAnalyser();
analyzer.fftSize = 128 // Give 64 total elements to play with

track
  .connect(analyzer) // add analyzer
  .connect(audioCtx.destination) // Play music through speakers
const analyzerData = new Uint8Array(analyzer.frequencyBinCount);

// This retrieves bass/mid/treble data.
// starts with lower frequencies (bass) and works up to higher (treble)
analyzer.getByteFrequencyData(analyzerData);

// This retrieves waveform data (think oscilloscope) valuese
analyzer.getByteTimeDomainData(analyzerData);



