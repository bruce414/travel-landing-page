import React from 'react'
import dest1 from '../assets/destination1.jpg'
import dest2 from '../assets/destination2.jpg'
import dest3 from '../assets/destination3.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import DestinationCard from '../components/DestinationCard'

const DestinationSection = () => {
  const destinationCardItems = [
    {id: 1, image: dest1, title: "Special Tour To Wates Beach Tourism", location: "Rembang, Indonesia", tripType: "Round trip", rating: 4.9, duration: "8 JUL - 12 JUL", price: "$1,580", description: "9-day package"},
    {id: 2, image: dest2, title: "Akar Bayang Mande Beach Tourism", location: "Banyuwangi, Indonesia", tripType: "Round trip", rating: 4.9, duration: "8 JUL - 12 JUL", price: "$1,430", description: "12-day package"},
    {id: 3, image: dest3, title: "Special Tourism Karangjahe Beach", location: "Rembang, Indonesia", tripType: "Round trip", rating: 4.9, duration: "8 JUL - 12 JUL", price: "$1,210", description: "7-day package"},
  ]

  return (
    <>
        <section className='pt-50 flex flex-col'>
            <div className='flex justify-between'>
                <div className=''>
                    <h3 className='font-bold text-3xl'>
                        Explore more
                    </h3>
                    <div className=''>
                        Let's go on an adventure
                    </div>
                </div>
                <div className='text-sm'>
                    <p>All inclusive vacations and flights to the Caribbean, Indonesian, and <br />
                    more than 1,3000 destinations worldwide. Let's explore now!
                    </p>
                </div>
            </div>

            <div className='pt-8'>
                <div className='flex items-center justify-between'>
                    <div className=''>
                        <button className='border border-black rounded-2xl bg-black text-white px-4 py-2 mr-3'>Popular destination</button>
                        <button className='border border-gray-200 rounded-2xl bg-gray-200 text-black px-4 py-2 mr-3'>Islands</button>
                        <button className='border border-gray-200 rounded-2xl bg-gray-200 text-black px-4 py-2 mr-3'>Surfing</button>
                        <button className='border border-gray-200 rounded-2xl bg-gray-200 text-black px-4 py-2 mr-3'>National parks</button>
                        <button className='border border-gray-200 rounded-2xl bg-gray-200 text-black px-4 py-2 mr-3'>Lake</button>
                        <button className='border border-gray-200 rounded-2xl bg-gray-200 text-black px-4 py-2 mr-3'>Beach</button>
                        <button className='border border-gray-200 rounded-2xl bg-gray-200 text-black px-4 py-2 mr-3'>City</button>
                    </div>
                    <div className='flex gap-3 items-center border border-gray-100 rounded-2xl bg-gray-100 text-black px-4 py-2'>
                        <p>Filter</p>
                        <FontAwesomeIcon icon={faFilter} />
                    </div>
                </div>
            </div>

            <div className='pt-7 flex gap-6 pb-10'>
                {destinationCardItems.map((item) => 
                    <DestinationCard key={item.id} image={item.image} title={item.title} location={item.location} tripType={item.tripType} rating={item.rating} duration={item.duration} price={item.price} description={item.description} />
                )}
            </div>

            <div className='flex mx-auto justify-center rounded-full items-center py-5 px-3.5 border-2'>
                <button className='inline-flex gap-7 px-3.5'>
                    <p>Explore more</p>
                    <div className=''>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </div>
                </button>
            </div>
        </section>
    </>
  )
}

export default DestinationSection