import React, { useEffect } from "react";
import axios from "axios";

function ConsoleLogAPIObject() {
  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        // Fetch data for a specific Pokemon
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon/1");
        console.log(response.data); // Log the data object received in the response
      } catch (error) {
        console.error("Error fetching Pokémon data:", error.message);
      }
    };

    fetchPokemonData();
  }, []);

  return (
    <div>
     
    </div>
  );
}

export default ConsoleLogAPIObject;

