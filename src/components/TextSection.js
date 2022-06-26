import React, { Component } from "react";
import "../styles/TextSection.css";

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
export default class TextSection extends Component {
  static defaultProps = {
    Title: "Title",
    Sub: "Sub Title",
    Image: "GradientHeader.png",
    Desc: "Description goes here",
    TextColor: "fff"
  };

  render() {
    return (
      <section
        id="cover"
        style={{
          background: `url(${images[this.props.Image]}) no-repeat center bottom / cover`,
          color: this.props.TextColor
        }}
      >
        <div className="container">
          <div className="text">
            <h1>{this.props.Title}</h1>
            <h2>{this.props.Sub}</h2>
            <p>{this.props.Desc}</p>
          </div>
        </div>
      </section>
    );
  }
}
