import React from "react";
import "./Header.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from '../../images/logo.jpg'

const Header = () => {
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Delicious Food
          </Navbar.Brand>
          <Nav className="ms-auto">
            <div className="links">
              <Link className="link" to="/">
                Home
              </Link>
              <Link className="link" to="/foods">
                Foods
              </Link>
              <Link className="link" to="/about">
                About
              </Link>
            </div>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
