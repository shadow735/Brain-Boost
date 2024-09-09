import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Home() {
    return (
        <>
    
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-4">
                        <Card style={{ width: '350px', height: '450px', margin: '0 auto' }}> {/* Reduced card size and centered */}
                            <Card.Img variant="top" src={require('./1.jpg')} style={{ width: '100%', height: '250px', objectFit: 'cover' }} /> {/* Resize and style the image */}
                            <Card.Body className="d-flex flex-column justify-content-center align-items-center"> {/* Center title and button */}
                                <Card.Title className="text-center">Critical Thinking</Card.Title>
                                <Button variant="primary">Start</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4">
                        <Card style={{ width: '350px', height: '450px', margin: '0 auto' }}> {/* Reduced card size and centered */}
                            <Card.Img variant="top" src={require('./2.jpg')} style={{ width: '100%', height: '250px', objectFit: 'cover' }} /> {/* Resize and style the image */}
                            <Card.Body className="d-flex flex-column justify-content-center align-items-center"> {/* Center title and button */}
                                <Card.Title className="text-center">Maths</Card.Title>
                                <Button variant="primary">Start</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4">
                        <Card style={{ width: '350px', height: '450px', margin: '0 auto' }}> {/* Reduced card size and centered */}
                            <Card.Img variant="top" src={require('./3.jpg')} style={{ width: '100%', height: '250px', objectFit: 'cover' }} /> {/* Resize and style the image */}
                            <Card.Body className="d-flex flex-column justify-content-center align-items-center"> {/* Center title and button */}
                                <Card.Title className="text-center">Quiz</Card.Title>
                                <Button variant="primary">Start</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
