import React, { useState } from "react";
import styles from './ToTopButton.module.css';
import toTopIcon from '../../img/ToTop Button.png'

const ToTopButton = () => {
    const [toTop, setToTop] = useState (false);

    const changeToTop = () => {
        if(window.scrollY > 200) {
            setToTop(true);
        }
        else {
            setToTop(false);
        };
    };

    window.addEventListener('scroll', changeToTop);

    const toTopFunction = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };


    return (
        <div>
            <div className="toTop">
                <a onClick={toTopFunction} className = {toTop ? styles.toTopButtonBlock: styles.toTopButtonNone}><img src={toTopIcon} alt="To Top icon"/></a>
            </div>
        </div>
    );

}

export default ToTopButton;