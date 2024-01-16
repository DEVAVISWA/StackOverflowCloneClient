import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboardQuestion, faTags, faTrophy, faUpDown } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from './NavBar'

function Signup() {

  const navigate = useNavigate()

  const [signupForm, setSignupForm] = useState({
    displayName: '',
    email: '',
    password: ''
  })

  const handleSignup = async (e) => {
    e.preventDefault()
    console.log(signupForm)

    const signupBody = {
      displayName: signupForm.displayName,
      email: signupForm.email,
      password: signupForm.password
    }
    const response = await fetch('http://127.0.0.1:3000/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(signupBody)
    })
    const data = await response.json()
    if (response.status == 200) {
      console.log('Account created with new user')
      console.log(data)
      setSignupForm({
        displayName: '',
        email: '',
        password: ''
      })
      navigate('/login')
    } else {
      console.log('error creating account')
      console.log(data)
    }
  }

  return (
    <div>
      <NavBar />
      <div className='container signupForm'>
        <div className='row '>
          <div className='col '>
            <br />
            <h4>Join the Stack Overflow community </h4><br />
            <FontAwesomeIcon icon={faClipboardQuestion} style={{ color: "#1b75d0", }} /> &nbsp; Get unstuck — ask a question <br /> <br />
            <FontAwesomeIcon icon={faUpDown} style={{ color: "#1b75d0", }} /> &nbsp; Unlock new privileges like voting and commenting <br /> <br />
            <FontAwesomeIcon icon={faTags} rotation={90} style={{ color: "#1b75d0", }} /> &nbsp; Save your favorite questions, answers, watch tags, and more <br /> <br />
            <FontAwesomeIcon icon={faTrophy} style={{ color: "#1b75d0", }} /> &nbsp; Earn reputation and badges <br /> <br />
          </div>
          <div className='col shadow mb-5 bg-body-tertiary rounded'>
            <h3>Register User</h3>
            <form onSubmit={handleSignup}>
              <div>
                <b>Display Name</b> <br />
                <input
                  type="text"
                  required
                  value={signupForm.displayName}
                  onChange={(e) => setSignupForm({ ...signupForm, displayName: e.target.value })} />
              </div>
              <br />
              <div>
                <b>Email</b> <br />
                <input
                  type="email"
                  required
                  value={signupForm.email}
                  onChange={(e) => setSignupForm({ ...signupForm, email: e.target.value })} />
              </div>
              <br />
              <div>
                <b>Password</b> <br />
                <input
                  type="password"
                  required
                  value={signupForm.password}
                  onChange={(e) => setSignupForm({ ...signupForm, password: e.target.value })} />
              </div>
              <br />
              <button type='submit' className='btn btn-primary'>Sign up</button>
            </form> <br />
            <div>
              Already have an account? <a href="/login">Log in</a>
            </div>
            <br />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup