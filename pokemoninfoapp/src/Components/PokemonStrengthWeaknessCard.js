import { Card, Col, Row, Button } from "react-bootstrap";
import '../CSS/Card.css'

const PokemonStrengthWeaknessCard = () => {
    const buttons = ['Fire','Water','Ground','Rock','Grass','Normal','Flying', 'Ghost','Poison', 'Physic','Dragon', 'Fairy','Electric', 'Dark', 'Steel']
  return (
    <Col>
      <Card>
        <Card.Body>
          <Row>
            <Col xs={12}>
              {Array.from({ length: buttons.length }).map((_, idx) => (
                <Button className="card-button">{buttons[idx]}</Button>
              ))}
            </Col>
          </Row>
          <Card.Title>Normal</Card.Title>

          <Card.Text>
            <Row xs={1} md={2}>
              <Col>
                <h5>Strong against</h5>
                <ul>
                  <li>Dragon</li>
                  <li>Physic</li>
                  <li>Ground</li>
                </ul>
              </Col>
              <Col>
                <h5>Weakness</h5>
                <ul>
                  <li>Fighting</li>
                  <li>Fire</li>
                  <li>Ghost</li>
                </ul>
              </Col>
            </Row>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};
export default PokemonStrengthWeaknessCard
