import React from 'react'
import { Product } from '../Assets/data'
import MerchsiteNavbar from './MerchsiteNavbar'
import { Operators } from '../Assets/data'
import MerchsiteCategories from './MerchsiteCategories'
import ProductInfo from './ProductInfo'

const ProductInfoPage = ({ product, operators}:{ product: Product, operators: Operators }) => {
    return (
        <div className='merch-page' id='merch-page'>
            <MerchsiteNavbar operators={operators}/>
            <MerchsiteCategories categories={operators.categories}/>
            <ProductInfo product = {product} operators={operators}/>
        </div>
    )
}

export default ProductInfoPage