import React from 'react';
import './Advanceactivities.css';
import pic from '../../assets/AdventureActivitiescamp.png'
const activities = [
    'Zip Line', 'Shooting', 'Archery', 'Tyre Tunnel', 'Tyre Wall', 'Monkey Crawl',
    'Still Walk', 'Plum Walk', 'Zig Zag Tyre', 'Horse Riding', 'Climbing Wall', 'Rappelling',
    'Zorbing Ball', 'Sumo Fight', 'Zorbing Fight', 'Rope Course', 'Balance Bridge', 'Plank Walk'
];

const AdventureActivities = () => {
    return (
        <div className="container">
            <div className="headers">
                <img src={pic} alt="Adventure Activities" />
                <h1>Adventure Activities</h1>
            </div>
            <div className="grid">
                {activities.map((activity, index) => (
                    <div className="card" key={index}>
                        {activity}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdventureActivities;
