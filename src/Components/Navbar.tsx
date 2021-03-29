import React from 'react'
import { Link } from 'react-scroll'
import {
    NavLink
  } from 'react-router-dom'

  const activeStyle = {
    color: 'red'
}

const Navbar = () => (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark" style={{backgroundColor: 'black'}}>
        <Link
            className="navbar-brand"
            activeClass="active"
            to="home-page"
            spy={true}
            smooth={true}
            offset={-70}
            duration= {500}
        ><span className='link'>HOME</span></Link>
        
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                <Link
                        className="nav-link text-white text-uppercase"
                        activeClass="active"
                        to="members-page"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {500}
                    ><span className='link'>Members</span></Link>
                </li>
                <li className="nav-item">
                    <Link
                        className="nav-link text-white text-uppercase"
                        activeClass="active"
                        to="tournaments-page"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {500}
                    ><span className='link'>Tournaments</span></Link>
                </li>
                <li className="nav-item">
                <Link
                        className="nav-link text-white text-uppercase"
                        activeClass="active"
                        to="about-page"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {500}
                    ><span className='link'>About</span></Link>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link text-white text-uppercase" activeStyle={activeStyle} to="merch">Merchandise</NavLink>
                </li>   
            </ul>
        </div>
    </nav>
    
)

export default Navbar 