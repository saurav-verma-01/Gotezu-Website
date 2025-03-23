import React, { useContext, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import TrainersCard from "./TrainersCard.jsx";
import { AppwriteContext } from "../context/AppwriteContext.jsx";

const TrainersContainer = () => {
    const { searchResults, loading, error } = useContext(AppwriteContext);
    const [searchParams] = useSearchParams();

    // Extract the search query from the URL
    const query = searchParams.get("search");

    if (loading) {
        return <p>Loading trainers...</p>;
    }

    if (error) {
        return <p>Error: {String(error)}</p>;
    }

    return (
        <div className="py-8 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {searchResults.length > 0 ? (
                searchResults.map((trainer) => <TrainersCard key={trainer.$id} {...trainer} />)
            ) : (
                <p>No trainers found.</p>
            )}
        </div>
    );
};

export default TrainersContainer;