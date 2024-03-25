import Sidebar from "../Components/Sidebar";
import Button from "react-bootstrap/Button";
import {Container, Card, Col, Row} from "react-bootstrap";
import TypeStrengthsWeaknesses from "../Components/PokemonTypesStrengthWeaknesses";
import '../CSS/global.css'
import WelcomeCard from "../Components/WelcomeCard";
import PokemonStrengthWeaknessCard from "../Components/PokemonStrengthWeaknessCard";
import DoughnutChart from "../Components/DougnutChart";
import "../CSS/DougnutChart.css";
import Front from '../Images/Front.png';
import PokemonEvolution from "../Components/PokemonEvolutionChain";
import axios from "axios";
import { useEffect, useState } from "react";
const Dashboard = () => {
  const [randomPokemon, setRandomPokemon] = useState(null);
  const [randPokemonNumber, setRandPokemonNumber] = useState("")
  useEffect(() => {
    const getRandomPokemon = async () => {
      try {
        const randomId = Math.floor(Math.random() * 898) + 1; // Assuming there are 898 Pokémon in the API
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${randomId}`
        );
        setRandomPokemon(response.data);
        setRandPokemonNumber(response.data.id)
        console.log(randPokemonNumber)
        console.log()
      } catch (error) {
        console.error("Error fetching random Pokémon:", error);
      }
    };

    getRandomPokemon();
  }, []);
  console.log(randPokemonNumber)
  return (
    <>
      <Container fluid>
        <Row>
          <Col xs={1} className="sidebar-background vh-100 sticky-top">
            <Sidebar></Sidebar>
          </Col>
          {/* Top card */}
          <Col xs={11}>
            {randPokemonNumber && (
              <WelcomeCard pokemonName={randPokemonNumber} />
            )}

            <Row xs={1} md={2} className="g-4 mt-5">
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
              <Col>
                <TypeStrengthsWeaknesses />
              </Col>
            </Row>
            <h2 className="mt-5">Pokemon evoluton</h2>
            {/* <Row xs={1} md={3} className="g-4 mt-5">
              {Array.from({ length: 3 }).map((_, idx) => (
                <Col key={idx}>
                  <Card className="mb-5">
                    <Card.Body>
                      <img src={Front}></img>
                      <Card.Title>Name: Charmander</Card.Title>
                      <Card.Text>
                        Conditions for evolution: Level 20
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row> */}
            {randPokemonNumber && (
              <PokemonEvolution pokemonName={randPokemonNumber} />
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Dashboard;
