import React from 'react'
import {
    NavLink
  } from 'react-router-dom'

const MerchsiteNavbar = () => {
    const activeStyle = {
        backgroundColor: '#2196F3',
        color: 'white'
    }

    return (
        <div className="merchnav">
            <NavLink activeStyle={activeStyle} to="/">Back</NavLink>
        </div>
        
    )
}

export default MerchsiteNavbar 