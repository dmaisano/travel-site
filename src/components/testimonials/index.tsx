import React from "react";
import { PUBLIC_URL } from "../../constants";

const Testimonials: React.FC = () => {
  return (
    <div id="testimonials">
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
  );
};

export default Testimonials;
