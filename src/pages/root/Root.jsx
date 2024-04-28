// import React from 'react';

import { Outlet } from "react-router-dom";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

const Root = () => {
    // const navigation = useNavigation()
    
    return (
        <div className="max-w-[85%] mx-auto">
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;