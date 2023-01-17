import React, { Component } from "react";
import ATlogo from "../assets/ATlogo.png";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from "@mui/icons-material/Reorder";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openLinks: false,
    };
    this.toggleNav = this.toggleNav.bind(this);
  }
  turnOffLinks() {
    this.setState({
      openLinks: false,
    });
  }
  toggleNav() {
    this.setState((prevState) => ({
      openLinks: !prevState.openLinks,
    }));
  }

  render() {
    return (
      <div className="navbar">
        <div className="leftPiece" id={this.state.openLinks ? "open" : "close"}>
          <h1>Good Evening</h1>
          <div className="hiddenLinks">
            <Link to="/RonJames-Portfolio">Home</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to='/docs'>Documentation & Snippets</Link>
            <Link to="/contact">Contact</Link>
            {/*<Link to='/wireframes'>Wireframes</Link>*/}
          </div>
        </div>
        <div className="rightPiece">
          <Link to="/RonJames-Portfolio">Home</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to='/docs'>Documentation & Snippets</Link>
          <Link to="/contact">Contact</Link>
          {/*<Link to='/wireframes'>Wireframes</Link>*/}
          <button onClick={this.toggleNav}>
            <ReorderIcon />
          </button>
        </div>
      </div>
    );
  }
}
