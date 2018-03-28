export default function reducer(state= {
    user :[],
    fetching:false,
    fetched : false,
    error : null
},action) {
    switch(action.type){
        case "FETCH_USERS":{
            return{
                ...state,
                fetching : true
            }
        }
        case "FETCH_USERS_FULFILLED":{
            return{
                ...state,
                fetching : false,
                fetched : true,
                user:action.payload
            }
        }
        case "FETCH_USERS_REJECTED":{
            return{
                ...state,
                fetching:false,
                error : action.payload
            }
        }
        case "FETCH_ALL_USER":{
            return{
                ...state,
                fetching : true
            }
        }
        case "FETCH_ALL_USER_FULFILLED":{
            return{
                ...state,
                fetching : false,
                fetched : true,
                user:action.payload
            }
        }
        case "FETCH_ALL_USER_REJECTED":{
            return{
                ...state,
                fetching:false,
                error : action.payload
            }
        }
    }
    return state;
}