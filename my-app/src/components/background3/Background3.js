import React from "react";
import styles from './Background3.module.css';
import BackgroundBubble from '../../img/Background Bubble.png';
import BackgroundBubble1 from '../../img/Background Bubble (1).png';


const Background3 = () => (
    <div>
        <div className={styles.Backgrounds}>
            <div className={styles.bgAboutUs}>
                <img src={BackgroundBubble} alt="Background Bubble"/>
            </div>
            <div className={styles.bgContactUs}>
                <img src={BackgroundBubble1} alt="Background Bubble 1"/>
            </div>

        </div>

    </div>
);

export default Background3;
