import React, {useContext} from 'react'
import { NavLink} from "react-router-dom";
import Context from '../context/Context'


const MyNavbar = () => {
    const {state, dispatch} = useContext(Context)

    const setTypeNow =()=>{
        dispatch({type: 'set-type', payload: 'weather'})
    }

    const setTypeForecast =()=>{
        dispatch({type: 'set-type', payload: 'forecast'})
    }

    return (
        <nav className='nav'>
            <ul>
                <li><NavLink onClick={setTypeNow} to='/now' activeClassName='active'>now</NavLink></li>
                <li><NavLink onClick={setTypeForecast} to='/forecast' activeClassName='active'>forecast</NavLink></li>
            </ul>
        </nav>
    )
}

export default MyNavbar
