// import React from 'react';

import { Outlet } from "react-router-dom";
import Nav from "../../components/Nav";

const Root = () => {
    return (
        <div className="max-w-[85%] mx-auto">
            <Nav></Nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;