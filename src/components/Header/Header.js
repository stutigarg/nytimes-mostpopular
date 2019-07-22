import React, {Component} from 'react';
import Navbar from "react-bootstrap/Navbar";
const navbarBg = {'backgroundColor':'#94eddc'}
class Header extends Component {
  render() {
    return <Navbar style={navbarBg} expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Brand href="#home">NY Times Most Popular</Navbar.Brand>
    </Navbar>;
  }
}

export default Header;
