import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const friend = useLoaderData();
    // console.log(friend)
    const { name, phone } = friend;
    return (
        <div>
            <h2>This is details you want to know</h2>
            <h1>Name: {name}</h1>
            <p>Phone number: {phone}</p>
        </div>
    );
};

export default FriendDetails;