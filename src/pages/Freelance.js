import React, { Component } from "react";
import Header from "../components/Header";
import Media from "../components/Media";
import Hero from "../components/Hero";
import "../styles/Contact.css";
export default class Freelance extends Component {
  render() {
    window.scrollTo(0, 0);
    return (
      <div>
        <Hero
          Title="Freelancing Work"
          Sub=""
          Desc="Contact me at jajotheron@gmail.com for a quote from me "
        />
        <Media />
      </div>
    );
  }
}
