import React, { useState } from 'react'
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
import AnswerAllQuestion from './Components/AnswerAllQuestion'




function App() {
  const [questionId, setQuestionId] = useState(null)
  return (
    <div>
      <hr id='topLine' />
      <Router>
        <Routes>
          {/* <Route path='/' Component={NavBar} /> */}

          {/* <Route path='/' Component={About} />
          <Route path='/allQuestions' Component={AllQuestions} />
          <Route path='/login/*' Component={Login} />
          <Route path='/signup' Component={Signup} />
          <Route path='/questions' element={<Questions questionId={questionId} setQuestionId={setQuestionId}/> } />
          <Route path='/ask' Component={AskQuestion} />
          <Route path='/tags' Component={Tags} />
          <Route path='/questions/answer/:id' element={<AnswerAllQuestion questionId={questionId} setQuestionId={setQuestionId}/>} />
          <Route path='*' element={<h1>Default</h1>} /> */}

          <Route path='/' element={<About />} />
          <Route path='/allQuestions' element={<AllQuestions />} />
          <Route path='/login/*' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route
            path='/questions'
            element={<Questions questionId={questionId} setQuestionId={setQuestionId} />}
          />
          <Route path='/ask' element={<AskQuestion />} />
          <Route path='/tags' element={<Tags />} />
          <Route
            path='/questions/answer/:id'
            element={<AnswerAllQuestion questionId={questionId} setQuestionId={setQuestionId} />}
          />
          {/* Use <Route path='*' element={...} /> for the default route */}
          <Route path='*' element={<h1>Default</h1>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App

