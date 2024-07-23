import React from 'react';
import './AdventureStart.css';
import linktreeImg from '../../assets/Linktree.png'; // Adjust the path as necessary

const AdventureStart = () => {
    return (
        <div className="adventure-container">
            <div className="Text-section">
                <p>let’s begin</p>
                <h1>The Adventure...</h1>
            </div>
            <div className="image-section">
                <a href="https://linktr.ee/adventurebuddy01" target="_blank" rel="noopener noreferrer">
                    <img src={linktreeImg} alt="Linktree" className="linktree-image" />
                </a>
            </div>
        </div>
    );
};

export default AdventureStart;
