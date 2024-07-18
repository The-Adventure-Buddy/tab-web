import React from 'react';
import './SafetySection.css';

function SafetySection() {
    return (
        <div className="safety-container">
            <div className="safety-header">
                <h1>Safety:</h1>
                <p>
                    Safety is our first priority at The Adventure Buddy. We want to ensure that your experience with us
                    is not only thrilling and adventurous but also secure and well-protected. Our commitment to safety
                    runs deep, and we take comprehensive measures to ensure your well-being throughout your journey with
                    us.
                </p>
                <p>
                    We use standardized quality gear for all adventure activities, including harnesses, helmets,
                    carabiners, ropes, and other equipment. Our gear is thoroughly vetted, sourced from CAMP Italy.
                </p>
                <p>
                    CAMP is a 125-year-old, family-owned Italian brand that has maintained its heritage with its global
                    headquarters still nestled in the tiny mountain village of Premana, situated in the Pre-Alps of
                    Northern Italy. CAMP leads the industry in innovation, introducing more products and clever designs
                    than any other company each season. Research and development are at the core of the company.
                </p>
                <p>
                    All equipment is imported and meets international standards and certifications such as UIAA and EN.
                </p>
            </div>
            <div className="container">
                <div className="card">Risk Assessment<br/>We conduct thorough risk assessments to identify hazards and
                    mitigate risks, ensuring preparedness for any unforeseen challenges.
                </div>
                <div className="card">Emergency Preparedness<br/>Our team is trained in first aid and emergency
                    protocols, ready to manage various scenarios effectively.
                </div>
                <div className="card middle">Your Responsibility<br/>Follow instructor guidelines, use equipment
                    properly, and communicate concerns to ensure your safety. At Adventure Buddy, we ensure adventure
                    and safety go hand in hand, making your experience enjoyable and secure.
                </div>
                <div className="card">Weather Monitoring<br/>We continuously monitor weather forecasts and adjust
                    activities as needed to maintain safety.
                </div>
                <div className="card">Safety Briefings<br/>Our instructors provide comprehensive safety briefings
                    covering equipment use and emergency procedures to ensure your confidence and safety.
                </div>
            </div>
        </div>
    );
}

export default SafetySection;
