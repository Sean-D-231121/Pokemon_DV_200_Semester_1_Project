import Sidebar from "../Components/Sidebar";
import Button from "react-bootstrap/Button";
import {Card, Col, Row} from "react-bootstrap";
import '../CSS/global.css'
import WelcomeCard from "../Components/WelcomeCard";
import PokemonStrengthWeaknessCard from "../Components/PokemonStrengthWeaknessCard";
import DoughnutChart from "../Components/DougnutChart";
import "../CSS/DougnutChart.css";
const Dashboard = () => {
  return (
    <>
      <div className="container-fluid ">
        <div className="row ">
          <div className="col-1 sidebar-background">
            <Sidebar></Sidebar>
          </div>
          {/* Top card */}
          <div className="col-10 mx-auto">
            <WelcomeCard />
            <Row xs={1} md={2} className="g-4 mt-5">
              <Col>
                <Card>
                  <Card.Img variant="top" src="holder.js/100px160" />
                  <Card.Body>
                    <Card.Title>Total pokemon types</Card.Title>
                    <Card.Text className="chartContainer mx-auto">
                      <DoughnutChart></DoughnutChart>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                {/* <Card>
                  <Card.Img variant="top" src="holder.js/100px160" />
                  <Card.Body>
                    <Card.Title>Pokemon strength and weaknesses</Card.Title>

                    <Card.Text>
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                  </Card.Body>
                </Card> */}
                <PokemonStrengthWeaknessCard></PokemonStrengthWeaknessCard>
              </Col>
            </Row>
            <h2 className="mt-5">Pokemon evoluton</h2>
            <Row xs={1} md={3} className="g-4 mt-5">
              {Array.from({ length: 3 }).map((_, idx) => (
                <Col key={idx}>
                  <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                      <Card.Title>Card title</Card.Title>
                      <Card.Text>
                        
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};
export default Dashboard;
