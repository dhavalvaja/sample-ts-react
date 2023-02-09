import axios from "axios";
import { useEffect, useState } from "react";
import { Pokemon } from "../Pokemon";

export interface usePokemonDetailsApiProps {
  nameOrId: string | number;
}

const usePokemonDetailsApi = (props: usePokemonDetailsApiProps) => {
  const [pokemon, setPokemon] = useState<Pokemon>();
  const [error, setError] = useState<any>(null);
  const [isLoding, setIsLoding] = useState<boolean>(true);

  async function fetchPokemonByNameOrId(
    nameOrId: string | number
  ): Promise<Pokemon> {
    const { data } = await axios.get(
      "https://pokeapi.co/api/v2/pokemon/" + nameOrId
    );
    return {
      id: data?.id,
      name: data?.name,
      height: data?.height,
      weight: data?.weight,
      types: data.types.map((elemnt: any) => {
        return elemnt.type.name;
      }),
      imgUrl: data.sprites.other["official-artwork"]["front_default"],
      abilities: data.abilities.map(({ ability }: any) => {
        return ability.name;
      }),
    };
  }

  useEffect(() => {
    fetchPokemonByNameOrId(props.nameOrId)
      .then((pokemon) => {
        setPokemon(pokemon);
        setError(null);
        setIsLoding(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoding(false);
      });
  }, [props.nameOrId]);

  return { error, pokemon, isLoding };
};

export default usePokemonDetailsApi;
