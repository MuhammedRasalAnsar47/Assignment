import React from 'react';
import '../assets/Styles/herosection1.css';
import heroImage from '../assets/images/preparationEnTxtNight.cd6ca912ad87279915ef.png'; // Adjust the path as needed
import overlayImage from '../assets/images/preparationJug.1698288d79715908e659.png'; // Overlay image
import overlayImage2 from '../assets/images/output-onlinepngtools.png';
import overlayImage3 from '../assets/images/shine01.7705d396efb447290480.png';
import overlayImage4 from '../assets/images/BiscuitHalf.99411dabe1cd1477970c.png';
import overlayImage5 from '../assets/images/buiscutfull.png';
import overlayImage6 from '../assets/images/flag1.a91fb9aca7cfb61a6585.png';
import overlayImage7 from '../assets/images/flag.e8c36325290517b3d84b.png';



function Herosection1() {
  return (
    <div>
      <section className="hero-section">
        <div className="hero-content">
          <img src={heroImage} alt="Hero" className="hero-image" />
          <img src={overlayImage} alt="Overlay" className="overlay-image" />
          <img src={overlayImage2} alt="Overlay2" className="overlay-image2" />
          <img src={overlayImage3} alt="Overlay3" className="overlay-image3" />
          <img src={overlayImage4} alt="Overlay4" className="overlay-image4" />
          <img src={overlayImage5} alt="Overlay5" className="overlay-image5" />
          <img src={overlayImage6} alt="Overlay6" className="overlay-image6" />
          <img src={overlayImage7} alt="Overlay7" className="overlay-image7" />
          
        </div>
      </section>
    </div>
  );
}

export default Herosection1;
