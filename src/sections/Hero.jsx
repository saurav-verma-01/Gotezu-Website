import React from 'react'
import SearchBar from "../components/SearchBar.jsx";
import CtaBtn from "../components/CtaBtn.jsx";
import NumBox from "../components/NumBox.jsx";
import IconBox from "../components/IconBox.jsx";
import SocialIconBox from "../components/SocialIconBox.jsx";
import Shots from '../assets/shots.svg';

const Hero = () => {
    return (
        <section className="bg-gradient min-h-screen pb-16">
            <h1 className="primary-heading bg-black/40 py-8 border-b-2 border-b-accent">AI Finds Your Ideal Trainer Match</h1>
            <div className="px-8 grid grid-cols-1 place-items-center gap-4 py-4 md:gap-6 lg:grid-cols-2 max-w-7xl mx-auto lg:gap-x-8 lg:gap-y-8">
                <SearchBar />
                <div className="scale-120 md:row-span-2 lg:place-self-end">
                    <img src={Shots} alt="Mockup Shot"  className="lg:translate-x-5 lg:scale-115"  />
                </div>

                <div className="flex flex-col gap-4 md:flex-row items-center lg:row-span-2 lg:flex-col lg:justify-self-start">
                    <div className="flex flex-col gap-6 py-6">
                        <p className="header-text max-w-sm text-center md:text-left">Every session is a journey, every trainer a guide, and every client a partner. It’s about real learning and lasting impact.</p>
                        <p className="header-text max-w-sm text-center md:text-left">The right trainer doesn’t just teach—they transform. Handpick yours or let our AI find the perfect match. No guesswork, no compromises—just real expertise, real impact. Because the right guidance creates unstoppable teams.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="tag mt-4">Ready to meet yours?</p>
                        <CtaBtn />
                    </div>
                </div>

              <div className="grid grid-cols-1 place-items-center gap-4 w-full  md:flex md:items-end justify-center lg:gap-12 lg:col-span-2 lg:my-8">
                  <NumBox />
                  <IconBox />
                  <SocialIconBox />
              </div>
            </div>
        </section>
    )
}
export default Hero
