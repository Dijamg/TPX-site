import React from 'react'
import { Operators } from '../Assets/data'
import MemberCard from './MemberCard'

const Members = ({ operators }:{ operators: Operators }) => (
    <div className='members-page' id='members-page'>
        <div className='container my-5'>
            {/* title*/}
            <div className='row'>
                <div className='col-10 mx-auto col-md-6 text-center text-uppercase mb-3'>
                    <h1 className='text-slanted'>Members</h1>
                </div>
            </div>
            {/* end of title */}
            <div className='row'>
                {operators.members.map(member => {
                    return <MemberCard operators={operators} key={member.id} member={member}/>
                })}
            </div>
        </div>
    </div>
)

export default Members