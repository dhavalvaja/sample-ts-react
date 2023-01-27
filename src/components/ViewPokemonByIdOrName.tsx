import { useState } from "react";
import { useParams } from "react-router-dom";
import { Pokemon } from "../Pokemon";

export default function ViewPokemonByIdOrName() {
  const params = useParams();

  const [pokemon, setPokemon] = useState<Pokemon>();

  return (
    <div className="">
      <div className="" style={{ width: "20rem" }}>
        {pokemon && (
          <>
            <img className="" src={pokemon.imgUrl} alt="" />
            <div className="">
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
