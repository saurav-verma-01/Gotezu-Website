import React from 'react'
import { PiCaretCircleDoubleRightLight } from "react-icons/pi";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";

const CtaBtn = ({title, className="", path=""}) => {
    return (
        <Link to={path} className={`cta-btn my-8 ${className}`}>

            <motion.div
                className="relative block overflow-hidden whitespace-nowrap"
                initial="initial"
                whileHover="hovered"
                style={{ display: "inline-block" }}
            >
                <motion.div
                    variants={{
                        initial: {y: 0},
                        hovered: {y: "-100%"},
                    }}
                    className="cta-btn-text"

                    transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                    {title}
                </motion.div>

                <motion.div
                    className="absolute inset-0 cta-btn-text"
                    variants={{
                        initial: { y: "100%" },
                        hovered: { y: 0 },
                    }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                    {title}
                </motion.div>

            </motion.div>
            <div className="bg-black/90 w-12 h-12 rounded-full flex items-center justify-center text-accent">
                <PiCaretCircleDoubleRightLight className="w-10 h-10" />
            </div>
        </Link>

    )
}
export default CtaBtn