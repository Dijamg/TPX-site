import React from 'react'

const ShoppingCartDropdown = ( { setDropdownCartHovered } : { setDropdownCartHovered: (arg0: React.SetStateAction<boolean>) => void } ) => (
    <div className="shoppingCart-dropdown" onMouseEnter={() => setDropdownCartHovered(true)} onMouseLeave={() => setDropdownCartHovered(false)}>
        <h2 className="shoppingCart-dropdown-header">Your Cart</h2>
        <hr className="shoppingCart-dropdown-separator"/>
        <div className="shoppingCart-dropdown-items"></div>
        <div className="shoppingCart-dropdown-emptyCart">You have no items in your cart</div>
        <hr className="shoppingCart-dropdown-separator"/>
    </div>
)

export default ShoppingCartDropdown