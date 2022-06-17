import React from "react";
import Gallery5 from "../components/gallery5/Gallery5";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Quota5 from "../components/quota5/Quota5";
import VideoTour5 from "../components/videoTour5/VideoTour5";
import ToTopButton from "../components/toTopButton/ToTopButton";



const Gallery = () => (
    <div>
        <Header/>
        <Gallery5/>
        <VideoTour5/>
        <Quota5/>
        <ToTopButton/>
        <Footer/>
    </div>
);
 export default Gallery;