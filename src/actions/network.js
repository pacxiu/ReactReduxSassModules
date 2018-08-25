import { SET_NETWORK } from './types';

export const setNetwork = (network) => {	
	return {
		type: SET_NETWORK,
		payload: { network }
	}
};