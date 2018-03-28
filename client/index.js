import React from "react";
import ReactDOM from 'react-dom';
import MainRoute from './routes/routes';
import {Provider} from "react-redux";
import store from './store';
ReactDOM.render(
    <Provider store={store}>
    <MainRoute/>
    </Provider>
        ,document.getElementById('root'));


//REDUX TEST 6
// import logger from 'redux-logger';
// import thunk from 'redux-thunk';
// import axios from 'axios';
// import promise from "redux-promise-middleware";
// const initalState = {
//     fetching : false,
//     fetched : false,
//     users : [],
//     error : null,
// }
//
// const reducer = (state=initalState,action)=>{
//     switch(action.type){
//         case "FETCH_USERS_PENDING":
//             return{...state,fetching:true}
//             break;
//         case "FETCH_USERS_REJECTED":
//             return{...state,fetching:false,error:action.payload}
//             break;
//         case "FETCH_USERS_FULFILLED":
//             return{...state,fetching:false,fetched:true,users:action.payload}
//             break;
//     }
//     return state;
// }
//
// const middleware = applyMiddleware(promise(),thunk,logger());
// const store = createStore(reducer,middleware);
//
//
// store.dispatch({
//     type : "FETCH_USERS",
//     payload : axios.post("http://localhost:3300/v1/auth/users")
// });


// REDUX TEST 5 - AXİOS
// import logger from 'redux-logger';
// import thunk from 'redux-thunk';
// import axios from 'axios';
// const initalState = {
//     fetching : false,
//     fetched : false,
//     users : [],
//     error : null,
// }
//
// const reducer = (state=initalState,action)=>{
//     switch(action.type){
//         case "FETCH_USERS_START":
//             return{fetching:true}
//             break;
//         case "FETCH_USERS_ERROR":
//             return{fetching:false,error:action.payload}
//             break;
//         case "RECEIVE_USERS":
//             return{fetching:false,fetched:true,users:action.payload}
//             break;
//     }
//     return state;
// }
//
// const middleware = applyMiddleware(thunk,logger());
// const store = createStore(reducer,middleware);
//
// store.dispatch((dispatch)=>{
//     dispatch({type:"FETCH_USERS_START"})
//     axios
//         .post("http://localhost:3300/v1/auth/users")
//         .then((response)=>{
//             dispatch({type:"RECEIVE_USERS",payload :response.data})
//         })
//         .catch((err)=>{
//             dispatch({type:"FETCH_USERS_ERROR",payload:err})
//         })
//
//
// })

// REDUX TEST 4
//  import thunk from 'redux-thunk';
// const reducer = (state={},action)=>{
//     return state;
// }
//
// const middleware = applyMiddleware(thunk,logger());
// const store = createStore(reducer,middleware);
//
// store.dispatch((dispatch)=>{
//     dispatch({type:"FOO"})
//     dispatch({type:"BAR"})
//
// })

// REDUX TEST 3

// import logger from 'redux-logger';
// const reducer = (state={},action)=>{
//     return state;
// }
//
// const middleware = applyMiddleware(logger());
// const store = createStore(reducer,middleware);
//
// store.dispatch({type:"FOO"})

// REDUX TEST 2

// const reducers = (initialState=0,action)=>{
//     switch (action.type){
//         case "INC":
//             return initialState+1;
//             break;
//         case "DESC":
//             return initialState-1;
//             break;4
//         case "E":
//             throw new Error("AAAA !!!")
//             break;
//     }
//     return initialState;
// }
//
// const logger = (store) => (next) => (action) => {
//     console.log("action fired",action);
//     next(action)
// }
//
// const error = (store) => (next) => (action) => {
//    try {
//        next(action)
//    }catch(e){
//        console.log("UPPSS !! ",e)
//    }
//
// }
// const middleware = applyMiddleware(logger,error);
// const store = createStore(reducers,1,middleware);
//
// store.subscribe(()=>{
//     console.log("store changed",store.getState());
// });
//
// store.dispatch({type:"INC"});
// store.dispatch({type:"INC"});
// store.dispatch({type:"INC"});
// store.dispatch({type:"INC"});
// store.dispatch({type:"INC"});
// store.dispatch({type:"E"});


// REDUX TEST 1
// const userReducer = (state={},action) => {
//     switch (action.type){
//         case "CHANGE_NAME":
//             state = {name : action.payload}
//             break;
//         case "CHANGE_AGE":
//             state={name:state.name,age : action.payload};
//             break;
//     }
//     return state;
// }
//
// const tweetsReducer = (state={},action) => {
//     return state;
// }
//
// const reducers = combineReducers({
//     user : userReducer,
//     tweets : tweetsReducer
// })

// store.subscribe(()=>{
//     console.log("store changed",store.getState())
// })
//
// store.dispatch({
//     type:"CHANGE_NAME",
//     payload:"Emirhan"
// });
// store.dispatch({
//     type:"CHANGE_AGE",
//     payload:25
// });
// store.dispatch({
//     type:"CHANGE_AGE",
//     payload:30
// });




