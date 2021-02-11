import {applyMiddleware, combineReducers, createStore} from "redux";
import Thunk from 'redux-thunk'

import productsReducer from "./productsReducer";

const reducers = combineReducers({
    products: productsReducer
})

const store = createStore(reducers, applyMiddleware(Thunk))

export default store
