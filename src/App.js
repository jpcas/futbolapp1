import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage';

const App = () => {
<BrowserRouter>
<Switch>
<Route exact path="/" component={HomePage} />
</Switch>
</BrowserRouter>
}

export default App;
