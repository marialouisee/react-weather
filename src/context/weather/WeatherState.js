
import React , {useReducer, useContext, useEffect} from 'react';
import WeatherReducer from './WeatherReducer';
import WeatherContext from './WeatherContext';
import NotificationsContext from '../notification/NotificationsContext';

const WeatherState = (props) => {

  const {addNotification} = useContext(NotificationsContext)
  // local strorage to keep state persistent
  const fromLocalStorage = localStorage.getItem('state')

  // q= for api url 
  // type = weather or forecast

  const initialState = JSON.parse(fromLocalStorage) || {
    city: 'q=Hamburg', 
    weather: [], 
    forecast: [], 
    type: 'weather'
    }

  const [state, dispatch] = useReducer(WeatherReducer, initialState)

  useEffect(()=> {
    localStorage.setItem('state', JSON.stringify(state))
  }, [state])

  // API KEY AND URL 
  const apiKey = process.env.REACT_APP_API_KEY;
  const apiUrlWeather = `https://api.openweathermap.org/data/2.5/weather?${state.city}&appid=${apiKey}&units=metric`;
  const apiUrlForecast = `https://api.openweathermap.org/data/2.5/forecast?${state.city}&appid=${apiKey}&units=metric`;


  useEffect(() => {
    fetch(apiUrlWeather)
        .then((res) => {
          if (!res.ok) {
            addNotification('Please enter correct city name!', 3500)
          }
          return res.json();
        })
        .then((data)=> {dispatch({type: 'set-data-weather', payload: data})})
  }, [apiUrlWeather])

  useEffect(() => {
    fetch(apiUrlForecast)
        .then((res) => {
          return res.json();
        })
        .then((data)=> {dispatch({type: 'set-data-forecast', payload: data})})
  }, [apiUrlForecast])

    return (
        <WeatherContext.Provider value = {{state, dispatch}} >
            {props.children}
        </WeatherContext.Provider> 
    )
}

export default WeatherState
