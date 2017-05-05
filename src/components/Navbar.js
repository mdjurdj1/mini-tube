import React, {Component} from 'react'
import {Navbar, Nav, NavItem, Glyphicon} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router';

export default class navbarInstance extends Component {
  render() {
    return (
    <Navbar collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <Glyphicon id='logo' glyph="play-circle"/>&nbsp;<a href="#">Mini-Tube</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <LinkContainer to='/playlists'>
            <NavItem eventKey={1} href='/playlists'>My Playlists</NavItem>
          </LinkContainer>
          <LinkContainer to='/'>
            <NavItem eventKey={2} href="/">Search Videos</NavItem>
          </LinkContainer>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={1} href="#">Log-in</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    );
  }
}
