import React, {useState} from 'react'
import {AiOutlineArrowLeft} from "react-icons/ai"

//redux
import {useSelector} from "react-redux";


function CheckoutNavbar() {

    const reduxState = useSelector((globalState) => globalState.user.user.user);

    return (
        <>
            <nav className='p-4 bg-white shadow-md w-full items-center'>
                <div className='container px-4 md:px-20 mx-auto'>
                    <div className='flex items-center justify-between w-full'>
                        <AiOutlineArrowLeft />
                        <div classname='w-28'>
                            <img src='https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png' alt='logo' className='w-full h-full'/>
                        </div>
                        <div className='flex items-center gap-3'>
                            <div className='border border-gray-300 text-zomato-400 w-12 h-12 rounded-full'>
                                <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.shareicon.net%2Fdata%2F512x512%2F2016%2F08%2F18%2F814068_face_512x512.png&imgrefurl=https%3A%2F%2Fwww.shareicon.net%2Fface-user-character-avatar-harry-potter-814068&tbnid=Nu6BgfjM2-mVSM&vet=12ahUKEwjvjaKpoZv1AhWW6jgGHeeACyMQMygqegUIARCiAg..i&docid=y4nQC-PdIc3YkM&w=512&h=512&q=avatar&hl=en&ved=2ahUKEwjvjaKpoZv1AhWW6jgGHeeACyMQMygqegUIARCiAg" alt={reduxState?.email} className='w-full h-full rounded-full object-cover'/>
                            </div>
                            {reduxState?.fullName}
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default CheckoutNavbar
