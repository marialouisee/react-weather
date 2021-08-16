import React, {useContext} from 'react';
import Loader from "react-loader-spinner";
import WeatherContext from '../context/weather/WeatherContext';
import {WiWindy, WiDaySunny, WiLightning, WiRainWind, WiCloudy, WiSnowflakeCold} from 'react-icons/wi'

const Clouds = () => {
    const {state} = useContext(WeatherContext)
   
    const description = state.type === 'weather'? (state.weather.weather? state.weather.weather[0].description : '' ): (state.forecast.list?  state.forecast.list[0].weather[0].description : '')
        

    const wIcons = () => {
        
        const current = state.type === 'weather'?
        (state.weather.weather ?  state.weather.weather[0].main : "") :(state.forecast.list? state.forecast.list[0].weather[0].main : '') 
        
        switch (current) {
            case 'Thunderstorm':
                return <WiLightning size={50} color='lightskyblue'/>;
            case 'Clear':
                return <WiDaySunny size={50} color='lightskyblue'/>;
            case 'Clouds':
                return <WiCloudy size={50} color='lightskyblue'/>;
            case 'Rain':
                return <WiRainWind size={50} color='lightskyblue'/>;
            case 'Snow':
                return <WiSnowflakeCold size={50} color='lightskyblue'/>;
            case 'Drizzle' :
                return <WiRainWind size={50} color='lightskyblue'/>;
            case 'Mist' || "Smoke" || 'Haze' || 'Dust' || 'Fog' || 'Sand' || 'Ash' || 'Squall' || 'Tornado':
                return <WiWindy size={50} color='lightskyblue'/>;
            default: 
                return '';
        }
    }  

   
    return (
        <div>
            <div>{description ? `${description}` : <Loader type="TailSpin" color="black" width={30} height={30}/>}</div>
            <p>{wIcons()}</p>

        </div>
    )
}

export default Clouds
