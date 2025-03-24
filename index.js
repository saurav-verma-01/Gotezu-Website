// import { Client, Databases } from 'appwrite';
// import * as readline from 'readline';
//
// // Initialize the Appwrite client
// const client = new Client()
//     .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
//     .setProject('67de62c6002e640ab348'); // Your project ID
//
// // Initialize the Databases service
// const databases = new Databases(client);
//
// // Create readline interface
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });
//
// // Function to search for documents in a collection
// async function searchDocuments(keyword) {
//     try {
//         console.log(`\n🔍 Searching for trainers matching: "${keyword}"...\n`);
//
//         // Fetch all documents from the collection
//         const result = await databases.listDocuments(
//             '67de62d60014286c437d', // Replace with your database ID
//             '67de6628002a03ad80fc' // Replace with your collection ID
//         );
//
//         console.log(`📄 Total documents retrieved: ${result.documents.length}`);
//
//         // Convert keyword into an array of words for partial matching
//         const searchWords = keyword.toLowerCase().split(/\s+/);
//
//         // Process the search results
//         const filteredDocuments = result.documents.filter(doc =>
//             Array.isArray(doc.search_keyword) &&
//             doc.search_keyword.some(kw =>
//                 searchWords.some(word => kw.toLowerCase().includes(word))
//             )
//         );
//
//         // Display results
//         if (filteredDocuments.length === 0) {
//             console.log('❌ No trainers found matching your search.');
//         } else {
//             console.log(`✅ Found ${filteredDocuments.length} trainer(s):\n`);
//             filteredDocuments.forEach(doc => {
//                 console.log(`👤 Trainer Name: ${doc.full_name}`); // Updated to use full_name
//                 console.log(`🔑 Keywords: ${doc.search_keyword.join(', ')}`);
//                 console.log('----------------------------------------');
//             });
//         }
//     } catch (error) {
//         console.error('🚨 Error:', error);
//     }
// }
//
// // Function to prompt user for search keyword
// function promptForSearch() {
//     rl.question('\nEnter search keyword (e.g., "ai", "best ai trainer", "ai expert"): ', (keyword) => {
//         searchDocuments(keyword);
//         rl.close();
//     });
// }
//
// // Start the search prompt
// promptForSearch();