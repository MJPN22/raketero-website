import React, { Component } from 'react';
import {
    Navbar , 
    Nav ,
    ListGroup , 
    Col ,
    Row ,
    Container,
    Form
} from 'react-bootstrap'
import { 

    logo
    } from "../../images/index";
class Footer extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <footer>
                   <Container fluid>
                    <Row>
                        <Col>
                            <ListGroup variant="flush" >
                                <ListGroup.Item className="footer-item"><img src={logo} alt="Raktero" className="logo-md" /></ListGroup.Item>
                                
                                
                            </ListGroup>
                        </Col>
                        <Col>
                            <ListGroup variant="flush">
                                <label htmlFor=""><strong>Site Map</strong></label>
                                <ListGroup.Item className="footer-item">Home</ListGroup.Item>
                                <ListGroup.Item className="footer-item">About Us</ListGroup.Item>
                                <ListGroup.Item className="footer-item">How It Works</ListGroup.Item>
                                <ListGroup.Item className="footer-item">Login</ListGroup.Item>
                                <ListGroup.Item className="footer-item">Sign Up</ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col>
                            <ListGroup variant="flush">
                                <label htmlFor=""><strong>General</strong></label>
                                <ListGroup.Item className="footer-item">About</ListGroup.Item>
                                <ListGroup.Item className="footer-item">Accessibility</ListGroup.Item>
                                <ListGroup.Item className="footer-item">Privacy Policy</ListGroup.Item>
                                <ListGroup.Item className="footer-item">Cookie Policy</ListGroup.Item>
                                <ListGroup.Item className="footer-item">Copyright Policy</ListGroup.Item>
                                <ListGroup.Item className="footer-item">Brand Policy</ListGroup.Item>
                                <ListGroup.Item className="footer-item">Guest Controls</ListGroup.Item>
                                <ListGroup.Item className="footer-item">Community Guidelines</ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col>
                            <ListGroup variant="flush">
                                <label htmlFor=""><strong>Contact Us</strong></label>
                                    <ListGroup.Item className="footer-item">Address</ListGroup.Item>
                                    <ListGroup.Item className="footer-item">Email Address</ListGroup.Item>
                                    <ListGroup.Item className="footer-item">Phone Number</ListGroup.Item>
                                    <ListGroup.Item className="footer-item">Tel Number</ListGroup.Item>
                            </ListGroup>
                        </Col>
                    </Row>
                   </Container>
                   <Navbar bg="light" variant="light">
                        <Container fluid>
                            <Nav>
                               <p>Copyright 2020 Rakertero App rights reserved.</p>
                            </Nav>

                            <Form inline>
                                <Nav className="mr-auto">
                                    <Nav.Link href="#home">FaceBook</Nav.Link>
                                    <Nav.Link href="#home">Linkedin</Nav.Link>
                                    <Nav.Link href="#home">Twitter</Nav.Link>
                                    
                                </Nav>
                            </Form>
                        </Container>
                </Navbar>
                </footer>
            </React.Fragment>
         );
    }
}
 
export default Footer;