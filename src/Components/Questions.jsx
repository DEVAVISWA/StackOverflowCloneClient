import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Questions() {
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


    return (
        <div>
            Welcome <b> {userJson.displayName} </b>
            <button onClick={logouthandler}>Logout</button>
            {/* AllQuestion */}
            <div className="container text-center">
                <div className="row align-items-start">
                    <div className="col">
                        <h2>All Questions</h2>
                    </div>
                    <div className="col">
                        <button type="button" className="btn btn-primary" onClick={askQuestion}>Ask Question</button> <br /> <br />
                        <nav aria-label="...">
                            <ul className="pagination pagination-sm">
                                <li className="page-item active" aria-current="page">
                                    <span className="page-link">All Questions</span>
                                </li>
                                <li className="page-item"><a className="page-link" href="#">Top Questions</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="container text-center">
                    {/* <div className="row "> */}
                    {/* <div className="col"> */}
                    {/* <div className='row allQues'> */}
                    {
                        allQuestion.map(question =>
                            <div className='row allQues' key={question._id}>
                                <div className="col-2 vote">
                                    <p>{question.votes} votes</p>
                                    <p>0 answers</p>
                                </div>
                                <div className="col-10">
                                    <h3>{question.title}</h3>
                                    <div className="row ">
                                        <p>{question.details}</p>
                                    </div>
                                    <div className="row ">
                                        <div className="col">
                                            <p>{question.tags}</p>
                                        </div>
                                        <div className="col">
                                            <i className='alignRight'>asked {question.createdAt.slice(0, 10)} at {question.createdAt.slice(12, 19)}  by {question.user ? question.user.displayName : "noname"}</i>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                    }
                    {/* </div> */}
                    {/* </div> */}
                    {/* </div> */}
                </div>
            </div>

        </div>
    )
}

export default Questions