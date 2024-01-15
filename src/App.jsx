import React from 'react'
import './App.css'
import Login from './Components/Login'
import Signup from './Components/Signup'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import Questions from './Components/Questions'
import AskQuestion from './Components/AskQuestion'
import About from './Components/About'
import AllQuestions from './Components/AllQuestions'
import AnswerAllQuestion from './Components/AnswerAllQuestion'

function App() {
  return (
    <div>
      <hr id='topLine' />
      <Router>
        <Routes>
          <Route path='/' element={<About />} />
          <Route path='/allQuestions' element={<AllQuestions />} />
          <Route path='/login/*' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/questions' element={<Questions />} />
          <Route path='/ask' element={<AskQuestion />} />
          <Route path='/questions/answer/:id' element={<AnswerAllQuestion />} />
          <Route path='*' element={<h1>Default</h1>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App

