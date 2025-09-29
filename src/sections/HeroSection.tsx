import React from 'react'
import beach from '../assets/beach.jpg'
import hill from '../assets/hill.jpg'

const HeroSection = () => {
  return (
    <>
        <div className='relative h-[70svh] min-h-[400px] overflow-hidden border-white rounded-2xl'>
            <img 
            src={hill}
            alt='Ocean view with palm trees and a beach' 
            className='absolute w-full h-full object-cover'/>
        </div>
    </>
  )
}

export default HeroSection