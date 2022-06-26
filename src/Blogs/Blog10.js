import React, { Component } from "react";
import Return from "../components/Return";
import "../styles/BlogPost.css";

export default class Blog10 extends Component {
  render() {
    window.scrollTo(0, 0);
    return (
      <div>
        <Return />
        <article class="blog">
          <h1>Final Internet Artwork Rationale and Reflection</h1>
          <p>
            The internet artwork which resides on this website is entirely
            housed on the portfolio page. It is a simple piece which includes an
            image sliding carousel which includes screenshots of the various
            game projects which are included in the portfolio. As the user
            slides through these images, the text below changes to match the
            image and provides a brief two-paragraph description of each
            project. The first paragraph provides a bit of background
            information for the project and the second paragraph explains what
            the project itself entails. The carousel operates with the central
            image in focus with two other images on either side appearing
            smaller and more transparent. A sliding animation occurs when the
            images switch. The user can operate the carousel with left and right
            arrow buttons on either side of the set of images. These arrows are
            highlighted in violet when the user hovers over them. This falls
            upon a gradient background which follows the colour scheme of the
            rest of the website. Above the carousel is an animated hero header
            which has two moving waves which are animated at separate intervals.
            The hero includes a title as well as a short description of what the
            user is looking at.
          </p>
          <p>
            The general rationale for the internet art was that I wanted
            something that would give the website an appropriate theme of sorts
            which matched its content. As mentioned previously, the carousel is
            intended to emulate the feel of a PlayStation-style menu. This
            inspiration is more along the lines of a software aesthetic rather
            than something from another internet artwork but there are other
            websites which go for a similar look and feel. The RPCS3 website is
            what gave me the idea since it achieved a PlayStation 3 look and
            feel in its unique way. This is fitting since RPCS3 is a PlayStation
            3 emulator software. I got a few ideas from RPCS3 such as the header
            design with the animated waves. But this idea does initially stem
            from the PlayStation 3 menu itself as it has a similar wavy animated
            background. The purple and blue colour scheme comes directly from
            RPCS3 but this is also generally inspired by the PlayStation 3 menu
            design. The carousel is an original idea I came up with as it is
            something many websites include but I thought of it as a way to show
            off the game images in a similar fashion to how you scroll through
            games on a Playstation menu. This was thought to be significantly
            more interesting than looking through a lineup of images and text as
            it is more animated and includes a level of interaction. The general
            PlayStation feel permeates other pages on the website as they all
            share the same header but the portfolio page is where it is mainly
            directed.
          </p>

          <p>
            As a whole, I would say the internet art mostly succeeds in what I
            was trying to achieve with it. The carousel works well and gets
            across the feeling I was aiming for. There were a few small visual
            aspects I wanted to add to it which never made the final cut which I
            think would have enhanced the console feel. The major one is a
            particle effect around the background of the carousel similar to
            that of the hero on RPCS3 or the PlayStation 3 menu. I think this
            would have added more life to the page and would have been closer to
            a console menu screen since they generally have such things present
            in a live background. But besides that, I felt it has everything I
            envisioned it having and the design is such that it can easily be
            expanded upon in future as I add more projects to the portfolio.
          </p>
        </article>
      </div>
    );
  }
}
