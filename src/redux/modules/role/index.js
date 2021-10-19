import { ROLES_URL, NETWORK_STATUS } from 'src/utils/constants'

export const types = {
    ROLE_REQUEST_ALL: 'ROLE_REQUEST_ALL',
    ROLE_ERROR: 'ROLE_ERROR',
}

export const INITIAL_STATE = {
    results: null,
    status: NETWORK_STATUS.READY,
    error: null,
}


export const getRoles = () => (dispatch) => {
    dispatch({
        type: types.ROLE_REQUEST_ALL,
        status: NETWORK_STATUS.FETCHING,
    })

    dispatch({
        types: ['', types.ROLE_REQUEST_ALL, types.ROLE_ERROR],
        promise: client => client.get(
            ROLES_URL,
            { 'Content-Type': 'application/json' }
        )
    })
}



const reducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;
    if (Object.hasOwnProperty.call(types, type)) {
        const additionalData = {status: NETWORK_STATUS.READY}
        if(type === types.ROLE_ERROR) {
            Object.assign(additionalData, {status: NETWORK_STATUS.ERROR})
        }
        return Object.assign({}, state, payload, additionalData);
    } else return state;
  };

export default reducer