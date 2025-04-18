/*
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

*/



// Update your FirebaseContext.jsx
import { createContext, useEffect, useState, useCallback } from "react";
import { collection, getDocs, query, limit, orderBy, where } from "firebase/firestore";
import { db } from "../firebaseConfig";

export const FirebaseContext = createContext();

export const FirebaseProvider = ({ children }) => {
    const [trainers, setTrainers] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [queryText, setQueryText] = useState("");
    const [activeFilter, setActiveFilter] = useState(null);
    const [activeCategory, setActiveCategory] = useState(null);

    const COLLECTION_REF = collection(db, "trainers");

    // Normalize function
    const normalize = (text) => {
        return text.toLowerCase().replace(/[^\w\s]/gi, '').trim();
    };

    // Fetch trainers with filters
    const fetchFilteredTrainers = useCallback(async (filterType, category) => {
        setLoading(true);
        setError(null);

        try {
            let q;
            
            // Handle category filter
            if (category) {
                q = query(COLLECTION_REF, where("category_name", "==", category));
            } 
            // Handle top filters
            else if (filterType === "Top Rated") {
                q = query(COLLECTION_REF, orderBy("rating", "desc"), limit(25));
            } else if (filterType === "Latest") {
                q = query(COLLECTION_REF, orderBy("createdAt", "desc"), limit(25));
            } else if (filterType === "Popular") {
                q = query(COLLECTION_REF, orderBy("views", "desc"), limit(25));
            } 
            // Default case (no filters)
            else {
                q = query(COLLECTION_REF, limit(25));
            }

            const snapshot = await getDocs(q);
            const docs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

            setTrainers(docs);
            setSearchResults(docs);
            console.log(`Loaded ${docs.length} trainers with filter: ${filterType || category}`);
        } catch (err) {
            setError(err?.message || "Failed to fetch trainers");
            console.error("Error fetching filtered trainers:", err);
        } finally {
            setLoading(false);
        }
    }, []);

    // Update the searchTrainers function to consider active filters
    const searchTrainers = useCallback(async (keyword) => {
        const input = normalize(keyword);
        const inputWords = input.split(/\s+/);

        setLoading(true);
        try {
            let q = COLLECTION_REF;
            
            // Apply category filter if active
            if (activeCategory) {
                q = query(q, where("category_name", "==", activeCategory));
            }
            
            const snapshot = await getDocs(q);
            const allTrainers = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

            let locationPart = '';
            let keywordPart = inputWords;

            // Check if the query contains "in" followed by a location
            const locationIndex = inputWords.lastIndexOf('in');
            if (locationIndex !== -1 && locationIndex < inputWords.length - 1) {
                keywordPart = inputWords.slice(0, locationIndex);
                locationPart = inputWords.slice(locationIndex + 1).join(' ');
            }

            const filtered = allTrainers.filter(trainer => {
                const normalizedFullName = normalize(trainer.full_name);

                if (keywordPart.length === 1 && !locationPart) {
                    return normalizedFullName.includes(input);
                }

                if (locationPart) {
                    const rawLocation = trainer.location_name;
                    const normalizedLocation = normalize(rawLocation);

                    const rawKeywords = trainer.keywords;
                    const normalizedKeywords = Array.isArray(rawKeywords)
                        ? rawKeywords.map(k => normalize(k))
                        : (rawKeywords || '').split(',').map(k => normalize(k));

                    return keywordPart.some(kw => normalizedKeywords.includes(kw)) && normalizedLocation === locationPart;
                } else {
                    const rawKeywords = trainer.keywords;
                    const normalizedKeywords = Array.isArray(rawKeywords)
                        ? rawKeywords.map(k => normalize(k))
                        : (rawKeywords || '').split(',').map(k => normalize(k));

                    return keywordPart.some(kw => normalizedKeywords.includes(kw));
                }
            });

            console.log(`Search matched ${filtered.length} trainers`);
            setSearchResults(filtered);
        } catch (err) {
            setError(err?.message || "Failed to search trainers");
            console.error("Error searching trainers:", err);
        } finally {
            setLoading(false);
        }
    }, [activeCategory]);

    // Add new function to handle filter changes
    const applyFilter = (filterType) => {
        setActiveFilter(filterType);
        setActiveCategory(null);
        fetchFilteredTrainers(filterType, null);
    };

    // Add new function to handle category changes
    const applyCategory = (category) => {
        setActiveCategory(category);
        setActiveFilter(null);
        fetchFilteredTrainers(null, category);
    };

    // Reset all filters
    const resetFilters = () => {
        setActiveFilter(null);
        setActiveCategory(null);
        setQueryText("");
        fetchFilteredTrainers(null, null);
    };

    // On mount: fetch initial trainers
    useEffect(() => {
        fetchFilteredTrainers(null, null);
    }, [fetchFilteredTrainers]);

    // Trigger search when query changes
    useEffect(() => {
        if (queryText.trim() !== "") {
            searchTrainers(queryText);
        } else {
            // When search is cleared, show filtered results
            fetchFilteredTrainers(activeFilter, activeCategory);
        }
    }, [queryText, activeFilter, activeCategory, searchTrainers, fetchFilteredTrainers]);

    const updateQuery = (newQuery) => {
        setQueryText(newQuery);
    };

    return (
        <FirebaseContext.Provider value={{ 
            trainers, 
            searchResults, 
            updateQuery, 
            applyFilter,
            applyCategory,
            resetFilters,
            activeFilter,
            activeCategory,
            loading, 
            error 
        }}>
            {children}
        </FirebaseContext.Provider>
    );
};