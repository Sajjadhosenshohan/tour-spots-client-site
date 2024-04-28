import { FaGlobe } from "react-icons/fa6";
import { MdFlightTakeoff } from "react-icons/md";
import { Link } from "react-router-dom";

const Country = ({ country }) => {

    const { country_Name, short_description, image } = country
    return (
        <div className="relative flex flex-col rounded overflow-hidden shadow-lg m-4">
            <div>
                <img src={image} alt="Siem Reap" className="relative w-full h-48 object-cover" />
                <p className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-extrabold text-white text-3xl">{country_Name}</p>
            </div>

            <span className="absolute top-0 right-0 bg-white  rounded-full p-3 w-12 h-12 font-bold text-4xl text-[#F42B6F] flex justify-center items-center ">
                <MdFlightTakeoff />
            </span>

            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 flex items-center ">
                    <span className="mr-3 text-primary"><FaGlobe /></span> {country_Name}
                </div>

                <p className="mb-4">{short_description}</p>

                <Link to={`/target/${country_Name}`}>
                    <button className="bg-primary hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full text-center">View details</button>
                </Link>
            </div>
        </div>
    );
};

export default Country;