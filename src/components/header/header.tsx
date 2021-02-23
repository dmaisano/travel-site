import React, { useState } from "react";
import classNames from "classnames";
import Hamburger from "./hamburger";
import "./header.css";

const Header: React.FC = () => {
  const [{ expandedLogo, toggled }, setState] = useState({
    expandedLogo: false,
    toggled: false,
  });

  const toggleHamburger = () => {
    setState({
      expandedLogo,
      toggled: !toggled,
    });
  };

  return (
    <header
      className={classNames(`w-full absolute md:fixed`, {
        "expanded z-50": toggled,
        "z-10": !toggled,
      })}
    >
      <div
        id="mobile-menu"
        className={`z-50 block md:hidden absolute top-0 right-0 p-4`}
      >
        <Hamburger toggled={toggled} toggleHamburger={toggleHamburger} />
      </div>

      <div className="relative grid w-full items-center">
        <div
          className={classNames(
            `logo z-50 bg-primary text-white text-center leading-none`,
            {
              "logo--expanded": expandedLogo,
            },
          )}
        >
          Clear View <span className="block text-xl font-bold">Escapes</span>
        </div>

        <div
          id="links"
          className={classNames({
            "links--hidden": !toggled,
          })}
        >
          <button id="beginning" className="text-center text-white">
            Our Beginning
          </button>
          <button id="features" className="text-center text-white">
            Features
          </button>
          <button id="testimonials" className="text-center text-white">
            Testimonials
          </button>
          <button id="contact" className="btn text-center text-white">
            Get in Touch
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
