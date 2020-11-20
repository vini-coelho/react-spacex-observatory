import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/Header';

import Launches from './pages/Launches';

export default function Routes(){
    return (
        <Switch>
            <Route path='/launches' component={Launches}/>
        </Switch>
    );
};