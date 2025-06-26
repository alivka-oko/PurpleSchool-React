interface IInitalState {
  values: {
    login: string;
  };
  isValid: {
    login: boolean;
  };
  isFormReadyToSubmit: boolean;
}
export const INITIAL_STATE: IInitalState = {
  values: {
    login: ''
  },
  isValid: {
    login: true
  },
  isFormReadyToSubmit: false
};

type typeAction = 'SET_VALUE' | 'SUBMIT' | 'RESET' | 'RESET_VALIDITY';

type Action = { type: typeAction; payload?: { [x: string]: string } };

export function formReducer(state: IInitalState, action: Action) {
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
    case 'RESET_VALIDITY':
      return {
        ...state,
        isValid: INITIAL_STATE.isValid
      };
  }
}
