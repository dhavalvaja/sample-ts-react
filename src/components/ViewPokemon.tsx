import { useLocation } from "react-router-dom";
import { Pokemon } from "../Pokemon";

export default function ViewPokemon() {
  const location = useLocation();
  const pokemon:Pokemon = location.state;

  return (
    <div className="container">
      <div className="card text-center m-3" style={{ width: "20rem" }}>
        <img className="card-img" src={pokemon.imgUrl} alt="" />
        <div className="card-body">
          {/* <h3 className="card-title">{pokemon.name}</h3> */}
          <p>Name: {pokemon.name}</p>
          <p>height: {pokemon.height}</p>
          <p>width: {pokemon.width}</p>
        </div>
      </div>
    </div>
  );
}
