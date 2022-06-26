import React, { Component } from "react";
import "../styles/BlogPost.css";
import Return from "../components/Return";

export default class Blog6 extends Component {
  render() {
    window.scrollTo(0, 0);
    return (
      <div>
        <Return/>
        <article class="blog">
          <h1>Internet Artwork Prototype</h1>
          <p>
            As mentioned in the previous blog post, my internet artwork aims to
            emulate the design and aesthetic of a gaming console menu screen
            since the purpose of the website as a whole is to present games as
            part of my portfolio. To achieve this, I have tried to take
            inspiration from a few different existing console menu screens such
            as the PlayStation 3 and 4 menus as well as the website
            https://rpcs3.net which provides a download portal for a PlayStation
            3 emulator. I hope to implement functional elements from the console
            menus to go alongside some general visual aspects which may remind
            the user of the gaming console experience.
          </p>
          <p>
            In the current stage of development, the most significant and
            functional console element which has been implemented is the
            portfolio carousel which can be found on the portfolio page. It is
            intended to feel similar to the games carousel which one would
            experience when navigating through the games and applications on the
            PlayStation 4 menu screen. It is equipped with image-sliding
            animations which provide the user with a slick experience when
            sifting through the various works present in the portfolio. The
            viewer can use the arrow icons to shift through the pictures on
            display and the text below the carousel is dynamically changed to
            match the game screenshot shown. This is to provide the user with a
            title and a short two-paragraph description of each game and its
            origin.
          </p>
          <p>
            The image carousel itself is implemented using a react library
            called “React Slick” which is a react port of a JQuery library. The
            library itself is specifically designed to create different kinds of
            carousels. The entirety of the information on the portfolio page is
            written on a single react component which keeps track of an image
            index state which indicates which image the user is currently
            looking at relative to the array of screenshot images. This index is
            then used to change the text to the corresponding element in a
            separate set of arrays.
          </p>
          <p>
            All in all, I feel the portfolio section of the website is what
            captures the essence of the intended internet artwork in the current
            prototype. I feel it uses a combination of graphic and written
            information to its advantage interactively and responsively.
            However, I do feel that it is currently lacking some visual flair as
            it is currently sitting on a white background with the only colour
            being in the title header at the top of the screen which appears on
            every page. I hope to potentially spice this up in future iterations
            to further capture the essence of console gaming.
          </p>
          <p>
            Other areas of the website are still a work in progress but I have
            ideas about how I want it to look. The inspiration for how things
            will generally be laid out come directly from the RPCS3 website
            (https://rpcs3.net) which I generally find to have a pleasing
            design. Currently, I have implemented title headers on each of the
            pages which employ a deep blue to violet gradient with white text on
            top. This concept is similar to that on the homepage of rpcs3.net
            but it does not have the eye-catching animations and text flair
            which I hope to implement in future. Other aspects like the
            navigation bar are also inspired by rpcs3.net as it uses a
            marginally transparent gradient background which matches the colours
            of the headers and sticks to the top of the screen.
          </p>
          <p>
            Currently, I feel many aspects of the site (besides the portfolio)
            still need a dose of interactivity. I hope to achieve this in future
            iterations by implementing various types of feedback for the user to
            help drive home the immersive feeling of the internet artwork.
            Things like hover effects and general animations are in the works
            for the exam submission.
          </p>
        </article>
      </div>
    );
  }
}
