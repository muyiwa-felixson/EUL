import { replaceItemInList, removeItemFromList, getFormData } from '../utils'
import { HCPS_URL, HCPS_MAP_URL } from '../utils/constants'

export const types = {
    REQUEST_ALL: 'hcp.request.all',
    REQUEST_ALL_ADMIN: 'hcp.request.all.admin',
    REQUEST_ERROR: 'hcp.request.error',
    START_LOADING: 'hcp.start_loading',
    HCP_CHANGED: 'hcp.changed',
    HCP_QUERY_CHANGED: 'query_changed',
    REQUEST_ALL_MAP: 'hcp.request.all.map',
    ADD: 'hcp.add',
    UPDATE: 'hcp.update',
    DELETE: 'hcp.delete'
}

export const INITIAL_STATE = {
    hcpList: null,
    selectedHcp: null,
    loading: false,
    hcpQuery: '',
    hcpMapList: null,
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

export const getHcps = () => dispatch => {
    processRequest(
        dispatch,
        {
            types: ['', types.REQUEST_ALL, types.REQUEST_ERROR],
            promise: client => client.get(
                HCPS_URL,
                { 'Content-Type': 'application/json' }
            )
        }
    )
}

export const getHcpsAdmin = () => dispatch => {
    processRequest(
        dispatch,
        {
            types: ['', types.REQUEST_ALL_ADMIN, types.REQUEST_ERROR],
            promise: client => client.get(
                HCPS_URL,
                { 'Content-Type': 'application/json' }
            )
        }
    )
}

export const getHcpBySearch = query => dispatch => {
    processRequest(
        dispatch,
        {
            types: ['', types.REQUEST_ALL, types.REQUEST_ERROR],
            promise: client => client.get(
                `${HCPS_URL}${query}`,
                { 'Content-Type': 'application/json' }
            )
        }
    )
}


export const getHcpMapData = query => dispatch => {
    processRequest(
        dispatch,
        {
            types: ['', types.REQUEST_ALL_MAP, types.REQUEST_ERROR],
            promise: client => client.get(
                `${HCPS_MAP_URL}${query}`,
                { 'Content-Type': 'application/json' }
            )
        }
    )
}

export const getHcpById = id => dispatch => {
    processRequest(
        dispatch,
        {
            types: ['', types.HCP_CHANGED, types.REQUEST_ERROR],
            promise: client => client.get(
                `${HCPS_URL}${id}/`,
                { 'Content-Type': 'application/json' }
            )
        }
    )
}

export const addHcp = hcp => dispatch => {
    console.log('H', hcp)
    const formData = getFormData(hcp)
    processRequest(
        dispatch,
        {
            types: ['', types.ADD, types.REQUEST_ERROR],
            promise: client => client.post(
                HCPS_URL,
                {},
                { data: formData },
                true
            )
        }
    )
}

export const editHcp = hcp => dispatch => {
    if (Array.isArray(hcp.photo) && hcp.photo.length){
        hcp.photo = hcp.photo[0]
    } else {
        delete hcp.photo
    }
    if (Array.isArray(hcp.photo_banner) && hcp.photo_banner.length){
        hcp.photo_banner = hcp.photo_banner[0]
    } else {
        delete hcp.photo_banner
    }
    const updatedHcp = getFormData(hcp)
    processRequest(
        dispatch,
        {
            types: ['', types.UPDATE, types.REQUEST_ERROR],
            promise: client => client.put(
                `${HCPS_URL}${hcp.id}/`,
                {},
                { data: updatedHcp },
                true
            )
        }
    )
}

export const deleteHcp = hcp => dispatch => {
    deletedItem = hcp
    processRequest(
        dispatch,
        {
            types: ['', types.DELETE, types.REQUEST_ERROR],
            promise: client => client.delete(
                `${HCPS_URL}${hcp.id}/`,
                { 'Content-Type': 'application/json' }
            )
        }
    )
}

export const selectHcp = hcp => ({
    type: types.HCP_CHANGED,
    payload: hcp
})

export const hcpQueryChanged = query => ({
    type: types.HCP_QUERY_CHANGED,
    payload: query
})

const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case types.REQUEST_ALL: {
            return {
                ...state,
                hcpList: action.payload,
                loading: false,
                count: action.payload.count
            }
        }
        case types.REQUEST_ALL_ADMIN: {
            return {
                ...state,
                hcpList: action.payload.results,
                loading: false,
                count: action.payload.count
            }
        }
        case types.START_LOADING: {
            return {
                ...state,
                loading: true
            }
        }
        case types.HCP_CHANGED: {
            return {
                ...state,
                selectedHcp: action.payload
            }
        }
        case types.HCP_QUERY_CHANGED: {
            return {
                ...state,
                hcpQuery: action.payload
            }
        }
        case types.REQUEST_ALL_MAP: {
            return {
                ...state,
                hcpMapList: action.payload,
                loading: false
            }
        }
        case types.ADD: {
            return {
                ...state,
                hcpList: [action.payload, ...(state.hcpList || [])],
                count: state.count + 1
            }
        }
        case types.UPDATE: {
            return {
                ...state,
                hcpList: replaceItemInList(state.hcpList, action.payload)
            }
        }
        case types.DELETE: {
            const newList = removeItemFromList(state.hcpList, deletedItem)
            deletedItem = {}
            return {
                ...state,
                hcpList: newList,
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