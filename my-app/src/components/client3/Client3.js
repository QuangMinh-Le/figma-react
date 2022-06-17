import React from "react";
import styles from "./Client3.module.css";
import client1 from '../../img/About-Client-LOGO1.png';
import client2 from '../../img/About-Client-LOGO2.png';
import client3 from '../../img/About-Client-LOGO3.png';
import client4 from '../../img/About-Client-LOGO4.png';
import client5 from '../../img/About-Client-LOGO5.png';

const Client3 = () => {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.bigWrapper}>
                    <div className={styles.content}>
                        <h2>Our Clients</h2>
                        <h3>Well-known agencies</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </div>
                    <div className={styles.clients}>
                        <div className={styles.group}>
                            <img src={client1} alt="Blizt entertainment" />
                            <img src={client2} alt="KZ Artist" />
                        </div>
                        <div className={styles.group}>
                            <img src={client3} alt="Circle" />
                            <img src={client4} alt="George" />
                        </div>
                        <div className={styles.group}>
                            <img src={client5} alt="Amanda Laurent" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Client3;