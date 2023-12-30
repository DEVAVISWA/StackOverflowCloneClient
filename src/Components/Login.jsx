import React, { useState } from 'react'
import Questions from './Questions'
import { Route, Routes, useNavigate } from 'react-router-dom'


function Login() {

  const navigate= useNavigate()

  const [logIn, setLogin] = useState({
    email: '',
    password: ''
  })

  const loginHandler = (e) => {
    e.preventDefault()
    console.log(logIn)

    navigate('/questions')
    
    setLogin({
      email: '',
      password: ''
    })
  }
  return (
    <div className="container text-center">
      <h3>Login Page</h3>
      <form onSubmit={loginHandler}>
        <div>
          <label>Email</label> <br />
          <input
            type="email"
            required
            value={logIn.email}
            onChange={(e) => setLogin({ ...logIn, email: e.target.value })} />
        </div>
        <div>
          <label>Password</label> <br />
          <input
            type="password"
            required
            value={logIn.password}
            onChange={(e) => setLogin({ ...logIn, password: e.target.value })} />
        </div>
        <br />
        <button type='submit'>Login</button>
      </form>
      <div>
        Don’t have an account? <a href="http://localhost:5173/signup">Sign up</a>
      </div>
      {/* after login got to '/questions' */}
      {/* <Routes >
        <Route path='/questions' element={<Questions/>}/>
      </Routes> */}
      {/* {
        setLogin ? (<Questions />)
          :
          <a href="http://localhost:5173/signup">Sign up</a>
      } */}
    </div>
  )
}

export default Login