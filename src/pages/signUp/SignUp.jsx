
// import { useContext, useState } from "react";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link,  useNavigate, } from "react-router-dom";
import { AuthContext } from "../../Firebase/AuthProvider";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";
import { Helmet } from "react-helmet";
const SignUp = () => {
    
    const [showPass, setShowPass] = useState(false);
    const { createUser, logout } = useContext(AuthContext);
    const [error, setError] = useState();

    const navigate = useNavigate()



    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        const { email, password, } = data;

        if (password.length < 6) {
            return setError('Your password must be at least 6 characters')
        }

        if (!/[a-z]/.test(password)) {
            return setError('Your password must contain at least one small letter')
        }
        if (!/[A-Z]/.test(password)) {
            return setError('Your password must contain at least one Capital letter.')
        }

        createUser(email, password)
            .then(result => {
                console.log(result.user);
                if (result.user) {
                    toast.success("Register successfully!")
                    logout()
                    navigate("/signIn")
                }

            })
            .catch(error => {
                console.error(error)
            })


    }

    return (
        <div className="min-h-[50%] flex justify-center mb-5 bg-cover bg-center " style={{ backgroundImage: `url('https://i.ibb.co/GdDCf18/pexels-freestockpro-2166553.jpg')` }}>

        <Helmet>
            <title>GoWilds | Register</title>
        </Helmet>


        <div className="hero-content flex-col ">


            <div className="card shrink-0 w-full  max-w-md shadow-2xl   backdrop-blur-md bg-white/30">
                <Fade direction="left">
                <h1 className="text-2xl lg:text-5xl font-bold text-center mb-4 mt-4 animate__animated animate__bounceInLeft animation-duration: 2s px-4">Resister Now!</h1>
                </Fade>

                <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                    {/* name */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="name" className="input input-bordered"
                            {...register("name", { required: true })}
                        />

                        {errors.name && <span className='text-red-700 font-bold'>This field is required</span>}
                    </div>

                    {/* email */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="email" className="input input-bordered"
                            {...register("email", { required: true })}
                        />

                        {errors.email && <span className='text-red-700 font-bold'>This field is required</span>}
                    </div>

                    {/* photo */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" placeholder="photo" className="input input-bordered"
                            {...register("photo", { required: true })}
                        />

                        {errors.photo && <span className='text-red-700 font-bold'>This field is required</span>}
                    </div>

                    {/* password */}
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <div className=" relative flex justify-center items-center">
                            <input required type={showPass ? "text" : "password"}

                                placeholder="Password"
                                className="input input-bordered w-full"
                                {...register("password", { required: true })}

                            />
                            <span onClick={() => setShowPass(!showPass)} className=" font-bold text-3xl right-3 absolute ">

                                {
                                    showPass ? <FaEyeSlash /> : <FaRegEye />
                                }

                            </span>
                        </div>

                        <p className="text-red-700 font-bold">{error}</p>

                    </div>

                    <div className="form-control mt-6">
                        <button type="submit" className="font-medium text-white text-lg md:text-xl md:pb-2 md:px-4 py-1 px-2 rounded-lg bg-primary text-center">Register</button>
                    </div>

                </form>

                <div className="px-8 flex justify-between mb-5">
                    <p>Already Have Account?</p>
                    <Link to="/signIn" className="text-blue-700 underline">Login Now</Link>
                </div>

            </div>
        </div>
    </div>
    );
};

export default SignUp;