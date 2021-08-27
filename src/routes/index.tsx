import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Trending from '../pages/Trending'
import MaisVotados from '../pages/MaisVotados'

const Routes: React.FC = () => (
    <Switch>
        <Route path='/' exact component={Trending}/>
        <Route path='/mais-votados' component={MaisVotados}/>        
    </Switch>
);

export default Routes;