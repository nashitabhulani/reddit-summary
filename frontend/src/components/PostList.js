import React, { useState, useEffect } from "react";

const PostList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("https://www.reddit.com/r/popular.json")
            .then((response) => response.json())
            .then((data) => {
                const fetchedPosts = data.data.children.map((item) => ({
                    title: item.data.title,
                    author: item.data.author,
                    comments: item.data.num_comments,
                    upvotes: item.data.ups,
                    thumbnail: item.data.thumbnail,
                }));
                setPosts(fetchedPosts);
            })
            .catch((error) => console.error("Error fetching posts:", error));
    }, []);

    return (
        <div className="post-list">
            {posts.length > 0 ? (
                posts.map((post, index) => (
                    <div className="post-card" key={index}>
                        <img src={post.thumbnail || "https://via.placeholder.com/120"} alt={post.title} />
                        <div className="post-info">
                            <h3>{post.title}</h3>
                            <p>By {post.author}</p>
                            <p>{post.comments} Comments | {post.upvotes} Upvotes</p>
                        </div>
                    </div>
                ))
            ) : (
                <p>No posts available.</p>
            )}
        </div>
    );
};

export default PostList;
