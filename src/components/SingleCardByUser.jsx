import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { GiTakeMyMoney } from "react-icons/gi";
import { MdTour } from "react-icons/md";
const SingleCardByUser = ({ tour }) => {

    const { _id, tourists_spot_name, country_Name, location, average_cost,  travel_time, seasonality, image } = tour

    console.log(tour)
    return (
        <div className="relative  rounded overflow-hidden shadow-lg m-4 dark:bg-[#f4f3f0] dark:text-gray-800">
            <img src={image} alt="Siem Reap" className="w-full h-48 object-cover" />

            <span className="absolute top-0 right-0 bg-red-400 rounded-sm p-2">{country_Name}</span>

            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{tourists_spot_name}</div>

                <div className="flex gap-2 items-center  justify-start mb-2">
                    <FaLocationDot className=" text-primary" />
                    <p className=" text-base ">{`${location}, ${country_Name}`}</p>
                </div>

                <div className="mb-4">
                    {/* <p className="text-gray-700">Average Cost: {average_cost}</p> */}

                    <div className="flex gap-2 items-center  justify-start mb-2">
                        <TiWeatherPartlySunny className=" text-primary" />
                        <p className="text-base ">Average_cost: {average_cost}</p>
                    </div>
                    {/* _______________ */}

                    <div className="flex gap-2 items-center  justify-start mb-2">
                        <GiTakeMyMoney  className=" text-primary" />
                        <p className="text-base ">Seasonality: {seasonality}</p>
                    </div>
                    {/* ____________ */}

                    <div className="flex gap-2 items-center  justify-start mb-2">
                        <MdTour  className=" text-primary" />
                        <p className="text-base ">Travel time: {travel_time}</p>
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

export default SingleCardByUser;