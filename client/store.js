import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import math from "./redux/reducers/mathReducer"
import user from "./redux/reducers/userReducer"

export default createStore(
    combineReducers({math, user}),
    {},
    applyMiddleware(thunk)
)