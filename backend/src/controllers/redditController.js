// controllers/redditController.js
const axios = require("axios");

// Get posts from a subreddit
const getRedditPosts = async (req, res) => {
    const { subreddit = "popular", sort = "hot", limit = 10 } = req.query;
    const url = `https://www.reddit.com/r/${subreddit}/${sort}.json?limit=${limit}`;

    try {
        const response = await axios.get(url);
        const posts = response.data.data.children.map((post) => ({
            title: post.data.title,
            author: post.data.author,
            thumbnail: post.data.thumbnail.startsWith("http") ? post.data.thumbnail : null,
            comments: post.data.num_comments,
            upvotes: post.data.ups,
            created_at: new Date(post.data.created_utc * 1000),
        }));
        res.json(posts);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "Failed to fetch Reddit posts" });
    }
};

// Search Reddit
const searchReddit = async (req, res) => {
    const { query, limit = 10 } = req.query;
    const url = `https://www.reddit.com/search.json?q=${query}&limit=${limit}`;

    try {
        const response = await axios.get(url);
        const posts = response.data.data.children.map((post) => ({
            title: post.data.title,
            author: post.data.author,
            thumbnail: post.data.thumbnail.startsWith("http") ? post.data.thumbnail : null,
            comments: post.data.num_comments,
            upvotes: post.data.ups,
            created_at: new Date(post.data.created_utc * 1000),
        }));
        res.json(posts);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "Failed to search Reddit" });
    }
};

module.exports = { getRedditPosts, searchReddit };
