import React from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";

const Accordion = ({ question, answer, isOpen, toggleAccordion }) => {
    return (
        <div onClick={toggleAccordion} className="bg-white px-4 py-6 flex flex-col gap-4 border-b-2 border-purple-heart-500 max-w-xl cursor-pointer md:py-3 rounded-md">
            <div className="flex justify-between items-center gap-2">
                <h3 className="text-lg text-purple-heart-950 font-semibold max-w-sm">{question}</h3>
                <div className="h-full w-auto pr-4">
                    {isOpen ? <FaMinus className="w-6 h-6" /> : <FaPlus className="w-6 h-6" />}
                </div>
            </div>
            <p className={`text-purple-heart-850 leading-[1.6] max-w-sm transition-all duration-300 ease-in-out ${isOpen ? "block opacity-100 max-h-screen" : "hidden opacity-0 max-h-0"}`}>
                {answer}
            </p>
        </div>
    );
};

export default Accordion;
