import React from "react";
import AboutUs2 from "../components/aboutUs2/AboutUs2";
import Blog2 from "../components/blog2/Blog2";
import CallService2 from "../components/callService2/CallService2";
import CoreService2 from "../components/coreService2/CoreService2";
import Footer from "../components/footer/footer";
import HeaderWhite from "../components/headerWhite/headerWhite";
import MainSlider2 from "../components/mainSlider2/MainSlider2";
import ToTopButton from "../components/toTopButton/ToTopButton";
import WhyUs2 from "../components/whyUs2/WhyUs2";


const Home2 = () => (
    <div>
        <HeaderWhite/>
        <MainSlider2/>
        <AboutUs2/>
        <CoreService2/>
        <WhyUs2/>
        <Blog2/>
        <CallService2/>
        <ToTopButton/>
        <Footer/>
    </div>
);
 export default Home2;