import React, {useState} from "react";
import styles from './FAQ4.module.css';
import dropSymbol from '../../img/Service-FAQ-DropSymbol.svg';
import Background from "../../img/Service-Background.png";

const FAQ4 = () => {
    const [dropBtn1, setDropBtn1] = useState(false);
    const [dropBtn2, setDropBtn2] = useState(false);
    const [dropBtn3, setDropBtn3] = useState(false);
    const [dropBtn4, setDropBtn4] = useState(false);

    const dropInfo1 = () => {
        if (dropBtn1 == false) {
            setDropBtn1(true);
        } else {
            setDropBtn1(false);
        }
    }

    const dropInfo2 = () => {
        if (dropBtn2 == false) {
            setDropBtn2(true);
        } else {
            setDropBtn2(false);
        }
    }

    const dropInfo3 = () => {
        if (dropBtn3 == false) {
            setDropBtn3(true);
        } else {
            setDropBtn3(false);
        }
    }

    const dropInfo4 = () => {
        if (dropBtn4 == false) {
            setDropBtn4(true);
        } else {
            setDropBtn4(false);
        }
    }

    return (
        <div>
            <img src={Background} alt="Bubble Background" className={styles.background} />
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.content}>
                        <h2>Service FAQ's</h2>
                        <hr />
                    </div>

                    <div className={styles.list}>
                        <div className={styles.group}>
                            <div className={styles.section}>
                                <h5>Is beauty consultation handled thoroughly?</h5>
                                <button><img src={dropSymbol} alt="Drop Symbol" onClick={dropInfo1}/></button>
                            </div>
                            <div className={dropBtn1 ? styles.info: styles.infoGone}>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna
                                    <br />
                                    <br />
                                    porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla</p>
                            </div>
                            
                        </div>

                        <div className={styles.group}>
                            <div className={styles.section}>
                                <h5>Can I be beautiful in an instant time?</h5>
                                <button><img src={dropSymbol} alt="Drop Symbol" onClick={dropInfo2}/></button>
                            </div>
                            <div className={dropBtn2 ? styles.info: styles.infoGone}>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna
                                    <br />
                                    <br />
                                    porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla</p>
                            </div>
                            
                        </div>

                        <div className={styles.group}>
                            <div className={styles.section}>
                                <h5>Do professionals have accreditation in their respective fields?</h5>
                                <button><img src={dropSymbol} alt="Drop Symbol" onClick={dropInfo3}/></button>
                            </div>
                            <div className={dropBtn3 ? styles.info: styles.infoGone}>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna
                                    <br />
                                    <br />
                                    porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla</p>
                            </div>
                            
                        </div>

                        <div className={styles.group}>
                            <div className={styles.section}>
                                <h5>Are there any side effects to the treatment methods or treatments at this clinic?</h5>
                                <button><img src={dropSymbol} alt="Drop Symbol" onClick={dropInfo4}/></button>
                            </div>
                            <div className={dropBtn4 ? styles.info: styles.infoGone}>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna
                                    <br />
                                    <br />
                                    porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla</p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default FAQ4;
