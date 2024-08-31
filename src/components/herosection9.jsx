import React from 'react';
import '../assets/Styles/herosection1.css';
import overlayImage91 from '../assets/images/footerGreen.fd2477c70ed59090097f.png';
import overlayImage92 from '../assets/images/footerOrange.10f54cb717f7471f7906.png';
import overlayImage93 from '../assets/images/footerPink.7f0186f5758b23f7271d.png';





function Herosection9() {
  return (
    <div>
      <section className="hero-section">
        <div className="hero-content">
        <div className="container6">
        <div className="button-container6">
            <button className="button6">Replay The Journey</button>
        </div>
        <div className="logo-container6">
            <img src="/path/to/left-logo.png" alt="Eid Events 2024 Logo"/> 
            <div className="divider6"></div>
            <img src="/path/to/right-logo.png" alt="GEA Logo"/> 
        </div>
       </div>
       <img src={overlayImage91} alt="Overlay5" className="overlay-image91" />
       <img src={overlayImage92} alt="Overlay5" className="overlay-image92" />
       <img src={overlayImage93} alt="Overlay5" className="overlay-image93" />
        </div>
      </section>
    </div>
  );
}

export default Herosection9;
