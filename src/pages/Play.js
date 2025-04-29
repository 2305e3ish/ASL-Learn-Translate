import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Pages.css';

const Play = () => {
  return (
    <div className="page play-page coming-soon">
      <div className="coming-soon-message">
        <div className="icon-bounce">🎮</div>
        <h1>ASL Games Coming Soon!</h1>
        <p>Hold tight, fun stuff is loading up!</p>
        <Link to="/">
          <button className="back-button">← Back to Home</button>
        </Link>
      </div>
    </div>
  );
};

export default Play;
