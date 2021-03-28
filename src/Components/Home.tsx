import React from 'react'
import { Link } from 'react-scroll'

const Home = () => (
    <div className="hero" id='home-page'>
        {/* <div className='wrapper'>
          <div className='title'>
            <h1 style={fontstyle}>The</h1>
            <h2 style={fontstyle}>Phantom Phoenix</h2>
            <h1 style={fontstyle}>Organization</h1>
          </div>
        </div> */}
        <Link
          className="arrow"
          activeClass="active"
          to="members-page"
          spy={true}
          smooth={true}
          offset={-70}
          duration= {500}
        ></Link>
    </div>
)

export default Home