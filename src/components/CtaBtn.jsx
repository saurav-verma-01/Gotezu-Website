import React from 'react'
import { PiCaretCircleDoubleRightLight } from "react-icons/pi";


const CtaBtn = () => {
    return (
        <button className="cta-btn my-8">
            <p className="cta-btn-text">Book Now</p>
            <div className="bg-black/90 w-12 h-12 rounded-full flex items-center justify-center text-accent">
                <PiCaretCircleDoubleRightLight className="w-10 h-10" />
            </div>
        </button>

    )
}
export default CtaBtn
