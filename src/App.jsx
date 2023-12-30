import React from 'react'
import './App.css'
// import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import NavBar from './Components/NavBar'
import Login from './Components/Login'
import Signup from './Components/Signup'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'




function App() {
  return (
    <div>
      <hr id='topLine' />
      <Router>
        <Routes>
          <Route path='*' Component={NavBar} />
          <Route path='/login' Component={Login} />
          <Route path='/signup' Component={Signup} />
        </Routes>
      </Router>
    </div>
  )
}

export default App