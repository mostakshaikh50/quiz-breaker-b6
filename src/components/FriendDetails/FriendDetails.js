import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const friend = useLoaderData();
    
    const {name, phone, username, website, email, company} = friend;
    return (
        <div>
            <h3>Details: {name}</h3>
            <p>Call him/her: {phone}</p>
            <p>UserName: {username}</p>
            <p>Website:{website}</p>
            <p>Email: {email}</p>
            {/* <p>Company Name: {company.name}</p> */}
            <h2>Everything you find here about friends</h2>
        </div>
    );
};

export default FriendDetails;