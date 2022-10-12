import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizOptions from '../QuizOptions/QuizOptions';

const QuizDetails = () => {
    const quizDetails = useLoaderData();
    const topic = quizDetails.data;
    const loadData = quizDetails.data.questions;

    //console.log(item);
    return (
        <div>
            <h3>The Topic is : <span style={{ color: 'green' }}>{topic.name}</span></h3>
             
            {
             loadData.map(item => <QuizOptions
                key = {item.id}
                item = {item}
                topic = {topic}               
             ></QuizOptions>)
           }
        </div>
    );
};

export default QuizDetails;