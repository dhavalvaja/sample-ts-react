import { useOutletContext } from "react-router-dom";
import { Pokemon } from "../Pokemon";
import { fetchMorePokemon } from "../PokemonAPI";
import PokemonDetails from "./PokemonDetails";

interface PokemonsContext {
  pokemons: Pokemon[];
  setPokemons: Function;
  msg: string;
  loadMore?: Function;
}

export default function PokemonPage() {
  const context: PokemonsContext = useOutletContext();
  // const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  function loadMore() {
    fetchMorePokemon().then((value) => {
      context.setPokemons((prev: Pokemon[]) => [...prev, ...value]);
    });
  }

  return (
    <div className="container-fluid shadow-lg border mt-3 bg-light p-3 d-flex flex-column ">
      <h1 className="text-center display-5 my-3">List of Pokemons</h1>
      <div className=" d-flex p-3 flex-wrap">
        {context.pokemons.length > 0 ? (
          context.pokemons.map((pokemon, index) => {
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
        onClick={loadMore}
      >
        Load more
      </button>
    </div>
  );
}
