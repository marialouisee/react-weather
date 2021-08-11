import React from 'react'
import Forecast3H from './Forecast3H';
import ForecastTomorrow from './ForecastTomorrow';

const ForecastCard = () => {
    
    return (
        <div className='forecastCard'>
            <Forecast3H/>
            <ForecastTomorrow/>
        </div>
    )
}

export default ForecastCard
