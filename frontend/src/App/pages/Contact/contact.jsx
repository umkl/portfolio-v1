import React, { useState, useContext } from "react";
import "./contact.scss";
import { AnimatePresence, motion } from "framer-motion";

import { useSpring, config, animated as a } from "react-spring";
import emailjs from "emailjs-com";

import UgLink from "./Link/link.jsx";
import InstagramLogo from "./../../assets/Instagram-Logo.png";
import FiverrLogo from "./../../assets/Fiverr-Logo.png";
import FacebookLogo from "./../../assets/Facebook-Logo.png";
import TwitterLogo from "./../../assets/Twitter-Logo.png";
import GithubLogo from "./../../assets/GitHub-Logo.png";
import { BlurContext } from "./../../context/BlurContext.js";

export default function Contact() {
  var ungar_email_serviceID = "ungar-gmail";
  var ungar_email_templateID = "ungar-template";
  var ungar_email_userID = "user_aElxq1gVsDKZjQqSdu8al";

  const [linkColor, setLinkColor] = useState("blue");
  const [mailStatus, setMailStatus] = useState(null);
  const [blur, setBlur] = useContext(BlurContext);
  const changeMailStatusTo = (ms) => {
    setMailStatus(ms);
    setBlur("4px");
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        ungar_email_serviceID,
        ungar_email_templateID,
        e.target,
        ungar_email_userID
      )
      .then(
        (result) => {
          changeMailStatusTo(result.text);
        },
        (error) => {
          changeMailStatusTo(error.text);
        }
      );
  };

  const contactSpring = useSpring({
    to: { opacity: 1, marginLeft: "0px" },
    from: { opacity: 0, marginLeft: "-400px" },
    config: config.stable,
  });

  const mailStatusSpring = useSpring({
    to: { opacity: 1, marginLeft: "0px" },
    from: { opacity: 0, marginLeft: "-400px" },
    config: config.stable,
  });

  //Fragment that returns both login and status
  return (
    <React.Fragment>
      {mailStatus != null ? (
        <div className="ug-contact-mailStatus">
          {
            <a.div
              style={mailStatusSpring}
              className="ug-contact-mailStatus-box"
            >
              <p>Successfully sent the email.</p>
              <button
                onClick={() => {
                  setMailStatus(null);
                  setBlur(null);
                }}
              >
                OK
              </button>
            </a.div>
          }
        </div>
      ) : null}
      //frame
      <motion.div
        className="ug-contact"
        style={
          mailStatus != null ? { filter: `blur(${blur})` } : { filter: "none" }
        }
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="ug-contact-container">
          <div className="ug-contact-frame">
            <div className="ug-contact-links">
              <div className="ug-contact-links-pos">
                <UgLink
                  imageSource={FacebookLogo}
                  linkHref="https://www.facebook.com/michael.ungar.1232"
                  name="Facebook"
                  username="@ungarmichael"
                />
                <UgLink
                  imageSource={InstagramLogo}
                  linkHref="https://www.instagram.com/ungar_/"
                  name="Instagram"
                  username="@_ungar"
                />
                <UgLink
                  imageSource={GithubLogo}
                  linkHref="https://github.com/ungarmichael"
                  name="Github"
                  username="@ungarmichael"
                />
                <UgLink
                  imageSource={FiverrLogo}
                  linkHref="https://www.fiverr.com/ungarmichael"
                  name="Fiverr"
                  username="@ungarmichael"
                />
              </div>
            </div>
          </div>
          <a.div style={contactSpring} className="ug-contact-divider"></a.div>
          <div className="ug-contact-frame">
            <a.div style={contactSpring} className="ug-contact-input">
              <form onSubmit={sendEmail}>
                <div className="ug-contact-input-heading">
                  write me an email
                </div>
                <div className="ug-contact-input-box">
                  <input
                    type="email"
                    name="user_email"
                    className="ug-contact-input-box-input"
                    placeholder="enter email"
                    required
                  />
                  <textarea
                    type="text"
                    name="message"
                    className="ug-contact-input-box-input_text"
                    placeholder="enter text"
                    required
                  />
                  <input
                    type="submit"
                    value="submit"
                    className="ug-contact-input-box-input_submit"
                    required
                  />
                </div>
              </form>
            </a.div>
          </div>
        </div>
      </motion.div>
    </React.Fragment>
  );
}
