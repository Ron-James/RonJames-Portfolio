import React, { Component } from "react";
import Hero from '../assets/GradientHeader.png'
import "../styles/Home.css";
import Header from "../components/Header";
import Logo from "../components/Logo";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header headline="Hello There" />
        <Logo/>
        <section class="aboutme">
          <h2>About Me</h2>
          <p>
            Good Evening! My name is James 'Ron James' Theron. I'm a newly
            qualified software engieer and game designer by trade. I'm qualified
            with a BSc in Engineering Sciences and Digital Arts from the
            University of the Witwatersrand. I'm currently searching for part
            time work in the software industry. My goal is to gather workplace
            experience in software development to expand my horizons to further
            delve into the business of writing code.
          </p>
          <h2>I Make The Video Games!</h2>
          <p>
            I specialise in C++/C# development and have developed several
            computer games in the Unity game engine. I have worked on both solo
            and team projects. When it comes to developing digital games, my
            skills are best utilised in: general scripting, mechanic design,
            physics engine design. I have been using Unity to develope games for
            around 3 years now and have become well aquainted with the software.
            My long term ambition is to work on digital games full time.
          </p>
          <h2>Living The Programming Life</h2>
          <p>
            I have varying amounts of experience with various other programming
            fields. This includes web devlopment in HTML/CSS and Javascript as
            can be seen on the web page you are currently reading this on. Other
            fields include Java and python development which I have worked on a
            few smaller team projects. My best strength when it comes to working
            in software development that I'm adaptable which means being able to
            learn new programming languages, libraries and systems when
            necessary.
          </p>
          <h2>Being a Team Player</h2>
          <p>
            My skills outside the technical world of programming include project
            management and working with other people. Having worked on several
            small team projects and taking the role of project manager in a few
            of them. I feel I can be a valuable team player on a variety of
            different projects in the future. I am particuarly passionate about
            making games and am perfectly capable on putting my heart and soul
            into a project.
          </p>

          <h2> Take a look!</h2>
          <p>
            I made this personalised website to show off some of the best
            software and computer game projects which I have worked on during my
            university years. This is intended to function as a portfolio
            website.
          </p>
        </section>
        
      </div>
    );
  }
}
