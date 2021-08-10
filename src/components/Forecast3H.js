import React, {useContext} from 'react'
import Context from '../context/Context';

const Forecast3H = () => {

    const {state} = useContext(Context)


    const unixTime = 1628618400;
    const date2 = new Date(unixTime*1000);

    let date = new Date()
    const today = state.weather.list ? date.setTime(state.weather.list[0].dt*1000) : false

    setTimeout(()=> {
        console.log('date2',date2)
        console.log(date)
    }, 2000)
   
// state.weather.list
    console.log(state)
    return (
        <div>
            
        </div>
    )
}

export default Forecast3H
