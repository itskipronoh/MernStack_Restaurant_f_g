//import React from "react";
import { Link } from "react-scroll";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="banner">
          <div className="top">
            <h1 className="heading">ABOUT US</h1>
            <p>Immerse yourself in an ambiance carefully curated to elevate your dining experience.</p>
          </div>
          <p className="mid">
          Welcome to Famous Gate, where culinary excellence meets warm hospitality. Our story is one of passion, dedication, and a commitment to delivering an exceptional dining experience to our cherished guests.
Our Journey. Famous Gate is more than just a place to eat; it’s an experience. Our thoughtfully designed space reflects our commitment to aesthetics and comfort. Whether you’re here for a romantic dinner, a family celebration, or a casual gathering with friends, our ambiance sets the stage for memorable moments
          </p>
          <Link to={"menu"} spy={true} smooth={true} duration={500}>
            Explore Menu{" "}
            <span>
              <HiOutlineArrowNarrowRight />
            </span>
          </Link>
        </div>
        <div className="banner">
          <img src="/about.png" alt="about" />
        </div>
      </div>
    </section>
  );
};

export default About;
