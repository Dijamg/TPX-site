import React from 'react'
import MerchsiteNavbar from './MerchsiteNavbar'
import { Category } from '../Assets/data'

//Temporary array to test the look of the website.
const products: Category[] = [
    {
        name: "Hoodies",
        img: "https://firebasestorage.googleapis.com/v0/b/tpx-json.appspot.com/o/MerchImages%2Fbestzediraqmerch.PNG?alt=media&token=14e017f1-6518-431b-945a-710a966685bd"
    },
    {
        name: "Headwear",
        img: "https://firebasestorage.googleapis.com/v0/b/tpx-json.appspot.com/o/MerchImages%2Fbzicap.PNG?alt=media&token=a4b68649-ffe7-4ae7-b200-32ed3af9b0f3"
    },
    {
        name: "T-shirts",
        img: "https://firebasestorage.googleapis.com/v0/b/tpx-json.appspot.com/o/MerchImages%2Flenkkismerch.PNG?alt=media&token=44ba52c9-5db6-47ee-a7ca-86d955f36782"
    }
]

const MerchStore = () => (
    <div>
        <MerchsiteNavbar/>
        <div className='merchHeroImage'>
            <div className='categoriesContainer'>
                { products.map( product => (
                    <div className="category" key={product.name}>
                        <img className='categoryImage' src={product.img}></img>
                        <span className='categoryName'>{product.name}</span>
                    </div>
                ))}
            </div>
        </div>
        
        <div className='merch-page' id='merch-page'>
            <h1>Merchandise</h1>
            <p>
                Merch store will be here.. Work is still in progress.
            </p>
        </div>
    </div>
)

export default MerchStore