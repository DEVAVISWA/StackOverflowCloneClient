import React from 'react'
// import { Link } from 'react-router-dom'
// import BodyDummyContent from './BodyDummyContent'
// import Footer from './Footer'
import { Link } from 'react-router-dom'

function NavBar() {
    const padd = {
        padding: 15
    }
    // const pleaseLogin = () => {
    //     alert('Please Login or Signup')
    // }

    return (
        <div>
            {/* navbar */}
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">

                    <li className="nav-item dropdown" style={padd}>
                        <Link className="nav-link " to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                            <i className="fa-solid fa-bars"></i>
                        </Link>
                        <ul className="dropdown-menu">
                            <li><Link className="dropdown-item" to={'/'}><i className="fa-solid fa-house"></i> Home</Link></li>
                            <li><Link className="dropdown-item" to={'/allQuestions'}><i className="fa-solid fa-circle-question" ></i> Questions</Link></li>
                            <li><Link className="dropdown-item" to={'/tags'}><i className="fa-solid fa-tags fa-rotate-90"></i> Tag</Link></li>

                            {/* <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li> */}

                        </ul>
                    </li>
                    <Link className="navbar-brand active" to={'/allQuestions'}> <i className="fa-brands fa-stack-overflow"></i> stack overflow</Link>

                    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button> */}

                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
                            <li className="nav-item">
                                <Link className="nav-link " to={'/'} >About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/#'} >Products</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to={'/teams'} >For Teams</Link>
                            </li>
                        </ul>
                    </div>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="⌕ Search" aria-label="Search" id='searchBar' />
                        <Link className="btn btn-outline-primary" type="submit" id='padingLoginSignup' to='/login'>Login</Link>
                        <Link className="btn btn-primary" type="submit" id='padingLoginSignup' to='/signup'>Signup</Link>
                        {/* <Routes>
                            <Route path='/login' element={<Login/>} />
                            <Route path='/signup' element={<Signup/>} />
                        </Routes> */}
                    </form>
                </div>
            </nav>
        </div>

    )
}

export default NavBar