import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [played, setPlayed] = useState('Drum Machine 🥁');
  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      playAudio(e.key.toUpperCase());
    });
  }, []);

  const drumPads = [
    {
      id: 'Q',
      src: 'src/assets/Heater-1.mp3',
      name: 'Heater 1',
    },
    {
      id: 'W',
      src: 'src/assets/Heater-2.mp3',
      name: 'Heater 2',
    },
    {
      id: 'E',
      src: 'src/assets/Heater-3.mp3',
      name: 'Heater 3',
    },
    {
      id: 'A',
      src: 'src/assets/Heater-4_1.mp3',
      name: 'Heater 4',
    },
    {
      id: 'S',
      src: 'src/assets/Heater-6.mp3',
      name: 'Clap',
    },
    {
      id: 'D',
      src: 'src/assets/Dsc_Oh.mp3',
      name: 'Open HH',
    },
    {
      id: 'Z',
      src: 'src/assets/Kick_n_Hat.mp3',
      name: "Kick n' Hat",
    },
    {
      id: 'X',
      src: 'src/assets/RP4_KICK_1.mp3',
      name: 'Kick',
    },
    {
      id: 'C',
      src: 'src/assets/Cev_H2.mp3',
      name: 'Closed HH',
    },
  ];

  const playAudio = (id) => {
    const audio = document.getElementById(id);
    audio.play();
    const sound = drumPads.find((e) => e.id === id);
    setPlayed(sound.name);
  };

  return (
    <div id="drum-machine">
      <div id="display">{played}</div>
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
