import React from "react";
import styles from './Mission3.module.css';
import Image from '../../img/About-Mission-Image.png';

const Mission3 = () => {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.right}>
                        <div className={styles.content}>
                            <h2>Our Mission</h2>
                            <h3>Special & premium service to any clients</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero.
                            <br/>
                            <br/>
                            Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse placerat.</p>
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

export default Mission3;