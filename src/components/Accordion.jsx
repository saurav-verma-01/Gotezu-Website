import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Accordion = ({ question, answer, isOpen, toggleAccordion }) => {
    return (
        <div
            onClick={toggleAccordion}
            className="bg-white px-4 py-6 flex flex-col gap-4 border-b-2 border-purple-heart-500 max-w-xl cursor-pointer md:py-3 rounded-md"
        >
            <div className="flex justify-between items-center gap-2">
                <h3 className="text-lg text-purple-heart-950 font-semibold max-w-sm">{question}</h3>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="h-full w-auto pr-4"
                >
                    {isOpen ? <FaMinus className="w-6 h-6" /> : <FaPlus className="w-6 h-6" />}
                </motion.div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{
                            opacity: 1,
                            height: "auto",
                            transition: {
                                opacity: { duration: 0.2 },
                                height: { duration: 0.3 }
                            }
                        }}
                        exit={{
                            opacity: 0,
                            height: 0,
                            transition: {
                                opacity: { duration: 0.1 },
                                height: { duration: 0.2 }
                            }
                        }}
                        className="text-purple-heart-850 leading-[1.6] max-w-sm overflow-hidden"
                    >
                        <div className="py-2">{answer}</div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Accordion;