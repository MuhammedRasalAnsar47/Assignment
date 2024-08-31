import React from 'react';
import '../assets/Styles/herosection1.css';
import overlayImage32 from '../assets/images/buiscutfull.png';
import overlayImage33 from '../assets/images/greetingElement03.817a286bbfb664c32513.png';



function Herosection5() {
  return (
    <div>
      <section className="hero-section">
        <div className="hero-content">
         <img src={overlayImage32} alt="Overlay" className="overlay-image32" />
         <div className="card-container">
        <div className="card card-white">
        </div>
        <div className="card card-purple">
        </div>
        </div>
        <img src={overlayImage33} alt="Overlay" className="overlay-image33" />
        </div>
      </section>
    </div>
  );
}

export default Herosection5;
