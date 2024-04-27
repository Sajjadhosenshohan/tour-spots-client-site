import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import DecendingCard from "./DecendingCard";
import { RiArrowDropDownLine } from "react-icons/ri";
// import SingleCardByUser from "./SingleCardByUser";

const AllTourists = () => {
// loader
    const LoadInfo = useLoaderData();
    const [allTourSpot, setAllTourSpot] = useState(LoadInfo)

    console.log("hgijkhalihiu", allTourSpot)

    // state
    const [readAll2, setReadAll2] = useState(allTourSpot);



    const handleFilter = (filterType) => {
        

        if (filterType === 'all') {

            setReadAll2(allTourSpot);

        }
        else if (filterType === 'ascending') {

            const   filteredWishList = [...readAll2].sort((a, b) => b.average_cost.substring(1) - a.average_cost.substring(1));
            setReadAll2(filteredWishList);

        }
        else if (filterType === 'descending') {


            const   filteredWishList = [...readAll2].sort((a, b) => a.average_cost.substring(1) - b.average_cost.substring(1));
            setReadAll2(filteredWishList);
        }
    
        
    };



    return (
        <div className="mt-24 mb-24">
            <div className="text-center mb-12 mx-auto w-1/2 md:w-full">
                <h2 className="font-bold text-4xl mb-3" >All tourist sport</h2>
                <p>All tourist sport</p>
            </div>

            {/* button  */}
            <div className="mt-8 mb-10 flex  justify-center">

                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn m-1 font-bold text-white  bg-[#23BE0A]">
                        <h2>Sort By</h2>
                        <RiArrowDropDownLine />
                    </div>


                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li onClick={() => handleFilter('all')}><a>all</a></li>
                        <li onClick={() => handleFilter('ascending')}><a>ascending</a></li>
                        <li onClick={() => handleFilter('descending')}><a>descending</a></li>

                    </ul>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
                {
                    readAll2.map((allTour, index) => <DecendingCard key={index}

                        allTour={allTour}
                        setAllTourSpot={setAllTourSpot}
                    ></DecendingCard>)
                }
            </div>


        </div>
    );
};

export default AllTourists;