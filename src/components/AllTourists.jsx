import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import DecendingCard from "./DecendingCard";
import { RiArrowDropDownLine } from "react-icons/ri";
import { AuthContext } from "../Firebase/AuthProvider";
import { Fade } from "react-awesome-reveal";
import { Helmet } from "react-helmet";


const AllTourists = () => {
    // loader
    const LoadInfo = useLoaderData();
    const [allTourSpot, setAllTourSpot] = useState(LoadInfo)

    const { loading } = useContext(AuthContext)


    
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

    if (loading) {
        return <div className="flex items-center justify-center my-[150px]">
            <div className="md:w-28 md:h-28 w-12 h-12 border-4 border-dashed rounded-full animate-spin dark:border-primary"></div>
        </div>

    }



    return (
        <div className="mt-12 mb-24 ">
            <Helmet>
                <title>All Tourist spots</title>
            </Helmet>
            <div className="text-center  mx-auto w-2/3 md:w-full">
                <Fade direction="left">
                    <h2 className="font-bold text-4xl mb-3" >Explore All Tourist Spot</h2>
                    <p>Discover new adventures around the global.</p>
                </Fade>
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
                        <li onClick={() => handleFilter('ascending')}><a>Price High to Low</a></li>
                        <li onClick={() => handleFilter('descending')}><a>Price Low to High</a></li>

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