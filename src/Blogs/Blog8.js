import React, { Component } from "react";
import "../styles/BlogPost.css";
import Return from "../components/Return";

export default class Blog8 extends Component {
  render() {
    window.scrollTo(0, 0);
    return (
      <div>
        <Return />
        <article class="blog">
          <h1>Technical Reflection</h1>
          <p>
            The website in its current and final form meets the criteria I was
            aiming for concerning technical composition. With the help of the
            React framework, the architecture is logical and modular. This was
            not the case when I was constructing web pages with basic HTML and
            CSS with a little bit of JS. I made sure to make use of React
            components wherever possible to ensure that the site would be light
            on code and could be easily edited when changes were to be made.
            This blog post intends to go into a bit of detail regarding each of
            the individual technical elements which make my website possible.
          </p>
          <p>
            The nav bar which always appears at the top of the screen was the
            first thing that appeared on the website as navigation is possibly
            the single most important thing. It is a react component which is
            placed on the ‘App’ page to ensure it is always present on all other
            pages. It utilises React’s routing system to deliver the user to the
            various pages. It is composed of two divs which make up the left and
            right sides. The left side generally holds the links and the right
            side holds the logo but when the screen width drops below around
            600px, the burger icon appears to allow the user to switch between
            the logo and the links for the sake of screen size responsiveness.
            The links themselves are also now made to be a little bit more
            interactive as the underline on both the top and bottom when hovered
            over. This is achieved by the CSS ::before, ::after and ::hover
            functions as well as some CSS animation frames. Overall I am quite
            happy with how the navbar functions as it is fairly logical and
            interactive.
          </p>
          <p>
            The home page which is supposed to be a landing page for the user
            mostly consists of a selection of hero banners which have
            introductory text upon a specified image background. Each hero is a
            variation of the same component except for the first one which also
            involves animated waves and appears on every other page as a header.
            Each hero includes a set of properties which define the title,
            subtitle, description, background image URL and text colour (to
            ensure the text can be seen on the background image). The text on
            each hero is designed to reduce in size when the user is operating
            on a screen smaller than 600px to ensure responsiveness. I feel the
            homepage is simple yet effective in what it is trying to achieve
            from a technical standpoint.
          </p>
          <p>
            The blog page functions in a similar fashion to that of the home
            page. The sections provide small previews to the user for each of
            the blog posts. Each blog preview is a varied component which stores
            the image URL, blog title and page link in its properties.
          </p>

          <p>
            Finally, the portfolio page is where the net art lives. It’s quite a
            bit more complex than the other pages on the website. The image
            carousel which shows off the game screenshots is made with an
            external react library known as Slick which is specifically designed
            for implementing image carousels. The entirety of the carousel and
            description text falls under a single component which keeps track of
            a simple numerical state. Switching between the images using the
            arrow icons increments or decrements the state which also switches
            the description text items which are stored in an array. The Slick
            object handles the majority of the carousel properties like the
            number of images on the slide show or the speed at which it changes.
            This allows the carousel to only include one picture instead of
            three when the screen size drops below 600px in width to avoid
            issues. The portfolio page is intended to come across like a gaming
            console menu and I feel the use of the carousel achieves this in a
            technically efficient manner.
          </p>
        </article>
      </div>
    );
  }
}
