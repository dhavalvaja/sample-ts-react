import { Pokemon } from "./Pokemon";

const pokemons: Pokemon[] = [
    {
        id: 1,
        name: 'Pikachu',
        color: 'yellow',
        power: 1
    },
    {
        id: 2,
        name: 'Eevee',
        color: 'brown',
        power: 2
    },
    {
        id: 3,
        name: 'Ditto',
        color: 'purple',
        power: 3
    },
    {
        id: 4,
        name: 'Charmilion',
        color: 'purple',
        power: 3
    },
    {
        id: 5,
        name: 'Charmender',
        color: 'purple',
        power: 3
    },
]

export default function fetchPokemon(): Promise<Pokemon[]> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(pokemons)
        }, 2000)
    })
}