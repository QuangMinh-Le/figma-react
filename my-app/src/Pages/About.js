import React from "react";
import AboutSection3 from "../components/aboutSection3/AboutSection3";
import Background3 from "../components/background3/Background3";
import Client3 from "../components/client3/Client3";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import Mission3 from "../components/mission3/Mission3";
import ProfessionalTeam from "../components/professionalTeam/ProfessionalTeam";
import Slogan3 from "../components/slogan3/Slogan3";
import ToTopButton from "../components/toTopButton/ToTopButton";
import Vision3 from "../components/vision3/Vision3";

const About = () => {
    return(
        <div>
            <Header/>
            <AboutSection3/>
            <ProfessionalTeam/>
            <Slogan3/>
            <Vision3/>
            <Mission3/>
            <Client3/>
            <Background3/>
            <ToTopButton/>
            <Footer/>

        </div>
    );
}

export default About;