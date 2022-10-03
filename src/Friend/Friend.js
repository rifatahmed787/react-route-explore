import React from 'react';
import { Link } from 'react-router-dom';
import './Friend.css';

const Friend = ({ friend }) => {
    const { name, id, username, email } = friend;
    return (
        <div className='friend'>
            <h2>Name: {name}</h2>
            <h5>Email: {email}</h5>
            <p><small>UserName: <Link to={`/friend/${id}`}>{username}</Link></small></p>
        </div>
    );
};

export default Friend;