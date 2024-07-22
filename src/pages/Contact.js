import React from 'react';
import './Contact.css';
import Contactimg from '../assets/Contact image.png'
import Footer from '../components/Footer/Footer'
const ContactPage = () => {
    return (
<>
        <div className="contact-container">

            <div className="contact-form">
                <h2>Get in touch</h2>
                <p>How can we support you? Just let us know!</p>
                <form>
                    <input type="text" placeholder="Name" />
                    <input type="text" placeholder="Mobile Number" />
                    <input type="email" placeholder="Email" />
                    <textarea placeholder="Message"></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
            <div className="contact-image">
                <img src={Contactimg} alt="Contact" />
                {/*<div className="contact-info">*/}
                {/*    <p>RISE Incubation Center, Nagri Nigam Premises, Elite Chauraha, Jhansi, Uttar Pradesh - 284001</p>*/}
                {/*    <p>+919518619813, 8827531565</p>*/}
                {/*    <p>connect@theadventurebuddy.in</p>*/}
                {/*</div>*/}
            </div>

        </div>
    <Footer/>
</>
    );
};

export default ContactPage;
