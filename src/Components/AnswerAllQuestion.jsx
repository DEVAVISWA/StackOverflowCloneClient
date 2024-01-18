import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

function AnswerAllQuestion() {
  const { id } = useParams()

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
      const response = await axios.get(`https://stackoverfloecloneserver.onrender.com/answer/${id}`);
      // console.log("particular answer", response.data)
      setAnswer(response.data)
    } catch (e) {
      console.log('error fetching answer', e)
    }
  };
  useEffect(() => {
    fetchAnswer()
  }, [id]);

  const patchUserAnswer = async (e) => {
    e.preventDefault()
    if (userJson) {
      console.log('submitting answer')
      try {
        let payload = {
          "answerBody": answer.userAnswer,
          "userId": JSON.parse(localStorage.getItem('user')).displayName,
          "questionId": id
        }
        await axios.patch(`https://stackoverfloecloneserver.onrender.com/answer/${id}`, payload)
          .then(response => {
            console.log('answer posted successfully', response.data)
            setAnswer({...response.data,userAnswer:""})
            
          })
      } catch (error) {
        console.log('error posting answer', error)
      }
    } else {
      alert('Login to post your answers')
      navigate('/login')
    }
  }
  // console.log(answer)
  return (
    <div>
      <NavBar />
      <div className="container text-left">
        <div className="row ">
          <div className='col-11'><h4>{answer ? answer.title : ""}</h4> aksed {answer ? answer.createdAt.slice(0, 10) : ''}</div>
          <div className='col-1'> <button className='btn btn-primary askQuestionButton' onClick={askQuestion}>Ask Question</button></div> <hr />
        </div>
      </div>
      <div className='container text-left descriptionText'>{answer ? answer.details : ''} <hr /></div>
      <div className='container text-left'> {answer.answer ? answer.answer.length : "0"} 𝐀𝐧𝐬𝐰𝐞𝐫𝐬:-  <br /> <br />{
        <div>
          {
            answer.answer?.map(ans => (<div key={ans._id}> <p className='answerPara'>{ans.answerBody}</p> <i className='lightText'> answered {ans.answeredOn.slice(0, 10)} at {ans.answeredOn.slice(11, 19)}</i> by {ans ? ans.userId : 'no name'} <hr /></div>))
          }
        </div>
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