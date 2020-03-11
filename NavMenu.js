import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import './NavMenu.css';

export class NavMenu extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Collapse>
          <Nav>
            <NavLink className="navbar" to={"/"}>Home</NavLink>
            <NavLink className="navbar" to={"/counter"}>Component1</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
