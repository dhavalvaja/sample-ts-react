import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Pokemon } from "../Pokemon";

export default function ViewPokemonByIdOrName() {
  const params = useParams();

  const [pokemon, setPokemon] = useState<Pokemon>();

  return (
    <div className="container">
      <div className="card text-center m-3" style={{ width: "20rem" }}>
        {pokemon && (
          <>
            <img className="card-img" src={pokemon.imgUrl} alt="" />
            <div className="card-body">
              {/* <h3 className="card-title">{pokemon.name}</h3> */}
              <p>Name: {pokemon.name}</p>
              <p>Power: {pokemon.weight}</p>
              <p>Color: {pokemon.height}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
