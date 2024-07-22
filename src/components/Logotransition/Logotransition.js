// App.js
import React, { useEffect, useState } from 'react';
import './Logotransition.css';
import Logo from '../../assets/logo.png';


const App = () => {
    const [shrinkLogo, setShrinkLogo] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 100) {
            setShrinkLogo(true);
        } else {
            setShrinkLogo(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <div>
            <header className="header">
                <div className={`logo ${shrinkLogo ? 'shrink' : ''}`}>
                    <img src={Logo} alt="Logo"/>
                </div>
            </header>
          
        </div>
    );
};

export default App;
