import React from 'react'
import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText}) =>
     <div className="info-Box">
        <p className="font-medium sm:text-xl text-center">{text}</p>
        <Link to={link} className="neo-brutalism-white neo-btn">
          {btnText}
          <img src={arrow}  className="w-4 h-4 object-contain"/>
        </Link>
     </div>

const renderContent = {
    1: (
      <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
        Hi, I'm
        <span className='font-semibold mx-2 text-white'>Sivelele Nkamane</span>
        👋
        <br />
        A  Full-Stack Web Developer
      </h1>
    ),
    2 :(
     <InfoBox 
           text="Hello! Welcome to my portfolio. I have a strong grasp of user-centered design principles. My portfolio demonstrates my ability to craft intuitive and visually appealing interfaces. "
           link="/about"
           btnText="Learn more"
    />
    ),
   3 :(
      <InfoBox 
            text="As a graduate of Life Choice's Academy, I invite you to explore my portfolio to see the projects I've completed. They showcase my skills and capabilities, and I believe they'll pique your interest."
            link="/projects"
            btnText="Explore my portfolio."
     />
     ),
    4 :(
      <InfoBox 
            text="
            If you're seeking assistance with a project or in need of a skilled developer, I'm just a few keystrokes away. Feel free to reach out for professional support and collaboration."
            link="/contact"
            btnText="Contact Me"
     />
     ),
 };

 const HomeInfo =({ currentStage}) => {
  return renderContent[currentStage] || null;
 }

export default HomeInfo;