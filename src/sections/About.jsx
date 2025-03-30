import React from 'react'
import About1 from '../assets/About1.png';
import About2 from '../assets/About2.png';
import { FaRobot, FaSearch, FaUsers, FaChartLine } from "react-icons/fa";
import CtaBtn from "../components/CtaBtn.jsx";
import AboutCard from "./AboutCard.jsx";

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
                        <AboutCard title="Ask AI or Explore Yourself" desc="Not sure where to start? Tell our AI what you need, and it will match you with the best trainers. Want full control? Browse, compare, and choose for yourself." icon={FaRobot} />

                        <AboutCard title="Get the Best Matches Instantly" desc="Our AI understands your requirements and picks the most suitable trainers for you. No scrolling through endless options—just the right experts, ready to train your team." icon={FaSearch} />

                        <AboutCard title="Connect & Customize" desc="Once you find the right trainer, discuss your goals, customize the approach, and fine-tune the training to fit your team’s needs." icon={FaUsers} />

                        <AboutCard title="Train, Grow & Succeed" desc="Now comes the real change. Whether it’s sharpening skills, improving efficiency, or building stronger leaders, the right trainer will help you make all the difference in your organization." icon={FaChartLine} />

                    </div>

                    <CtaBtn title="Learn More" path='/about' />

                </div>
            </div>
        </section>
    )
}
export default About
