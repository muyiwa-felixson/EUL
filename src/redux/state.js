import { replaceItemInList, removeItemFromList } from '../utils'
import { STATES_URL, MAX_PAGE_SIZE } from '../utils/constants'

export const types = {
    REQUEST_ALL: 'state.request.all',
    REQUEST_ERROR: 'state.request.error',
    START_LOADING: 'state.start_loading',
    STATE_CHANGED: 'state.changed',
    CLEAR_LIST: 'state.clear.list',
    ADD: 'state.add',
    UPDATE: 'state.update',
    DELETE: 'state.delete'
}

export const INITIAL_STATE = {
    stateList: null,
    selectedState: null,
    loading: false,
    error: null,
    count: 0
}

let deletedItem = null

const processRequest = (dispatch, request) => {
    dispatch({
        type: types.START_LOADING
    })
    dispatch(request)
}

export const getStates = () => dispatch => {
    processRequest(
        dispatch,
        {
            types: ['', types.REQUEST_ALL, types.REQUEST_ERROR],
            promise: client => client.get(
                `${STATES_URL}?limit=${MAX_PAGE_SIZE}`,
                { 'Content-Type': 'application/json' }
            )
        }
    )
}

export const getStatesByCountry = countryId => dispatch => {
    processRequest(
        dispatch,
        {
            types: ['', types.REQUEST_ALL, types.REQUEST_ERROR],
            promise: client => client.get(
                `${STATES_URL}?country=${countryId}&limit=${MAX_PAGE_SIZE}`,
                { 'Content-Type': 'application/json' }
            )
        }
    )
}

export const addState = state => dispatch => {
    processRequest(
        dispatch,
        {
            types: ['', types.ADD, types.REQUEST_ERROR],
            promise: client => client.post(
                STATES_URL,
                { 'Content-Type': 'application/json' },
                { data: state }
            )
        }
    )
}

export const editState = state => dispatch => {
    processRequest(
        dispatch,
        {
            types: ['', types.UPDATE, types.REQUEST_ERROR],
            promise: client => client.put(
                `${STATES_URL}${state.id}/`,
                { 'Content-Type': 'application/json' },
                { data: state }
            )
        }
    )
}

export const deleteState = state => dispatch => {
    deletedItem = state
    processRequest(
        dispatch,
        {
            types: ['', types.DELETE, types.REQUEST_ERROR],
            promise: client => client.delete(
                `${STATES_URL}${state.id}/`,
                { 'Content-Type': 'application/json' }
            )
        }
    )
}

export const selectState = state => ({
    type: types.STATE_CHANGED,
    payload: state
})

export const clearStates = () => ({
    type: types.CLEAR_LIST,
    payload: []
})

const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case types.REQUEST_ALL: {
            return {
                ...state,
                stateList: action.payload.results,
                loading: false,
                count: action.payload.count
            }
        }
        case types.CLEAR_LIST: {
            return {
                ...state,
                stateList: action.payload
            }
        }
        case types.START_LOADING: {
            return {
                ...state,
                loading: true
            }
        }
        case types.STATE_CHANGED: {
            return {
                ...state,
                selectedState: action.payload
            }
        }
        case types.ADD: {
            return {
                ...state,
                stateList: [action.payload, ...(state.stateList || [])],
                count: state.count + 1
            }
        }
        case types.UPDATE: {
            return {
                ...state,
                stateList: replaceItemInList(state.stateList, action.payload)
            }
        }
        case types.DELETE: {
            const newList = removeItemFromList(state.stateList, deletedItem)
            deletedItem = {}
            return {
                ...state,
                stateList: newList,
                count: state.count - 1
            }
        }
        case types.REQUEST_ERROR: {
            return {
                ...state,
                error: action.error.error,
            }
        }
        default:
            return state
    }
}

export default reducer