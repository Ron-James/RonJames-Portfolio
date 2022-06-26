import React, { Component } from "react";
import Carousel from "../components/Carousel";
import Header from "../components/Header";
import Hero from "../components/Hero";
export default class Portfolio extends Component {
  render() {
    window.scrollTo(0, 0);
    return (
      <div>
        <Hero
          Title="Portfolio"
          Sub=""
          Desc="Take a loot at a few of the software projects 
          which I have worked on. Builds for the unity projects 
          can be downloaded with highlighted link"
        />
        <Carousel />
      </div>
    );
  }
}
