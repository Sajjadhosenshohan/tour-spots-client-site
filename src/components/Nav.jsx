import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Firebase/AuthProvider";
import { useContext, useEffect, useState } from "react";
// import { Tooltip } from 'react-tooltip'

import { Tooltip } from 'react-tooltip';

const Nav = () => {
    const { logout, user } = useContext(AuthContext);

    const [theme, seTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light');
    useEffect(() => {
        localStorage.setItem('theme', theme);
        const localTheme = localStorage.getItem('theme');
        document.querySelector('html').setAttribute('data-theme', localTheme);

    }, [theme]);



    console.log("navbar a user ??", user);

    const handleToggle = (e) => {
        if (e.target.checked) {
            seTheme('dark');
        }
        else {
            seTheme('light');
        }
    }


    const Links = <>

        <li>
            <NavLink to="/" className={({ isActive }) => isActive ? 'border-2 border-primary text-primary  font-bold my-anchor-element-classHome' : 'font-bold my-anchor-element-classHome'}>Home</NavLink>

        </li>

        <li>
            <NavLink to="/allTour" className={({ isActive }) => isActive ? 'border-2 border-primary text-primary  font-bold my-anchor-element-class2' : 'font-bold my-anchor-element-class2'}>All Tourists Spot</NavLink>
        </li>

        <li><NavLink to="/addTour" className={({ isActive }) => isActive ? 'border-2 border-primary text-primary  font-bold my-anchor-element-class3' : 'font-bold my-anchor-element-class3'}>
            Add Tourists Spot
        </NavLink></li>

        <li><NavLink to="/myList" className={({ isActive }) => isActive ? 'border-2 border-primary text-primary  font-bold my-anchor-element-class4' : 'font-bold my-anchor-element-class4'}>
            My List
        </NavLink></li>

        {/* Home */}
        <Tooltip
            anchorSelect=".my-anchor-element-classHome"
            content="Home"
            style={{ backgroundColor: "#23BE0A", color: "white" }}
        />
        {/* All Tourists Spot */}
        <Tooltip
            anchorSelect=".my-anchor-element-class2"
            content="All Tourists Spot"
            style={{ backgroundColor: "#23BE0A", color: "white" }}
        />
        {/* Add Tourists*/}
        <Tooltip
            anchorSelect=".my-anchor-element-class3"
            content="Add Tourists"
            style={{ backgroundColor: "#23BE0A", color: "white" }}
        />
        {/* My List*/}
        <Tooltip
            anchorSelect=".my-anchor-element-class4"
            content="My List"
            style={{ backgroundColor: "#23BE0A", color: "white" }}
        />
        

    </>
    return (
        <>
            <div className="navbar bg-[#f4f3f0] shadow-lg mt-8 rounded-lg">

                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden pr-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className=" menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow  rounded-box w-52 dark:text-gray-800 bg-white">
                            {Links}
                        </ul>
                    </div>
                    <Link to='/' className=" flex items-center md:font-bold  ml-1 md:text-3xl ">
                    

                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-green-400 ">GoWilds</span>


                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 dark:text-gray-800 ">
                        {Links}
                    </ul>
                </div>



                <div className="navbar-end ">


                    <div className="mr-3">
                        <label className="cursor-pointer grid place-items-center">
                            <input onChange={handleToggle} checked={theme === 'light' ? false : true} type="checkbox" value="synthwave" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                            <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                            <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                        </label>
                    </div>

                    {
                        user ? <div className="dropdown dropdown-end flex justify-center items-center gap-2">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar hover:ring-2  hover:ring-green-500">
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

                            <button onClick={logout} className="font-medium text-white text-sm md:text-xl md:pb-2 md:px-4 py-1 px-2 rounded-lg bg-primary text-center">
                                Logout
                            </button>


                        </div>
                            :
                            <div className="flex space-x-2">
                                <Link to='/signIn' >
                                    <button className="font-medium text-white text-base md:text-xl md:pb-2 md:px-4 py-1 px-1 rounded-lg bg-primary text-center">Login</button>

                                </Link>
                                <Link to='/SignUp' >
                                    <button className="font-medium text-white text-base md:text-xl md:pb-2 md:px-4 py-1 px-1 rounded-lg bg-primary text-center">Register</button>

                                </Link>
                            </div>
                    }
                </div>
            </div>


        </>
    );
};

export default Nav;