import React, { useState } from 'react'
import ITHeroImg from '../assets/IndividualTrainer.png';
import { GoCheckCircle } from "react-icons/go";
import { FaStar } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import { PiUserCircleCheck } from "react-icons/pi";
import { IoLanguage } from "react-icons/io5";
import CtaBtn from "../components/CtaBtn.jsx";
import SocialIconBox from "../components/SocialIconBox.jsx";
import { useLocation } from "react-router-dom";
import TrainerHiringForm from '../components/HiringComponent.jsx';
import {motion} from "framer-motion";
import { PiCaretCircleDoubleRightLight } from "react-icons/pi";
 
const IndividualTrainersHero = () => {
    const { state } = useLocation();
    const [showHiringForm, setShowHiringForm] = useState(false);

    const {
        full_name,
        primary_skill,
        star_rating,
        primary_image_public_url,
        total_reviews,
        category_name,
        long_profile_description,
        languages,
        location_name
      } = state || {};  // fallback in case state is undefined

       // Create trainer object to pass to the form
        const trainer = {
            name: full_name,
            category: category_name,
            skill: primary_skill
            // Add any other fields you want to pass
        };

    return (
       <section className="lg:p-8 ">

        {/* ADD THE FORM COMPONENT RIGHT HERE - AT THE ROOT LEVEL */}
        {showHiringForm && (
                    <TrainerHiringForm
                    trainer={trainer}
                    onClose={() => setShowHiringForm(false)}
                    />
                )}

           <div className="lg:rounded-xl bg-gradient flex flex-col items-center py-8 px-3 md:flex-row gap-8 md:items-start justify-center">
               <div className="bg-accent max-w-md  w-full p-4 px-3 rounded-2xl border-2 border-purple-heart-950">
                   <div className="flex items-center justify-center max-w-[400px] mx-auto">
                       <img src={primary_image_public_url} alt="Individual Trainer Image"/>
                   </div>
                   <div className="bg-white rounded-xl border-1 border-purple-heart-950 py-5 px-3 flex flex-col gap-4  mx-auto">
                       <div className="flex justify-between items-center">
                           <h2 className="text-2xl tracking-tight font-semibold">{full_name}</h2>
                           <div className="flex flex-col items-center justify-center gap-1">
                               <GoCheckCircle className="text-green-600 w-8 h-8" />
                               <span className="text-green-600 text-xs font-semibold">GoTezu Verified</span>
                           </div>
                       </div>
                       <div className="flex gap-2 items-center py-2 px-4 border-2 border-accent rounded-xl w-max">
                           <FaStar className="w-6 h-6 text-yellow-400"  />
                           <p>Ratings {star_rating} ({total_reviews} Reviews)</p>
                       </div>
                       <div className="flex gap-2 items-center py-2 px-4 border-2 border-gray-300 rounded-xl w-max">
                           <SlLocationPin className="w-6 h-6 text-black"  />
                           <p>From {location_name}</p>
                       </div>
                       <div className="flex gap-2 items-center py-2 px-4 border-2 border-gray-300 rounded-xl w-max">
                           <PiUserCircleCheck className="w-6 h-6 text-black"  />
                           <p>Member Since Jan 2022</p>
                       </div>
                       <div className="flex gap-2 items-center py-2 px-4 border-2 border-gray-300 rounded-xl w-max">
                           <IoLanguage className="w-6 h-6 text-black"  />
                           <p>Speaks {languages}</p>
                       </div>
                   </div>
               </div>
               <div className="w-full max-w-md md:max-w-xl gap-8 flex flex-col items-center">

                   <div className="bg-black/60 text-white p-8 px-5 text-sm md:text-base rounded-xl border-2 border-accent pb-4">
                       <div className="flex flex-col gap-6 md:gap-8">
                        {long_profile_description && long_profile_description.replace(/<\/?p>/g, '')}
                       
                       </div>
                       <div className="my-6 flex flex-col gap-4 md:gap-6">
                           <div className="bg-white text-purple-heart-950 text-sm font-semibold py-1.25 px-4 w-max rounded-full">{primary_skill.toUpperCase()}</div>
                           <div className="bg-white text-purple-heart-950 text-sm font-semibold py-1.25 px-4 w-max rounded-full">{category_name.toUpperCase()}</div>
                       </div>
                   </div>
                   <div className="flex max-w-md items-center justify-center w-full">
                       <button title="Hire Me" className={`cta-btn text-4xl `}
                       onClick={() => setShowHiringForm(true)} >
                        <motion.div
                className="relative block overflow-hidden whitespace-nowrap"
                initial="initial"
                whileHover="hovered"
                style={{ display: "inline-block" }}
            >
                <motion.div
                    variants={{
                        initial: {y: 0},
                        hovered: {y: "-100%"},
                    }}
                    className="cta-btn-text"

                    transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                    Hire Me!
                </motion.div>

                <motion.div
                    className="absolute inset-0 cta-btn-text"
                    variants={{
                        initial: { y: "100%" },
                        hovered: { y: 0 },
                    }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                    Hire Me!
                </motion.div>

            </motion.div>
            <div className="bg-black/90 w-12 h-12 rounded-full flex items-center justify-center text-accent">
                <PiCaretCircleDoubleRightLight className="w-10 h-10" />
            </div>
                       </button>
                   </div>
               </div>
           </div>
       </section>
    )
}
export default IndividualTrainersHero

