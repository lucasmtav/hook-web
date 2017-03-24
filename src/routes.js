import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

// Containers
import Full from './containers/Full/'
// import Simple from './containers/Simple/'

import Dashboard from './views/Dashboard/'
import ComandoAvulso from './views/Extras/ComandoAvulso'

import {executarComando} from './actions/actions';
import configureStore from './store';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

const store = configureStore();

// function executar() {
// 	store.dispatch(fetchData('/hook'));
// };



// export function removeLineMenino(index, usuario, state){
//   return {type: 'CLICK_REMOVE_LINE', 
//   index, 
//   usuario,
//   state
//   };
// }

// export function testeMenino(state){
//   console.log('teste menino');
//   return {type: 'CLICK_MENINO'};
// }

// export function destructorOfMenino(state){
//   console.log('Brain of menino destroyed');
//   return {type: 'CLICK_MENINO_DESTRUCTOR'};
// }

function executar(comandos) {
  store.dispatch(executarComando('/api/hook', comandos))
}

//connects root reducer to props
function mapStateToProps(state) {
  return {
    commands: state.comandoAvulso.commands
  }
}

//connects redux actions to props
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    executarComando: executar,
    // clickMenino: testeMenino,
    // clickMeninoDestroyer: destructorOfMenino,
    // clickRemoveLine: removeLineMenino
  }, dispatch);
}

const ComandoAvulsoContainer = connect(mapStateToProps, mapDispatchToProps)(ComandoAvulso);

export default (
  <Router history={hashHistory}>
    <Route path="/" name="Home" component={Full} >
      <IndexRoute component={Dashboard}/>
      <Route path="dashboard" name="Dashboard" component={Dashboard}/>
      <Route path="extras/comando-avulso" name="Comando Avulso" component={ComandoAvulsoContainer}/>
	  </Route>
  </Router>
);
