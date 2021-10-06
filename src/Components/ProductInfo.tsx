import React from 'react'
import { Product } from '../Assets/data'
import Button from 'react-bootstrap/Button';


const ProductInfo = ({ product }:{ product: Product }) => {
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
                            <span className="product-page-status">{product.status}</span>
                            <hr/>
                            <select className="form-control">
                                <option hidden >SIZE OR TYPE</option>
                                <option> XS </option>
                                <option> S </option>
                                <option> M </option>
                                <option> L </option>
                                <option> XL </option>
                                <option> XXL </option>
                            </select>
                            <div className="product-page-button-container">
                                <Button className="product-page-button">Add to cart</Button>
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