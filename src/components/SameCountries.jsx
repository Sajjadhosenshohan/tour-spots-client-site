
import { GiTakeMyMoney } from "react-icons/gi";
import { MdTour } from "react-icons/md";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { Link } from "react-router-dom";

const SameCountries = ({ detail }) => {

    const { _id, tourists_spot_name, location, average_cost, totalVisitorsPerYear, travel_time, seasonality, image, country_Name, short_description } = detail

    


    return (

        <div className="relative  rounded overflow-hidden shadow-lg m-4">
            <img src={image} alt="Siem Reap" className="w-full h-48 object-cover" />

            <span className="absolute top-0 right-0 bg-red-400 rounded-sm p-2">{average_cost}</span>

            <div className="px-6 py-4 space-y-4">
                <div>
                    <div className="font-bold text-xl mb-2">{country_Name}</div>
                    <div className="font-bold text-xl mb-2">{tourists_spot_name}</div>
                </div>
                <div className="font-bold text-xl mb-2">{location}</div>
                <p className="">{short_description}</p>

                <div className="flex gap-2 items-center  justify-start mb-2">
                    <GiTakeMyMoney className=" text-primary" />
                    <p className="text-gray-700">Average_cost: {average_cost}</p>
                </div>

                <div className="mb-4">
                    
                    <div className="flex gap-2 items-center  justify-start mb-2">
                        <TiWeatherPartlySunny className=" text-primary" />
                        <p className="text-gray-700">TotalVisitorsPerYear: {totalVisitorsPerYear}</p>
                    </div>
                    {/* _______________ */}

                    <div className="flex gap-2 items-center  justify-start mb-2">
                        <TiWeatherPartlySunny className=" text-primary" />
                        <p className="text-gray-700">Seasonality: {seasonality}</p>
                    </div>
                    {/* ____________ */}

                    <div className="flex gap-2 items-center  justify-start mb-2">
                        <MdTour className=" text-primary" />
                        <p className="text-gray-700">Travel time: {travel_time}</p>
                    </div>

                    {/* <p className="text-gray-700">Travel Time: {travel_time}</p> */}

                </div>
                <Link to={`/viewDetails/${_id}`}>
                    <button className="bg-primary hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full text-center">View details</button>
                </Link>
            </div>
        </div>

    );
};

export default SameCountries;