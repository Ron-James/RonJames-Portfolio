import React, { Component } from "react";
import "../styles/BlogPost.css";
import Return from "../components/Return";

export default class Blog4 extends Component {
  render() {
    window.scrollTo(0, 0);
    return (
      <div>
        <Return/>
        <article class="blog">
          <h1>Reflection</h1>
          <p>
            In this short blog post, I intend to discuss and reflect on the
            progress made in the first quarter of the year at WITS 2022. This
            will predominantly be on the new skills and knowledge picked up in
            the interactive media course WSOA4175A.
          </p>
          <p>
            Being back on campus at WITS for the first time in almost two years
            has been a refreshing experience. I have greatly enjoyed being able
            to engage with other students first-hand for the first time in quite
            a while. I was greatly looking forward to undertaking this
            interactive media course as it was an extra course that I decided to
            take in my honours year on top of the necessary requirements. I
            decided specifically to take it up because I was told we would be
            learning the React framework and I thought it would be a valuable
            skill to add to my programming repertoire. I am passionate about
            programming and had already done the preceding course necessary so
            it seemed like a good opportunity.
          </p>
          <p>
            Now that we are past the first quarter of the first semester, I feel
            I have learned quite a bit, especially with regard to building web
            pages with React. I have enjoyed using it as it provides a nice
            framework to build web pages which is far more logical than the
            methods I was using beforehand. I have been able to take to it
            pretty quickly as our lecturer Andre has provided us with concise
            lecture videos which are easy to follow and code along in VS code.
            The weekly workshops have allowed me to understand all of the
            necessary concepts associated with react. I found the total website
            build in week 6 to be especially helpful in tying all of the
            previous concepts together. This accumulated knowledge has allowed
            me to put together my portfolio website with react which will
            hopefully aid me in my future employment.
          </p>
          <p>
            The theoretical aspects of the course are more outside of my comfort
            zone as I am coming from an engineering background where writing
            about art theory is not something I have been used to. I have not
            been super into all of the topics we have been covering as they do
            not necessarily pique my interest but I usually find something to
            take from them for the most part. I did enjoy reading and
            discovering various net-art web pages around the internet. My post
            on “Non-Fungible identities” was an interesting one to write and
            research. I enjoyed looking through the various pieces of digital
            art and web pages with interesting gimmicks. All and all it was an
            interesting experience going through the theory side of this course
            although it wasn’t what I necessarily came for.
          </p>
          <p>
            At the end of the day, I am happy with the way things are going and
            look forward to Block 2!
          </p>
        </article>
      </div>
    );
  }
}
