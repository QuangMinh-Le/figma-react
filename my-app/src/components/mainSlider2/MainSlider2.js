import React from "react";
import styles from './MainSlider2.module.css';
import PlayBtn from '../../img/Home2-Slider-PlayBtn.png'

const MainSlider2 = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.left}>
                    <div className={styles.content}>
                        <h1>Your beauty center place</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo, massa pellentesque arcu fusce et magna consequat neque vitae lobortis.</p>
                    </div>
                    <button>More details</button>
                </div>
                <div className={styles.right}>
                    <button><img src={PlayBtn} alt="Play Icon"/></button>
                    <p>Tour video</p>
                </div>
            </div>
        </div>
    );
};

export default MainSlider2;