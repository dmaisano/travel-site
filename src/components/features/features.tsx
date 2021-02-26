import React from "react";
import { PUBLIC_URL } from "../../constants";
import "./features.css";

type FeaturesProps = {
  featuresRef: any;
};

const Features: React.FC<FeaturesProps> = ({ featuresRef }) => {
  return (
    <div ref={featuresRef} id="features" className="wrapper bg-primary py-16">
      <div
        id="title"
        className="w-full mb-8 sm:mb-12 sm:flex sm:justify-center sm:items-center"
      >
        <div className="sm:pr-4">
          <img
            className="mx-auto mb-2 sm:mb-0"
            src={`${PUBLIC_URL}/assets/images/icons/star.svg`}
            alt=""
          />
        </div>
        <h2 className="text-white text-center text-4xl sm:text-6xl font-light">
          Our <span className="font-medium">Features</span>
        </h2>
      </div>

      <div id="feature-items" className="w-full flex flex-wrap">
        <div id="feature-item">
          <div className="sm:w-1/5 md:w-1/6 md:mr-4">
            <img src={`${PUBLIC_URL}/assets/images/icons/rain.svg`} alt="" />
          </div>
          <div className="sm:w-4/5 md:w-5/6">
            <h3>We&rsquo;ll Watch the Weather</h3>
            <p>
              Download our app and we&rsquo;ll send you a notice if it&rsquo;s
              about to rain in the next 20 minutes around your current location.
              A good rain can be refreshing, but sometimes you just want to stay
              dry.
            </p>
          </div>
        </div>

        <div id="feature-item">
          <div className="sm:w-1/5 md:w-1/6 md:mr-4">
            <img src={`${PUBLIC_URL}/assets/images/icons/globe.svg`} alt="" />
          </div>
          <div className="sm:w-4/5 md:w-5/6">
            <h3>Global Guides</h3>
            <p>
              We&rsquo;ve scoured the entire planet for the best retreats and
              beautiful vistas. If there&rsquo;s a corner of the world you want
              to escape to we know the most scenic and inspiring locations.
            </p>
          </div>
        </div>

        <div id="feature-item">
          <div className="sm:w-1/5 md:w-1/6 md:mr-4">
            <img src={`${PUBLIC_URL}/assets/images/icons/wifi.svg`} alt="" />
          </div>
          <div className="sm:w-4/5 md:w-5/6">
            <h3>Wi-Fi Waypoints</h3>
            <p>
              We only send you on trips to places we can personally vouch for as
              being amazing. Which means we&rsquo;ve mapped out where local
              wi-fi spots are and marked them in our app&rsquo;s map view.
            </p>
          </div>
        </div>

        <div id="feature-item">
          <div className="sm:w-1/5 md:w-1/6 md:mr-4">
            <img src={`${PUBLIC_URL}/assets/images/icons/fire.svg`} alt="" />
          </div>
          <div className="sm:w-4/5 md:w-5/6">
            <h3>Survival Kit</h3>
            <p>
              Everytime you book an escape with us we send you a survival kit
              with the finest materials. The kit will allow you to setup a tent,
              start a fire, scratch your own back and lower your taxes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
