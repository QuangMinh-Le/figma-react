import React from "react";
import styles from "./WhyUs2.module.css";
import Image1 from '../../img/Home2-Why-1.png';
import Image2 from '../../img/Home2-Why-2.png';
import Image3 from '../../img/Home2-Why-3.png';
import Image4 from '../../img/Home2-Why-4.png';

const WhyUs2 = () => {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.left}>
                        <h2>Why choosing us?</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis.</p>
                    </div>

                    <div className={styles.right}>
                        <div className={styles.row}>
                            <div className={styles.element}>
                                <img src={Image1} alt="WhyUs-icon1" />
                                <div className = {styles.content}>
                                    <h4>100%</h4>
                                    <h5><span>trusted clinic</span></h5>
                                </div>
                            </div>
                            <div className={styles.element}>
                                <img src={Image3} alt="WhyUs-icon3" />
                                <div className={styles.content}>
                                    <h4>75+</h4>
                                    <h5>asian branch</h5>
                                </div>
                            </div>
                        </div>

                        <div className={styles.row}>
                            <div className={styles.element}>
                                <img src={Image2} alt="WhyUs-icon2" />
                                <div className={styles.content}>
                                    <h4>99%</h4>
                                    <h5>customer love</h5>
                                </div>
                            </div>
                            <div className={styles.element}>
                                <img src={Image4} alt="WhyUs-icon4" />
                                <div className={styles.content}>
                                    <h4>1.200+</h4>
                                    <h5>licensed worker</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhyUs2;