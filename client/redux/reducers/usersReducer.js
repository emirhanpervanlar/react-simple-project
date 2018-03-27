export default function reducer(state= {
    users :{
        id:null,
        name:null,
        age:null
    },
    fetching:false,
    fetched : false,
    error : null
},action) {
    switch(action.type){
        case "FETCH_USERS":{
            return{
                users : action.payload,
                fetching : true
            }
        }
        case "FETCH_USERS_FULFILLED":{
            return{
                users:action.payload,
                fetching : false,
                fetched : true,
            }
        }
        case "FETCH_USERS_REJECTED":{
            return{
                fetching:false,
                error : action.payload
            }
        }
    }
    return state;
}