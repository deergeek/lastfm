import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery';
import ArtistList from './components/ArtistList.js';
import ArtistDetails from './components/ArtistDetails.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <main>
        <h2>last.fm artist lookup tool</h2>
        <Switch>
           <Route path="/" component={ArtistList} exact />
           <Route path="/details" component={ArtistDetails} />
        </Switch>
    </main>
)
}

export default App;
