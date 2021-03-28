import React, { useState } from 'react'
import { Member, Operators } from '../Assets/data'
import MemberInfo from './MemberInfo'


const MemberCard = ({ member, operators }:{ member: Member, operators: Operators }) => {

     //Determines the visibility of the "More" page
     const [showMore, setShowMore] = useState<boolean>(false);
     const handleShowMore = () => setShowMore(true);
     
     const MorePage = () => <MemberInfo member={ member } operators={operators} show={ showMore } handleClose={ () => setShowMore(false)} />


    return(
        <React.Fragment>
            <div className='col-10 mx-auto col-md-6 col-lg-4 my-3'>
                <div className='card'>
                    <img 
                        src={member.imgUrl}
                        className='img-card-top'
                        style={{height:'14rem'}}
                        alt='member'
                        />
                        <div className='card-body text-capitalize'>
                            <h6>{member.name}</h6>
                            <h6 className='text-warning text-slanted'>
                                {member.description}
                            </h6>
                        </div>
                        <div className='card-footer'>
                            <button type='button' className='btn btn-primary' onClick= {() => handleShowMore()}>
                                More
                            </button>
                        </div>  
                </div>
            </div>
            { MorePage() }
        </React.Fragment>
        )
    }

export default MemberCard
    
