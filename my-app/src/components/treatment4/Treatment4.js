import React from "react";
import styles from './Treatment4.module.css';
import Image from '../../img/Service-Treatment-Image.png';

const Treatment4 = () => {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.right}>
                        <div className={styles.content}>
                            <h2>Skin Treatments</h2>
                            <h3>Skin care and treatment by expert</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero.</p>
                            <a href="">Make an appoinment <span>&gt;&gt;</span></a>
                        </div>
                    </div>

                    <div className={styles.left}>
                        <img src={Image} alt="About Us image" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Treatment4;