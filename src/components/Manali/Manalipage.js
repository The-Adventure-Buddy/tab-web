import React from 'react';
import './Manalipage.css';
import Footer from "../Footer/Footer"; // Assuming you have an App.css file for styling

const App = () => {
    return (
        <>
            <div className="manali">
                <div className="background-image-manali">
                    <h1 className="location">Manali</h1>
                </div>
                <div className="itinerary-container-manali">
                    <h2 className="itinerary-manali">Itinerary</h2>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default App;
