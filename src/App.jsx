import './App.css';
import { useState } from 'react';
import Login from './components/Login.jsx';
import Player from './components/Player.jsx';
import { Switch, Route, Link } from 'react-router-dom';

function App() {
    return (
        <div className="center">
            <Switch>
                <Route exact path="/">
                    <Login />
                </Route>
                <Route path="/player/:name">
                    <Player />
                </Route>
            </Switch>
        </div>
    );
}

export default App;
