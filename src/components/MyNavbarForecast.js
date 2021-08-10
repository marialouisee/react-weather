import React from 'react'
import {NavLink} from "react-router-dom";

const MyNavbarForecast = () => {
    return (
            <nav >
                <ul className='forecastNav'>
                    <li><NavLink to='/forecast/3hours' activeClassName='active'>3 hours </NavLink></li>
                    <li><NavLink to='/forecast/tomorrow' activeClassName='active'>tomorrow </NavLink></li>
                </ul>
            </nav>
    
    )
}

export default MyNavbarForecast
