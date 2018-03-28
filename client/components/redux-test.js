import React from "react";
import {connect} from "react-redux";
import Main from "./Main"
import {fetchAllUsers} from "../redux/actions/userActions";

@connect((store)=>{
    return{
        user : store.user.user
    };
})

class ReactTest extends React.Component{
    constructor(props){
        super(props);
    }


    fetchAllUsers(){
        this.props.dispatch(fetchAllUsers());
    }
    render(){
        const allUser = this.props.user;
        console.log(allUser.length);
        if(!allUser.length){

            return (
                <Main>
                    <div className="container">
                        <button onClick={this.fetchAllUsers.bind(this)}>Load User</button>

                    </div>
                </Main>
            )
        }

            const mappedUser = allUser.map(user => <li>{user.email}</li>);
            return(
                <Main>
                    <div className="container">
                        {mappedUser}
                    </div>
                </Main>
            )



    }
}


// REDUX TEK VERİ ÇEKME
// componentWillMount(){
//     this.props.dispatch(fetchUsers())
// }
// @connect((store)=>{
//     return{
//         user : store.user.user
//     };
// })
//<h1>Username : {this.props.user.name}</h1>
//
// const mapStateToProps = (state) =>{
//     return{
//         user: state.user,
//         math: state.math
//     };
// };
//
// const mapDispatchToProps =(dispatch) => {
//     return{
//         setName:(name)=>{
//             dispatch(setName(name));
//         }
//     };
// };
export default ReactTest;