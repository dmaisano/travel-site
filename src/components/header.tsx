import React from "react";
import { PUBLIC_URL } from "../constants";

const Header: React.FC = () => {
  console.log({ PUBLIC_URL });

  return (
    <header>
      <img
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
