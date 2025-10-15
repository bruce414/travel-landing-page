import React from 'react'
import contact from '../assets/contact.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMailBulk } from '@fortawesome/free-solid-svg-icons'

const ContactSection = () => {
  return (
    <>
        <section className='pt-20 px-10'>
            <div className='w-full h-[580px] flex relative justify-center items-center'>
              <img src={contact} className='w-full h-full rounded-2xl object-cover' />

              <div className='absolute flex flex-col gap-5'>
                <p className='text-center text-white [word-spacing:0.12rem]'>DO YOU NEED OUR HELP?</p>
                  <div className='justify-center text-center font-semibold text-5xl text-white'>
                    <h3 className='[word-spacing:0.3rem]'>Contact us for help</h3>
                    <h3 className='[word-spacing:0.3rem]'>or information</h3>
                  </div>
                <p className='text-center text-white [word-spacing:0.12rem]'>Our team is ready to help you 24/7</p>
                
                <div className='pt-10'></div>
                
                <div className='border border-white/40 rounded-4xl flex justify-between items-center pl-5 pr-2 py-2 bg-white/10 backdrop-blur-md'>
                  <div className='flex gap-2 items-center justfiy-center'>
                    <FontAwesomeIcon icon={faMailBulk} className='text-white mr-3'/>
                    <p className='text-white'>Enter your email</p>
                  </div>

                  <div className='flex justify-center items-center bg-white text-black rounded-4xl cursor-pointer px-5 py-2'>
                    <p>Submit</p>
                  </div>
                </div>
              </div>
            </div>
        </section>
    </>
  )
}

export default ContactSection