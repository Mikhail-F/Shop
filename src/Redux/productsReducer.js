import {checkInternetConnect, getData} from "../api/api";

const ADD_PRODUCTS = 'ADD_PRODUCTS'
const SET_ERROR = 'SET_ERROR'
const DELETE_ERROR = 'DELETE_ERROR'

const initialState = {
    products: [],
    loading: true,
    error: null
}

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCTS: {
            return {
                ...state,
                products: action.newProducts,
                loading: false
            }
        }
        case SET_ERROR: {
            return {
                ...state,
                error: action.message,
                loading: false
            }
        }
        case DELETE_ERROR: {
            return {
                ...state,
                error: null,
                loading: true
            }
        }
        default:
            return state
    }
}

export const getProducts = () => async dispatch => {
    // Проверка подключения к интернету
    let checked = await checkInternetConnect()
    if (!checked) {
        let message = 'Нет подключения к интернету'
        return dispatch({type: SET_ERROR, message})
    }
    getData.getProducts()
        .then(result => {
            let newProducts = result.data.items
            dispatch({type: ADD_PRODUCTS, newProducts})
        })
        .catch(() => {
            let message = 'Данные не были загружены'
            dispatch({type: SET_ERROR, message})
        })
}

export const deleteError = () => ({type: DELETE_ERROR})

export default productsReducer