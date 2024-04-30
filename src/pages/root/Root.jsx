// import React from 'react';

import { Outlet } from "react-router-dom";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

const Root = () => {


    return (
        <div>
            <div className="max-w-[85%] mx-auto space-y-8 md:space-y-12 rounded-lg ">
                <Nav></Nav> 
                <Outlet ></Outlet>
            </div>
            <div className="bg-[#1D231F] mt-8 md:mt-12 rounded">
                <Footer ></Footer>
            </div>
        </div>
    );
};

export default Root;

// bg-[#1D231F]