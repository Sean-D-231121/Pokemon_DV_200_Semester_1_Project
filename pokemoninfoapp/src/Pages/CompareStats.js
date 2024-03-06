import Sidebar from "../Components/Sidebar";
import { Container, Row, Col, Form, Card } from "react-bootstrap";
import PokemonImage from "../Components/PokemonImage";
import Front from '../Images/Front.png'
import "../CSS/global.css";
import BarChart from "../Components/BarChart";
import PieChart from "../Components/PieChart";
const CompareStats = () => {
     const pieChartData = {
       data: [20, 25, 30, 20, 5],
       labels: ["Direct", "Organic", "Media", "Social Media", "Marketing"],
     };
  return (
    <Container fluid>
      <Row>
        <Col xs={1} className="sidebar-background ">
          <Sidebar></Sidebar>
        </Col>
        <Col xs={11}>
          <Row xs={4} md={2} className="mx-auto">
            <Col className="mt-5">
              <Card>
                <Card.Body>
                  <Col xs={12} className="mx-auto">
                    <Col xs={3} className="mx-auto mr-2">
                      <Form>
                        <Form.Control placeholder="Search for pokemon" />
                      </Form>
                      <Col xs={10} className="mr-auto">
                        <PokemonImage Image={Front} />
                      </Col>
                    </Col>
                    <Col style={{ textAlign: "start" }} className="mx-3">
                      <h3>Name: Charmander </h3>
                      <h3>Weight: 30kg </h3>
                      <h3>Height: 1.25m </h3>
                      <h3>Stats: </h3>
                    </Col>
                    <Col>
                      <BarChart />
                    </Col>
                    <Col>
                      <PieChart getData={pieChartData.data} getLabels={pieChartData.labels}/>
                    </Col>
                  </Col>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default CompareStats;
