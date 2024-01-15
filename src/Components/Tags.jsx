import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'

function Tags() {
    const [allQuestion, setAllQuestion] = useState([])

    const fetchAllQuestion = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:3000/ask')
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
        <div >
            <NavBar />
            <div className="container ">
                <h3>Tags</h3>
                <p>A tag is a keyword or label that categorizes your question with other, similar questions. Using the right tags makes it easier for others to find and answer your question.</p>
                {
                    allQuestion.map(question =>
                        <div className='row allQues' key={question._id}>
                            <div className="col">
                                <p>{question.tags}</p>
                            </div>
                        </div>)
                }
            </div>
        </div>
    )
}

export default Tags