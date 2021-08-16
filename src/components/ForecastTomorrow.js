import React, {useContext} from 'react'
import WeatherContext from '../context/weather/WeatherContext';

const ForecastTomorrow = () => {
    const {state} = useContext(WeatherContext)

    let date = new Date();
    let nextDay = new Date(date);
    nextDay.setDate(date.getDate() + 1);

    const year = nextDay.getFullYear();
    const month = nextDay.getMonth()+1;
    const day = nextDay.getDate();
    const nextDayString = month < 10? `${year}-0${month}-${day} 00:00:00` : `${year}-${month}-${day} 00:00:00`
   
    const filteredState = state.forecast.list? 
        (state.forecast.list.map((item, index)=>{ return item.dt_txt})) 
        : []
    const index = state.forecast.list? filteredState.indexOf(nextDayString): ''
    
    const arrAllIndex = [index+2, index+4, index+6]
    const nextDate = `${day}-${month}-${year}`


    return (
        <div>
            <p className='title'>tomorrow {nextDate}</p>
            <div className=' bodyTomorrow'>
                {arrAllIndex.map((item, i)=>{
                   return state.forecast.list? <div className='forecastItems' key={i}>
                                                    <p>{state.forecast.list[item].dt_txt.slice(11, 16)}</p>
                                                    <p>{state.forecast.list[item].main.temp.toFixed()} °C</p>
                                                    <p>{state.forecast.list[item].weather[0].description}</p>
                                                    </div> 
                                                : false 
                })}

            </div>
        </div>
    )
}

export default ForecastTomorrow
