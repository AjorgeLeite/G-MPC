import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [clickedPad, setClickedPad] = useState("DRUM MACHINE");

  function setPadName(key) {
    const sound = sounds.find((sound) => sound.text === key);
    if (sound) {
      setClickedPad(sound.name);
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      // console.log(e.key.toUpperCase())
      handleDrum(e.key.toUpperCase());
      setPadName(e.key.toUpperCase());
    });
  }, []);

  function handleDrum(pad) {
    const audio = document.getElementById(pad);
    console.log(pad);
    audio.play();
    setPadName(pad);
  }

  const sounds = [
    {
      keyCode: 81,
      text: "Q",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
      name: "Heater-1",
    },
    {
      keyCode: 87,
      text: "W",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
      name: "Heater-2",
    },
    {
      keyCode: 69,
      text: "E",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
      name: "Heater-3",
    },
    {
      keyCode: 65,
      text: "A",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
      name: "Heater-4",
    },
    {
      keyCode: 83,
      text: "S",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
      name: "Clap",
    },
    {
      keyCode: 68,
      text: "D",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
      name: "Open-HH",
    },
    {
      keyCode: 90,
      text: "Z",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
      name: "Kick-n-Hat",
    },
    {
      keyCode: 88,
      text: "X",
      src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
      name: "kick",
    },
    {
      keyCode: 67,
      text: "C",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
      name: "Closed-HH",
    },
  ];

  return (
    <>
      <div className="drum-machine">
        <div className="drumpad">
          {sounds.map((sound) => (
            <div
              onClick={() => handleDrum(sound.text)}
              className="btn--drumpad"
              id={sound.src}
              key={sound.src}
            >
              {sound.text}
              <audio src={sound.src} id={sound.text}></audio>
            </div>
          ))}
        </div>

        <div className="display">{clickedPad}</div>
      </div>
    </>
  );
}

export default App;
