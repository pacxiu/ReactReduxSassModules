import { SET_NETWORK } from '../actions/types';

// setting initial state
const initialState = {
	current: null, 
	expected: 1, 
	external: true
}

// web3 reducer definition
const networkReducer = (state = initialState, action = {}) => {
	const { payload = {} } = action;
  	const { network } = payload;

	switch (action.type) {
		case SET_NETWORK: 
			return { ...network };
		default:
			return state;
	}
}

export default networkReducer