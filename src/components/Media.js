import React, { Component } from "react";
import "../styles/Media.css"
import LinkedIn from "../assets/LinkedIn.png";
import twitter from "../assets/twitter.png";
import Instagram  from "../assets/instagram.png";
import Itch  from "../assets/itch.png";
import gitHub from "../assets/github-mark.png";

export default class Media extends Component {
  render() {
    return (
      <ul className="media">
        <li>
          <a href="https://theronjames.itch.io/battleshipbrickbreaker" target="_blank">
            <img src={ Itch } alt="twitter" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/james-theron-ba7833230" target="_blank">
            <img src= {LinkedIn} alt="LinkedIn" />
          </a>
        </li>
        <li>
          <a href="https://github.com/Ron-James/Bloons-High-Noon.git" target="_blank">
            <img src= {gitHub} alt="Github" />
          </a>
        </li>
      </ul>
    );
  }
}
