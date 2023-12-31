import React, { useEffect } from 'react'
import NavBar from './NavBar'
import Footer from './Footer'

function About() {
    // useEffect(() => {
    //     alert('Please Login To Ask Questions')
    // }, [])

    return (
        <div>
            <NavBar />
            <div className='container'>
                <h2> Every
                    <div className="aboutPadd js-user-slider p-home-tagline va-bottom ps-relative ws-nowrap d-inline-flex fd-column ai-center fc-orange-400 lg:d-block mx-auto ta-center js-loaded" data-words="developer, data scientist, system admin, mobile developer, game developer" >
                        <div id="containerAnimation" className="container-bottom-to-up" ><p className="top-to-bottom">Developer</p></div> &nbsp; &nbsp;
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