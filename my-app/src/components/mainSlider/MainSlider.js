import React  from 'react';
import styles from './MainSlider.module.css';
import MainSliderImage from '../../img/Frame 1.png'


const MainSlider = () => (
    <div>
        <div className={styles.Slider}>
            <div className={styles.frames}>
                <div className={styles.frame1}>
                    <div className={styles.contentSlider}>
                        <h1>Clinic & beauty consultant</h1>
                        <p>
                            It is a long established fact that a reader will be by the
                            readable content of a page.
                        </p>
                    </div>
                    <div className={styles.detailsButton}>
                        <button>More Details</button>
                    </div>
                </div>
                <div className={styles.frame2}>
                    <img src={MainSliderImage} alt="Picture 1"/>
                </div>
            </div>
            <div className={styles.slidesButton}>
                <div><a href=""></a></div>
                <div><a href=""></a></div>
                <div><a href=""></a></div>
            </div>
        </div>
    </div>
);

export default MainSlider;
