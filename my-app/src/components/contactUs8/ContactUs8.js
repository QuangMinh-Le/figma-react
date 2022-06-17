import React from "react";
import styles from './ContactUs8.module.css';
import ContactAnimation from '../../img/Contact Animations.png';
import Background from '../../img/Contact-ContactUs-Background.png';
import Map from '../../img/Contact-ContactUs-Map.png'

const ContactUs8 = () =>(
    <div>
    <img src={Background} alt="Buble Background" className={styles.background} />
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.left}>
                    <h2>Contact Us</h2>
                    <h3>Contact service for our customers</h3>
                </div>
                <div className={styles.right}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut   aliquam, purus sit amet luctus venenatis</p>
                </div>
            </div>
            <div className={styles.form}>
                <div className={styles.formLeft}>
                    <img src={ContactAnimation} alt="Contact animation"/>
                </div>
                <form className={styles.formRight} method='GET' action='https://script.google.com/macros/s/AKfycbwt0XK2IAtdGEEr25WuEhvUcbnL0ACRo2pwaQW5hWxsRD1SOLg0DjyCmVUP6hyOvzlL/exec'>
                    <div className={styles.formInput}>
                        <div className={styles.inputName}>
                            <input name="FirstName" type="text" placeholder="First name"/>
                            <input name="LastName" type="text" placeholder="Last name"/>
                        </div>
                        <input name="Email" type="email" placeholder="Email address"/>
                        <input name="Subject" type="text" placeholder="Subject message"/>
                        <textarea name="Message" id="" cols="30" rows="10" placeholder="Your inquiry here"></textarea>

                    </div>
                    <button>Send Message</button>

                </form>
            </div>
        </div>
        <img src={Map} alt="Map" className={styles.map} />
    </div>


    </div>
);

export default ContactUs8;