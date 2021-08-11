import React , {useContext, useState} from 'react';
import Context from '../context/Context'
import { BsSearch } from "react-icons/bs";
import CurrentLocation from './Location';


const SearchBar = () => {

    const {state, dispatch} = useContext(Context)

    const [currInput, setCurrInput] = useState('')
 
    const handleSubmit =(e)=> {
        e.preventDefault()
        dispatch({type: 'set-city', payload: `q=${currInput}` })
        setCurrInput('')
    }

    return (
        <div className='searchBar'>
            <div className='flex'>
               <form onSubmit={handleSubmit}>
                        <input onChange={(e)=> {setCurrInput(e.target.value)}} value={currInput} placeholder='your city please...'/>
                        <button type='submit'><BsSearch/></button>
                </form> 
                <CurrentLocation/>
            </div>
            <div className='header'>
                <h1> {state.city.startsWith('lat=') ? `YOUR WEATHER IN YOUR CURRENT LOCATION` : `YOUR WEATHER IN ${state.city.slice(2).toUpperCase()}`} </h1>
            </div>
        </div>
    )
}

export default SearchBar
