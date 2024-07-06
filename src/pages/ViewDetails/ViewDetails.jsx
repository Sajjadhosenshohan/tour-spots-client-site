// import React from 'react';

import { useEffect, useState } from "react";
// import { Helmet } from "react-helmet";
import { FaGlobe } from "react-icons/fa";
import { FaCity, FaLocationDot } from "react-icons/fa6";
import { GiMountainClimbing, GiTakeMyMoney } from "react-icons/gi";
import { MdTour } from "react-icons/md";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { useParams } from "react-router-dom";

const ViewDetails = () => {
    const {id} = useParams()
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

    console.log(29,details)
    return (
        <div className=" relative  rounded overflow-hidden shadow-lg m-4 p-6  dark:bg-[#f4f3f0] dark:text-gray-800">

            <div className=" flex flex-col md:flex-row gap-6">

                <div className="flex items-center justify-center">
                    <img src={image} alt="Siem Reap" className="w-full h-48 object-cover" />

                </div>


                <div className="border-primary  border-b-2  pt-6  md:border-l-2  md:border-b-0 md:pt-0   md:pl-6">
                    <div className="font-bold text-xl flex gap-2 items-center mb-2">
                        <span className=" text-primary"><FaGlobe /></span>

                        <span className="absolute top-0 hidden md:block md:right-0  bg-red-400 rounded-sm p-2 ">{country_Name}</span>

                        <span>{country_Name}</span>
                    </div>

                    <h2 className="w-2/3 mb-4">{short_description}</h2>

                    <div className=" grid grid-cols-1 md:grid-cols-2">

                        <div className="flex gap-2 items-center  justify-start mb-2">
                            <FaLocationDot className=" text-primary" />
                            <p className="text-gray-700  ">
                                {`${tourists_spot_name}`}</p>
                        </div>

                        <div className="flex gap-2 items-center  justify-start mb-2">
                            <FaCity className=" text-primary" />
                            <p className="text-gray-700  ">
                                {`${location}`}</p>
                        </div>

                        <div className="flex gap-2 items-center  justify-start mb-2">
                            <TiWeatherPartlySunny className=" text-primary" />
                            <p className="text-gray-700">Average_cost: {average_cost}</p>
                        </div>

                        <div className="flex gap-2 items-center  justify-start mb-2">
                            <GiMountainClimbing className=" text-primary" />
                            <p className="text-gray-700">TotalVisitorsPerYear: {totalVisitorsPerYear}</p>
                        </div>
                        {/* _______________ */}

                        <div className="flex gap-2 items-center  justify-start mb-2">
                            <GiTakeMyMoney className=" text-primary" />
                            <p className="text-gray-700">Seasonality: {seasonality}</p>
                        </div>
                        {/* ____________ */}

                        <div className="flex gap-2 items-center  justify-start mb-2">
                            <MdTour className=" text-primary" />
                            <p className="text-gray-700">Travel time: {travel_time}</p>
                        </div>


                    </div>

                </div>
            </div>
        </div>
    );
};

export default ViewDetails;