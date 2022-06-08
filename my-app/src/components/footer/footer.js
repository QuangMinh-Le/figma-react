import React  from 'react';
import styles from './footer.module.css';
import ReactDOM from 'react-dom';
import FooterLogo from '../../img/Footer Logo.png';
import FooterFacebook from '../../img/facebook-f.png';
import FooterTwitter from '../../img/twitter (1).png';
import FooterLinkedin from '../../img/linkedin-in.png';
import FooterYoutube from '../../img/youtube.png';
import FooterInstagram from '../../img/instagram (1).png';

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
                        <li><a href="">Home</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Service</a></li>
                        <li><a href="">Gallery</a></li>
                        <li><a href="">Team</a></li>
                    </ul>
                </div>
                <div className={styles.rightFooter}>
                    <h5>Informations</h5>
                    <ul>
                        <li><a href="">Terms & conditions</a></li>
                        <li><a href="">Privacy policy</a></li>
                        <li><a href="">Blog</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </div>
            </div>

            
            <div className={styles.subcontentFooter}>
                <div className={styles.mediaIcon}>
                    <a href=""><img src={FooterFacebook} alt="facebook icon"/></a>
                    <a href=""><img src={FooterTwitter} alt="twitter-icon"/></a>
                    <a href=""><img src={FooterLinkedin} alt="linkedin-icon"/></a>
                    <a href=""><img src={FooterYoutube} alt="youtube-icon"/></a>
                    <a href=""><img src={FooterInstagram} alt="instagram-icon"/></a>
                </div>
                <div className={styles.copyright}>
                    <p>&copy; AltDesain Studio 2021 - All right reserved</p>
                </div>
            </div>
        </footer>
    </div>
    )
};

export default Footer;