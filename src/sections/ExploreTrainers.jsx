import React from 'react'
import ExpertTrainer1 from '../assets/ExpertTrainer.png';
import CtaBtn from "../components/CtaBtn.jsx";

const ExploreTrainers = () => {
    return (
        <section className="my-4 md:min-h-auto md:px-8 max-w-7xl mx-auto">
           <div className="relative md:rounded-xl overflow-hidden flex flex-col items-center bg-gradient px-2 py-4 lg:px-0 lg:pt-0">
               <div className="bg-black/50 py-6 rounded-lg px-4 sm:px-8 lg:bg-white/30 lg:w-full lg:py-10">
                   <h2 className="text-honeysuckle-50 font-semibold uppercase text-3xl sm:text-4xl text-center tracking-tight leading-[1.2] md:text-5xl lg:text-7xl">Meet Our Expert Trainers</h2>
               </div>
               <img src={ExpertTrainer1} alt="Expert Trainer"/>
               <div className="bg-black/30 py-4 rounded-lg px-2 max-w-sm  sm:max-w-lg sm:px-4 lg:max-w-2xl lg:py-6 lg:px-12 lg:bg-white/30">
                   <p className="text-honeysuckle-50 text-lg sm:text-xl text-center lg:text-2xl">The Right Trainer Transforms Teams – Find the Perfect Fit to Boost Skills & Growth!</p>
               </div>
               <CtaBtn path="/trainers" title="Explore" className="lg:absolute lg:bottom-22 lg:scale-125" />
           </div>
        </section>
    )
}
export default ExploreTrainers
