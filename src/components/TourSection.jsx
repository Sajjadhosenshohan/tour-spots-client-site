import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Firebase/AuthProvider";
import SingleCardByUser from "./SingleCardByUser";

const TourSection = () => {
    const { user } = useContext(AuthContext)|| {};
  const [item, setItem] = useState([]);
  // console.log(user);

    useEffect(() => {
        fetch(`http://localhost:5000/allTour/${user.email}`)
          .then((res) => res.json())
          .then((data) => {
            console.log('response data', data)
            setItem(data);
          });
      }, [user]);
    return (
        <div className=" mt-[200px] md:mt-[150px] mb-24">
            <div className="text-center mb-12 mx-auto w-1/2 md:w-full">
                <h2 className="font-bold text-4xl mb-3 animate__animated animate__bounce" >Discover Latest Estates</h2>
                <p>Newest Properties Around You</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
                {
                    item.map((i, index) => <SingleCardByUser key={index}

                    item={item}
                    ></SingleCardByUser>)
                }
            </div>

            
        </div>
    );
};

export default TourSection;