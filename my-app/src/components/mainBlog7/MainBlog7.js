import React from "react";
import styles from './MainBlog7.module.css';

import FolderIcon from '../../img/Blog-Article-FolderIcon.png';
import ArticleImage1 from '../../img/Blog-Article-Image1.png';
import ArticleImage2 from '../../img/Blog-Article-Image2.png';
import ArticleImage3 from '../../img/Blog-Article-Image3.png';

import RecentPost1 from '../../img/Blog-RecentPost-Image1.png';
import RecentPost2 from '../../img/Blog-RecentPost-Image2.png';
import RecentPost3 from '../../img/Blog-RecentPost-Image3.png';

import Facebook from '../../img/Blog-SocialConnect-Facebook.png';
import Twitter from '../../img/Blog-SocialConnect-Twitter.png';
import Linkedin from '../../img/Blog-SocialConnect-Linkedin.png';
import Instagram from '../../img/Blog-SocialConnect-Instagram.png';


const MainBlog7 = () => {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.bigWrapper}>
                    <div className={styles.left}>
                        <div className={styles.box}>
                            <div className={styles.wrapper}>
                                <img src={ArticleImage1} alt="ArticleImage 1"/>
                                <div className={styles.articleContent}>
                                    <div className={styles.folder}>
                                        <img src={FolderIcon} alt="Folder Icon" />
                                        <h5>Consultation</h5>
                                    </div>
                                    <h4>How much does a consultation cost at our clinic?    </h4>
                                    <p>A wonderful serenity has taken possession of my  entire soul, like these sweet mornings of spring     which I enjoy with my whole heart. I am alone, and  feel the charm of existence in this spot, which was  created for the…</p>
                                    <button>Read more &raquo;</button>
                                </div>
                            </div>
                        </div>
                        <div className={styles.box}>
                            <div className={styles.wrapper}>
                                <img src={ArticleImage2} alt="ArticleImage 2"/>
                                <div className={styles.articleContent}>
                                    <div className={styles.folder}>
                                        <img src={FolderIcon} alt="Folder Icon" />
                                        <h5>Consultation</h5>
                                    </div>
                                    <h4>Watch out! don't choose the wrong beauty    product</h4>
                                    <p>A wonderful serenity has taken possession of my  entire soul, like these sweet mornings of spring     which I enjoy with my whole heart. I am alone, and  feel the charm of existence in this spot, which was  created for the…</p>
                                    <button>Read more &raquo;</button>
                                </div>
                            </div>
                        </div>
                        <div className={styles.box}>
                            <div className={styles.wrapper}>
                                <img src={ArticleImage3} alt="ArticleImage 3"/>
                                <div className={styles.articleContent}>
                                    <div className={styles.folder}>
                                        <img src={FolderIcon} alt="Folder Icon" />
                                        <h5>Consultation</h5>
                                    </div>
                                    <h4>About skin care you need to know</h4>
                                    <p>A wonderful serenity has taken possession of my  entire soul, like these sweet mornings of spring     which I enjoy with my whole heart. I am alone, and  feel the charm of existence in this spot, which was  created for the…</p>
                                    <button>Read more &raquo;</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.right}>
                        <div className={styles.search}>
                            <input type="text" placeholder="Search here ..."/>
                            <button><i className="fas fa-search"></i></button>
                        </div>
                        <div className={styles.recentPost}>
                            <div className={styles.content}>
                                <h3>Recent post</h3>
                            </div>

                            <div className={styles.post}>
                                <img src={RecentPost1} alt="Recent post's thumbnail 1" />
                                <div className={styles.info}>
                                    <h4>01 jan 2022</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                                </div>
                            </div>

                            <div className={styles.post}>
                                <img src={RecentPost2} alt="Recent post's thumbnail 2" />
                                <div className={styles.info}>
                                    <h4>01 jan 2022</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                                </div>
                            </div>

                            <div className={styles.post}>
                                <img src={RecentPost3} alt="Recent post's thumbnail 3" />
                                <div className={styles.info}>
                                    <h4>01 jan 2022</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className={styles.categories}>
                            <h3>Categories</h3>
                            <div className={styles.category}>
                                <a href=""><p>Consultation</p></a>
                                <a href=""><p>Beauty</p></a>
                                <a href=""><p>Treatment</p></a>
                                <a href=""><p>News</p></a>
                            </div>
                        </div>

                        <div className={styles.cloudTag}>
                            <h3>Cloud Tags</h3>
                            <div className={styles.tags}>
                                <div className={styles.rowTags}>
                                    <button><p>beauty</p></button>
                                    <button><p>cute</p></button>
                                    <button><p>skin</p></button>
                                </div>
                                <div className={styles.rowTags}>
                                    <button><p>glow</p></button>
                                    <button><p>style</p></button>
                                    <button><p>clinic</p></button>
                                </div>
                                <div className={styles.rowTags}>
                                    <button><p>style</p></button>
                                    <button><p>great</p></button>
                                    <button><p>cute</p></button>
                                </div>
                            </div>
                        </div>

                        <div className={styles.socialConnect}>
                            <h3>Social Connect</h3>
                            <div className={styles.socialIcons}>
                                <button><img src={Facebook} alt="Facebook" /></button>
                                <button><img src={Twitter} alt="Twitter" /></button>
                                <button><img src={Instagram} alt="Instagram" /></button>
                                <button><img src={Linkedin} alt="Linkedin" /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainBlog7;