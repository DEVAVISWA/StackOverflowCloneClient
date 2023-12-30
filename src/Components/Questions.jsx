import React from 'react'
import { useNavigate } from 'react-router-dom'

function Questions() {
    const navigate = useNavigate()
    const askQuestion = () => {
        console.log('button clicked')
        navigate('/ask')
    }
    return (
        <div>
            <div className="container text-center">
                <div className="row align-items-start">
                    <div className="col">
                        <h2>Questions</h2>
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
                    <div className="row">
                        <div className="col">
                            Column
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Questions