import React from "react";
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import ErrorPage from "./Pages/ErrorPage";
import Gallery from "./Pages/Gallery";
import Home1 from "./Pages/Home1";
import Home2 from "./Pages/Home2";
import Service from "./Pages/Service";
import Team from "./Pages/Team";

const App = () => (
    <div>
        <Router>
            <Routes>
                <Route path='/' element={<Home1/>}></Route>
                <Route path='/home2' element={<Home2/>}></Route>
                <Route path='/about' element={<About/>}></Route>
                <Route path='/gallery' element={<Gallery/>}></Route>
                <Route path='/service' element={<Service/>}></Route>
                <Route path='/blog' element={<Blog/>}></Route>
                <Route path='/contact' element={<Contact/>}></Route>
                <Route path='/team' element={<Team/>}></Route>
                <Route path="*" element={<ErrorPage/>}></Route>
            </Routes>
        </Router>
    </div>
);

export default App;
