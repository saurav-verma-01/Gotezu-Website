import { Client, Databases } from "appwrite";

const PROJECT_ID_APPWRITE = '67de62c6002e640ab348';
const APPWRITE_ENDPOINT = 'https://cloud.appwrite.io/v1';

const client = new Client();
client
    .setEndpoint(APPWRITE_ENDPOINT) // Your Appwrite endpoint
    .setProject(PROJECT_ID_APPWRITE); // Replace with your actual project ID

const databases = new Databases(client);

export { databases };
