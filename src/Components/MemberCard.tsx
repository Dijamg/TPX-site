import React, { useState } from 'react'
import { Member, Operators } from '../Assets/data'
import MemberInfo from './MemberInfo'

const MemberCard2 = ({ member, operators }:{ member: Member, operators: Operators }) => {
    //Determines the visibility of the "More" page
    const [showMore, setShowMore] = useState<boolean>(false);
    const handleShowMore = () => setShowMore(true);
    
    const MorePage = () => <MemberInfo member={ member } operators={operators} show={ showMore } handleClose={ () => setShowMore(false)} />

    return (
        <React.Fragment>
            <div className='col-10 mx-auto col-md-6 col-lg-4 my-3'>
                <div className='card text-center'>
                    <div className="overflow">
                        <img src={member.imgUrl} style={{height:'14rem'}} alt="member" className="card-img-top"/>
                    </div>
                    <div className="card-body text-dark">
                        <h4 className="card-title">{member.name}</h4>
                        <p className="card-text text-secondary">
                            {member.description}
                        </p>
                        <button type='button' className="btn btn-outline-success" onClick= {() => handleShowMore()}>
                            Read More
                        </button>
                    </div>
                </div>
            </div>
            { MorePage() }
        </React.Fragment>
    )
}

export default MemberCard2