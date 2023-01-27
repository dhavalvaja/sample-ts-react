import axios from 'axios'
import { useEffect, useState } from 'react'
import { Pokemon } from '../Pokemon'

const usePokemonApi = () => {
  const [offSet, setOffSet] = useState(0)
  const [pokemons, setPokemons] = useState<Pokemon[]>([])
  const [error, setError] = useState<any>(null)
  const [isLoding, setIsLoding] = useState<boolean>(true)


  const resetStates = () => {
    setError(null)
    setIsLoding(true)
    setPokemons([])
  }

  useEffect(() => {
    function fetchPokemon() {
      axios.get('https://pokeapi.co/api/v2/pokemon/?limit=10&offset=' + offSet)
        .then(({ data }) => {
          const pokemonList: Pokemon[] = data.results
            .map((pokemon: any, index: number): Pokemon => {
              const temp: Pokemon = {
                id: offSet + index + 1,
                name: pokemon.name,
                height: 0,
                weight: 0,
                abilities: [],
                types: [],
                imgUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${offSet + index + 1}.png`
              }
              return temp
            })
          setPokemons(pokemonList)
          setError(null)
          setIsLoding(false)
        })
        .catch(error => {
          setError(error)
          setPokemons([])
          setIsLoding(false)
        }).finally(() => {
          console.log(offSet);
        })
    }
    fetchPokemon()
  }, [offSet])

  function next() {
    setOffSet(prev => prev + 10)
  }
  function prev() {
    if (offSet > 10)
      setOffSet(prev => prev - 10)
  }

  return { pokemons, error, isLoding, next, prev }
}

export default usePokemonApi