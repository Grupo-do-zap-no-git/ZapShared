import {
  LOGIN_ASYNC_REQUEST_STARTED,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT_SUCCESS,
  LOGOUT_FAILED,
} from '../actions/loginActions';

const initialState = {
  loading: false,
  logged: false,
  email: '',
  password: '',
  sessionToken: null,
  loggedUser: null,
  error: '',
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_ASYNC_REQUEST_STARTED:
      return {
        ...state,
        loading: true,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        logged: true,
        password: '',
        error: '',
        sessionToken: action.payload.token,
        loggedUser: action.payload.loggedUser,
      };

    case LOGIN_FAILED:
      return {
        ...state,
        loading: false,
        logged: false,
        password: '',
        error: action.error,
      };

    case LOGOUT_SUCCESS:
    case LOGOUT_FAILED:
      return {
        ...state,
        loading: false,
        logged: false,
        username: '',
        error: '',
        sessionToken: null,
        loggedUser: null,
      };

    default:
      return state;
  }
};

export default loginReducer;
