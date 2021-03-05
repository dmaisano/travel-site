import React, { useState } from "react";
import { PUBLIC_URL } from "../../constants";
import Hamburger from "../header/hamburger";
import "./contact.css";

interface ContactProps {
  isVisisble: boolean;
  toggleModalVisibility: () => void;
}

const Contact: React.FC<ContactProps> = ({
  isVisisble = false,
  toggleModalVisibility,
}) => {
  return (
    <div
      id="contact-modal"
      style={{
        display: isVisisble ? `flex` : `none`,
      }}
      className="justify-center items-center"
    >
      <div className="absolute top-0 right-0 p-4">
        <Hamburger
          toggled={isVisisble}
          toggleHamburger={toggleModalVisibility}
        />
      </div>

      <div className="flex flex-col items-center">
        <div className="mb-6">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="48"
          >
            <path
              d="M0 0v8l32 16L64 8V0H0zm0 16v32h64V16L32 32z"
              fill="#2f5572"
            />
          </svg>
        </div>
        <h2 className="text-primary mb-12">
          Get in <span className="font-medium">Touch</span>
        </h2>

        <div className="wrapper">
          <p>
            We will have an online order system in place soon. Until then,
            connect with us on any of the platforms below!
          </p>

          <div id="socials" className="grid">
            <a href="https://www.facebook.com/" target="_blank">
              <img
                src={`${PUBLIC_URL}/assets/images/icons/facebook.svg`}
                alt="facebook"
              />
            </a>
            <a href="https://twitter.com/" target="_blank">
              <img
                src={`${PUBLIC_URL}/assets/images/icons/twitter.svg`}
                alt="twitter"
              />
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <img
                src={`${PUBLIC_URL}/assets/images/icons/instagram.svg`}
                alt="instagram"
              />
            </a>
            <a href="https://www.youtube.com/" target="_blank">
              <img
                src={`${PUBLIC_URL}/assets/images/icons/youtube.svg`}
                alt="youtube"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
