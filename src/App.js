import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './component/Home';
import About from './component/About';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';

import { Navbar, Nav, NavDropdown, Form,  FormControl, Button, Table, ProgressBar} from 'react-bootstrap';
function App() {
  return (
    <BrowserRouter>
        <div className='header'>
          <Navbar expand="xl" variant="dark" className='headerBg'>
            <Navbar.Brand href="#home" className='Brand'>Folio</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                    <Nav.Link href="/" className='Link'>Home</Nav.Link>
                    <Nav.Link href="About" className='Link'>About</Nav.Link>
                    <Nav.Link href="/" className='Link'>Contact</Nav.Link>
                </Nav>
                {/* <Form className="d-flex flex-row align-items-end search">
                  <Button variant="outline-light">Hire Me</Button>
                </Form> */}
            </Navbar.Collapse>
          </Navbar>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
    </BrowserRouter>
  );
}
export default App;