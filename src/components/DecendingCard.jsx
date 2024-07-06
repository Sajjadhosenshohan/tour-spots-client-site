// import React from 'react';

// import { FaLocationDot } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { GiTakeMyMoney } from "react-icons/gi";
import { MdTour } from "react-icons/md";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { Link } from "react-router-dom";
import Btn from "./Btn";

const DecendingCard = ({ allTour }) => {
    const { _id, tourists_spot_name, average_cost, totalVisitorsPerYear, travel_time, seasonality, image, country_Name } = allTour

    // console.log(allTour)


    return (

        <div className="relative bg-white text-black rounded overflow-hidden shadow-lg m-4 
         cursor-pointer group   hover:bg-secondary transition-all duration-300 
        ">
            <img src={image} alt="Siem Reap" className="w-full h-48 object-cover group-hover:scale-110 
                transition aspect-square " />

            <span className="absolute top-2 right-2 bg-[#ff4a38] border-2 hover-no-bg rounded-full text-white p-2 transition-all duration-300 border-primary">{average_cost}</span>

            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{country_Name}</div>
                {/* <div className="font-bold text-xl mb-2">{tourists_spot_name}</div> */}


                <div className="mb-4">
                    {/* <p className="text-gray-700">Average Cost: {average_cost}</p> */}

                    <div className="flex gap-2 items-center text-lg  justify-start mb-4">
                        <FaLocationDot className=" text-primary" />
                        <p className=" text-base "><span className='text-slate-900'>Spot name: </span>
                            <span className="font-semibold">{tourists_spot_name}</span>
                        </p>
                    </div>

                    <div className="flex gap-2 items-center text-lg  justify-start mb-4">
                        <GiTakeMyMoney className=" text-primary" />
                        <p className=" text-base "><span className='text-slate-900'>Average cost: </span>
                            <span className="font-semibold">{average_cost}</span>
                        </p>
                    </div>

                    <div className="flex gap-2 items-center text-lg  justify-start mb-4">
                        <TiWeatherPartlySunny className=" text-primary" />
                        <p className=" text-base "><span className='text-slate-900'>Total Visitors PerYear: </span>
                            <span className="font-semibold">{totalVisitorsPerYear}</span>
                        </p>
                    </div>

                    <div className="flex gap-2 items-center text-lg  justify-start mb-4">
                        <TiWeatherPartlySunny className=" text-primary" />
                        <p className=" text-base "><span className='text-slate-900'>Seasonality: </span>
                            <span className="font-semibold">{seasonality}</span>
                        </p>
                    </div>
                    {/* ____________ */}
                    <div className="flex gap-2 items-center text-lg  justify-start mb-4">
                        <MdTour className=" text-primary" />
                        <p className=" text-base "><span className='text-slate-900'>Travel time: </span>
                            <span className="font-semibold">{travel_time}</span>
                        </p>
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

export default DecendingCard;