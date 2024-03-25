import { Col, Form, Row, Card, Button } from "react-bootstrap";

import BarChart from "./BarChart";
import PieChart from "./PieChart";

import RadarChart from "./RadarChart";
import { useEffect, useState } from "react";
import axios from "axios";
import '../CSS/CompareCard.css'
const CompareCard = (props) => {
  const [pokemonData, setPokemonData] = useState(null);
  const [pokemonName, setPokemonName] = useState(props.name);
  const [gender, setGender] = useState(null);

  const [error, setError] = useState(null);
  const [stats, setStats] = useState(null)
  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
        ); 
        setPokemonData(response.data);
        const getStats = response.data.stats.map((stat) => stat.base_stat);
        setStats(getStats)
        console.log(stats)
      } catch (error) {
        console.error("Error fetching Pokémon data:", error.message);
      }
    };
     const getGenderPokemonData = async () => {
       try {
         // Fetch data for the given Pokemon
         const response = await axios.get(
           `https://pokeapi.co/api/v2/pokemon-species/${pokemonName}`
         );
         const data = response.data;

         // Extract gender rate from the data
         const gender = data.gender_rate;

         // Calculate gender ratio or percentage
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
           const femaleRatio = gender * 12.5
           malePercentage = (100 - femaleRatio).toFixed(2);
           femalePercentage = femaleRatio
         }

         setGender([malePercentage, femalePercentage ]);
         
       } catch (error) {
        
         setError("Error fetching Pokémon data");
         console.error("Error fetching Pokémon data:", error.message);
       }
     };
     
    fetchPokemonData();
    getGenderPokemonData();
    
  }, []); 

   const changePokemonData = async () => {
     try {
       const response = await axios.get(
         `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
       );
       setPokemonData(response.data);
       console.log(pokemonData)
       const getStats = response.data.stats.map((stat) => stat.base_stat);
       setStats(getStats);
     } catch (error) {
       console.error("Error fetching Pokémon data:", error.message);
     }
   };
   const changeGenderPokemonData = async () => {
     try {
       // Fetch data for the given Pokemon
       const response = await axios.get(
         `https://pokeapi.co/api/v2/pokemon-species/${pokemonName}`
       );
       const data = response.data;

       // Extract gender rate from the data
       const gender = data.gender_rate;

       // Calculate gender ratio or percentage
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
   
  let pieChartData = {
    data: gender,
    labels: ["Male", "Female"],
  };
  return (
    <Col className="mt-5">
      <Card>
        <Card.Body>
          <Col xs={12} className="mx-auto">
            <Col xs={3} className="mx-auto mr-2">
              <Form>
                <Row xs={7}>
                  <Form.Group className="mb-3" controlId="pokemonName">
                    <Form.Control
                      type="text"
                      placeholder="Enter Pokémon name"
                      value={pokemonName}
                      onChange={(event) =>
                        setPokemonName(event.target.value.toLowerCase())
                      }
                    />
                  </Form.Group>
                  <Button
                    variant="primary"
                    onClick={() => {
                      changePokemonData();
                      changeGenderPokemonData();
                    }}
                  >
                    Search
                  </Button>
                </Row>
              </Form>
              {pokemonData && (
                <Col xs={10} className="mr-auto">
                  <img
                  className="front-image-size"
                    src={pokemonData.sprites.front_default}
                    alt={pokemonData.name}
                  />
                </Col>
              )}
            </Col>

            {pokemonData && (
              <Col style={{ textAlign: "start" }} className="mx-3">
                <h3>Name: {pokemonData.name} </h3>
                <h3>Weight: {(pokemonData.weight * 100) / 1000} kg</h3>
                <h3>Height: {pokemonData.height * 10}cm </h3>
                <h3>Stats: </h3>
              </Col>
            )}

            <Col>
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
