import React, { Component } from 'react'
import Carousel from '../components/Carousel'
import Header from '../components/Header'
export default class Portfolio extends Component {
    render() {
        return (
            <div>
                <Header headline = "Portfolio"/>
                <Carousel/>
            </div>
        )
    }
}
