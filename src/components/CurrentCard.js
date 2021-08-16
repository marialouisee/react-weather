import React, {useContext} from 'react'
import WeatherContext from '../context/weather/WeatherContext';
import Loader from "react-loader-spinner";
import Clouds from './Clouds';

const CurrentCard = () => {

    const {state} = useContext(WeatherContext)

    // console.log(state)
    // temperature
    const temp = state.weather.main?  (state.weather.main.temp).toFixed() : false
    const feelTemp = state.weather.main?  (state.weather.main.feels_like).toFixed() : false

    // wind
    const wind = state.weather.wind ? (state.weather.wind.speed) : false
   
    return (
        <div className='currentCard'>
            <div>
                <h2>{temp ? `${temp} ° Celsius` : <div className='spinnerTemp'> temperature: <Loader type="TailSpin" color="black" width={15} height={15}/></div>}  </h2>
                
                <h5>{temp ? `feels like ${feelTemp} ° Celsius` : " "   }  </h5>
            </div>
            <Clouds/>
            <div>
                <p> wind: {wind? `${wind} m/sec` : <Loader type="TailSpin" color="black" width={15} height={15}/> }</p>
            </div>
        </div>
    )
}

export default CurrentCard
