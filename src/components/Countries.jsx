// import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import Country from "./Country";
import { Fade } from "react-awesome-reveal";

const Countries = () => {

    const [countries, setCountries] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/countriesData`)
            .then(res => res.json())
            .then(data => {
                
                setCountries(data)
            })
    }, [])
    return (
        <div className="mt-24 ">
            <div className="text-center mb-12 mx-auto w-2/3 md:w-full">
                <Fade direction="left">
                    <h2 className="font-bold text-4xl mb-3" >Find Your Dream Country</h2>
                    <p>you like peaceful destinations or vibrant landscapes, we have offers for you.</p>
                </Fade>
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