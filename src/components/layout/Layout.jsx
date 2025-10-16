import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Routers from '../routers/Routers'
import { BrowserRouter as Router, useLocation } from 'react-router-dom'

function LayoutContent() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isGalleryPage = location.pathname.startsWith('/portfolio/');
  
  return (
    <>
      {!isHomePage && !isGalleryPage && <Header/>}
      <Routers/>
      {!isHomePage && !isGalleryPage && <Footer/>}
    </>
  )
}

function Layout() {
  return (
    <Router>
      <LayoutContent />
    </Router>
  )
}

export default Layout