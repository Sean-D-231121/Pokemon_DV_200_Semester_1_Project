import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col } from "react-bootstrap";
const PokemonImages = ({ pokemonNumber }) => {
  const [pokemonData, setPokemonData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    
    const fetchPokemonData = async () => {
        if (pokemonNumber > 0 && pokemonNumber <=1025){
            try {
              const response = await axios.get(
                `https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`
              );
              setPokemonData(response.data);
              setError("");
            } catch (error) {
              console.error("Error fetching Pokémon data:", error);
              setError("Failed to fetch Pokémon data");
            }
        }else{
            try {
              const response = await axios.get(
                `https://pokeapi.co/api/v2/pokemon/1`
              );
              setPokemonData(response.data);
              setError("");
            } catch (error) {
              console.error("Error fetching Pokémon data:", error);
              setError("Failed to fetch Pokémon data");
            }
        }
      
    };

    fetchPokemonData();
  }, [pokemonNumber]);
  return (
    <Row className="mx-auto">
      {pokemonData && (
        <Row>
          <Col>
            <img className="image-size" src={pokemonData.sprites.front_default} alt="Front" />
          </Col>
          <Col>
            <img className="image-size" src={pokemonData.sprites.back_default} alt="Back" />
          </Col>
        </Row>
      )}
    </Row>
  );
};

export default PokemonImages;
