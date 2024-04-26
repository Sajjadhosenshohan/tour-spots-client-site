import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { GiTakeMyMoney } from "react-icons/gi";
import { MdTour } from "react-icons/md";
const SingleCardByUser = ({ tour }) => {

    const { _id, tourists_spot_name, country_Name, location, average_cost, totalVisitorsPerYear, travel_time, seasonality, short_description, image } = tour

    console.log(tour)
    return (
        // <div  className="relative  bg-white  shadow-lg rounded-lg overflow-hidden mx-auto border-2 flex-1">
        //     <img className=" w-full h-56 object-cover object-center" src={image}
        //      alt="Townhouse Image" />

        //     <span className="absolute px-3 py-1 bg-red-500 text-white rounded-sm uppercase text-xs font-semibold top-0 left-0">{country_Name}</span>

        //     <div className="py-4 px-6">
        //         <h2 className=" text-lg font-semibold text-gray-800  mb-2">{tourists_spot_name}</h2>

        //         <p className="text-sm text-gray-600  mb-4">{location}</p>

        //         <div className="flex justify-between items-center">
        //             <span className="font-bold text-xl text-gray-800 ">{average_cost}</span>

        //         </div>

        //         <div className="mt-4">
        //             <p className="text-sm text-gray-600 d">Facilities:</p>
        //             <ul className="text-sm text-gray-600  pl-4">

        //                 {/* {
        //                     facilities.map((single, idx) => <li className="list-disc" key={idx}>{single}</li>)
        //                 } */}
        //             </ul>
        //         </div>

        //         <div className="mt-4">
        //             <Link to={`singleProperty/`} className="font-medium btn w-full text-white text-lg md:text-xl md:pb-2 md:px-4 py-1 px-2 rounded-lg bg-primary text-center">View Property</Link>
        //         </div>
        //     </div>
        // </div>
        // <div className=" p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">

        //     <img src={image} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
        //     <div className="mt-6 mb-2">
        //         <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600">Quisque</span>
        //         <h2 className="text-xl font-semibold tracking-wide">Nam maximus purus</h2>
        //     </div>
        //     <p className="dark:text-gray-800">Mauris et lorem at elit tristique dignissim et ullamcorper elit. In sed feugiat mi. Etiam ut lacinia dui.</p>
        // </div>
        <div className="relative  rounded overflow-hidden shadow-lg m-4">
            <img src={image} alt="Siem Reap" className="w-full h-48 object-cover" />

            <span className="absolute top-0 right-0 bg-red-400 rounded-sm p-2">{country_Name}</span>

            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{tourists_spot_name}</div>

                <div className="flex gap-2 items-center  justify-start mb-2">
                    <FaLocationDot className=" text-secondary" />
                    <p className="text-gray-700 text-base ">{`${location}, ${country_Name}`}</p>
                </div>

                <div className="mb-4">
                    {/* <p className="text-gray-700">Average Cost: {average_cost}</p> */}

                    <div className="flex gap-2 items-center  justify-start mb-2">
                        <TiWeatherPartlySunny className=" text-secondary" />
                        <p className="text-gray-700">Average_cost: {average_cost}</p>
                    </div>
                    {/* _______________ */}

                    <div className="flex gap-2 items-center  justify-start mb-2">
                        <GiTakeMyMoney  className=" text-secondary" />
                        <p className="text-gray-700">Seasonality: {seasonality}</p>
                    </div>
                    {/* ____________ */}

                    <div className="flex gap-2 items-center  justify-start mb-2">
                        <MdTour  className=" text-secondary" />
                        <p className="text-gray-700">Travel time: {travel_time}</p>
                    </div>

                    {/* <p className="text-gray-700">Travel Time: {travel_time}</p> */}

                </div>
                <Link to={`/viewDetails/${_id}`}>
                    <button className="bg-secondary hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full text-center">View details</button>
                </Link>
            </div>
        </div>

    );
};

export default SingleCardByUser;