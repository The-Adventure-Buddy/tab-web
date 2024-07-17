import React, { useEffect, useState } from 'react';
import './Header.css';
// import image1 from '../../assets/hiking.jpg';
// import image2 from '../../assets/obstacle.jpg';
// import image3 from '../../assets/Rope Climbing.jpg';
// import image4 from '../../assets/tug of war.jpg';

const images = [];//[image1, image2, image3, image4]

const Header = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds
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
