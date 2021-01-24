import React from "react";
import HeroImage from "../assets/hero.jpg";
import "../styles/hero.css";

const Hero = () => {
  return (
    <div className='hero-container'>
      <img className='hero-image' src={HeroImage} alt='hero' />
      <div className='overlay-img'></div>
    </div>
  );
};

export default Hero;
