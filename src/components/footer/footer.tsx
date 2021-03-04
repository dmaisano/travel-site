import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col md:flex-row md:items-center justify-center bg-primary text-white font-extralight p-4 md:py-6">
      <p className="text-center mb-4 md:mb-0 md:mr-4">
        Copyright &copy; {new Date().getFullYear()} Clear View Escapes. All
        rights reserved.
      </p>
      <div className="mx-auto md:mx-0">
        <button className="btn btn--orange">Get In Touch</button>
      </div>
    </footer>
  );
};

export default Footer;
