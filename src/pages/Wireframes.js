import React, { Component } from 'react'
import Homepage from "../assets/Homepage-Wireframe.png";
import Header from '../components/Header';
import Blogs from "../assets/Blogs.png"
import Portfolio from "../assets/Portfolio.png";
import Colours from "../assets/New Color Breakdown.png";
import font from "../assets/Font.png";

import oldHomepage from "../assets/Homepage.png";
import colors from "../assets/Color Breakdown.png"

import "../styles/Wireframes.css";

import "../styles/Wireframes.css";
export default class Wireframes extends Component {
    render() {
        window.scrollTo(0, 0);
        return (
            <div className='Wireframes'>
                <Header headline = "Wireframes"/>
                <img src = {Homepage}/>
                <img src = {Blogs}/>
                <img src = {Portfolio}/>
                <h1>Style Guide</h1>
                <img src={Colours} />
                <img src={font} />
                
                <h1>Older Wireframes</h1>
                <img src={oldHomepage} />
                <img src = {colors}/>
            </div>
        )
    }
}
