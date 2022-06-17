import React  from 'react';
import styles from './footer.module.css';
import ReactDOM from 'react-dom';
import FooterLogo from '../../img/Footer Logo.png';
import FooterFacebook from '../../img/facebook-f.png';
import FooterTwitter from '../../img/twitter (1).png';
import FooterLinkedin from '../../img/linkedin-in.png';
import FooterYoutube from '../../img/youtube.png';
import FooterInstagram from '../../img/instagram (1).png';
import FooterBackground from '../../img/Footer BG 1.png';
import FooterBackground1 from '../../img/Footer BG 2.png';

const Footer = () => {

    return (
        <div>
        <footer>
            <div className={styles.contentFooter}>
                <div className={styles.leftFooter}>
                    <img src={FooterLogo} alt="Logo"/>
                    <div className={styles.addressResponsive}>
                        <h4><span>Beautice</span> is a Beauty Clinic WordPress Theme.</h4>
                        <p>Baker Steet 101, NY, United States.</p>
                        <div className={styles.contactInfo}>
                            <p>+521 569 8966</p>
                            <p>mail@company.com</p>
                        </div>
                    </div>
                </div>
                <div className={styles.midFooter}>
                    <h5>Pages</h5>
                    <ul>
                        <li><a href="/home">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/service">Service</a></li>
                        <li><a href="/gallery">Gallery</a></li>
                        <li><a href="/team">Team</a></li>
                    </ul>
                </div>
                <div className={styles.rightFooter}>
                    <h5>Informations</h5>
                    <ul>
                        <li><a href="">Terms & conditions</a></li>
                        <li><a href="">Privacy policy</a></li>
                        <li><a href="/blog">Blog</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>
            </div>

            
            <div className={styles.subcontentFooter}>
                <div className={styles.mediaIcon}>
                    <a href="https://www.facebook.com/bachasoftware"><img src={FooterFacebook} alt="facebook icon"/></a>
                    <a href="https://twitter.com/BacHaSoftware"><img src={FooterTwitter} alt="twitter-icon"/></a>
                    <a href=""><img src={FooterLinkedin} alt="linkedin-icon"/></a>
                    <a href=""><img src={FooterYoutube} alt="youtube-icon"/></a>
                    <a href=""><img src={FooterInstagram} alt="instagram-icon"/></a>
                </div>
                <div className={styles.copyright}>
                    <p>&copy; AltDesain Studio 2021 - All right reserved</p>
                </div>
            </div>
            <div className={styles.bgFooter}>
                <div className={styles.bgFooter0}></div>
                <img className={styles.bgFooter1} src={FooterBackground} alt="Footer Background 1"/>
                <img className={styles.bgFooter2} src={FooterBackground1} alt="Footer Background 2"/>

            </div>
        </footer>
    </div>
    )
};

export default Footer;