import React from 'react';
import './Activities.css';
import image1 from '../../assets/Rope Climbing.jpg'
import image2 from '../../assets/AdventureActivitiescamp.png'
import Footer from "../Footer/Footer";
const activities = [
    { name: "Zip Lane", image: image1 },
    { name: "Shooting", image: image1 },
    { name: "Archery", image: image1 },
    { name: "Tyre Tunnel", image: image1 },
    { name: "Monkey Crawl", image: image1 },
    { name: "Tyre Wall", image: image1 },
    { name: "Still Walk", image: image1 },
    { name: "Horse Riding", image: image1 },
    { name: "Climbing Wall", image: image1 }
];

function Activites() {
    return (
        <>
        <div className="Activities">
            <header >
                <img src={image2} alt="Adventure Activities Logo" className="lOgo" />
                <h1>Adventure Activities</h1>
            </header>
            <div className="activities-grid">
                {activities.map(activity => (
                    <div className="activitys-cards" key={activity.name}>
                        <img src={activity.image} alt={activity.name} className="activity-image" />
                        <p>{activity.name}</p>
                    </div>
                ))}
            </div>
        </div>
            <Footer/>
        </>
    );
}

export default Activites;
