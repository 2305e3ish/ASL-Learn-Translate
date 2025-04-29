import React, { useRef, useEffect, useState } from 'react';
import { initializeHandRecognition } from '../utils/mediapipeHand';

const APIContainer = () => {
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const [outputText, setOutputText] = useState('Waiting for input...');
    const [isVideoEnabled, setIsVideoEnabled] = useState(false);

    const startVideoStream = () => {
        setIsVideoEnabled(true);
    };

    useEffect(() => {
        if (isVideoEnabled) {
            const startHandRecognition = async () => {
                try {
                    await initializeHandRecognition(videoRef, canvasRef, setOutputText);
                } catch (error) {
                    console.error('Failed to initialize hand recognition:', error);
                    setOutputText('Error initializing hand recognition.');
                }
            };

            startHandRecognition();
        }
    }, [isVideoEnabled]);

    return (
        <div
            className="api-container"
            style={{
                position: 'relative',
                width: '640px',
                height: '480px',
                margin: '0 auto',
                border: '2px solid #ccc',
                borderRadius: '8px',
                overflow: 'hidden',
            }}
        >
            <video
                ref={videoRef}
                className="webcam"
                autoPlay
                muted
                style={{
                    display: 'block',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                }}
            ></video>
            <canvas
                ref={canvasRef}
                className="webcam"
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    pointerEvents: 'none',
                }}
            ></canvas>
            <button
                onClick={startVideoStream}
                style={{
                    position: 'absolute',
                    bottom: '10px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    padding: '10px 20px',
                    fontSize: '16px',
                    backgroundColor: '#007bff',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                }}
            >
                Start Video Stream
            </button>
            <div
                style={{
                    position: 'absolute',
                    bottom: '50px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    textAlign: 'center',
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    color: '#fff',
                    padding: '5px 10px',
                    borderRadius: '5px',
                }}
            >
                <p style={{ fontSize: '24px', fontWeight: 'bold', margin: 0 }}>
                    {outputText}
                </p>
            </div>
        </div>
    );
};

export default APIContainer;
