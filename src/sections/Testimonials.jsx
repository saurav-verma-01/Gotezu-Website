import React from 'react'
import TestimonialCard from "../components/TestimonialCard.jsx";
import Avatart1 from '../assets/avatars/avatar-1.png';
import Avatart2 from '../assets/avatars/avatar-2.png';
import Avatart3 from '../assets/avatars/avatar-3.png';
import Avatart4 from '../assets/avatars/avatar-4.png';
import Avatart5 from '../assets/avatars/avatar-5.png';
import Avatart6 from '../assets/avatars/avatar-6.png';
import Avatart7 from '../assets/avatars/avatar-7.png';
import Avatart8 from '../assets/avatars/avatar-8.png';
import Avatart9 from '../assets/avatars/avatar-9.png';

const testimonials = [
    {
        text: "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
        imageSrc: Avatart1,
        name: "Jamie Rivera",
        company: "Framer",
    },
    {
        text: "Our team's productivity has skyrocketed since we started using this tool.",
        imageSrc: Avatart2,
        name: "Josh Smith",
        company: "TechBoost",
    },
    {
        text: "This app has completely transformed how I manage my projects and deadlines.",
        imageSrc: Avatart3,
        name: "Morgan Lee",
        company: "ProjectFlow",
    },
    {
        text: "I was amazed at how quickly we were able to integrate this app into our workflow.",
        imageSrc: Avatart4,
        name: "Casey Jordan",
        company: "Agile Solutions",
    },
    {
        text: "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.",
        imageSrc: Avatart5,
        name: "Taylor Kim",
        company: "EventSync",
    },
    {
        text: "The customizability and integration capabilities of this app are top-notch.",
        imageSrc: Avatart6,
        name: "Riley Smith",
        company: "Innovatech",
    },
    {
        text: "Adopting this app for our team has streamlined our project management and improved communication across the board.",
        imageSrc: Avatart7,
        name: "Jordan Patels",
        company: "CollabPro",
    },
    {
        text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
        imageSrc: Avatart8,
        name: "Sam Dawson",
        company: "TaskManager Inc.",
    },
    {
        text: "Its user-friendly interface and robust features support our diverse needs.",
        imageSrc: Avatart9,
        name: "Casey Harper",
        company: "WorkflowX",
    },
];

import {motion } from 'framer-motion'

const column1 = testimonials.slice(0,3);
const column2 = testimonials.slice(3,6);
const column3 = testimonials.slice(6,9);

const Testimonials = () => {

    // Duplicate testimonials for seamless looping
    const duplicatedColumn1 = [...column1, ...column1];
    const duplicatedColumn2 = [...column2, ...column2];
    const duplicatedColumn3 = [...column3, ...column3];

    const colHeight = column2.length * 260;


    return (
        <section className="my-8 ">
            <div className="flex flex-col items-center max-w-8xl mx-auto">

                <div className="px-4 flex flex-col items-center" >
                    <h2 className="subheading">What Our Clients Really Think</h2>
                    <p className="section-text">Hear it from those who’ve seen the change firsthand!</p>
                </div>

                <div className="flex w-full relative h-[800px] overflow-hidden justify-center">
                    {/* First Column - Visible on all screens */}

                    <motion.div
                        className="py-8 px-4 flex flex-col gap-8"
                        animate={{
                            y:  ["0%", "-50%"],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear",
                            repeatType: "loop"
                        }}
                    >
                        { duplicatedColumn1.map((item, index) => (
                            <TestimonialCard key={index} {...item} />
                        ))}
                    </motion.div>

                    {/*Second Column Visibile in Tablet screens*/}

                    <motion.div className="py-8 px-4 hidden md:flex flex-col gap-8"
                        animate={{
                            y: ["0%", "-50%"],

                        }}
                         transition={{
                             duration: 15,
                             repeat: Infinity,
                             ease: "linear",
                             repeatType: "loop"
                         }}
                    >
                        { duplicatedColumn2.map((item, index) => (
                            <TestimonialCard key={index} {...item} />
                        ))}
                    </motion.div>

                    {/*Third Column Visibile in Tablet screens*/}
                    <motion.div className="py-8 px-4 hidden lg:flex flex-col gap-8"
                         animate={{
                             y: ["0%", "-50%"],
                         }}
                         transition={{
                             duration: 25,
                             repeat: Infinity,
                             ease: "linear",
                             repeatType: "loop"
                         }}
                    >
                        { duplicatedColumn3.map((item, index) => (
                            <TestimonialCard key={index} {...item} />
                        ))}
                    </motion.div>
                </div>

            </div>
        </section>
    )
}
export default Testimonials