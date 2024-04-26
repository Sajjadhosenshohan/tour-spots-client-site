import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import DecendingCard from "./DecendingCard";
// import SingleCardByUser from "./SingleCardByUser";

const AllTourists = () => {

    const LoadInfo = useLoaderData();
    const [allTourSpot, setAllTourSpot] = useState(LoadInfo)
    return (
        <div className="mt-24 mb-24">
            <div className="text-center mb-12 mx-auto w-1/2 md:w-full">
                <h2 className="font-bold text-4xl mb-3" >All tourist sport</h2>
                <p>All tourist sport</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
                {
                    allTourSpot.map((allTour, index) => <DecendingCard key={index}

                        allTour={allTour}
                        setAllTourSpot={setAllTourSpot}
                    ></DecendingCard>)
                }
            </div>


        </div>
    );
};

export default AllTourists;