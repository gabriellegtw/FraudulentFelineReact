import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Game from './Game';
import Winpage from './Winpage';
import Losepage from './Losepage';
import './App.css'; // For global styling

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/Winpage" element={<Winpage />} />
        <Route path="/Losepage" element={<Losepage />} />
      </Routes>
    </Router>
  );
}

export default App;

