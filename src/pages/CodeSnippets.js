import React, { Component } from "react";
import Carousel from "../components/Carousel";
import CodeSlider from "../components/CodeSlider";
import Header from "../components/Header";
import Hero from "../components/Hero";
export default class CodeSnippets extends Component {
  render() {
    window.scrollTo(0, 0);
    return (
      <div>
        <Hero
          Title="Code Snippets"
          Sub=""
          Desc="This section is inteded to show off a few code problems and unity scripts I have written. 
          I hope to showcase my ability to write clean code whilst also documenting it at the Microsoft standard. 
          Click on the download button if you wish to look at the given program file."
        />
        <CodeSlider />
      </div>
    );
  }
}
