import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
              Welcome to Foodies Delight, your go-to destination for discovering
              and sharing delectable recipes from around the world! At Foodies
              Delight, we believe that food is more than just sustenance; it's a
              celebration of culture, creativity, and community. Our mission is
              to connect food enthusiasts, home cooks, and culinary adventurers
              through a dynamic and interactive platform where everyone can
              explore new flavors, learn new cooking techniques, and share their
              own culinary masterpieces.
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
