import React from "react";
import styles from './GetInTouch8.module.css';
import Image1 from '../../img/Contact-GetInTouch-Image1.png';
import Image2 from '../../img/Contact-GetInTouch-Image2.png';
import Image3 from '../../img/Contact-GetInTouch-Image3.png';


const GetInTouch8 = () =>(
    <div>
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    <h2>Get in Touch</h2>
                    <h3>Get direct handling with us</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.</p>
                </div>

                <div className={styles.boxes}>
                    <div className={styles.box}>
                        <img src={Image1} alt="Location icon"/>
                        <h4>Address</h4>
                        <h5>101 Baker Street, NY</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit</p>
                    </div>
                    <div className={styles.box}>
                        <img src={Image2} alt="Phone Icon"/>
                        <h4>Phone</h4>
                        <h5>+896 120 5889</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit</p>
                    </div>
                    <div className={styles.box}>
                        <img src={Image3} alt="Mail Icon"/>
                        <h4>Mail</h4>
                        <h5>mail@company.com</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit</p>

                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default GetInTouch8;
