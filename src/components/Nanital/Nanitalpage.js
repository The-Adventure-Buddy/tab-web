import React from 'react';
import './Nanital.css';
import Footer from "../Footer/Footer"; // Assuming you have an App.css file for styling

const App = () => {
    return (
        <>
        <div className="container">
            <div className="background-image">
                <h1 className="location">Nanital</h1>
            </div>
            <div className="itinerary-container">
                <h2 className="itinerary">Itinerary</h2>
            </div>
        </div>
            <Footer/>
        </>
    );
};

export default App;
