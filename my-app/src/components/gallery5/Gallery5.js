import React from "react";
import styles from './Gallery5.module.css';
import Image1_1 from '../../img/Gallery-Gallery-Row1-1.png';
import Image1_2 from '../../img/Gallery-Gallery-Row1-2.png';
import Image1_3 from '../../img/Gallery-Gallery-Row1-3.png';
import Image2_1 from '../../img/Gallery-Gallery-Row2-1.png';
import Image2_2 from '../../img/Gallery-Gallery-Row2-2.png';
import Image2_3 from '../../img/Gallery-Gallery-Row2-3.png';
import Image3_1 from '../../img/Gallery-Gallery-Row3-1.png';
import Image3_2 from '../../img/Gallery-Gallery-Row3-2.png';
import Image3_3 from '../../img/Gallery-Gallery-Row3-3.png';


const Gallery5 = () => {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.content}>
                        <div className={styles.left}>
                            <h2>Our Gallery</h2>
                            <h3>Check out the collection pictures from our clinic</h3>
                        </div>
                        <div className={styles.right}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit  ut aliquam, purus sit amet luctus venenatis</p>
                        </div>
                    </div>
                    <div className={styles.images}>
                        <div className={styles.row}>
                            <img src={Image1_1} alt="Image Row1-1" />
                            <img src={Image1_2} alt="Image Row1-2" />
                            <img src={Image1_3} alt="Image Row1-3" />
                        </div>
                        <div className={styles.row}>
                            <img src={Image2_1} alt="Image Row2-1" />
                            <img src={Image2_2} alt="Image Row2-2" />
                            <img src={Image2_3} alt="Image Row2-3" />
                        </div>
                        <div className={styles.row}>
                            <img src={Image3_1} alt="Image Row3-1" />
                            <img src={Image3_2} alt="Image Row3-2" />
                            <img src={Image3_3} alt="Image Row3-3" />
                        </div>
                    </div>
                    <div className={styles.subContent}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut   aliquam, purus sit amet luctus venenatis, lectus magna fringilla  urna, porttitor rhoncus dolor purus non enim, <span>our teams.</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Gallery5;