import React from "react";
import styles from './CallService2.module.css';

import CallIcon from '../../img/Home2-CallService-Call.png';
import WaveLine from '../../img/Home2-CallService-WaveLine.png';

const CallService2 = () => {
    return (
        <div>
            <div>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.left}>
                        <h2>Request call services</h2>
                        <p>Lorem ipsum dolor sit amet, consect adipiscing elit <span>Contact Us.</span></p>
                    </div>

                    <div className={styles.right}>
                        <div className={styles.form}>
                            <input type="text" placeholder="Insert your phone number here ..." />
                            <button><img src={CallIcon} alt="Call" /></button>
                        </div>
                        <p>Toll free for our coverage area</p>
                    </div>
                </div>
            </div>
            <div className={styles.waveLine}>
                <img src={WaveLine} alt="Wave Line" />
            </div>

        </div>
        </div>
    );
        
}

export default CallService2;