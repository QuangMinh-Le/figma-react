import React, {useState} from 'react';
import styles from './header.module.css';
import Logo from '../../img/Main Logo.svg';

const Header = () => {

    const [navbar, setNavbar] = useState (false);

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
                <a href="" className={styles.Logo}><img src={Logo} alt="Logo"/></a>
                <div className={styles.Menu}>
                    <input type="checkbox" id={styles.check}/>
                    <label for="check" className={styles.checkBtn}>
                        <i className="fa fa-bars"></i>
                    </label>
                    <ul>
                        <li><a href=""><span>Home +</span></a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Service</a></li>
                        <li><a href="">Gallery</a></li>
                        <li><a href="">Blog</a></li>
                        <div className={styles.contactBtn}>
                            <button>
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