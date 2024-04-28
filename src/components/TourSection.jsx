// import { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../Firebase/AuthProvider";
import SingleCardByUser from "./SingleCardByUser";

const TourSection = ({tourInfos, setTourInfos}) => {
    

    return (
        <div className="my-24">
            <div className="text-center mb-12 mx-auto w-1/2 md:w-full">
                <h2 className="font-bold text-4xl mb-3 animate__animated animate__bounce" >Discover Latest Tourists Spots</h2>
                <p>Treat yourself with a journey to your inner self. We promise, you’ll enjoy every step you make.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
                {
                    (tourInfos.slice(0, 6)).map((tour, index) => <SingleCardByUser key={index}

                    tour={tour}
                    setTourInfos={setTourInfos}
                    ></SingleCardByUser>)
                }
            </div>

            
        </div>
    );
};

export default TourSection;