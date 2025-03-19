import React from 'react'
import { IoSearch } from "react-icons/io5";

const SearchBar = ({ className= ""}) => {
    return (
        <form className={`search-form -order-1 md:mt-0 text-purple-heart-950 rounded-md ${className}`}>
            <input className="search-input w-8/10" type="text" placeholder="Search Trainers..."/>
            <div className="bg-accent w-12 h-12 rounded-full flex items-center justify-center hover:bg-violet-600 hover:text-white transition duration-300">
                <IoSearch className="w-8 h-8" />
            </div>
        </form>
    )
}
export default SearchBar
