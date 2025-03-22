import React from 'react'
import AFeatures1 from '../assets/AboutFeatures1.png';
import AFeatures2 from '../assets/AboutFeature2.png';
import AFeatures3 from '../assets/AboutFeature3.png';
import CtaBtn from "../components/CtaBtn.jsx";

const AboutFeatures = () => {
    return (
        <section className="flex flex-col gap-5 md:gap-8 lg:gap-12  max-w-7xl mx-auto">
            <div className="flex justify-center">
                <h2 className="subheading">Where Expertise Meets Growth</h2>
            </div>
            <div className="px-4 grid grid-cols-1 gap-8 place-items-center lg:grid-cols-2">

                <div className="max-w-xl rounded-xl overflow-hidden w-full h-full">
                    <img src={AFeatures1} alt="About Features Image" className="object-cover h-full"/>
                </div>

                <div className=" tracking-tight max-w-xl flex flex-col gap-4 leading-[1.6] lg:justify-self-start">
                      <div className="py-4 px-5 bg-white rounded-xl shadow-xl flex flex-col gap-2">
                          <p>We believe training should be more than just a checkbox—it should spark real change. That’s why we created a platform where businesses find the right trainers effortlessly.</p>

                          <p>Whether upskilling teams, enhancing leadership, or mastering new technology, we connect you with experts who don’t just teach but transform.</p>
                      </div>

                      <div className="py-4 px-5 bg-white rounded-xl shadow-xl flex flex-col gap-2">
                          <p>With years of experience, thousands of successful training sessions, and partnerships with top organizations, we know what it takes to drive impact. You can explore trainers yourself or let our AI match you with the perfect fit—either way, you get learning that works.</p>

                          <p>Our approach is simple: practical, engaging, and results-driven training tailored to your industry. Because when employees grow, businesses thrive. We’re not just about training; we’re about creating a workforce that’s ready for tomorrow.</p>
                      </div>
                   </div>

            </div>

            <div className="px-4 grid grid-cols-1 gap-8 place-items-center lg:grid-cols-2">
                <div className="max-w-xl lg:justify-self-start w-full h-full">
                    <img src={AFeatures2} alt="About Features 2" className="w-full h-full"/>
                </div>
                <div className="flex flex-col gap-8  tracking-tight leading-[1.5] max-w-xl lg:row-span-2 lg:-order-1 bg-gradient h-full px-8 py-8 rounded-xl md:text-xl">
                    <div className="py-4 px-5 rounded-xl shadow-md bg-white border-purple-heart-900">
                        <p>At GoTezU, we don’t just talk about employee well-being—we live and breathe it. For over seven years, we’ve been on a mission to create workplaces where people feel valued, motivated, and genuinely connected. Because let’s face it—happy employees make thriving businesses.</p>
                    </div>
                    <div className="py-4 px-5 rounded-xl shadow-md bg-white border-purple-heart-900">
                    <p>Every workplace has its own rhythm, its own story. That’s why we don’t believe in one-size-fits-all solutions. We take the time to understand your team, your challenges, and what makes your organization tick. From boosting morale to fostering collaboration, our programs are built to spark real change—change that lasts.</p> </div>
                    <div className="py-4 px-5 rounded-xl shadow-md bg-white border-purple-heart-900">
                        <p>At the heart of it all, we’re not just trainers or consultants—we’re partners in your journey. We bring experience, energy, and a people-first approach to every session. Your employees won’t just sit through another training—they’ll engage, grow, and most importantly, enjoy the process. Because when people love what they do, success follows naturally.</p> </div>
                </div>
                <div className="max-w-xl lg:justify-self-start w-full h-full">
                    <img src={AFeatures3} alt="About Features 3" className="w-full h-full"/>
                </div>
            </div>
            <div className="flex justify-center">
                <CtaBtn title="Learn More" />
            </div>
        </section>
    )
}
export default AboutFeatures
