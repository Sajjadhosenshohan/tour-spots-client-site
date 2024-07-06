import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { GiTakeMyMoney } from "react-icons/gi";
import { MdTour } from "react-icons/md";
import Btn from "./Btn";
const SingleCardByUser = ({ tour }) => {

    const { _id, tourists_spot_name, country_Name, location, average_cost, travel_time, seasonality, image } = tour

    // console.log(tour)
    return (
        <div className="relative cursor-pointer group rounded overflow-hidden shadow-lg  hover:bg-secondary transition-all duration-300 bg-white text-black">
            <img src={image} alt="Siem Reap" className="w-full h-48 object-cover group-hover:scale-110 
                transition aspect-square " />

            <span className="absolute top-2 right-2 bg-[#ff4a38] border-2 hover-no-bg rounded-full text-white p-2 transition-all duration-300 border-primary">
                {country_Name}
            </span>

            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 ">{tourists_spot_name}</div>

                <div className="flex gap-2 items-center text-lg  justify-start mb-2">
                    <FaLocationDot className=" text-primary" />
                    <p className=" text-base "><span className='text-slate-900'>Location: </span>
                        <span className="font-semibold">{`${location}, ${country_Name}`}</span>
                    </p>
                </div>

                <div className="mb-4">
                    {/* <p className="text-gray-700">Average Cost: {average_cost}</p> */}

                    <div className="flex text-lg gap-2 items-center  justify-start mb-2">
                        <TiWeatherPartlySunny className=" text-primary" />
                        <p><span className='text-slate-900'>Average_cost:</span> <span className="font-semibold">{average_cost}</span></p>
                    </div>
                    {/* _______________ */}
                    <div className="flex text-lg gap-2 items-center  justify-start mb-2">
                        <GiTakeMyMoney className=" text-primary" />
                        <p><span className='text-slate-900'>Seasonality: </span> <span className="font-semibold">{seasonality}</span></p>
                    </div>
                    {/* ____________ */}

                    <div className="flex text-lg gap-2 items-center  justify-start mb-2">
                        <MdTour className=" text-primary" />
                        <p><span className='text-slate-900'>Travel time: </span> <span className="font-semibold">{travel_time}</span></p>
                    </div>
                    {/* <p className="text-gray-700">Travel Time: {travel_time}</p> */}

                </div>
                <Link to={`/viewDetails/${_id}`}>
                    <div className='w-full'>
                        <Btn title="View details" />
                    </div>

                </Link>
            </div>
        </div>

    );
};

export default SingleCardByUser;