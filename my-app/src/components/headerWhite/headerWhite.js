import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import styles from './headerWhite.module.css';
import LogoWhite from '../../img/Footer Logo.png';

const HeaderWhite = () => {
    const navigate = useNavigate();
    const [navbar, setNavbar] = useState (false);
    const [checkBox, setCheckBox] = useState(true);

    const changeCheckBox = () => {
        if (checkBox == false) {
            setCheckBox(true);
        } else {
            setCheckBox(false);
        }
        console.log(checkBox)
    }

    const changeBGNavbar = () => {
        if(window.scrollY > 200) {
            setNavbar(true);
        }
        else {
            setNavbar(false);
        };
    };
    window.addEventListener('scroll', changeBGNavbar);
    return (
        <div>
            <div className={navbar ? styles.headerBlurChanged: styles.headerBlur} id="top">
            </div>
            <header className={styles.Header}>
                <a href="/" className={styles.Logo}><img src={LogoWhite} alt="Logo"/></a>
                <div className={styles.Menu}>
                    <button className={styles.checkBtn} onClick={changeCheckBox}><i class="fa fa-bars"></i></button>
                    <ul className={checkBox ? styles.navChecked : styles.navCheck}>
                        <li><a href="/home2">Home +</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/service">Service</a></li>
                        <li><a href="/gallery">Gallery</a></li>
                        <li><a href="/blog">Blog</a></li>
                        <div className={styles.contactBtn}>
                            <button onClick={()=> {
                                navigate('/contact')
                            }}>
                                <p>Contact</p>
                            </button>
                        </div>
                    </ul>
                </div>
            </header>
        </div>
    )

};

export default HeaderWhite;