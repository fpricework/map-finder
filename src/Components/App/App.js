import { useEffect, useState } from 'react';

import './App.css';

import Header from '../Header/Header';
import SearchBar from '../SearchBar/SearchBar';
import FilterDropDown from '../FilterDropDown/FilterDropDown';
import CountryCard from '../CountryCard/CountryCard';

function App() {

  const [fetchedData, setFetchedData] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState("");
  const [search, setSearch] = useState("");
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  useEffect(() => {
    async function fetchCountries() {
      const response = await fetch("https://restcountries.com/v3.1/all");
      let data = await response.json();

      data = data.sort((a, b) => a.name.common.localeCompare(b.name.common));

      setFetchedData(data);
    }
    fetchCountries();
  }, []);

  function returnJSX(data) {
    return (
      <div className={`outer-container ${theme}`}>
        <Header theme={theme} setTheme={setTheme}/>
        <div className="search-filter-container">
          <SearchBar setSearch={setSearch}/>
          <FilterDropDown setSelectedRegion={setSelectedRegion}/>
        </div>
        <div className="card-grid-container">
          {data.map((item, key) => {
  
            return (
              <CountryCard 
                key={key} 
                flag={item.flags.png}
                countryName={item.name.common}
                population={item.population}
                region={item.region}
                capital={item.capital} 
              />
            );
          })}
        </div>
      </div>
    );
  }

  function filterRegion(selectedData) {
    return selectedData.filter(item => item.region === selectedRegion);
  }

  function filterSearch(selectedData) {
    return selectedData.filter(item => {
      const itemName = item.name.common.toLowerCase();
      const searchTerm = search.toLowerCase();
      return itemName === searchTerm || itemName.startsWith(searchTerm);
    })
  }

  if(selectedRegion === "" && search === "")
  {
    return returnJSX(fetchedData);
  }
  else if(selectedRegion !== "" && search !== "")
  {
    let regionProccessed = filterRegion(fetchedData);
    let regionAndSearchProcessed = filterSearch(regionProccessed);
    return returnJSX(regionAndSearchProcessed);
  }
  else if(selectedRegion !== "")
  {
    let regionFilteredData = filterRegion(fetchedData);
    return returnJSX(regionFilteredData);
  }
  else if (search !== "")
  {
    let searchedData = filterSearch(fetchedData);
    return returnJSX(searchedData);
  }
}

export default App;