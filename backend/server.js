const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const redditRoutes = require("./src/routes/reddit");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Root Route
app.get("/", (req, res) => {
    res.send("Welcome to the Reddit Summary API! Use /api/reddit or /api/reddit/search.");
});

// Reddit Routes
app.use("/api/reddit", redditRoutes);

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: "Internal Server Error" });
});

// Catch-All for Undefined Routes
app.use((req, res) => {
    res.status(404).json({ error: "Requested resource could not be found." });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
