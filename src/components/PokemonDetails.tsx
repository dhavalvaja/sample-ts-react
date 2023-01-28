import { Link } from "react-router-dom";
import { Pokemon } from "../Pokemon";

interface PokemonDetailsProp {
  pokemon: Pokemon;
  index: number;
}

const PokemonDetails = (props: PokemonDetailsProp) => {
  const { pokemon, index } = props;
  return (
    <div className="card text-center" key={index}>
      <img className="" src={pokemon.imgUrl} alt="" />
      <div className="">
        <h3 className="heading3 text-purple-800">
          {pokemon.name[0].toUpperCase() + pokemon.name.substring(1)}
        </h3>
        <Link to={`/viewdetails/${pokemon.name}`} state={pokemon}>
          <button className="btn m-3">Show Details</button>
        </Link>
      </div>
    </div>
  );
};

export default PokemonDetails;
