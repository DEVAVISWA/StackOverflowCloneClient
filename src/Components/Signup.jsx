import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboardQuestion, faTags, faTrophy, faUpDown } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'


function Signup() {

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
    } else {
      console.log('error creating account')
      console.log(data)
    }
  }

  return (
    <div>
      <h4>Join the Stack Overflow community </h4><br />
      <FontAwesomeIcon icon={faClipboardQuestion} style={{ color: "#1b75d0", }} /> Get unstuck — ask a question <br />
      <FontAwesomeIcon icon={faUpDown} style={{ color: "#1b75d0", }} /> Unlock new privileges like voting and commenting <br />
      <FontAwesomeIcon icon={faTags} rotation={90} style={{ color: "#1b75d0", }} /> Save your favorite questions, answers, watch tags, and more <br />
      <FontAwesomeIcon icon={faTrophy} style={{ color: "#1b75d0", }} /> Earn reputation and badges <br /> <br />
      <h3>Register User</h3>
      <form onSubmit={handleSignup}>
        <div>
          <label>Display Name</label> <br />
          <input
            type="text"
            required
            placeholder='enter your name...'
            value={signupForm.displayName}
            onChange={(e) => setSignupForm({ ...signupForm, displayName: e.target.value })} />
        </div>
        <div>
          <label>Email</label> <br />
          <input
            type="email"
            required
            placeholder='enter your email..'
            value={signupForm.email}
            onChange={(e) => setSignupForm({ ...signupForm, email: e.target.value })} />
        </div>
        <div>
          <label>Password</label> <br />
          <input
            type="password"
            required
            placeholder='enter your password...'
            value={signupForm.password}
            onChange={(e) => setSignupForm({ ...signupForm, password: e.target.value })} />
        </div>
        <br />
        <button type='submit'>Sign up</button>
      </form>
      <div>
        Already have an account? <a href="http://localhost:5173/login">Log in</a>
      </div>
    </div>
  )
}

export default Signup