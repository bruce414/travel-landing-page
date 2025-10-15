import React from 'react'
import HeroSection from './sections/HeroSection'
import NavBar from './components/NavBar'
import ExploreSection from './sections/ExploreSection'
import ReasoningSection from './sections/ReasoningSection'
import DestinationSection from './sections/DestinationSection'
import ArticleSection from './sections/ArticleSection'
import ContactSection from './sections/ContactSection'
import FooterSection from './sections/FooterSection'

const App = () => {
  return (
    <>
      <div className='mx-auto max-w-7xl px-6'>
        <NavBar />
        <HeroSection />
        <ExploreSection />
        <ReasoningSection />
        <DestinationSection />
        <ArticleSection />
      </div>
      <ContactSection />
      <FooterSection />
    </>
  )
}

export default App