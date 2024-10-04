

import { Col, Form, Row, Card, Button } from "react-bootstrap";
import BarChart from "./BarChart";
import PieChart from "./PieChart";
import RadarChart from "./RadarChart";
import { useEffect, useState } from "react";
import axios from "axios";
import "../CSS/CompareCard.css";

const CompareCard = (props) => {
  const [pokemonData, setPokemonData] = useState(null);
  const [pokemonName, setPokemonName] = useState(props.name);
  const [gender, setGender] = useState([0, 0]); // Default values for gender
  const [error, setError] = useState(null);
  const [stats, setStats] = useState([]); // Default value for stats

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
        );
        setPokemonData(response.data);
        const getStats = response.data.stats.map((stat) => stat.base_stat);
        setStats(getStats);
      } catch (error) {
        setError("Error fetching Pokémon data");
        console.error("Error fetching Pokémon data:", error.message);
      }
    };

    const getGenderPokemonData = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon-species/${pokemonName}`
        );
        const data = response.data;
        const gender = data.gender_rate;
        let malePercentage, femalePercentage;
        if (gender === -1) {
          malePercentage = 0;
          femalePercentage = 0;
        } else if (gender === 0) {
          malePercentage = 0;
          femalePercentage = 100;
        } else if (gender === 8) {
          malePercentage = 100;
          femalePercentage = 0;
        } else {
          const femaleRatio = gender * 12.5;
          malePercentage = (100 - femaleRatio).toFixed(2);
          femalePercentage = femaleRatio;
        }
        setGender([malePercentage, femalePercentage]);
      } catch (error) {
        setError("Error fetching Pokémon data");
        console.error("Error fetching Pokémon data:", error.message);
      }
    };

    fetchPokemonData();
    getGenderPokemonData();
  }, [pokemonName]);

  const handleChangePokemonName = (event) => {
    if(event.target.value !== ""){
       setPokemonName(event.target.value.toLowerCase());
    }
    else{
      setPokemonName("1");
    }
  };

  let pieChartData = {
    data: gender,
    labels: ["Male", "Female"],
  };

  return (
    <Col className="mt-5">
      <Card>
        <Card.Body>
          <Col xs={11} className="mx-auto">
            <Col xs={3} className="mx-auto mr-2">
              <Form>
                <Row xs={7}>
                  <Form.Group className="mb-3" controlId="pokemonName">
                    <input
                      type="text"
                      placeholder="Enter Pokémon name"
                      value={pokemonName}
                      onChange={handleChangePokemonName}
                    />
                  </Form.Group>
                </Row>
              </Form>
              {pokemonData ? (
                <Col xs={10} className="mr-auto">
                  <img
                    className="front-image-size"
                    src={pokemonData.sprites.front_default}
                    alt={pokemonData.name}
                  />
                </Col>
              ) : (
                <div>Loading...</div>
              )}
            </Col>

            {pokemonData && (
              <Col style={{ textAlign: "start" }} className="mx-3">
                <h3>Name: {pokemonData.name} </h3>
                <h3>Weight: {(pokemonData.weight * 100) / 1000} kg</h3>
                <h3>Height: {pokemonData.height * 10}cm </h3>
              </Col>
            )}

            <Col>
              <h3
                style={{ textAlign: "center", textDecorationLine: "underline" }}
              >
                Stats{" "}
              </h3>
              <BarChart stats={stats} />
            </Col>
            <Col>
              <PieChart
                getData={pieChartData.data}
                getLabels={pieChartData.labels}
              />
            </Col>
            <Col>
              <RadarChart stats={stats} />
            </Col>
          </Col>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CompareCard;

