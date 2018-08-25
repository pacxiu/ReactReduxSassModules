import heroes from "../data/heroes";

const initialState = heroes;

const heroesReducer = (state = initialState, action = {}) => {
	const { payload = {} } = action;
  	const { heroes } = payload;

	switch (action.type) {
		default:
			return state;
	}
}

export default heroesReducer