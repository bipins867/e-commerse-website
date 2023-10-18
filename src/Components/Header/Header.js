import { Button, Container, Navbar } from "react-bootstrap";
import HeaderButton from "./HeaderButton";

export default (props) => {
  return (
    <>
      <Navbar expand="lg" className="fixed-top ">
        <Container className="bg-dark text-light p-1 rounded-2">
          <Navbar.Brand href="#home " className="text-light">
            Ecom-Website
          </Navbar.Brand>
          <Navbar.Toggle className="bg-light" aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="navbar-collapse">
            <ul className="navbar-nav ">
              <li className="nav-item  ">
                <a className="nav-link text-light" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="/about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link  text-light" href="#">
                  Store
                </a>
              </li>
              
            </ul>
          </Navbar.Collapse>
          <HeaderButton />
        </Container>
      </Navbar>
    </>
  );
};
