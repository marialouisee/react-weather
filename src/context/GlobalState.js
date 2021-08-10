
import React , {useReducer, useEffect} from 'react'
import Reducer from './Reducer'
import Context from './Context'
import Alert from '../components/Alert'

const GlobalState = (props) => {

  // type = weather or forecast
  const initialState = {city: 'Hamburg', weather: [], type: "weather"}
  const [state, dispatch] = useReducer(Reducer, initialState)

  // API KEY AND URL 
  //! hide API key
  const apiKey = "e4efe9b0c2159b5e049dbb5024702093";
  const apiUrl = `https://api.openweathermap.org/data/2.5/${state.type}?q=${state.city}&appid=${apiKey}&units=metric`;


    useEffect(() => {

    fetch(apiUrl)
        .then((res) => {
          if (!res.ok) {
            alert('please enter correct city name')
          }
          return res.json();
        })
        .then((data)=> {dispatch({type: 'set-data', payload: data})})
    }, [apiUrl])

  // console.log(state.weather)

    return (
        <Context.Provider value = {{state, dispatch}} >
            {props.children}
        </Context.Provider> 
    )
}

export default GlobalState
