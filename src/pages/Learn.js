import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Pages.css';

import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import PsychologyIcon from '@mui/icons-material/Psychology';

const Learn = () => {
  const navigate = useNavigate();

  const handleLevelClick = (level) => {
    if (level === 'beginner') {
      navigate('/learn/beginner/a'); // Navigate to the first letter page for Beginner level
    } else {
      navigate(`/learn/${level}`); // Navigate to other levels
    }
  };

  const getDescription = (level) => {
    switch (level) {
      case 'beginner':
        return 'Start from the basics and build a strong foundation.';
      case 'intermediate':
        return 'Boost your skills with real-world signs.';
      case 'advanced':
        return 'Master complex expressions and fluency.';
      default:
        return '';
    }
  };

  const getLevelIcon = (level) => {
    switch (level) {
      case 'beginner':
        return <AccessibilityNewIcon />;
      case 'intermediate':
        return <EmojiObjectsIcon />;
      case 'advanced':
        return <PsychologyIcon />;
      default:
        return null;
    }
  };

  const levels = ['beginner', 'intermediate', 'advanced'];

  return (
    <>
      <div className="learn-background"></div> {/* Fullscreen background image */}

      <div className="page learn-page container">
        <h1 className="learn-title">Learn ASL</h1>
        <p>Choose your level to begin learning:</p>

        <div className="level-boxes">
          {levels.map((level) => (
            <div
              className="box"
              key={level}
              onClick={() => handleLevelClick(level)}
              role="button"
              tabIndex={0}
              aria-label={`Select ${level} level`}
              onKeyDown={(e) => e.key === 'Enter' && handleLevelClick(level)}
            >
              <div className="icon-wrapper">{getLevelIcon(level)}</div>

              <div className="title">
                {level.charAt(0).toUpperCase() + level.slice(1)}
              </div>

              <div className="description">
                <strong>{`Level: ${level}`}</strong>
                <p>{getDescription(level)}</p>
                <span>Click to begin</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Learn;