import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import { useParams } from 'react-router-dom'
import axios from 'axios'
// import { useLocation } from 'react-router-dom'



function AnswerAllQuestion({ questionId, setQuestionId }) {
  const { id } = useParams()
  // console.log(id)

  const [answer, setAnswer] = useState([])

  // const fetchAnswer = async () => {
  //   let { id } = useParams()
  //   try {
  //     const response = await axios.get(`http://127.0.0.1:3000/answer/${id}`)
  //     console.log("particular answer", response.data)
  //     // setAnswer(response.data)
  //   } catch (e) {
  //     console.log('error fetching answer', e)
  //   }    
  // }    
  // fetchAnswer() 

  useEffect(() => {
    axios.get(`http://127.0.0.1:3000/answer/${id}`)
      .then((response) => {
        console.log(response.data)
        setAnswer(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <div>
      <NavBar />
      <div className="container text-left">
        <div className="row ">
          <div className='col-11'><h4>{answer.title}</h4>{answer.createdAt}</div>
          <div className='col-1'> <button className='btn btn-primary'>Ask Question</button></div>
        </div>
      </div>
      <div className='container text-left'>{answer.details}</div>
      <div className='container text-left'> Answers:- {
        <ol>
          {
            answer.answer?.map(ans => <li key={ans._id}> {ans.answerBody} , answered by {ans.user? ans.user.displayName : 'no name'} </li>)
          }
        </ol>              
      }  
      </div>
      <form >
        <div className='container text-left'>
          <textarea cols="100" rows="10"></textarea> <br />
          <button className='btn btn-primary' type='submit'>Post Your Answer</button>
        </div>
      </form>
    </div>
  )
}

export default AnswerAllQuestion