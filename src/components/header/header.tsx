import React, { useState } from "react";
import Hamburger from "./hamburger";
import "./header.css";

const Header: React.FC = () => {
  const [toggled, toggleHamburger] = useState(false);

  return (
    <header className="w-full z-10">
      <div
        id="mobile-menu"
        className={`block md:hidden absolute top-0 right-0 p-4`}
      >
        <Hamburger
          toggled={toggled}
          toggleHamburger={() => {
            toggleHamburger(!toggled);
          }}
        />
      </div>

      <div className="relative grid w-full items-center">
        <div
          id="logo"
          className="logo logo--expanded bg-primary text-white text-center px-6 py-2 leading-none"
        >
          Clear View <span className="block text-xl font-bold">Escapes</span>
        </div>

        <div id="links" className="flex">
          <button id="beginning" className="text-center text-accent">
            Our Beginning
          </button>
          <button id="features" className="text-center">
            Features
          </button>
          <button id="testimonials" className="text-center">
            Testimonials
          </button>
          <button id="contact" className="text-center btn">
            Get in Touch
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
