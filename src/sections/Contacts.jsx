import React from 'react'
import Contact1 from '../assets/Contact1.png';
import { FaEnvelope, FaPhoneAlt, FaCommentDots, FaMapMarkerAlt } from "react-icons/fa";

const Contacts = () => {
    return (
        <section className="py-8 max-w-7xl mx-auto">
            <div className="px-8 flex flex-col gap-6 items-center lg:grid lg:grid-cols-2">


            <div className="rounded-md bg-gradient w-full h-full max-w-xl">
                <img src={Contact1} alt="Contact Image" className="w-full h-full object-cover"/>
            </div>
            <div className="px-8 gap-6 grid grid-cols-1 sm:grid-cols-2">

                    <div className="bg-white px-4 py-6 flex flex-col gap-4 items-center text-center rounded-lg max-w-[240px] shadow-xl ">
                        <FaEnvelope className="w-10 h-10" />
                        <h2 className="text-xl font-semibold">SUPPORT</h2>
                        <p className="text-sm font-semibold">Reach out via email for prompt assistance.</p>
                        <p className="text-sm">info@gotezu.com</p>
                    </div>


                <div className="bg-white px-4 py-6 flex flex-col gap-4 items-center text-center rounded-lg max-w-[240px] shadow-xl">
                    <FaPhoneAlt className="w-10 h-10" />
                    <h2 className="text-xl font-semibold">CALL</h2>
                    <p className="text-sm font-semibold">Reach out via email for prompt assistance.</p>
                    <p className="text-sm">info@gotezu.com</p>
                </div>


                <div className="bg-white px-4 py-6 flex flex-col gap-4 items-center text-center rounded-lg max-w-[240px] shadow-xl">
                    <FaCommentDots className="w-10 h-10" />
                    <h2 className="text-xl font-semibold">CHAT WITH US</h2>
                    <p className="text-sm font-semibold">Reach out via email for prompt assistance.</p>
                    <p className="text-sm">info@gotezu.com</p>
                </div>


                <div className="bg-white px-4 py-6 flex flex-col gap-4 items-center text-center rounded-lg max-w-[240px] shadow-xl">
                    <FaMapMarkerAlt  className="w-10 h-10" />
                    <h2 className="text-xl font-semibold">Location</h2>
                    <p className="text-sm font-semibold">Reach out via email for prompt assistance.</p>
                    <p className="text-sm">info@gotezu.com</p>
                </div>

            </div>
            </div>
        </section>
    )
}
export default Contacts
