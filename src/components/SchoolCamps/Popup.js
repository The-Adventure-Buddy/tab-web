import React from 'react';
import './Popup.css';

const Popup = ({ content, onClose }) => {
    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <span className="close-button" onClick={onClose}>&times;</span>
                {content}
            </div>
        </div>
    );
};

export default Popup;
