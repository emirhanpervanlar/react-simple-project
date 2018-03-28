import axios from 'axios';
export function fetchAllUsers() {
    return function (dispatch) {
        axios.post("http://localhost:3300/v1/auth/users")
            .then((response)=>{
                dispatch({type:"FETCH_ALL_USER_FULFILLED",payload:response.data})
            })
            .catch((err)=>{
                dispatch({type:"FETCH_ALL_USER_REJECTED",payload:err})
            })
    }
}


export function fetchUsers() {
    return{
        type:"FETCH_USERS_FULFILLED",
        payload:{
            name : "will",
            email:"test",
            age:35
        }
    }
}

// export function setUserName(name) {
//     return{
//         type:"SET_USER_NAME",
//         payload:name
//     }
//
// }