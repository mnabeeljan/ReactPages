import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./css/NavigationBar.css"
const NavigationBar = () => {
  return (
    <Navbar expand="lg">
      <Navbar.Brand>Muhammad Nabeel's Website</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/about">About</Link>
          <Link className="nav-link" to="/services">Services</Link>
          <Link className="nav-link" to="/contact">Contact</Link>
          <Link className="nav-link" to="/gallery">Gallery</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
