import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from 'react-router';
import routes from './routes';

import { Provider } from 'react-redux';
import configureStore from './store';

const store = configureStore({});

ReactDOM.render(
	<Provider store={store}>
  	<Router routes={routes} history={hashHistory} />
  </Provider>, document.getElementById('root')
);
