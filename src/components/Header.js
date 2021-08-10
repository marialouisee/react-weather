import React, {useContext} from 'react'
import Context from '../context/Context'

const Header = () => {
    const {state, dispatch} = useContext(Context)

    // console.log(state)
    return (
        <div className='header'>
            <h1> YOUR WEATHER IN {state.city.toUpperCase()}</h1>
            
        </div>
    )
}

export default Header
