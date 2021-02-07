import React from "react";
import { PUBLIC_URL } from "../constants";

const Hero: React.FC = () => {
  return (
    <div className="large-hero">
      <img src={`${PUBLIC_URL}/assets/images/hero--large.jpg`} alt="" />
      <h1>Your clarity.</h1>
      <h2>One trip away.</h2>
      <p>We create soul restoring journeys that inspire you to be you.</p>
      <p>
        <a href="#">Get Started Today</a>
      </p>
    </div>
  );
};

export default Hero;
