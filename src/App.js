import React, { Component } from 'react';
import './App.css';
import Gallery from './components/Gallery/Gallery';
import { Switch, Route } from 'react-router-dom';
import ImageSlide from './components/ImageSlide/ImageSlide';

class App extends Component {

  /**
   * TODO
   * This component can be later used for authentication, loading user profile
   * chossing gallery etc.
   * For current scope jumpling straight to gallery 72157693718156901
   */
  render() {
    const { classes } = this.props;
    return (
      <Switch>
        <Route exact path='/' component={Gallery} />
        <Route exact path='/slide' component={ImageSlide} />
      </Switch>
    );
  }
}

export default App;
