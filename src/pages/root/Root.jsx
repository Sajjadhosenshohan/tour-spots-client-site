// import React from 'react';

import { Outlet } from "react-router-dom";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

const Root = () => {


    return (
        <div className="">
            <div className="max-w-[85%] mx-auto ">
                <Nav></Nav>
                <div className="min-h-[calc(100vh - 723px)]">
                    <Outlet ></Outlet>
                </div>
            </div>
            <div className=" mt-8 md:mt-12 rounded">
                <Footer ></Footer>
            </div>
        </div>
    );
};

export default Root;

// bg-[#1D231F]