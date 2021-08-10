import React , {useContext, useState} from 'react';
import Context from '../context/Context'
import { BsSearch } from "react-icons/bs";


const SearchBar = () => {

    const {dispatch} = useContext(Context)

    const [currInput, setCurrInput] = useState('')
 
    const handleSubmit =(e)=> {
        e.preventDefault()
        dispatch({type: 'set-city', payload: currInput })
        setCurrInput('')
    }

    return (
        <div className='searchBar'>
            <form onSubmit={handleSubmit}>
                <div>
                    <input onChange={(e)=> {setCurrInput(e.target.value)}} value={currInput} placeholder='your city please...'/>
                    <button type='submit'><BsSearch/></button>
                </div>
            </form>
            
        </div>
    )
}

export default SearchBar
