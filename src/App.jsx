import React from 'react'
import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import BodyDummyContent from './Components/BodyDummyContent'



function App() {  
  return (
    <div>
      <hr id='topLine' />
      <Router>
        <Routes>
          <Route path='*' Component={NavBar} />          
        </Routes>
      </Router>
      <BodyDummyContent/>
      <Footer/>
      
    </div>
  )
}

export default App