// import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import Country from "./Country";

const Countries = () => {

    const [countries, setCountries] = useState([])
    
    useEffect(()=>{
        fetch(`http://localhost:5000/countriesData`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setCountries(data)
        })
    },[])
    return (
        <div className="mt-24 mb-24">
            <div className="text-center mb-12 mx-auto w-1/2 md:w-full">
                <h2 className="font-bold text-4xl mb-3 animate__animated animate__bounce" >Countries</h2>
                <p>Newest Tourists Spots Around You</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
                {
                    countries.map((country, index) => <Country key={index} country={country}></Country>)
                }
            </div>

            
        </div>
    );
};

export default Countries;