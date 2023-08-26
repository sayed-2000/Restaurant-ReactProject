import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navs.css';
import logo from '../../img/logo.png';
import { useState } from 'react';




const Navs = () => {

  const  [navbar,setNavbar] = useState(false);




  const changeBackground = () =>{
     if(window.scrollY >= 80) {
        setNavbar(true)
     } else {
      setNavbar(false)
     }
  };

  console.log("sayed will do ikt ")

  window.addEventListener('scroll',changeBackground)

  return (
    <Navbar expand="lg" className={navbar ? 'navbar active' : 'navbar'}>
    <Container>
      <Navbar.Brand href="#home">
        <img src={logo} title='logo'/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">about us</Nav.Link>
          <Nav.Link href="#link">explore food</Nav.Link>
          <Nav.Link href="#link">Review</Nav.Link>
          <Nav.Link href="#link">faq</Nav.Link>
        </Nav>
        <Nav>
            <Nav.Link id='lastnav'>8573352343</Nav.Link>
          </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
};

export default Navs
