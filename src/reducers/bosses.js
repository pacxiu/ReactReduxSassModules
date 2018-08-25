import bosses from "../data/bosses";
import { LOAD_BOSS } from '../actions/types';

const initialState = bosses;

const bossesReducer = (state = initialState, action = {}) => {
	const { payload = {} } = action;
  	const { boss } = payload;

	switch (action.type) {
		case LOAD_BOSS:
			const newBoss = {
				id: boss.tokenId,
				name: boss.bossName,
				attack: boss.bossAttack,
				defense: boss.bossDefense,
				stats: boss.freeStatsAward
			}

			let newState = [...state];
			newState[newBoss.id] = {...newBoss};

			return newState;
		default:
			return state;
	}
}

export default bossesReducer