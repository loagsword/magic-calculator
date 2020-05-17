import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import Signup from './components/Signup';
import Calculator from './components/Calculator'
import AnalogClock from './components/AnalogClock'
import TicTacToe from './components/TicTacToe'


const Main = () => {
    return (
        <Switch> {/* The Switch decides which component to show based on the current URL.*/}
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/signup' component={Signup}></Route>
            <Route exact path='/clock' component={AnalogClock}></Route>
            <Route exact path='/calculator' component={Calculator}></Route>
            <Route exact path='/tic-tac-toe' component={TicTacToe}></Route>

        </Switch>
    );
}

export default Main;