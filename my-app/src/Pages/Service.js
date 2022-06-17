import React from "react";
import Consultation4 from "../components/consultation4/Consultation4";
import FAQ4 from "../components/FAQ4/FAQ4";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import Product4 from "../components/product4/Product4";
import Service4 from "../components/service4/Service4";
import Slogan4 from "../components/slogan4/Slogan4";
import ToTopButton from "../components/toTopButton/ToTopButton";
import Treatment4 from "../components/treatment4/Treatment4";



const Service = () => (
    <div>
        <Header/>
        <Service4/>
        <Consultation4/>
        <Treatment4/>
        <Product4/>
        <Slogan4/>
        <FAQ4/>
        <ToTopButton/>

        <Footer/>
    </div>
);
 export default Service;