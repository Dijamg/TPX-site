import React from 'react'
import { Product } from '../Assets/data'

const ProductCard = ({ product }:{ product: Product }) => {


    return (
        <React.Fragment>
            <div className='col-10 mx-auto col-md-6 col-lg-3 my-3'>
                <div className="product-card">
                    <img className="product-card-image" alt="productimg" src={product.img}/>
                    <div className ="product-card-text-container">
                        <div className="product-card-product-name">{product.name}</div>
                        <div className="product-card-product-description">{product.description}</div>
                        <div className ="product-card-product-pricecontainer">
                            <div>
                                <span className="product-card-product-price">{product.price}</span>
                            </div>
                        </div>
                        <div className ="product-card-product-status">
                            <div className="product-card-product-inventorystatus">{product.status}</div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ProductCard