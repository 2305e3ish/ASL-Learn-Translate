import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import APIContainer from '../components/APIContainer';
import '../styles/Pages.css';

const LearnDetail = () => {
    const { level: letter } = useParams(); // Extract the letter from the URL
    const navigate = useNavigate();
    const [isCorrect, setIsCorrect] = useState(false); // Track if the correct letter is detected
    const [detectedLetter, setDetectedLetter] = useState(''); // Store the detected letter
    const [imageSrc, setImageSrc] = useState(`/letters/${letter.toUpperCase()}.png`); // Default to .png

    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

    useEffect(() => {
        // Update the image source whenever the letter changes
        setImageSrc(`/letters/${letter.toUpperCase()}.png`);
    }, [letter]);

    const handleDetectionComplete = (predictedLetter) => {
        setDetectedLetter(predictedLetter); // Update the detected letter state
        if (predictedLetter.toLowerCase() === letter.toLowerCase()) {
            setIsCorrect(true); // Show congratulatory message
            setTimeout(() => {
                setIsCorrect(false); // Reset state after 3 seconds
            }, 3000);
        }
    };

    const handleNavigation = (direction) => {
        const currentIndex = alphabet.indexOf(letter.toLowerCase());
        const nextIndex =
            direction === 'next'
                ? (currentIndex + 1) % alphabet.length
                : (currentIndex - 1 + alphabet.length) % alphabet.length;
        navigate(`/learn/beginner/${alphabet[nextIndex]}`);
    };

    const handleImageError = () => {
        setImageSrc(`/letters/${letter.toUpperCase()}.jpg`); // Fallback to .jpg if .png fails
    };

    return (
        <div className="page learn-grid-page">
            <div className="left-panel">
                {/* Pass the letter and detection handler to APIContainer */}
                <APIContainer targetLetter={letter} onDetect={handleDetectionComplete} />

                <div className="bottom-panel">
                    <button className="nav-button" onClick={() => handleNavigation('prev')}>
                        ←
                    </button>
                    {isCorrect ? (
                        <p className="congrats-message">🎉 Congrats! The correct letter is detected! 🎉</p>
                    ) : (
                        <div className="results">
                            <p>
                                <strong>{detectedLetter.toUpperCase()}</strong>
                            </p>
                        </div>
                    )}
                    <button className="nav-button" onClick={() => handleNavigation('next')}>
                        →
                    </button>
                </div>
            </div>

            <div className="right-panel">
                <div className="image-box">
                    <img
                        src={imageSrc}
                        alt={`Hand sign for ${letter.toUpperCase()}`}
                        className="hand-sign-image"
                        onError={handleImageError}
                    />
                </div>

                <div className="letter-grid">
                    {alphabet.map((l) => (
                        <button
                            key={l}
                            className={`letter-button ${l === letter.toLowerCase() ? 'active' : ''}`}
                            onClick={() => navigate(`/learn/beginner/${l}`)}
                        >
                            {l.toUpperCase()}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LearnDetail;