import React from "react";
import "./contact.scss";
import { AnimatePresence, motion } from "framer-motion";
import UgLink from "./Link/link.jsx";

import { useSpring, config, animated as a } from "react-spring";
import InstagramLogo from "./../../assets/Instagram-Logo.png";

export default function Contact() {
  // const linkSpring = useSpring({
  //   to: { opacity: 1, color: "red", marginLeft: "0px" },
  //   from: { opacity: 0, color: "blue", marginLeft: "-400px" },
  // });
  // const dividerSpring = useSpring({
  //   to: { opacity: 1, marginLeft: "0px" },
  //   from: { opacity: 0, marginLeft: "-400px" },
  // });
  // const inputSpring = useSpring({
  //   to: { opacity: 1, marginLeft: "0px" },
  //   from: { opacity: 0, marginLeft: "-400px" },
  // });

  const contactSpring = useSpring({
    to: { opacity: 1, marginLeft: "0px" },
    from: { opacity: 0, marginLeft: "-400px" },
    config: config.stable,
  });

  // const buttonSpring = useSpring({
  //   to: { opacity: 1, marginLeft: "0px" },
  //   from: { opacity: 0, marginLeft: "-400px" },
  //   config: config.slow,
  // })

  return (
    <motion.div
      className="ug-contact"
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <a.div style={contactSpring} className="ug-contact-divider"></a.div>

      <div className="ug-contact-container">
        <div className="ug-contact-links">
          <div className="ug-contact-links-2">
            <a.div style={contactSpring} className="ug-contact-container-line">
              <img
                src={InstagramLogo}
                alt="Instagram Logo"
                height="35px"
                width="35px"
              />
              <div className="ug-contact-links-divider" />
              <div className="ug-contact-links-div">
                <a.div
                  style={contactSpring}
                  className="ug-content-links-div-text"
                >
                  Facebook
                </a.div>
              </div>
            </a.div>
            <a.div style={contactSpring} className="ug-contact-container-line">
              <img
                src={InstagramLogo}
                alt="Instagram Logo"
                height="35px"
                width="35px"
              />
              <div className="ug-contact-links-divider" />
              <div className="ug-contact-links-div">
                <a.div
                  style={contactSpring}
                  className="ug-content-links-div-text"
                >
                  Twitter
                </a.div>
              </div>
            </a.div>
            <a.div style={contactSpring} className="ug-contact-container-line">
              <img
                src={InstagramLogo}
                alt="Instagram Logo"
                height="35px"
                width="35px"
              />
              <div className="ug-contact-links-divider" />
              <div className="ug-contact-links-div">
                <a.div
                  style={contactSpring}
                  className="ug-content-links-div-text"
                >
                  Instagram
                </a.div>
              </div>
            </a.div>
            <a.div style={contactSpring} className="ug-contact-container-line">
              <img
                src={InstagramLogo}
                alt="Instagram Logo"
                height="35px"
                width="35px"
              />
              <div className="ug-contact-links-divider" />
              <div className="ug-contact-links-div">
                <a.div
                  style={contactSpring}
                  className="ug-content-links-div-text"
                >
                  Github
                </a.div>
              </div>
            </a.div>
            <a.div style={contactSpring} className="ug-contact-container-line">
            <img
                src={InstagramLogo}
                alt="Instagram Logo"
                height="35px"
                width="35px"
              />
              <div className="ug-contact-links-divider" />
              <div className="ug-contact-links-div">
                <a.div
                  style={contactSpring}
                  className="ug-content-links-div-text"
                >
                  Fiverr
                </a.div>
              </div>
            </a.div>
          </div>
        </div>

        <a.div style={contactSpring} className="ug-contact-input">
          <div className="ug-contact-input-heading">write me an email</div>
          <div className="ug-contact-input-box">
            <input
              type="text"
              className="ug-contact-input-box-input"
              placeholder="enter email"
            />
            <input
              type="text"
              className="ug-contact-input-box-input"
              placeholder="enter password"
            />
            <textarea
              type="text"
              className="ug-contact-input-box-input_text"
              placeholder="enter text"
            />
            <div className="ug-contact-input-box-input_submit">
              <p>submit</p>
            </div>
          </div>
        </a.div>
      </div>
    </motion.div>
  );
}
