import { FaFlag, FaGlobe } from "react-icons/fa6";
// import { MdFlightTakeoff } from "react-icons/md";
import { PiChatCenteredTextFill } from "react-icons/pi";
import { NavLink } from "react-router-dom";

const Country = ({ country }) => {

    const { country_Name, short_description, image } = country
    return (
        <NavLink to={`/target/${country_Name}`}>
            <div className=" flex flex-col rounded overflow-hidden shadow-lg m-4">
                <div>
                    <div className="h-48">
                        <img src={image} alt="Siem Reap" className=" w-full h-full object-cover bg-center " />
                    </div>
                    <p className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-extrabold text-white text-3xl">{country_Name}</p>
                </div>

                

                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 flex items-center ">
                        <span className="mr-3 text-primary"><FaGlobe /></span> {country_Name}
                    </div>
                    <div className=" mb-2 flex items-start">
                        <span className="mr-3 text-primary font-bold text-xl"><PiChatCenteredTextFill /></span> {short_description}
                    </div>


                    {/* <button className="bg-primary hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full text-center">View details</button> */}

                    {/* https://i.ibb.co/NKx8GX8/thailand.jpg
                    https://i.ibb.co/vHYt0xy/combodia.jpg
                    https://i.ibb.co/9vPt0yG/indonesia.jpg
                    https://i.ibb.co/Zh3BsJX/bangladesh.jpg
                    https://i.ibb.co/pJX3H1H/malesyea.jpg
                    https://i.ibb.co/h7B6fr3/vietnam.jpg */}
                </div>
            </div>
        </NavLink>
    );
};

export default Country;