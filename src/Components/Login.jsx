import React from 'react'


function Login() {
  return (
    <div>
      <h3>Login Page</h3>
      <form>
        <div>
          <label>Email</label> <br />
          <input
            type="email"
            required />
        </div>
        <div>
          <label>Password</label> <br />
          <input
            type="password"
            required />
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