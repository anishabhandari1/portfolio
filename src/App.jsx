import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Navbar from './components/Navbar'
import CustomCursor from './components/CustomCursor'

const App = () => {
  return (
    <div>
      <CustomCursor />
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default App
