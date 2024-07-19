// src/NewsSection.js

import React from 'react';
import Slider from 'react-slick';
import './NewsSection.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import logo4 from '../../assets/professionaltrainer.png'
// import logo5 from '../../assets/Certified Equipment.png'
// import logo6 from '../../assets/accilives new logo.png'
const NewsSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="news-container">
      <div className="slider-container">
        <Slider {...settings}>
          <div className="slide">
             {/*<img src={logo4} alt="Slide 1" />*/}
          </div>
          <div className="slide">
             {/*<img src={logo5} alt="Slide 2" />*/}
          </div>
          <div className="slide">
             {/*<img src={logo6} alt="Slide 3" />*/}
          </div>
        </Slider>
      </div>
      <div className="text-sections">
        <p>What's Happening</p>
        <h1><span className='news'>News</span><br/><span className='articles'>Articles</span></h1>
      </div>
    </div>
  );
}

export default NewsSection;
