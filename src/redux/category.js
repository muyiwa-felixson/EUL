import { replaceItemInList, removeItemFromList, getFormData } from '../utils'
import { CATEGORIES_URL, MAX_PAGE_SIZE } from '../utils/constants'

export const types = {
    REQUEST_ALL: 'category.request.all',
    REQUEST_ERROR: 'category.request.error',
    START_LOADING: 'category.start_loading',
    CATEGORY_CHANGED: 'category.changed',
    ADD: 'category.add',
    UPDATE: 'category.update',
    DELETE: 'category.delete'
}

export const INITIAL_STATE = {
    categoryList: null,
    selectedCategory: null,
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

export const getCategories = () => dispatch => {
    processRequest(
        dispatch,
        {
            types: ['', types.REQUEST_ALL, types.REQUEST_ERROR],
            promise: client => client.get(
                `${CATEGORIES_URL}?limit=${MAX_PAGE_SIZE}`,
                { 'Content-Type': 'application/json' }
            )
        }
    )
}

export const addCategory = category => dispatch => {
    const formData = getFormData(category)
    processRequest(
        dispatch,
        {
            types: ['', types.ADD, types.REQUEST_ERROR],
            promise: client => client.post(
                CATEGORIES_URL,
                {},
                { data: formData },
                true
            )
        }
    )
}

export const editCategory = category => dispatch => {
    if (Array.isArray(category.photo) && category.photo.length){
        category.photo = category.photo[0]
    } else {
        delete category.photo
    }
    const updatedCategory = getFormData(category)
    processRequest(
        dispatch,
        {
            types: ['', types.UPDATE, types.REQUEST_ERROR],
            promise: client => client.put(
                `${CATEGORIES_URL}${category.id}/`,
                {},
                { data: updatedCategory },
                true
            )
        }
    )
}

export const deleteCategory = category => dispatch => {
    deletedItem = category
    processRequest(
        dispatch,
        {
            types: ['', types.DELETE, types.REQUEST_ERROR],
            promise: client => client.delete(
                `${CATEGORIES_URL}${category.id}/`,
                { 'Content-Type': 'application/json' }
            )
        }
    )
}

export const selectCategory = category => ({
    type: types.CATEGORY_CHANGED,
    payload: category
})

const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case types.REQUEST_ALL: {
            return {
                ...state,
                categoryList: action.payload.results,
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
        case types.CATEGORY_CHANGED: {
            return {
                ...state,
                selectedCategory: action.payload
            }
        }
        case types.ADD: {
            return {
                ...state,
                categoryList: [action.payload, ...(state.categoryList || [])],
                count: state.count + 1
            }
        }
        case types.UPDATE: {
            return {
                ...state,
                categoryList: replaceItemInList(state.categoryList, action.payload)
            }
        }
        case types.DELETE: {
            const newList = removeItemFromList(state.categoryList, deletedItem)
            deletedItem = {}
            return {
                ...state,
                categoryList: newList,
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