import { createContext, useEffect, useState, useCallback } from "react";
import { databases } from "../appwriteConfig";

export const AppwriteContext = createContext();

const DATABASE_ID = "67de62d60014286c437d";
const COLLECTION_ID = "67de6628002a03ad80fc";

export const AppwriteProvider = ({ children }) => {
    const [trainers, setTrainers] = useState([]); // All trainers
    const [searchResults, setSearchResults] = useState([]); // Searched trainers
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [query, setQuery] = useState(""); // Track the current search query

    // Function to fetch all trainers data with pagination
    const fetchTrainers = useCallback(async () => {
        setLoading(true);
        try {
            let allTrainers = [];
            let offset = 0;
            const limit = 100; // Fetch 100 documents per request

            while (true) {
                const response = await databases.listDocuments(
                    DATABASE_ID,
                    COLLECTION_ID,
                    [], // Optional filters
                    limit, // Limit per request
                    offset // Offset to skip documents
                );

                allTrainers = [...allTrainers, ...response.documents];
                offset += limit; // Update the offset for the next request

                // Stop if no more documents are returned
                if (response.documents.length < limit) {
                    break;
                }
            }

            setTrainers(allTrainers); // Store all trainers
            setSearchResults(allTrainers); // Default to all trainers
            console.log("Fetched trainers:", allTrainers.length); // Debugging
        } catch (err) {
            setError(err?.message || "Failed to fetch trainers");
        } finally {
            setLoading(false);
        }
    }, []);

    // Function to search trainers based on a keyword
    const searchTrainers = useCallback((keyword) => {
        console.log("Searching for:", keyword); // Debugging
        if (!keyword.trim()) {
            console.log("Resetting to all trainers"); // Debugging
            setSearchResults(trainers); // Reset to all trainers if no keyword
            return;
        }

        // Convert keyword into an array of words for partial matching
        const searchWords = keyword.toLowerCase().split(/\s+/);

        // Filter trainers based on the search keyword
        const filtered = trainers.filter((trainer) =>
            Array.isArray(trainer.search_keyword) &&
            trainer.search_keyword.some((kw) =>
                searchWords.some((word) => kw.toLowerCase().includes(word))
            )
        );

        console.log("Filtered results:", filtered); // Debugging
        setSearchResults(filtered);
    }, [trainers]);

    // Fetch trainers on initial render
    useEffect(() => {
        fetchTrainers();
    }, [fetchTrainers]);

    // Re-fetch and filter trainers whenever the query changes
    useEffect(() => {
        console.log("Query changed:", query); // Debugging
        if (query !== "") {
            searchTrainers(query);
        } else {
            setSearchResults(trainers); // Reset to all trainers if no query
        }
    }, [query, searchTrainers, trainers]);

    // Function to update the search query
    const updateQuery = useCallback((newQuery) => {
        setQuery(newQuery);
    }, []);

    return (
        <AppwriteContext.Provider value={{ trainers, searchResults, updateQuery, loading, error, searchTrainers }}>
            {children}
        </AppwriteContext.Provider>
    );
};