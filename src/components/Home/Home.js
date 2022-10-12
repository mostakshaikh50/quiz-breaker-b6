import React from 'react';
import {Link, useLoaderData } from 'react-router-dom';
import  './Home.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Button } from 'react-bootstrap';
import Statistics from '../Statistics/Statistics';
import MainHead from '../MainHead/MainHead';



const Home = () => {
    
      
    const quizData = useLoaderData();
    const allQuiz = quizData.data;
    //console.log(quizData);
      
    return (
        
        <div>
            
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
            margin-left: 20px;
            
            }
            .btn-link a{
                text-decoration: none;
            }
            `}
      </style>

           <div>
             <MainHead></MainHead>
           </div>


            <div className='topic'>
            <Row xs={1} md={4} className="g-4" style={{ marginTop: '20px' }}>
                {allQuiz.map((quiz, idx) => (
                    <Col>
                        <Card style={{ width: '18rem', marginLeft: '30px' }}>
                            <Card.Img variant="top" src={quiz.logo} />
                            <Card.Body>
                                <Card.Title style={{ color: 'green' }}>{quiz.name}</Card.Title>
                                <Card.Text>
                                    Total Question: {quiz.total}
                                </Card.Text>
                                <Button  className='btn-link text-white' variant="info" size="sm"><Link to={`/quiz/${quiz.id}`}>Go to Quiz</Link></Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>            
        </div>

           
        </div>
    );
};

export default Home;