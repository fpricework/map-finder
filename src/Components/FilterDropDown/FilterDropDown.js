import "./filterdropdown.css";

function FilterDropDown({ setSelectedRegion }) {

    function handleRegionChange(event) {
      setSelectedRegion(event.target.value);
    }

    return <>
        <select name="regions" id="regions" onChange={handleRegionChange}>
            <option value="">All Regions</option>
            <option value="Africa">Africa</option>
            <option value="Americas">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
        </select>
    </>
}

export default FilterDropDown;