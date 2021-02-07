import React from "react";
import "./App.css";
import Features from "./components/features";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import Splash from "./components/splash";
import Testimonials from "./components/testimonials";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Splash />
      <Features />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
