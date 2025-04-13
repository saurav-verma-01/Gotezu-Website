import React, { useState, useContext } from "react";
import { IoSearch } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { FirebaseContext } from "../context/FirebaseContext";

const SearchBar = ({ className = "" }) => {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();
    const { updateQuery } = useContext(FirebaseContext);

    // Handle Search Submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!query.trim()) return; // Prevent empty search

        // Update the query in AppwriteContext
        updateQuery(query);

        // Redirect to Trainers page with search query in URL
        navigate(`/trainers?search=${encodeURIComponent(query)}`);
        setQuery(""); // Clear the input field
    };

    return (
        <form onSubmit={handleSubmit} className={`search-form ${className}`}>
            <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="search-input w-8/10"
                type="text"
                placeholder="Search Trainers..."
                aria-label="Search Trainers"
            />
            <button
                type="submit"
                className="bg-accent w-12 h-12 rounded-full flex items-center justify-center hover:bg-violet-600 hover:text-white text-purple-900 transition duration-300"
            >
                <IoSearch className="w-8 h-8" />
            </button>
        </form>
    );
};

export default SearchBar;