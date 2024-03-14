import { Button } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Logo from "../Images/Logo.png"
function Sidebar() {
  return (
    <Navbar expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav ">
        <Nav className="mx-auto flex-column vh-100 w-100">
          <Navbar.Brand>
            <img src={Logo} />
          </Navbar.Brand>
          <div className="sidebar-button w-100 mb-3">
            <Nav.Link className="navbarlink w-100 " as={Link} to="/">
              Dashboard
            </Nav.Link>
          </div>
          <div className="sidebar-button w-100 mb-3">
            <Nav.Link className="navbarlink w-100" as={Link} to="/CompareStats">
              Compare stats
            </Nav.Link>
          </div>

          <div className="sidebar-button w-100 mb-3">
            <Nav.Link className="navbarlink w-100" as={Link} to="/Timeline">
              Timeline
            </Nav.Link>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default Sidebar;
