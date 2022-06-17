import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import styles from './header.module.css';
import Logo from '../../img/Main Logo.svg';

const Header = () => {

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
                <a href='/' className={styles.Logo}><img src={Logo} alt="Logo"/></a>
                <div className={styles.Menu}>
                    <button className={styles.checkBtn} onClick={changeCheckBox}><i className="fa fa-bars"></i></button>
                    <ul className={checkBox ? styles.navChecked : styles.navCheck}>
                        <li><a href="/home2"><span>Home +</span></a></li>
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

export default Header;