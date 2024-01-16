import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from './NavBarLogout'

function AskQuestion() {
  const navigate = useNavigate()
  const user = window.localStorage.getItem('user')
  const userJson = JSON.parse(user)
  const token = window.localStorage.getItem('token')
  const [question, setQuestion] = useState({
    title: '',
    details: '',
    tags: ''
  })
  const handleQuestion = async (e) => {
    e.preventDefault()
    // console.log('button clicked', question)
    const config = {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }
    const newQuestionObj = {
      title: question.title,
      details: question.details,
      tags: question.tags
    }
    console.log('adding new note')
    try {
      const response = await axios.post('https://stackoverfloecloneserver.onrender.com/ask', newQuestionObj, config)
      console.log('question added successfully')
      // console.log(response.data)
      setQuestion({
        title: '',
        details: '',
        tags: ''
      })
      navigate('/questions')
    } catch (error) {
      console.log('error adding note', error)
    }
  }
  return (
    <div>
      <NavBar userJson={userJson}/>
      <div className="container">
        <div className="row">
          <div className="col">
            <h4>Ask a public question</h4>
          </div>
          <div className="col">
            <img src="" />
          </div>
        </div>
      </div>
      {/* writingAgoodQuestion */}
      <div className="container " id='writingAgoodQuestion'>
        <div className="row">
          <div className="col">
            <p id='writingAgoodQuestionSize'>Writing a good question</p>
            <p>You’re ready to ask a programming-related question and this form will help guide you through the process.</p>
            <div>
              <b>Steps</b>
              <ul id='writingAgoodQuestionUl'>
                <li>Summarize your problem in a one-line title</li>
                <li>Describe your problem in more detail.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* title and details*/}
      <div className="container" id='questionTitle'>
        <div className="row">
          <div className="col">
            <b>Title</b>
            <p>Be specific and imagine you’re asking a question to another person.</p>
            <form onSubmit={handleQuestion}>
              <div>
                <input
                  className="d-inline-flex focus-ring py-1 px-2 text-decoration-none border rounded-2"
                  type="text"
                  id="titleInput"
                  placeholder='e.g. Is there an R function for finding the index of an element in a vector?'
                  required
                  value={question.title}
                  onChange={(e) => setQuestion({ ...question, title: e.target.value })} /> <br /> <br />
                <b>What are the details of your problem?</b>
                <p>Introduce the problem and expand on what you put in the title. Minimum 20 characters.</p>
                <textarea
                  className="d-inline-flex focus-ring py-1 px-2 text-decoration-none border rounded-2"
                  id="detailsInput"
                  required
                  value={question.details}
                  onChange={(e) => setQuestion({ ...question, details: e.target.value })}
                ></textarea> <br /> <br />
                <b>Tags</b>
                <p>Add tag to describe what your question is about</p>
                <input
                  className="d-inline-flex focus-ring py-1 px-2 text-decoration-none border rounded-2"
                  type="text"
                  id="titleInput"
                  placeholder='e.g. nodejs react'
                  required
                  value={question.tags}
                  onChange={(e) => setQuestion({ ...question, tags: e.target.value })} /> <br /> <br />
                <button className="btn btn-primary" type='submit'>Next</button> <br /> <br />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AskQuestion