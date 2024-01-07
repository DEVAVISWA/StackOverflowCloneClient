import React from 'react'
import './App.css'
// import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
// import NavBar from './Components/NavBar'
import Login from './Components/Login'
import Signup from './Components/Signup'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import Questions from './Components/Questions'
import AskQuestion from './Components/AskQuestion'
import About from './Components/About'
import AllQuestions from './Components/AllQuestions'
import Tags from './Components/Tags'




function App() {
  return (
    <div>
      <hr id='topLine' />
      <Router>
        <Routes>
          {/* <Route path='/' Component={NavBar} /> */}
          <Route path='/' Component={About} />
          <Route path='/allQuestions' Component={AllQuestions} />
          <Route path='/login/*' Component={Login} />
          <Route path='/signup' Component={Signup} />
          <Route path='/questions' Component={Questions} />
          <Route path='/ask' Component={AskQuestion} />
          <Route path='/tags' Component={Tags} />
        </Routes>
      </Router>
    </div>
  )
}

export default App