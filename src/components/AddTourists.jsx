import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Firebase/AuthProvider";
import { Fade } from "react-awesome-reveal";
import { Helmet } from "react-helmet";

const AddTourists = () => {
    const { user } = useContext(AuthContext)

    // console.log("user ace", user)
    const handleAddTour = event => {
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

        const booking = { name, email, tourists_spot_name, country_Name, location, average_cost, totalVisitorsPerYear, travel_time, seasonality, short_description, image }

        fetch(`http://localhost:5000/allTour`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",

            },
            body: JSON.stringify(booking),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId.length > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'SuccessFully Added To Your List',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })

    }


    return (
        <div className="mt-12 mb-24 p-4 text-black lg:p-24  bg-[#F3F3F3]
        rounded-lg">

            <Helmet>
                <title>Add Tourist spots</title>
            </Helmet>
            <Fade direction="left">
                <h1 className='text-2xl md:text-4xl mx-auto  font-bold text-center mb-6 w-2/3 md:w-full dark:text-black'>Add Tourists Spot Form</h1>
            </Fade>

            <form onSubmit={handleAddTour} className="grid grid-cols-1 md:grid-cols-2 gap-4">

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
                    <input type="text" placeholder="tourists_spot_name" name="tourists_spot_name" className="input input-bordered w-full " />
                </div>

                {/* country_Name */}
                <div className="">
                    <label className="label">
                        <span>Country_Name</span>
                    </label>
                    <select name="country_Name" className="select select-bordered w-full">
                        <option disabled selected>country_Name</option>
                        <option>Bangladesh</option>
                        <option>Thailand </option>
                        <option>Indonesia</option>
                        <option>Malaysia</option>
                        <option>Vietnam</option>
                        <option>Cambodia</option>
                    </select>
                </div>

                {/* location*/}
                <div className=" ">
                    <label className="label">
                        <span>location</span>
                    </label>
                    <input type="text" placeholder="location" name="location" className="input input-bordered w-full" />
                </div>

                {/* average_cost*/}
                <div className=" ">
                    <label className="label">
                        <span>average_cost</span>
                    </label>
                    <input type="text" placeholder="average_cost" name="average_cost" className="input input-bordered w-full" />
                </div>

                {/* TotalVisitorsPerYear*/}
                <div className="">
                    <label className="label">
                        <span>totalVisitorsPerYear</span>
                    </label>
                    <input type="text" placeholder="totalVisitorsPerYear" name="totalVisitorsPerYear" className="input input-bordered w-full" />
                </div>



                {/* travel_time*/}
                <div className=" ">
                    <label className="label">
                        <span>travel_time</span>
                    </label>
                    <input type="text" placeholder="travel_time" name="travel_time" className="input input-bordered w-full" />
                </div>



                {/* seasonality */}
                <div className="col-span-1 md:col-span-2">
                    <label className="label">
                        <span>Seasonality</span>
                    </label>
                    <select name="seasonality" className="select select-bordered w-full">
                        <option disabled selected>seasonality</option>
                        <option>Winter</option>
                        <option>Autumn </option>
                        <option>Summer</option>
                        <option>Spring</option>
                    </select>
                </div>



                {/* short description*/}
                <div className="col-span-1  md:col-span-2">
                    <label className="label">
                        <span>short description</span>
                    </label>
                    <textarea type="text" placeholder="short description" name="short_description" className="input input-bordered w-full" />
                </div>


                {/* image */}
                <div className="col-span-1  md:col-span-2">
                    <label className="label">
                        <span>Image </span>
                    </label>
                    <input type="text" placeholder="image" name="image" className="input input-bordered w-full" />
                </div>

                {/* button */}
                <div className="col-span-1 md:col-span-2 flex justify-center">

                <input type="submit" value="Add Tourists Spot" className="w-1/2 font-medium text-white text-lg md:text-xl md:pb-2 md:px-4 py-1 px-2 rounded-lg bg-primary text-center" />
                </div>

            </form>
        </div>
    );
};

export default AddTourists;