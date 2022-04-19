import React, { Component } from 'react'
import Homepage from "../assets/Homepage.png";
import Blogs from "../assets/Blogs.png"
import Portfolio from "../assets/Portfolio.png";
import Colours from "../assets/Color Breakdown.png" 

export default class Wireframes extends Component {
    render() {
        return (
            <div>
                <h1>Wireframes</h1>
                <img src = {Homepage}/>
                <img src = {Blogs}/>
                <img src = {Portfolio}/>
                <h1>Style Guide</h1>
                <img src = {Colours}/>
            </div>
        )
    }
}
