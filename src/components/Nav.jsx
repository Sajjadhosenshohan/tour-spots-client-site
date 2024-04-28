import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Firebase/AuthProvider";
import { useContext } from "react";
// import { Tooltip } from 'react-tooltip'
import { Tooltip } from 'react-tooltip';
const Nav = () => {
    const { logout, user } = useContext(AuthContext);


    const Links = <>
        <li>
            <NavLink to="/" className={({ isActive }) => isActive ? 'border-2 border-primary text-primary rounded-lg font-bold' : 'font-bold'}>
                Home</NavLink>
        </li>

        <li>
            <NavLink to="/allTour" className={({ isActive }) => isActive ? 'border-2 border-primary text-primary rounded-lg font-bold' : 'font-bold'}>All Tourists Spot</NavLink>
        </li>

        <li><NavLink to="/addTour" className={({ isActive }) => isActive ? 'border-2 border-primary text-primary rounded-lg font-bold' : 'font-bold'}>
            Add Tourists Spot
        </NavLink></li>

        <li><NavLink to="/myList" className={({ isActive }) => isActive ? 'border-2 border-primary text-primary rounded-lg font-bold' : 'font-bold'}>
            My List
        </NavLink></li>
    </>


    return (
        <>
            <div className="navbar bg-base-100">

                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className=" menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52">
                            {Links}
                        </ul>
                    </div>
                    <Link to='/' className=" flex items-center md:font-bold  text-xl md:text-3xl uppercase">
                        {/* <HiHome className="text-primary" /> */}


                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-green-400 ">GoWilds</span>


                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {Links}
                    </ul>
                </div>



                <div className="navbar-end">

                    {
                        user ? <div className="dropdown dropdown-end flex justify-center items-center gap-2">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar hover:ring-2  hover:ring-green-500">
                                <div className="w-10 rounded-full">



                                    <img className="my-anchor-element-class" src={user?.photoURL || "https://i.ibb.co/fYRGNg6/profile.jpg"}

                                        // title={(user?.displayName) || 'Name not found'}
                                        alt="User avatar"


                                    />

                                    
                                
                                    <Tooltip
                                        // Don't forget the `.`!
                                        anchorSelect=".my-anchor-element-class"


                                        content={ ((user?.displayName) || 'Name not found')}

                                        style={{ backgroundColor: "#23BE0A", color: "white" }}
                                    />

                                </div>
                            </label>

                            <button onClick={logout} className="font-medium text-white text-lg md:text-xl md:pb-2 md:px-4 py-1 px-2 rounded-lg bg-primary text-center">
                                Logout
                            </button>


                        </div>
                            :
                            <div className="space-x-2">
                                <Link to='/signIn' >
                                    <button className="font-medium text-white text-lg md:text-xl md:pb-2 md:px-4 py-1 px-2 rounded-lg bg-primary text-center">Login</button>

                                </Link>
                                <Link to='/SignUp' >
                                    <button className="font-medium text-white text-lg md:text-xl md:pb-2 md:px-4 py-1 px-2 rounded-lg bg-primary text-center">Register</button>

                                </Link>
                            </div>
                    }
                </div>
            </div>


        </>
    );
};

export default Nav;