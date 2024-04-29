import { useEffect, useState } from "react";
// import { AuthContext } from "../Firebase/AuthProvider";
import { useParams } from "react-router-dom";
import SameCountries from "./SameCountries";

const TargetCountry = () => {

    const { country_Name } = useParams()
    // const { user } = useContext(AuthContext)

    // const [details, setDetails] = useState([]);

    // useEffect(() => {
    //     fetch(`http://localhost:5000/countriesData`)
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)

    //             const remaining = data.filter(d => d.country_Name == country_Name)
    //             setDetails(remaining)

    //         })
    // }, [country_Name])
    // useEffect(() => {
    //     // Fetch data from the first collection
    //     const fetchData = async () => {
    //         try {
    //             const response1 = await fetch(`http://localhost:5000/countriesData`);
    //             const data1 = await response1.json();
    //             // Fetch data from the second collection
    //             const response2 = await fetch(`http://localhost:5000/allTour`);
    //             const data2 = await response2.json();
    //             // Combine data from both collections
    //             const allData = [...data1, ...data2];
    //             // Filter data based on the country name
    //             const remaining = allData.filter(d => d.country_Name === country_Name);
    //             setDetails(remaining);
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //         }
    //     };

    //     fetchData();
    // }, [country_Name]);

    // console.log(details);


    // const [countryData, setCountryData] = useState([]);
    const [tourData, setTourData] = useState([]);

    // useEffect(() => {
    //     // Fetch data from countriesData endpoint
    //     fetch(`http://localhost:5000/countriesData`)
    //         .then(response => response.json())
    //         .then(data => {
    //             // Filter country data based on country name
    //             const filteredData = data.filter(item => item.country_Name === country_Name);
    //             setCountryData(filteredData);
    //         })
    //         .catch(error => console.error('Error fetching country data:', error));
    // }, [country_Name]);

    useEffect(() => {
        // Fetch data from allTour endpoint
        fetch(`http://localhost:5000/allTour`)
            .then(response => response.json())
            .then(data => {
                // Filter tour data based on country name
                const filteredData = data.filter(item => item.country_Name === country_Name);
                setTourData(filteredData);
            })
            .catch(error => console.error('Error fetching tour data:', error));
    }, [country_Name]);
    return (
        <div className="bg-[#f4f3f0]">

            <div className="text-center font-bold text-3xl py-6">
                Tourist Places In: <span className="text-primary">{country_Name}</span>

                <span className="bg-primary px-2 rounded font-normal ml-3">{tourData.length}</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
                {
                    tourData.map((detail, index) => <SameCountries key={index} detail={detail}></SameCountries>)
                }
            </div>
        </div>
    );
};

export default TargetCountry;