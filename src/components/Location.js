import React , {useContext, useState, useEffect} from 'react';
import WeatherContext from '../context/weather/WeatherContext';
import NotificationsContext from '../context/notification/NotificationsContext';
import {GoLocation} from "react-icons/go";

const CurrentLocation = () => {

  const [lat, setLat] = useState('');
  const [long, setLong] = useState('');

  const {dispatch} = useContext(WeatherContext)
  const {addNotification} = useContext(NotificationsContext)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });
  }, [lat, long]);

  console.log(lat)
  const setCurrLocation = () =>{
    lat === '' || long === ''? addNotification('There seems to be a problem with locating you. Please allow the browser to acces your location, enter your city or try again in a few seconds.', 8000) :  dispatch({type: 'set-city', payload: `lat=${lat}&lon=${long}`})
  }

    return (
        <div onClick={setCurrLocation}>
            <GoLocation size={20} />
        </div>
    )
}

export default CurrentLocation
