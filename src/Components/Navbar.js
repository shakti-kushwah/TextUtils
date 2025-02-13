import React from "react";
import { Link } from "react-router-dom";
// import PropTypes from 'prop-types'

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                {/* <Link className="navbar-brand" to="/">
                    {props.title}
                </Link> */}

                <Link className="navbar-brand" to="/">
                    {props.title}
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link className="nav-link" to="/about">
                                {props.aboutText}
                            </Link>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <button className="btn btn-primary me-4" type="submit">
                            Search
                        </button>

                        <div className="d-flex">
                            <div className="bg-primary rounded mx-2" onClick={()=> {props.toggleMode('primary')}} style={{height:'30px', width: '30px', cursor: 'pointer'}}></div>
                            <div className="bg-danger rounded mx-2" onClick={()=> {props.toggleMode('danger')}} style={{height:'30px', width: '30px', cursor: 'pointer'}}></div>
                            <div className="bg-success rounded mx-2" onClick={()=> {props.toggleMode('success')}} style={{height:'30px', width: '30px', cursor: 'pointer'}}></div>
                            <div className="bg-warning rounded mx-2" onClick={()=> {props.toggleMode('warning')}} style={{height:'30px', width: '30px', cursor: 'pointer'}}></div>
                        </div>

                        <div className={`form-check form-switch text-${props.mode==="light"?"dark":"light"}`}>
                            <input className="form-check-input" onClick={()=> {props.toggleMode(null)}} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                                Toggle Mode
                            </label>
                        </div>
                    </form>
                </div>
            </div>
        </nav>
    )
}


// Navbar.propTypes = {
//     title: PropTypes.string,
//     aboutText: PropTypes.string
// }


/* isRequired - is uses for console does not show any warning */
// Navbar.propTypes = {
//     title: PropTypes.string.isRequired,
//     aboutText: PropTypes.string
// }


// Navbar.defaultProps = {
//     title: 'Set Title Here',
//     aboutText: 'About Text Here'
// }