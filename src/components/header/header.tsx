import React, { useState } from "react";
import { PUBLIC_URL } from "../../constants";
import "./header.css";

const Header: React.FC = () => {
  const [isDark, setDark] = useState(false);

  const toggleColor = () => {
    setDark(!isDark);
  };

  return (
    <header
      className="absolute py-3 w-full z-10"
      style={{
        backgroundColor: isDark
          ? `rgba(23, 51, 72, .85)`
          : `rgba(47, 85, 114, .3)`,
      }}
    >
      <img
        onClick={toggleColor}
        src={`${PUBLIC_URL}/assets/images/icons/clear-view-escapes.svg`}
        alt=""
      />
      <a href="/">Get in Touch</a>
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
      </nav>
    </header>
  );
};

export default Header;
