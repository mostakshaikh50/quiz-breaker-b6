
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Button } from 'react-bootstrap';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './QuizOptions.css'

const QuizOptions = ({ item, topic }) => {

    const { question, options, id, correctAnswer } = item;
    //console.log(options);
    
    const handleAnswerButtonClick = (answerOption) => {
        console.log(answerOption);
        //alert(answerOption);
        if (answerOption.quiz === answerOption.correctAnswer) {
            toast("Correct Answer");
        }
        else {
            toast("wrong Answer");
        }

    };


    return (
        <div>
            <p>Question: {question}</p>

            <Row xs={1} md={2} className="g-4">
                {options.map((quiz, id) => (
                    <Col>
                        <Card>
                            
                            <Card.Body>                                
                                <Card.Text>
                                 <Button className='notify' variant="light" size='sm' onClick={() => handleAnswerButtonClick({quiz, correctAnswer})}>{quiz}</Button>
                                 <ToastContainer />
                                </Card.Text>
                               
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row> 
        </div>
    );
};

export default QuizOptions;