import React, { useContext, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import TrainersCard from "./TrainersCard.jsx";
// import { AppwriteContext } from "../context/AppwriteContext.jsx";
import { FirebaseContext } from "../context/FirebaseContext.jsx";
import CardLoader from "./CardLoader.jsx";

const TrainersContainer = () => {
    // const { searchResults, loading, error } = useContext(AppwriteContext);
    const { searchResults, loading, error } = useContext(FirebaseContext);
    // const [searchParams] = useSearchParams();
    const [searchParams] = useSearchParams();

    // Extract the search query from the URL
    // const query = searchParams.get("search");


    if (error) {
        return <p>Error: {String(error)}</p>;
    }
    if (loading) {
        return <div className="relative bg-red-500 h-[400px] z-50 mx-auto flex items-center align-center">
            <CardLoader />
        </div>

    }

    return (
        <div className="py-8 pt-0 px-4 grid grid-cols-1 md:grid-cols-[350px_350px] xl:grid-cols-[300px_300px_300px] xl:gap-x-8 xl:gap-y-12 gap-8 justify-center ">

            {searchResults.length > 0 ? (
                searchResults.map((trainer) => <TrainersCard key={trainer.$id} {...trainer} />)
            ) : (
                <p>No trainers found.</p>
            )}
        </div>
    );
};

export default TrainersContainer;