import React, { Component } from "react";
import "../styles/BlogPost.css";
import rpcs3 from "../assets/RPCS3.PNG";
import colors from "../assets/New Color Breakdown.png";
import font from "../assets/Font.png";
import ps3 from "../assets/PS3Menu.png";
import portfolioWire from "../assets/Portfolio.png";

export default class Blog5 extends Component {
  render() {
    return (
      <div>
        <article class="blog">
          <h1>Internet Artwork - Preparatory Work</h1>
          <p>
            The aim of the internet art aspect of my website will be to somewhat
            emulate a games console home menu feel since the portfolio will
            largely be showing off digital games which I have developed. This
            will include things like interactive and moving thumbnails and
            colour schemes akin to that of old playstation menus. The goal will
            be to give the user a sense that they are selecting games to play
            when navigating the portfolio section of games.
          </p>

          <p>
            A site that pulls off this idea is the website for the Playstation 3
            emulator, RPCS3 (https://rpcs3.net). This is what inspired the idea
            to try and create a website which is like a gaming console menu.
            Although it doesn’t have the moving list of game thumbnails that a
            Playstation 3 menu might have, it captures the essence with some
            sharp opening animations and moving background images which are
            reminiscent of the old PS3. I am particularly fond of this use of
            colour scheme and will likely use something similar on my webpage
            along with the glowing white text. Ideally I would like to have
            animated image headers similar to that on the RPCS3 website but I
            still need to figure out how to implement such things. My assumption
            is that it’ll be something like a tweening image to create a
            movement-like effect.
          </p>
          <img src={rpcs3} className="blogImage" />
          <h3 className="blogImageTitle">
            Figure 1: Homepage Header from{" "}
            <a href="https://rpcs3.net">rpcs3.net</a>
          </h3>
          <p>
            The use of deep blue and violet colour palette is intended to create
            a pleasing and immersive effect similar to that of the colours used
            in the PS3 menu which may be seen in figure 3. These colours will
            often be used in a gradient format like that which can be seen on
            the RPSC3 page in figure 1. The choice of the Castoro, Serif font is
            intended to be readable and classy to compliment the modern look and
            feel of the colour palette.
          </p>
          <img src={colors} className="blogImage" />
          <img src={font} className="blogImage" />
          <h3 className="blogImageTitle">Figure 2: Style Guide</h3>

          <img src={ps3} className="blogImage" />
          <h3 className="blogImageTitle">Figure 3: Playstation 3 Menu</h3>
          <p>
            The portfolio section items are to be laid out as may be seen in
            figure 4. The image carousel will include screenshots from the
            various games included in the portfolio. As the player switches
            through the carousel, the game title and description will change to
            match the image underneath. This will likely be achieved using a
            react state machine which switches the text displayed with the
            image.
          </p>
          <img src={portfolioWire} className="blogImage" />
          <h3 className="blogImageTitle">Figure 4: Portfolio Page Wireframe</h3>
        </article>
      </div>
    );
  }
}
