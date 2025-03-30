import { createContext, useEffect, useState, useCallback } from "react";
import { Query } from "appwrite";
import { databases } from "../appwriteConfig";

export const AppwriteContext = createContext();

const DATABASE_ID = "67de62d60014286c437d";
const COLLECTION_ID = "67de6628002a03ad80fc";

export const AppwriteProvider = ({ children }) => {
    const [trainers, setTrainers] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [query, setQuery] = useState("");

    /** Fetch first 25 trainers on page load */
    const fetchInitialTrainers = useCallback(async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await databases.listDocuments(
                DATABASE_ID,
                COLLECTION_ID,
                [Query.limit(25)]
            );

            setTrainers(response.documents);
            setSearchResults(response.documents);
            console.log(`Loaded ${response.documents.length} trainers initially`);
        } catch (err) {
            setError(err?.message || "Failed to fetch trainers");
            console.error("Error fetching initial trainers:", err);
        } finally {
            setLoading(false);
        }
    }, []);

    /** Fetch all trainers for searching */
    const fetchAllTrainers = useCallback(async () => {
        setLoading(true);
        setError(null);

        try {
            let allTrainers = [];
            let offset = 0;
            const limit = 100;

            while (true) {
                const response = await databases.listDocuments(
                    DATABASE_ID,
                    COLLECTION_ID,
                    [Query.limit(limit), Query.offset(offset)]
                );

                allTrainers = [...allTrainers, ...response.documents];
                offset += limit;

                console.log(`Scanned ${response.documents.length} trainers, Total: ${allTrainers.length}`);

                if (response.documents.length < limit) break;
            }

            return allTrainers;
        } catch (err) {
            setError(err?.message || "Failed to fetch all trainers");
            console.error("Error fetching all trainers:", err);
            return [];
        }
    }, []);

    /** Smart Search Function */
    const searchTrainers = useCallback(async (keyword) => {
        console.log(`Searching for: ${keyword}`);

        if (!keyword.trim()) {
            setSearchResults(trainers);
            return;
        }

        setLoading(true);
        const allTrainers = await fetchAllTrainers();
        const searchWords = keyword.toLowerCase().split(/\s+/);

        // Remove common words like "in" and "at"
        const relevantWords = searchWords.filter(word => !["in", "at"].includes(word));
        const keywordVariants = new Set(relevantWords);

        // Handle singular/plural (trainers <-> trainer)
        if (keywordVariants.has("trainers")) keywordVariants.add("trainer");
        if (keywordVariants.has("trainer")) keywordVariants.add("trainers");

        let filtered = allTrainers.filter((trainer) => {
            const trainerKeywords = trainer?.search_keyword?.map(kw => kw.toLowerCase()) || [];
            return Array.from(keywordVariants).some(variant =>
                trainerKeywords.some(kw => kw.includes(variant))
            );
        });

        console.log(`Found ${filtered.length} trainers matching ${keyword}`);
        setSearchResults(filtered);
        setLoading(false);
    }, [fetchAllTrainers, trainers]);

    /** Fetch initial trainers on page load */
    useEffect(() => {
        fetchInitialTrainers();
    }, [fetchInitialTrainers]);

    /** Listen for search query changes */
    useEffect(() => {
        if (query !== "") {
            searchTrainers(query);
        } else {
            setSearchResults(trainers);
        }
    }, [query, searchTrainers, trainers]);

    /** Update search query */
    const updateQuery = (newQuery) => {
        setQuery(newQuery);
    };

    return (
        <AppwriteContext.Provider value={{ trainers, searchResults, updateQuery, loading, error }}>
            {children}
        </AppwriteContext.Provider>
    );
};
