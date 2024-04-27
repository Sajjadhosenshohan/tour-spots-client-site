// import React from 'react';

import { useEffect, useState } from "react";
import { FaCity, FaLocationDot } from "react-icons/fa6";
import { GiMountainClimbing, GiTakeMyMoney } from "react-icons/gi";
import { MdTour } from "react-icons/md";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { useParams } from "react-router-dom";

const ViewDetails = () => {
    const { id ,} = useParams()
    console.log(id)

    const [details, setDetails] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/views/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setDetails(data)
            })
    }, [id])

    const { tourists_spot_name, country_Name, location, average_cost, totalVisitorsPerYear, travel_time, seasonality, short_description, image } = details

    return (
        // <div className="container mx-auto mt-8 mb-12">

        //     {/* <Helmet>
        //         <title>SinglePropertyDetail: {id}</title>
        //     </Helmet> */}

        //     <div data-aos="fade-down" className="max-w-3xl mx-auto border-2  shadow-md rounded-lg overflow-hidden flex flex-col ">
        //         <div className="w-full flex items-center">
        //             <img src={image} alt={tourists_spot_name} className="w-full h-64 object-cover object-center rounded-lg" />
        //         </div>
        //         <div className="p-6 flex flex-col justify-between ">

        //             <div>
        //                 <h2 className="text-3xl font-bold text-gray-800  mb-4">{tourists_spot_name}</h2>

        //                 <h2 className="text-2xl font-medium text-gray-800 d mb-4">{location}</h2>

        //                 <h2 className="text-2xl font-medium text-gray-800 d mb-4">{country_Name}</h2>


        //                 <p className="text-lg text-gray-600  mb-4">{short_description}</p>

        //                 <div className="flex justify-between items-center mb-4">
        //                     <span className="font-bold text-xl text-gray-800 dark:text-white">{average_cost}</span>
        //                     <span className={`px-3 py-1 bg-primary text-white`}>{seasonality}</span>
        //                 </div>

        //                 <p className="text-lg text-gray-600  mb-2">Area: {travel_time}</p>
        //                 <p className="text-lg text-gray-600  mb-4">Location: {location}</p>
        //             </div>


        //             <div className="mt-4">
        //                 <p className="text-xl font-bold text-gray-800 mb-4">totalVisitorsPerYear:</p>

        //                 {totalVisitorsPerYear}
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div className="relative  rounded overflow-hidden shadow-lg m-4 flex gap-5">

            <div>
                <img src={image} alt="Siem Reap" className="w-full h-48 object-cover" />

                <span className="absolute top-0 right-0 bg-red-400 rounded-sm p-2">{country_Name}</span>
            </div>

            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{tourists_spot_name}</div>

                <h2 className="w-2/3 mb-4">{short_description}</h2>

                <div className="mb-4 grid grid-cols-1 md:grid-cols-2">
                    {/* <p className="text-gray-700">Average Cost: {average_cost}</p> */}
                    <div className="flex gap-2 items-center  justify-start mb-2">
                        <FaLocationDot className=" text-secondary" />
                        <p className="text-gray-700  ">
                            {`${country_Name}`}</p>
                    </div>

                    <div className="flex gap-2 items-center  justify-start mb-2">
                        <FaCity className=" text-secondary" />
                        <p className="text-gray-700  ">
                            {`${location}`}</p>
                    </div>

                    <div className="flex gap-2 items-center  justify-start mb-2">
                        <TiWeatherPartlySunny className=" text-secondary" />
                        <p className="text-gray-700">Average_cost: {average_cost}</p>
                    </div>

                    <div className="flex gap-2 items-center  justify-start mb-2">
                        <GiMountainClimbing className=" text-secondary" />
                        <p className="text-gray-700">TotalVisitorsPerYear: {totalVisitorsPerYear}</p>
                    </div>
                    {/* _______________ */}

                    <div className="flex gap-2 items-center  justify-start mb-2">
                        <GiTakeMyMoney className=" text-secondary" />
                        <p className="text-gray-700">Seasonality: {seasonality}</p>
                    </div>
                    {/* ____________ */}

                    <div className="flex gap-2 items-center  justify-start mb-2">
                        <MdTour className=" text-secondary" />
                        <p className="text-gray-700">Travel time: {travel_time}</p>
                    </div>

                    {/* <p className="text-gray-700">Travel Time: {travel_time}</p> */}

                </div>
                {/* <Link to={`/viewDetails/${_id}`}>
                <button className="bg-secondary hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full text-center">View details</button>
            </Link> */}
            </div>
        </div>
    );
};

export default ViewDetails;