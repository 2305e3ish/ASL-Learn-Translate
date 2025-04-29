import React from 'react';
import '../styles/Pages.css';

const FAQ = () => {
  return (
    <div className="page faq-page">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-item">
        <h3>How do I get started?</h3>
        <p>Click on the 'Learn' page and press 'Get Started' to begin your ASL journey.</p>
      </div>
      <div className="faq-item">
        <h3>How can I practice?</h3>
        <p>Practice interactive lessons on the 'Practice' page to improve your skills.</p>
      </div>
      {/* Add additional FAQ items as needed */}
    </div>
  );
};

export default FAQ;
