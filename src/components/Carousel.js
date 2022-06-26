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

import "../styles/Carousel.css";
const images = [bloons, springperson, pachi, puzzled, rock];
const titles = [
  "B'loons at High Noon",
  "Springperson",
  "Pachinko Panic",
  "Puzzled Billiards",
  "Rock, Paper, Scissors, Dragon, Ice",
];
const links = [
  "https://drive.google.com/file/d/1_iqtObQ4wkMj3dYM4FMN12mDiq8Iufnl/view?usp=sharing",
  "https://drive.google.com/file/d/1JUcKVhLslrBdDQaGQVrSNy136MLT8IZ2/view?usp=sharing",
  "https://drive.google.com/file/d/19-5iLKjhOfWrMgXKuN72vTCrgjun1Ddb/view?usp=sharing",
  "https://drive.google.com/file/d/1zx4z_NpTwYm9F1qeQzW1DsAdqBvjuQRX/view?usp=sharing",
  "https://drive.google.com/file/d/1IDma6jeI-GN-D2s17auAs0u-yPaKr8pm/view?usp=sharing",
];
const p1Array = [
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
  <p className="portfolioText">
    "Pachinko Panic!" was another game jam project developed by a team of 3
    members. Game physics, software and concept were handled by me. Sound design
    was handled by Imraan Arenz. Digital art was done by Nhlanganiso Tshabngu.
    The development time lasted around 2 weeks. The development process was
    interrupted due to personal issues within members of the team which affected
    the final product.
  </p>,
  <p className="portfolioText">
    "Puzzled Billiards" was a solo development project which lasted around 5
    weeks of development time. The game is intended to be a proto-type and
    vertical slice of a larger game that includes a series of different level
    puzzles. All of the level design, programming and visual design was
    conducted by me.
  </p>,
  <p className="portfolioText">
    One of my earlier games developed while I was still learning the game making
    trade, "Rock, Paper Scissors, Dargon Ice" was an attempt at making a
    turn-based game with a unique selling point. The development time for the
    game was around 5 weeks. This was a solo project and all graphics,
    programming and design were conducted by me.
  </p>,
];
const p2Array = [
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
    and maintain their towers
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
  <p className="portfolioText">
    Pachinko Panic is a single player, 2D digital gambling arcade game which
    takes inspiration from the popular analogue game, pachinko. The premise of
    the game is that you find yourself in an arcade room with five different
    arcade machines. Two of the five machines are rigged to either work in
    favour of the player or against the player. The objective of the game is to
    figure out which machines are rigged and decipher which one is positively
    rigged and which one is negatively rigged before you run out of tokens. The
    player must use the tokens they earn from playing on the machines to
    purchase the right to make a statement on which machines they believe may be
    rigged. The Game as it stands is currently a prototype of what could
    potentially be a larger, more dense game.
  </p>,
  <p className="portfolioText">
    Puzzled Billiards is a 3D, Physics-based, Digital puzzle game that involves
    the player overcoming obstacles to set up the perfect billiards shot. The
    game consists of four unique courses which employ obstacles that require the
    player to use a set of two different ability mechanics to overcome and
    complete the level. Each level is concluded when the player can successfully
    knock the white objective ball into the hole using the multi-coloured
    ability ball. This report intends to discuss the development process and
    design decisions that went into the game.
  </p>,
  <p className="portfolioText">
    Rock, Paper, Scissors, Dragon, Ice is a deck building, turn-based take on
    the classic hand gesture game “Rock, Paper, Scissors”. The player chooses
    which of the three options they wish to play each round in the form of a
    card in their hand and must correctly predict what card their opponent will
    play in order to deal damage. The Game consists of three different AI
    opponents for the player to battle against. Each opponent has their own
    playstyle.
  </p>,
];

export default class Carousel extends Component {
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
      slidesToShow: 3,
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
      <section id = "portfolio">
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
        </div>
        </div>
        </section>
    );
  }
}
