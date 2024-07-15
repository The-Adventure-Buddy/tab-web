// src/Safety.js

import React from 'react';
import './Safety.css';
import logo1 from '../../assets/professionaltrainer.png'
import logo2 from '../../assets/accilives new logo.png'
import logo3 from '../../assets/Certified Equipment.png'

function Safety() {
  return (
    <div className="containers" >
      <header>
        <h1>
          leading with <span className="highlight">SAFETY!</span> in mind
        </h1>
      </header>
      <div className="content">
        <div className="box">
          <img src={logo1} alt="Professional Trainer" className="image" />
          {/* <h2>Professional Trainer</h2> */}
        </div>
        <div className="box">
        {/* <h2>Assured Insurance</h2> */}
        <p>Powered by</p>
          <img src={logo2} alt="Assured Insurance" className="image" />
          {/* <img src= alt="ACCILIVES" className="image" /> */}
        </div>
        <div className="box">
          <img src={logo3} alt="Certified Equipment" className="image" />
          {/* <h2>Certified Equipments</h2> */}
        </div>
      </div>
    </div>
  );
}

export default Safety;
