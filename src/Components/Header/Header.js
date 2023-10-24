import { Button, Container, Navbar } from "react-bootstrap";
import HeaderButton from "./HeaderButton";
import { Link,BrowserRouter as Router } from "react-router-dom";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

export default (props) => {
  return (
    <>
      <Navbar expand="lg" className="fixed-top ">
        <Container className="bg-dark text-light p-1 rounded-2">
          <Navbar.Brand href="/" className="text-light">
            Ecom-Website
          </Navbar.Brand>
          <Navbar.Toggle
            className="bg-light"
            aria-controls="basic-navbar-nav"
          />
          <Navbar.Collapse className="navbar-collapse">
            <ul className="navbar-nav ">
              <li className="nav-item  ">
                <NavLink className="nav-link text-light" to="/home">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-light" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-light" to="/">
                  Store
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-light" to="/contactus">
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </Navbar.Collapse>
          <HeaderButton />
        </Container>
      </Navbar>
    </>
  );
};
