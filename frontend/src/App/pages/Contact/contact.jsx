import React from "react";
import "./contact.scss";
import { AnimatePresence, motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.div
      className="ug-contact"
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="ug-contact-container">
        <p className="ug-contact-container-line">Instagram</p>
        <p className="ug-contact-container-line">Facebook</p>
        <p className="ug-contact-container-line">Twitter</p>
        <p className="ug-contact-container-line">Github</p>
        <p className="ug-contact-container-line">Fiverr</p>
      </div>
    </motion.div>
  );
}
