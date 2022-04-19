import React, { Component } from 'react'
import BlogPreview from '../components/BlogPreview'
import Reference from '../components/Reference'

export default class Blogs extends Component {
    render() {
        return (
            <div>
                <h1>Blog Posts</h1>
                <BlogPreview Title = "Non-Fungible Life" Image = "NFT.png" Link = "/blog1"/>
                <BlogPreview Title = "Assessing the Value in Design and Aesthetics in Web Development" Image = "interface.png" Link = "/blog2"/>
                <BlogPreview Title = "Connect the People" Image = "network.png" Link = "/blog3"/>
                
            </div>
        )
    }
}
