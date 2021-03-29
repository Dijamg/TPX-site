import React from 'react'
import MerchsiteNavbar from './MerchsiteNavbar'

const MerchStore = () => (
    <div>
        <MerchsiteNavbar/>
        <div className='merchHeroImage'></div>
        
        <div className='merch-page' id='merch-page'>
            <h1>Merchandise</h1>
            <p>
                Merch store will be here..
            </p>
        </div>
    </div>
)

export default MerchStore