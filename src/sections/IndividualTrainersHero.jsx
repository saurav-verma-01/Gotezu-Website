import React from 'react'
import ITHeroImg from '../assets/IndividualTrainer.png';
import { GoCheckCircle } from "react-icons/go";
import { FaStar } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import { PiUserCircleCheck } from "react-icons/pi";
import { IoLanguage } from "react-icons/io5";
import CtaBtn from "../components/CtaBtn.jsx";
import SocialIconBox from "../components/SocialIconBox.jsx";

const IndividualTrainersHero = () => {
    return (
       <section className="lg:p-8 ">
           <div className="lg:rounded-xl bg-gradient flex flex-col items-center py-8 px-3 md:flex-row gap-8 md:items-start justify-center">
               <div className="bg-accent max-w-md  w-full p-4 px-3 rounded-2xl border-2 border-purple-heart-950">
                   <div className="flex items-center justify-center max-w-[400px] mx-auto">
                       <img src={ITHeroImg} alt="Individual Trainer Image"/>
                   </div>
                   <div className="bg-white rounded-xl border-1 border-purple-heart-950 py-5 px-3 flex flex-col gap-4  mx-auto">
                       <div className="flex justify-between items-center">
                           <h2 className="text-2xl tracking-tight font-semibold">David Thomas</h2>
                           <div className="flex flex-col items-center justify-center gap-1">
                               <GoCheckCircle className="text-green-600 w-8 h-8" />
                               <span className="text-green-600 text-xs font-semibold">GoTezu Verified</span>
                           </div>
                       </div>
                       <div className="flex gap-2 items-center py-2 px-4 border-2 border-accent rounded-xl w-max">
                           <FaStar className="w-6 h-6 text-yellow-400"  />
                           <p>Ratings 5.0 (45 Reviews)</p>
                       </div>
                       <div className="flex gap-2 items-center py-2 px-4 border-2 border-gray-300 rounded-xl w-max">
                           <SlLocationPin className="w-6 h-6 text-black"  />
                           <p>From Delhi, IN</p>
                       </div>
                       <div className="flex gap-2 items-center py-2 px-4 border-2 border-gray-300 rounded-xl w-max">
                           <PiUserCircleCheck className="w-6 h-6 text-black"  />
                           <p>Member Since Jan 2022</p>
                       </div>
                       <div className="flex gap-2 items-center py-2 px-4 border-2 border-gray-300 rounded-xl w-max">
                           <IoLanguage className="w-6 h-6 text-black"  />
                           <p>Speaks English</p>
                       </div>
                   </div>
               </div>
               <div className="w-full max-w-md md:max-w-xl gap-8 flex flex-col items-center">

                   <div className="bg-black/60 text-white p-8 px-5 text-sm md:text-base rounded-xl border-2 border-accent pb-4">
                       <div className="flex flex-col gap-6 md:gap-8">
                           <p>With over 40 years of experience in media and training, I bring a unique perspective to empowering individuals and small businesses on their professional journeys. My expertise lies in enhancing communication, networking, and organizational skills, particularly for freelancers and creatives transitioning into self-employment. In 2005, I founded David Thomas Media to support charities and deliver media training with a focus on practical skills like effective networking and demystifying finance for those who might find it challenging.</p>
                           <p>My approach emphasizes fostering meaningful professional relationships, maintaining passion, and ensuring a sense of purpose in work. Drawing from 22 successful years at the BBC as a journalist, editor, and department head, I’ve helped many navigate redundancy and embrace fulfilling self-employment opportunities. Through customized workshops, I aim to equip clients with tools to manage time effectively, reduce stress, and develop enduring skills that pave the way for lasting success and personal growth.</p>
                       </div>
                       <div className="my-6 flex flex-col gap-4 md:gap-6">
                           <div className="bg-white text-purple-heart-950 text-sm font-semibold py-1.25 px-4 w-max rounded-full">Personality Development</div>
                           <div className="bg-white text-purple-heart-950 text-sm font-semibold py-1.25 px-4 w-max rounded-full">Behavioral Training</div>
                       </div>
                   </div>
                   <div className="flex max-w-md items-center justify-center w-full">
                       <CtaBtn title="Hire Me" className="my-0" />
                   </div>
               </div>
           </div>
       </section>
    )
}
export default IndividualTrainersHero

