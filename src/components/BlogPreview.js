import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "../styles/BlogPreview.css"

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}
const images = importAll(require.context('../assets', false, /\.(png|jpe?g|svg)$/));  


export default class BlogPreview extends Component {
    
    static defaultProps = {
        Title: "Title",
        Image: "fantasy.jpg",
        Link : "/blog1"

    }
    
    render() {
        return (
            <div>
                <section className = "prev">
                    <img src ={images[this.props.Image]}/>
                    <div>
                        <h3>{this.props.Title}</h3>
                        <a href={this.props.Link} target="_blank">Download</a>
                    </div>
                </section>
            </div>
        )
    }
}
