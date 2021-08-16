import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import WeatherState from './context/weather/WeatherState';
import NotificationsState from './context/notification/NotoficationState';

import './scss/main.scss'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

import bgImage from './images/bgImage3.svg'
import SearchBar from './components/SearchBar';
import MyNavbar from './components/MyNavbar';
import CurrentCard from './components/CurrentCard';
import ForecastCard from './components/ForecastCard';


function App() {

  return (
    <Router>
      <div className="App" style={{backgroundImage: `url(${bgImage})`}}>
      <NotificationsState>
        <WeatherState>
            <SearchBar/>
            <MyNavbar/>
            <Switch>
              <Route path='/forecast' component={ForecastCard}/>
              <Route path={['/', '/now']} component={CurrentCard}/>
            </Switch>
        </WeatherState>
      </NotificationsState>
    </div>
    </Router>
  );
}

export default App;
