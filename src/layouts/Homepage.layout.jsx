import React from "react";
import Navbar from '../components/Navbar/index';
import FoodTab from "../components/FoodTab";

function HomeLayout({props, children}) {
    return (
        <>
            <Navbar />
            <FoodTab />
            <div className='container mx-auto px-4 lg:px-20'>{children}</div>
            
        </>
    );
}

export default HomeLayout;