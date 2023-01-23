import React, { Component } from "react";
import BlogPreview from "../components/BlogPreview";
import Reference from "../components/Reference";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Media from '../components/Media'
export default class Blogs extends Component {
  render() {
    window.scrollTo(0, 0);
    return (
      <div>
        <Hero
          Title="Documentation"
          Sub="Game Design Documents and Code Snippets"
          Desc="This section is intended to show off some of the game documentation and code snippets which I have been involved with. Check out a few of the design documentation behind some of the games on display to get 
          a feel of my design methodology. View the code snippets to get and idea 
          of my programming style. Click on the link to view the relevant git repo"
        />
        <BlogPreview Title="Code Snippets" Image="computer.png" Link="https://github.com/Ron-James/MyCodeSnippets.git" />

        <BlogPreview Title="Game Design Documentation" Image="game.png" Link="https://github.com/Ron-James/MyGameDocs.git" />

        <BlogPreview Title="Résumé" Image="resume.png" Link="https://drive.google.com/file/d/1___-EbRSokBQVJVzKk9qdb7_RI_vrX8m/view?usp=sharing" />

        <Media />
      </div>
    );
  }
}
