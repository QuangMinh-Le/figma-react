import React from "react";
import ContactUs8 from "../components/contactUs8/ContactUs8";
import Footer from "../components/footer/footer";
import GetInTouch8 from "../components/getInTouch8/GetInTouch8";
import Header from "../components/header/header";
import ToTopButton from "../components/toTopButton/ToTopButton";

const Contact = () => {
    return (
        <div>
            <Header/>
            <ContactUs8/>
            <GetInTouch8/>
            <ToTopButton/>
            <Footer/>
        </div>
    );
}

export default Contact;