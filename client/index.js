import React from "react";
import ReactDOM from 'react-dom';
import MainRoute from './routes/routes';
import {createStore,combineReducers,applyMiddleware} from 'redux';

const reducers = (initialState=0,action)=>{
    switch (action.type){
        case "INC":
            return initialState+1;
            break;
        case "DESC":
            return initialState-1;
            break;
        case "E":
            throw new Error("AAAA !!!")
            break;
    }
    return initialState;
}

const logger = (store) => (next) => (action) => {
    console.log("action fired",action);
    next(action)
}

const error = (store) => (next) => (action) => {
   try {
       next(action)
   }catch(e){
       console.log("UPPSS !! ",e)
   }

}
const middleware = applyMiddleware(logger,error);
const store = createStore(reducers,1,middleware);

store.subscribe(()=>{
    console.log("store changed",store.getState());
});

store.dispatch({type:"INC"});
store.dispatch({type:"INC"});
store.dispatch({type:"INC"});
store.dispatch({type:"INC"});
store.dispatch({type:"INC"});
store.dispatch({type:"E"});

ReactDOM.render(<MainRoute store={store} />,document.getElementById('root'));



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




