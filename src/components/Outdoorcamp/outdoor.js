// src/MasterPioneer.js

import React from 'react';
import './outdoor.css';
import shimlaImage from '../../assets/shimla.png';
import manaliImage from '../../assets/manali.png';
import nanitalImage from '../../assets/nanital.png';
import outdoorcamp from '../../assets/outdoor.png';
import Footer from "../Footer/Footer";
import { Link } from 'react-router-dom'; // Add this if you are using React Router

const destinations = [
    {
        name: "Shimla",
        title: "Queen Of Hills",
        img: shimlaImage,
        days: 3,
        nights: 2,
        link: "/shimla" // Add the link for the destination
    },
    {
        name: "Manali",
        title: "Valley Of The Gods",
        img: manaliImage,
        days: 3,
        nights: 2,
        link: "/manali" // Add the link for the destination
    },
    {
        name: "Nanital",
        title: "The City Of Lakes",
        img: nanitalImage,
        days: 3,
        nights: 2,
        link: "/nanital" // Add the link for the destination
    }
];

const MasterPioneer = () => {
    return (
        <>
            <div className="master-pioneer">
                <header>
                    <img src={outdoorcamp} alt="Outdoor Camp Logo" className="LOGO" />
                    <h1>Master Pioneer</h1>
                </header>
                <div className="trip">
                    {destinations.map((destination) => (
                        <Link to={destination.link} className="trips" key={destination.name}>
                            <img src={destination.img} alt={destination.name} />
                            <h2>{destination.name}</h2>
                            <p>{`"${destination.title}"`}</p>
                            <div className="detail">
                                <span>☀️ {destination.days}</span>
                                <span>🌙 {destination.nights}</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default MasterPioneer;
