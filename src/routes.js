import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

// Containers
import Full from './containers/Full/'
// import Simple from './containers/Simple/'

import Dashboard from './views/Dashboard/'
import ComandoAvulso from './views/Extras/ComandoAvulso'

import {fetchData} from './actions/actions';
import configureStore from './store';

const store = configureStore();

function loadData() {
	store.dispatch(fetchData('/hook'));
};

export default (
  <Router history={hashHistory}>
    <Route path="/" name="Home" component={Full} onEnter={loadData}>
      <IndexRoute component={Dashboard}/>
      <Route path="dashboard" name="Dashboard" component={Dashboard}/>
      <Route path="extras/comando-avulso" name="Comando Avulso" component={ComandoAvulso}/>
	  </Route>
  </Router>
);
