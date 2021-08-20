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
import Cursor from './components/Cursor';
import Sound from './components/Sound';
import PageNotFound from './components/PageNotFound';


function App() {

  return (
    <Router>
      <div className="App" style={{backgroundImage: `url(${bgImage})`}}>
      <NotificationsState>
        <WeatherState>
            <Cursor/>
            <Sound/> 
            <SearchBar/>
            <MyNavbar/>
            <Switch>
              <Route exact path='/forecast' component={ForecastCard}/>
              <Route exact path={['/', '/now']} component={CurrentCard}/>
              <Route component={PageNotFound}/>
            </Switch>
        </WeatherState>
      </NotificationsState>
    </div>
    </Router>
  );
}

export default App;
