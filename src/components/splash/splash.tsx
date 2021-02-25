import React, { useEffect, useState } from "react";
import firstTrip from "./first-trip.jpg";
import ourStartLandscape from "./our-start-landscape.jpg";
import ourStartPortrait from "./our-start-portrait.jpg";
import ourStart from "./our-start.jpg";
import "./splash.css";

const Splash: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  let ourStartUrl = ourStartLandscape;

  if (windowWidth >= 800) {
    ourStartUrl = ourStartPortrait;
  }
  if (windowWidth >= 1200) {
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
    <div id="splash" className="pt-10 px-4 mx-auto max-w-screen-lg">
      <h2 className="text-primary text-center text-3xl font-thin mb-4">
        The first trip we planned{" "}
        <span className="font-normal">was our own.</span>
      </h2>
      <h3 className="text-accent text-center text-xl font-thin mb-8">
        Ever since, we&rsquo;ve been working to make travel{" "}
        <span className="font-normal">better for everyone.</span>
      </h3>
      <img
        className="mb-4"
        src={firstTrip}
        alt="Couple walking down a street."
      />
      <img
        className="mb-4 md:mb-0"
        src={ourStartUrl}
        alt="Our founder, Jane Doe"
      />
      <h2 className="text-primary font-light text-3xl mb-6">
        Here&rsquo;s how we got started&hellip;
      </h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, <a href="#">quis nostrud exercitation</a> ullamco laboris nisi
        ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
        qui officia deserunt mollit anim id est laborum.
      </p>
      <p>
        Duis aute irure dolor in <strong>reprehenderit in</strong> voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur
        adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </p>
      <p>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        velit esse cillum <strong>dolore eu fugiat.</strong>
      </p>
    </div>
  );
};

export default Splash;
