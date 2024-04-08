import Sidebar from "../Components/Sidebar";
import { Container, Row, Col } from "react-bootstrap";
import "../CSS/global.css";
import CompareCard from "../Components/CompareCard";
const CompareStats = () => {
  return (
    <Container fluid>
      <Row>
        <Col xs={2} className="sidebar-background vh-100 sticky-top ">
          <Sidebar></Sidebar>
        </Col>
        <Col xs={10}>
          <Row xs={4} md={2} className="mx-auto">
            <CompareCard name={"charmander"}/>
            <CompareCard name={"scyther"}/>
           
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default CompareStats;
