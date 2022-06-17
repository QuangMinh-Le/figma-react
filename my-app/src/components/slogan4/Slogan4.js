import React from "react";
import styles from "./Slogan4.module.css";
import PlayBtn from '../../img/Home2-Slider-PlayBtn.png'

const Slogan4 = () => {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.left}>
                        <h3>Best responsibilities and service for our customers</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis.</p>
                    </div>

                    <div className={styles.right}>
                        <button><img src={PlayBtn} alt="Play Icon"/></button>
                        <p>Treatments videos</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Slogan4;