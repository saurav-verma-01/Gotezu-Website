import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const FlipLink = ({ path, title }) => {
    return (
        <motion.div
            className="relative block overflow-hidden whitespace-nowrap uppercase font-semibold lg:text-xl xl:text-2xl"
            initial="initial"
            whileHover="hovered"
            style={{ display: "inline-block" }} // Ensures correct animation behavior
        >
            <Link to={path} className="relative block">
                <motion.div
                    variants={{
                        initial: {y: 0},
                        hovered: {y: "-100%"},
                    }}

                    transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                    {title}
                </motion.div>
                <motion.div
                    className="absolute inset-0 text-black/800"
                    variants={{
                        initial: { y: "100%" },
                        hovered: { y: 0 },
                    }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                    {title}
                </motion.div>
            </Link>
        </motion.div>
    );
};

export default FlipLink;
