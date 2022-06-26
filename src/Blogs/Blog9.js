import React, { Component } from "react";
import "../styles/BlogPost.css";
import Homepage from "../assets/Homepage-Wireframe.png";
import Text from "../assets/Text Sections.png";
import Return from "../components/Return";


export default class Blog9 extends Component {
  render() {
    window.scrollTo(0, 0);
    return (
      <div>
        <Return />
        <article class="blog">
          <h1>Design Reflection</h1>
          <p>
            The website as a whole is intended to be a form of advertisement for
            my skills in software development which includes the ability to
            design and develop websites. So the general design process was
            geared towards giving the website a distinct feel whilst taking
            inspiration from some other web pages which I felt achieved
            something along those same lines. I am generally more of a developer
            than a designer so I usually opted to go for a few simple common
            design concepts as well as a few things in the internet art section
            which are perhaps a bit more unique to what I was trying to achieve.
          </p>
          <p>
            The home page which is divided up into several text sections is
            directly inspired by the homepage of the RPCS3 (https://rpcs3.net)
            website. The wireframe may be seen in figure 1. The opening hero is
            intended to inform the user about what to expect from the website as
            soon as they load up the landing page. The title is my name with a
            sub-title underneath which mentions my qualification. Underneath
            that is a brief overview of what the website holds. The animated
            waves are intended to give it a bit more life rather than remaining
            static. This idea is directly taken from the opening hero from RPCS3
            as seen in figure 2. The Webpage has been zoomed out to see the
            layout of the text sections with their image backgrounds. The text
            sections below evolved from simple paragraphs with titles into the
            sections you currently see on the homepage. The general intention is
            to make the descriptive paragraphs more eye-catching and it is a
            technique used by many personal websites. The use of graphics behind
            the text improves general engagement.
          </p>
          <img src={Homepage} className="blogImage"></img>
          <h3 className="blogImageTitle">Figure 1: Homepage Wireframe</h3>
          <p>
            The internet art may be found on the portfolio page. As previously
            discussed it aims to somewhat emulate the experience of operating
            the menu of a gaming console. The use of a carousel was my idea as
            opposed to taking inspiration from some other website. However, the
            concept of emulating a gaming console did also come from using the
            RPCS3 website since using it reminded me of a PlayStation 3 menu. I
            thought a gaming menu would make sense for my website since I am
            showing off software projects which are mostly games. My initial
            plan for the portfolio section was to just have the screenshots
            lined up similarly to the blog previews in the blogs section with
            the description paragraphs underneath. I later decided to
            incorporate this section into the internet art once I hatched the
            idea for it. The style of the carousel aimed to emulate something of
            a PlayStation 4 menu which is set up in a similar way where the game
            thumbnails are lined up and the one selected is magnified. I am
            quite happy with the way the internet art turned out because it is
            potentially a different way of showing my portfolio compared to many
            similar websites.
          </p>
          <img src={Text} className="blogImage"></img>
          <h3 className="blogImageTitle">Figure 2: RPCS3 Text Sections</h3>
          <p>
            The design of the navbar is fairly standard. I aimed to emulate the
            conventions of most websites where there are page links on the right
            and a logo on the left. Since my website doesn’t have a logo, I used
            a greeting in its place to greet the user as I thought this was a
            different approach to something commonplace. The hover-over effect
            was initially supposed to be a plain underlining effect but upon
            fiddling with the CSS, it came out underlining the top and bottom
            side of the links which I decided looked better so I stuck with it.
          </p>

          <p>
            All in all, I would say the design of the website as a whole is
            simple but effective with a few little unique ideas here and there
            to keep things fresh. The homepage and navbar aim to follow
            conventions while the portfolio section aims to offer something
            different to many online portfolios.
          </p>
        </article>
      </div>
    );
  }
}
