import React from 'react'

import {FaRegCircleCheck, FaStar} from "react-icons/fa6";


const TrainersCard = ({name, experience, expertise, rating, image}) => {
    return (
        <div className="max-w-[300px] shadow-2xl relative h-full w-full">

                <div
                    className="absolute -inset-2 rounded-lg bg-gradient-to-bl from-purple-600 via-pink-600 to-lime-600 opacity-50 blur-2xl"
                ></div>
                <div className="relative bg-white flex flex-col gap-4 rounded-lg py-3 px-2 h-full   flex-grow justify-between">
                    <div className="bg-gradient flex justify-center rounded-2xl border-2 border-accent h-44">
                        <img src={image} alt={`Trainer ${name}`}/>
                    </div>
                    <div className="flex justify-center items-center border-2 border-b-purple-heart-950 p-3 rounded-xl">
                        <h2 className="text-2xl text-center font-semibold">{expertise}</h2>
                    </div>
                    <div className="flex flex-col items-center gap-1 border-b-2 border-purple-heart-950 pb-4 mt-auto">
                        <h3 className="text-xl font-semibold">{name}</h3>
                        <h4 className="text-base font-semibold">{experience}</h4>
                    </div>
                    <div className="flex justify-between items-center py-2">
                        <div className="flex gap-2 items-center">
                            <FaRegCircleCheck className="w-6 h-6 text-green-600" />
                            <h3 className="text-sm font-bold text-green-600">GoTezu Verified</h3>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <FaStar className="w-6 h-6 text-yellow-400" />
                            <h2 className="font-semibold">{rating}</h2>
                            <p className="text-sm">28 Reviews</p>
                        </div>
                    </div>
                </div>


        </div>
    )
}
export default TrainersCard
