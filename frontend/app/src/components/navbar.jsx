import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import styled from 'styled-components';

// Styled Navbar component
const CustomNavbar = styled(Navbar)`
    background-color: #7D0DC3;
    box-shadow: 0px 8px 12px #e7c6f3;
`;

// Styled Nav.Link component
const CustomNavLink = styled(Nav.Link)`
    border-radius: 10px; 
    margin-right: 15px;
    font-size: 18px; /* Increase font size */
    position: relative; /* Ensure proper positioning of pseudo-element */
    
    &::before { /* Default style for the line */
        content: ''; /* Create pseudo-element */
        position: absolute; /* Position relative to the link */
        bottom: 0; /* Align at the bottom of the link */
        left: 0; /* Align at the start of the link */
        width: 0; /* Start with no width */
        height: 2px; /* Height of the line */
        background-color: #70F020; /* Color of the line */
        transition: width 0.3s ease; /* Slow transition effect */
    }

    &.active::before, /* Add underline for the selected link */
    &:hover::before { /* Add hover line */
        width: 100%; /* Full width of the link */
    }
    
    &:hover,
    &:focus,
    &:active {
        color: #fff;
        border-radius: 10px; 
    }
`;

function NavBar() {
    return (
        <>
            <CustomNavbar variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#">BrainBoost</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <CustomNavLink href="#Home">Home</CustomNavLink>
                            <CustomNavLink href="#Aboutus">About us</CustomNavLink>
                            <CustomNavLink href="#Coins">Coins</CustomNavLink>
                        </Nav>
                        <Nav>
                            <Button variant="outline-light">Sign In</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </CustomNavbar>
            <br />
        </>
    );
}

export default NavBar;
