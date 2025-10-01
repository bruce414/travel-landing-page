import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
  return (
    <>
        <nav className='flex items-center w-full py-6'>
          <div className='text-3xl font-bold text-black flex flex-1'><a href='#'>RoamCircle</a></div>

          <ul className='flex list-none gap-5 flex-1'>
            <li className='text-black'><a href='#'>Home</a></li>
            <li className='text-black'><a href='#'>Packages</a></li>
            <li className='text-black'><a href='#'>Locations</a></li>
            <li className='text-black'><a href='#'>Things To Do</a></li>
          </ul>

          <ul className='flex list-none gap-5 flex-1 items-center justify-end'>
            <li className='flex flex-row gap-0.5 items-center text-black'>
              <FontAwesomeIcon icon={faGlobe} />
              <button>EN</button>
            </li>
            <li className='text-black'><a href='#'>Sign In</a></li>
            <li className='text-black border-2 border-black px-4 py-1 rounded-full'><a href='#'>Sign Up</a></li>
          </ul>
        </nav>
    </>
  )
}

export default NavBar