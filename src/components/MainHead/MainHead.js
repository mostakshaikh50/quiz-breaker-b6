import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './MainHead.css'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const MainHead = () => {
    return (
        <div className='bg'>
         <p className='p-text'>Quiz Breaker</p>
             

            {/* <Navbar bg="dark" variant="dark" style={{ width:'100%', height: '300px' }}>
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src="https://img.freepik.com/premium-vector/quiz-logo-with-speech-bubble-symbols-concept-questionnaire-show-sing-quiz-button-question-competition-exam-interview-modern-emblem_180786-72.jpg"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{}
                        Quiz Breaker
                    </Navbar.Brand>
                </Container>
            </Navbar> */}
        </div>



    );
};

export default MainHead;