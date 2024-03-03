import React, { Component } from "react";
//import Hero from "../assets/GradientHeader.png";
import "../styles/Home.css";
import Header from "../components/Header";
import Logo from "../components/Logo";
import Hero from "../components/Hero";
import TextSection from "../components/TextSection";
import Media from "../components/Media";
import WeatherCard from "../components/WeatherCard";

export default class Home extends Component {
  render() {
    window.scrollTo(0, 0);
    return (
      <div>
        <Hero
          Title="Ron James Theron"
          Sub="Game Designer | Software Engineer"
          Desc="Welcome to my portfolio! This is intended to 
            compliment my resume and be a space to show of the various 
            software projects I have been involved in."
        />

        <TextSection
          Image="road.jpg"
          Sub=""
          Desc="Good Evening! My name is James 'Ron James' Theron. I'm a
            qualified software engineer and game designer by trade. I'm qualified
            with a BSc in Engineering Sciences, have my honours in Game Design and Interactive Development from the
            University of the Witwatersrand and have professional experience working as a programmer in game development. I'm a hardworking and confident programmer navigating my way throught the game development industry."
          Title="About Me"
          TextColor="white"
        />

        <TextSection
          Image="work.png"
          Sub=""
          Desc="I am currently working full time as a Unity Software Developer at a company called BizAR Reality. I work predominantly within  the Virtual Reality space develping for the Oculus Quest.
          Since March 2023, I have worked on many different VR Unity projects and have learned a lot about the VR space. 
          Many of these projects have also involved multiplayer capabilities and I have become familiar with Unity networking libraries like Mirror and Normcore. Working here at BizAR reality has forced me to become a more adaptable programmer with fast output. I feel I have come along way since I started working here and I feel I have a lot to offer in terms of strong problem solving and reliable output."
          Title="Work Experience"
          TextColor="white"
        />

        <TextSection
          Image="dragon.jpg"
          Sub=""
          Desc="I specialise in C# development and have developed several
          computer games in the Unity game engine. I have worked on both solo
          and team projects in a personal and professional setting. When it comes to developing digital games, my
          skills are best utilised in: general scripting, mechanic design,
          physics engine design, developer tool creation, Virtual Reality development and multiplayer architecture development.
          I have been using Unity to develop games since 2019
          and have become well aquainted with the software."
          Title="Unity Development"
          TextColor="whitesmoke"
        />

        <TextSection
          Image="night.png"
          Sub=""
          Desc="Alongside my professional work in the Unity Game Engine, I have also started learning to develop games in the Unreal Engine. I have found a lot of joy in working with the engine and find it has a lot of advantages to offer in game development. This is still currently a work in progress but I feel my skills in Unity have given me a good foundation to start learning Unreal. I have been working on a few small projects and tutorials in Unreal and have been learning the basics of the engine. I am confident that I will be able to develop games in Unreal in the near future."
          Title="Unreal Engine Development"
          TextColor="whitesmoke"
        />

        <TextSection
          Image="lightBulbs.jpg"
          Sub=""
          Desc="I have varying amounts of experience with various other programming
          fields. This includes web devlopment in React as
          can be seen on the web page you are currently reading this on. Other
          fields include Java and python development which I have worked on a
          few smaller team projects. My best strength when it comes to working
          in software development that I'm adaptable which means being able to
          learn new programming languages, libraries and systems when
          necessary."
          Title="Software Engineer"
          TextColor="whitesmoke"
        />

        <TextSection
          Image="stars.jpg"
          Sub=""
          Desc="My skills outside the technical world of programming include project
          management and working with other people. Having worked on several
          small team projects and taking the role of project manager in a few
          of them. I feel I can be a valuable team player on a variety of
          different projects in the future. I am particuarly passionate about
          making games and am perfectly capable on putting my heart and soul
          into a project."
          Title="Being a Team Player"
          TextColor="whitesmoke"
        />

        <TextSection
          Image="pitch.jpg"
          Sub=""
          Desc="I enjoy reading and hiking in my spare time aside from playing games. I consider myself to 
          be a games enthusiast so I enjoy watching sports and engaging with computer and tabletop games.
          I work to maintain my mental health with physical exercise and meditation. I am generally open to finding 
          new hobbies when the opportunity arises."
          Title="My Personal Interests"
          TextColor="whitesmoke"
        />

        <TextSection
          Image="lighthouse.jpg"
          Sub=""
          Desc="I made this personalised website to show off some of the best software
          and computer game projects which I have worked on during my university
          years. This is intended to function as a portfolio website."
          Title="Take a Look!"
          TextColor="whitesmoke"
        />
        <Media />
      </div>
    );
  }
}
