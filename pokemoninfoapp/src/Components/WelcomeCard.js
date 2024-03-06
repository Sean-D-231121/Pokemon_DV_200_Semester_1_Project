import { Card, Col, Row, Button } from "react-bootstrap";
import logo from '../Images/Logo.png'
import '../CSS/Card.css';
const WelcomeCard = () => {
  return (
    <Card  className="mt-5 p-5">
      <Card.Body>
        <Card.Title> <img src={logo}></img></Card.Title>
        <Card.Text>
          Charpedia is a information website where you can compare pokemon against
          one another, Check their growth rate and find data which includes data about all pokemon.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};
export default WelcomeCard;
