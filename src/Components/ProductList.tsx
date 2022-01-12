import React from 'react'
import { Product, SingleProduct } from '../Assets/data'
import ProductCard from './ProductCard'

const ProductList = ({ products, shoppingCart }: { products: Product[], shoppingCart: SingleProduct[] }) => (
    <div className='products-list' id='products-list'>
        <div className='container'>
            <div className='row'>
                {products.map(product => {
                    return <ProductCard key={product.id} product={product}/>
                })}
            </div>
        </div>
    </div>
)

export default ProductList