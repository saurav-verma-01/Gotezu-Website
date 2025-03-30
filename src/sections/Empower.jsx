import React from 'react'
import Empower1 from '../assets/Empower1.png';

import { motion } from 'framer-motion';

const Empower = () => {
    return (
        <section className="my-8" whileHover="hover" initial="initial">
            <div className=" px-4 md:px-2 flex flex-col gap-8 items-center justify-center lg:flex-row lg:justify-center lg:items-center relative max-w-7xl mx-auto">
                <motion.div className="w-full h-full lg:p-8  max-w-2xl rounded-md flex items-center justify-center"
                            whileHover={{
                                rotate: 2,
                                transition: { duration: 0.3, ease: "easeOut" }
                            }}>
                    <motion.img src={Empower1} alt="Empower Picture" className="max-h-140 lg:max-h-full" whileHover={{
                        boxShadow: "0 10px 25px -5px #E9FF7A",
                        transition: { duration: 0.3 }
                    }} />
                </motion.div>

                <div className="flex flex-col gap-8 items-center justify-center md:flex-row md:flex-wrap lg:justify-start py-4">
                    {[
                        { title: "We Solve, Not Just Train", text: "Your company faces real challenges—productivity gaps, leadership struggles, industry shifts. Our trainers don’t just conduct sessions; they design solutions that tackle these issues head-on, ensuring your team learns, applies, and grows with every training." },
                        { title: "Only the Best, Guaranteed", text: "Finding the right trainer shouldn’t feel like a gamble. That’s why we only bring you industry experts with proven track records. Every trainer is pre-vetted, results-driven, and committed to delivering real impact—so you invest in training that works." },
                        { title: "Training That Fits You", text: "No rigid formats, no one-size-fits-all. Whether it’s on-site, virtual, or hybrid, our training adapts to your team’s schedule and workflow. Learning should enhance productivity, not disrupt it—so we make sure your employees can apply new skills from day one." }
                    ].map(({ title, text }, index) => (
                        <div className="features-card" key={index}>
                            <div
                                className="absolute -inset-2 rounded-lg bg-gradient-to-tr from-slate-600 via-yellow-600 to-green-600 opacity-50 blur-2xl w-full h-full hover:opacity-80"
                            ></div>
                            <div className="relative w-full h-auto border-3 border-transparent hover:border-accent rounded-lg bg-white text-purple-heart-950 py-8 px-5 flex flex-col gap-4">
                                <h3 className="feature-card-title">{title}</h3>
                                <p className="card-text text-left md:text-base flex-grow">{text}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}
export default Empower
