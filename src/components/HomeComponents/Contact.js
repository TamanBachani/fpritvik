import React from 'react'
import '../../stylesheets/contact.scss'

const Contact = () => {
  return (
    <div id="contact" className="padding blue-bg">
      <h1 className="heading">Contact us</h1>

      <div class="card-group">
        <div class="circles">
          <div class="circle circle-1"></div>
          <div class="circle circle-2"></div>
        </div>
        <div class="contact-form">
          <div className="mail-group">
            <div className="field away">We're a Mail away </div>
            <div className="field">
              <span className="dim">To</span>
              <span className="to-mail dark">
                Fpritvik<i class="fas fa-at"></i>gmail.com
              </span>
            </div>
            <div className="field">
              <span className="dim">Subject</span>
              <span className="subject-mail dark">
                Your website brought me here!
              </span>
            </div>
            <div className="field">
              <span className="content-mail dark">
                Wish to collaborate? Have an idea that you'd like to run by us? Reach out to us! For feedback, freelance work, collaboration, discussion, and more.
              </span>
            </div>
            <div className="send">
              <button
                onClick={() =>
                  window.open(
                    "mailto:fpritvik@gmail.com?subject=Your%20website%20brought%20me%20here!"
                  )
                }
                className="send-btn"
              >
                Send
              </button>
            </div>
          </div>
          <div class="ring"></div>
        </div>
      </div>
    </div>
  );
}

export default Contact