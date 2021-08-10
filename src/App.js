import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import GlobalState from './context/GlobalState';
import './scss/main.scss'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

import bgImage from './images/bgImage3.svg'
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import MyNavbar from './components/MyNavbar';
import CurrentCard from './components/CurrentCard';
import ForecastCard from './components/ForecastCard';
import MyNavbarForecast from './components/MyNavbarForecast';
import Forecast3H from './components/Forecast3H';
import ForecastTomorrow from './components/ForecastTomorrow'


function App() {

  return (
    <Router>
      <div className="App" style={{backgroundImage: `url(${bgImage})`}}>
        <GlobalState>
          <SearchBar/>
          <Header/>
          
          <MyNavbar/>
          <Switch>
            <Route path='/now' component={CurrentCard}/>
            <Route path='/forecast' component={ForecastCard}/>
          </Switch>

        </GlobalState>
    </div>
    </Router>
  );
}

export default App;
