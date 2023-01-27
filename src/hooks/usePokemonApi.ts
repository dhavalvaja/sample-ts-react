import axios from 'axios'
import { useEffect, useState } from 'react'
import { Pokemon } from '../Pokemon'


const usePokemonApi = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([])
  const [error, setError] = useState<any>(null)
  const [isLoding, setIsLoding] = useState<boolean>(true)

  let next = ""
  let index = 0

  const resetStates = () => {
  	setError(null)
  	setIsLoding(true)
  	setPokemons([])
  }

  function fetchMorePokemon() {
    fetchPokemon()
  }

  function fetchPokemon() {
    axios.get('https://pokeapi.co/api/v2/pokemon/?limit=9')
      .then(({ data }) => {
        next = data.next
        const pokemons: Pokemon[] = data.results
          .map((pokemon: any): Pokemon => {
            const temp: Pokemon = {
              id: index + 1,
              name: pokemon.name,
              height: 0,
              weight: 0,
              abilities: [],
              types: [],
              imgUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + 1}.png`
            }
            console.log(index);

            index = index + 1
            return temp
          })
        setPokemons(pokemons)
        setError(null)
        setIsLoding(false)
      })
      .catch(error => {
        setError(error)
        setPokemons([])
        setIsLoding(false)
      })
  }

  useEffect(() => {
    fetchPokemon()
  }, [])

  return { pokemons, error, isLoding, fetchMorePokemon }
}

export default usePokemonApi