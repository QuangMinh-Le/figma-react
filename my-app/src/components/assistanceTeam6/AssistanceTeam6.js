import React from "react";
import styles from './AssistanceTeam6.module.css';
import Image1 from '../../img/Team-AssistanceTeam-Image1.png';
import Image2 from '../../img/Team-AssistanceTeam-Image2.png';
import Image3 from '../../img/Team-AssistanceTeam-Image3.png';

const AssistanceTeam6 = () => {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.content}>
                        <h2>Assistance Team</h2>
                        <h3>Meet the pro assistance</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.</p>
                    </div>

                    <div className={styles.boxes}>
                        <div className={styles.box}>
                            <div className={styles.left}>
                                <img src={Image1} alt="Assistance 1" />
                            </div>
                            <div className={styles.right}>
                                <h5><span>Lina Gustav /</span> Pharmacist</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id magnis at placerat pulvinar euismod neque.</p>
                            </div>
                        </div>
                        <div className={styles.box}>
                            <div className={styles.left}>
                                <img src={Image2} alt="Assistance 2" />
                            </div>
                            <div className={styles.right}>
                                <h5><span>Adam White /</span> finance</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id magnis at placerat pulvinar euismod neque.</p>
                            </div>
                        </div>
                        <div className={styles.box}>
                            <div className={styles.left}>
                                <img src={Image3} alt="Assistance 3" />
                            </div>
                            <div className={styles.right}>
                                <h5><span>Jane Doe /</span> Marketer</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id magnis at placerat pulvinar euismod neque.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default AssistanceTeam6;