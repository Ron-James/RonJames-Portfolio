import React, { Component } from "react";
import Header from "../components/Header";
import Media from "../components/Media";
import Hero from "../components/Hero";
import "../styles/Contact.css";
export default class Contact extends Component {
  render() {
    window.scrollTo(0, 0);
    return (
      <div>
        <Hero
          Title="Contact Me"
          Sub=""
          Desc="Email me directly at jajotheron@gmail.com or find me out on LinkedIn, Itch.io or Github using the icons below"
        />
        <Media />
      </div>
    );
  }
}
