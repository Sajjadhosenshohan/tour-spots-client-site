import { useEffect, useState } from "react";
// import { AuthContext } from "../Firebase/AuthProvider";
import { useParams } from "react-router-dom";
import SameCountries from "./SameCountries";
import { Fade } from "react-awesome-reveal";


const TargetCountry = () => {

    const { country_Name } = useParams()


    const [tourData, setTourData] = useState([]);

    useEffect(() => {

        fetch(`http://localhost:5000/allTour`)
            .then(response => response.json())
            .then(data => {

                const filteredData = data.filter(item => item.country_Name === country_Name);
                setTourData(filteredData);
            })
            .catch(error => console.error(error));
    }, [country_Name]);
    return (
        <div className="dark:bg-[#f4f3f0] dark:text-gray-800">


            <div className="text-center font-bold text-3xl py-6 flex justify-center">
                <Fade direction="left">
                    Tourist Places In: <span className="text-primary">{country_Name}</span>

                </Fade>

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