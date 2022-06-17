import React from "react";
import styles from './Consultation4.module.css';
import Image from '../../img/Service-Consultation-Image.png';

const Consultation4 = () => {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.left}>
                        <img src={Image} alt="About Us image" />
                    </div>
                    <div className={styles.right}>
                        <div className={styles.content}>
                            <h2>Beauty Consultation</h2>
                            <h3>We services beauty consultation</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero.</p>
                            <a href="">Make an appoinment <span>&gt;&gt;</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Consultation4;