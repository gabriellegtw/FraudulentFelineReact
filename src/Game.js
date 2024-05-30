import { useState } from 'react';

function Game() {
  const [speaking, setSpeaking] = useState("");

  return (
    <div className="game-container">
      <h1>Welcome to the Game!</h1>
      <p>{speaking}</p>
      <button onClick = {() => {
        const catSpeak = "yap yap";
        setSpeaking(catSpeak);
      }}>microphone talk</button>
      <button >checklist</button>
      <button>phone</button>
      <button>case file</button>
    </div>
  );
}

export default Game;

