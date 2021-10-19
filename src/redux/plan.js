import { replaceItemInList, removeItemFromList } from '../utils'
import { PLANS_URL } from '../utils/constants'

export const types = {
    REQUEST_ALL: 'plan.request.all',
    REQUEST_ERROR: 'plan.request.error',
    START_LOADING: 'plan.start_loading',
    PLAN_CHANGED: 'plan.changed',
    CLEAR_LIST: 'plan.clear.list',
    ADD: 'plan.add',
    UPDATE: 'plan.update',
    DELETE: 'plan.delete'
}

export const INITIAL_STATE = {
    planList: null,
    selectedPlan: null,
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

export const getPlans = () => dispatch => {
    processRequest(
        dispatch,
        {
            types: ['', types.REQUEST_ALL, types.REQUEST_ERROR],
            promise: client => client.get(
                PLANS_URL,
                { 'Content-Type': 'application/json' }
            )
        }
    )
}

export const getPlansByHmo = hmoId => dispatch => {
    processRequest(
        dispatch,
        {
            types: ['', types.REQUEST_ALL, types.REQUEST_ERROR],
            promise: client => client.get(
                `${PLANS_URL}?hmo=${hmoId}`,
                { 'Content-Type': 'application/json' }
            )
        }
    )
}

export const addPlan = plan => dispatch => {
    processRequest(
        dispatch,
        {
            types: ['', types.ADD, types.REQUEST_ERROR],
            promise: client => client.post(
                PLANS_URL,
                { 'Content-Type': 'application/json' },
                { data: plan }
            )
        }
    )
}

export const editPlan = plan => dispatch => {
    processRequest(
        dispatch,
        {
            types: ['', types.UPDATE, types.REQUEST_ERROR],
            promise: client => client.put(
                `${PLANS_URL}${plan.id}/`,
                { 'Content-Type': 'application/json' },
                { data: plan },
            )
        }
    )
}

export const deletePlan = plan => dispatch => {
    deletedItem = plan
    processRequest(
        dispatch,
        {
            types: ['', types.DELETE, types.REQUEST_ERROR],
            promise: client => client.delete(
                `${PLANS_URL}${plan.id}/`,
                { 'Content-Type': 'application/json' }
            )
        }
    )
}

export const selectPlan = plan => ({
    type: types.PLAN_CHANGED,
    payload: plan
})

export const clearPlans = () => ({
    type: types.CLEAR_LIST,
    payload: []
})

const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case types.REQUEST_ALL: {
            return {
                ...state,
                planList: action.payload.results,
                loading: false,
                count: action.payload.count
            }
        }
        case types.CLEAR_LIST: {
            return {
                ...state,
                planList: action.payload,
                count: 0
            }
        }
        case types.START_LOADING: {
            return {
                ...state,
                loading: true
            }
        }
        case types.PLAN_CHANGED: {
            return {
                ...state,
                selectedPlan: action.payload
            }
        }
        case types.ADD: {
            return {
                ...state,
                planList: [action.payload, ...(state.planList || [])],
                count: state.count + 1
            }
        }
        case types.UPDATE: {
            return {
                ...state,
                planList: replaceItemInList(state.planList, action.payload)
            }
        }
        case types.DELETE: {
            const newList = removeItemFromList(state.planList, deletedItem)
            deletedItem = {}
            return {
                ...state,
                planList: newList,
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