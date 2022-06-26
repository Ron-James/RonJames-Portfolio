import React, { Component } from "react";
import "../styles/BlogPost.css";
import Return from "../components/Return";

export default class Blog7 extends Component {
  render() {
    window.scrollTo(0, 0);
    return (
      <div>
        <Return/>
        <article class="blog">
          <h1>Reflection Part 2</h1>
          <p>
            Reflecting on the second half of the semester just gone by, I can’t
            say much has changed since the halfway point in the term. I’m slowly
            but surely progressing in the art of development and React. I
            finally managed to come up with an idea for the internet artwork for
            my portfolio website as I was inspired by a PlayStation 3 emulator
            website when attempting to set up and play some PlayStation
            exclusive games on my PC. I was struck by how much using the website
            for RPCS3 reminded me of using my friend's PlayStation 3 just
            through its use of aesthetic design and animations. I initially had
            a feeling I wanted to go for some kind of gaming theme for my
            website since I develop games but was not exactly clear on the
            feeling I wanted to get across and how to achieve it. I’m a
            particularly artistic person when it comes to these sorts of things
            so a little bit of inspiration can go a long way and it usually
            comes from out of the blue. This involved me changing up the initial
            aesthetic a fair bit, using a whole new colour pallet and header
            images.
          </p>
          <p>
            I’ve also begun working on a few new pieces which will eventually be
            added to the portfolio section of my website during this last block.
            My big digital art project for the year has officially started
            development. The project is a mobile game which I’ve had on my mind
            for quite some time now and decided to take on this honours degree
            to hopefully get a chance to develop it (with some help on the
            assets potentially). The idea is to build a multiplayer, PVP brick
            breaker game with battleship mechanics. I hope to eventually publish
            it on the mobile stores.
          </p>
          <p>
            But as exams approach, I will likely be working on a few different
            exam projects including finishing up this website. There are still
            quite a few aesthetic and interactive elements I would like to add
            which I have outlined in previous blog posts. I will be making
            another game prototype which will eventually land up here but this
            time it will be a game idea which is given to me to develop which is
            something I have not engaged in before and am looking forward to
            doing so.
          </p>
          <p>
            But all in all, I would say it has been a mostly successful
            semester. I feel I have been progressing well in some valuable
            skills which I will be able to take with me into the world of
            employment. I would have liked to be working more on campus but
            there’s always next semester for such things. Hopefully, the exams
            can be just as successful!
          </p>
        </article>
      </div>
    );
  }
}
