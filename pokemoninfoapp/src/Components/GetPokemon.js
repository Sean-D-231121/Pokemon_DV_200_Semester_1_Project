import React, { useState } from "react";
import axios from "axios";

function PokemonInfo() {
  const [pokemonData, setPokemonData] = useState(null);
  const [pokemonName, setPokemonName] = useState("");

  const fetchPokemonData = async () => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
      );
      setPokemonData(response.data);
    } catch (error) {
      console.error("Error fetching Pokémon data:", error.message);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Pokémon name"
        value={pokemonName}
        onChange={(event) => setPokemonName(event.target.value.toLowerCase())}
      />
      <button onClick={fetchPokemonData}>Search</button>
      {pokemonData && (
        <div>
          <h2>{pokemonData.name}</h2>
          <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
          {/* Add more data to display as needed */}
        </div>
      )}
    </div>
  );
}

export default PokemonInfo;
