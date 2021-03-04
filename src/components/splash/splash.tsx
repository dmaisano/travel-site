import React, { useEffect, useState } from "react";
import firstTrip from "./first-trip.jpg";
import ourStartLandscape from "./our-start-landscape.jpg";
import ourStartPortrait from "./our-start-portrait.jpg";
import ourStart from "./our-start.jpg";
import "./splash.css";

type SplashProps = {
  windowWidth: number;
  splashRef: any;
};

const Splash: React.FC<SplashProps> = ({ splashRef }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  let ourStartUrl = ourStartLandscape;

  if (windowWidth >= 800) {
    ourStartUrl = ourStartPortrait;
  }
  if (windowWidth >= 1010) {
    ourStartUrl = ourStart;
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
    <div ref={splashRef} id="splash" className="page-section">
      <div className="wrapper">
        <h2 className="text-primary text-center text-3xl font-thin mb-4 md:mb-8 lg:mb-12">
          The first trip we planned{" "}
          <span className="font-normal">was our own.</span>
        </h2>
        <h3 className="text-accent text-center text-xl sm:text-3xl font-thin mb-8 lg:max-w-md lg:mx-auto">
          Ever since, we&rsquo;ve been working to make travel{" "}
          <span className="font-normal">better for everyone.</span>
        </h3>
        <div className="w-full mx-auto text-center mb-8">
          <img
            className="mx-auto"
            src={firstTrip}
            alt="Couple walking down a street."
          />
        </div>
        <div id="founder" className="block md:flex lg:max-w-screen-xl mx-auto">
          <img
            className="mb-8 md:mb-0 w-auto md:w-1/3 md:mr-8"
            src={ourStartUrl}
            alt="Our founder, Jane Doe"
          />
          <div className="w-auto md:w-2/3">
            <h2 className="text-primary font-light text-3xl mb-6">
              Here&rsquo;s how we got started&hellip;
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, <a href="#">quis nostrud exercitation</a>{" "}
              ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum.
            </p>
            <p>
              Duis aute irure dolor in <strong>reprehenderit in</strong>{" "}
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit
              amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum velit esse cillum{" "}
              <strong>dolore eu fugiat.</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Splash;
