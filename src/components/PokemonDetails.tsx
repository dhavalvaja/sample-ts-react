import { Link } from "react-router-dom";
import { Pokemon } from "../Pokemon";

interface PokemonDetailsProp {
  pokemon: Pokemon;
  index: number;
}

const PokemonDetails = (props: PokemonDetailsProp) => {
  const { pokemon, index } = props;
  return (
    <div
      className="card text-center m-3"
      key={index}
      style={{ width: "17rem" }}
    >
      <img className="card-img" src={pokemon.imgUrl} alt="" />
      <div className="card-body">
        {/* <h3 className="card-title">
          <Link to={`/viewdetails/${pokemon.name}`} state={pokemon}>
            {pokemon.name}
          </Link>
        </h3> */}
        <h3 className="card-title ">
          <Link to={`/viewdetails/`} className="text-decoration-none text-black" state={pokemon}>
            {pokemon.name}
          </Link>
        </h3>
        <button
          className="btn btn-primary"
          // onClick={() => setCurrentPokemon(index)}
        >
          Show Details
        </button>
      </div>
    </div>
  );
};

export default PokemonDetails;
