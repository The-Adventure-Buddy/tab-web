import React from 'react';
import './Advanceactivities.css';
import image1 from '../../assets/Rope Climbing.jpg'
import Footer from "../Footer/Footer";
const TripGrid = () => {
    const trips = [
        { id: 1, image: image1 },
        { id: 2, image: image1 },
        { id: 3, image: image1 },
        { id: 4, image: image1 },
        { id: 5, image: image1 },
        { id: 6, image: image1 },
        { id: 7, image: image1 },
        { id: 8, image: image1 },
        { id: 9, image: image1 }
    ];

    return (
        <>
        <div className="Rising">
            <h1>Rising Wanderer</h1>
            <div className="TripGrid">
                {trips.map((trip) => (
                    <div key={trip.id} className="Trips">
                        <img src={trip.image} alt={`Trip ${trip.id}`} className="trip-image" />
                    </div>
                ))}
            </div>
        </div>
            <Footer/>
        </>
    );
};

export default TripGrid;
