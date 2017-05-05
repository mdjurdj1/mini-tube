import React, {Component} from 'react'
import {Navbar, Nav, NavItem, Glyphicon} from 'react-bootstrap'

class navbarInstance extends Component {
  render() {
    return (
    <Navbar collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <Glyphicon glyph="play-circle"/>&nbsp;<a href="#">Mini-Tube</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} href="#">My Playlists</NavItem>
          <NavItem eventKey={2} href="#">Anotha Tab</NavItem>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={1} href="#">Log-in</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    );
  }
}

export default navbarInstance
