import React from 'react'
import beach from '../assets/beach.jpg'
import hill from '../assets/hill.jpg'
import BookingBox from '../components/BookingBox'

const HeroSection = () => {
  return (
    <>
        <div className='relative'>
            <div className='relative h-[70svh] min-h-[400px] overflow-hidden border-white rounded-2xl'>
                <img 
                src={hill}
                alt='Ocean view with palm trees and a beach' 
                className='absolute w-full h-full object-cover'/>
            </div>

            <div className='absolute left-1/2 -translate-x-1/2 flex justify-center bottom-18 w-auto h-auto'>
                <BookingBox />
            </div>
            
        </div>
    </>
  )
}

export default HeroSection