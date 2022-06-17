import React from "react";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import MainBlog7 from "../components/mainBlog7/MainBlog7";
import Tittle7 from "../components/tittle7/Tittle7";
import ToTopButton from "../components/toTopButton/ToTopButton";

const Blog = () => {
    return (
        <div>
            <Header/>
            <Tittle7/>
            <MainBlog7/>
            <ToTopButton/>
            <Footer/>
        </div>
    );
}

export default Blog;