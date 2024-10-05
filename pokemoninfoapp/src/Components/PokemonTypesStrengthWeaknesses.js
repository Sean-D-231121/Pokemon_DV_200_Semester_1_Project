import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Card, Col, Row } from "react-bootstrap";



const TypeStrengthsWeaknesses = () => {
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState(null);
  const [strengths, setStrengths] = useState([]);
  const [weaknesses, setWeaknesses] = useState([]);
  const [currentType, setCurrentType] = useState("normal")
  const ButtonColor = [
    "rgba(255, 99, 132, 1)",
    "rgba(54, 162, 235, 1)",
    "rgba(255, 206, 86, 1)",
    "rgba(75, 192, 192, 1)",
    "rgba(153, 102, 255, 1)",
    "rgba(255, 159, 64, 1)",
    "rgba(255, 100, 132, 1)",
    "rgba(54, 20, 255, 1)",
    "rgba(255, 222, 210, 1)",
    "rgba(59, 121, 255, 1)",
    "rgba(153, 102, 255, 1)",
    "rgba(255, 159, 64, 1)",
    "rgba(255, 99, 132, 1)",
    "rgba(54, 162, 235, 1)",
    "rgba(255, 206, 86, 1)",
    "rgba(75, 192, 192, 1)",
    "rgba(153, 102, 255, 1)",
    "rgba(255, 159, 64, 1)",
  ];
  useEffect(() => {
    const fetchTypes = async () => {
      try {
        const response = await axios.get("https://pokeapi.co/api/v2/type/");
        setTypes(response.data.results);
      } catch (error) {
        console.error("Error fetching types:", error);
      }
    };

    fetchTypes();
   setSelectedType("https://pokeapi.co/api/v2/type/2/");
   fetchTypeData("https://pokeapi.co/api/v2/type/2/");
  }, []);

  const fetchTypeData = async (typeUrl) => {
    try {
      const response = await axios.get(typeUrl);
      const damageRelations = response.data.damage_relations;
      setStrengths(damageRelations.double_damage_to.map((type) => type.name));
      setWeaknesses(
        damageRelations.double_damage_from.map((type) => type.name)
      );
    } catch (error) {
      console.error("Error fetching type data:", error);
    }
  };

  const handleTypeClick = (typeUrl) => {
    setSelectedType(typeUrl);
    fetchTypeData(typeUrl);
  };

  return (
    <Card>
      <Card.Body className="card-types">
        <Col>
          <h2>Pokémon Type Strengths and Weaknesses</h2>
          <div className="type-buttons">
            {types.map((type, index) => (
              <button
                key={index}
                value={type.name}
                style={{backgroundColor: ButtonColor[index] }}
                onClick={(event) => {
                  handleTypeClick(type.url);
                  setCurrentType(event.target.value);
                }}
              >
                {type.name}
              </button>
            ))}
          </div>
          <h2>{currentType}</h2>
          {selectedType && (
            <>
              <Row xs={2}>
                <Col>
                  <h3>Strengths:</h3>
                  <ul>
                    {strengths.map((type, index) => (
                      <li key={index}>{type}</li>
                    ))}
                  </ul>
                </Col>
                <Col>
                  <h3>Weaknesses:</h3>
                  <ul>
                    {weaknesses.map((type, index) => (
                      <li key={index}>{type}</li>
                    ))}
                  </ul>
                </Col>
              </Row>
            </>
          )}
        </Col>
      </Card.Body>
    </Card>
  );
};

export default TypeStrengthsWeaknesses;


