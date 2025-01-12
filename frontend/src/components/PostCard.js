import React from "react";

const PostCard = ({ post }) => {
    if (!post) {
        return null;
    }

    return (
        <div className="post-card">
            <img
                src={post.thumbnail || "https://via.placeholder.com/150"}
                alt={post.title || "Post image"}
                className="thumbnail"
            />
            <div className="post-info">
                <h3>{post.title || "Untitled Post"}</h3>
                <p>Posted by {post.author || "Unknown"}</p>
                <p>{post.comments || 0} Comments | {post.upvotes || 0} Upvotes</p>
            </div>
        </div>
    );
};

export default PostCard;

