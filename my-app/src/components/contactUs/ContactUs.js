import React from "react";
import styles from './ContactUs.module.css';
import ContactAnimation from '../../img/Contact Animations.png';

const ContactUs = () =>(
    <div>
        <div className={styles.Contact}>
            <div className={styles.imageContactUs}>
                <img src={ContactAnimation} alt="Contact animation"/>
            </div>
            <div className={styles.infoContactUs}>
                <div className={styles.contentContactUs}>
                    <h2>Contact Us</h2>
                    <h3>Send your inquiry to our expert team</h3>
                    <p>Lorem ipsum dolor sit amet nulla turapis tellus.</p>
                </div>
                <form className={styles.inputsContactUs} method='GET' action='https://script.google.com/macros/s/AKfycbwt0XK2IAtdGEEr25WuEhvUcbnL0ACRo2pwaQW5hWxsRD1SOLg0DjyCmVUP6hyOvzlL/exec'>
                    <div className={styles.inputName}>
                            <input name="FirstName" type="text" placeholder="First name"/>
                            <input name="LastName" type="text" placeholder="Last name"/>
                    </div>
                    <input name="Email" type="email" placeholder="Email address"/>
                    <input name="Subject" type="text" placeholder="Subject message"/>
                    <textarea name="Message" id="" cols="30" rows="10" placeholder="Your inquiry here"></textarea>
                    
                <button>Send Message</button>
                </form>
                </div>
            </div>
    </div>
);

export default ContactUs;