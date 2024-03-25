import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col, Card } from "react-bootstrap";
const PokemonEvolution = ({ pokemonName }) => {
  const [evolutionChain, setEvolutionChain] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvolutionChain = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon-species/${pokemonName}`
        );
        const speciesData = response.data;
        const evolutionChainUrl = speciesData.evolution_chain.url;
        const evolutionChainResponse = await axios.get(evolutionChainUrl);
        const evolutionData = evolutionChainResponse.data;

        const chain = await fetchImagesAndParseChain(evolutionData.chain);
        setEvolutionChain(chain);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchEvolutionChain();
  }, [pokemonName]);

  const fetchImagesAndParseChain = async (chainData) => {
    const chain = [];
    const traverseChain = async (stage) => {
      const { species, evolves_to } = stage;
      const pokemonData = await fetchPokemonData(species.name);
      chain.push({
        name: species.name,
        imageUrl: pokemonData.sprites.front_default,
      });
      if (evolves_to && evolves_to.length > 0) {
        for (const evolution of evolves_to) {
          await traverseChain(evolution);
        }
      }
    };

    await traverseChain(chainData);
    return chain;
  };

  const fetchPokemonData = async (pokemonName) => {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );
    return response.data;
  };

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <Col className="mx-auto" xs={7}>
          <Row className="evolution-chain">
            {evolutionChain.map((pokemon, index) => (
              <Col key={index} className="pokemon">
                <Card>
                  <Card.Img src={pokemon.imageUrl} alt={pokemon.name} />
                  <Card.Body>
                    <h2>{pokemon.name}</h2>
                    <p>Condition</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      )}
    </div>
  );
};

export default PokemonEvolution;
