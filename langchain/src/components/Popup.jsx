import React, { useState } from 'react';
import '../styles/popus.css';
import gla from '../images/Gla.jpeg';

function Popup() {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className={isOpen ? "popup-overlay" : "popup-overlay hidden"}>
      <div className="popup-content">
        <span className="close-btn" onClick={handleClose}>X</span>
        <h2 strong  > AI Powered Text Extractor App!</h2>
        <img src={gla} style={{ display: 'block', margin: 'auto', height: '100px' }} alt="Gla" />
        <br />
        <p>Develped By: Kirti Bhardwaaj</p>
        <p>Develped By: Navya Agrawal</p>
        <p>Develped By: Naman Kumar Pilania</p>

      </div>
    </div>
  );
}

export default Popup;
