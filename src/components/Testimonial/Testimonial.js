import React from 'react';
import Slider from 'react-slick';
import './Testmonial.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import logo4 from '../../assets/professionaltrainer.png'
// import logo5 from '../../assets/Certified Equipment.png'
// import logo6 from '../../assets/accilives new logo.png'
function App() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="new-container">
      <div className="text-contents">
        <p>What</p>
        <p>People</p>
        <p>Say</p>
        <p>About</p>
        <p>Us...</p>
      </div>
      <div className="image-slider">
        <Slider {...settings}>
          <div>
             {/*<img src={logo4} alt="Slide 1" />*/}
          </div>
          <div>
             {/*<img src={logo5} alt="Slide 2" />*/}
          </div>
          <div>
             {/*<img src={logo6} alt="Slide 3" />*/}
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default App;
