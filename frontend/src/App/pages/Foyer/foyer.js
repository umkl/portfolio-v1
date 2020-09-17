import React from 'react'
import "./foyer.scss"
import { AnimatePresence, motion } from "framer-motion";

export default function Foyer() {
    return (
        <motion.div className="ug-foyer" exit={{ opacity: 0}} initial={{ opacity: 0}} animate={{opacity: 1}}>
            <span className="ug-foyer-name">Ungar</span>
            <span className="ug-foyer-text">blogs coming soon ...</span>
        </motion.div>
    )
}
