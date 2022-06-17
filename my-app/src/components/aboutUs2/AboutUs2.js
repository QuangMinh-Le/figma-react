import React from "react";
import styles from './AboutUs2.module.css';
import Image from '../../img/Home2AboutUs.svg'

const AboutUs2 = () => {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.left}>
                        <img src={Image} alt="About Us image" />
                    </div>
                    <div className={styles.right}>
                        <div className={styles.content}>
                            <h2>About Us</h2>
                            <h3>We are the best beauty clinic</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam  suscipit purus donec amet. Egestas volutpat facilisi eu libero. Nunc, ipsum  ornare mauris sit quam quis enim. Varius tellus in suspendisse placerat.</p>
                        </div>
                        <button>Learn more</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs2;