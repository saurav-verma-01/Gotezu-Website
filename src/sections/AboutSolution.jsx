import React from 'react';
import Sol1 from '../assets/Sol1.png';
import Sol2 from '../assets/Sol2.png';

const AboutSolution = () => {
    return (
        <section className="flex flex-col gap-8 items-center my-8">
            <h2 className="subheading">Why choose us for your corporate training solutions</h2>

            <div className="px-4 grid grid-cols-1 gap-8 place-items-center w-full lg:place-content-start lg:grid-cols-12 lg:grid-rows-[188px_210px_160px] max-h-max max-w-6xl lg:gap-y-5">
                <div className="rounded-2xl overflow-hidden lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:row-span-3 max-w-sm lg:max-w-full lg:h-full">
                    <img src={Sol1} alt="Why Gotezu" className="w-full h-full object-cover" />
                </div>

                {/* Center Content (Text Cards) */}


                    <div className="bg-white py-8 px-4 tracking-tight flex flex-col gap-3 rounded-xl max-w-md border-1 border-purple-heart-950 lg:col-span-5 lg:row-start-1 lg:max-w-full lg:justify-center lg:py-6">
                        <h3 className="text-xl font-semibold leading-[1.4]">We Don’t Do One-Size-Fits-All</h3>
                        <p className="leading-[1.5] font-light">Your team is unique, and so is our approach. We take the time to understand your culture, challenges, and goals, crafting training that actually clicks with your people. No generic slides, just real impact.</p>
                    </div>
                    <div className="bg-white py-8 px-4 tracking-tight flex flex-col gap-3 rounded-xl max-w-md border-1 border-purple-heart-950 lg:col-span-5 lg:row-start-2 lg:col-start-5 lg:py-6">
                        <h3 className="text-xl font-semibold">Trainers Who’ve Been in Your Shoes</h3>
                        <p className="leading-[1.5] font-light">Our experts aren’t just trainers—they’re industry pros who’ve faced the same challenges your team does. They bring real-world experience, practical insights, and energy that keeps learning engaging and actionable.</p>
                    </div>
                    <div className="bg-white py-8 px-4 tracking-tight flex flex-col gap-3 rounded-xl max-w-md border-1 border-purple-heart-950 lg:col-start-5 lg:row-start-3 lg:col-span-8 lg:max-w-full lg:w-full lg:py-6">
                        <h3 className="text-xl font-semibold leading-[1.4]">Results That Show Up</h3>
                        <p className="leading-[1.5] font-light">Training shouldn’t just feel good in the moment—it should change the way people work. We focus on real-world application, ensuring that every session leads to lasting improvement, stronger teams, and measurable success.</p>
                   </div>


                {/* Right Image */}

                <div className="rounded-2xl overflow-hidden lg:col-start-10 lg:row-stat-1 lg:-order-1 lg:col-span-3 lg:row-span-2 h-full">
                    <img src={Sol2} alt="Why Gotezu"  className="w-full h-full object-cover"/>
                </div>
            </div>
        </section>
    )
}
export default AboutSolution
