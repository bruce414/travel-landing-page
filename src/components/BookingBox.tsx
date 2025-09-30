import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faLocation, faCalendar, faPeopleGroup, faSearch } from '@fortawesome/free-solid-svg-icons'

const BookingBox = () => {
  return (
    <>
        <div className='border-2 border-white rounded-2xl text-black absolute flex flex-col bg-white shadow-xl ring-1 ring-black/10 px-5 py-5 items-center w-auto h-auto mx-auto max-w-5xl'>
            {/* <div className='flex flex-row pl-1 items-center gap-3'>
                <FontAwesomeIcon icon={faCalendar} />
                <p>Date</p>
                <FontAwesomeIcon icon={faAngleDown} className='pl-5'/>
            </div>
            <div className='px-3.5'>|</div>
            <div className='flex flex-row pl-1 items-center gap-3'>
                <FontAwesomeIcon icon={faBook} />
                <p>Budget</p>
                <FontAwesomeIcon icon={faAngleDown} className='pl-5'/>
            </div>
            <div className='px-3.5'>|</div>
            <div className='flex flex-row pl-1 items-center gap-3'>
                <FontAwesomeIcon icon={faPersonRifle} />
                <p>Guest</p>
                <FontAwesomeIcon icon={faAngleDown} className='pl-5'/>
            </div>
            <div className='px-3.5'></div>
            <div className='bg-black text-white border-2 border-black px-4 py-1 rounded-full'>Search</div> */}
            <div className='flex justify-between whitespace-nowrap w-full'>
                <ul className='flex gap-7 items-center text-sm'>
                    <li className='text-black w-auto'>Hostelry</li>
                    <li className='text-black'>Flights</li>
                    <li className='text-black w-auto'>Bus & Shuttle</li>
                    <li className='text-black'>Cars</li>
                </ul>
                <div className='px-12'></div>
                <div className='flex items-center text-sm'>
                    <p className='mr-1.5'>Last searched</p>
                    <FontAwesomeIcon icon={faAngleRight} />
                </div>
            </div>
            <hr className='border-t-2 border-gray-200 w-full my-3'/>
            <div className='flex gap-5 text-sm'>
                <div className='flex flex-col whitespace-nowrap'>
                    <div className='pb-2'>Destination</div>
                    <div className='bg-gray-100 flex justify-center items-center gap-2'>
                        <FontAwesomeIcon icon={faLocation} className='pl-2 pr-1 text-black'/>
                        <p>Bali, Indonesia</p>
                    </div>
                </div>
                <div className='flex flex-col whitespace-nowrap'>
                    <div className='pb-2'>Check-in</div>
                    <div className='bg-gray-100 flex justify-center items-center gap-2'>
                        <FontAwesomeIcon icon={faCalendar} className='pl-2 pr-1 text-black'/>
                        <p>Sat, 2 Oct 2025</p>
                    </div>
                </div>
                <div className='flex flex-col whitespace-nowrap'>
                    <div className='pb-2'>Check-out</div>
                    <div className='bg-gray-100 flex justify-center items-center gap-2'>
                        <FontAwesomeIcon icon={faCalendar} className='pl-2 pr-1 text-black'/>
                        <p>Sun, 3 Oct 2025</p>
                    </div>
                </div>
                <div className='flex flex-col whitespace-nowrap'>
                    <div className='pb-2'>Room & Guest</div>
                    <div className='bg-gray-100 flex justify-center items-center gap-2'>
                        <FontAwesomeIcon icon={faPeopleGroup} className='pl-2 pr-1 text-black'/>
                        <p>1 Room, 2 Guest</p>
                    </div>
                </div>
                <div className='flex rounded-2xl bg-black text-white px-2 py-2 items-center justify-center gap-2 w-30'>
                    <FontAwesomeIcon icon={faSearch} />
                    <p>Search</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default BookingBox