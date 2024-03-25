import Sidebar from "../Components/Sidebar";
import '../CSS/Sidebar.css';
import Front from "../Images/Front.png";
import Back from "../Images/Back.png";
import { Container, Row, Col, Form, Card, Button} from "react-bootstrap";
import PokemonImage from "../Components/PokemonImage";
import LineChart from "../Components/LineChart";
import '../CSS/linechart.css'
import RadarChart from "../Components/RadarChart";
import React, { useState, useEffect } from "react";
import axios from "axios";
import PokemonImages from "../Components/frontBackImage";
const Timeline = () =>{
    const [lineChartData,setLineChartData] = useState({
      data: [65, 59, 80, 81, 56, 55],
      labels: ["1", "25", "50", "75", "100"],
    })
    const [pokemonName, setPokemonName] = useState(Math.floor(Math.random() * (500 - 1 + 1)) + 1);
    const [pokemonData, setPokemonData] = useState({})
    const [experienceLevels, setExperienceLevels] = useState([]);
    const [error, setError] = useState("");
    const [speciesData, setSpeciesData] = useState({})
    const [stats,setStats] = useState([])
    const [pokemonNumber, setPokemonNumber] = useState("")
     useEffect(() => {
       const fetchPokemonData = async () => {
         try {
           const response = await axios.get(
             `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
           ); // Fetching data for Pikachu (ID: 1) as an example
           setPokemonData(response.data);
           setPokemonNumber(response.data.id)
           
           const getStats = response.data.stats.map((stat) => stat.base_stat);
           setStats(getStats);
           const speciesUrl = response.data.species.url;
           const speciesResponse = await axios.get(speciesUrl);

           const growthRateResponse = await axios.get(
             speciesResponse.data.growth_rate.url
           );
           setSpeciesData(speciesResponse.data);
           const levels = growthRateResponse.data.levels.map(
             (level) => level.experience
           );
           setExperienceLevels(levels);
           setError("");
           setLineChartData({
             data: [levels[0], levels[24], levels[49], levels[74], levels[99]],
             labels: ["1", "25", "50", "75", "100"],
           });
           
           setError("");
         } catch (error) {
           console.error("Error fetching Pokémon data:", error);
           setError("Failed to fetch Pokémon data");
         }
       };

       fetchPokemonData();
     }, [pokemonName]);
    const handleInputChange = (event) => {
      setPokemonName(event.target.value.toLowerCase());
    };
    const fetchPokemonData = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
        ); // Fetching data for Pikachu (ID: 1) as an example
        setPokemonData(response.data);
        setPokemonNumber(response.data.id);
        console.log(response.data.id);
        const getStats = response.data.stats.map((stat) => stat.base_stat);
        setStats(getStats);
        const speciesUrl = response.data.species.url;
        const speciesResponse = await axios.get(speciesUrl);
        const growthRateResponse = await axios.get(
          speciesResponse.data.growth_rate.url
        );
        setSpeciesData(speciesResponse.data);
        console.log(speciesResponse.data)
        const levels = growthRateResponse.data.levels.map(
          (level) => level.experience
        );
        setExperienceLevels(levels);
        setError("");
        setLineChartData({
          data: [levels[0], levels[24], levels[49], levels[74], levels[99]],
          labels: ["1", "25", "50", "75", "100"],
        });

        setError("");
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
        setError("Failed to fetch Pokémon data");
      }
    };
        
        
    return (
      <Container fluid>
        <Row>
          <Col xs={1} className="sidebar-background vh-100 sticky-top ">
            <Sidebar></Sidebar>
          </Col>
          <Col xs={11}>
            <Col xs={3} className="mx-auto mt-5">
              <input
                type="text"
                value={pokemonName}
                onChange={handleInputChange}
                placeholder="Enter Pokémon name"
              />
              <Button onClick={fetchPokemonData}>
                Fetch Experience Levels
              </Button>
            </Col>
            <Row xs={6} md={2}>
              <PokemonImages pokemonNumber={pokemonNumber} />
            </Row>

            <Col xs={10} className="mx-auto">
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
                    {speciesData && pokemonData && (
                      <>
                        <Col
                          xs={4}
                          style={{ textAlign: "start" }}
                          className="px-3"
                        >
                          <p>Name : {pokemonData.name}</p>
                          <p>Height: {pokemonData.height * 10}m</p>
                          <p>Weight: {(pokemonData.weight * 100) / 1000}kg</p>
                          <p>Types: Fire</p>
                        </Col>
                        <Col
                          xs={3}
                          style={{ textAlign: "start" }}
                          className="px-3"
                        >
                           {speciesData && (
                            <>
                            <p>Capture rate: {(speciesData.capture_rate/255 *100).toFixed()}%</p>
                            <p>Base Happiness: {speciesData.base_happiness}/100</p>
                            </>
                            )}
                          
                        </Col>
                        <Col xs={3}>
                          <RadarChart stats={stats} />
                        </Col>
                      </>
                    )}
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