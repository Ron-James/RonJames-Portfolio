import React, { Component } from "react";
import Homepage from "../assets/Homepage-Wireframe.png";
import Header from "../components/Header";
import Blogs from "../assets/Blogs.png";
import Portfolio from "../assets/Portfolio.png";
import Colours from "../assets/New Color Breakdown.png";
import font from "../assets/Font.png";

import oldHomepage from "../assets/Homepage.png";
import colors from "../assets/Color Breakdown.png";

import "../styles/Wireframes.css";

import "../styles/Wireframes.css";
export default class Wireframes extends Component {
  render() {
    window.scrollTo(0, 0);
    return (
      <div className="Wireframes">
        <Header headline="Wireframes" />

        <h1>Wireframes</h1>
        <h2>Homepage</h2>
        <img src={Homepage} />
        <p>
          The homepage has evolved the most since the start of this website. I
          have introduced a more detailed header to introduce users to the site
          and explain what theymight be looking at here. This I thought was
          important because it is vital that people get a sense of what the
          might be here for immidiatley to avoid losing intrest. The further
          description parargraphs below have also since been jazzed up by
          implementing them in their own sections with image backgrounds. This
          intends to hopefully make them more intresting and encouraging for the
          user to read.
        </p>
        <h2>Blogs page</h2>
        <img src={Blogs} />
        <h2>Portfolio Internet Art</h2>
        <img src={Portfolio} />
        <p>
          The portfolio page is intended to feel like a playstation style main
          menu, hence the carousel. This adds some much needed interactivity to
          the site and allows the portfolio entries to be compact and
          sophisticated. This wireframe has not really changed much since it's
          conception.
        </p>
        <h2>Style Guide</h2>
        <img src={Colours} />
        <img src={font} />
        <p>
          The idea with the color pallete is to recreate the feeling of the
          playstation 3 menu which uses gradients of a similar hue. The blue and
          violet shades on the white backgrounds are pleasing to the eye and
          make for a subtle but effective colour scheme. The choice of font does
          not really go along with the gaming feeling but rather it contrasts
          it. The text is classy and readable and adds what I think is a
          professional type feel to it.
        </p>
        <h2>Older Wireframes</h2>
        <img src={oldHomepage} />
        <img src={colors} />
      </div>
    );
  }
}
