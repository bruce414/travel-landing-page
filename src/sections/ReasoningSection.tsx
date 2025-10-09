import React from 'react'
import reason1 from '../assets/reason1.jpg';
import reason2 from '../assets/reason2.jpg';
import reason3 from '../assets/reason3.jpg';
import reason7 from '../assets/reason7.jpg';
import reason5 from '../assets/reason5.jpg';
import reason8 from '../assets/reason8.jpg';
import reason9 from '../assets/reason9.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCrown, faPhone, faGlobeAsia, faBook } from '@fortawesome/free-solid-svg-icons'

const ReasoningSection = () => {
  return (
    <>
        <section className='pt-40'>
            {/* <div className='mx-auto'>
                <p className='text-3xl'>
                    We ensure that your travel process
                </p>
                <div className='flex justify-center'>
                    <p className='text-3xl'>
                        is perfectly accomodated.
                    </p>
                </div>
            </div> */}
            <div className='text-center'>
                <h3 className='text-3xl font-bold'>
                    We ensure that your travel process <br />
                    is perfectly accomodated.
                </h3>
            </div>
            <div className='pt-20 flex gap-10'>
                <div className='flex flex-col flex-1 gap-5 text-center justify-center items-center'>
                    <div className='bg-black shadow-xl rounded-full h-15 w-15 flex items-center justify-center'>
                        <FontAwesomeIcon icon={faCrown} className='text-white text-2xl'/>
                    </div>
                    <p className='font-semibold'>Best travel provider</p>
                    <p className='text-sm'>
                        Your travel memories and stories <br />
                        are our top priority. We make sure <br />
                        the whole process of your <br />
                        vacation goes well and <br />
                        unforgettable.
                    </p>
                </div>
                <div className='flex flex-col flex-1 gap-5 text-center justify-center items-center'>
                    <div className='bg-black shadow-xl rounded-full h-15 w-15 flex items-center justify-center'>
                        <FontAwesomeIcon icon={faPhone} className='text-white text-2xl'/>
                    </div>
                    <p className='font-semibold'>Personalized service</p>
                    <p className='text-sm'>
                        We know that your interests come <br />
                        before any program we can offer <br />
                        Providing the best service for <br />
                        each person is our principle in <br />
                        perfecting your trip.
                    </p>
                </div>
                <div className='flex flex-col flex-1 gap-5 text-center justify-center items-center'>
                    <div className='bg-black shadow-xl rounded-full h-15 w-15 flex items-center justify-center'>
                        <FontAwesomeIcon icon={faGlobeAsia} className='text-white text-2xl'/>
                    </div>
                    <p className='font-semibold'>Experienced agent</p>
                    <p className='text-sm'>
                        Our experience and flight hours <br />
                        have proven that customer <br />
                        satisfication that keeps returning <br />
                        and the various things we go <br />
                        become our top priority.
                    </p>
                </div>
                <div className='flex flex-col flex-1 gap-5 text-center justify-center items-center'>
                    <div className='bg-black shadow-xl rounded-full h-15 w-15 flex items-center justify-center'>
                        <FontAwesomeIcon icon={faBook} className='text-white text-2xl'/>
                    </div>
                    <p className='font-semibold'>Trouble-free</p>
                    <p className='text-sm'>
                        Through our comprehensive <br />
                        service in all aspects. You don't <br />
                        have to take care of many things <br />
                        and make your vacation a job. We <br />
                        will do it for you.
                    </p>
                </div>
            </div>
            <div className='pt-10 flex flex-col'>
                <div className='flex gap-5 pb-3'>
                    <div className='flex flex-2'>
                        <img src={reason1} className='h-100 w-170 rounded-2xl'/>
                    </div>
                    <div className='flex flex-1'>
                        <img src={reason2} className='h-100 w-80 rounded-2xl'/>
                    </div>
                    <div className='flex flex-1'>
                        <img src={reason3} className='h-100 w-80 rounded-2xl'/>
                    </div>
                </div>
                <div className='flex gap-5 pt-3'>
                    <div className='flex flex-3'>
                        <img src={reason7} className='h-100 w-265 rounded-2xl' />
                    </div>
                    <div className='flex flex-1'>
                        <img src={reason9} className='h-100 w-90 rounded-2xl' />
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default ReasoningSection