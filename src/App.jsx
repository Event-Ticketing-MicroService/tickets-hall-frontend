import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './landingpage/LandingPage'

export default function App() {

  return(
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path="/test" element={<p>askjfhsiufsd</p>} />
        </Routes>      
  )

}
