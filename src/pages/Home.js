import React from 'react'
import AdventureSection from '../components/AdventureSection/AdventureSection';
import NewsSection from '../components/NewsSection/NewsSection';
import Testimonial from '../components/Testimonial/Testimonial';
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import HeroSection from '../components/HeroSection/HeroSection'
import Count from '../components/Count/Count'
import Safety from  '../components/Safety/Safety';
import AdventureStart from '../components/AdventureStart/AdventureStart';
import Activities from '../components/ActivitiesSection/ActivitiesSection';
import Logotransition from '../components/Logotransition/Logotransition';
import BrandSlider from "../components/BrandSlider/BrandSlider";
    function Home() {
        return (
            <div>
                <Logotransition />
                <Header />
                <HeroSection />
                <Count />
                <Activities/>
                <Safety />
                <AdventureStart />
                <AdventureSection />
                <NewsSection />
                <Testimonial />
                <BrandSlider/>
                <Footer />
            </div>
        )
    }

export default Home