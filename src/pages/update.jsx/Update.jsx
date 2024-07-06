import { useContext, } from "react";
import { useLoaderData, } from "react-router-dom";
import { AuthContext } from "../../Firebase/AuthProvider";
import Swal from "sweetalert2";
import { Fade } from "react-awesome-reveal";

const Update = () => {

    const LoadUpdate = useLoaderData()

    const { _id, tourists_spot_name, country_Name, location, average_cost, totalVisitorsPerYear, travel_time, seasonality, short_description, image } = LoadUpdate
    console.log(11, LoadUpdate)

    // const { id } = useParams()
    const { user } = useContext(AuthContext)
    // const [update, setUpdate] = useState({})


    const handleUpdate = event => {
        event.preventDefault();
        const form = event.target

        const name = user?.displayName || 'name not found';

        const email = user?.email || 'email not found';

        const tourists_spot_name = form.tourists_spot_name.value;
        const country_Name = form.country_Name.value;
        const location = form.location.value;
        const average_cost = form.average_cost.value;
        const totalVisitorsPerYear = form.totalVisitorsPerYear.value;
        const travel_time = form.travel_time.value;
        const image = form.image.value;
        const short_description = form.short_description.value;
        const seasonality = form.seasonality.value;

        const updating = { name, email, tourists_spot_name, country_Name, location, average_cost, totalVisitorsPerYear, travel_time, seasonality, short_description, image }




        fetch(`http://localhost:5000/update/${_id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(updating),
        })
            .then(res => res.json())
            .then(data => {
                console.log('update', data)
                if (data.modifiedCount
                    > 0) {
                    Swal.fire({
                        title: 'Successfully updated!',
                        text: 'Do you want to continue',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }

            })

    }
    return (
        <div className="mt-12 mb-24 p-4 text-black lg:p-24  bg-[#F3F3F3]
        rounded-lg">
            <Fade direction="left">
            <h1 className='text-2xl md:text-4xl mx-auto  font-bold text-center mb-6 w-2/3 md:w-full dark:text-black'>Update Tourists Spot Form</h1>
            </Fade>
            
            <form onSubmit={handleUpdate} className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/*name*/}
                <div className="">
                    <label className="label">
                        <span>Your name
                        </span>
                    </label>
                    <input type="text" readOnly placeholder="Your name" name="name" defaultValue={user?.displayName} className="input input-bordered w-full " />
                </div>
                {/*email*/}
                <div className="">
                    <label className="label">
                        <span>Your email
                        </span>
                    </label>
                    <input type="text" readOnly placeholder="email" name="email" defaultValue={user?.email} className="input input-bordered w-full " />
                </div>
                {/*tourists_spot_name*/}
                <div className="">
                    <label className="label">
                        <span>tourists_spot_name
                        </span>
                    </label>
                    <input type="text" placeholder="tourists_spot_name" defaultValue={tourists_spot_name} name="tourists_spot_name" className="input input-bordered w-full " />
                </div>

                {/* country_Name*/}
                <div className="">
                    <label className="label">
                        <span>country_Name</span>
                    </label>
                    <input type="text" placeholder="country_Name"
                        defaultValue={country_Name}
                        name="country_Name" className="input input-bordered w-full" />
                </div>

                {/* location*/}
                <div className=" ">
                    <label className="label">
                        <span>location</span>
                    </label>
                    <input type="text" placeholder="location"
                        defaultValue={location}
                        name="location" className="input input-bordered w-full" />
                </div>

                {/* average_cost*/}
                <div className=" ">
                    <label className="label">
                        <span>average_cost</span>
                    </label>
                    <input type="text" placeholder="average_cost"
                        defaultValue={average_cost}
                        name="average_cost" className="input input-bordered w-full" />
                </div>

                {/* TotalVisitorsPerYear*/}
                <div className="">
                    <label className="label">
                        <span>totalVisitorsPerYear</span>
                    </label>
                    <input type="text" placeholder="totalVisitorsPerYear"
                        defaultValue={totalVisitorsPerYear}
                        name="totalVisitorsPerYear" className="input input-bordered w-full" />
                </div>



                {/* travel_time*/}
                <div className=" ">
                    <label className="label">
                        <span>travel_time</span>
                    </label>
                    <input type="text" placeholder="travel_time"
                        defaultValue={travel_time}
                        name="travel_time" className="input input-bordered w-full" />
                </div>



                {/* seasonality */}
                <div className="md:col-span-2">
                    <label className="label">
                        <span>Seasonality</span>
                    </label>
                    <select name="seasonality" defaultValue={seasonality} className="select select-bordered w-full">
                        <option disabled selected>seasonality</option>
                        <option>Winter</option>
                        <option>Autumn </option>
                        <option>Summer</option>
                        <option>Spring</option>
                    </select>
                </div>



                {/* short description*/}
                <div className="  md:col-span-2">
                    <label className="label">
                        <span>short description</span>
                    </label>
                    <textarea type="text" placeholder="short description"
                        defaultValue={short_description}
                        name="short_description" className="input input-bordered w-full" />
                </div>


                {/* image */}
                <div className="  md:col-span-2">
                    <label className="label">
                        <span>Image </span>
                    </label>
                    <input type="text" placeholder="image" name="image"
                        defaultValue={image}
                        className="input input-bordered w-full" />
                </div>

                {/* button */}
                <div className="col-span-1 md:col-span-2 flex justify-center">

                    <input type="submit" value="Update Tourist spot" className="w-1/2 font-medium text-white text-lg md:text-xl md:pb-2 md:px-4 py-1 px-2 rounded-lg bg-primary text-center"/>
                </div>
            </form>
        </div>
    );
};

export default Update;