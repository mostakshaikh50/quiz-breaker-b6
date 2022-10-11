import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
    const post = useLoaderData();
    console.log(post);
    const {id, body, title} = post;

    const navigate = useNavigate();
    const handleNavigate =() => {
        navigate(`/friend/${id}`);
    }
    return (
        <div>
            <h3>Here Details of Every Post : {id} </h3>

            <h4>Title: {title}</h4>
            <p><small>Details: {body}</small></p>
            <button onClick={handleNavigate}>Author Details</button>
        </div>
    );
};

export default PostDetails;