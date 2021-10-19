import { replaceItemInList, removeItemFromList, getFormData } from '../utils'
import { HMOS_URL } from '../utils/constants'

export const types = {
    REQUEST_ALL: 'hmo.request.all',
    REQUEST_ERROR: 'hmo.request.error',
    START_LOADING: 'hmo.start_loading',
    HMO_CHANGED: 'hmo.changed',
    ADD: 'hmo.add',
    UPDATE: 'hmo.update',
    DELETE: 'hmo.delete'
}

export const INITIAL_STATE = {
    hmoList: null,
    selectedHmo: null,
    loading: false,
    count: 0
}

let deletedItem = {}

const processRequest = (dispatch, request) => {
    dispatch({
        type: types.START_LOADING
    })
    dispatch(request)
}

export const getHmos = () => dispatch => {
    processRequest(
        dispatch,
        {
            types: ['', types.REQUEST_ALL, types.REQUEST_ERROR],
            promise: client => client.get(
                HMOS_URL,
                { 'Content-Type': 'application/json' }
            )
        }
    )
}

export const addHMO = hmo => dispatch => {
    const formData = getFormData(hmo)
    processRequest(
        dispatch,
        {
            types: ['', types.ADD, types.REQUEST_ERROR],
            promise: client => client.post(
                HMOS_URL,
                {},
                { data: formData },
                true
            )
        }
    )
}

export const editHMO = hmo => dispatch => {
    if (Array.isArray(hmo.photo) && hmo.photo.length){
        hmo.photo = hmo.photo[0]
    } else {
        delete hmo.photo
    }
    if (Array.isArray(hmo.photo_banner) && hmo.photo_banner.length){
        hmo.photo_banner = hmo.photo_banner[0]
    } else {
        delete hmo.photo_banner
    }
    const updatedHmo = getFormData(hmo)
    processRequest(
        dispatch,
        {
            types: ['', types.UPDATE, types.REQUEST_ERROR],
            promise: client => client.put(
                `${HMOS_URL}${hmo.id}/`,
                {},
                { data: updatedHmo },
                true
            )
        }
    )
}

export const deleteHMO = hmo => dispatch => {
    deletedItem = hmo
    processRequest(
        dispatch,
        {
            types: ['', types.DELETE, types.REQUEST_ERROR],
            promise: client => client.delete(
                `${HMOS_URL}${hmo.id}/`,
                { 'Content-Type': 'application/json' }
            )
        }
    )
}

export const selectHmo = hmo => ({
    type: types.HMO_CHANGED,
    payload: hmo
})

const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case types.REQUEST_ALL: {
            return {
                ...state,
                hmoList: action.payload.results,
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
        case types.HMO_CHANGED: {
            return {
                ...state,
                selectedHmo: action.payload
            }
        }
        case types.ADD: {
            return {
                ...state,
                hmoList: [action.payload, ...(state.hmoList || [])],
                count: state.count + 1
            }
        }
        case types.UPDATE: {
            return {
                ...state,
                hmoList: replaceItemInList(state.hmoList, action.payload)
            }
        }
        case types.DELETE: {
            const newList = removeItemFromList(state.hmoList, deletedItem)
            deletedItem = {}
            return {
                ...state,
                hmoList: newList,
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