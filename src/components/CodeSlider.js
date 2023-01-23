import React, { Component } from "react";

import { useState } from "react";
import Slider from "react-slick";

//Change later
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

import bloons from "../assets/Bloons.png";
import pachi from "../assets/Pachi.png";
import rock from "../assets/Rock.png";
import springperson from "../assets/Springperson.png";
import puzzled from "../assets/Puzzled.png";
import shipBreaker from "../assets/Shipbreakers.png";
import battleship from "../assets/BattleshipBrickBreaker.png";

import "../styles/Carousel.css";
const images = [battleship, bloons, springperson,];

const titles = [
  "Even Fibonacci Values",
  "Find a Number Combination in a List",
  "Unity Mesh Debug Tool",
];
const links = [
  "https://theronjames.itch.io/battleshipbrickbreaker",
  "https://drive.google.com/file/d/1_iqtObQ4wkMj3dYM4FMN12mDiq8Iufnl/view?usp=sharing",
  "https://drive.google.com/file/d/1JUcKVhLslrBdDQaGQVrSNy136MLT8IZ2/view?usp=sharing",
];
const gitLinks = [
  "https://github.com/Ron-James/BattleshipBrickBreakerNew.git",
  "https://github.com/Ron-James/Bloons-High-Noon.git",
  "https://github.com/JackFrathbone/WSOA3004A_Tim-1_Assigment-2.git",
];
const p1Array = [
  <p className="portfolioText">
    A mobile game project which I started developing in July 2022, Battleship
    Brick Breaker is an ongoing passion project of mine. It was initially
    developed solely my me but has later aquired some assisting team members.
    The game is published on Itch.io and is available for Android devices. It is
    aiming to later be released on the google play and IOS stores.
  </p>,

  <p className="portfolioText">
    The project with the longest development time on this list, "B'loons at High
    Noon" was developed by a two-man team that included me and Daniel Burke. As
    is immediately apparent, this game looks a lot better than the other games I
    have worked on since it is the only one to have a dedicated digital artist
    working on the visual assets. The game works as it was intended but was
    perhaps over scoped. development time was around 3 and a half months. The
    final product achieves what was set out but the gameplay loop could have
    definitely used more time for the sake of polishing and engaging the player
    during the wave phases. I am responsible for the game's unity configuration
    and scripting while Daniel was responsible for the art direction.
  </p>,
  <p className="portfolioText">
    My personal favourite game on this list, "Springperson" was a game jam
    project developed by a team of 3 members. The development team included
    myself, Jack Rathbone and Declan Thompson. I was responsible for the game's
    physics engine and player controller. Jack was was responsible for the level
    design, visuals and enemy design. Declan handled the administration and
    documentation involved in the project. The development time of the game was
    3 weeks. The game draws comparisons with high-intensity first-person
    shooters like Quake and DOOM.
  </p>,
];
const p2Array = [
  <p className="portfolioText">
    Battleship Brick Breaker is a PVP, physics-based game which will be
    primarily designed to be played on mobile devices. The game involves two
    players who battle to destroy the bricks laid out before them. They will
    remove these bricks using a ball (see game Brick Breaker for reference).
    Each player will control their battleship which will act as a paddle to
    launch a ball as well as keep it in play, similarly to how a ball is hit
    back and forth in Pong. The goal of the game will be to destroy all of a
    specific type of brick from the layout of bricks presented to them. The
    first of the two players to reach this objective is the winner of the match.
  </p>,
  <p className="portfolioText">
    B’Loons at High Noon is intended to merge the common conventions of the
    First-Person and Tower Defence genres. The game is not meant to be a
    First-Person shooter wherein the player becomes an offensive tower. They
    still fulfil the role of a strategist and constructor; the environment and
    interactions are handled within the space of the First-Person perspective
    and movement style. The First-Person perspective, technical and time
    limitations and the Tower-Defence genre conventions required as to set
    constraints, the first of these was to specify the locations of towers, this
    forces the player to move around the environment to construct their strategy
    and maintain their towers.
  </p>,
  <p className="portfolioText">
    Spring Person is a 3D first-person shooter game. Players move around the
    in-game environment equipped with a spring gun, which they can use to both
    traverse the level and fight enemies. The player scores points for pushing
    enemies off of the map using the gun, and the game ends when the player has
    run out of health. The following documentation will discuss the game’s
    development process and the intention behind its creation, as well as
    critically reflect on the success or failure of meeting said intention
  </p>,
];

export default class CodeSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageIndex: 0,
    };
  }
  render() {
    const NextArrow = ({ onClick }) => {
      return (
        <div className="arrow next" onClick={onClick}>
          <FaArrowRight />
        </div>
      );
    };

    const PrevArrow = ({ onClick }) => {
      return (
        <div className="arrow prev" onClick={onClick}>
          <FaArrowLeft />
        </div>
      );
    };

    //const [imageIndex, setImageIndex] = useState(0);
    const small = window.matchMedia("(max-width: 600px)");

    const settings = {
      infinite: true,
      lazyload: true,
      speed: 300,
      slidesToShow: 1,
      centerMode: true,
      centerPadding: 0,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      beforeChange: (current, next) => this.setState({ imageIndex: next }),
      
    };
    if (small.matches) {
      settings.slidesToShow = 1;
    }
    return (
      <section id="portfolio">
        <div className="carousel">
          <Slider {...settings}>
            {images.map((img, idx) => (
              <div
                className={
                  idx === this.state.imageIndex ? "slide activeSlide" : "slide"
                }
              >
                <img src={img} alt={img} />
              </div>
            ))}
          </Slider>
          <div className="details">
            <h1>{titles[this.state.imageIndex]}</h1>
            {p1Array[this.state.imageIndex]}
            {p2Array[this.state.imageIndex]}
            <a href={links[this.state.imageIndex]}>Download</a>
            <a href={gitLinks[this.state.imageIndex]}>View Git project</a>
          </div>
        </div>
      </section>
    );
  }
}
