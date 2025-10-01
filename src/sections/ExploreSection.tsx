import React from 'react'
import city1 from '../assets/city1.jpg'
import city2 from '../assets/city2.jpg'
import city3 from '../assets/city3.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocation, faArrowRight } from '@fortawesome/free-solid-svg-icons'

const ExploreSection = () => {
  return (
    <>
        <div className='flex flex-col pt-50'>
            <div className='flex items-center justify-between w-full'>
                <div className='flex flex-col gap-1'>
                    <p className='font-bold text-3xl'>Popular Place</p>
                    <p>Let's enjoy this heaven on earth</p>
                </div>
                <div className='text-sm'>
                    <p>Many places are very famous, beautiful, clean, and will give a very <br />
                    deep impression to visitors and will make them come back.</p>
                </div>
            </div>
            
            <div className='flex pt-9 gap-6 pb-10'>
                <div className='flex flex-col flex-1 gap-5'>
                    <img src={city1} className='rounded-2xl aspect-[4/5]'/>
                    <div className='flex flex-col gap-3'>
                        <div className=''>
                            <p>SC, Mindanou</p>
                            <div className='flex gap-2 items-center'>
                                <FontAwesomeIcon icon={faLocation} />
                                <p>Mindanou, Philippines</p>
                            </div>
                        </div>
                        <div className=''>
                            <div className='flex gap-3'>
                                <p className='text-gray-500 text-sm'>SEE MORE</p>
                                <FontAwesomeIcon icon={faArrowRight} className='text-gray-500'/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col flex-1 gap-5'>
                    <img src={city2} className='rounded-2xl'/>
                    <div className='flex flex-col gap-3'>
                        <div className=''>
                            <p>SC, Mindanou</p>
                            <div className='flex gap-2 items-center'>
                                <FontAwesomeIcon icon={faLocation} />
                                <p>Mindanou, Philippines</p>
                            </div>
                        </div>
                        <div className=''>
                            <div className='flex gap-3'>
                                <p className='text-gray-500 text-sm'>SEE MORE</p>
                                <FontAwesomeIcon icon={faArrowRight} className='text-gray-500'/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col flex-1 gap-5'>
                    <img src={city3} className='rounded-2xl aspect-[4/5]'/>
                    <div className='flex flex-col gap-3'>
                        <div className=''>
                            <p>SC, Mindanou</p>
                            <div className='flex gap-2 items-center'>
                                <FontAwesomeIcon icon={faLocation} />
                                <p>Mindanou, Philippines</p>
                            </div>
                        </div>
                        <div className=''>
                            <div className='flex gap-3'>
                                <p className='text-gray-500 text-sm'>SEE MORE</p>
                                <FontAwesomeIcon icon={faArrowRight} className='text-gray-500'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex mx-auto justify-center rounded-full items-center py-5 px-3.5 border-2'>
                <button className='inline-flex gap-7 px-3.5'>
                    <p>See More Trips</p>
                    <div className=''>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </div>
                </button>
            </div>
        </div>
    </>
  )
}

export default ExploreSection