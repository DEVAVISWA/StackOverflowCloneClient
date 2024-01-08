import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import { json } from 'react-router-dom'

//DUMMY

function AllQuestions() {
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
            console.log("need",response.data)
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
            <NavBar />
            <div className="container text-center">
                <div className="row align-items-start">
                    <div className="col">
                        <h2>All Questions</h2>
                    </div>
                    <div className="col">
                        {/* <button type="button" className="btn btn-primary" onClick={askQuestion}>Ask Question</button> <br /> <br /> */}
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
                                            <span className='allQuesTag'>{question.tags}</span>
                                        </div>
                                        <div className="col">
                                            <i className='alignRight'>asked {question.createdAt.slice(0, 10)} at {question.createdAt.slice(12, 19)}  by {question.user ? question.user.displayName : "noname"}</i>
                                            <span></span>
                                            {console.log(question.user.displayName)}
                                        </div>
                                        
                                        {/* {console.log(question.user.displayName || 'hello')}; */}
                                        
                                            
                                                                               
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

export default AllQuestions