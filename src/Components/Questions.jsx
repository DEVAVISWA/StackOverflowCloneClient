import React from 'react'
import { useNavigate } from 'react-router-dom'

function Questions({ user, setUser, token, setToken }) {
    const navigate = useNavigate()
    const askQuestion = () => {
        console.log('button clicked')
        navigate('/ask')
    }
    const logouthandler = () => {
        setUser(null)
        setToken(null)
        window.localStorage.removeItem('user')
        window.localStorage.removeItem('token')
    }
    return (
        <div>
            <b>Welcome {user.displayName}</b>
            <button onClick={logouthandler}>Logout</button>
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