import { replaceItemInList, removeItemFromList } from '../utils'
import { COUNTRIES_URL, MAX_PAGE_SIZE } from '../utils/constants'

export const types = {
    REQUEST_ALL: 'country.request.all',
    REQUEST_ERROR: 'country.request.error',
    START_LOADING: 'country.start_loading',
    COUNTRY_CHANGED: 'country.changed',
    ADD: 'country.add',
    UPDATE: 'country.update',
    DELETE: 'country.delete'
}

export const INITIAL_STATE = {
    countryList: null,
    selectedCountry: null,
    loading: false,
    error: null,
    count: 0
}

let deletedItem = {}

const processRequest = (dispatch, request) => {
    dispatch({
        type: types.START_LOADING
    })
    dispatch(request)
}

export const getCountries = () => dispatch => {
    processRequest(
        dispatch,
        {
            types: ['', types.REQUEST_ALL, types.REQUEST_ERROR],
            promise: client => client.get(
                `${COUNTRIES_URL}?limit=${MAX_PAGE_SIZE}`,
                { 'Content-Type': 'application/json' }
            )
        }
    )
}

export const addCountry = country => dispatch => {
    processRequest(
        dispatch,
        {
            types: ['', types.ADD, types.REQUEST_ERROR],
            promise: client => client.post(
                COUNTRIES_URL,
                { 'Content-Type': 'application/json' },
                { data: country }
            )
        }
    )
}

export const editCountry = country => dispatch => {
    processRequest(
        dispatch,
        {
            types: ['', types.UPDATE, types.REQUEST_ERROR],
            promise: client => client.put(
                `${COUNTRIES_URL}${country.id}/`,
                { 'Content-Type': 'application/json' },
                { data: country }
            )
        }
    )
}

export const deleteCountry = country => dispatch => {
    deletedItem = country
    processRequest(
        dispatch,
        {
            types: ['', types.DELETE, types.REQUEST_ERROR],
            promise: client => client.delete(
                `${COUNTRIES_URL}${country.id}/`,
                { 'Content-Type': 'application/json' }
            )
        }
    )
}

export const selectCountry = country => ({
    type: types.COUNTRY_CHANGED,
    payload: country
})

const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case types.REQUEST_ALL: {
            return {
                ...state,
                countryList: action.payload.results,
                loading: false,
                count: action.payload.count
            }
        }
        case types.START_LOADING: {
            return {
                ...state,
                loading: true,
                error: null
            }
        }
        case types.COUNTRY_CHANGED: {
            return {
                ...state,
                selectedCountry: action.payload
            }
        }
        case types.ADD: {
            return {
                ...state,
                countryList: [action.payload, ...(state.countryList || [])],
                count: state.count + 1
            }
        }
        case types.UPDATE: {
            return {
                ...state,
                countryList: replaceItemInList(state.countryList, action.payload)
            }
        }
        case types.DELETE: {
            const newList = removeItemFromList(state.countryList, deletedItem)
            deletedItem = {}
            return {
                ...state,
                countryList: newList,
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