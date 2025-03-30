import React from 'react'
import { motion } from 'framer-motion';

const FeaturesCard = ({title, desc}) => {
    return (
        <motion.div className="features-card md:-order-2 lg:col-span-1 relative"
                    whileHover="hover"
                    initital="initial"
        >
            <motion.div
                className="absolute -inset-2 rounded-lg bg-gradient-to-tr from-slate-600 via-yellow-600 to-green-600 opacity-40 blur-2xl w-full h-full"
                variants={{
                    initial: { opacity: 0.4},
                    hover : { opacity: 0.8},
                }}
            ></motion.div>
            <motion.div className="relative w-full h-auto border-2 border-transparent rounded-lg bg-white text-purple-heart-950 py-8 px-5 flex flex-col gap-4 "
                        variants={{
                            initial: { borderColor: "transparent" },
                            hover: { borderColor: "#d946ef" } // accent color
                        }}
                        transition={{ duration: 0.3 }}
            >
                {/* Title with alignment animation */}

                    <h3 className="feature-card-title">{title}</h3>


                {/* Description with alignment animation */}

                    <p className="card-text text-left">{desc}</p>



            </motion.div>
        </motion.div>
    )
}
export default FeaturesCard
