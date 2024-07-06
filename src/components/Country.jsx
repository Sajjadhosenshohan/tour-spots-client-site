import { FaGlobe } from "react-icons/fa6";
// import { MdFlightTakeoff } from "react-icons/md";
import { PiChatCenteredTextFill } from "react-icons/pi";
import { NavLink } from "react-router-dom";

const Country = ({ country }) => {

    const { country_Name, short_description, image } = country
    return (
        <NavLink to={`/target/${country_Name}`}>
            <div className="min-[360px] flex flex-col rounded overflow-hidden shadow-lg m-4 bg-white text-black  relative cursor-pointer group  hover:bg-secondary transition-all duration-300 ">
                <div>
                    <div className="h-48">
                        <img src={image} alt="Siem Reap" className=" w-full h-full object-cover bg-center group-hover:scale-110 
                transition aspect-square " />
                    </div>

                </div>



                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 flex items-center ">
                        <span className="mr-3 text-primary"><FaGlobe /></span> {country_Name}
                    </div>
                    <div className=" mb-2 flex items-start">
                        <span className="mr-3 text-primary font-bold text-xl"><PiChatCenteredTextFill /></span> {short_description}
                    </div>
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