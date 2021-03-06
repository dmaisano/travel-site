import { useThrottledFn, useWindowScroll } from "beautiful-react-hooks";
import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { calcScroll as calcVisibleLink } from "./calculate-scroll";
import Hamburger from "./hamburger";
import "./header.css";

type HeaderProps = {
  toggleModalVisibility: () => void;
  windowWidth: number;
  headerHeight: number;
  headerRef: React.RefObject<HTMLElement>;
  splashRef: React.RefObject<HTMLDivElement>;
  featuresRef: React.RefObject<HTMLDivElement>;
  testimonialsRef: React.RefObject<HTMLDivElement>;
};

const Header: React.FC<HeaderProps> = ({
  toggleModalVisibility,
  featuresRef,
  headerHeight,
  headerRef,
  splashRef,
  testimonialsRef,
  windowWidth,
}) => {
  const [state, setState] = useState<{
    expandedLogo: boolean;
    toggled: boolean;
    scrollY: number;
  }>({
    expandedLogo: false,
    toggled: false,
    scrollY: window.scrollY,
  });

  const toggleHamburger = () => {
    setState({
      ...state,
      toggled: !state.toggled,
    });
  };

  const resetHeaderLinks = () => {
    if (headerRef.current) {
      const links = headerRef.current.querySelectorAll("#links button");
      for (const link of links) {
        link.classList.remove(`is-current-link`);
      }
    }
  };

  const onWindowScroll = useThrottledFn(() => {
    calcVisibleLink(windowWidth, headerRef, [
      splashRef,
      featuresRef,
      testimonialsRef,
    ]);

    setState({ ...state, scrollY: window.scrollY });
  }, 200);

  useWindowScroll(onWindowScroll);
  useEffect(() => {
    calcVisibleLink(windowWidth, headerRef, [
      splashRef,
      featuresRef,
      testimonialsRef,
    ]);

    resetHeaderLinks();

    return () => onWindowScroll.cancel();
  }, [windowWidth]);

  const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      let offset = ref.current.offsetTop;

      if (windowWidth >= 800 && headerHeight) {
        offset -= headerHeight;
      }

      window.scrollTo({ top: offset, behavior: "smooth" });
      setState({ ...state, toggled: false });
    }
  };

  return (
    <header
      ref={headerRef}
      className={classNames(`w-full absolute md:fixed`, {
        "z-40": state.toggled,
        "z-10": !state.toggled,
        "header-dark": state.scrollY > 0,
        expanded: state.toggled,
      })}
    >
      <div
        id="mobile-menu"
        className={`z-40 block md:hidden absolute top-0 right-0 p-4`}
      >
        <Hamburger toggled={state.toggled} toggleHamburger={toggleHamburger} />
      </div>

      <div className="relative grid w-full items-center">
        <div
          className={classNames(
            `logo z-40 bg-primary text-white text-center leading-none`,
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
          <button
            onClick={toggleModalVisibility}
            id="contact"
            className="btn text-center text-white"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
