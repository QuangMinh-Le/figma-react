import React from "react";
import styles from './AboutUs.module.css';
import PlayButton from '../../img/Play_button.png';
import ImageAB from '../../img/unsplash_LRXYS0tSyGc.png';

const AboutUs = ()=> (
    <div>
        <div className={styles.AboutUs}>
                <div className={styles.contentAboutUs}>
                    <h2>About Us</h2>
                    <h3>We are the best beauty clinic</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet.
                        Egestas volutpat facilisi eu libero. Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus
                        in suspendisse placerat.
                        <br/>
                        <br/>
                        Id dui erat sed quam tellus in purus. Pellentesque congue fringilla cras tellus enim.
                    </p>
                    <div className={styles.buttonAboutUs}>
                        <button>Learn More</button>
                        <div className={styles.watchVid}>
                            <img src={PlayButton} alt="Play button"/>
                            <p>Watch Video</p>
                        </div>
                    </div>
                </div>
                <div className={styles.imageAboutUs}>
                    <img src={ImageAB} alt="Image 2"/>
                </div>
            </div>
    </div>
);

export default AboutUs;
