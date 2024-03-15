import './App.css';

const drumPads = [
  {
    id: 'Q',
    src: '/src/assets/Heater-1.mp3',
  },
  {
    id: 'W',
    src: '/src/assets/Heater-2.mp3',
  },
  {
    id: 'E',
    src: '/src/assets/Heater-3.mp3',
  },
  {
    id: 'A',
    src: '/src/assets/Heater-4_1.mp3',
  },
  {
    id: 'S',
    src: '/src/assets/Heater-6.mp3',
  },
  {
    id: 'D',
    src: '/src/assets/Dsc_Oh.mp3',
  },
  {
    id: 'Z',
    src: '/src/assets/Kick_n_Hat.mp3',
  },
  {
    id: 'X',
    src: '/src/assets/RP4_KICK_1.mp3',
  },
  {
    id: 'C',
    src: '/src/assets/Cev_H2.mp3',
  },
];

const playAudio = (id) => {
  const audio = document.getElementById(id);
  audio.play();
  console.log(audio);
};

function App() {
  return (
    <div id="drum-machine">
      <div id="display"></div>
      <div id="drum-pads">
        {drumPads.map((drumPad) => (
          <button
            key={drumPad.id}
            className="drum-pad"
            id={drumPad.src}
            onClick={() => {
              playAudio(drumPad.id);
            }}
          >
            {drumPad.id}
            <audio className="clip" id={drumPad.id} src={drumPad.src}></audio>
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
