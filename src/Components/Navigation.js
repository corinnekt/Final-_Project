// CV
// Art 
// Writing
// Subscribe
// Preorder

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {LinkContainer} from 'react-router-bootstrap'
// import {Link } from 'react-router-dom'


export default function Navigation() {
    return (
        <>
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
                <Nav className="me-auto p">
                    <LinkContainer to="/Home">
                        <Nav.Link >Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/Cv">
                        <Nav.Link >CV</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/Art">
                        <Nav.Link >Art</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/Writing">
                        <Nav.Link >Writing</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/Subscribe">
                        <Nav.Link >Subscribe</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/Preorder">
                        <Nav.Link >Preorder</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Container>
        </Navbar>
        </>
    )
}