import React from 'react';
import Slider from 'react-slick';
import './Testmonial.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="new-container">
      <div className="text-content">
        <p>What</p>
        <p>People</p>
        <p>Say</p>
        <p>About</p>
        <p>Us...</p>
      </div>
      <div className="image-slider">
        <Slider {...settings}>
          <div>
            {/* <img src="path-to-your-image1.png" alt="Slide 1" /> */}
          </div>
          <div>
            {/* <img src="path-to-your-image2.png" alt="Slide 2" /> */}
          </div>
          <div>
            {/* <img src="path-to-your-image3.png" alt="Slide 3" /> */}
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default App;
