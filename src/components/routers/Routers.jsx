import React from 'react'
import {  Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Gallery from '../pages/Gallery'
import Contact from '../pages/Contact'
import Traditional from '../pages/Traditional'
import Fashion from '../pages/Fashion'
import Editorial from '../pages/Editorial'
import Commercial from '../pages/Commercial'


function Routers() {
  return (
    <Routes>

            <Route path='/' element={<Home/>}/>
            <Route path='/gallery' element={<Gallery/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/portfolio/traditional' element={<Traditional/>}/>
            <Route path='/portfolio/fashion' element={<Fashion/>}/>
            <Route path='/portfolio/editorial' element={<Editorial/>}/>
            <Route path='/portfolio/commercial' element={<Commercial/>}/>
        
    </Routes>
  )
}

export default Routers