import React from "react";
import styles from './Background.module.css';
import SlideBackground from '../../img/Slide Background.png';
import BackgroundBubble from '../../img/Background Bubble.png';
import BackgroundBubble1 from '../../img/Background Bubble (1).png';
import FooterBackground from '../../img/Footer BG 1.png';
import FooterBackground1 from '../../img/Footer BG 2.png';


const Background = () => (
    <div>
        <div className={styles.Backgrounds}>
            <div className={styles.bgSlider}>
                <img src={SlideBackground} alt="Slide Background"/>
            </div>
            <div className={styles.bgAboutUs}>
                <img src={BackgroundBubble} alt="Background Bubble"/>
            </div>
            <div className={styles.bgContactUs}>
                <img src={BackgroundBubble1} alt="Background Bubble 1"/>
            </div>

        </div>

    </div>
);

export default Background;
