import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
    const details = useLoaderData();
    // console.log(details)
    const navigate = useNavigate();
    const handleAuthor = () => {
        navigate(`/friend/${details.userId}`)
    }
    return (
        <div>
            <h1>This is user details: {details.id}</h1>
            <p>{details.body}</p>
            <button onClick={handleAuthor}>See Author</button>
        </div>
    );
};

export default PostDetails;