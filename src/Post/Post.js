import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Post.css'
const Post = ({ post }) => {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/post/${post.id}`);
    }

    return (
        <div className='post'>
            <h1>Title: {post.title}</h1>
            <p>{post.body}</p>
            <Link to={`/post/${post.id}`}>visit: {post.id}</Link>
            <Link to={`/post/${post.id}`}>
                <button>Details</button>
            </Link>
            <button onClick={handleNavigate}>Details2</button>
        </div>
    );
};

export default Post;