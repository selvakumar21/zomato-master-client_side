import React from 'react'

//component
import DiningCarousel from './DiningCarousel';

function Dining() {
    return (
        <div className='mb-5'>
            <h1 className='text-xl my-4 md:my-8 md:text-3xl md:font-semibold'>
                Dining-Out Restaurants in Vijay Nagar
            </h1>
            <DiningCarousel />
        </div>
    )
}

export default Dining
