import React from 'react'

import FeatureCard1 from '../assets/AboutFeatureCardImage1.png';
import FeatureCard2 from '../assets/AboutFeatureCardImage2.png';
import FeatureCard3 from '../assets/AboutFeatureCardImage3.png';
import FeatureCard4 from '../assets/AboutFeatureCardImage4.png';
import FeatureCard5 from '../assets/AboutFeatureCardImage5.png';
import FeatureCard6 from '../assets/AboutFeatureCardImage6.png';


const featureCards = [
    {
        id: 1,
        title: "Team Building",
        text: "A strong team isn’t just about working together—it’s about growing together. Our team-building sessions go beyond the usual icebreakers. We create experiences that foster trust, spark creativity, and bring out the best in every individual. Because when teams truly connect, they don’t just meet goals—they exceed them.",
        image: FeatureCard1,
    },
    {
        id: 2,
        title: "Corporate Events",
        text: "Forget dull corporate training sessions. We design engaging, impactful events that focus on real-world skills—whether it’s leadership, communication, or organizational development. Every event is tailored to your team’s needs, ensuring lasting takeaways that transform how they work, lead, and grow.",
        image: FeatureCard2,
    },
    {
        id: 3,
        title: "Functional Training",
        text: "Life doesn’t happen in straight lines, and neither should training. Our functional training programs are designed to strengthen real-life movements, making everyday tasks easier and improving agility, endurance, and resilience. Whether it’s for workplace productivity or personal fitness, we help you move smarter, not harder.",
        image: FeatureCard3,
    },
    {
        id: 4,
        title: "Sales Training",
        text: "Sales isn’t just about pitching—it’s about understanding people. Our training helps your team master the art of persuasion, build trust with clients, and close deals with confidence. We focus on practical, high-impact techniques that turn sales professionals into relationship builders and revenue drivers.",
        image: FeatureCard4,
    },
    {
        id: 5,
        title: "Motivational Speaking",
        text: "Sometimes, all it takes is the right words at the right time to change everything. Our motivational speakers don’t just inspire—they ignite action. With powerful storytelling and real-world insights, we help individuals and teams break through barriers, embrace challenges, and chase success with unstoppable energy.",
        image: FeatureCard5,
    },
    {
        id: 6,
        title: "Leadership Development",
        text: "Great leaders aren’t born; they’re built. Our leadership programs are designed to equip professionals with the mindset, skills, and confidence to lead with impact. From decision-making to emotional intelligence, we help emerging and seasoned leaders navigate challenges and inspire those around them.",
        image: FeatureCard6,
    },
];

const AboutFeatureCard = ({title, text, image}) => {
    return (
        <div className="flex flex-col gap-5 items-center text-center border-2 border-b-purple-heart-700 rounded-xl pb-4 max-w-xs overflow-hidden bg-white h-full">
            <div className="max-w-xs max-h-[242px]">
                <img src={image} alt="Feature Cards Image" className="w-full"/>
            </div>
            <div className="px-4">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-sm leading-[1.6]">{text}</p>
            </div>
        </div>
    )
}

const AboutEasiest = () => {
    return (
        <section>
            <div className="px-5 flex flex-col items-center">
                <h2 className="subheading">More Than Learning It’s a Mindset Shift</h2>
                <p className="section-text">Every great journey starts with a single step, and we’re here to walk it with you. We don’t just offer services—we create experiences that leave lasting impressions, spark change, and build connections.</p>
            </div>

            <div className="px-5 grid grid-cols-1 place-items-center gap-8 md:grid-cols-2 md:max-w-2xl mx-auto lg:max-w-5xl lg:grid-cols-3 my-8">
                {featureCards.map(feature => <AboutFeatureCard key={feature.id} {...feature} />)}
            </div>
        </section>
    )
}
export default AboutEasiest
