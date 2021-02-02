import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import HomePage from './Pages/HomePage';
import Scores from './Pages/Scores';
import Schedule from './Pages/Schedule';
import Transfers from './Pages/Transfers';


const App = () => (
   
   <BrowserRouter>
   <NavBar />
   <Switch>
     <Route exact path="/" component={HomePage} />
     <Route exact path="/scores" component={Scores}/>
     <Route exact path="/schedule" component={Schedule}/>
     <Route exact path="/scores" component={Scores}/>
     <Route exact path="/transfers" component={Transfers}/>


   </Switch>
   </BrowserRouter>
  );


export default App;
