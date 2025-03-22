import React from 'react'
import Logo from '../assets/Logo.png';
import SocialIconBox from "../components/SocialIconBox.jsx";
import { SiListmonk } from "react-icons/si";
import { GrLocation } from "react-icons/gr";
import { LuPhoneCall } from "react-icons/lu";
import { GoMail } from "react-icons/go";


const Footer = () => {
    return (
        <footer className="bg-gradient pt-8">
            <div className="max-w-6xl mx-auto">
                <div className="lg:flex">
                    <div className="p-4 flex flex-col gap-8 items-center lg:items-start">
                        <div className="max-w-sm h-auto border-2 border-accent rounded-xl py-6 px-4 bg-purple-heart-50">
                            <img src={Logo} alt="Gotezu Logo" className="w-full h-auto"/>
                        </div>
                        <SocialIconBox className="my-0" />
                    </div>
                    <div className="py-12 pt-6  flex flex-col gap-5 w-full items-center md:flex-row  md:justify-center md:gap-6 md:items-start px-4">
                        <div className="bg-black/30 w-full  max-w-[250px] px-10 py-6 border-1 border-accent rounded-md">
                            <h3 className="text-xl text-accent">Important Links</h3>
                            <ul className="text-purple-heart-50 flex flex-col gap-3 my-3">
                                <li><a href="#" className="flex items-center gap-3"><SiListmonk className="w-2 h-2 text-accent text-sm font-semibold" /> About Us</a></li>
                                <li><a href="#" className="flex items-center gap-3 "><SiListmonk className="w-2 h-2 text-accent text-sm font-semibold" /> FAQs</a></li>
                                <li><a href="#" className="flex items-center gap-3"><SiListmonk className="w-2 h-2 text-accent text-sm font-semibold" /> Our Trainers</a></li>
                                <li><a href="#" className="flex items-center gap-3"><SiListmonk className="w-2 h-2 text-accent text-sm font-semibold" /> Contact Us</a></li>
                            </ul>
                        </div>

                        <div className="bg-black/30 w-full  max-w-[250px] px-10 py-6 border-1 border-accent rounded-md">
                            <h3 className="text-xl text-accent">Featured Links</h3>
                            <ul className="text-purple-heart-50 flex flex-col gap-3 my-3">
                                <li><a href="#" className="flex items-center gap-3"><SiListmonk className="w-2 h-2 text-accent text-sm font-semibold" /> Terms & Conditions</a></li>
                                <li><a href="#" className="flex items-center gap-3 "><SiListmonk className="w-2 h-2 text-accent text-sm font-semibold" /> Privacy Policies</a></li>
                            </ul>
                        </div>

                        <div className="bg-black/30 w-full  max-w-[250px] px-10 py-6 border-1 border-accent rounded-md">
                            <h3 className="text-xl text-accent">Training Programs</h3>
                            <ul className="text-purple-heart-50 flex flex-col gap-3 my-3">
                                <li><a href="#" className="flex items-center gap-3"><SiListmonk className="w-2 h-2 text-accent text-sm font-semibold" /> Sales Training</a></li>
                                <li><a href="#" className="flex items-center gap-3 "><SiListmonk className="w-2 h-2 text-accent text-sm font-semibold" /> Team Building</a></li>
                                <li><a href="#" className="flex items-center gap-3"><SiListmonk className="w-2 h-2 text-accent text-sm font-semibold" /> IT Training</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-5 px-4 items-center md:flex-row  md:justify-center lg:justify-start">
                    <div className="bg-white/20 flex items-center px-4 py-4 gap-4 md:py-3   text-purple-heart-100  w-max rounded-xl">
                        <GrLocation className="w-8 h-8 text-accent" />
                        <p className="font-semibold w-full text-sm md:text-base">Barakhamba, New Delhi, 110001</p>
                    </div>

                    <div className="bg-white/20 flex items-center px-4 py-4 gap-4 md:py-3 text-purple-heart-100  w-max rounded-xl">
                        <LuPhoneCall className="w-8 h-8 text-accent" />
                        <p className="font-semibold text-sm md:text-base">7704 016 165</p>
                    </div>

                    <div className="bg-white/20 flex items-center px-4 py-4 gap-4 md:py-3 text-purple-heart-100  w-max rounded-xl">
                        <GoMail className="w-8 h-8 text-accent" />
                        <p className="font-semibold text-sm md:text-base">info@gotezu.com</p>
                    </div>
                </div>
            </div>
            <div className="bg-black/80 text-white mt-10 flex items-center justify-center py-3 md:py-5">
                <p className="text-xs uppercase text-center md:text-xl">Copyright © 2025 Gotezu. All rights reserved.</p>
            </div>
        </footer>
    )
}
export default Footer
