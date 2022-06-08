import React from "react";
import styles from './ContactUs.module.css';
import ContactAnimation from '../../img/Contact Animations.png'

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
                <div className={styles.inputsContactUs}>
                    <div className={styles.inputName}>
                        <input type="text" placeholder="First name"/>
                        <input type="text" placeholder="Last name"/>
                    </div>
                    <input type="email" placeholder="Email address"/>
                    <input type="text" placeholder="Subject message"/>
                    <textarea id="" cols="30" rows="10" placeholder="Your inquiry here"></textarea>
                    
                </div>
                <button>Send Message</button>
                </div>
            </div>
    </div>
);

export default ContactUs;