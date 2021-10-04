import React, { useState } from 'react'
import { FaHome, FaShoppingCart } from "react-icons/fa";
import ShoppingCartDropdown from './ShoppingCartDropdown'

import {
    Link
  } from 'react-router-dom'

const MerchsiteNavbar = () => {

    const ShoppingCart = () => showShoppingCart ? <ShoppingCartDropdown setDropdownCartHovered = {setDropdownCartHovered}/> : <div></div>;

    const [shoppingCardHovered, setShoppingCartHovered] = useState<boolean>(false);
    const [dropdownCartHovered, setDropdownCartHovered] = useState<boolean>(false);
    const showShoppingCart: boolean = (shoppingCardHovered || dropdownCartHovered);


    return (
        <div>
            <div className="merchnav">
                <Link className="homeButton" to="/"><FaHome className="homeIcon"/></Link>
                <span className="merchandise-title">TPX Merch</span>
                <span className="shoppingCardButton" onMouseEnter={() => setShoppingCartHovered(true)} onMouseLeave={() => setShoppingCartHovered(false)}><FaShoppingCart className="shoppingCardIcon"/></span>
            </div>
            {ShoppingCart()}
        </div>
        
    )
}

export default MerchsiteNavbar 