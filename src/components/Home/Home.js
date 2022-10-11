import React from 'react';
import { useLoaderData } from 'react-router-dom';


const Home = () => {
    const allQuizData = useLoaderData();
    console.log(allQuizData);
    return (
        <div>            
            <h3>This is Home page: {allQuizData.data.length}</h3>
        </div>
    );
};

export default Home;