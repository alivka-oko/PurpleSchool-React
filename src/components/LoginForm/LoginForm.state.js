export const INITIAL_STATE = {
	values: {
		login: ''
	},
	isValid: {
		login: true
	},
	isFormReadyToSubmit: false
};

export function formReducer(state, action) {
	switch (action.type) {
	case 'SET_VALUE':
		return {
			...state,
			values: {
				...state.values,
				...action.payload
			}
		};
	case 'SUBMIT': {
		const loginInput = state.values.login !== '';
		return {
			...state,
			isValid: {
				login: loginInput
			},
			isFormReadyToSubmit: loginInput
		};
	}
	case 'RESET':
		return INITIAL_STATE;
	}
}
