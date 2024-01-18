import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'

function About() {
    return (
        <div>
            <NavBar />
            <div className='container'>
                
                    <h2> Every
                        <div className="aboutPadd d-md-flex" >
                            <div id="containerAnimation" className="container-bottom-to-up " ><p className="top-to-bottom ">Developer</p></div> &nbsp; &nbsp;
                            <div id="containerAnimation" className="container-bottom-to-up" >   <p className="bottom-to-up">GameDeveloper</p>  </div> &nbsp; &nbsp;
                            <div id="containerAnimation" className="container-bottom-to-up" ><p className="top-to-bottom">MobileDeveloper</p>  </div> &nbsp; &nbsp;
                            <div id="containerAnimation" className="container-bottom-to-up" >   <p className="bottom-to-up">DataScientist</p>  </div> &nbsp; &nbsp;
                        </div> has a<br className="lg:d-none" /> tab open to<br className="d-none lg:d-block" /> Stack Overflow
                    </h2>
                
            </div>
            <Footer />
        </div>
    )
}

export default About