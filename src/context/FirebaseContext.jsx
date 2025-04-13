import { createContext, useEffect, useState, useCallback } from "react";
import { collection, getDocs, query, limit } from "firebase/firestore";
import { db } from "../firebaseConfig"; // Your Firestore config

export const FirebaseContext = createContext();

export const FirebaseProvider = ({ children }) => {
    const [trainers, setTrainers] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [queryText, setQueryText] = useState("");

    const COLLECTION_REF = collection(db, "trainers");

    // Normalize function
    const normalize = (text) => {
        return text.toLowerCase().replace(/[^\w\s]/gi, '').trim();
    };

    // Fetch first 25 trainers
    const fetchInitialTrainers = useCallback(async () => {
        setLoading(true);
        setError(null);

        try {
            const initialQuery = query(COLLECTION_REF, limit(25));
            const snapshot = await getDocs(initialQuery);
            const docs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

            setTrainers(docs);
            setSearchResults(docs);
            console.log(`Loaded ${docs.length} trainers initially`);
        } catch (err) {
            setError(err?.message || "Failed to fetch trainers");
            console.error("Error fetching initial trainers:", err);
        } finally {
            setLoading(false);
        }
    }, []);

    // Fetch all trainers (for search)
    const fetchAllTrainers = useCallback(async () => {
        try {
            const snapshot = await getDocs(COLLECTION_REF);
            return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        } catch (err) {
            console.error("Error fetching all trainers:", err);
            return [];
        }
    }, []);

    // Search logic
    const searchTrainers = useCallback(async (keyword) => {
        const input = normalize(keyword);
        const inputWords = input.split(/\s+/);

        setLoading(true);
        const allTrainers = await fetchAllTrainers();

        let locationPart = '';
        let keywordPart = inputWords;

        // Check if the query contains "in" followed by a location
        const locationIndex = inputWords.lastIndexOf('in');
        if (locationIndex !== -1 && locationIndex < inputWords.length - 1) {
            keywordPart = inputWords.slice(0, locationIndex);
            locationPart = inputWords.slice(locationIndex + 1).join(' ');
        }

        const filtered = allTrainers.filter(trainer => {
            const normalizedFullName = normalize(trainer.full_name); // Normalize the full_name

            // If the query is a single word, check if it matches the full_name
            if (keywordPart.length === 1 && !locationPart) {
                return normalizedFullName.includes(input);
            }

            // If location is specified, match both keyword and location
            if (locationPart) {
                const rawLocation = trainer.location_name;
                const normalizedLocation = normalize(rawLocation);

                const rawKeywords = trainer.keywords;
                const normalizedKeywords = Array.isArray(rawKeywords)
                    ? rawKeywords.map(k => normalize(k))
                    : (rawKeywords || '').split(',').map(k => normalize(k));

                return keywordPart.some(kw => normalizedKeywords.includes(kw)) && normalizedLocation === locationPart;
            } else {
                // If no location is specified, match keywords
                const rawKeywords = trainer.keywords;
                const normalizedKeywords = Array.isArray(rawKeywords)
                    ? rawKeywords.map(k => normalize(k))
                    : (rawKeywords || '').split(',').map(k => normalize(k));

                return keywordPart.some(kw => normalizedKeywords.includes(kw));
            }
        });

        console.log(`Search matched ${filtered.length} trainers`);
        setSearchResults(filtered);
        setLoading(false);
    }, [fetchAllTrainers]);

    // On mount: fetch initial trainers
    useEffect(() => {
        fetchInitialTrainers();
    }, [fetchInitialTrainers]);

    // Trigger search when query changes
    useEffect(() => {
        if (queryText.trim() !== "") {
            searchTrainers(queryText);
        } else {
            setSearchResults(trainers);
        }
    }, [queryText, trainers, searchTrainers]);

    const updateQuery = (newQuery) => {
        setQueryText(newQuery);
    };

    return (
        <FirebaseContext.Provider value={{ trainers, searchResults, updateQuery, loading, error }}>
            {children}
        </FirebaseContext.Provider>
    );
};