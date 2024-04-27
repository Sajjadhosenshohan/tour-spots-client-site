import { useEffect, useState } from "react";
// import { AuthContext } from "../Firebase/AuthProvider";
import { useParams } from "react-router-dom";
import SameCountries from "./SameCountries";

const TargetCountry = () => {

    // const { user } = useContext(AuthContext)
    const [details, setDetails] = useState([]);
    const { country_Name } = useParams()

    useEffect(() => {
        fetch(`http://localhost:5000/countriesData`)
            .then(res => res.json())
            .then(data => {
                console.log(data)

                const remaining = data.filter(d => d.country_Name == country_Name)
                setDetails(remaining)

            })
    }, [country_Name])

    console.log(details)

    return (
        <div>

            <div className="text-center font-bold text-3xl my-6">
                Tourist Places In: <span className="text-primary">{country_Name}</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
                {
                    details.map((detail, index) => <SameCountries key={index} detail={detail}></SameCountries>)
                }
            </div>
        </div>
    );
};

export default TargetCountry;