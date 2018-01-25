import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
} from 'react-browser-router';
import Navigation from './components/Navigation/Navigation';
import AboutMe from './components/AboutMe/AboutMe';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className = "homepage">
          <BrowserRouter>
            <div>
              <Route path="/" component={Navigation} />             
              <Route path="/about" component={AboutMe} />
              <Route exact path="/" exact component={Projects} />
              <Route path="/connect" component={Contact} />
              <Route path="/" component={Footer} />
            </div>
          </BrowserRouter>
      </div>
    );
  }
}


/*
          import logo from './logo.svg';
          <img src={logo} className="App-logo" alt="logo" />
          */

export default App;
