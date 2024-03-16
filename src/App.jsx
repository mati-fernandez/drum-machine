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
      src: 'Heater-1.mp3',
      name: 'Heater 1',
    },
    {
      id: 'W',
      src: 'Heater-2.mp3',
      name: 'Heater 2',
    },
    {
      id: 'E',
      src: 'Heater-3.mp3',
      name: 'Heater 3',
    },
    {
      id: 'A',
      src: 'Heater-4_1.mp3',
      name: 'Heater 4',
    },
    {
      id: 'S',
      src: 'Heater-6.mp3',
      name: 'Clap',
    },
    {
      id: 'D',
      src: 'Dsc_Oh.mp3',
      name: 'Open HH',
    },
    {
      id: 'Z',
      src: 'Kick_n_Hat.mp3',
      name: "Kick n' Hat",
    },
    {
      id: 'X',
      src: 'RP4_KICK_1.mp3',
      name: 'Kick',
    },
    {
      id: 'C',
      src: 'Cev_H2.mp3',
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
