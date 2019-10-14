export const LOGIN_ASYNC_REQUEST_STARTED = 'LOGIN_ASYNC_REQUEST_STARTED';
export const loginAsyncRequestStarted = () => ({
  type: LOGIN_ASYNC_REQUEST_STARTED,
});

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const loginSuccess = ({ status, data }) => ({
    type: LOGIN_SUCCESS,
    status,
    payload: {
      token: data.token,
      loggedUser: data.user,
    },
});


export const LOGIN_FAILED = 'LOGIN_FAILED';
export const loginFailed = error => ({
  type: LOGIN_FAILED,
  error,
});

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const loginRequest = body => {
  body.username = body.email.split('@')[0];
  delete body.email;
  return dispatch => {
    dispatch(loginAsyncRequestStarted());
    dispatch(loginSuccess({
        status: 200,
        data: {
          token: '1xx1',
          user: {
            name: 'Admin',
            username: 'super',
          }
        }
      })
    )
  };
};

export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
});

export const LOGOUT_FAILED = 'LOGOUT_FAILED';
export const logoutFailed = error => ({
  type: LOGOUT_FAILED,
  error,
});

export const logoutRequest = () => {
  return dispatch => {
    dispatch(loginAsyncRequestStarted());
    dispatch(logoutSuccess());
  };
};
