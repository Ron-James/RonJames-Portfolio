import React, { Component } from "react";
import "../styles/BlogPost.css";
import Return from "../components/Return";

export default class Blog3 extends Component {
  render() {
    window.scrollTo(0, 0);
    return (
      <div>
        <Return/>
        <article class="blog">
          <h1>
            Connect The People
          </h1>
          <p>
            This short post intends to discuss some of the inequalities within
            the digital sectors of the world as well as some of the
            technological efforts being made to bridge the divide.
          </p>
          <p>
            Digital access and symbiosis have become something most privileged
            individuals (such as myself) have become so used to that we probably
            take it for granted. Access to powerful personal computing for work
            and leisure activities, sophisticated smartphones which allow us to
            plug in wherever we please and fast internet connections which allow
            us to seamlessly connect. Quite frankly, digital life has become the
            way I spend the majority of my time these days. Receiving toys these
            days around Christmas time seems to be a thing of the past as the
            most wanted gifts these days generally seem to be some kind of
            gaming gadget or handheld device. I’ve witnessed first-hand how a
            screen can hypnotise a child like nothing else.
          </p>
          <p>
            But this is very much the story of the privileged few who can afford
            access to such devices. Only half of the world’s population has
            access to the internet [1]. Device ownership is expensive as the
            materials needed to make them aren’t exactly shooting out of the
            ground (or at least, not enough to make them more affordable) and
            the materials themselves are often a powerful chip held by the
            countries which mine them. The only reason smartphones can be
            something close to affordable for most people is because the
            companies which produce them exploit labour in countries with poor
            human rights. It’s estimated that an iPhone would cost more than
            double if it were to be produced in the US where the majority of
            them are purchased [2].
          </p>
          <p>
            But the world isn’t exactly waiting for those who don’t have access.
            Especially since the dawn of the Covid era began. People were just
            expected to conduct their work and education lives online to avoid
            the fear of a contagious virus spreading. The technology does exist
            to have contactless operations which were thought to be ideal at
            this time but the issue is that not everyone can access these
            technologies.
          </p>
          <p>
            But changes may be on the horizon as solutions to such issues become
            more viable. The likes of asteroid mining could enter the sphere
            which would vastly bring down the costs of the metals necessary to
            make things like processing chips and other necessary circuitry.
            Companies like Starlink are investing in technology to make
            broadband more accessible in rural regions through satellites. The
            future may be indeed more inclusive.
          </p>
          <h1>References</h1>
          <p>
            [2] J. Perry, M., 2022. How Much Would a 'Made in America' iPhone
            Cost? Too Much. | Mark J. Perry. [online] Fee.org. Available at:
            https://fee.org/articles/a-made-in-america-iphone-would-cost-2-000-studies-show/
            [Accessed 19 April 2022].
          </p>
          <p>
            [1] Sambuli, N. and Magnoni, S., 2022. What is digital equality? An
            interview with Nanjira Sambuli. [online] World Economic Forum.
            Available at:
            https://www.weforum.org/agenda/2019/04/digital-equality-interview-nanjira-sambuli/
            [Accessed 19 April 2022].
          </p>
        </article>
      </div>
    );
  }
}
