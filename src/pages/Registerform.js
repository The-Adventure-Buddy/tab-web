import React, { useState } from 'react';
import './Registerform.css';
import student from '../assets/Farhan.JPG'
import Footer from "../components/Footer/Footer";
const RegistrationForm = () => {
    const [profileImage, setProfileImage] = useState(null);

    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setProfileImage(URL.createObjectURL(e.target.files[0]));
        }
    };

    return (
        <>
        <div className="registration-form">
            <h1>Registration Form</h1>
            <p>All Details Should Be Correct And Filled In Block Letter</p>
            <div className="form-section school-details">
                <h2 className="details">School Details</h2>
                <div className="form-group">
                    <label>School Name:</label>
                    <input type="text" />
                </div>
                <div className="form-group">
                    <label>Venue:</label>
                    <input type="text" />
                </div>
                <div className="form-group">
                    <label>Date:</label>
                    <input type="date" />
                    <span>To</span>
                    <input type="date" />
                    <input type="text" placeholder="Year" />
                </div>
                <div className="form-group">
                    <label>Camp/Event/Course:</label>
                    <input type="text" />
                </div>
            </div>

            <div className="form-section student-details">
                <h2 className="details">Student Details</h2>
                <div className="profile-pic">
                    <img src={profileImage || student} alt="Profile" />
                    <input type="file" accept="image/*" className="upload" onChange={handleImageChange} />
                </div>
                <div className="form-group">
                    <label>Full Name:</label>
                    <input type="text" />
                </div>
                <div className="form-group">
                    <label>Guardian Name:</label>
                    <input type="text" />
                </div>
                <div className="form-group gender-group">
                    <label>Gender:</label>
                    <input type="radio" name="gender" value="male" /> Male
                    <input type="radio" name="gender" value="female" /> Female
                    <input type="radio" name="gender" value="other" /> Other
                </div>
                <div className="form-group">
                    <label>Blood Group:</label>
                    <input type="text" />
                </div>
                <div className="form-group">
                    <label>Date Of Birth:</label>
                    <input type="date" />
                </div>
                <div className="form-group">
                    <label>Age:</label>
                    <input type="number" />
                </div>
                <div className="form-group">
                    <label>Class:</label>
                    <input type="text" />
                </div>
                <div className="form-group">
                    <label>Section:</label>
                    <input type="text" />
                </div>
                <div className="form-group">
                    <label>Whatsapp No:</label>
                    <input type="text" />
                </div>
                <div className="form-group">
                    <label>Mobile No:</label>
                    <input type="text" />
                </div>
                <div className="form-group">
                    <label>Address:</label>
                    <textarea></textarea>
                </div>
                <div className="form-group">
                    <label>City:</label>
                    <input type="text" />
                </div>
                <div className="form-group">
                    <label>State:</label>
                    <input type="text" />
                </div>
                <div className="form-group">
                    <label>Pincode:</label>
                    <input type="text" />
                </div>
                <div className="form-group">
                    <label>Aadhar No:</label>
                    <input type="text" />
                </div>
            </div>

            <div className="form-group agree-group">
                <input type="checkbox" />
                <label>
                    I Agree To Adhere To The Discipline Of The Movement And The Program In Particular, And Abide By The Rules And Regulations Of The Institution During This Entire Event. In The Case Of Any Accident, Illness, Or Injury, Whether Minor Or A Natural, I Will Not Hold The Authorities Directly Responsible At All. I Further Declare That I Have Not Been In Contact With Any Infectious Disease For The Past Month And That I Am In Good Health And Physically Fit To Participate In The Adventure Program.
                </label>
            </div>
            <div className="btn">
                <button type="submit">Submit</button>
            </div>

        </div>
            <Footer/>
        </>
    );
};

export default RegistrationForm;
