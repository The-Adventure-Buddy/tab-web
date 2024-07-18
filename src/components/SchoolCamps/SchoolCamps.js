import React, { useState } from 'react';
import Card from './Card';
import Popup from './Popup';
import './SchoolCamps.css';
import schoolcamp from '../../assets/schoolcamp.png';
import oneDayCampImage from '../../assets/Rope Climbing.jpg'; // Replace with actual image path
import twoDaysCampImage from '../../assets/tug of war.jpg'; // Replace with actual image path
import Footer from '../Footer/Footer'
const SchoolCamps = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [popupContent, setPopupContent] = useState(null);

    const handleCardClick = (content) => {
        setPopupContent(content);
        setShowPopup(true);
    };

    const closePopup = () => {
        setShowPopup(false);
        setPopupContent(null);
    };

    const oneDayCampDetails = (
        <div className="popup-details">
            <img src={oneDayCampImage} alt="One Day Camp" className="popup-image" />
            <div className="popup-text">
                <h3>One Day Camp</h3>
                <ul>
                    <li>15-20 Adventure Activities</li>
                    <li>T-shirt</li>
                    <li>Lunch</li>
                    <li>Certificate</li>
                </ul>
            </div>
        </div>
    );

    const twoDaysCampDetails = (
        <div className="popup-details">
            <img src={twoDaysCampImage} alt="2 Days & 1 Night Camp" className="popup-image" />
            <div className="popup-text">
                <h3>2 Days & 1 Night Camp</h3>
                <ul>
                    <li>15-20 Adventure Activities</li>
                    <li>T-shirt & Bag</li>
                    <li>Breakfast-Lunch-Dinner</li>
                    <li>Certificate</li>
                </ul>
            </div>
        </div>
    );

    return (
        <>

        <div className="school-camps-container">
            <img src={schoolcamp} alt="School Camp" className="school-camp-logo" />
            <h2>School Camps:</h2>
            <div className="cards-container">
                <Card  onClick={() => handleCardClick(oneDayCampDetails)} />
                <Card  onClick={() => handleCardClick(twoDaysCampDetails)} />
            </div>
            {showPopup && <Popup content={popupContent} onClose={closePopup} />}
        </div>
            <Footer/>
        </>
    );
};

export default SchoolCamps;
