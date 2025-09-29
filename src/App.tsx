import React from 'react'
import HeroSection from './sections/HeroSection'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <>
      <div className='mx-auto max-w-7xl px-6'>
        <NavBar />
        <HeroSection />
      </div>
    </>
  )
}

export default App