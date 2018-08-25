import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import { web3Reducer, accountReducer, contractReducer } from './web3';
import networkReducer from './network';

const reducers = combineReducers({
  router,
  web3: web3Reducer,
  account: accountReducer,
  contract: contractReducer,
  network: networkReducer
});

export default reducers
