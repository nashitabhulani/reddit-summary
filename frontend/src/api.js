import axios from "axios";

const API_URL = "http://localhost:3000/api/reddit";  // Backend URL

export const fetchRedditPosts = async (subreddit = "popular", sort = "hot", limit = 10) => {
    try {
        const response = await axios.get(`${API_URL}?subreddit=${subreddit}&sort=${sort}&limit=${limit}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching posts:", error.message);
        throw new Error("Failed to fetch posts from the backend.");
    }
};

