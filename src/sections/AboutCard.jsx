import React from 'react'
import { motion } from 'framer-motion';


const AboutCard = ({title, desc, icon: Icon}) => {
    return (
        <motion.div className="about-card w-full h-full md:place-self-end relative"
            whileHover="hover"
            initital="initial"
        >
            <motion.div
                className="absolute -inset-2 rounded-lg bg-gradient-to-r from-blue-600 via-violet-600 opacity-30 to-teal-600  blur-2xl"
                variants={{
                    initial: { opacity: 0.3},
                    hover : { opacity: 0.8},
                }}
            ></motion.div>
            <motion.div className="relative flex flex-col w-full h-64 items-start border-2 border-transparent justify-start  rounded-lg p-4 bg-white gap-4 h-full"
                variants={{
                    initial: { borderWidth: 0},
                    hover: { borderWidth: 2, borderColor: '#d946ef' },
                }}
                transition={{ duration: 0.3 }}
            >
                {Icon && <Icon className="w-10 h-10" />}
                <h3 className="card-title">{title}</h3>
                <p className="card-text text-left">{desc}</p>
            </motion.div>
        </motion.div>
    )
}
export default AboutCard
