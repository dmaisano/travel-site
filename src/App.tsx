import React, { useEffect, useRef, useState } from "react";
import Features from "./components/features";
import Header from "./components/header";
import Hero from "./components/hero";
import Splash from "./components/splash";
import Testimonials from "./components/testimonials";

function App() {
  const splashRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [scrollPos, setScrollPos] = useState(window.scrollY);

  // ? reference: https://itnext.io/responsive-background-images-using-react-hooks-941af365ea1f
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    const handleScroll = () => {
      setScrollPos(window.scrollY);
    };

    window.addEventListener("resize", handleWindowResize);
    window.addEventListener("scroll", handleScroll);

    // update scrollPos
    setScrollPos(window.scrollY);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <Header
        scrollPos={scrollPos}
        splashRef={splashRef}
        featuresRef={featuresRef}
        testimonialsRef={testimonialsRef}
      />
      <Hero />
      <Splash
        windowWidth={windowWidth}
        setWindowWidth={setWindowWidth}
        splashRef={splashRef}
      />
      <Features featuresRef={featuresRef} />
      <Testimonials testimonialsRef={testimonialsRef} />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
