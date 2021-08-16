
const WeatherReducer = (state, action) => {
    // console.log(action.payload)
    switch (action.type) {
        case 'set-data-weather':
            return {...state, weather: action.payload};
        case 'set-data-forecast':
            return {...state, forecast: action.payload};
        case 'set-city':
            return {...state, city: action.payload};
        case 'set-type':
            return {...state, type: action.payload}

        default: 
            return state;
    }
}

export default WeatherReducer
