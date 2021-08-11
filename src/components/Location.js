import React , {useContext, useState, useEffect} from 'react';
import Context from '../context/Context';
import {GoLocation} from "react-icons/go";

const CurrentLocation = () => {

  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);

  const {dispatch} = useContext(Context)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });
  }, [lat, long]);

  const setCurrLocation = () =>{
    dispatch({type: 'set-city', payload: `lat=${lat}&lon=${long}`})
  }

    return (
        <div onClick={setCurrLocation}>
            <GoLocation size={20} />
        </div>
    )
}

export default CurrentLocation
