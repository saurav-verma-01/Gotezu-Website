import React from 'react'
import {IoStar} from "react-icons/io5";


const TestimonialCard = ({text, imageSrc, name, company}) => {
    return (
        <div className="px-4 py-6  bg-gradient max-w-md rounded-md flex flex-col gap-4 shadow-[2px_11px_78px_13px_rgba(119,_7,_160,_0.58)] border-2 border-accent">
            <div>
                <p className="card-text text-purple-100  text-left">{`"${text}"`}</p>
            </div>
            <div className="flex justify-between gap-4 flex-wrap items-center">
                <div className="flex items-center gap-4">
                    <div className="border-2 border-honeysuckle-50 rounded-full w-16 h-16">
                        <img src={imageSrc} alt="Avatar 1 Image"/>
                    </div>
                    <div className="text-sm font-bold text-honeysuckle-100">
                        <h4>{name}</h4>
                        <p>{company}</p>
                    </div>
                </div>
                <div className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-honeysuckle-50/20 w-max h-max">
                    {
                        [...Array(5)].map((_, i) => (
                            <IoStar key={i} className="w-5 h-5 text-accent" />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
export default TestimonialCard
