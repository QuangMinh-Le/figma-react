import React from "react";
import styles from './ProfessionalTeam.module.css';
import Expert1 from '../../img/unsplash_pTrhfmj2jDA.png';
import Expert2 from '../../img/unsplash_FVh_yqLR9eA.png';
import Expert3 from '../../img/unsplash_mEZ3PoFGs_k.png';
import ProTeamTwitter from '../../img/Twitter.png';
import ProTeamFacebook from '../../img/Facebook.png';
import ProTeamInstagram from '../../img/Instagram.png';


const ProfessionalTeam = () =>(
    <div>
        <div className={styles.Professional}>
                <div className={styles.contentProTeams}>
                    <h2>Professional Teams</h2>
                    <h3>The Professional expert</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.</p>
                </div>

                <div className={styles.boxProTeams}>
                    <div className={styles.left}>
                        <img src={Expert1} alt="Expert 1"/>
                        <h4>Surgeon</h4>
                        <h5>Bryan Nevalli</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.</p>
                        <div className={styles.socialIcons}>
                            <a href=""><img src={ProTeamTwitter} alt="Twitter"/></a>
                            <a href=""><img src={ProTeamFacebook} alt="Facebook"/></a>
                            <a href=""><img src={ProTeamInstagram} alt="Instagram"/></a>
                        </div>
                    </div>
                    <div className={styles.mid}>
                        <img src={Expert2} alt="Expert 2"/>
                        <h4>Dermatologist</h4>
                        <h5>Bella Sebastian</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.</p>
                        <div className={styles.socialIcons}>
                            <a href=""><img src={ProTeamTwitter} alt="Twitter"/></a>
                            <a href=""><img src={ProTeamFacebook} alt="Facebook"/></a>
                            <a href=""><img src={ProTeamInstagram} alt="Instagram"/></a>
                        </div>
                    </div>
                    <div className={styles.right}>
                        <img src={Expert3} alt="Expert 3"/>
                        <h4>Stylist expert</h4>
                        <h5>Lilly Adams</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.</p>
                        <div className={styles.socialIcons}>
                            <a href=""><img src={ProTeamTwitter} alt="Twitter"/></a>
                            <a href=""><img src={ProTeamFacebook} alt="Facebook"/></a>
                            <a href=""><img src={ProTeamInstagram} alt="Instagram"/></a>
                        </div>
                    </div>
                </div>
            </div>

    </div>
);

export default ProfessionalTeam;
