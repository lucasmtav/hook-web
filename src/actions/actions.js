// import * as types from './actionTypes';
import axios from 'axios';
import { pushState } from 'redux-react-router';

// function requestData() {
// 	return {type: types.REQ_DATA}
// };

// function receiveData(json) {
// 	return{
// 		type: types.RECV_DATA,
// 		data: json
// 	}
// };

// function receiveError(json) {
// 	return {
// 		type: types.RECV_ERROR,
// 		data: json
// 	}
// };

// export function fetchData(url) {
// 	return function(dispatch) {
// 		dispatch(requestData());
// 		return axios({
// 			url: url,
// 			auth: { username: 'user1' , password: 'secret1'},
// 			timeout: 20000,
// 			method: 'get',
// 			responseType: 'json'
// 		})
// 			.then(function(response) {
// 				dispatch(receiveData(response.data));
// 			})
// 			.catch(function(response){
// 				dispatch(receiveError(response.data));
// 				dispatch(pushState(null,'/error'));
// 			})
// 	}
// };

function postData(data) {
	return {
		type: 'POST_DATA',
		data
	}
};

function postDataOk(response){
	return {
		type: 'POST_DATA_OK',
		response
	}
};

function postDataError(response){
	return {
		type: 'POST_DATA_ERROR',
		response
	}
};

export function executarComando(url, comandos) {
	return function(dispatch) {
		dispatch(postData(comandos));
		return axios({
			url: url,
			params: {command: comandos},
			auth: { username: 'user1' , password: 'secret1'},
			timeout: 20000,
			method: 'post',
		})
			.then(function(response) {
				dispatch(postDataOk(response.data));
			})
			.catch(function(response){
				dispatch(postDataError(response.data));
				dispatch(pushState(null,'/error'));
			})
	}
};
