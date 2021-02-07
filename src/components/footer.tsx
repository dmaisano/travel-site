import React from "react";

const Footer: React.FC = () => {
  return (
    <footer>
      <p>
        Copyright &copy; {new Date().getFullYear()} Clear View Escapes. All
        rights reserved. <a href="#">Get in Touch</a>
      </p>
    </footer>
  );
};

export default Footer;
