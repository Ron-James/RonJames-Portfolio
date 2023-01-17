import React, { Component } from "react";
import Hero from "../assets/GradientHeader.png";
import "../styles/Header.css";

export default class Header extends Component {
  static defaultProps = {
    headline: "Hello There",
  };
  constructor(props) {
    super(props);
    this.state = {
      headline: "Hello There",
    };
  }
  render() {
    return (
      <div>
        <header className="start">
          <div className="hero">
            <img src={Hero} />

            <h1 className="headline">{this.props.headline}</h1>

            <div className="wave wave1"></div>
            <div className="wave wave2"></div>
          </div>
        </header>
      </div>
    );
  }
}
