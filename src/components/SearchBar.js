import React , {useContext, useState} from 'react';
import WeatherContext from '../context/weather/WeatherContext';
import NotificationsContext from '../context/notification/NotificationsContext';
import { BsSearch } from "react-icons/bs";
import CurrentLocation from './Location';
import Notifications from './Notifications';


const SearchBar = () => {

    const {state, dispatch} = useContext(WeatherContext)
    const {addNotification} = useContext(NotificationsContext)

    const [currInput, setCurrInput] = useState('')
 
    // to check if input (currInput) is empty
    const reg = '^\\s*$'
  
    const handleSubmit =(e)=> {
        if(currInput.match(reg)){
            e.preventDefault();
            addNotification('Please enter full city name!', 3500);
            setCurrInput('')
        }
        else {
            e.preventDefault()
            dispatch({type: 'set-city', payload: `q=${currInput}` })
            setCurrInput('')}  
    }

    console.log(state)
    return (
        <div className='searchBar'>
            <div className='flex'>
               <form onSubmit={handleSubmit}>
                        <input onChange={(e)=> {setCurrInput(e.target.value)}} value={currInput} placeholder='city name please...'/>
                        <button type='submit'><BsSearch/></button>
                </form> 
                <CurrentLocation/>
            </div>
            <Notifications/>

            <div className='header'>
                <h1>{state.forecast.cod === '404' || state.weather.cod === '404' ? 'YOUR WEATHER IN ...' : (state.city.startsWith('lat=') ? `YOUR WEATHER IN YOUR CURRENT LOCATION` : `YOUR WEATHER IN ${state.city.slice(2).toUpperCase()}`)} 
                 </h1>
            </div>
        </div>
    )
}

export default SearchBar
