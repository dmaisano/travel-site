import { useDebouncedFn } from "beautiful-react-hooks";
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
  const [windowWidth, setWidth] = useState(window.innerWidth);

  const onWindowResize = useDebouncedFn(() => {
    console.log("I RAN");
    setWidth(window.innerWidth);
  }, 333);

  // ? reference: https://itnext.io/responsive-background-images-using-react-hooks-941af365ea1f
  useEffect(() => {
    window.addEventListener("resize", onWindowResize);

    return () => {
      window.removeEventListener("resize", onWindowResize);
    };
  }, []);

  return (
    <div className="App">
      <Header
        windowWidth={windowWidth}
        splashRef={splashRef}
        featuresRef={featuresRef}
        testimonialsRef={testimonialsRef}
      />
      <Hero />
      <Splash windowWidth={windowWidth} splashRef={splashRef} />
      <Features featuresRef={featuresRef} />
      <Testimonials testimonialsRef={testimonialsRef} />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
