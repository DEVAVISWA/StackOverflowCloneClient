import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from './NavBar'


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
    // console.log(logIn)
    const response = await fetch('https://stackoverfloecloneserver.onrender.com/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/json'
      },
      body: JSON.stringify(logIn)
    })
    const data = await response.json()
    if (response.status == 200) {
      console.log('User logged in successfully')
      // console.log(data)
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
      // console.log(data)
      alert("Invalid or wrong user details")
    }
  }
  return (
    <div>           
      <NavBar /> 
      <div className="container text-center loginForm shadow p-3 mb-5 bg-body-tertiary rounded ">
        <h3>Login Page</h3>
        <form onSubmit={loginHandler}>
          <div>
            <b>Email</b> <br />
            <input
              type="email"
              required
              value={logIn.email}
              onChange={(e) => setLogin({ ...logIn, email: e.target.value })} />
          </div>
          <br />
          <div>
            <b>Password</b> <br />
            <input
              type="password"
              required
              value={logIn.password}
              onChange={(e) => setLogin({ ...logIn, password: e.target.value })} />
          </div>
          <br />
          <button type='submit' className="btn btn-primary">Login</button>
        </form>
      </div>
      <p className='text-center'>
        Dont have an account? <a href="https://celebrated-faun-a8aa0b.netlify.app/signup">Sign up</a>
      </p>
    </div>
  )
}

export default Login