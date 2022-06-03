import React, { Component } from 'react'
import Homepage from "../assets/Homepage.png";
import Header from '../components/Header';
import Blogs from "../assets/Blogs.png"
import Portfolio from "../assets/Portfolio.png";
import Colours from "../assets/New Color Breakdown.png";
import font from "../assets/Font.png";

import "../styles/Wireframes.css";
export default class Wireframes extends Component {
    render() {
        return (
            <div>
                <Header headline = "Wireframes"/>
                <img src = {Homepage}/>
                <img src = {Blogs}/>
                <img src = {Portfolio}/>
                <h1>Style Guide</h1>
                <img src={Colours} />
                <img src = {font}/>
            </div>
        )
    }
}
