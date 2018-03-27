
export function fetchUsers() {
    return{
        type:"FETCH_USERS_FULFILLED",
        payload:{
            name : "will",
            age:35
        }
    }
}