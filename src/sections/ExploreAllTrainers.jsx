import React, {useState} from 'react'
import FilterBtn from "../components/FilterBtn.jsx";
import { FaChevronDown } from "react-icons/fa";
import TrainersContainer from "../components/TrainersContainer.jsx";



const categories = [
    "Soft Skills",
    "Technical IT",
    "Personal Development",
    "Customer Care Capability Development",
    "Sales Capability Development",
    "Functional Skills",
    "Niche Specific",
    "Environment, Safety and Health",
    "Miscellaneous"
];



// <FaChevronDown />
const ExploreAllTrainers = () => {
    const [selected, setSelected] = useState("");
    return (
        <section>
            <div>
                <div className="py-8 pt-4 flex items-center justify-center">
                    <h1 className="subheading">Explore Our Trainers</h1>
                </div>

                <div className="lg:flex items-start justify-center gap-8 ">
                    <div className="py-8 pb-12 text-honeysuckle-100 px-4 bg-gradient lg:rounded-xl">
                        <div className="max-w-sm mx-auto flex flex-col gap-6">
                            <div className="flex px-4 py-4 justify-between items-center">
                                <h3 className="text-2xl font-semibold">Filters</h3>
                                <button className="text-accent font-semibold border-b-1 hover:text-honeysuckle-100 hover:border-white transition duration-200 boder-accent">Reset All</button>
                            </div>
                            <div className="bg-black/30 py-4 px-4 rounded-md border-2 border-accent flex flex-col  gap-4">
                                <h4 className="text-sm font-bold lg:border-b-2 border-white lg:pb-2 lg:text-lg max-w-max">Top Filters</h4>
                                <div className="flex justify-start gap-2.5">
                                    {["Top Rated", "Latest", "Popular"].map((item, i) =>(
                                        <FilterBtn key={i} title={item}className="" />
                                    ) )}
                                </div>
                            </div>
                            <div className="bg-black/30 py-4 px-4 rounded-md border-2 border-accent flex justify-between items-center flex-col lg:items-start">
                                <h4 className="text-sm font-bold lg:border-b-2 border-white lg:pb-2 lg:text-lg max-w-max">Categories</h4>
                                <div className="mt-8">
                                    <div className="relative lg:hidden">
                                        <select
                                            // className="w-full appearance-none bg-transparent border border-[#F4FF74] text-[#F4FF74] py-2 px-4 rounded-xl pr-10 focus:outline-none focus:ring-2 focus:ring-[#F4FF74]"
                                            className="w-full appearance-none bg-transparent placeholder:text-honeysuckle-300 text-accent text-sm border-3 border-accent pl-3 pr-8 py-2 rounded-full transition duration-300 ease focus:outline-none focus:border-honeysuckle-300 hover:border-purple-500 shadow-sm focus:shadow-md cursor-pointer hover:bg-purple-heart-800"
                                            value={selected}
                                            onChange={(e) => setSelected(e.target.value)}
                                        >
                                            <option value="" className="text-purple-heart-950" disabled>Select a category</option>
                                            {categories.map((category, index) => (
                                                <option key={index} value={category} className="text-purple-heart-950">
                                                    {category}
                                                </option>
                                            ))}
                                        </select>
                                        {/* Custom Dropdown Arrow */}
                                        <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                                            <FaChevronDown className="w-5 h-5 text-[#F4FF74]" />
                                        </div>
                                    </div>

                                    <div className="hidden lg:flex flex-wrap gap-4">
                                        {categories.map((item, i) => (<FilterBtn key={i} title={item} className="bg-white border-accent" />))}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <TrainersContainer />
                </div>
            </div>
        </section>
    )
}
export default ExploreAllTrainers
