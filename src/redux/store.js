import { combineReducers, createStore } from "redux";
import productReducer from './reducers/product.reducer';

const reducer = combineReducers({
    products: productReducer
})

const store = createStore(reducer);

export default store;