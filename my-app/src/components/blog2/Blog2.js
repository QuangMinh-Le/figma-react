import React from "react";
import styles from "./Blog2.module.css";
import Image1 from '../../img/Home2-Blog-1.png';
import Image2 from '../../img/Home2-Blog-2.png';
import Image3 from '../../img/Home2-Blog-3.png';
import WaveLine from '../../img/Home2-Blog-WaveLine.png';

const Blog2 = () => {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.bigWrapper}>
                    <div className={styles.content}>
                        <h2>The Blog</h2>
                        <h3>Our latest news</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className={styles.boxes}>
                        <div className={styles.box}>
                            <div className={styles.wrapper}>
                                <img src={Image1} alt="Blog 1 - Image"/>
                                <h4>How much does a consultation cost at our clinic?</h4>
                                <p>LA wonderful serenity has taken possession of my entire soul, like these sweet mornings ...</p>
                                <a href="">Learn more &gt;&gt;</a>
                            </div>
                        </div>

                        <div className={styles.box}>
                            <div className={styles.wrapper}>
                                <img src={Image2} alt="Blog 2 - Image"/>
                                <h4>Watch out! don't choose the wrong beauty product</h4>
                                <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings ...</p>
                                <a href="">Learn more &gt;&gt;</a>
                            </div>
                        </div>

                        <div className={styles.box}>
                            <div className={styles.wrapper}>
                                <img src={Image3} alt="Blog 3 - Image"/>
                                <h4>About skin care you need to know</h4>
                                <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings ...</p>
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

export default Blog2;