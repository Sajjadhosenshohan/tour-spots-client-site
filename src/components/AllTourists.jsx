import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import DecendingCard from "./DecendingCard";
import { RiArrowDropDownLine } from "react-icons/ri";
// import SingleCardByUser from "./SingleCardByUser";

const AllTourists = () => {
    // loader
    const LoadInfo = useLoaderData();
    const [allTourSpot, setAllTourSpot] = useState(LoadInfo)

    console.log(allTourSpot)

    // state
    const [tours, setTours] = useState(allTourSpot);



    const handleFilter = (filterType) => {


        if (filterType === 'all') {

            setTours(allTourSpot);

        }
        else if (filterType === 'ascending') {

            const filteredWishList = [...tours].sort((a, b) => b.average_cost.substring(1) - a.average_cost.substring(1));
            setTours(filteredWishList);

        }
        else if (filterType === 'descending') {


            const filteredWishList = [...tours].sort((a, b) => a.average_cost.substring(1) - b.average_cost.substring(1));
            setTours(filteredWishList);
        }


    };



    return (
        <div className="mt-12 mb-24">
            <div className="text-center mb-12 mx-auto w-1/2 md:w-full">
                <h2 className="font-bold text-4xl mb-3 " >Explore All Tourist Spot</h2>
                <p>Discover new adventures around the globe.</p>
            </div>

            {/* button  */}
            <div className="mt-8 mb-10 flex  justify-center">

                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn m-1 font-bold text-white  bg-[#23BE0A]">
                        <h2>Sort Price:</h2>
                        <RiArrowDropDownLine />
                    </div>


                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li onClick={() => handleFilter('all')}><a>all</a></li>
                        <li onClick={() => handleFilter('ascending')}><a>High to Low</a></li>
                        <li onClick={() => handleFilter('descending')}><a>Low to High</a></li>

                    </ul>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
                {
                    tours.map((allTour, index) => <DecendingCard key={index}

                        allTour={allTour}
                        setAllTourSpot={setAllTourSpot}
                    ></DecendingCard>)
                }
            </div>


        </div>
    );
};

export default AllTourists;