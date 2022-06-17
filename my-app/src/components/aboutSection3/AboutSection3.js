import React from "react";
import styles from './AboutSection3.module.css';
import AboutBackground from '../../img/About-About-Image.png';
import PlayBtn from '../../img/About-About-PlayBtn.png';

const AboutSection3 = () => {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.content}>
                        <h2>About</h2>
                        <h3>We are a leading beauty clinic that has been around since 2002</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</p>
                    </div>

                    <div className={styles.playback}>   
                        <img className={styles.background} src={AboutBackground} alt="Background" />
                        <button><img src={PlayBtn} alt="Play Btn" /></button>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default AboutSection3;