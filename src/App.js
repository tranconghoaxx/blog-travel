import React from 'react';
import HeadDetail from './components/Detail/HeadDetail/HeadDetail';
import HeadBackgroud from './components/Detail/HeadBackgroud/HeadBackgroud';
import HeadContent from './components/Detail/HeadContent/HeadContent';
import Home from './components/Home/Home';
import { Switch, Route, Link } from "react-router-dom";
import './App.scss';

function About(){
  return (
    <div>
      About
    </div>
  )
}
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
      </Switch>
         
      <HeadDetail/>
      <HeadBackgroud/>
      <HeadContent/>
    </div>
  );
}

export default App;
