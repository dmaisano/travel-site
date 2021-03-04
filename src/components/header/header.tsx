import { useThrottledFn, useWindowScroll } from "beautiful-react-hooks";
import classNames from "classnames";
import React, { useEffect, useRef, useState } from "react";
import { calcScroll } from "./calculate-scroll";
import Hamburger from "./hamburger";
import "./header.css";

type HeaderProps = {
  windowWidth: number;
  splashRef: React.RefObject<HTMLDivElement>;
  featuresRef: React.RefObject<HTMLDivElement>;
  testimonialsRef: React.RefObject<HTMLDivElement>;
};

const Header: React.FC<HeaderProps> = ({
  featuresRef,
  splashRef,
  testimonialsRef,
  windowWidth,
}) => {
  const headerRef = useRef<HTMLElement>(null);
  const [state, setState] = useState({
    expandedLogo: false,
    toggled: false,
    headerHeight: headerRef.current?.clientHeight,
    previousScrollY: window.scrollY,
    visisbleSection: "splash",
  });

  const toggleHamburger = () => {
    setState({
      ...state,
      toggled: !state.toggled,
    });
  };

  const onWindowScroll = useThrottledFn(() => {
    const scrollY = window.scrollY;
    const scrollDirection =
      window.scrollY > state.previousScrollY ? "down" : "up";

    calcScroll(headerRef, scrollY, scrollDirection, [
      splashRef,
      featuresRef,
      testimonialsRef,
    ]);

    setState({ ...state, previousScrollY: scrollY });
  }, 200);

  useEffect(() => {
    if (headerRef.current) {
      setState({
        ...state,
        headerHeight: headerRef.current.clientHeight,
      });
    }
  }, []);

  useWindowScroll(onWindowScroll);
  useEffect(() => {
    return () => onWindowScroll.cancel();
  });

  const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      let offset = ref.current.offsetTop;

      if (windowWidth >= 800 && state.headerHeight) {
        offset -= state.headerHeight;
      }

      window.scrollTo({ top: offset, behavior: "smooth" });
      setState({ ...state, toggled: false });
    }
  };

  return (
    <header
      ref={headerRef}
      className={classNames(`w-full absolute md:fixed`, {
        "z-50": state.toggled,
        "z-10": !state.toggled,
        "header-dark": window.scrollY > 0,
        expanded: state.toggled,
      })}
    >
      <div
        id="mobile-menu"
        className={`z-50 block md:hidden absolute top-0 right-0 p-4`}
      >
        <Hamburger toggled={state.toggled} toggleHamburger={toggleHamburger} />
      </div>

      <div className="relative grid w-full items-center">
        <div
          className={classNames(
            `logo z-50 bg-primary text-white text-center leading-none`,
            {
              "logo--expanded": state.expandedLogo,
            },
          )}
        >
          Clear View <span className="block text-xl font-bold">Escapes</span>
        </div>

        <div
          id="links"
          className={classNames({
            "links--hidden": !state.toggled,
          })}
        >
          <button
            onClick={() => {
              scrollToRef(splashRef);
            }}
            id="splash"
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
