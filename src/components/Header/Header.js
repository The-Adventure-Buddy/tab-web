import React, { useEffect, useState } from 'react';
import './Header.css';
import image1 from '../../assets/pic1.png';
import image2 from '../../assets/pic2.png';
import image3 from '../../assets/pic3.png';
import image4 from '../../assets/pic4.png';
import image5 from '../../assets/pic5.png';
const images = [image1, image2, image3, image4, image5];//[image1, image2, image3, image4]

const Header = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="header">
      <img src={images[currentImageIndex]} alt="Adventure" className="header-image" />
      <div className="header-text">
       
      </div>
    </div>
  );
};

export default Header;
