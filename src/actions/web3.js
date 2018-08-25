import { SET_WEB3, SET_ACCOUNT, SET_CONTRACT } from './types';
// import { ABI, CONTRACT } from '../data/contractData';

export const setWeb3 = (web3) => {	
	return {
		type: SET_WEB3,
		payload: { web3 }
	}
};

export const setAccount = (account) => {	
	return {
		type: SET_ACCOUNT,
		payload: { account }
	}
};

export const setContract = (web3) => {
	// const contract = new web3.eth.Contract(ABI, CONTRACT)
	// const contract = new web3.eth.Contract(Contract.abi, Contract.networks["5777"].address);
  const contract = "Contract here"

	return {
		type: SET_CONTRACT,
		payload: { contract }
	}
};