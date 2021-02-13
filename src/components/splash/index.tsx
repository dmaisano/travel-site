import React from "react";

const Splash: React.FC = () => {
  return (
    <div id="our-beginning">
      <h2>The first trip we planned was our own.</h2>
      <h3>
        Ever since, we&rsquo;ve been working to make travel better for everyone.
      </h3>
      <img
        src="assets/images/first-trip.jpg"
        alt="Couple walking down a street."
      />
      <img src="assets/images/our-start.jpg" alt="Our founder, Jane Doe" />
      <h2>Here&rsquo;s how we got started&hellip;</h2>
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
