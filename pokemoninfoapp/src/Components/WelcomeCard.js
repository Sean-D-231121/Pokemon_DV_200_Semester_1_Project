import { Card, Col, Row, Button } from "react-bootstrap";
import logo from '../Images/Logo.png'
import '../CSS/Card.css';
import axios from "axios";
import { useEffect, useState } from "react";
import RadarChart from "./RadarChart";
const WelcomeCard = ({pokemonName}) => {
  const [pokemonData, setPokemonData] = useState(null);
  const [stats, setStats] = useState([])
  useEffect(() => {
    const getPokemonData= async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
        );
        setPokemonData(response.data);
         const getStats = response.data.stats.map((stat) => stat.base_stat);
         setStats(getStats);
      } catch (error) {
        console.error("Error fetching random Pokémon:", error);
      }
    };

    getPokemonData();
  }, []);
  return (
    <Card className="welcome-card mt-2 p-2">
      <Card.Body>
        <Row>
          {pokemonData && (
            <Col xs={6}>
              <img
              className="image-size-large justify-content-center"
                src={pokemonData.sprites.front_default}
                alt={pokemonData.name}
              />
            </Col>
          )}

          <Col xs={4}>
          <RadarChart stats={stats} />
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};
export default WelcomeCard;
