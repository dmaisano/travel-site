import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import Hamburger from "./hamburger";
import "./header.css";

type HeaderProps = {
  scrollPos: number;
  splashRef: React.RefObject<HTMLDivElement>;
  featuresRef: React.RefObject<HTMLDivElement>;
  testimonialsRef: React.RefObject<HTMLDivElement>;
};

const Header: React.FC<HeaderProps> = ({
  scrollPos,
  splashRef,
  featuresRef,
  testimonialsRef,
}) => {
  const headerRef = useRef<HTMLElement>(null);
  let headerHeight: number | undefined = 0;

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

  useEffect(() => {
    headerHeight = headerRef.current?.getBoundingClientRect().height;
  }, []);

  const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      const offset =
        ref.current.getBoundingClientRect().y - (headerHeight || 0);

      window.scrollTo({ top: offset, behavior: "smooth" });
    }
  };

  return (
    <header
      ref={headerRef}
      className={classNames(`w-full absolute md:fixed`, {
        "z-50": toggled,
        "z-10": !toggled,
        "header-dark": scrollPos > 0,
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
          <button
            onClick={() => {
              scrollToRef(splashRef);
            }}
            id="beginning"
            className="text-center text-white"
          >
            Our Beginning
          </button>
          <button
            onClick={() => {
              scrollToRef(featuresRef);
            }}
            id="features"
            className="text-center text-white"
          >
            Features
          </button>
          <button
            onClick={() => {
              scrollToRef(testimonialsRef);
            }}
            id="testimonials"
            className="text-center text-white"
          >
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
