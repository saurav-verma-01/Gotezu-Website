import React from 'react'
import Hero2 from '../assets/shots.svg'
import CtaBtn from "../components/CtaBtn.jsx";
import NumBox from "../components/NumBox.jsx";
import SocialIconBox from "../components/SocialIconBox.jsx";
import SearchBar from "../components/SearchBar.jsx";
import IconBox from "../components/IconBox.jsx";
const NewHero = () => {
    return (
        <section className="min-h-screen lg:px-8 lg:py-16 max-w-[1440px] mx-auto ">
            <div className=" min-h-screen lg:rounded-2xl bg-gradient">
               <div className="py-8 bg-white/15 border-b-4 border-accent">
                   <h1 className="primary-heading">Find Your Perfect Trainer with AI</h1>
               </div>
                <div className="grid lg:grid-cols-3 min-h-screen md:grid-cols-2 grid-cols-1">

                    {/* Image */}
                    <div className="my-4 md:col-span-2 lg:col-span-1 flex items-center justify-center ">
                        <img src={Hero2} alt="Hero Image" className="object-cover h-full max-h-[500px]"/>
                        {/*<CtaBtn title="Book Now" />*/}
                    </div>

                    <div className="px-4 py-8 grow flex flex-col lg:items-start lg:-order-1 items-center md:items-start">
                        <NumBox />
                        <div className="bg-white/10 p-4 rounded-md my-8 max-w-sm md:max-w-full">
                            <p className="header-text">Every session is a journey, every trainer a guide, and every client a partner. It’s about real learning and lasting impact.</p>
                        </div>
                        <SocialIconBox />
                    </div>

                    <div className="grow p-4 flex flex-col lg:items-end -order-2 items-center md:-order-0 md:items-end py-8">
                        <div className="bg-white/10 p-4 rounded-md max-w-sm md:max-w-full ">
                            <p className="header-text">The right trainer doesn’t just teach—they transform. Handpick yours or let our AI find the perfect match. No guesswork, no compromises—just real expertise, real impact. Because the right guidance creates unstoppable teams.</p>
                        </div>
                        <SearchBar />
                        <IconBox />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default NewHero
