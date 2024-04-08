import Sidebar from "../Components/Sidebar";
import {Container, Card, Col, Row} from "react-bootstrap";
import TypeStrengthsWeaknesses from "../Components/PokemonTypesStrengthWeaknesses";
import '../CSS/global.css'
import WelcomeCard from "../Components/WelcomeCard";
import DoughnutChart from "../Components/DougnutChart";
import "../CSS/DougnutChart.css";
import PokemonEvolution from "../Components/PokemonEvolutionChain";
import axios from "axios";
import { useEffect, useState } from "react";
const Dashboard = () => {
  const [randomPokemon, setRandomPokemon] = useState(null);
  const [randPokemonNumber, setRandPokemonNumber] = useState("")
  const randomId = Math.floor(Math.random() * 898) + 1;
  useEffect(() => {
    const getRandomPokemon = async () => {
      try {
         // Assuming there are 898 Pokémon in the API
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${randomId}`
        );
        setRandomPokemon(response.data);
        setRandPokemonNumber(response.data.id)
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
          <Col xs={2} className="sidebar-background vh-100 sticky-top">
            <Sidebar></Sidebar>
          </Col>
          <Col xs={10} >
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
