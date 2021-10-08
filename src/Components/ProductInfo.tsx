import React from 'react'
import { Product, Size } from '../Assets/data'
import Button from 'react-bootstrap/Button';


const ProductInfo = ({ product }:{ product: Product }) => {

    const sizeOption = (size: Size) => {
        const quantity = size.quantity;
        if(quantity === 0){
            return (<option key={size.size} className="outOfStock">{`${size.size} (Out Of Stock)`}</option>)
        } else {
            return (<option key={size.size}>{size.size}</option>)
        }
    }

    const sizedropdown = () => {
        if(product.size !== undefined){
            return(
                <select className="form-control">
                    <option hidden >SIZE OR TYPE</option>
                    {product.size.map(size => sizeOption(size))}
                </select>
            )
        } else {
            //do nothing
        }
    }

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
                                <Button onClick={() => console.log(product.size)} className="product-page-button">Add to cart</Button>
                                <select className="form-control quantity-selector">
                                    <option> 1 </option>
                                    <option> 2 </option>
                                    <option> 3 </option>
                                    <option> 4 </option>
                                    <option> 5 </option>
                                    <option> 6 </option>
                            </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default ProductInfo