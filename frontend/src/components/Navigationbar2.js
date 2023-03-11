import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap'
import { useNavigate } from 'react-router-dom';


function NavigationBar2() {

    const [value , setvalue ] = useState()
    const navigate = useNavigate()

    let xxx = () =>
    {
        if (window.confirm("asdlfjlasf"))
        {
            console.log("alok is don ")
        }

    }

    let navigation = ()=>{

        navigate("/user/dashboard")

    }
    return (
        <div>

            <Navbar bg="dark" expand="lg" className='bg-light navbar-dark'>
                <Container>
                    <Navbar.Brand style={{cursor:"pointer"}}  onClick={navigation}>My Task Bar </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">

                                                        
                        <LinkContainer to='/user/dashboard'>
                                <Nav.Link >Home</Nav.Link>
                            </LinkContainer>
                        
                            <LinkContainer to='/create-task'>
                                <Nav.Link >Create Task</Nav.Link>
                            </LinkContainer>


                            <LinkContainer to='/profile'>
                                <Nav.Link > Profile </Nav.Link>
                            </LinkContainer>


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    )
}

export default NavigationBar2
