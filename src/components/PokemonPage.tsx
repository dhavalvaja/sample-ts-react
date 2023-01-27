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
  const { fetchMorePokemon } = usePokemonApi();

  return (
    <div className="container-fluid shadow-lg border mt-3 bg-light p-3 d-flex flex-column ">
      <h1 className="text-center display-5 my-3">List of Pokemons</h1>
      <div className=" d-flex p-3 flex-wrap">
        {context.searchedPokemons.length > 0 ? (
          context.searchedPokemons.map((pokemon, index) => {
            return (
              <PokemonDetails pokemon={pokemon} key={index} index={index} />
            );
          })
        ) : (
          <div>{context.msg}</div>
        )}
      </div>
      <button
        className="btn btn-lg btn-primary position-fixed m-3 bottom-0 end-0"
        style={{
          boxShadow: "4px 4px 4px 0px blue",
        }}
        onClick={() => {
          fetchMorePokemon();
        }}
      >
        Load more
      </button>
    </div>
  );
}
