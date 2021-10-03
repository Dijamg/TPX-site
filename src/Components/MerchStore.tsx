import React, { useState } from 'react'
import MerchsiteNavbar from './MerchsiteNavbar'
import { Operators, Product } from '../Assets/data'
import ProductList from './ProductList'

const MerchStore = ({ operators }: { operators: Operators}) => {

    const [displayProducts, setDisplayProducts] = useState<Product[]>(operators.products.filter(product => product.category === "Hoodie"))

    const selectFilter = (category : string): void => {
        console.log(category)
        setDisplayProducts(operators.products.filter(product => product.category === category))
    }
    


    return (
        <div className='merch-page' id='merch-page'>
            <MerchsiteNavbar/>
            <div className='categoriesContainer'>
                { operators.categories.map( category => (
                    <li className="category"  key={category.name} onClick={() => selectFilter(category.name)}>
                        <a className='categoryName'>{category.name}</a>
                    </li>
                ))}
            </div>
            
            <div className='merch-page-store' id='merch-page-store'>
                <ProductList products={displayProducts}/>
            </div>
        </div>
    )
}

export default MerchStore