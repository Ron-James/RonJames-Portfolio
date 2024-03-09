import React, { Component } from 'react'
import "../styles/BlogPreview.css"

function importAll(imageContext) {
    const images = {};
    imageContext.keys().forEach((item, index) => {
        const imageName = item.replace('./', '');
        images[imageName] = imageContext(item);
    });
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
                <section className="prev">
                    <img src={images[this.props.Image]} alt="" />
                    <div>
                        <h3>{this.props.Title}</h3>
                        <a href={this.props.Link} target="_blank" rel="noreferrer">Download</a>
                    </div>
                </section>
            </div>
        )
    }
}
