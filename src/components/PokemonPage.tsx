import { useOutletContext } from "react-router-dom";
import usePokemonApi from "../hooks/usePokemonApi";
import { Pokemon } from "../Pokemon";
import PokemonDetails from "./PokemonDetails";

interface PokemonsContext {
  pokemons: Pokemon[];
  msg: string;
  searchedPokemons: Pokemon[];
}


export default function PokemonPage() {
  const context: PokemonsContext = useOutletContext();
  const { prev, next, pokemons } = usePokemonApi();

  return (
    <div className="pokemonPage">
      <h1 className="heading">List of Pokemons</h1>
      <div className="pokemonList my-5 ">
        {pokemons.length > 0 ? (
          pokemons.map((pokemon, index) => {
            return (
              <PokemonDetails pokemon={pokemon} key={index} index={index} />
            );
          })
        ) : (
          <div>{context.msg}</div>
        )}
      </div>
      <div className="flex justify-between">
        <button
          className="btn"
          onClick={() => {
            prev();
          }}
        >
          {"<< prev"}
        </button>
        <button
          className="btn"
          onClick={() => {
            next();
          }}
        >
          {"next >>"}
        </button>
      </div>
    </div>
  );
}
