import React, { useState } from "react";
import { ClearViewEscapes } from "../svg/clear-view-escapes";
import "./hamburger.css";
import "./header.css";

const Header: React.FC = () => {
  const [toggled, toggleHamburger] = useState(false);

  return (
    <header
      className="absolute w-full"
      style={{
        backgroundColor: toggled ? `rgba(47, 85, 114, .55)` : `inherit`,
      }}
    >
      <div
        id="mobile-menu"
        className={`block md:hidden absolute top-0 right-0 p-4`}
      >
        <button
          onClick={() => {
            toggleHamburger(!toggled);
          }}
          className="flex items-center focus:outline-none ml-auto"
        >
          <div className={`nav-icon ${toggled ? ` nav-icon-toggled` : ``}`}>
            <div></div>
          </div>
        </button>
      </div>

      <div className="grid grid-cols-3">
        <div
          id="logo"
          className="bg-primary p-4 mx-auto"
          style={{
            gridColumn: `1 / 4`,
            width: `min-content`,
          }}
        >
          <ClearViewEscapes />
        </div>
      </div>

      <div id="links" className="grid grid-cols-3">
        <div className="bg-gray-500 h-12">Text</div>
      </div>

      {/* <a href="/">Get in Touch</a>
      <nav>
        <ul>
          <li>
            <a href="#our-beginning">Our Beginning</a>
          </li>
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
        </ul>
      </nav> */}
    </header>
  );
};

export default Header;
