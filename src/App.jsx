import React from 'react'
import NavBar from './component/NavBar'
import Home from './component/Home'
import SocialLink from './component/SocialLink'
import About from './component/About'
import Portfolio from './component/Portfolio'
import Experience from './component/Experience'
import Contact from './component/Contact'


const App = () => {
  return (
     <div>
      <NavBar />
      <Home />
      <SocialLink />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
     </div>
  )
}

export default App
