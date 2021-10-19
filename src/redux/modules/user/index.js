import { LOGIN_URL, USERS_URL, NETWORK_STATUS } from '../../../utils/constants'

export const types = {
    USER_REQUEST_ALL: 'USER_REQUEST_ALL',
    USER_REQUEST_ERROR: 'USER_REQUEST_ERROR',
    USER_START_LOADING: 'USER_START_LOADING',
    USER_CHANGED: 'USER_CHANGED',
    USER_CLEAR_LIST: 'USER_CLEAR_LIST',
    USER_LOGIN_SUCCESS: 'USER_LOGIN_SUCCESS',
    USER_LOGIN_ERROR: 'USER_LOGIN_ERROR',
    USER_LOGGING_IN: 'USER_LOGGING_IN',
    USER_LOGOUT: 'USER_LOGOUT'
}

export const INITIAL_STATE = {
    userList: null,
    user: null,
    status: NETWORK_STATUS.READY,
    token: null,
    error: null,
}

export const getUsers = () => dispatch => {
    dispatch({
        type: types.USER_REQUEST_ALL,
        status: NETWORK_STATUS.FETCHING,
    })

    dispatch({
        types: ['', types.USER_REQUEST_ALL, types.USER_LOGIN_ERROR],
        promise: client => client.get(
            USERS_URL,
            { 'Content-Type': 'application/json' }
        )
    })
}

export const login = ({ username, password }) => dispatch =>  {
    dispatch({
        type: types.USER_LOGGING_IN,
        status: NETWORK_STATUS.FETCHING,
    })

    const data = {
        email: username,
        password,
    }

    dispatch({
        types: ['', types.USER_LOGIN_SUCCESS, types.USER_LOGIN_ERROR],
        promise: client => client.post(
            LOGIN_URL,
            { 'Content-Type': 'application/json' },
            { data }
        )
    });
}

export const logout = () => ({
    type: types.USER_LOGOUT,
    payload: { 
        ...INITIAL_STATE
    }
})



const reducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;
    if (Object.hasOwnProperty.call(types, type)) {
      return Object.assign({}, state, payload);
    } else return state;
  };

export default reducer