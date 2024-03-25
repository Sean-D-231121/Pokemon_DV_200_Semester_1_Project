import DoughnutChart from "./DougnutChart";
import { Card, Col } from "react-bootstrap";
import { useEffect } from "react";
const PokemonTotalTypes = () => {
    useEffect(() => {

    },[])
  return (
    <Col>
      <Card>
        <Card.Body>
          <Card.Title>Total pokemon types</Card.Title>
          <Card.Text className="chartContainer mx-auto">
            <DoughnutChart></DoughnutChart>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};
export default PokemonTotalTypes
