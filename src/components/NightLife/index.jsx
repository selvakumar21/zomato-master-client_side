import React from 'react'

//component
import NightLifeCarousel from './NightLifeCarousel';

function NightLife() {
    return (
        <div className='mb-5'>
            <h1 className='text-xl my-4 md:my-8 md:text-3xl md:font-semibold'>
                Nightlife Restaurants in Delhi NCR
            </h1>
            <NightLifeCarousel />
        </div>
    )
}

export default NightLife
