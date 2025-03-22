import React from 'react'
import SearchBar from "../components/SearchBar.jsx";
import SocialIconBox from "../components/SocialIconBox.jsx";
import IconBox from "../components/IconBox.jsx";
import CtaBtn from "../components/CtaBtn.jsx";

const AboutUsHero = () => {
    return (
        <section
            className="lg:px-12 lg:py-12">
            <div className="max-w-[1440px] mx-auto bg-gradient bg-cover bg-center text-honeysuckle-100 relative lg:rounded-lg">

                <div className="px-4 py-8 border-b-3 border-accent">
                    <h1 className="primary-heading md:text-6xl">Transforming Workspaces, Inspiring Growth</h1>
                </div>
                <div className="px-4 flex flex-col items-center gap-4 py-10 pb-4 relative md:items-start ">
                    <div className="p-5 bg-black/30 border-2 border-accent rounded-md max-w-sm">
                        <p className="header-text">Expert-led training that transforms teams, enhances skills, & accelerates business growth.</p>
                    </div>
                    <CtaBtn title="Contact" className="my-0" />
                    <SocialIconBox className="lg:mt-30"/>
                    <IconBox className="absolute right-4 bottom-4"/>
                </div>
            </div>
        </section>
    )
}
export default AboutUsHero
