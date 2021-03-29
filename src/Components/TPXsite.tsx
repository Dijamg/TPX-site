import React from 'react'
import { Operators } from '../Assets/data'
import Home from './Home'
import Members from './Members'
import Tournaments from './Tournaments'
import About from './About'
import Navbar from './Navbar'


const TPXsite = ({ operators }: { operators: Operators}) => (
    <div className="page-containers">
        <Navbar/>
        <Home/>
        <Members operators={operators}/>
        <Tournaments/>
        <About/>
    </div>
)

export default TPXsite