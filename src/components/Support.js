import React from 'react'
import { Link } from 'react-router-dom';
import '../stylesheets/support.css'

const Support = () => {
  return (
    <>
      <section className="padding support">
        <h1 className="heading">Support us on Patreon</h1>

        <p className="para">
          <q>
            I find the financial markets fascinating and have been trading
            stocks for many years. With both experiences in Investment Banking
            and programming, I had always enthralled about Algo trading and the
            implementation of AI in Finance. However, what I found is that not
            many people were explaining how to do this. Most of the material
            seemed to be in dry textbooks with no real-world code. The
            communities I found online were generally unfriendly and unwelcoming
            to beginners. The recent response to my videos has been
            overwhelmingly positive, and it is clear that there is a great
            demand for more material on related topics. By request, I have
            created this Patreon page to allow viewers who find value in what
            I'm doing the ability to support me on Patreon.
          </q>
          <br />
          <br />
          <div className='text-center'>- Ritvik Dashora </div>
        </p>
        <div className="patreon-cards">
          <div className="patreon-card">
            <p className="patreon-text">Human</p>
            <img
              className="patreon-image"
              src={require("../images/human.jpg")}
              alt="Human"
            />
            <p className="patreon-text2">
              <i class="fas fa-arrow-right"></i> Access to exclusive patron-only
              posts <br />
              <i class="fas fa-arrow-right"></i> Interact with a community of
              financially aware individuals <br />
              <i class="fas fa-arrow-right"></i> Rate Videos
            </p>
            <Link
              to="https://www.patreon.com/join/fpritvik/checkout?rid=6653167"
              className="checkout"
            >
              SEND ME <i className="fas fa-arrow-circle-right"></i>
            </Link>{" "}
          </div>
          <div className="patreon-card">
            <p className="patreon-text">ANGEL</p>
            <img
              className="patreon-image"
              src={require("../images/angel.jpg")}
              alt="Human"
            />
            <p className="patreon-text2">
              <i class="fas fa-arrow-right"></i>Become a member of our personal
              WhatsApp group for close discussions and sharing ideas! <br />
              <i class="fas fa-arrow-right"></i> Monthly Google Hangouts to
              discuss plans, video ideas and share feedback
            </p>
            <Link
              to="https://www.patreon.com/join/fpritvik/checkout?rid=6654063"
              className="checkout"
            >
              ASCEND ME <i className="fas fa-arrow-circle-right"></i>
            </Link>{" "}
          </div>
          <div className="patreon-card">
            <p className="patreon-text">god</p>
            <img
              className="patreon-image"
              src={require("../images/god.jpg")}
              alt="Human"
            />
            <p className="patreon-text2">
              <i class="fas fa-arrow-right"></i>Access to a fortnightly
              newsletter with the latest insights on the Market <br />
              <i class="fas fa-arrow-right"></i> 1-on-1 Zoom call with us
              <br />
              <i class="fas fa-arrow-right"></i>Exclusive early access to all
              the FPRitvik Products that are currently in development
            </p>
            <Link
              to="https://www.patreon.com/join/fpritvik/checkout?rid=6654098"
              className="checkout"
            >
              TRANSCEND ME <i className="fas fa-arrow-circle-right"></i>
            </Link>{" "}
          </div>
        </div>
      </section>
    </>
  );
}

export default Support