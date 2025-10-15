import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMailBulk } from '@fortawesome/free-solid-svg-icons/faMailBulk'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

const FooterSection = () => {
  return (
    <>
        <section className='pt-20'>
            <div className='flex flex-col'>
                <div className='px-25 flex justify-between'>
                    <div className='flex flex-col gap-4'>
                        <p className='font-bold text-2xl'>RoamCircle</p>
                        <p className='text-sm text-gray-500 w-80'>
                            Relationships where we know our customers <br />
                            so well that we can suggest and deliver total <br />
                            travel solutions for their needs.
                        </p>
                        <div className='flex gap-3 items-center'>
                            <FontAwesomeIcon icon={faMailBulk} className='text-sm text-gray-500' />
                            <p className='text-sm text-gray-500'>RoamCircle@gmail.com</p>
                        </div>
                        <div className='flex gap-3 items-center'>
                            <FontAwesomeIcon icon={faPhone} className='text-sm text-gray-500' />
                            <p className='text-sm text-gray-500'>+477 436-1128-54</p>
                        </div>
                    </div>

                    <div className='flex gap-20'>
                        <div className='flex flex-col gap-4'>
                            <h5 className='font-bold text-2xl cursor-pointer'>About</h5>
                            <p className='text-sm text-gray-500 cursor-pointer'>About Us</p>
                            <p className='text-sm text-gray-500 cursor-pointer'>Blog</p>
                            <p className='text-sm text-gray-500 cursor-pointer'>Careers</p>
                            <p className='text-sm text-gray-500 cursor-pointer'>Jobs</p>
                            <p className='text-sm text-gray-500 cursor-pointer'>In Press</p>
                            <p className='text-sm text-gray-500 cursor-pointer'>Gallery</p>
                        </div>

                        <div className='flex flex-col gap-4'>
                            <h5 className='font-bold text-2xl'>Support</h5>
                            <p className='text-sm text-gray-500 cursor-pointer'>Contact Us</p>
                            <p className='text-sm text-gray-500 cursor-pointer'>Online Chat</p>
                            <p className='text-sm text-gray-500 cursor-pointer'>WhatsApp</p>
                            <p className='text-sm text-gray-500 cursor-pointer'>Telegram</p>
                            <p className='text-sm text-gray-500 cursor-pointer'>Ticketing</p>
                            <p className='text-sm text-gray-500 cursor-pointer'>Call Center</p>
                        </div>

                        <div className='flex flex-col gap-4'>
                            <h5 className='font-bold text-2xl'>FAQ</h5>
                            <p className='text-sm text-gray-500 cursor-pointer'>Account</p>
                            <p className='text-sm text-gray-500 cursor-pointer'>Booking</p>
                            <p className='text-sm text-gray-500 cursor-pointer'>Payments</p>
                            <p className='text-sm text-gray-500 cursor-pointer'>Returns</p>
                            <p className='text-sm text-gray-500 cursor-pointer'>Privacy Policy</p>
                            <p className='text-sm text-gray-500 cursor-pointer'>Terms & Conditions</p>
                        </div>
                    </div>
                </div>

                <hr className='border-t-2 border-gray-200 my-10 mx-20'/>

                <div className='flex justify-between items-center px-20 pb-10'>
                    <div className='text-sm text-gray-500'>
                        © 2026 RoamCircle. All rights reserved.
                    </div>

                    <div className='flex gap-2.5'>
                        <div className='rounded-full border border-gray-300 flex justify-center items-center cursor-pointer'>
                            <FontAwesomeIcon icon={faFacebook} className='text-sm text-gray-500 m-2'/>
                        </div>
                        <div className='rounded-full border border-gray-300 flex justify-center items-center cursor-pointer'>
                            <FontAwesomeIcon icon={faInstagram} className='text-sm text-gray-500 m-2'/>
                        </div>
                        <div className='rounded-full border border-gray-300 flex justify-center items-center cursor-pointer'>
                            <FontAwesomeIcon icon={faTwitter} className='text-sm text-gray-500 m-2'/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default FooterSection