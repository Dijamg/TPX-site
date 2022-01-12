import React from 'react'
import { SingleProduct } from '../Assets/data'
import { FaTimes } from "react-icons/fa";
import Button from 'react-bootstrap/Button';

const ShoppingCartDropdown = ( { setDropdownCartHovered, productsInCart } : { setDropdownCartHovered: (arg0: React.SetStateAction<boolean>) => void, productsInCart: SingleProduct[] } ) => {

    const cartItem = (item: SingleProduct) => {

        const hasSize = item.size !== undefined

        return(
            <div key={item.id} className="shoppingCart-dropdown-item">
                <div className="row">
                    <div className="col-4">
                        <img className="shoppingCart-dropdown-item-image" src={item.img}></img>
                    </div>
                    <div className="col-8">
                        <div className="row no-gutters">
                            <div className="col">
                                <div className="shoppingCart-dropdown-name">{item.name}</div>
                                <div className="shoppingCart-dropdown-category">{item.category}</div>
                                <div className="shoppingCart-dropdown-pricesize-container">
                                    <span className="shoppingCart-dropdown-price">{item.price} €</span>
                                    <span className="shoppingCart-dropdown-size">{item.size}</span>
                                </div>
                            </div>
                            <div className="col-2">
                                <button type="button" className="shoppingCart-dropdown-removeButton">
                                    <FaTimes className="shoppingCartRemoveIcon"/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="shoppingCart-dropdown-separator"/>
            </div>
        )
    }

    const output = () => {
        if(productsInCart.length < 1){
            return(
                <div>
                    <div className="shoppingCart-dropdown-items"></div>
                    <div className="shoppingCart-dropdown-emptyCart">You have no items in your cart</div>
                </div>
            )
        } else {
            return(
                    <div className="shoppingCart-dropdown-items">
                        {productsInCart.map(a => cartItem(a))}
                        <div className="shoppingCart-checkoutbutton-wrapper"><Button className="shoppingCart-checkoutbutton" variant="danger">Checkout</Button></div>
                    </div>
                    
            )
        }
    }

    return (
        <div className="shoppingCart-dropdown" onMouseEnter={() => setDropdownCartHovered(true)} onMouseLeave={() => setDropdownCartHovered(false)}>
            <h2 className="shoppingCart-dropdown-header">Your Cart</h2>
            <hr className="shoppingCart-dropdown-separator"/>
            {output()}
        </div>
    )
}

export default ShoppingCartDropdown