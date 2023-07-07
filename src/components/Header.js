import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Header.css'
function Header() {
  const [selectedOption, setSelectedOption] = useState("Opzione 1");

  const handleSelect = (selectedKey) => {
    setSelectedOption(selectedKey);
  };

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title={selectedOption} id="basic-nav-dropdown" onSelect={handleSelect}>
            <NavDropdown.Item eventKey="Opzione 1">Opzione 1</NavDropdown.Item>
            <NavDropdown.Item eventKey="Opzione 2">Opzione 2</NavDropdown.Item>
            <NavDropdown.Item eventKey="Opzione 3">Opzione 3</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
