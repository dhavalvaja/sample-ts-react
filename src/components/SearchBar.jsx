
export default function SearchBar({ searchQuery, setSearchQuery, searchPokemon, setSearchedPokemons }) {
    return (
        <form className="navform" onSubmit={searchPokemon}>
            <input
                autoFocus
                className="search"
                type="text"
                name="search"
                id="search"
                placeholder="enter name or Id"
                value={searchQuery}
                onChange={(e) => {
                    setSearchQuery(e.target.value)
                }}
            />
            <button className='btn m-auto mx-2' type="submit">
                Search
            </button>
        </form>
    )
}
