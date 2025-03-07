import React, { useEffect } from 'react'
import { useGlobalContext } from '../context'
import HeroSection from './HeroSection'

const Home = () => {
  const {updateHomePage} = useGlobalContext();
  useEffect(() =>{
    updateHomePage();
  }, []);
 
  return (
    <div>
      <HeroSection />
    </div>
  )
}

export default Home