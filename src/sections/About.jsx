import React from 'react'
import About1 from '../assets/About1.png';
import About2 from '../assets/About2.png';
import { FaRobot, FaSearch, FaUsers, FaChartLine } from "react-icons/fa";
import CtaBtn from "../components/CtaBtn.jsx";

const About = () => {
    return (
        <section className="my-8 max-w-7xl mx-auto lg:my-16">
            <div className="flex items-center justify-center flex-col px-4">
                <h2 className="subheading">Your Guide to Finding the Right Trainer</h2>
                <p className="section-text">Finding the right trainer shouldn’t be complicated. Tell us your needs, choose your expert (or let AI do it), and start learning. No hassle —just the right training, done right.</p>
            </div>
            <div className="lg:flex lg:items-start">
                <div className="px-4 py-8 flex flex-col items-center justify-center gap-8">
                    <img src={About1} alt="About Image" className="w-full max-w-sm object-cover" />
                    <div className="bg-gradient text-honeysuckle-100 px-4 py-4 rounded-md max-w-md">
                        <p className="card-text">At Gotezu, we connect companies with expert trainers—AI-powered or handpicked—for real learning that drives growth.</p>
                    </div>
                    <img src={About2} alt="About Image" className="w-full max-w-md object-cover"/>
                </div>
                <div className="px-4 flex flex-col items-center justify-center gap-4">
                    <div className="flex flex-col gap-8 items-center my-8 md:grid md:grid-cols-2 place-items-center">
                            <div className="about-card w-full h-full md:place-self-end">
                                <div
                                    className="absolute -inset-2 rounded-lg bg-gradient-to-r from-blue-600 via-violet-600 to-teal-600 opacity-50 blur-2xl"
                                ></div>
                                <div className="relative flex flex-col w-full h-64 items-start justify-start border-2 border-fuchsia-600 rounded-lg p-4 bg-white gap-4 h-full">
                                    <FaRobot className="w-10 h-10" />
                                    <h3 className="card-title">Ask AI or Explore Yourself</h3>
                                    <p className="card-text text-left">Not sure where to start? Tell our AI what you need, and it will match you with the best trainers. Want full control? Browse, compare, and choose for yourself.</p>
                                </div>
                            </div>

                        <div className="about-card w-full h-full md:place-self-start">
                            <div
                                className="absolute -inset-2 rounded-lg bg-gradient-to-r from-blue-600 via-violet-600 to-teal-600 opacity-40 blur-xl"
                            ></div>
                            <div className="relative flex flex-col w-full h-64 items-start justify-start border-2 border-fuchsia-600 rounded-lg p-4 bg-white gap-4 h-full">
                                <FaSearch className="w-10 h-10" />
                                <h3 className="card-title">Get the Best Matches Instantly</h3>
                                <p className="card-text text-left">Our AI understands your requirements and picks the most suitable trainers for you. No scrolling through endless options—just the right experts, ready to train your team.</p>
                            </div>
                        </div>

                        <div className="about-card w-full h-full md:place-self-end">
                            <div
                                className="absolute -inset-2 rounded-lg bg-gradient-to-r from-blue-600 via-violet-600 to-teal-600 opacity-40 blur-xl"
                            ></div>
                            <div className="relative flex flex-col w-full h-64 items-start justify-start border-2 border-fuchsia-600 rounded-lg p-4 bg-white gap-4 h-full">
                                <FaUsers className="w-10 h-10" />
                                <h3 className="card-title">Connect & Customize</h3>
                                <p className="card-text text-left">Once you find the right trainer, discuss your goals, customize the approach, and fine-tune the training to fit your team’s needs.</p>
                            </div>
                        </div>

                        <div className="about-card w-full h-full md:place-self-start">
                            <div
                                className="absolute -inset-2 rounded-lg bg-gradient-to-r from-blue-600 via-violet-600 to-teal-600 opacity-40 blur-xl"
                            ></div>
                            <div className="relative flex flex-col w-full h-64 items-start justify-start border-2 border-fuchsia-600 rounded-lg p-4 bg-white gap-4 h-full">
                                <FaChartLine className="w-10 h-10" />
                                <h3 className="card-title">Train, Grow & Succeed</h3>
                                <p className="card-text text-left">Now comes the real change. Whether it’s sharpening skills, improving efficiency, or building stronger leaders, the right trainer will help you make all the difference in your organization.</p>
                            </div>
                        </div>
                    </div>

                    <CtaBtn title="Learn More" />

                </div>
            </div>
        </section>
    )
}
export default About
