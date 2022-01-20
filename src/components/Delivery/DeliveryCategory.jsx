import React from 'react'

function DeliverySmCard({image, title}) {
    return (
        <>
            <div className="lg:hidden bg-white shadow rounded-md w-24 h-52 md:w-56">
                <div className='w-full h-24'>
                    <img src={image} alt={title} className='w-full h-full object-cover object-center rounded-t-md'/>
                </div>
            <div>
                <h3 className='text-sm my-1 font-light text-center'>
                    {title}
                </h3>
            </div>
            </div>
        </>
    )
}

function  DeliveryLgCard({image, title}) {
    return(
        <>
        <div className='hidden lg:block w-64 px-9'>
            <div className='w-full h-52'>
            <img src={image} alt={title} className='w-full h-full object-cover object-center rounded-md'/>
            </div>
            <div>
                <h3 className='text-sm my-1 font-light text-center'>
                    {title}
                </h3>
            </div>
        </div>
        </>
    )
}

function DeliveryCategory(props) {
    return(
        <>
        <DeliverySmCard {...props}/>
        <DeliveryLgCard {...props}/>
        </>
    )
}
export default DeliveryCategory
