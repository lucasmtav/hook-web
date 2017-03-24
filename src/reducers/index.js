// import * as types from '../actions/actionTypes';
import { combineReducers } from 'redux'; //might need to remove
import { routerStateReducer } from 'redux-react-router';

function comandoAvulsoReducer(state = {
	isLoading: false,
	error: false}
, action = null) {
	switch(action.type) {
		case 'POST_ERROR':
			return Object.assign({}, state, {isLoading: false, data: action.data, error: true});
		case 'POST_DATA_OK':
			alert(action.response[0]);
			return Object.assign({}, state, {isLoading: false, data: action.data, error: false });
		case 'POST_DATA':
			return Object.assign({}, state, {isLoading: true, data: action.data, error: false });
		default:
			return state;
	}
};


// function exampleReducer(state = {
// 	isLoading: false,
// 	usuarios: [{id: 1, name: 'bruno'}],
// 	error: false}
// , action = null) {
// 	switch(action.type) {
// 		// case types.RECV_ERROR:
// 		// 	return Object.assign({}, state, {isLoading: false, data: action.data, error: true});
// 		// case types.RECV_DATA:
// 		// 	return Object.assign({}, state, {isLoading: false, data: action.data, error: false });
// 		// case types.REQ_DATA:
// 		// 	return Object.assign({}, state, {isLoading: true, error: false });
// 			case 'CLICK_REMOVE_LINE':
// 				var index = action.index

// 				state.usuarios.splice(index, 1)

// 				var resposta = Array.from(state.usuarios)
// 				// console.log(state.usuarios)
// 				return Object.assign({}, state, {isLoading: false, error: false, usuarios: resposta});

// 			case 'CLICK_MENINO_DESTRUCTOR':
// 				var tamanho = (state.usuarios.length -1)


// 				const removidos = [
// 					...state.usuarios.slice(0, tamanho)
// 				]

// 				return Object.assign({}, state, {isLoading: false, error: false, usuarios: removidos});

// 			case 'CLICK_MENINO':
// 				const ultimo = state.usuarios[state.usuarios.length -1];

// 				const novo = {
// 					id: ultimo.id + 1,
// 					name: 'novo ' + 1
// 				}

// 				const novos = [
// 					...state.usuarios,
// 					novo
// 				]

// 				return Object.assign({}, state, {isLoading: false, error: false, usuarios: novos});
// 		default:
// 			console.log(state);
// 			return state;
// 	}
// };



const rootReducer = combineReducers({
	router: routerStateReducer,
	comandoAvulso: comandoAvulsoReducer
});

export default rootReducer;