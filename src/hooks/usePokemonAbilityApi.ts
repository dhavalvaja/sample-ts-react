import axios from "axios";
import { useEffect, useState } from "react";

interface Ability {
  name: string;
  url: string;
}

const usePokemonAbilityApi = () => {
  const [abilities, setAbilities] = useState<Ability[]>([]);
  const [error, setError] = useState<any>(null);
  const [isLoding, setIsLoding] = useState<boolean>(true);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/ability/?limits=20")
      .then(({ data }) => {
        let abilities = data.results.map(({ name, url }: any) => {
          return {
            name: name,
            url: url,
          };
        });
        setAbilities(abilities);
      });
  }, []);

  return { abilities, error, isLoding };
};

export default usePokemonAbilityApi;
