import React from "react";
import classNames from "classnames";
import "./hamburger.css";

interface HamburgerProps {
  className?: string;
  toggled: boolean;
  toggleHamburger: () => void;
  [key: string]: any;
}

const Hamburger: React.FC<HamburgerProps> = ({
  className,
  toggled,
  toggleHamburger,
  ...props
}) => {
  let classes: string = `flex items-center focus:outline-none ml-auto`;

  if (className) {
    classes = `${className} ${classes}`;
  }

  return (
    <button onClick={toggleHamburger} className={classes} {...props}>
      {/* <div className={`nav-icon ${toggled ? ` nav-icon-toggled` : ``}`}> */}
      <div
        className={classNames(`nav-icon`, {
          "nav-icon-toggled": toggled,
        })}
      >
        <div></div>
      </div>
    </button>
  );
};

export default Hamburger;
