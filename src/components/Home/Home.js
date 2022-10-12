import React from 'react';
import {useLoaderData } from 'react-router-dom';
import HomeDetails from '../HomeDetails/HomeDetails';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Button } from 'react-bootstrap';


const Home = () => {
    const quizData = useLoaderData();
    
      const allQuiz = quizData.data;
       console.log(allQuiz);
    return (
        
        <div>
            
            <h3>This is Home page:</h3>
            <style type="text/css">
                {`
            .btn-info {
            background-color: purple;
            color: white;
            }

            .btn-xxl {
            padding: 5px;
            font-size: 1.5rem;
            width: 300px;
            margin-left: 200px;
            }
            `}
      </style>


            <div>
            <Row xs={1} md={2} className="g-4 ml-4">
                {allQuiz.map((quiz, idx) => (
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={quiz.logo} />
                            <Card.Body>
                                <Card.Title>{quiz.name}</Card.Title>
                                <Card.Text>
                                    Total Question: {quiz.total}
                                </Card.Text>
                                <Button className='text-white' variant="info" size="xxl">Go to Quiz</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>            
        </div>

            {/* {
                allQuiz.map(quiz => <HomeDetails key = {quiz.id}
                    quiz = {quiz}></HomeDetails>)
            } */}
            
            {/* <div class="card card-side bg-base-100 shadow-xl">
                <figure><img src="https://placeimg.com/200/280/arch" alt="Movie" /></figure>
                <div class="card-body">
                    <h2 class="card-title">New movie is released!</h2>
                    <p>Click the button to watch on Jetflix app.</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Watch</button>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default Home;