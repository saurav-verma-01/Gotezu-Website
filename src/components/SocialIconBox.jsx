import React from 'react'
import { FaWhatsapp } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { PiTelegramLogo } from "react-icons/pi";

const SocialIconBox = () => {
    return (
        <div className="social-icons-box">
            <div className="social-icon-circle">
                <FaWhatsapp className="w-5 h-5 sm:w-8 sm:h-8" />
            </div>
            <div className="social-icon-circle">
                <FaInstagram className="w-5 h-5 sm:w-8 sm:h-8" />
            </div>
            <div className="social-icon-circle">
                <FaXTwitter className="w-5 h-5 sm:w-8 sm:h-8" />
            </div>
            <div className="social-icon-circle">
                <PiTelegramLogo className="w-5 h-5 sm:w-8 sm:h-8" />
            </div>
        </div>
    )
}
export default SocialIconBox
