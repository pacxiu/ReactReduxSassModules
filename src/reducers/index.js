import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import { web3Reducer, accountReducer, contractReducer } from './web3';
import networkReducer from './network';
import heroesReducer from './heroes';
import bossesReducer from './bosses';

const reducers = combineReducers({
  router,
  web3: web3Reducer,
  account: accountReducer,
  contract: contractReducer,
  network: networkReducer,
  heroes: heroesReducer,
  bosses: bossesReducer,
});

export default reducers
