import React from "react";
import styles from "./VideoTour5.module.css";
import PlayBtn from '../../img/Home2-Slider-PlayBtn.png'

const VideoTour5 = () => {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.content}>
                        <h3>Watch the Video Tour</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis.</p>
                    </div>

                    <div className={styles.playBtn}>
                        <button><img src={PlayBtn} alt="Play Icon"/></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VideoTour5;