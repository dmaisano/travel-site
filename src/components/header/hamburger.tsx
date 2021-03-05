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
  isModal = false,
  ...props
}) => {
  let classes: string = `flex items-center focus:outline-none ml-auto`;

  if (className) {
    classes = `${className} ${classes}`;
  }

  return (
    <button onClick={toggleHamburger} className={classes} {...props}>
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
