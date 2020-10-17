import React from "react";
import "./foyer.scss";
import { AnimatePresence, motion } from "framer-motion";
import UgBtn1 from './../../shared/btn1/btn1.jsx';

export default function Foyer() {
  return (
    <motion.div
      className="ug-foyer"
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}>
      <UgBtn1 name1="login" name2="register"/>
      <div id="ug-foyer-box">
        <div className="ug-foyer-name">Ungar</div>
        <div className="ug-foyer-text">Motivation, Passion and Experience</div>
      </div>
    </motion.div>
  );
}
