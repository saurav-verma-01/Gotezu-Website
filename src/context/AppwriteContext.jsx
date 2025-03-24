import { createContext, useEffect, useState, useCallback } from "react";
import { Query } from "appwrite";
import { databases } from "../appwriteConfig";

export const AppwriteContext = createContext();

const DATABASE_ID = "67de62d60014286c437d";
const COLLECTION_ID = "67de6628002a03ad80fc";

export const AppwriteProvider = ({ children }) => {
    const [trainers, setTrainers] = useState([]); // Stores initial 25 trainers
    const [searchResults, setSearchResults] = useState([]); // Stores filtered results
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [query, setQuery] = useState(""); // Track user search input

    /** ✅ Fetch first 25 trainers on page load */
    const fetchInitialTrainers = useCallback(async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await databases.listDocuments(
                DATABASE_ID,
                COLLECTION_ID,
                [Query.limit(25)] // ✅ Fetch only first 25 entries
            );

            setTrainers(response.documents);
            setSearchResults(response.documents);
            console.log(`✅ Loaded ${response.documents.length} trainers initially`);
        } catch (err) {
            setError(err?.message || "Failed to fetch trainers");
            console.error("❌ Error fetching initial trainers:", err);
        } finally {
            setLoading(false);
        }
    }, []);

    /** ✅ Fetch all 746 trainers when user searches */
    const fetchAllTrainers = useCallback(async () => {
        setLoading(true);
        setError(null);

        try {
            let allTrainers = [];
            let offset = 0;
            const limit = 100; // Fetch 100 per request for performance

            while (true) {
                const response = await databases.listDocuments(
                    DATABASE_ID,
                    COLLECTION_ID,
                    [Query.limit(limit), Query.offset(offset)] // ✅ Paginated fetching
                );

                allTrainers = [...allTrainers, ...response.documents];
                offset += limit;

                console.log(`📥 Scanned ${response.documents.length} trainers, Total: ${allTrainers.length}`);

                if (response.documents.length < limit) break; // Stop if no more trainers
            }

            return allTrainers;
        } catch (err) {
            setError(err?.message || "Failed to fetch all trainers");
            console.error("❌ Error fetching all trainers:", err);
            return [];
        }
    }, []);

    /** ✅ Handles Search */
    const searchTrainers = useCallback(async (keyword) => {
        console.log(`🔍 Searching for: ${keyword}`);

        if (!keyword.trim()) {
            console.log("🔄 Resetting to initial 25 trainers");
            setSearchResults(trainers);
            return;
        }

        setLoading(true);
        const allTrainers = await fetchAllTrainers(); // ✅ Get all 746 trainers
        const searchWords = keyword.toLowerCase().split(/\s+/);

        const filtered = allTrainers.filter((trainer) =>
            trainer?.search_keyword?.some(
                (kw) => kw && searchWords.some((word) => kw.toLowerCase().includes(word))
            )
        );

        console.log(`✅ Found ${filtered.length} matching trainers`);
        setSearchResults(filtered);
        setLoading(false);
    }, [fetchAllTrainers, trainers]);

    /** ✅ Fetch initial trainers on page load */
    useEffect(() => {
        fetchInitialTrainers();
    }, [fetchInitialTrainers]);

    /** ✅ Listen for search query changes */
    useEffect(() => {
        if (query !== "") {
            searchTrainers(query);
        } else {
            setSearchResults(trainers);
        }
    }, [query, searchTrainers, trainers]);

    /** ✅ Fix: Rename setQuery to updateQuery */
    const updateQuery = (newQuery) => {
        setQuery(newQuery);
    };

    return (
        <AppwriteContext.Provider value={{ trainers, searchResults, updateQuery, loading, error }}>
            {children}
        </AppwriteContext.Provider>
    );
};
