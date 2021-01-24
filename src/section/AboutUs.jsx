import React from "react";
import "../styles/about-us.css";

const AboutUs = () => {
  return (
    <div className='about-us'>
      <h1 className='primary-heading'>creative & dynamic</h1>
      <h1 className='secondary-heading'>everything you need is here</h1>
      <p className='para-about'>
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form
      </p>
      <div className='btn-group'>
        <button className='btn-register'>Register</button>
        <button className='btn-contact'>Contact</button>
      </div>
    </div>
  );
};

export default AboutUs;
