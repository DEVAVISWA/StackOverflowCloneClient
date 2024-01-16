import React from 'react'
import { Link } from 'react-router-dom'
import icon from '../assets/icon.png'

function NavBar({ userJson }) {
    const padd = {
        padding: 15
    }

    const logouthandler = () => {
        window.localStorage.removeItem('user')
        window.localStorage.removeItem('token')
        console.log('Logged out successfully')
    }
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
                        </ul>
                    </li>
                    <Link className="navbar-brand active" to={'/allQuestions'}> <img src={icon} /> stack<b>overflow</b></Link>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
                            <li className="nav-item">
                                <Link className="nav-link " to={'/'} >About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/'} >Products</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to={'/'} >For Teams</Link>
                            </li>
                        </ul>
                    </div>
                    <form className="d-flex" role="search">
                        <p><b className='userNameNavbarLogout'>{userJson.displayName}</b></p> &nbsp;
                        <Link className="btn btn-primary" type="submit" id='padingLogout' to='/allQuestions' onClick={logouthandler}>Logout</Link>
                    </form>
                </div>
            </nav>
        </div>

    )
}

export default NavBar