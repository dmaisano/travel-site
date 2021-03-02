import React, { useEffect, useState } from "react";
import heroLarge from "./hero--large.jpg";
import heroMedium from "./hero--medium.jpg";
import heroSmall from "./hero--small.jpg";
import heroSmaller from "./hero--smaller.jpg";
import "./hero.css";

const Hero: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  let imageUrl = heroSmaller;

  if (windowWidth >= 640) {
    imageUrl = heroSmall;
  }
  if (windowWidth >= 990) {
    imageUrl = heroMedium;
  }
  if (windowWidth >= 1380) {
    imageUrl = heroLarge;
  }

  // ? reference: https://itnext.io/responsive-background-images-using-react-hooks-941af365ea1f
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div
      id="hero"
      className="relative pt-32 pb-16 border-b-10 border-primary"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      <div className="wrapper z-10 text-center">
        <h1 className="text-primary font-light text-4xl sm:text-7xl pb">
          Your Clarity.
        </h1>
        <h2 className="text-primary font-light text-2xl sm:text-5xl sm:mb-4 md:mb-8">
          One trip away.
        </h2>
        <p
          id="description"
          className="text-white font-thin text-lg sm:text-3xl max-w-md my-4 mx-auto md:mb-8"
        >
          We create soul restoring journeys that inspire you to be you.
        </p>
        <button className="btn btn--orange btn--large">
          Get Started Today
        </button>
      </div>
    </div>
  );
};

export default Hero;
