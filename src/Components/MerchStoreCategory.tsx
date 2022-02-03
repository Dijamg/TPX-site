import React from 'react'
import MerchsiteNavbar from './MerchsiteNavbar'
import { Operators, SingleProduct } from '../Assets/data'
import ProductList from './ProductList'
import MerchsiteCategories from './MerchsiteCategories'


  //Navlink has to="/merch" so that users can navigate back to the store after clicking a certain product.
  const MerchStoreCategory = ({ operators, categoryName}: { operators: Operators, categoryName: string}) => {

    const displayProducts = operators.products.filter(product => product.category === categoryName)

    return (
        <div className='merch-page' id='merch-page'>
            <MerchsiteNavbar operators = {operators}/>
            <MerchsiteCategories categories={operators.categories}/>
            <div className='merch-page-store' id='merch-page-store'>
                <ProductList products={displayProducts} shoppingCart={operators.shoppingCart}/>
            </div>
        </div>
    )
}

export default MerchStoreCategory