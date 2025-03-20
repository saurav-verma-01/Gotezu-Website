import React from 'react'
import Empower1 from '../assets/Empower1.png';

const Empower = () => {
    return (
        <section className="my-8">
            <div className=" px-4 md:px-2 flex flex-col gap-8 items-center justify-center lg:flex-row lg:justify-center lg:items-center relative max-w-7xl mx-auto">
                <div className="w-full h-full lg:p-8  max-w-2xl rounded-md flex items-center justify-center">
                    <img src={Empower1} alt="Empower Picture" className="max-h-140 lg:max-h-full" />
                </div>

                <div className="flex flex-col gap-8 items-center justify-center md:flex-row md:flex-wrap lg:justify-start py-4">
                    {[
                        { title: "We Solve, Not Just Train", text: "Your company faces real challenges—productivity gaps, leadership struggles, industry shifts. Our trainers don’t just conduct sessions; they design solutions that tackle these issues head-on, ensuring your team learns, applies, and grows with every training." },
                        { title: "Only the Best, Guaranteed", text: "Finding the right trainer shouldn’t feel like a gamble. That’s why we only bring you industry experts with proven track records. Every trainer is pre-vetted, results-driven, and committed to delivering real impact—so you invest in training that works." },
                        { title: "Training That Fits You", text: "No rigid formats, no one-size-fits-all. Whether it’s on-site, virtual, or hybrid, our training adapts to your team’s schedule and workflow. Learning should enhance productivity, not disrupt it—so we make sure your employees can apply new skills from day one." }
                    ].map(({ title, text }, index) => (
                        <div className="features-card">
                            <div
                                className="absolute -inset-2 rounded-lg bg-gradient-to-tr from-slate-600 via-yellow-600 to-green-600 opacity-50 blur-2xl w-full h-full"
                            ></div>
                            <div className="relative w-full h-auto border-2 border-accent rounded-lg bg-white text-purple-heart-950 py-8 px-5 flex flex-col gap-4">
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
