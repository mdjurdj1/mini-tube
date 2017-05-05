import React from 'react';
import VideoSearchForm from './components/VideoSearchForm'
import VideoList from './components/VideoList'
import './App.css';

const App = ({match}) => {
    return (
      <div className="App">
        <VideoSearchForm />
        <VideoList />
      </div>
    );
}

export default App;
