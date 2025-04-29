import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Pages.css';

const Practice = () => {
  return (
    <div className="practice-page coming-soon">
      <div className="coming-soon-message">
        <h1>🚧 Practice Mode Coming Soon!</h1>
        <p>We're cooking up something cool. Stay tuned 👀</p>
        <Link to="/learn">
          <button className="back-button">← Back to Learn</button>
        </Link>
      </div>
    </div>
  );
};

export default Practice;
