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
      className="card shadow text-center m-3"
      key={index}
      style={{ width: "13rem" }}
    >
      <img className="card-img" src={pokemon.imgUrl} alt="" />
      <div className="card-body">
        <h3 className="card-title ">
          {pokemon.name[0].toUpperCase() + pokemon.name.substring(1)}
        </h3>
        <Link to={`/viewdetails/${pokemon.name}`} state={pokemon}>
          <button className="btn btn-primary">Show Details</button>
        </Link>
      </div>
    </div>
  );
};

export default PokemonDetails;
