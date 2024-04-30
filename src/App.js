import useFetch from "./use-fetch";
import { useState } from "react";
import "./App.css";
import Navbar from "./navbar";
import Home from "./home";
import { Routes, Route } from "react-router-dom";
import Details from "./details";




function App() {
  const { data: countries } = useFetch("https://restcountries.com/v3.1/all");
  console.log(countries);
 
 
 
  // const { dog } = useParams();
  
  return (
    <div>
       
      <Routes>
        <Route path= "/" element={<Home countries={countries}/>} />
        <Route path="/filtered/:dog" element={<Details countries={countries}/>} />
      </Routes>
     
    </div>
  );
}

export default App;
