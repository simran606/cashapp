import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../Styles/navbar.css';

function Menubar() {
  return (
    <Navbar expand="lg" className="menubar">
        <Navbar.Brand href="#home"><img src="../Images/logo.png" alt="logo-cashapp" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">SIGN IN</Nav.Link>
            <Nav.Link href="#link">LEGAL</Nav.Link>
            <Nav.Link href="#link">LICENSES</Nav.Link>
            <Nav.Link href="#link">SECURITY</Nav.Link>
            <Nav.Link href="#link">CAREERS</Nav.Link>
            <Nav.Link href="#link">PRESS</Nav.Link>
            <Nav.Link href="#link">SUPPORT</Nav.Link>
            <Nav.Link href="#link">STATUS</Nav.Link>
            <Nav.Link href="#link">CODEBLOG</Nav.Link>
          </Nav>

          <img className="eye" src="../../Images/eye.png" alt="eye-pic" />
        </Navbar.Collapse>
    </Navbar>
  );
}

export default Menubar;
