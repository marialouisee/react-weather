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
import SearchBar from './components/SearchBar';
import MyNavbar from './components/MyNavbar';
import CurrentCard from './components/CurrentCard';
import ForecastCard from './components/ForecastCard';


function App() {

  return (
    <Router>
      <div className="App" style={{backgroundImage: `url(${bgImage})`}}>
        <GlobalState>
          <SearchBar/>
          
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
