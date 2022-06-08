import React from "react";
import styles from './CoreService.module.css';
import Animation1 from '../../img/Animation1.png';
import Animation2 from '../../img/Animation2.png';
import Animation3 from '../../img/Animation3.png';

const CoreService = () => (
    <div>
        <div className={styles.Service}>
                <div className={styles.contentService}>
                    <h2>Main Services</h2>
                    <h3>Learn service to focus on your beauty</h3>
                    <p>Porta rhoncus orci condimentum vitae lobortis eu dignissim non massa. Non parturient amet,
                        feugiat tellus sagittis, scelerisque eget nulla turpis.</p>
                </div>
                <div className={styles.boxSection}>
                    <div className={styles.left}>
                        <div className={styles.boxImg}><img src={Animation1} alt="Animation 1"/></div>
                        <h4>Beauty consultation</h4>
                        <p>Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.</p>
                    </div>
                    <div className={styles.mid}>
                        <div className={styles.boxImg}><img src={Animation2} alt="Animation 2"/></div>
                        <h4>Skin treatments</h4>
                        <p>Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.</p>
                    </div>
                    <div className={styles.right}>
                        <div className={styles.boxImg}><img src={Animation3} alt="Animation 3"/></div>
                        <h4>Beauty products</h4>
                        <p>Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.</p>
                    </div>
                </div>
        </div>
    </div>
);

export default CoreService;