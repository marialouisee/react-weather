import React from 'react'
import {Link} from 'react-router-dom'

const PageNotFound = () => {
    return (
        <div className='notFound'>
            <h1>Hello there...</h1> 
            <Link to='/now'><h3>Check out the current weather</h3> </Link>          
        </div>
    )
}

export default PageNotFound
