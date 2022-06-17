import React from "react";
import styles from "./Service4.module.css";
import image1 from '../../img/Service-Service-Image1.png';
import image2 from '../../img/Service-Service-Image2.png';
import image3 from '../../img/Service-Service-Image3.png';
import image4 from '../../img/Service-Service-Image4.png';
const Service4 = () => {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.bigWrapper}>
                    <div className={styles.content}>
                        <h2>Our Services</h2>
                        <h3>We focus on your beauty</h3>
                        <p>Lorem ipsum dolor sit amet</p>
                    </div>
                    <div className={styles.images}>
                        <div className={styles.group1}>
                            <img src={image1} alt="Service 1" />
                            <img src={image2} alt="Service 2" />
                        </div>

                        <div className={styles.group2}>
                            <img src={image3} alt="Service 1" />
                            <img src={image4} alt="Service 2" />
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Service4;