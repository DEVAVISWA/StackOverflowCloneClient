import React from 'react'


function Footer() {
    return (
        <div id='footer'>
            <div className="container">
                <footer className="py-3 my-4">
                    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                        <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Home</a></li>
                        <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Questions</a></li>
                        <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Products</a></li>
                        <li className="nav-item"><a href="https://www.facebook.com/officialstackoverflow/" className="nav-link px-2 text-body-secondary">Facebook</a></li>
                        <li className="nav-item"><a href="https://www.linkedin.com/company/stack-overflow" className="nav-link px-2 text-body-secondary">LinkedIn</a></li>
                    </ul>
                    <p className="text-center text-body-secondary">© 2023 Company, Inc</p>
                </footer>
            </div>            
        </div>
    )
}

export default Footer