import { SET_WEB3, SET_ACCOUNT, SET_CONTRACT } from '../actions/types';

// setting initial state
const initialState = null;

// web3 reducer definition
export const web3Reducer = (state = initialState, action = {}) => {
	const { payload = {} } = action;
  	const { web3 } = payload;

	switch (action.type) {
		case SET_WEB3: 
			return web3;
		default:
			return state;
	}
}

// account reducer definition
export const accountReducer = (state = initialState, action = {}) => {
	const { payload = {} } = action;
  	const { account } = payload;

	switch (action.type) {
		case SET_ACCOUNT: 
			return (account === undefined ? null : account);
		default:
			return state;
	}
}

// contract reducer definition
export const contractReducer = (state = initialState, action = {}) => {
	const { payload = {} } = action;
  	const { contract } = payload;

	switch (action.type) {
		case SET_CONTRACT: 
			return contract;
		default:
			return state;
	}
}