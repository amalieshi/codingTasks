import React from 'react';
import { Figure, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const About = () => {
    return (
        <Container>
            <Row className="my-4">
                <Col>
                    <nav>
                        <ul className="nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/products">Products</Link>
                            </li>
                        </ul>
                    </nav>
                </Col>
                <Col>
                    <Figure>
                        <Figure.Image
                            width={171}
                            height={180}
                            alt="Store Logo"
                            src="https://1000logos.net/wp-content/uploads/2017/06/Target-logo-1.png"
                        />
                        <Figure.Caption>
                            Welcome to our store! We offer a wide range of products to meet all your needs.
                        </Figure.Caption>
                    </Figure>
                </Col>
            </Row>
            <Row className="my-4">
                <Col>
                    <Figure>
                        <Figure.Image
                            width={171}
                            height={180}
                            alt="Store Image 1"
                            src="https://corporate.target.com/getmedia/d2441ab3-7b0b-4bff-9a6f-15df4690559d/New-Stores_Header_Target.png?width=940"
                        />
                        <Figure.Caption>
                            We welcome our guests with our signature logo and red color scheme.
                        </Figure.Caption>
                    </Figure>
                </Col>
                <Col>
                    <Figure>
                        <Figure.Image
                            width={171}
                            height={180}
                            alt="Store Image 2"
                            src="https://readytrainingonline.com/wp-content/uploads/2014/12/Employee-Friendly-Policies.jpg"
                        />
                        <Figure.Caption>
                            Another view of our store with our friendly staff ready to assist you.
                        </Figure.Caption>
                    </Figure>
                </Col>
            </Row>
            <Row className="my-4">
                <Col>
                    <h3>Contact Us</h3>
                    <p>Email: contact@yourstore.com</p>
                    <p>Phone: (123) 456-7890</p>
                    <p>Address: 123 Main Street, Your City, Your Country</p>
                </Col>
            </Row>
        </Container>
    );
};

export default About;