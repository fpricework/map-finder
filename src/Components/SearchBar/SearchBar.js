import './searchbar.css';

function SearchBar({ setSearch }) {

    function handleSearch(event) {
        setSearch(event.target.value);
      }

    return (
        <div className="search-wrapper">
            <i className="fa-solid fa-magnifying-glass fa-beat-fade fa-2xs" />
            <input className="search-input" type="search" placeholder="Search for a country..." onChange={handleSearch}/>
        </div>
    );
}

export default SearchBar;