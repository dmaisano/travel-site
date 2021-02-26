import React from "react";
import Features from "./components/features";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import Splash from "./components/splash";
import Testimonials from "./components/testimonials";

function App() {
  return (
    <div className="App">
      {/* <button className="btn--large">click me</button> */}
      {/* <a href="#">link</a> */}

      <Header />
      <Hero />
      <Splash />
      <Features />
      {/* <Testimonials /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
