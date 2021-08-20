import React, {useState, useContext, useEffect} from "react";
import useSound from "use-sound";
import WeatherContext from "../context/weather/WeatherContext";

import { FaPlayCircle, FaStopCircle } from "react-icons/fa";
import songRain from '../sound/bensound-tomorrow.mp3';
import songThunder from '../sound/bensound-evolution-thunder.mp3'
import songSun from '../sound/bensound-memories-sun.mp3'
import songClouds from '../sound/bensound-sadday-clouds.mp3'
import songSnow from '../sound/bensound-onceagain-snow.mp3'
import songDrizzle from '../sound/bensound-betterD-drizzle.mp3'
import songMist from '../sound/bensound-newdawn-mist.mp3'


const Sound = () => {

    const {state} = useContext(WeatherContext)

    const selectSoud = () => {

        const current = state.weather.weather ?  state.weather.weather[0].main : ""

        switch (current) {
            case 'Thunderstorm':
                return songThunder;
            case 'Clear':
                return songSun;
            case 'Clouds':
                return songClouds ;
            case 'Rain':
                return songRain;
            case 'Snow':
                return songSnow;
            case 'Drizzle' :
                return songDrizzle
            case 'Mist' || "Smoke" || 'Haze' || 'Dust' || 'Fog' || 'Sand' || 'Ash' || 'Squall' || 'Tornado':
                return songMist;
            default: 
                return '';
        }
    }
    const [playing, setPlaying] = useState(false);
    const [play, {stop}] = useSound(selectSoud());

    useEffect(() => {
        playing? stop(): stop()
        setPlaying(false)
    }, [state])


    return (
        <div className='sound' onClick={()=> {playing? stop() : play() ; setPlaying(!playing)}}>
            {playing? <FaStopCircle size={40} /> : <FaPlayCircle size={40}/>}
        </div>
    )
}

export default Sound
