import React, { useState } from 'react'
import MerchsiteNavbar from './MerchsiteNavbar'
import { Operators, Product } from '../Assets/data'
import ProductList from './ProductList'
import ProductInfo from './ProductInfo'
import {
    Link
  } from 'react-router-dom'


  //Navlink has to="/merch" so that users can navigate back to the store after clicking a certain product.
  const MerchStore = ({ operators, product }: { operators: Operators, product: Product|undefined}) => {

    const [displayProducts, setDisplayProducts] = useState<Product[]>(operators.products.filter(product => product.category === "Hoodie"))

    const selectFilter = (category : string): void => {
        console.log(category)
        setDisplayProducts(operators.products.filter(product => product.category === category))
    }
    
    const output = () => {
        if(product !== undefined){
            return <ProductInfo product={product} />
        } else {
            return <ProductList products={displayProducts}/>
        }
    }


    return (
        <div className='merch-page' id='merch-page'>
            <MerchsiteNavbar/>
            <div className='categoriesContainer'>
                { operators.categories.map( category => (
                    <Link to ="/merch" className="category"  key={category.name} onClick={() => selectFilter(category.name)}>
                        <span className='categoryName'>{category.name}</span>  
                    </Link>
                ))}
            </div>
            
            <div className='merch-page-store' id='merch-page-store'>
                {output()}
            </div>
        </div>
    )
}

export default MerchStore