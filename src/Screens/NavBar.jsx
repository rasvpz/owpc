import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../Screens/Navstyle.css';

function NavBar() {
  return (
    <>
<Navbar collapseOnSelect expand="lg" className="navBg">
  <Container className='navBg'>
    <Navbar.Brand href="#home" className='navBg'>
      <img
        alt=""
        src="/assets/ncoin.png"
        width="30"
        height="30"
        className="d-inline-block align-top"
        />{' '}
      One World Peace Coin
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    {/* <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
      <Nav style={{height:'70px'}}>
        <Nav.Link className='paddinNav' href="#home">Home</Nav.Link>
        <NavDropdown  className='paddinNavOwpc' title="OWPC" id="collasible-nav-dropdown">
          <NavDropdown.Item  className='paddinNav' href="#action/3.1">Insights</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.2">OW Sheet</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">OWPC White</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.4">
            Paper
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link  className='paddinNav' href="#pricing">Projects</Nav.Link>
        <Nav.Link  className='paddinNav' href="#pricing">FAQ</Nav.Link>
        <Nav.Link  className='paddinNav' href="#pricing">Contact</Nav.Link>
        <Nav.Link  className='paddinNav signInBgFg' href="#pricing">Sign in</Nav.Link>

      </Nav>
    </Navbar.Collapse> */}
  </Container>
</Navbar>

    </>
  );
}

export default NavBar;