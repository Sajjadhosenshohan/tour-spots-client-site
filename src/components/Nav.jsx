import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Firebase/AuthProvider";
import { useContext, useEffect, useState } from "react";
// import { Tooltip } from 'react-tooltip'

import { Tooltip } from 'react-tooltip';
import Btn from "./Btn";

const Nav = () => {
    const { logout, user } = useContext(AuthContext);

    const [theme, setTheme] = useState(
        localStorage.getItem('theme') ? localStorage.getItem('theme') : "light"
    );

    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }

    useEffect(() => {
        localStorage.setItem('theme', theme);
        const localTheme = localStorage.getItem('theme');
        document.querySelector('html').setAttribute("data-theme", localTheme)
    }, [theme])


    const Links = <>

        <li>
            <NavLink to="/" className={({ isActive }) => isActive ? 'border-2 border-primary text-primary  font-bold ' : 'font-bold '}>Home</NavLink>

        </li>

        <li>
            <NavLink to="/allTour" className={({ isActive }) => isActive ? 'border-2 border-primary text-primary  font-bold ' : 'font-bold '}>All Tourists Spot</NavLink>
        </li>

        <li><NavLink to="/addTour" className={({ isActive }) => isActive ? 'border-2 border-primary text-primary  font-bold ' : 'font-bold '}>
            Add Tourists Spot
        </NavLink></li>

        <li><NavLink to="/myList" className={({ isActive }) => isActive ? 'border-2 border-primary text-primary  font-bold ' : 'font-bold'}>
            My List
        </NavLink></li>



    </>
    return (
        <>
            <div className="navbar top-0  sticky bg-base-100 text-base-content z-50  shadow-lg py-2 ">

                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden pr-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className=" menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow  rounded-box w-52  bg-[#1f2237]">
                            {Links}
                        </ul>
                    </div>
                    <Link to='/' className=" flex items-center md:font-bold  ml-1 md:text-3xl ">


                        <span ><font color="text-red-500">Go</font>Wilds</span>


                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1  font-bold">
                        {Links}
                    </ul>
                </div>



                <div className="navbar-end ">


                    <div className="mr-3">
                        {/* <label className="cursor-pointer grid place-items-center">
                            <input onChange={handleToggle} checked={theme === 'light' ? false : true} type="checkbox" value="synthwave" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                            <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                            <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                        </label> */}

                        <label className="swap swap-rotate">
                            
                            <input onChange={handleToggle} type="checkbox" className="theme-controller " value="synthwave" />

                            {/* sun icon */}
                            <svg
                                className="swap-off h-10 w-10 fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24">
                                <path
                                    d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                            </svg>

                            {/* moon icon */}
                            <svg
                                className="swap-on h-10 w-10 fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24">
                                <path
                                    d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                            </svg>
                        </label>


                    </div>

                    {
                        user ? <div className="dropdown dropdown-end flex justify-center items-center gap-2">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar hover:ring-2  hover:ring-primary">
                                <div className="w-9 md:w-10 rounded-full">



                                    <img className="my-anchor-element-class" src={user?.photoURL || "https://i.ibb.co/fYRGNg6/profile.jpg"}

                                        alt="User avatar"


                                    />

                                    <Tooltip

                                        anchorSelect=".my-anchor-element-class"


                                        content={((user?.displayName) || 'Name not found')}

                                        style={{ backgroundColor: "#23BE0A", color: "white" }}
                                    />

                                </div>
                            </label>

                            {/* <button onClick={logout} className="font-medium text-white text-sm md:text-xl md:pb-2 md:px-4 py-1 px-2 rounded-lg bg-primary text-center">
                                Logout
                            </button> */}
                            <Btn func={logout} title='Logout' />


                        </div>
                            :
                            <div className="flex space-x-2">
                                <Link to='/signIn' >
                                    <button className="font-medium text-white text-base md:text-xl md:pb-2 md:px-4 py-1 px-1 rounded-lg bg-primary text-center   border-2 hover-no-bg transition-all duration-300 border-primary hover:text-primary">Login</button>

                                </Link>
                                <Link to='/SignUp' >
                                    <button className="font-medium text-white text-base md:text-xl md:pb-2 md:px-4 py-1 px-1 rounded-lg bg-primary text-center border-2 hover-no-bg transition-all duration-300 border-primary hover:text-primary">Register</button>

                                </Link>
                            </div>
                    }
                </div>
            </div>


        </>
    );
};

export default Nav;