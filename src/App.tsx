import { useDebouncedFn } from "beautiful-react-hooks";
import React, { useEffect, useRef, useState } from "react";
import Features from "./components/features";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import Splash from "./components/splash";
import Testimonials from "./components/testimonials";

function App() {
  const headerRef = useRef<HTMLElement>(null);
  const splashRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const [state, setState] = useState({
    headerHeight: 0,
    windowWidth: window.innerWidth,
  });

  const onWindowResize = useDebouncedFn(() => {
    const headerHeight = headerRef.current?.clientHeight || 0;
    setState({
      headerHeight,
      windowWidth: window.innerWidth,
    });
  }, 333);

  // ? reference: https://itnext.io/responsive-background-images-using-react-hooks-941af365ea1f
  useEffect(() => {
    if (headerRef.current) {
      setState({
        ...state,
        headerHeight: headerRef.current.clientHeight,
      });
    }

    window.addEventListener("resize", onWindowResize);

    return () => {
      window.removeEventListener("resize", onWindowResize);
    };
  }, []);

  return (
    <div className="App">
      <Header
        featuresRef={featuresRef}
        headerHeight={state.headerHeight}
        headerRef={headerRef}
        splashRef={splashRef}
        testimonialsRef={testimonialsRef}
        windowWidth={state.windowWidth}
      />
      <Hero windowWidth={state.windowWidth} />
      <Splash splashRef={splashRef} windowWidth={state.windowWidth} />
      <Features featuresRef={featuresRef} />
      <Testimonials
        testimonialsRef={testimonialsRef}
        windowWidth={state.windowWidth}
      />
      <Footer />
    </div>
  );
}

export default App;
