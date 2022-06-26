import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "../styles/Return.css";
export default class Return extends Component {
  render() {
    return (
      <div className="Return">
        <Link to="/blogs"> <FaArrowLeft/> Return</Link>
      </div>
    );
  }
}
