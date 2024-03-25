import React, { useState, useEffect } from "react";
import axios from "axios"
import { Container, Card, Col, Row } from "react-bootstrap";
const TypeStrengthsWeaknesses = () => {
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState(null);
  const [strengths, setStrengths] = useState([]);
  const [weaknesses, setWeaknesses] = useState([]);
  const [currentType, setCurrentType] = useState("normal")
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
