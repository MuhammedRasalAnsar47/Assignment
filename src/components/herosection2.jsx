import React from 'react';
import '../assets/Styles/herosection1.css';
import overlayImage8 from '../assets/images/Smoke.7c3ff80d303113864f33.png';
import overlayImage9 from '../assets/images/Machine.3d5f7cf7280ea0ef524e.png';
import overlayImage10 from '../assets/images/img15.e41f4ff76c63962447c9.png';
import overlayImage11 from '../assets/images/kiteimage.png';




function Herosection2() {
  return (
    <div>
      <section className="hero-section">
        <div className="hero-content">
          <img src={overlayImage8} alt="Overlay" className="overlay-image8" />
          <img src={overlayImage9} alt="Overlay" className="overlay-image9" />
          <div className="eid-section">
             <p className="eid-text">
           After a whole year of patiently, but eagerly waiting, Eid is finally here! Hands up everyone who missed the incense smells, the outfits and the delicious food? But first, let’s get Eid-ready with our outfits.
          </p>
         <button className="eid-button">Eid Identity</button>
         </div>
         <img src={overlayImage10} alt="Overlay" className="overlay-image10" />
         <img src={overlayImage11} alt="Overlay" className="overlay-image11" />
        </div>
      </section>
    </div>
  );
}

export default Herosection2;
