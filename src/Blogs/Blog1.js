import React, { Component } from "react";
import "../styles/BlogPost.css";

export default class Blog1 extends Component {
  render() {
    return (
      <div>
        <article class="blog">
          <h1>Non-Fungible Life</h1>
          <p>
            This short essay intends to be a critical piece on the internet art
            instalment named ‘Non-Fungible Identities’ which was created by
            Danish Artist ‘Ada Ada Ada’ in 2021. The piece functions solely as a
            single web page which may be viewed at
            https://non-fungible-identities.art.
          </p>

          <p>
            Non-Fungible Identities is an art project which uses a form of
            artificial intelligence to create a type of commentary on art
            capitalism and human identities. A user can visit the web page and
            purchase a poster that displays a purely randomly generated person.
            Each individual consists of a headshot, name, date of birth, gender
            and a short description which is labelled as their ‘life story’. All
            of this information is printed on a physical poster which may be
            purchased at a price that is also randomly generated within a
            certain range. A new identity is generated every 24 hours, if nobody
            purchases the poster, it is deleted and cannot be purchased at a
            later date.
          </p>
          <p>
            The concept of fungibility within the art world has become a hot
            topic in recent years due to the rise of blockchain technology. The
            term non-fungible specifically refers to an item that cannot be
            illegitimately replicated. With the use of blockchain verification,
            digital assets can now be verified as legitimate as there is
            encrypted transaction information stored on a blockchain. This is
            particularly useful in the sector of digital currencies such as
            bitcoin or Ethereum as it allows for the possibility of
            decentralised currencies in a digital space. But in the case of the
            art world, the controversial rise of non-fungible tokens (NFTs) has
            seen blockchain technology being used to verify the ‘originality’ or
            legitimacy of pieces of digital art. This brings up the question:
            what does it mean for an artistic piece to be considered original in
            a digital world? The concept of non-fungible art attempts to create
            a world where digital pieces become highly valuable similar to that
            of valuable paintings at an auction.
          </p>
          <p>
            The posters which can be purchased from Non-Fungible Identities do
            not use any blockchain technology to create their sense of
            no-fungibility as they are physical posters. As described by the
            creator of the web page, the non-fungibility or sense of scarcity is
            created by the posters’ physical and limited edition qualities. The
            randomness of each individual identity generated creates something
            that can be considered unique in its own way which is unlikely to be
            replicated. This means that the posters could technically be
            illegitimately produced or copied if someone had the desire to do
            so. However, the irony is that it would be much more difficult to
            effectively copy something physical than it is to download the JPEG
            of an NFT.
          </p>
          <p>
            In my opinion, since the concept of originality within art is purely
            cognitive, the knowledge of whether a piece is legitimate or not and
            the value of such a thing lies within the person wanting to own said
            piece. If the person is to believe that they own something legit,
            even if the piece isn’t truly ‘the original’, the outcome is
            effectively the same within that person’s cognition. A physical work
            of art will always hold more value than a non-fungible token which
            is merely just a collection of ones and zeros which verify that you
            paid actual money for this digital artwork.
          </p>
        </article>
      </div>
    );
  }
}
