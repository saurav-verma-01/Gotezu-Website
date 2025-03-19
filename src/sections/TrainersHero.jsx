import React from 'react'
import SearchBar from "../components/SearchBar.jsx";
import SocialIconBox from "../components/SocialIconBox.jsx";
import IconBox from "../components/IconBox.jsx";

const TrainersHero = () => {
    return (
        <section
            className="lg:px-12 lg:py-12">
            <div className="max-w-[1440px] mx-auto bg-gradient bg-cover bg-center text-honeysuckle-100 relative lg:rounded-lg min-h-screen">

            <div className="px-4 py-8 border-b-3 border-accent">
                <h1 className="primary-heading">FIND YOUR PERFECT TRAINER TODAY</h1>
            </div>
            <div className="px-4 flex flex-col items-center gap-8 py-10 pb-4 relative md:items-start ">
                <div className="p-5 bg-black/30 border-2 border-accent rounded-md max-w-sm">
                    <p className="header-text">The right trainer can transform skills, mindset, and performance.
                        Explore, connect, and bring real impact to your team today!</p>
                </div>
                <SearchBar className="my-0"/>
                <SocialIconBox className="lg:mt-30"/>
                <IconBox className="absolute right-4 bottom-4"/>
            </div>
            </div>
        </section>
    )
}
export default TrainersHero
