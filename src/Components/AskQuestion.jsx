import React, { useState } from 'react'

function AskQuestion() {
  const[question,setQuestion] = useState({
    title:'',
    details:''
  })
  const handleQuestion = (e) => {
    e.preventDefault()
    console.log('button clicked', question)

    setQuestion ({
      title:'',
      details:''
    })
  }
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <h4>Ask a public question</h4>
          </div>
          <div className="col">
            <img src="" />
          </div>
        </div>
      </div>
      {/* writingAgoodQuestion */}
      <div className="container " id='writingAgoodQuestion'>
        <div className="row">
          <div className="col">
            <p id='writingAgoodQuestionSize'>Writing a good question</p>
            <p>You’re ready to ask a programming-related question and this form will help guide you through the process.</p>
            <div>
              <b>Steps</b>
              <ul id='writingAgoodQuestionUl'>
                <li>Summarize your problem in a one-line title</li>
                <li>Describe your problem in more detail.</li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* title and details*/}
      <div className="container" id='questionTitle'>
        <div className="row">
          <div className="col">
            <b>Title</b>
            <p>Be specific and imagine you’re asking a question to another person.</p>
            <form onSubmit={handleQuestion}>
              <div>
                <input
                  className="d-inline-flex focus-ring py-1 px-2 text-decoration-none border rounded-2"
                  type="text"
                  id="titleInput"
                  placeholder='e.g. Is there an R function for finding the index of an element in a vector?'
                  required
                  value={question.title}
                  onChange={(e)=>setQuestion({...question,title:e.target.value})} /> <br /> <br />
                <b>What are the details of your problem?</b>
                <p>Introduce the problem and expand on what you put in the title. Minimum 20 characters.</p>
                <textarea
                  className="d-inline-flex focus-ring py-1 px-2 text-decoration-none border rounded-2"
                  id="detailsInput"
                  required
                  value={question.details}
                  onChange={(e)=>setQuestion({...question,details:e.target.value})}
                ></textarea> <br /> <br />
                <button className="btn btn-primary" type='submit'>Next</button> <br /> <br />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AskQuestion