import React from "react";
import styles from "./CoreService2.module.css";
import Image1 from '../../img/Home2-MainService-1.png';
import Image2 from '../../img/Home2-MainService-2.png';
import Image3 from '../../img/Home2-MainService-3.png';
import WaveLine from '../../img/Home2-MainService-WaveLine.png';

const CoreService2 = () => {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.bigWrapper}>
                    <div className={styles.content}>
                        <h2>Main Services</h2>
                        <h3>Our focus services</h3>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className={styles.boxes}>
                        <div className={styles.box}>
                            <div className={styles.wrapper}>
                                <img src={Image1} alt="Service 1 - Image"/>
                                <h4>Beauty consultation</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                                <a href="">Learn more &gt;&gt;</a>
                            </div>
                        </div>

                        <div className={styles.box}>
                            <div className={styles.wrapper}>
                                <img src={Image2} alt="Service 2 - Image"/>
                                <h4>Skin treatments</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                                <a href="">Learn more &gt;&gt;</a>
                            </div>
                        </div>

                        <div className={styles.box}>
                            <div className={styles.wrapper}>
                                <img src={Image3} alt="Service 3 - Image"/>
                                <h4>Beauty product</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                                <a href="">Learn more &gt;&gt;</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.waveLine}><img src={WaveLine} alt="Wave Line" /></div>
        </div>
    );
}

export default CoreService2;