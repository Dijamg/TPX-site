import React, { useState } from 'react'
import { Product, SingleProduct, Size, Operators } from '../Assets/data'
import Button from 'react-bootstrap/Button';


const ProductInfo = ({ product, operators }:{ product: Product, operators: Operators }) => {

    //stores the selected size on the dropdown
    const [selectedSize, setSelectedSize] = useState<Size|undefined>(undefined);
    const [selectedQuantity, setSelectedQuantity] = useState<number>(1);


    //Selectable size option in the size selection dropdown
    const sizeOption = (size: Size) => {
        const quantity = size.quantity
        if(quantity === 0){
            return (<option key={size.size} className="outOfStock" disabled >{`${size.size} (Out Of Stock)`}</option>)
        } else {
            return (<option key={size.size}>{size.size}</option>)
        }
    }

    //This gives the user possibility to choose min(quantity of current size, 6) as the maximum quantity for order.
    const quantitySelector = (size: Size | undefined) => {
            let quantityOptions: number = 0
            if(size !== undefined){
                quantityOptions = Math.min(6, size.quantity)
            } else {
                if(product.quantity !== undefined){
                    quantityOptions = Math.min(6, product.quantity)
                } 
            }

            //Create an array which holds integers up to min(6, quantity of current size) which will be converted to options for dropdown.
            const options: number[] = new Array(quantityOptions)
            for(let i = 0; i < quantityOptions; i++){
                options[i] = i + 1; 
            }

            return (
                <select className="form-control quantity-selector" value={selectedQuantity} onChange={e => _handleQuantityChange(e)}>
                    {options.map(q => <option key={q}>{q}</option> )}
                </select>
            )
        
        }

    const _handleSizeChange = (event: React.FormEvent<HTMLSelectElement>) => {
        if(product.size !== undefined){
                const size: (Size | undefined) = product.size.find(s => s.size === event.currentTarget.value)
                setSelectedSize(size)
            }
        }

    const _handleQuantityChange = (event: React.FormEvent<HTMLSelectElement>) => {
        setSelectedQuantity(parseInt(event.currentTarget.value))
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const sizeSelectable = product.size !== undefined

        if(((!sizeSelectable && product.quantity !== undefined) && selectedQuantity > product.quantity) || (sizeSelectable && selectedSize === undefined) || (selectedSize !== undefined && selectedQuantity > selectedSize.quantity)) {
            console.log("Please fill all fields")
        } else {
            const productSize = selectedSize === undefined ? undefined : selectedSize.size
            const addedObject: SingleProduct = {
                id: product.id,
                name: product.name,
                category: product.category,
                img: product.img,
                price: product.price,
                size: productSize,
                quantity: selectedQuantity
            }

            //First we check if the selected product with the same size is already in the cart. If same product exists, increment its quantity by 1, else add new product to cart.
            const indexToBeEdited = operators.shoppingCart.findIndex(cartProduct => (cartProduct.id === addedObject.id) && (cartProduct.size === addedObject.size) )
            if(indexToBeEdited > -1){
                operators.shoppingCart[indexToBeEdited].quantity += addedObject.quantity
            }else{
                operators.setShoppingCart(operators.shoppingCart.concat(addedObject))
            }
            operators.setItemsInCart(operators.itemsInCart + addedObject.quantity)

            if(product.size !== undefined && selectedSize !== undefined){
                const indexToEdit = product.size.indexOf(selectedSize)
                //Decrease the quantity by the amount added to cart.
                product.size[indexToEdit].quantity -= selectedQuantity
                
            } else {
                if(product.quantity !== undefined) {
                    product.quantity -= selectedQuantity
                }
            }

            setSelectedQuantity(1)
            alert("Added to cart!")
        }
    }

    //Dropdown for selecting desired size of product
    const sizedropdown = () => {
        if(product.size !== undefined){
            return(
                <select className="form-control" onChange={e => _handleSizeChange(e)}>
                    <option hidden >SIZE OR TYPE</option>
                    {product.size.map(size => sizeOption(size))}
                </select>
            )
        } else {
            //do nothing
        }
    }

    //Tells if the product is in stock etc.
    const productStatus = () => {
        let quantity = 0;
        if(product.quantity !== undefined){
            quantity = product.quantity
        } else {
            product.size?.forEach(size => quantity += size.quantity);
        }

        if(quantity === 0){
            return <span className="product-page-status-outofstock">OUT OF STOCK</span>
        } else if (quantity < 10) {
            return <span className="product-page-status-limited">LIMITED AVAILABILITY</span>
        } else {
           return <span className="product-page-status-instock">IN STOCK</span>
        }
    }

    return (
            <div className = "product-page">
                  <form onSubmit={(e) => onSubmit(e)}>
                    <div className="product-page-info-container">
                        <div className ="row">
                            <div className='col-10 mx-auto col-md-6 col-lg-6 my-3 product-page-image'>
                                <img src={product.img} alt="product"></img>
                            </div>
                            <div className='col-10 mx-auto col-md-6 col-lg-6 my-3 product-page-info'>
                                <hr/>
                                <h1 className="product-page-title">{product.name}</h1>
                                <hr/>
                                <div className="product-page-description-container">
                                    <h2>Product description</h2>
                                    <p className="product-page-description"> {product.description} </p>
                                </div>
                                <span className="product-page-price">{`${product.price} €`}</span>
                                <hr/>
                                {productStatus()}
                                <hr/>
                                {sizedropdown()}
                                <div className="product-page-button-container">
                                    <Button type="submit" className="product-page-button">Add to cart</Button>
                                    {quantitySelector(selectedSize)}
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
    )
}

export default ProductInfo