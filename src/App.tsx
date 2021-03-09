import { useDebouncedFn, useWindowResize } from "beautiful-react-hooks";
import React, { useEffect, useRef, useState } from "react";
import Contact from "./components/contact";
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
    modalIsVisible: false,
  });

  const toggleModalVisibility = () => {
    const modalIsVisible = !state.modalIsVisible;

    setState({
      ...state,
      modalIsVisible,
    });
  };

  const onWindowResize = useDebouncedFn(() => {
    const headerHeight = headerRef.current?.clientHeight || 0;

    setState({
      ...state,
      headerHeight,
      windowWidth: window.innerWidth,
    });
  }, 333);

  useWindowResize(onWindowResize);

  useEffect(() => {
    if (headerRef.current) {
      setState({
        ...state,
        headerHeight: headerRef.current.clientHeight,
      });
    }
  }, []);

  return (
    <div className="App">
      <Header
        toggleModalVisibility={toggleModalVisibility}
        featuresRef={featuresRef}
        headerHeight={state.headerHeight}
        headerRef={headerRef}
        splashRef={splashRef}
        testimonialsRef={testimonialsRef}
        windowWidth={state.windowWidth}
      />
      <Hero
        toggleModalVisibility={toggleModalVisibility}
        windowWidth={state.windowWidth}
      />
      <Splash splashRef={splashRef} windowWidth={state.windowWidth} />
      <Features featuresRef={featuresRef} />
      <Testimonials
        testimonialsRef={testimonialsRef}
        windowWidth={state.windowWidth}
      />
      <Footer toggleModalVisibility={toggleModalVisibility} />

      <Contact
        isVisisble={state.modalIsVisible}
        toggleModalVisibility={toggleModalVisibility}
      />
    </div>
  );
}

export default App;
