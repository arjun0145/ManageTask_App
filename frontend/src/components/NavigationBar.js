import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap'
import { useNavigate } from 'react-router-dom';

function NavigationBar() {
    const navigate = useNavigate()
    return (
        <div>

            <Navbar bg="info" varient="light" expand="lg" >
                <Container>
                    <Navbar.Brand style={{cursor:"pointer"}} onClick={()=>{navigate("/")}}>My Task Bar </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <LinkContainer to='/'>
                                <Nav.Link > <b>Home</b>  </Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/about'>
                                <Nav.Link > <b>About</b> </Nav.Link>
                            </LinkContainer>

                            <LinkContainer to='/contact'>
                                <Nav.Link ><b>Contact Us </b> </Nav.Link>
                            </LinkContainer>

                            <LinkContainer to='/career'>
                                <Nav.Link > Career </Nav.Link>
                            </LinkContainer>

                            <LinkContainer to='/login'>
                                <Nav.Link >Login</Nav.Link>
                            </LinkContainer>

                            <LinkContainer to='/register'>
                                <Nav.Link >Register</Nav.Link>
                            </LinkContainer>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    )
}


export default NavigationBar
