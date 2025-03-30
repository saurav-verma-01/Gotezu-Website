import React from 'react'
import Features1 from '../assets/Features1.png';
import Features2 from '../assets/Features2.png';
import CtaBtn from "../components/CtaBtn.jsx";
import FeaturesCard from "./FeaturesCard.jsx";

const Features = () => {
    return (
        <section className="my-8 lg:my-10 flex flex-col gap-8 items-center">
            <div className="flex flex-col items-center justify-center w-full ">
                <h2 className="subheading">We Don’t Just Connect You to Trainers—We Ensure You Find the Best</h2>
                <div className="px-4">
                    <p className="section-text">Great training isn’t just about knowledge—it’s about the right mentor, the right approach, and real impact. We don’t just help you find trainers; we make sure they fit your goals like a missing puzzle piece.</p>
                </div>
            </div>

            <div className="px-4 grid grid-cols-1 gap-12 place-items-center md:w-full md:grid-cols-2 md:max-w-4xl lg:max-w-6xl lg:grid-cols-3 lg:gap-6 lg:gap-x-6 lg:gap-y-8">
                <div className="relative md:-order-3 md:row-span-2 lg:col-span-1 lg:row-span-2 lg:h-full ">
                    <div
                        className="absolute -inset-2 rounded-lg bg-gradient-to-tr from-fuchsia-600 via-yellow-600 to-red-600 opacity-40 blur-2xl"
                    ></div>
                    <div className="relative flex w-full h-auto lg:h-full items-center justify-center rounded-2xl text-slate-300">
                        <img src={Features1} alt="Features1" className="lg:h-full"/>
                    </div>
                </div>

                <FeaturesCard title="AI Has Your Back" desc="Finding the right trainer shouldn’t feel like a shot in the dark. Whether you trust AI to match you or prefer to explore on your own, we make the process effortless. No endless scrolling, no wasted time—just the right fit, right away." />

                <FeaturesCard title="Trainers Who Walk the Talk" desc="We don’t do random profiles or flashy bios. Every trainer here is handpicked, verified, and backed by real results. They don’t just teach; they transform the way your team works, thinks, and grows." />



                <div className="relative md:-order-1 lg:order-4 lg:col-span-1 lg:h-full">
                    <div
                        className="absolute -inset-2 rounded-lg bg-gradient-to-tr from-fuchsia-600 via-yellow-600 to-red-600 opacity-50 blur-2xl"
                    ></div>
                    <div className="relative flex w-full h-auto lg:h-full items-center justify-center  rounded-xl overflow-hidden text-slate-300">
                        <img src={Features2} alt="Features1" className="lg:h-full object-cover"/>
                    </div>
                </div>

                <FeaturesCard title="Achieve Lasting Results with Proven Strategies" desc="9000+ sessions. 150+ companies transformed. 2500+ experts making a difference. We’re not in this to tick boxes—we’re here to create real change. If you want training that actually sticks, you’re in the right place." />

            </div>

            <CtaBtn title="Learn More" path="/about" />
        </section>
    )
}
export default Features
