import { Client, Databases } from "appwrite";


const client = new Client();
client
    .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT) // Your Appwrite endpoint
    .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID); // Replace with your actual project ID

const databases = new Databases(client);

export { databases };
