import { useContext, useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import { AuthContext } from "../Firebase/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import { Helmet } from "react-helmet";
import { MdDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
const MyList = () => {

    const { user } = useContext(AuthContext)

    // console.log("mail", user.email)

    const [details, setDetails] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/myList/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setDetails(data)
            })
    }, [user])

    const handleDelete = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/delete/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)


                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Tour Spots List Has Been Deleted.",
                                icon: "success"
                            });

                            const remaining = details.filter(d => d._id !== _id)
                            setDetails(remaining)


                        }
                    })
            }
        });
    }


    return (
        <div className=" mt-12 mb-24 p-4 text-black lg:p-24  bg-white
        rounded-lg">
            <Helmet>
                <title>My list</title>
            </Helmet>
            <Fade direction="left">
                <h1 className="mb-12 text-xl md:text-3xl text-center font-bold">My list: <span className="bg-primary px-3 rounded font-normal">{details.length}</span></h1>
            </Fade>

            <div>
                <div className="overflow-x-auto ">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead className="bg-secondary">
                            <tr className="font-bold text-2xl text-slate-700">
                                <th>List no:</th>
                                <th>Tourist Spots</th>
                                <th>Country</th>
                                <th>Average cost</th>
                                <th>Modify</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody >
                            {/* row 1 */}
                            {
                                details.map((detail, index) => <tr key={index}>
                                    <th className="text-primary">{index + 1}

                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask md:w-24 h-24">
                                                    <img src={detail.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{detail.tourists_spot_name}</div>
                                                <div className="text-sm opacity-50"></div>
                                            </div>
                                        </div>
                                    </td>

                                    <td>
                                        {detail.country_Name}
                                    </td>
                                    <td>

                                        <span className="badge badge-ghost badge-sm bg-green-400">{detail.average_cost}</span>
                                    </td>

                                    <td>
                                        <Link to={`/updateForm/${detail._id}`}>
                                            <button
                                                className="btn btn-circle btn-outline border-2 border-[#ec4134] hover:bg-primary hover:border-[#ec4134] text-[#ec4134] hover:text-white text-2xl">
                                                {
                                                    <FiEdit />
                                                }
                                            </button>
                                        </Link>
                                    </td>
                                    <td>
                                        <button onClick={() => handleDelete(detail._id)} className="btn btn-circle btn-outline border-2 border-[#ec4134] hover:bg-primary hover:border-[#ec4134] text-[#ec4134] hover:text-white text-2xl">
                                            {
                                                <MdDelete/>
                                            }
                                        </button>
                                    </td>

                                    {/* <td>
                                        <button onClick={() => handleDelete(detail._id)} className="btn btn-circle btn-outline border-2 border-[#ec4134]">
                                            {
                                                <MdDelete className="text-[#ec4134] text-2xl" />
                                            }

                                        </button>
                                    </td> */}

                                    {/* <td>
                                        <Link to={`/update/${asset._id}`}>
                                            <button
                                                className="btn btn-circle btn-outline border-2 border-primary">
                                                {
                                                    <FiEdit className="text-primary text-2xl" />
                                                }
                                            </button>
                                        </Link>

                                    </td> */}
                                </tr>)
                            }

                        </tbody>
                        {/* foot */}

                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyList;