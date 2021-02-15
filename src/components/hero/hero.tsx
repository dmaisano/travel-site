import React from "react";
import { PUBLIC_URL } from "../../constants";
import "./hero.css";

const Hero: React.FC = () => {
  return (
    <div className="large-hero">
      <img src={`${PUBLIC_URL}/assets/images/hero.jpg`} alt="" />
      <div className="large-hero__text-content">
        <h1 className="large-hero__title">Your clarity.</h1>
        <h2 className="large-hero__subtitle">One trip away.</h2>
        <p className="large-hero__description">
          We create soul restoring journeys that inspire you to be you.
        </p>
        <p>
          <a href="#" className="btn btn--orange btn--large">
            Get Started Today
          </a>
        </p>
      </div>
    </div>
  );
};

export default Hero;
