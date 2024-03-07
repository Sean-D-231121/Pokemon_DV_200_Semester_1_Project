import { Col, Form, Row, Card } from "react-bootstrap";
import PokemonImage from "./PokemonImage";
import BarChart from "./BarChart";
import PieChart from "./PieChart";
import Front from "../Images/Front.png";
import RadarChart from "./RadarChart";
const CompareCard = (props) => {
  const pieChartData = {
    data: [20, 25, 30, 20, 5],
    labels: ["Direct", "Organic", "Media", "Social Media", "Marketing"],
  };
  return (
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
              <PieChart
                getData={pieChartData.data}
                getLabels={pieChartData.labels}
              />
            </Col>
            <Col><RadarChart /></Col>
          </Col>

        </Card.Body>
      </Card>
    </Col>
  );
};

export default CompareCard;
