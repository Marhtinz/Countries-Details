import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

// import { useSearchParams } from "react-router-dom";

const Details = ({countries}) => {

const {dog} = useParams ();

const country = countries && countries.find((item)=>item.cca2 === dog);
// console.log (country)

if (!country) {
    return null
}



    return (  
       
        <div>
            <img src={country.flags.png}/>
           <p>{country.name.common }</p>
           <p>{country.capital}</p>
           <p>{country.region}</p>
           <p>{country.population}</p>
           <table>
            <thead>
                <td>s/n</td>
                <td>border 1</td>
                <td>border 2</td>
                
            </thead>
            <tbody>
            <tr>
                <td>1</td>
                <td>{country.borders[0]}</td>
                <td>{country.borders[1]}</td>
            </tr>
            </tbody>
            
           </table>
           <p>{country.currencies.MDL.name}</p>
           <p>{country.currencies.MDL.symbol}</p>
           
           </div>
    );
}
 
export default Details;