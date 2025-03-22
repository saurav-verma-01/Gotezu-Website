import React from 'react'
import ContactUsRobofrom from '../assets/ContactUsRobo.png';
import SocialIconBox from "../components/SocialIconBox.jsx";
import IconBox from "../components/IconBox.jsx";

const ContactUsHero = () => {
    return (
        <section
            className="lg:px-12 lg:py-12">
            <div className="max-w-[1440px] mx-auto bg-gradient bg-cover bg-center text-honeysuckle-100 relative lg:rounded-lg">

                <div className="px-4 py-8 border-b-3 border-accent">
                    <h1 className="primary-heading md:text-6xl">Get in Touch with Us</h1>
                </div>
                <div className="px-4 flex flex-col items-center gap-4 py-10 pb-4 relative md:items-start relative">
                    <div className="p-5 bg-black/30 border-2 border-accent rounded-md max-w-sm">
                        <p className="header-text">We're Here to Answer Your Questions and Support Your Training Journey.</p>
                    </div>
                    <div className="md:self-center md:max-h-[200px]">
                        <img src={ContactUsRobofrom} alt="Contact Us Robo" className="max-w-sm w-full"/>
                    </div>
                    <SocialIconBox className="lg:mt-30"/>
                    <IconBox className="absolute right-4 bottom-4"/>
                </div>
            </div>
        </section>
    )
}
export default ContactUsHero
