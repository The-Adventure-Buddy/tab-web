import React from 'react';
import './Lgobar.css';
import logo1 from '../../assets/Cassin.png';
import logo2 from '../../assets/CAMP-SAFETY.png';
import logo3 from '../../assets/CAMP-logo.png';
import logo4 from '../../assets/Petzl.png';
import logo5 from '../../assets/accilives new logo.png';

const LogoBar = () => {
    const brands = [
        { logo: logo1 },
        { logo: logo2 },
        { logo: logo3 },
        { logo: logo4 },
        { logo: logo5 },
    ];

    return (
        <div className="logo-bar">
            {brands.map((brand, index) => (
                <div key={index} className="brand-slide">
                    <img src={brand.logo} alt={`Brand ${index}`} className="brand-logo" />
                </div>
            ))}
        </div>
    );
};

export default LogoBar;
