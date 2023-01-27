
export default function SearchBar({ pokemons, searchQuery, setSearchQuery, searchPokemon, setSearchedPokemons }) {
    return (
        <div className="d-flex">
            <input
                autoFocus
                className="form-control"
                type="text"
                name="search"
                id="search"
                value={searchQuery}
                onChange={(e) => {
                    setSearchQuery(e.target.value)
                }}
            />
            <button className="btn btn-secondary mx-3" onClick={searchPokemon}>
                Search
            </button>
        </div>
    )
}
