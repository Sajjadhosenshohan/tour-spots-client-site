import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Firebase/AuthProvider";

const AddTourists = () => {
    const { user } = useContext(AuthContext)
   

    const handleAddCoffee = event => {
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
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(booking),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId.length > 0) {
                    Swal.fire({
                        title: 'success!',
                        text: 'Do you want to continue',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })

        // fetch('https://coffee-store-server-rekkhyg25-shohans-projects-b5403d71.vercel.app/coffee', {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //         // 'Content-Type': 'application/x-www-form-urlencoded',
        //       },
        //     body: JSON.stringify(newCoffee),
        // })
        // .then(res => res.json())
        // .then(data => {
        //     console.log(data)
        //     if(data.insertedId.length > 0){
        //         Swal.fire({
        //             title: 'Success!',
        //             text: 'User added successfully',
        //             icon: 'success',
        //             confirmButtonText: 'Cool'
        //           })
        //     }

        //     form.reset()
        // })
    }

    // Swal.fire({
    //     title: 'Error!',
    //     text: 'Do you want to continue',
    //     icon: 'error',
    //     confirmButtonText: 'Cool'
    //   })
    return (
        <div className="bg-[#F4F3F0] md:p-24">
            <h1 className='text-4xl  font-bold text-center mb-5'>Tour Booking Form</h1>

            <form onSubmit={handleAddCoffee} className="grid grid-cols-1 md:grid-cols-2 gap-6">

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

                {/* country_Name*/}
                <div className="">
                    <label className="label">
                        <span>country_Name</span>
                    </label>
                    <input type="text" placeholder="country_Name" name="country_Name" className="input input-bordered w-full" />
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
                <div className="md:col-span-2">
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
                <div className="  md:col-span-2">
                    <label className="label">
                        <span>short description</span>
                    </label>
                    <textarea type="text" placeholder="short description" name="short_description" className="input input-bordered w-full" />
                </div>


                {/* image */}
                <div className="  md:col-span-2">
                    <label className="label">
                        <span>Image </span>
                    </label>
                    <input type="text" placeholder="image" name="image" className="input input-bordered w-full" />
                </div>

                {/* button */}
                <div className=" w-full md:col-span-2 rounded-md">
                    <input type="submit" value="Booking now" className="btn bg-[#D2B48C] btn-block text-[#331A15] text-2xl" />
                </div>
            </form>
        </div>
    );
};

export default AddTourists;