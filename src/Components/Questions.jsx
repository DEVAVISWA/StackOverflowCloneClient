import axios, { all } from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

//REAL Question

function Questions({ questionId, setQuestionId }) {
    const user = window.localStorage.getItem('user')
    const userJson = JSON.parse(user)
    const token = window.localStorage.getItem('token')

    // const setUser = window.localStorage.getItem('user')
    // const setToken = window.localStorage.getItem('token')

    const navigate = useNavigate()
    const askQuestion = () => {
        console.log('button clicked')
        navigate('/ask')
    }
    const logouthandler = () => {
        // setUser(null)
        // setToken(null)
        window.localStorage.removeItem('user')
        window.localStorage.removeItem('token')
        navigate('/login')
    }

    //fetching all the question asked by the all user
    const [allQuestion, setAllQuestion] = useState([])

    const fetchAllQuestion = async () => {
        // const config = {
        //     headers: {
        //       'Authorization': `Bearer ${token}`
        //     }
        //   }
        //   console.log('Fetching notes..')
        try {
            const response = await axios.get('http://127.0.0.1:3000/ask')
            // console.log('fetching question')
            console.log(response.data)
            setAllQuestion(response.data)
        } catch (e) {
            console.log('error fetching question', e)
        }
    }

    useEffect(() => {
        fetchAllQuestion()
    }, [])

    // mymethod
    // function answerHandler(question) {
    //     setQuestionId(question._id)
    //     navigate(`answer/${question._id}`)
    // }

    //sirmethod
    // const answerHandler = (question) => {
    //     setQuestionId(question._id)
    //     navigate(`/questions/answer/${question._id}`)
    // }

    return (

        //sirmethod , mymethod in Questionsjsx.txt file
        <div>
            Welcome <b>{userJson.displayName}</b>
            <button onClick={logouthandler}>Logout</button>


            <div className="container text-center">
                <div className="row align-items-start">
                    <div className="col">
                        <h2>All Questions</h2>
                    </div>
                    <div className="col">
                        <button type="button" className="btn btn-primary" onClick={askQuestion}>
                            Ask Question
                        </button>{' '}
                        <br /> <br />
                    </div>
                </div>


                <div className="container text-center">
                    {allQuestion.map((question) => (
                        <div className="row allQues" key={question._id}>
                            <div className="col-2 vote">
                                <p>{question.votes} votes</p>
                                <p>{question.answer.length} answers</p>
                            </div>


                            <div className="col-10">
                                <h4>
                                    <Link to={`/questions/answer/${question._id}`}>{question.title}</Link>
                                </h4>


                                <div className="row overFlow">
                                    <p>{question.details}</p>
                                </div>


                                <div className="row ">
                                    <div className="col">
                                        {Array.isArray(question.tags) &&
                                            question.tags.map((tag, index) => (
                                                <span className="allQuesTag" key={index}>
                                                    {tag}
                                                </span>
                                            ))}
                                    </div>
                                    <div className="col">
                                        <i className="alignRight">
                                            {question.user
                                                ? `${question.user.displayName} asked ${question.createdAt.slice(0, 10)} at ${question.createdAt.slice(11, 19)}`
                                                : 'noname'}
                                        </i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Questions