import { useEffect, useState } from "react";
import "./App.css";
import Countries from "./Countries";
import Search from "./Search";

const url = "https://restcountries.com/v3.1/all";

function App() {
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [countries, setCountries] = useState([]);
  const[filterCountries,setFilterCountries]=useState(countries)
  const message = "data is not fetched";

  // async fetching system
  const fetchData = async (url) => {
    setLoading(true);
    // error handling
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCountries(data);
      setFilterCountries(data);
      setLoading(false);
      setError(null);
      console.log(countries);
    } catch (error) {
      setLoading(false);
      setError(error);
      console.log(error);
    }
  };

  // effect hook
  useEffect(() => {
    fetchData(url);
  }, []);
  
  const handleRemove=(name)=>{
const filter=filterCountries.filter((country)=>country.name.common!== name);
setFilterCountries(filter);
  };
  const handleSearch=(searchValue)=>{
    let value=searchValue.toLowerCase();
    const newCountries=countries.filter((country)=>{
        const countryName=country.name.common.toLowerCase();
        return countryName.startsWith(value)
    });
    setFilterCountries(newCountries)
  }

  return (
    <>
      <h1 class="text-slate-800 hover:text-sky-400 font-bold text-center text-3xl">
        Country app project-3
      </h1>
      {isLoading && <p>loading...</p>}
      {error && <h2>{message}</h2>}
      <Search onSearch={handleSearch}/>
      {countries && <Countries countries={filterCountries} onRemove={handleRemove} />}
    </>
  );
}

export default App;
