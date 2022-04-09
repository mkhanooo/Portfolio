import React,{useEffect} from "react";
import Location from "../location";
import Projects from "../projects";
import { Element } from "react-scroll";
import {Link} from 'react-router-dom';
import Experiance from "../experiance";
import Layout from "../layout";
import About from "../about";
import Contact from "../contact";
import Carousel from "../carousel";
const Home = () => {
  useEffect(()=>{
    document.body.classList.remove("overflow-hidden");
    document.body.style.overflow = `visible`;
  })
  return (
    <div style={{position: `relative`}}>
      <Layout>
        <Element name="about">
          <About />
        </Element>
        <Carousel />
        <Element name="experiance">
          <Experiance />
        </Element>
        <Element name="projects">
          <Projects />
        </Element>
        <Element name="location">
          <Location />
        </Element>
        <Element name="contact">
          <Contact />
        </Element>
      </Layout>
      <Link to="/admin/login" className="secLink">&nbsp;</Link>
    </div>
  );
};

export default Home;
