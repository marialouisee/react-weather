import React, {useContext} from 'react';
import Loader from "react-loader-spinner";

import Context from '../context/Context';
import {WiWindy, WiDaySunny, WiLightning, WiRainWind, WiCloudy, WiSnowflakeCold} from 'react-icons/wi'

const Clouds = () => {
    const {state} = useContext(Context)
    const description = state.weather.weather ? state.weather.weather[0].description : false


    const wIcons = () => {

        const current = state.weather.weather ? state.weather.weather[0].main : false

        switch (current) {
            case 'Thunderstorm':
                return <WiLightning size={50}/>;
            case 'Clear':
                return <WiDaySunny size={50}/>;
            case 'Clouds':
                return <WiCloudy size={50}/>;
            case 'Rain':
                return <WiRainWind size={50}/>;
            case 'Snow':
                return <WiSnowflakeCold size={50}/>;
            case 'Drizzle' :
                return <WiRainWind size={50}/>;
            case 'Mist' || "Smoke" || 'Haze' || 'Dust' || 'Fog' || 'Sand' || 'Ash' || 'Squall' || 'Tornado':
                return <WiWindy size={50}/>;
            default: 
                return '';
        }
    }  

   
    return (
        <div>
            <div>{description? `${description}` : <Loader type="TailSpin" color="black" width={30} height={30}/>}</div>
            <p>{wIcons()}</p>

        </div>
    )
}

export default Clouds
