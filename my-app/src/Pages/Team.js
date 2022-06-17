import React from "react";
import AssistanceTeam6 from "../components/assistanceTeam6/AssistanceTeam6";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import OurTeam6 from "../components/ourTeam6/ourTeam6";
import Slogan6 from "../components/Slogan6/Slogan6";
import Testimonials6 from "../components/testimonials6/Testimonials6";
import ToTopButton from "../components/toTopButton/ToTopButton";

const Team = () => {
    return (
        <div>
            <Header/>
            <OurTeam6/>
            <AssistanceTeam6/>
            <Slogan6/>
            <Testimonials6/>
            <ToTopButton/>
            <Footer/>
        </div>
    );
}

export default Team;