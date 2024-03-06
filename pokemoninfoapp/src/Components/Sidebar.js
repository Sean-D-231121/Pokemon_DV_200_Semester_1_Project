import { Button } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <Navbar expand="lg" className="sidebar">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav ">
        <Nav className="mx-auto flex-column vh-100 sidebar">
          <Nav.Link as={Link} to="/">
            Dashboard
          </Nav.Link>
          <Nav.Link as={Link} to="/CompareStats">
            Compare stats
          </Nav.Link>
          <Nav.Link as={Link} to="/Timeline">
            Timeline
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default Sidebar;
