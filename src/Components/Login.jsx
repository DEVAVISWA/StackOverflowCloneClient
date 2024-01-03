import React, { useEffect, useState } from 'react'
import Questions from './Questions'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'


function Login() {

  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)

  useEffect(() => {
    const token = window.localStorage.getItem('token')
    const user = window.localStorage.getItem('user')
    if (token && user) {
      setUser(JSON.parse(user))
      setToken(token)
    }
  }, [])
  const navigate = useNavigate()

  const [logIn, setLogin] = useState({
    email: '',
    password: ''
  })

  const loginHandler = async (e) => {
    e.preventDefault()
    console.log(logIn)

    const response = await fetch('http://127.0.0.1:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/json'
      },
      body: JSON.stringify(logIn)
    })
    const data = await response.json()
    if (response.status == 200) {
      console.log('User logged in successfully')
      console.log(data)
      setLogin({
        email: '',
        password: ''
      })
      setToken(data.token)
      setUser(data)

      window.localStorage.setItem('token', data.token)
      window.localStorage.setItem('user', JSON.stringify(data))
      navigate('/questions')
    } else {
      console.log('error logging in user')
      console.log(data)
      alert("Invalid or wrong user details")
    }
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
      <p>
        Dont have an account? <a href="http://localhost:5173/signup">Sign up</a>
      </p>
    </div>
  )
}

export default Login