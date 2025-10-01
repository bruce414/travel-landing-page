import React from 'react'
import HeroSection from './sections/HeroSection'
import NavBar from './components/NavBar'
import ExploreSection from './sections/ExploreSection'

const App = () => {
  return (
    <>
      <div className='mx-auto max-w-7xl px-6'>
        <NavBar />
        <HeroSection />
        <ExploreSection />
      </div>
    </>
  )
}

export default App