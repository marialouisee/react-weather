import React, { useState, useEffect } from 'react'
import {
   Switch,
   Route
  } from "react-router-dom";
import { WiCloudyGusts, WiDaySnow, WiNightLightning, WiRain, WiDaySunny, WiDayWindy  } from "react-icons/wi";
import MyNavbarForecast from './MyNavbarForecast';




const ForecastCard = () => {
    
    const arrIcons = [<WiCloudyGusts/> , <WiDaySnow/>, <WiNightLightning/>, <WiRain/>, <WiDaySunny/>, <WiDayWindy/> ]
    
    const [icon, setIcon] = useState(<WiCloudyGusts/>)
    useEffect(()=>{


    }, [])
  
    return (
        <div className='forecastCard'>
            
            <MyNavbarForecast/>
            
            <div className='icons'>
                {icon}
            </div>

            <Switch>
                <Route />
                <Route/>
            </Switch>
            
        </div>
    )
}

export default ForecastCard
