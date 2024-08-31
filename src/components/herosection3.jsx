import React from 'react';
import '../assets/Styles/herosection1.css';
import overlayImage12 from '../assets/images/FamilywavePurple.69df3cde11d6a651736c.png';
import overlayImage13 from '../assets/images/img15.e41f4ff76c63962447c9.png';
import overlayImage14 from '../assets/images/TakbeerENDark.cf5fc5b1d3d056560a3b.png';
import overlayImage15 from '../assets/images/OudPinkBallon.9f7218c3f16278c75f72.png';
import overlayImage16 from '../assets/images/OudGreenBallon.3dbb0b434850613a8628.png';
import overlayImage17 from '../assets/images/31-layer.bd3ad793025af083f084.png';


function Herosection3() {
  return (
    <div>
      <section className="hero-section">
        <div className="hero-content">
          <img src={overlayImage12} alt="Overlay" className="overlay-image12" />
          <img src={overlayImage13} alt="Overlay" className="overlay-image13" />
          <img src={overlayImage14} alt="Overlay" className="overlay-image14" />
          <img src={overlayImage15} alt="Overlay" className="overlay-image15" />
          <div className="eid-section2">
             <p className="eid-text2">
             Now that we're ready in our new Eid outfits, it's time for Takbeer or Eid prayers. Let's revel in this beautiful moment. Later, let's join the family gathering and exchange warm greetings with loved ones.
          </p>
         </div>
         <img src={overlayImage16} alt="Overlay" className="overlay-image16" />
         <div className="buttons-container">
         <button className="custom-button">Eid Events Booklet</button>
         <button className="custom-button">Greeting Cards</button>
         <button className="custom-button">Houses Decorations</button>
        <button className="custom-button">Companies Decorations</button>
        </div>
        <img src={overlayImage17} alt="Overlay" className="overlay-image17" />
        </div>
      </section>
    </div>
  );
}

export default Herosection3;
