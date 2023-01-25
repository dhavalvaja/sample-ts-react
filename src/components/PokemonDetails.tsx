import { Pokemon } from "../Pokemon";

interface PokemonDetailsProp {
  pokemon: Pokemon
  index: number
  setCurrentPokemon: Function
}

const PokemonDetails = (props: PokemonDetailsProp) => {
  const { pokemon, index, setCurrentPokemon } = props;
  return (
    <div className="card text-center m-3" key={index} style={{ width: "17rem" }}>
      <img
        className="card-img"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
          index + 1
        }.png`}
        alt=""
      />
      <div className="card-body">
        <h3 className="card-title">{pokemon.name}</h3>
        <button
          className="btn btn-primary"
          onClick={() => setCurrentPokemon(index)}
        >
          Show Details
        </button>
      </div>
    </div>
  );
};

export default PokemonDetails;
