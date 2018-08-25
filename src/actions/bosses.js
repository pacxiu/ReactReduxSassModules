import { LOAD_BOSS } from './types';

export const loadBoss = (boss) => {	
	return {
		type: LOAD_BOSS,
		payload: { boss }
	}
};