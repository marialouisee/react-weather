import React, {useContext} from 'react'
import Context from '../context/Context';
import Loader from "react-loader-spinner";
import Clouds from './Clouds';

const Forecast3H = () => {

    const {state} = useContext(Context)

    // temperature
    const temp = state.forecast.list?  (state.forecast.list[0].main.temp).toFixed() : false
    const feelTemp = state.forecast.list?  (state.forecast.list[0].main.temp).toFixed() : false

  
  console.log(state)
    return (
        <div className='forecast3h'>
            <p className='title'>3 hours from now</p>
            <div className='body'>
                <h2>{temp ? `${temp} ° Celsius` : <div className='spinnerTemp'> temperature: <Loader type="TailSpin" color="black" width={15} height={15}/></div>}  </h2>
                <h5>{temp ? `feels like ${feelTemp} ° Celsius` : " "   }  </h5>
                <Clouds/>
            </div>
        </div>
    )
}

export default Forecast3H
