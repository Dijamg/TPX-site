import React from 'react'
import { SingleProduct, Operators } from '../Assets/data'
import { FaTimes } from "react-icons/fa";
import Button from 'react-bootstrap/Button';

const ShoppingCartDropdown = ( { setDropdownCartHovered, operators } : { setDropdownCartHovered: (arg0: React.SetStateAction<boolean>) => void, operators: Operators } ) => {

    //Removes the item from the shopping cart. Adds the items back to the available items in the store.
    const onDelete = (item: SingleProduct) => {

        let isAccepted = window.confirm("Are you sure you want to remove the item from the shopping cart?")

        if(isAccepted){
            const productToEdit = operators.products.find(product => product.id === item.id)
            if(productToEdit !== undefined){
                if(productToEdit.size !== undefined && item.size !== undefined) {
                    const indexToEdit = productToEdit.size.findIndex(size => size.size === item.size)
                    productToEdit.size[indexToEdit].quantity += item.quantity
                } else {
                    if(productToEdit.quantity !== undefined) productToEdit.quantity += item.quantity
                }

                operators.setShoppingCart(operators.shoppingCart.filter(product => (product.id !== item.id) || (product.size !== item.size)))
                operators.setItemsInCart(operators.itemsInCart - item.quantity)
            }
        }
            
    }

    const cartItem = (item: SingleProduct) => {
        return(
            <div key={`${item.id}${item.size}`} className="shoppingCart-dropdown-item">
                <div className="row">
                    <div className="col-4">
                        <img className="shoppingCart-dropdown-item-image" alt={item.name} src={item.img}></img>
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
                                <span className="shoppingCart-dropdown-quantity">
                                    {item.quantity} pc
                                </span>
                            </div>
                            <div className="col-2">
                                <button type="button" className="shoppingCart-dropdown-removeButton">
                                    <FaTimes onClick={() => onDelete(item)} className="shoppingCartRemoveIcon"/>
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
        if(operators.shoppingCart.length < 1){
            return(
                <div>
                    <div className="shoppingCart-dropdown-items"></div>
                    <div className="shoppingCart-dropdown-emptyCart">You have no items in your cart</div>
                </div>
            )
        } else {
            return(
                    <div className="shoppingCart-dropdown-items">
                        {operators.shoppingCart.map(a => cartItem(a))}
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