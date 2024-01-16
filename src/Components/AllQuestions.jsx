import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import { Link, useNavigate } from 'react-router-dom'

function AllQuestions() {

    const [allQuestion, setAllQuestion] = useState([])

    const fetchAllQuestion = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:3000/ask')
            // console.log("need", response.data)
            setAllQuestion(response.data)
        } catch (e) {
            console.log('error fetching question', e)
        }
    }
    useEffect(() => {
        fetchAllQuestion()
    }, [])

    const navigate = useNavigate()
    const askQuestionInStackOverflowMainPage = () => {
        alert('login to ask Question')
        navigate('/login')
    }

    return (
        <div>
            <NavBar />
            <div className="container text-center">
                <div className="row align-items-start" style={{
                    padding: '10px'
                }}>
                    <div className="col">
                        <h2>All Questions</h2>
                    </div>
                    <div className="col">
                        <button type="button"
                            className="btn btn-primary"
                            onClick={askQuestionInStackOverflowMainPage}
                        >Ask Question</button> <br /> <br />
                    </div>
                </div>
                <div className="container text-center">
                    {
                        allQuestion.map(question =>
                            <div className='row allQues' key={question._id}>
                                <div className="col-2 vote">
                                    {
                                        question.answer.length > 0 ? <span >{question.answer.length} answers</span>
                                            :
                                            <span>{question.answer.length} answers</span>
                                    }
                                </div>
                                <div className="col-10">
                                    <h4>
                                        <Link
                                            to={`/questions/answer/${question._id}`}
                                            style={{ textDecoration: 'none' }}>{question.title}</Link>
                                    </h4>
                                    <div className="row overFlow">
                                        <p>{question.details}</p>
                                    </div>
                                    <div className="row ">
                                        <div className="col">
                                            <span className='allQuesTag'>{question.tags}</span>
                                        </div>
                                        <div className="col">
                                            <i className='alignRight'> {question.user ? question.user.displayName : "noname"} asked {question.createdAt.slice(0, 10)} at {question.createdAt.slice(12, 19)}   </i>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                    }
                </div>
            </div>
        </div>
    )
}

export default AllQuestions