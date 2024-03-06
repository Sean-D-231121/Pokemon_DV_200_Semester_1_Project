import Sidebar from "../Components/Sidebar";
import '../CSS/Sidebar.css';
import Front from "../Images/Front.png";
import Back from "../Images/Back.png";
import { Container, Row, Col, Form, Card} from "react-bootstrap";
import PokemonImage from "../Components/PokemonImage";
import LineChart from "../Components/LineChart";
import '../CSS/linechart.css'
import RadarChart from "../Components/RadarChart";
const Timeline = () =>{
    const lineChartData = {
      data: [65, 59, 80, 81, 56, 55],
      labels: ["January", "February", "March", "April", "May", "June"],
    };
    return (
      <Container fluid>
        <Row>
          <Col xs={1} className="sidebar-background ">
            <Sidebar></Sidebar>
          </Col>
          <Col xs={11}>
            <Col xs={3} className="mx-auto mt-5">
              <Form>
                <Form.Control placeholder="Search for pokemon" />
              </Form>
            </Col>
            <Row xs={6} md={2}>
              <PokemonImage Image={Front} />
              <PokemonImage Image={Back} />
            </Row>
            
              <Col xs={10} className='mx-auto'>
                <Card>
                  <Card.Body>
                    <Col xs={8} className="mx-auto">
                      <LineChart
                        getData={lineChartData.data}
                        getLabels={lineChartData.labels}
                      />
                    </Col>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={10} className="mt-5 mx-auto">
                <Card>
                  <Card.Body>
                    <h2 className="mr-auto">Pokemon Information</h2>
                    <Row>
                      <Col
                        xs={4}
                        style={{ textAlign: "start" }}
                        className="px-3"
                      >
                        <p>Name: Charmander</p>
                        <p>Height: 1.25m</p>
                        <p>Weight: 30kg</p>
                        <p>Capture rate: 45/255</p>
                        <p>Types: Fire</p>
                      </Col>
                      <Col
                        xs={3}
                        style={{ textAlign: "start" }}
                        className="px-3"
                      >
                        <p>Base Happiness: 70/100</p>
                        <p>Gender rate: 8</p>
                      </Col>
                      <Col xs={3}>
                        <RadarChart />
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            
          </Col>
        </Row>
      </Container>
    );
}
export default Timeline