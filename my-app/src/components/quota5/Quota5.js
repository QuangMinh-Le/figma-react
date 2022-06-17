import React from "react";
import styles from './Quota5.module.css';
import Background from '../../img/Gallery-Quota-Background.png';

const Quota5 = () => {
    return (
        <div>
            <img src={Background} alt="Bubble Background" className={styles.background}/>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.left}>
                        <div className={styles.content}>
                            <h2>Get The Quota</h2>
                            <h3>Want to be handled by our professional team immediately?</h3>
                            <p>Id dui erat sed quam tellus in purus. Pellentesque congue fringilla cras tellus enim.</p>
                        </div>
                    </div>

                    <div className={styles.right}>
                        <button>Make an appointment</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Quota5;