import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
    return (
        <>
            <header className="header sticky-top">
                <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
                    <div className="container"><NavLink className="navbar-brand" to="/">
                        <strong className="h6 mb-0 font-weight-bold text-uppercase">HUNNUR</strong></NavLink>
                        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item active"><NavLink className="nav-link" to="/">Home</NavLink></li>
                                <li className="nav-item"><NavLink className="nav-link" to="#">Projects</NavLink></li>
                                <li className="nav-item"><NavLink className="nav-link" to="#">Contact Us</NavLink></li>
                                {/* <li className="nav-item"><NavLink className="nav-link disabled" to="#">Disabled</NavLink></li> */}
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>

            <section className="py-5 section-1">
                <div className="container py-5 text-center">
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            <h2> I'M <b>K HUNNURJI RAO</b></h2>
                            <p className="text-muted lead">Welcome to this website, here you can find projects related to Machine Learning, Deep Learning & Natural Language Processing. Not only in AI, you can also find projects related to web technologies such as Bootstrap, React JS, MongoDB, python Flask. Please have a look at the projects you are interested in. </p>
                        </div>
                    </div>
                </div>
            </section>





        </>
    )
}

export default Navbar