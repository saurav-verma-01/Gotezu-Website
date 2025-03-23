import React from 'react'

import {FaRegCircleCheck, FaStar} from "react-icons/fa6";


const TrainersCard = ({full_name, year_of_experience, skills, ratings, primary_image_file_url, total_views, category_name, search_keyword}) => {

    console.log(full_name, skills, search_keyword);
    return (
        <div className="max-w-[300px] shadow-2xl relative h-full w-full">

                <div
                    className="absolute -inset-2 rounded-2xl bg-gradient-to-bl from-purple-600 via-pink-600 to-lime-600 opacity-30 blur-xl"
                ></div>
                <div className="relative bg-white flex flex-col gap-4 rounded-lg py-3 px-2 h-full   flex-grow justify-between">
                    <div className="bg-gradient flex justify-center rounded-2xl border-2 border-accent h-44">
                        <img src={primary_image_file_url} alt={`Trainer ${full_name}`}/>
                    </div>
                    <div className="flex justify-center items-center border-1 border-b-purple-heart-950 p-3 rounded-4xl">
                        <h2 className="text-lg text-center font-semibold">{category_name}</h2>
                    </div>
                    <div className="flex flex-col items-center gap-1 border-b-1 border-dotted border-purple-heart-950 pb-4 mt-auto">
                        <h3 className="text-2xl font-semibold">{full_name}</h3>
                        <h4 className="text-base font-semibold text-gray-600">{skills} </h4>
                    </div>
                    <div className="flex justify-between items-center py-2">
                        <div className="flex gap-2 items-center">
                            <FaRegCircleCheck className="w-6 h-6 text-green-600" />
                            <h3 className="text-sm font-bold text-green-600">GoTezu Verified</h3>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <FaStar className="w-6 h-6 text-yellow-400" />
                            <h2 className="font-semibold">{ratings}</h2>
                            <p className="text-sm">{total_views} Reviews</p>
                        </div>
                    </div>
                </div>


        </div>
    )
}
export default TrainersCard
