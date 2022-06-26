import React, { Component } from "react";
import "../styles/Hero.css";

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}
const images = importAll(
  require.context("../assets", false, /\.(png|jpe?g|svg)$/)
);
export default class Hero extends Component {
  static defaultProps = {
    Title: "Title",
    Sub: "Sub Title",
    Image: "GradientHeader.png",
    Desc: "Description goes here",
  };

  render() {
    return (
        <section
          id="hero"
        >
          <div className="container">
            <div className="info">
              <h1>{this.props.Title}</h1>
              <h2>{this.props.Sub}</h2>
              <p>{this.props.Desc}</p>
            </div>
        </div>
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        </section>
        
    );
  }
}
