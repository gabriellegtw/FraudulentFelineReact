import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // For styling

function Home() {
  return (
    <div className="home-container">
      <h1 className="title">Fraudulent Felines</h1>
      <p className="subtitle">be the purr-fect detective</p>
      <Link to="/game" className="start-button">Start</Link>
    </div>
  );
}

export default Home;
