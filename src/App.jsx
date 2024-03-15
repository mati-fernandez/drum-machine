import './App.css';

const drumPads = [
  {
    id: 'Q',
    src: 'assets/Heater-1.mp3',
  },
  {
    id: 'W',
    src: 'assets/Heater-2.mp3',
  },
  {
    id: 'E',
    src: 'assets/Heater-3.mp3',
  },
  {
    id: 'A',
    src: 'assets/Heater-4.mp3',
  },
  {
    id: 'S',
    src: 'assetsHeater-6.mp3',
  },
  {
    id: 'D',
    src: 'assets/Dsc_Oh.mp3',
  },
  {
    id: 'Z',
    src: 'assets/Kick_n_Hat.mp3',
  },
  {
    id: 'X',
    src: 'assets/RP4_KICK_1.mp3',
  },
  {
    id: 'C',
    src: 'assets/Cev_H2.mp3',
  },
];

function App() {
  return (
    <div id="drum-machine">
      <div id="display"></div>
      <div className="drum-pads">
        {drumPads.map((drumPad) => {
          <button className="drum-pad" id={drumPad.id}>
            {drumPad.id}
          </button>;
        })}
      </div>
    </div>
  );
}

export default App;
