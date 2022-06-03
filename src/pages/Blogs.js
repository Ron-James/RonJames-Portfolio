import React, { Component } from "react";
import BlogPreview from "../components/BlogPreview";
import Reference from "../components/Reference";
import Header from "../components/Header";
export default class Blogs extends Component {
  render() {
    return (
      <div>
        <Header headline="Blog Posts" />
        <BlogPreview Title="Non-Fungible Life" Image="NFT.png" Link="/blog1" />
        <BlogPreview
          Title="Assessing the Value in Design and Aesthetics in Web Development"
          Image="interface.png"
          Link="/blog2"
        />
        <BlogPreview
          Title="Connect the People"
          Image="network.png"
          Link="/blog3"
        />
        <BlogPreview Title="Reflection" Image="bubbles.png" Link="/blog4" />
        <BlogPreview
          Title="Internet Artwork - Preparatory Work"
          Image="Abstract.png"
          Link="/blog5"
        />
        <BlogPreview
          Title="Internet Artwork Prototype"
          Image="Prototype.png"
          Link="/blog6"
        />
        <BlogPreview
          Title="Reflection Part 2"
          Image="Ref.png"
          Link="/blog7"
        />
      </div>
    );
  }
}
