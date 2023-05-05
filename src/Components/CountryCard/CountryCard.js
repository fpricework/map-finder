import "./countrycard.css";

function CountryCard({ flag, countryName, population, region, capital }) {
    return <>
        <div className="country-card-container">
            <img src={flag} alt="" className="flag"/>
            <div className="country-content">
                <h1 className="country-item" id="country-title">{countryName}</h1>
                <p className="country-item"><span>Population:</span> {new Intl.NumberFormat().format(population)}</p>
                <p className="country-item"><span>Region:</span> {region}</p>
                <p className="country-item"><span>Capital:</span> {capital}</p>
            </div>
        </div>
    </>
}

export default CountryCard;