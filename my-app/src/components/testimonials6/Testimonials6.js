import React from "react";
import styles from './Testimonials6.module.css';
import Slider from "react-slick";
import Image1 from '../../img/Team-Slider-Image1.png';
import Image2 from '../../img/Team-Slider-Image2.png';
import Image3 from '../../img/Team-Slider-Image3.png';
import Star from '../../img/Team-Slider-Star.png';
import Background1 from '../../img/Team-Testimonial-Background1.png';
import Background2 from '../../img/Team-Testimonial-Background2.png';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "rgb(9, 17, 86)", borderRadius: '50%'}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "rgb(9, 17, 86)", borderRadius: '50%'}}
      onClick={onClick}
    />
  );
}

const Testimonials6 = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        prevArrow: <SamplePrevArrow/>,
        nextArrow: <SampleNextArrow/>,
    };

    return(
        <div>
            <img src={Background1} alt="Stripes Background 1" className={styles.background1}/>
            <img src={Background2} alt="Stripes Background 2" className={styles.background2}/>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.content}>
                        <h2>Our Testimonials</h2>
                        <h3>What our customer says</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.</p>
                    </div>
                    <div className={styles.sliderContainer}>
                        <Slider {...settings}>
                            <div className={styles.element}>
                                <div className={styles.imageContainer}>
                                    <img src={Image1} alt="Testimonial 1" />
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus metus tincidunt laoreet ultricies condimentum ac integer aliquam. Lorem diam dignissim amet fermentum elementum dui dui. Aliquam sem elementum morbi imperdiet suscipit erat ut. Purus volutpat in turpis gravida blandit.</p>
                                <div className={styles.stars}>
                                    <img src={Star} alt="Star" />
                                    <img src={Star} alt="Star" />
                                    <img src={Star} alt="Star" />
                                    <img src={Star} alt="Star" />
                                    <img src={Star} alt="Star" />
                                </div>
                            </div>
                            <div className={styles.element}>
                                <div className={styles.imageContainer}>
                                    <img src={Image2} alt="Testimonial 2" />
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus metus tincidunt laoreet ultricies condimentum ac integer aliquam. Lorem diam dignissim amet fermentum elementum dui dui. Aliquam sem elementum morbi imperdiet suscipit erat ut. Purus volutpat in turpis gravida blandit.</p>
                                <div className={styles.stars}>
                                    <img src={Star} alt="Star" />
                                    <img src={Star} alt="Star" />
                                    <img src={Star} alt="Star" />
                                    <img src={Star} alt="Star" />
                                </div>
                            </div>
                            <div className={styles.element}>
                                <div className={styles.imageContainer}>
                                    <img src={Image3} alt="Testimonial 3" />
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus metus tincidunt laoreet ultricies condimentum ac integer aliquam. Lorem diam dignissim amet fermentum elementum dui dui. Aliquam sem elementum morbi imperdiet suscipit erat ut. Purus volutpat in turpis gravida blandit.</p>
                                <div className={styles.stars}>
                                    <img src={Star} alt="Star" />
                                    <img src={Star} alt="Star" />
                                    <img src={Star} alt="Star" />
                                    <img src={Star} alt="Star" />
                                    <img src={Star} alt="Star" />
                                    <img src={Star} alt="Star" />
                                </div>
                            </div>
                        </Slider>   
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonials6;