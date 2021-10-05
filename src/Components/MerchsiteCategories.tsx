import React from 'react'
import { Category } from '../Assets/data'
import {
    Link,
  } from 'react-router-dom'

const MerchsiteCategories = ({ categories }: { categories: Category[] }) => (
    <div className='categoriesContainer'>
        { categories.map( category => (
            <Link to ={`/merch/${category.name}`} className="category"  key={category.name}>
                <span className='categoryName'>{category.name}</span>  
            </Link>
        ))}
    </div>
)

export default MerchsiteCategories