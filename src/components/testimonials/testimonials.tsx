import React from "react";
import { PUBLIC_URL } from "../../constants";
import "./testimonials.css";

type TestimonialsProps = {
  testimonialsRef: any;
};

const Testimonials: React.FC<TestimonialsProps> = ({ testimonialsRef }) => {
  return (
    <div ref={testimonialsRef} id="testimonials" className="">
      <img
        id="bg"
        className="sm:hidden lg:block absolute z-0"
        src={`${PUBLIC_URL}/assets/images/testimonials-bg.jpg`}
        alt=""
      />

      <div id="bg" className="absolute h-full w-full"></div>

      <div className="relative z-10">
        <img src={`${PUBLIC_URL}/assets/images/icons/comment.svg`} alt="" />
        <h2>Real Testimonials</h2>

        <img src={`${PUBLIC_URL}/assets/images/testimonial-jane.jpg`} alt="" />
        <h3>Jane Doe</h3>
        <h3>9 Time Escaper</h3>
        <p>
          &ldquo;Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
          id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua.&rdquo;
        </p>

        <img src={`${PUBLIC_URL}/assets/images/testimonial-john.jpg`} alt="" />
        <h3>John Smith</h3>
        <h3>4 Time Escaper</h3>
        <p>
          &ldquo;Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
          id est laborum. Lorem ipsum dolor sit amet, consectetur.&rdquo;
        </p>

        <img src={`${PUBLIC_URL}/assets/images/testimonial-cat.jpg`} alt="" />
        <h3>Cat McKitty</h3>
        <h3>6 Time Escaper</h3>
        <p>
          &ldquo;Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
          id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing
          elit, sed do eiusmod tempor incididunt ut.&rdquo;
        </p>
      </div>
    </div>
  );
};

export default Testimonials;
