import { useState, useEffect } from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Links from './components/Links'
import Body from './components/Body'
import Footer from './components/Footer'
function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth)}

    window.addEventListener('resize', handleWindowResize)
    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  },[])

  useEffect(()=>{
    windowWidth > 768 ? setIsOpen(true) : ""

  },[windowWidth])

  function toogleNavbar() {
    setIsOpen(prevMode=>!prevMode)
  }

  return (
    <div className="App">
      <Navbar 
        toggleNavbar={toogleNavbar}
        navbarStatus={isOpen}
        currentWidth={windowWidth}
      />
      <Hero 
        navbarStatus={isOpen}
        currentWidth={windowWidth}
      />
      <Links />
      <Body />
      <Footer />

      
    </div>
  )
}

export default App


