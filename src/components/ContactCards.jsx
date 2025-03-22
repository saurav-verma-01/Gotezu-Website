import React from 'react'
import {FaCommentDots, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt} from "react-icons/fa";

const ContactCards = ({className = ""}) => {
    return (
        <div className={`px-8 gap-6 grid grid-cols-1 sm:grid-cols-2 ${className}`}>

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
    )
}
export default ContactCards
