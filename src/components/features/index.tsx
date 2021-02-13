import React from "react";
import { PUBLIC_URL } from "../../constants";

const Features: React.FC = () => {
  return (
    <div id="features">
      <img src={`${PUBLIC_URL}/assets/images/icons/star.svg`} alt="" />
      <h2>Our Features</h2>

      <img src={`${PUBLIC_URL}/assets/images/icons/rain.svg`} alt="" />
      <h3>We&rsquo;ll Watch the Weather</h3>
      <p>
        Download our app and we&rsquo;ll send you a notice if it&rsquo;s about
        to rain in the next 20 minutes around your current location. A good rain
        can be refreshing, but sometimes you just want to stay dry.
      </p>

      <img src={`${PUBLIC_URL}/assets/images/icons/globe.svg`} alt="" />
      <h3>Global Guides</h3>
      <p>
        We&rsquo;ve scoured the entire planet for the best retreats and
        beautiful vistas. If there&rsquo;s a corner of the world you want to
        escape to we know the most scenic and inspiring locations.
      </p>

      <img src={`${PUBLIC_URL}/assets/images/icons/wifi.svg`} alt="" />
      <h3>Wi-Fi Waypoints</h3>
      <p>
        We only send you on trips to places we can personally vouch for as being
        amazing. Which means we&rsquo;ve mapped out where local wi-fi spots are
        and marked them in our app&rsquo;s map view.
      </p>

      <img src={`${PUBLIC_URL}/assets/images/icons/fire.svg`} alt="" />
      <h3>Survival Kit</h3>
      <p>
        Everytime you book an escape with us we send you a survival kit with the
        finest materials. The kit will allow you to setup a tent, start a fire,
        scratch your own back and lower your taxes.
      </p>
    </div>
  );
};

export default Features;
