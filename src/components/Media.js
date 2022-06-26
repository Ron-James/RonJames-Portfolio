import React, { Component } from "react";
import "../styles/Media.css"
import LinkedIn from "../assets/LinkedIn.png";
import twitter from "../assets/twitter.png";
import Instagram  from "../assets/instagram.png";
export default class Media extends Component {
  render() {
    return (
      <ul class="media">
        <li>
          <a href="https://twitter.com">
            <img src={ twitter } alt="twitter" />
          </a>
        </li>
        <li>
          <a href="linkedin.com/in/james-theron-ba7833230">
            <img src= {LinkedIn} alt="LinkedIn" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com">
            <img src= {Instagram} alt="LinkedIn" />
          </a>
        </li>
      </ul>
    );
  }
}
