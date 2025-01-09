// routes/reddit.js
const express = require("express");
const { getRedditPosts, searchReddit } = require("../controllers/redditController");
const router = express.Router();

router.get("/", (req, res) => {
    res.json({ message: "Welcome to the Reddit API!" });
});

// Route to search Reddit
router.get("/search", searchReddit);

module.exports = router;
