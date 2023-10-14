import { Button, Container, Navbar } from "react-bootstrap";
import HeaderButton from "./HeaderButton";

export default (props) => {
  return (
    <>
      <Navbar expand="lg" className="fixed-top">
        <Container className="bg-dark text-light p-2 rounded-2">
          <Navbar.Brand href="#home " className="text-light">
            Ecom-Website
          </Navbar.Brand>
          <Navbar.Toggle className="bg-light" aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="navbar-collapse">
            <ul className="navbar-nav ">
              <li className="nav-item  ">
                <a className="nav-link text-light" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link  text-light" href="#">
                  Store
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">
                  Contact
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
