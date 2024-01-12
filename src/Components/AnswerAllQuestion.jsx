import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
// import { useLocation } from 'react-router-dom'



function AnswerAllQuestion({ questionId, setQuestionId }) {
  const { id } = useParams()
  // console.log(id)

  const [answer, setAnswer] = useState({
    title: '',
    createdAt: '',
    details: '',
    userAnswer: ''
  })

  const user = window.localStorage.getItem('user')
  const userJson = JSON.parse(user)

  const navigate = useNavigate()
  const askQuestion = () => {
    console.log('button clicked')
    if (userJson) {
      navigate('/ask')
    } else {
      alert('Login to ask Questions')
      navigate('/login')
    }
  }

  const fetchAnswer = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:3000/answer/${id}`);
      console.log("particular answer", response.data);
      setAnswer(response.data); // Update the state with the fetched data
    } catch (e) {
      console.log('error fetching answer', e);
    }
  };
  useEffect(() => {
    fetchAnswer(); // Call the fetchAnswer function directly in useEffect
  }, [id]);

  const patchUserAnswer = async (e) => {
    e.preventDefault()
    if (userJson) {
      console.log('submitting answer')
      try {
        axios.patch(`http://127.0.0.1:3000/answer/${id}`, answer.userAnswer)
          .then(response => {
            console.log('answer posted successfully', response.data)
            setAnswer(response.data)
          })
      } catch (error) {
        console.log('error posting asnwer', error)
      }
    } else {
      alert('Login to post your answers')
      navigate('/login')
    }
  }

  return (
    <div>
      <NavBar />
      <div className="container text-left">
        <div className="row ">
          <div className='col-11'><h4>{answer ? answer.title : ""}</h4>{answer? answer.createdAt : ''} <hr /></div>
          <div className='col-1'> <button className='btn btn-primary' onClick={askQuestion}>Ask Question</button></div>
        </div>
      </div>
      <div className='container text-left'>{answer ? answer.details :''} <hr /></div>
      <div className='container text-left'> {answer.answer ? answer.answer.length : "0"} Answers:- {
        <ol>
          {
            answer.answer?.map(ans => (<div key={ans._id}> {ans.answerBody} , <br /> answered {ans.answeredOn} by {ans.user ? ans.user.displayName : 'no name'} <hr /></div>))
          }
        </ol>
      }
      </div>
      <form onSubmit={patchUserAnswer}>
        <div className='container text-left'>
          <p className='text-left'><b>Your answer</b></p>
          <textarea
            className="d-inline-flex focus-ring py-1 px-2 text-decoration-none border rounded-2"
            id="detailsInput"
            value={answer.userAnswer}
            onChange={(e) => setAnswer({ ...answer, userAnswer: e.target.value })} ></textarea> <br />
          <button
            className='btn btn-primary'
            type='submit'>Post Your Answer</button>
        </div>
      </form>
    </div>
  )
}

export default AnswerAllQuestion