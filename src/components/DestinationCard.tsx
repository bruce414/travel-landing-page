import React, { type JSX } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocation, faRoute, faStar, faCalendar } from '@fortawesome/free-solid-svg-icons'

type DestinationCardProps = {
    image: string,
    title: string,
    location: string,
    tripType: string,
    rating: number,
    duration: string,
    price: string,
    description: string
}

const DestinationCard = ( {image, title, location, tripType, rating, duration, price, description}: DestinationCardProps): JSX.Element => {
  return (
    <>
        <div className='flex flex-col flex-1 '>
            <div className='flex'>
                <img src={image} className='rounded-2xl aspect-[4/5]'/>
            </div>
            <div className='pt-2 flex flex-col'>
                <p className='font-semibold'>{title}</p>
                <div className='flex items-center pt-1 gap-2'>
                    <FontAwesomeIcon icon={faLocation} className='text-sm text-gray-500' />
                    <p className='text-sm text-gray-500'>{location}</p>
                </div>
            </div>
            <div className='pt-4 flex gap-4'>
                <div className='flex items-center gap-1.5'>
                    <FontAwesomeIcon icon={faRoute} className='text-sm'/>
                    <p className='text-sm'>{tripType}</p>
                </div>
                <div>|</div>
                <div className='flex items-center gap-1.5'>
                    <FontAwesomeIcon icon={faStar} className='text-sm'/>
                    <p className='text-sm'>{rating}</p>
                </div>
                <div>|</div>
                <div className='flex items-center gap-1.5'>
                    <FontAwesomeIcon icon={faCalendar} className='text-sm'/>
                    <p className='text-sm'>{duration}</p>
                </div>
            </div>
            <div className='pt-4 flex justify-between items-center'>
                <div className='flex flex-col'>
                    <p className='font-semibold text-2xl'>{price}</p>
                    <p className='text-sm text-gray-500'>{description}</p>
                </div>
                <div className='border border-black rounded-4xl flex justify-center items-center px-10 py-2'>
                    <p>Book</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default DestinationCard