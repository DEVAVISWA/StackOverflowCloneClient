import React, { useState } from 'react'


function Login() {

  const [logIn, setLogin] = useState({
    email: '',
    password: ''
  })

  const loginHandler = (e) => {
    e.preventDefault()
    console.log(logIn)

    setLogin({
      email: '',
      password: ''
    })
  }
  return (
    <div>
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
    </div>
  )
}

export default Login