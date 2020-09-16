const initialState = {
  logs: null,
  current: null,
  error: null,
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return {
        ...state,
        loading: true,
      };
    case 'GET_LOGS':
      return {
        ...state,
        logs: action.payload,
        loading: false,
      };
    case 'ADD_LOGS': {
      return {
        ...state,
        logs: [...state.logs, action.payload],
      };
    }
    case 'DELETE_LOGS': {
      return {
        ...state,
        logs: state.logs.filter(log => log.id !== action.payload),
      };
    }
    case 'GET_CURRENT': {
      return {
        ...state,
        current: action.payload,
      };
    }
    case 'UPDATE_LOGS': {
      return {
        ...state,
        logs: state.logs.map(log =>
          log.id === action.payload.id ? action.payload : log
        ),
      };
    }
    case 'SEARCH_LOGS': {
      return {
        ...state,
        logs: action.payload,
      };
    }

    case 'GET_ERROR': {
      return {
        ...state,
        error: action.payload,
      };
    }
    default:
      return state;
  }
};
