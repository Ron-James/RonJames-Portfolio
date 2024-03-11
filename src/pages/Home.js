import React, { Component } from "react";
//import Hero from "../assets/GradientHeader.png";
import "../styles/Home.css";
import Hero from "../components/Hero";
import TextSection from "../components/TextSection";
import Media from "../components/Media";

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
            software projects I have been involved in. Take the chance to get to know me and my work."
        />

        <TextSection
          Image="road.jpg"
          Sub=""
          Desc="
          Good evening! I'm James 'Ron James' Theron, a software engineer and game designer with a BSc in Engineering Sciences and honors in Game Design and Interactive Development from the University of the Witwatersrand. With professional experience in game development, I navigate the industry with confidence and a strong work ethic. I'm passionate about innovative game design and committed to pushing the boundaries of interactive development."
          Title="About Me"
          TextColor="white"
        />

        <TextSection
          Image="work.png"
          Sub=""
          Desc="I am currently employed full-time as a Unity Software Developer at BizAR Reality, specializing in Virtual Reality development for the Oculus Quest. Since March 2023, I have contributed to various VR projects, enriching my understanding of the VR landscape. Many of these projects have incorporated multiplayer features, allowing me to become proficient in Unity networking libraries like Mirror and Normcore. My time at BizAR Reality has honed my adaptability as a programmer, enhancing my ability to deliver high-quality work efficiently. I am proud of the progress I have made and confident in my problem-solving abilities and consistent performance."
          Title="Work Experience"
          TextColor="white"
        />

        <TextSection
          Image="dragon.jpg"
          Sub=""
          Desc="I specialize in C# development and have created numerous computer games using the Unity game engine. My experience spans solo and team projects in both personal and professional environments. My expertise lies in scripting architecture, mechanic design, physics engine design, developer tool creation, Virtual Reality development, and multiplayer architecture. Since 2019, I have been deeply engaged with Unity, gaining a strong familiarity with the software."
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
          Desc="I possess strong skills in game design and collaboration. Through involvement in numerous small team projects and serving as project manager in several, I have honed my ability to work effectively with others. I believe I can contribute significantly as a team player across a range of future projects. My passion for game development drives me to dedicate myself fully to each endeavor."
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
