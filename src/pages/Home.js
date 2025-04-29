import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Pages.css';

const Home = () => {
  const navigate = useNavigate();

  // Load Google Fonts
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Keania+One&family=Instrument+Sans:wght@400;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Fallback style
    const style = document.createElement('style');
    style.innerHTML = `
      body {
        font-family: 'Arial', sans-serif;
      }
    `;
    document.head.appendChild(style);
  }, []);

  const handleGetStarted = () => {
    navigate("/learn");
  };

  return (
    <>
      {/* Background Image */}
      <div className="full-page-background"></div>

      {/* Main Content */}
      <div className="container page home-page">
        <h1 className="home-heading keania-one-regular">Smart ASL</h1>
        <h2 className="home-subheading">Signing made easier to learn.</h2>

        {/* Uiverse Gradient Button */}
        <div className="uiverse-btn-wrapper">
          <div className="uiverse-btn-container">
            <button className="uiverse-btn-74" onClick={handleGetStarted}>
              Let’s get started
              <svg
                className="uiverse-icon"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
