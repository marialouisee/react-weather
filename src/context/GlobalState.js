
import React , {useReducer, useEffect} from 'react'
import Reducer from './Reducer'
import Context from './Context'

const GlobalState = (props) => {

  // type = weather or forecast
  const initialState = {
    city: 'q=Hamburg', 
    weather: [], 
    forecast: [], 
    type: 'weather'
    }

  const [state, dispatch] = useReducer(Reducer, initialState)

  // API KEY AND URL 
  //! hide API key
  const apiKey = "e4efe9b0c2159b5e049dbb5024702093";
  const apiUrlWeather = `https://api.openweathermap.org/data/2.5/weather?${state.city}&appid=${apiKey}&units=metric`;
  const apiUrlForecast = `https://api.openweathermap.org/data/2.5/forecast?${state.city}&appid=${apiKey}&units=metric`;


  useEffect(() => {
    fetch(apiUrlWeather)
        .then((res) => {
          if (!res.ok) {
            alert('please try again')
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
        <Context.Provider value = {{state, dispatch}} >
            {props.children}
        </Context.Provider> 
    )
}

export default GlobalState
