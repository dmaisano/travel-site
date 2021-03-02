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
    <div className="App">
      <Header
        windowWidth={windowWidth}
        setWindowWidth={setWindowWidth}
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
