import React from 'react'
import { IoSearch } from "react-icons/io5";

const SearchBar = () => {
    return (
        <form className="border-2 border-accent px-6 py-2 bg-black/40 rounded-xl flex items-center justify-between w-full mt-8 hover:bg-black/25  transition duration-300">
            <input className="caret-accent p-2 outline-none text-white text-base font-semibold" type="text" placeholder="Search Trainers..."/>
            <div className="bg-accent w-12 h-12 rounded-full flex items-center justify-center hover:bg-violet-600 hover:text-white transition duration-300">
                <IoSearch className="w-8 h-8" />
            </div>
        </form>
    )
}
export default SearchBar
