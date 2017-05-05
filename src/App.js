import React from 'react';
import { connect } from 'react-redux'
import Test from './components/Test'
import Navbar from './components/Navbar'
import VideoSearchForm from './components/VideoSearchForm'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';

const App = ({match}) => {
    return (
      <div className="App">
        <Navbar />
        <VideoSearchForm />
        <Route exact path='/hello' component={Test} />
      </div>
    );
}

function mapStateToProps(state){
  return { videos: state.videos }
}

export const WrapperApp = connect(mapStateToProps)(App);
