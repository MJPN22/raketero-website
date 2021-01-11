import React, { Component } from 'react'

import {
    Navbar , 
    Nav ,
    Form ,
    Button,
    FormControl,
    Container
} from 'react-bootstrap'
import { 

    logo
    } from "../../images/index";
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
// } from "react-router-dom"

class Navigation extends Component {
    state = {  }
    render() { 
        return (
           
            <Navbar bg="light" variant="light">
                <Container >
                    <Nav className="mr-auto">
                        {/* <Navbar.Brand href="#home"><img src={logo} alt="Raktero" className="logo-sm" /></Navbar.Brand> */}
                    </Nav>

                    <Form inline>
                        <Nav className="mr-auto">
                            
                            <Nav.Link href="#features">Login</Nav.Link>
                            <Nav.Link href="#pricing">Sign up</Nav.Link>
                        </Nav>
                    </Form>
                </Container>
           </Navbar>
        
        );
    }
}
 
export default Navigation;