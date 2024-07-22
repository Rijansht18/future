import React from 'react'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Services from './pages/Services'
import Menu from './pages/Menu'
import Reservation from './pages/Reservation'
import Blog from './pages/Blog'
import ContactUs from './pages/ContactUs'
import Chefs from './pages/Chefs'
import Clients from './pages/Clients'
import Feedback from './pages/Feedback'
function All() {
  return (
    <>
      <Home/>
      <AboutUs/>
      <Services/>
      <Menu/>
      <Chefs/>
      <Clients/>
      <Reservation/>
      <Feedback/>
      <Blog/>
      <ContactUs/>
    </>
  )
}

export default All
