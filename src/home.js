import { useState } from "react"
import { Link } from "react-router-dom";
// import useFetch from "./use-fetch
// import Navbar from "./navbar";
// import { Route, Routes } from "react-router-dom";
// import App from "./App";





const Home = ({countries}) => {
   
    const [search, setSearch] = useState("");
    const handleInput = (e) => {
      setSearch(e.target.value);
    };
  
    const filtered =
      countries && countries.filter((country) => {
        return country.name.common.toLowerCase().includes(search.toLowerCase());
      });
    // console.log(filtered);



    return ( 

        <div className="app">
      {" "}
  
      <form onInput={handleInput}>
        <input
          type="text"
          value={search}
          onChange={(e) => handleInput(e)}
        ></input>
      </form>
      {filtered &&
        filtered.length > 0 &&
        filtered.slice(0, 150).map((country, index) => (
         <Link to={`/filtered/${country.cca2}`} key={country.name.common}>
          <h1>
            {" "}
            {index + 1}. &nbsp; &nbsp;{country.name.official}
          </h1>
         </Link>
        ))}
      {/* <Link to={`/countries/${filtered.dog}`}> 
        <h2>{countries.name}</h2>
        <p>{countries.common}</p>
      </Link>
      <Navbar />
      {countries && <link to={`/filtered/${dog}/edit`}>countries Details</link>} */}
      </div>
    );

            }


 
export default Home;