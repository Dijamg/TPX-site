import React, { useState } from 'react'
import { FaHome, FaShoppingCart } from "react-icons/fa";
import ShoppingCartDropdown from './ShoppingCartDropdown'

import {
    Link
  } from 'react-router-dom'
import { SingleProduct, Operators } from '../Assets/data';

const MerchsiteNavbar = ( { operators }:{ operators: Operators }) => {

    const shoppingCart: SingleProduct[] = operators.shoppingCart

    const ShoppingCart = () => showShoppingCart ? <ShoppingCartDropdown setDropdownCartHovered = {setDropdownCartHovered} operators={operators}/> : <div></div>;

    const [shoppingCardHovered, setShoppingCartHovered] = useState<boolean>(false);
    const [dropdownCartHovered, setDropdownCartHovered] = useState<boolean>(false);
    const showShoppingCart: boolean = (shoppingCardHovered || dropdownCartHovered);

    const numberOfProductsInCart: number = shoppingCart.length;

    const style =  {display : (numberOfProductsInCart > 0) ? '' : 'none'}


    return (
        <div>
            <div className="merchnav">
                <Link className="homeButton" to="/"><FaHome className="homeIcon"/></Link>
                <span className="merchandise-title">TPX Merch</span>
                <span className="shoppingCardButton" onMouseEnter={() => setShoppingCartHovered(true)} onMouseLeave={() => setShoppingCartHovered(false)}>
                    <FaShoppingCart className="shoppingCardIcon"/>
                    <span style={style} className="shoppingCartBadge">{numberOfProductsInCart}</span>
                </span>
            </div>
            {ShoppingCart()}
        </div>
        
    )
}

export default MerchsiteNavbar 