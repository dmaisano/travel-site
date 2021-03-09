import React from "react";

type FooterProps = {
  toggleModalVisibility: () => void;
};

const Footer: React.FC<FooterProps> = ({ toggleModalVisibility }) => {
  return (
    <footer className="flex flex-col md:flex-row md:items-center justify-center bg-primary text-white font-extralight p-4 md:py-6">
      <p className="text-center mb-4 md:mb-0 md:mr-4">
        Copyright &copy; {new Date().getFullYear()} Clear View Escapes. All
        rights reserved.
      </p>
      <button
        onClick={toggleModalVisibility}
        className="btn btn--orange mx-auto md:mx-0"
      >
        Get In Touch
      </button>
    </footer>
  );
};

export default Footer;
