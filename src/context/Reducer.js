import React from 'react'

const Reducer = (state, action) => {
    // console.log(action.payload)
    switch (action.type) {
        case 'set-data':
            return {...state, weather: action.payload};
        case 'set-city':
            return {...state, city: action.payload};
        case 'set-type':
            return {...state, type: action.payload}

        default: 
            return state;
    }
}

export default Reducer
