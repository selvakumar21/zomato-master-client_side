import React from 'react';
import {useLocation, useParams, Link} from 'react-router-dom';
import classnames from 'classnames';

function Tab(props) {
    const {id} = useParams();

    return(
        <Link to={`/restaurant/${id}/${props.route}`}>
            <div className={classnames(
                "text-gray-500 relative font-semibold",
                {
                    "text-zomato-400 font-semibold":props.isActive,
                }
            )}>
                <h3 className='text-lg md:text-xl'>{props.title}</h3>
            </div>
        </Link>
    )
}


function Tabs() {

    const location = useLocation();
    const currentPath = location.pathname;

    const tabs= [
        {
            title: "Overview",
            route: "overview",
            isActive: currentPath.includes("overview")
        },
        {
            title: "Order online",
            route: "order-online",
            isActive: currentPath.includes("order-online")
        },
        {
            title: "Review",
            route: "review",
            isActive: currentPath.includes("review")
        },
        {
            title: "Menu",
            route: "menu",
            isActive: currentPath.includes("menu")
        },
        {
            title: "Photos",
            route: "photos",
            isActive: currentPath.includes("photos")
        }
    ]
    return (
        <>
            <div className='flex relative items-center pb-4 gap-8 md:gap-20 lg:overflow-auto border-b-2'>
                {tabs.map((tab, index) =>(
                    <Tab {...tab} key={index} />
                ))}
            </div>
        </>
    )
}

export default Tabs
