// import { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../Firebase/AuthProvider";
import SingleCardByUser from "./SingleCardByUser";
import { Fade } from "react-awesome-reveal";
const TourSection = ({ tourInfos, setTourInfos }) => {


    return (
        <div className="mt-24">
            <div className="text-center mb-12 mx-auto w-2/3 md:w-full">
                <Fade direction="left">
                    <h2 className="font-bold text-2xl md:text-4xl mb-3 " >Discover Latest Tourists Spots</h2>
                    <p>Treat yourself with a journey to your inner self. We promise, you will enjoy every step you make.</p>
                </Fade>
                
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