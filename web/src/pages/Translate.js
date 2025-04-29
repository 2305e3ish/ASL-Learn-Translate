import React, { useState } from 'react';
import '../styles/Pages.css';

const Translate = () => {
  const [englishText, setEnglishText] = useState('');
  const [aslOutput, setAslOutput] = useState('');

  const handleTranslate = () => {
    // Example: Set ASL output (replace with your API call)
    setAslOutput("ASL output will appear here.");
  };

  return (
    <div className="page translate-page container"  style={{ fontFamily: 'Arial Rounded MT' }}>
      <h1>Translate ASL</h1>
      <div className="input-group"  style={{ fontFamily: 'Arial Rounded MT' }}>
        <label>English:</label>
        <textarea 
          value={englishText}
          onChange={(e) => setEnglishText(e.target.value)}
          placeholder="Enter English text here..."
        />
      </div>
      {/* Only one API container to display ASL output */}
      <div className="api-container" style={{ fontFamily: 'Arial Rounded MT' }}>
        {aslOutput || "ASL output will appear here."}
      </div>
      <button className="cta-button" onClick={handleTranslate}>Translate</button>
    </div>
  );
};

export default Translate;
