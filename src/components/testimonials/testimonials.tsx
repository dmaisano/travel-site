import React from "react";
import { PUBLIC_URL } from "../../constants";
import "./testimonials.css";

type TestimonialsProps = {
  testimonialsRef: any;
};

const Testimonials: React.FC<TestimonialsProps> = ({ testimonialsRef }) => {
  return (
    <div
      ref={testimonialsRef}
      id="testimonials"
      className="page-section relative"
    >
      {/* <img
        id="bg"
        className="sm:hidden lg:block absolute"
        src={`${PUBLIC_URL}/assets/images/testimonials-bg.jpg`}
        alt=""
      /> */}

      {/* <div id="bg" className="absolute h-full w-full"></div> */}
      <div
        id="title"
        className="flex flex-wrap md:flex-nowrap items-center justify-center w-full mb-32"
      >
        <div className="mb-4 md:mb-0 md:mr-4">
          <svg
            // className="w-full mx-auto md:m-0 mb-4"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
          >
            <path
              d="M.72.08A.67.67 0 000 .8v46.48a.72.72 0 00.72.72H48l16 16V.72a.67.67 0 00-.72-.72H.8z"
              fill="#2f5572"
            />
          </svg>
        </div>
        <div className="">
          <h2 className="w-full text-primary text-center font-light">
            Real <span className="font-medium">Testimonials</span>
          </h2>
        </div>
      </div>

      <div id="items" className="flex flex-wrap w-full">
        <div id="testimonial">
          <div id="testimonial__photo">
            <img
              src={`${PUBLIC_URL}/assets/images/testimonial-jane.jpg`}
              alt=""
            />
          </div>
          <h3>Jane Doe</h3>
          <h4>9 Time Escaper</h4>
          <p>
            &ldquo;Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.&rdquo;
          </p>
        </div>

        <div id="testimonial">
          <div id="testimonial__photo">
            <img
              src={`${PUBLIC_URL}/assets/images/testimonial-john.jpg`}
              alt=""
            />
          </div>
          <h3>John Smith</h3>
          <h4>4 Time Escaper</h4>
          <p>
            &ldquo;Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum. Lorem ipsum dolor sit amet, consectetur.&rdquo;
          </p>
        </div>

        <div id="testimonial">
          <div id="testimonial__photo">
            <img
              src={`${PUBLIC_URL}/assets/images/testimonial-cat.jpg`}
              alt=""
            />
          </div>
          <h3>Cat McKitty</h3>
          <h4>6 Time Escaper</h4>
          <p>
            &ldquo;Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit, sed do eiusmod tempor incididunt ut.&rdquo;
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
